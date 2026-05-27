'use client';
import { Zap } from 'lucide-react';
import { Station } from '../../data/stations';
import StationCard from './StationCard';

export default function StationList({ stations, onSelect }: { stations: Station[]; onSelect: (s: Station) => void }) {
  if (stations.length === 0) return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', minHeight: 300, gap: 12, color: '#9ca3af' }}>
      <div style={{ width: 56, height: 56, borderRadius: 16, background: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Zap size={24} color="#d1d5db" />
      </div>
      <p style={{ fontSize: 15 }}>沒有符合條件的充電站</p>
    </div>
  );
  return (
    <div style={{ padding: '16px', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 14 }}>
      {stations.map(s => <StationCard key={s.id} station={s} onSelect={onSelect} />)}
    </div>
  );
}
