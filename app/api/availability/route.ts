import { NextResponse } from 'next/server';

// supercharge.info public API — Tesla real-time stall data
// Returns: [{siteId, status: {isOpen, availableStalls, totalStalls}}]
const SUPERCHARGE_SITES_URL   = 'https://supercharge.info/service/supercharger/allSites';
const SUPERCHARGE_STATUS_URL  = 'https://supercharge.info/service/supercharger/status';

// Taiwan gov open data — EV charging stations (includes some real-time)
// https://data.gov.tw/dataset/35234
const GOV_EV_URL = 'https://quality.data.gov.tw/dset/35234/r/download?s=0&l=100000&d=csv&t=0';

export interface StallAvailability {
  ocmId: string;      // matched back to our OCM station ID
  lat: number;
  lng: number;
  available: number;
  total: number;
  isOpen: boolean;
  source: 'tesla' | 'gov' | 'unknown';
}

function deg2rad(d: number) { return d * Math.PI / 180; }
function distKm(lat1: number, lng1: number, lat2: number, lng2: number) {
  const dLat = deg2rad(lat2 - lat1), dLng = deg2rad(lng2 - lng1);
  const a = Math.sin(dLat/2)**2 + Math.cos(deg2rad(lat1))*Math.cos(deg2rad(lat2))*Math.sin(dLng/2)**2;
  return 6371 * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}

export async function GET() {
  const results: StallAvailability[] = [];

  // ── Tesla via supercharge.info ──────────────────────────────────
  try {
    const [sitesRes, statusRes] = await Promise.all([
      fetch(SUPERCHARGE_SITES_URL, { next: { revalidate: 300 }, headers: { 'User-Agent': 'TaiwanChargingMap/1.0' } }),
      fetch(SUPERCHARGE_STATUS_URL, { next: { revalidate: 60 },  headers: { 'User-Agent': 'TaiwanChargingMap/1.0' } }),
    ]);

    if (sitesRes.ok && statusRes.ok) {
      const sites: any[]  = await sitesRes.json();
      const status: any[] = await statusRes.json();

      // Build status map by siteId
      const statusMap = new Map<number, any>();
      status.forEach((s: any) => statusMap.set(s.siteId, s.status));

      // Filter Taiwan sites
      const twSites = sites.filter((s: any) =>
        s.address?.country === 'Taiwan' || s.address?.country === 'TW'
      );

      twSites.forEach((site: any) => {
        const st = statusMap.get(site.id);
        if (!site.gps?.latitude || !site.gps?.longitude) return;
        results.push({
          ocmId: `tesla-${site.id}`,
          lat: site.gps.latitude,
          lng: site.gps.longitude,
          available: st?.availableStalls ?? 0,
          total: st?.totalStalls ?? site.stallCount ?? 0,
          isOpen: st?.isOpen ?? true,
          source: 'tesla',
        });
      });
    }
  } catch (e) {
    console.error('Tesla availability fetch failed:', e);
  }

  return NextResponse.json(results, {
    headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120' },
  });
}
