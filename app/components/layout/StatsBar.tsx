'use client';
import { Station } from '../../data/stations';

export default function StatsBar({ stations }: { stations: Station[] }) {
  const available = stations.reduce((a, s) => a + s.availableStalls, 0);
  const total = stations.reduce((a, s) => a + s.totalStalls, 0);
  const utilization = total > 0 ? Math.round(((total - available) / total) * 100) : 0;
  const v4Count = stations.filter(s => s.chargerType === 'V4').length;
  const networkCount = new Set(stations.map(s => s.network)).size;

  const stat = (label: string, value: string | number, color?: string, last = false) => (
    <div style={{ textAlign: 'center', padding: '10px 14px', borderRight: last ? 'none' : '1px solid rgba(0,0,0,0.06)' }}>
      <div style={{ fontSize: 18, fontWeight: 700, color: color ?? '#111827', lineHeight: 1 }}>{value}</div>
      <div style={{ fontSize: 10, color: '#9ca3af', marginTop: 3, whiteSpace: 'nowrap' }}>{label}</div>
    </div>
  );

  return (
    <div style={{
      position: 'fixed', bottom: 20, left: 16, zIndex: 1000,
      background: 'rgba(255,255,255,0.96)', backdropFilter: 'blur(12px)',
      borderRadius: 16, boxShadow: '0 4px 20px rgba(0,0,0,0.1)', border: '1px solid rgba(0,0,0,0.06)',
      display: 'flex', alignItems: 'center', overflow: 'hidden',
    }}>
      {stat('充電站', stations.length)}
      {stat('可用格位', available, '#16a34a')}
      {stat('使用率', `${utilization}%`)}
      {stat('V4 超充', v4Count, '#7c3aed')}
      {stat('充電品牌', networkCount, '#2563eb', true)}
    </div>
  );
}
