'use client';

import { useState } from 'react';
import { Search, Zap, X } from 'lucide-react';
import { Station } from '../data/stations';

export default function Header({ stations, onSelect }: { stations: Station[]; onSelect: (s: Station) => void }) {
  const [q, setQ] = useState('');
  const [open, setOpen] = useState(false);

  const results = q.length >= 1
    ? stations.filter(s => s.name.includes(q) || s.city.includes(q) || s.address.includes(q)).slice(0, 5)
    : [];

  const dotColor = (s: Station) => {
    const r = s.availableStalls / s.totalStalls;
    return r === 0 ? '#f87171' : r < 0.3 ? '#fb923c' : r < 0.7 ? '#fbbf24' : '#34d399';
  };

  return (
    <div style={{
      position: 'absolute',
      top: 16,
      left: 16,
      right: 16,
      zIndex: 1000,
    }}>
      {/* Desktop: center-aligned, max-width */}
      <div style={{ maxWidth: 480, margin: '0 auto', position: 'relative' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          background: 'white',
          borderRadius: 16,
          boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
          border: '1px solid #f3f4f6',
          padding: '10px 16px',
          gap: 12,
        }}>
          <div style={{
            width: 28, height: 28, borderRadius: 8,
            background: '#111',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
          }}>
            <Zap size={14} color="white" fill="white" />
          </div>

          <input
            value={q}
            onChange={e => setQ(e.target.value)}
            onFocus={() => setOpen(true)}
            onBlur={() => setTimeout(() => setOpen(false), 150)}
            placeholder="搜尋超充站、城市…"
            style={{
              flex: 1, fontSize: 14, color: '#374151',
              border: 'none', outline: 'none', background: 'transparent',
            }}
          />

          {q ? (
            <button onClick={() => setQ('')} style={{ display: 'flex', cursor: 'pointer', border: 'none', background: 'none', padding: 0 }}>
              <X size={15} color="#9ca3af" />
            </button>
          ) : (
            <Search size={15} color="#9ca3af" />
          )}
        </div>

        {open && results.length > 0 && (
          <div style={{
            position: 'absolute', top: '100%', marginTop: 8,
            left: 0, right: 0,
            background: 'white',
            borderRadius: 16,
            boxShadow: '0 8px 32px rgba(0,0,0,0.14)',
            border: '1px solid #f3f4f6',
            overflow: 'hidden',
            zIndex: 1001,
          }}>
            {results.map(s => (
              <button
                key={s.id}
                onMouseDown={() => { onSelect(s); setQ(''); setOpen(false); }}
                style={{
                  width: '100%', display: 'flex', alignItems: 'center', gap: 12,
                  padding: '12px 16px', background: 'none', border: 'none',
                  cursor: 'pointer', textAlign: 'left',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#f9fafb')}
                onMouseLeave={e => (e.currentTarget.style.background = 'none')}
              >
                <div style={{
                  width: 32, height: 32, borderRadius: 10,
                  background: '#f3f4f6', display: 'flex',
                  alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <Zap size={13} color="#6b7280" />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 14, fontWeight: 500, color: '#1f2937', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{s.name}</div>
                  <div style={{ fontSize: 12, color: '#9ca3af' }}>{s.city} · {s.chargerType} · {s.maxKw} kW</div>
                </div>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: dotColor(s), flexShrink: 0 }} />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
