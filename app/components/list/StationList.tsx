'use client';
import { Station } from '../../data/stations';
import StationCard from './StationCard';
import { Zap } from 'lucide-react';

interface Props {
  stations: Station[];
  onSelect: (s: Station) => void;
}

export default function StationList({ stations, onSelect }: Props) {
  if (stations.length === 0) {
    return (
      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        justifyContent: 'center', height: '100%', gap: 12, color: '#9ca3af',
      }}>
        <div style={{ width: 56, height: 56, borderRadius: 16, background: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Zap size={24} color="#d1d5db" />
        </div>
        <p style={{ fontSize: 15, margin: 0 }}>沒有符合條件的充電站</p>
        <p style={{ fontSize: 13, margin: 0 }}>請調整篩選條件</p>
      </div>
    );
  }

  return (
    <div style={{
      height: '100%', overflowY: 'auto',
      padding: '16px',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
      gap: 12,
      alignContent: 'start',
    }}>
      {stations.map(s => (
        <StationCard key={s.id} station={s} onClick={() => onSelect(s)} />
      ))}
    </div>
  );
}
