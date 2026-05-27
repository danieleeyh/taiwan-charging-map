import { NextResponse } from 'next/server';
import staticStations from '../../data/static-stations.json';

const CONN_MAP: Record<number, string> = {
  25: 'CCS2', 33: 'CCS2', 2: 'CHAdeMO', 32: 'Type2',
  14: 'Type2', 30: 'NACS', 27: 'NACS', 8: 'Type2',
};

const CHARGER_TYPE = (kw: number) =>
  kw >= 200 ? 'V4' : kw >= 100 ? 'V3' : kw >= 22 ? 'V2' : 'AC';

function mapOperator(name: string): string {
  if (!name) return '其他';
  const n = name.toLowerCase();
  if (n.includes('tesla'))                              return 'Tesla';
  if (n.includes('evalue') || n.includes('裕電'))       return '裕電能源';
  if (n.includes('u-power') || n.includes('upower'))   return 'U-Power';
  if (n.includes('formosa') || n.includes('福爾摩沙'))  return 'ForMosa EV';
  if (n.includes('taipower') || n.includes('台電'))     return '台灣電力';
  if (n.includes('cpc') || n.includes('中油'))          return '台灣中油';
  if (n.includes('parking') || n.includes('停車'))      return '停車場自建';
  return name.length > 14 ? name.slice(0, 14) : name;
}

async function fetchOCM(): Promise<any[]> {
  const key = process.env.OCM_API_KEY ?? '';
  const url = `https://api.openchargemap.io/v3/poi/?output=json&countrycode=TW&maxresults=2000&compact=true&verbose=false${key ? `&key=${key}` : ''}`;
  const res = await fetch(url, {
    next: { revalidate: 3600 },
    headers: { 'User-Agent': 'TaiwanChargingMap/1.0', 'Accept': 'application/json' },
  });
  if (!res.ok) throw new Error(`OCM ${res.status}`);
  const raw: any[] = await res.json();

  return raw
    .filter(s => s.AddressInfo?.Latitude && s.AddressInfo?.Longitude)
    .map((s, i) => {
      const ai = s.AddressInfo ?? {};
      const conns: any[] = s.Connections ?? [];
      const maxKw = conns.reduce((m: number, c: any) => Math.max(m, c.PowerKW ?? 0), 7);
      const connSet = new Set<string>();
      conns.forEach((c: any) => { const t = CONN_MAP[c.ConnectionType?.ID]; if (t) connSet.add(t); });
      if (!connSet.size) connSet.add('Type2');
      const totalStalls = (s.NumberOfPoints ?? conns.reduce((t: number, c: any) => t + (c.Quantity ?? 1), 0)) || 2;
      const chargerType = CHARGER_TYPE(maxKw);
      const network = mapOperator(s.OperatorInfo?.Title ?? '');
      return {
        id: `ocm-${s.ID ?? i}`,
        name: ai.Title ?? '充電站',
        network,
        address: [ai.AddressLine1, ai.Town].filter(Boolean).join(' '),
        city: ai.StateOrProvince ?? ai.Town ?? '其他',
        lat: parseFloat(Number(ai.Latitude).toFixed(5)),
        lng: parseFloat(Number(ai.Longitude).toFixed(5)),
        totalStalls,
        availableStalls: Math.floor(totalStalls * (0.3 + Math.random() * 0.7)),
        chargerType,
        stationType: network === 'Tesla' ? 'supercharger' : chargerType === 'AC' ? 'destination' : 'public',
        connectors: Array.from(connSet),
        maxKw: Math.max(maxKw, 7),
        amenities: [],
        stalls: Array.from({ length: totalStalls }, (_: unknown, j: number) => ({ id: j + 1, status: j < Math.floor(totalStalls * 0.5) ? 'available' : 'in_use' })),
        openHours: '24小時',
        rating: parseFloat((3.6 + Math.random() * 1.4).toFixed(1)),
        pricePerKwh: chargerType === 'AC' ? 4.0 : chargerType === 'V2' ? 6.0 : 7.0,
        _source: 'ocm',
      };
    });
}

export async function GET() {
  // Try OCM first (real addresses + coordinates)
  try {
    const ocmData = await fetchOCM();
    if (ocmData.length > 0) {
      console.log(`OCM: ${ocmData.length} Taiwan stations`);
      return NextResponse.json(ocmData, {
        headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200', 'X-Source': 'ocm' },
      });
    }
  } catch (e) {
    console.error('OCM failed, falling back to static:', e);
  }

  // Fallback: static data (urban-anchored coords, always works)
  console.log(`Static fallback: ${staticStations.length} stations`);
  return NextResponse.json(staticStations, {
    headers: { 'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600', 'X-Source': 'static' },
  });
}
