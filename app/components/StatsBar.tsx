'use client';
import { Station } from '../data/stations';

export default function StatsBar({ stations }: { stations: Station[] }) {
  const total = stations.reduce((s, st) => s + st.totalStalls, 0);
  const avail = stations.reduce((s, st) => s + st.availableStalls, 0);
  const usedPct = Math.round(((total - avail) / total) * 100);

  const col = (label: string, value: string | number, color = '#111827') => (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: 10, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 2 }}>{label}</div>
      <div style={{ fontSize: 20, fontWeight: 700, color, lineHeight: 1 }}>{value}</div>
    </div>
  );

  return (
    <div style={{ position: 'absolute', bottom: 24, left: 16, zIndex: 1000 }}>
      <div style={{
        background: 'white',
        borderRadius: 16,
        boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
        border: '1px solid #f3f4f6',
        padding: '12px 16px',
        display: 'flex',
        alignItems: 'center',
        gap: 16,
      }}>
        {col('充電站', stations.length)}
        <div style={{ width: 1, height: 32, background: '#f3f4f6' }} />
        {col('空位', avail, '#10b981')}
        <div style={{ width: 1, height: 32, background: '#f3f4f6' }} />
        {col('使用率', `${usedPct}%`)}
      </div>
    </div>
  );
}
