'use client';

import { useState, useMemo } from 'react';
import dynamic from 'next/dynamic';
import { stations, Station, getAvailStatus } from './data/stations';
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
        <div style={{
          width: 32, height: 32, border: '2px solid #111', borderTopColor: 'transparent',
          borderRadius: '50%', animation: 'spin 0.8s linear infinite'
        }} />
        <p style={{ fontSize: 14, color: '#9ca3af' }}>載入地圖中…</p>
      </div>
    </div>
  ),
});

const DEFAULT_FILTERS: Filters = {
  chargerType: 'all',
  availability: 'all',
  city: 'all',
};

const HEADER_H = 64;
const FILTER_H = 52;
const TOP_OFFSET = HEADER_H + FILTER_H;

export default function Home() {
  const [selected, setSelected] = useState<Station | null>(null);
  const [view, setView] = useState<'map' | 'list'>('map');
  const [filters, setFilters] = useState<Filters>(DEFAULT_FILTERS);

  const cities = useMemo(() => {
    const s = new Set(stations.map(s => s.city));
    return Array.from(s).sort();
  }, []);

  const filtered = useMemo(() => {
    return stations.filter(s => {
      if (filters.chargerType !== 'all' && s.chargerType !== filters.chargerType) return false;
      if (filters.city !== 'all' && s.city !== filters.city) return false;
      if (filters.availability !== 'all') {
        const avail = getAvailStatus(s);
        if (filters.availability === 'available' && avail.label === '無空位') return false;
        if (filters.availability === 'busy' && avail.label !== '快滿了') return false;
        if (filters.availability === 'full' && avail.label !== '無空位') return false;
      }
      return true;
    });
  }, [filters]);

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden', background: '#f3f4f6' }}>
      {view === 'map' && (
        <div style={{ position: 'absolute', inset: 0 }}>
          <MapView
            stations={filtered}
            selectedStation={selected}
            onSelectStation={setSelected}
          />
        </div>
      )}

      {view === 'list' && (
        <div style={{
          position: 'absolute',
          top: TOP_OFFSET,
          left: 0,
          right: 0,
          bottom: 0,
          overflowY: 'auto',
          background: '#f9fafb',
        }}>
          <StationList stations={filtered} onSelect={setSelected} />
        </div>
      )}

      <Header
        stations={stations}
        view={view}
        onViewChange={setView}
        onSelect={(s) => {
          setSelected(s);
          setView('map');
        }}
      />

      <FilterBar
        filters={filters}
        cities={cities}
        onChange={setFilters}
        resultCount={filtered.length}
      />

      {view === 'map' && (
        <StatsBar stations={filtered} />
      )}

      <StationPanel station={selected} onClose={() => setSelected(null)} />

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
