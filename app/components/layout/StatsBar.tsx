'use client';
import { Station } from '../../data/stations';

export default function StatsBar({ stations }: { stations: Station[] }) {
  const total = stations.reduce((s, st) => s + st.totalStalls, 0);
  const avail = stations.reduce((s, st) => s + st.availableStalls, 0);
  const usedPct = total > 0 ? Math.round(((total - avail) / total) * 100) : 0;
  const v4Count = stations.filter(s => s.chargerType === 'V4').length;

  const items = [
    { label: '充電站', value: stations.length, color: '#111827' },
    { label: '可用格位', value: avail, color: '#10b981' },
    { label: '使用率', value: `${usedPct}%`, color: '#111827' },
    { label: 'V4 超充', value: v4Count, color: '#7c3aed' },
  ];

  return (
    <div style={{ position: 'fixed', bottom: 24, left: 16, zIndex: 1000, pointerEvents: 'none' }}>
      <div style={{
        background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(12px)',
        borderRadius: 16, boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
        border: '1px solid rgba(255,255,255,0.8)',
        padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 16,
        pointerEvents: 'auto',
      }}>
        {items.map((item, i) => (
          <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: i > 0 ? 16 : 0 }}>
            {i > 0 && <div style={{ width: 1, height: 28, background: '#f3f4f6', marginRight: 16 }} />}
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 10, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 2 }}>{item.label}</div>
              <div style={{ fontSize: 20, fontWeight: 700, color: item.color, lineHeight: 1 }}>{item.value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
