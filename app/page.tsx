'use client';

import { useState, useMemo, useEffect } from 'react';
import dynamic from 'next/dynamic';
import type { Station } from './data/stations';
import { getAvailStatus } from './data/stations';
import { Filters } from './components/layout/FilterBar';
import Header from './components/layout/Header';
import FilterBar from './components/layout/FilterBar';
import StatsBar from './components/layout/StatsBar';
import StationPanel from './components/panel/StationPanel';
import StationList from './components/list/StationList';

const MapView = dynamic(() => import('./components/map/MapView'), {
  ssr: false,
  loading: () => (
    <div style={{ width: '100%', height: '100%', background: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
        <div style={{ width: 32, height: 32, border: '2px solid #111', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
        <p style={{ fontSize: 14, color: '#9ca3af' }}>載入地圖中…</p>
      </div>
    </div>
  ),
});

const DEFAULT_FILTERS: Filters = { chargerType: 'all', network: 'all', city: 'all' };

export default function Home() {
  const [allStations, setAllStations] = useState<Station[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selected, setSelected] = useState<Station | null>(null);
  const [view, setView] = useState<'map' | 'list'>('map');
  const [filters, setFilters] = useState<Filters>(DEFAULT_FILTERS);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);

  // Fetch real stations from OCM via our API route
  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    fetch('/api/stations')
      .then(r => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((data: Station[]) => {
        if (!cancelled) {
          setAllStations(data);
          setLoading(false);
        }
      })
      .catch(err => {
        if (!cancelled) {
          console.error(err);
          setError('無法載入充電站資料，請稍後再試');
          setLoading(false);
        }
      });
    return () => { cancelled = true; };
  }, []);

  const cities = useMemo(() => Array.from(new Set(allStations.map(s => s.city))).sort(), [allStations]);
  const networks = useMemo(() => Array.from(new Set(allStations.map(s => s.network))).sort(), [allStations]);

  const filtered = useMemo(() => allStations.filter(s => {
    if (filters.chargerType !== 'all' && s.chargerType !== filters.chargerType) return false;
    if (filters.network !== 'all' && s.network !== filters.network) return false;
    if (filters.city !== 'all' && s.city !== filters.city) return false;
    return true;
  }), [allStations, filters]);

  if (loading) return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#f9fafb', gap: 16 }}>
      <div style={{ width: 40, height: 40, border: '3px solid #111827', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
      <p style={{ fontSize: 15, color: '#6b7280' }}>正在載入台灣充電站資料…</p>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );

  if (error) return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#f9fafb', gap: 16 }}>
      <p style={{ fontSize: 16, color: '#dc2626' }}>{error}</p>
      <button onClick={() => window.location.reload()} style={{ padding: '10px 24px', background: '#111827', color: 'white', border: 'none', borderRadius: 10, cursor: 'pointer', fontSize: 14 }}>重新載入</button>
    </div>
  );

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden', background: '#f3f4f6' }}>

      {view === 'map' && (
        <div style={{ position: 'absolute', inset: 0 }}>
          <MapView stations={filtered} selectedStation={selected} onSelectStation={setSelected} userLocation={userLocation} />
        </div>
      )}

      {view === 'list' && (
        <div style={{ position: 'absolute', top: 114, left: 0, right: 0, bottom: 0, overflowY: 'auto', background: '#f9fafb' }}>
          <StationList stations={filtered} onSelect={s => { setSelected(s); setView('map'); }} />
        </div>
      )}

      <Header stations={allStations} view={view} onViewChange={setView}
        onSelect={s => { setSelected(s); setView('map'); }} onUserLocation={setUserLocation} />

      <FilterBar filters={filters} cities={cities} networks={networks} onChange={setFilters} resultCount={filtered.length} />

      {view === 'map' && <StatsBar stations={filtered} />}

      <StationPanel station={selected} onClose={() => setSelected(null)} />

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
