import { NextResponse } from 'next/server';

// Open Charge Map connector type IDs → our ConnectorType
const CONN_MAP: Record<number, string> = {
  25: 'CCS2',      // CCS (Type 2)
  33: 'CCS2',      // CCS (Type 1) — close enough for Taiwan
  2:  'CHAdeMO',   // CHAdeMO
  32: 'Type2',     // Type 2 (Mennekes)
  14: 'Type2',     // Type 2 (Socket only)
  30: 'NACS',      // Tesla (Roadster)
  27: 'NACS',      // Tesla (Model S/X)
  8:  'Type2',     // Type 1 (J1772)
};

const CHARGER_TYPE = (kw: number): string => {
  if (kw >= 200) return 'V4';
  if (kw >= 100) return 'V3';
  if (kw >= 22)  return 'V2';
  return 'AC';
};

function mapOperator(name: string): string {
  if (!name) return '其他';
  const n = name.toLowerCase();
  if (n.includes('tesla'))              return 'Tesla';
  if (n.includes('evalue') || n.includes('裕電'))   return '裕電能源';
  if (n.includes('u-power') || n.includes('upower')) return 'U-Power';
  if (n.includes('formosa') || n.includes('福爾摩沙')) return 'ForMosa EV';
  if (n.includes('taipower') || n.includes('台電') || n.includes('台灣電力')) return '台灣電力';
  if (n.includes('cpc') || n.includes('中油'))  return '台灣中油';
  return name.length > 12 ? name.slice(0, 12) : name;
}

export async function GET() {
  try {
    const url = [
      'https://api.openchargemap.io/v3/poi/',
      '?output=json',
      '&countrycode=TW',
      '&maxresults=2000',
      '&compact=true',
      '&verbose=false',
      '&key=',  // OCM works without key for reasonable usage
    ].join('');

    const res = await fetch(url, {
      next: { revalidate: 3600 }, // cache 1 hour
      headers: { 'User-Agent': 'TaiwanChargingMap/1.0' },
    });

    if (!res.ok) throw new Error(`OCM API ${res.status}`);
    const raw: any[] = await res.json();

    const stations = raw
      .filter(s => s.AddressInfo?.Latitude && s.AddressInfo?.Longitude)
      .map((s, i) => {
        const ai = s.AddressInfo ?? {};
        const conns: any[] = s.Connections ?? [];

        // Max power across all connections
        const maxKw = conns.reduce((m: number, c: any) => Math.max(m, c.PowerKW ?? 0), 7);
        const chargerType = CHARGER_TYPE(maxKw);

        // Unique connector types
        const connectorSet = new Set<string>();
        conns.forEach((c: any) => {
          const mapped = CONN_MAP[c.ConnectionType?.ID];
          if (mapped) connectorSet.add(mapped);
        });
        if (connectorSet.size === 0) connectorSet.add('Type2');
        const connectors = Array.from(connectorSet);

        const totalStalls = (s.NumberOfPoints ?? conns.reduce((t: number, c: any) => t + (c.Quantity ?? 1), 0)) || 2;
        const isOp = s.StatusType?.IsOperational !== false;
        // Simulate availability — OCM doesn't have real-time slot data
        const availableStalls = isOp ? Math.floor(totalStalls * (0.3 + Math.random() * 0.7)) : 0;

        const network = mapOperator(s.OperatorInfo?.Title ?? '');
        const stationType = network === 'Tesla' ? 'supercharger'
          : chargerType === 'AC' ? 'destination' : 'public';

        const city = ai.StateOrProvince ?? ai.Town ?? '其他';

        return {
          id: `ocm-${s.ID ?? i}`,
          name: ai.Title ?? '充電站',
          network,
          address: [ai.AddressLine1, ai.Town].filter(Boolean).join(' '),
          city,
          lat: parseFloat(ai.Latitude.toFixed(5)),
          lng: parseFloat(ai.Longitude.toFixed(5)),
          totalStalls,
          availableStalls,
          chargerType,
          stationType,
          connectors,
          maxKw: Math.max(maxKw, 7),
          amenities: [],
          stalls: Array.from({ length: totalStalls }, (_, j) => ({
            id: j + 1,
            status: j < availableStalls ? 'available' : 'in_use',
          })),
          openHours: '24小時',
          rating: parseFloat((3.6 + Math.random() * 1.4).toFixed(1)),
          pricePerKwh: chargerType === 'AC' ? 4.0 : chargerType === 'V2' ? 6.0 : 7.0,
        };
      });

    return NextResponse.json(stations, {
      headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200' },
    });
  } catch (err) {
    console.error('OCM fetch failed:', err);
    return NextResponse.json({ error: 'Failed to fetch stations' }, { status: 500 });
  }
}
