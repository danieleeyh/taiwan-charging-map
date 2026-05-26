'use client';
import { useState } from 'react';
import { Search, X, Zap, List, Map } from 'lucide-react';
import { Station, getAvailStatus } from '../../data/stations';

interface Props {
  stations: Station[];
  view: 'map' | 'list';
  onViewChange: (v: 'map' | 'list') => void;
  onSelect: (s: Station) => void;
}

export default function Header({ stations, view, onViewChange, onSelect }: Props) {
  const [q, setQ] = useState('');
  const [open, setOpen] = useState(false);

  const results = q.length >= 1
    ? stations.filter(s => s.name.includes(q) || s.city.includes(q) || s.address.includes(q)).slice(0, 6)
    : [];

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, padding: '12px 16px', pointerEvents: 'none' }}>
      <div style={{ maxWidth: 600, margin: '0 auto', display: 'flex', gap: 10, alignItems: 'center', pointerEvents: 'auto' }}>

        {/* Logo */}
        <div style={{
          width: 40, height: 40, borderRadius: 12, background: '#111827',
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
        }}>
          <Zap size={18} color="white" fill="white" />
        </div>

        {/* Search */}
        <div style={{ flex: 1, position: 'relative' }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 10,
            background: 'white', borderRadius: 14,
            boxShadow: '0 2px 16px rgba(0,0,0,0.12)', border: '1px solid #f3f4f6',
            padding: '10px 14px',
          }}>
            <Search size={15} color="#9ca3af" style={{ flexShrink: 0 }} />
            <input
              value={q}
              onChange={e => setQ(e.target.value)}
              onFocus={() => setOpen(true)}
              onBlur={() => setTimeout(() => setOpen(false), 150)}
              placeholder="搜尋超充站、城市…"
              style={{ flex: 1, fontSize: 14, color: '#374151', border: 'none', outline: 'none', background: 'transparent', minWidth: 0 }}
            />
            {q && (
              <button onClick={() => setQ('')} style={{ border: 'none', background: 'none', cursor: 'pointer', padding: 0, display: 'flex' }}>
                <X size={14} color="#9ca3af" />
              </button>
            )}
          </div>

          {open && results.length > 0 && (
            <div style={{
              position: 'absolute', top: 'calc(100% + 8px)', left: 0, right: 0,
              background: 'white', borderRadius: 16,
              boxShadow: '0 8px 32px rgba(0,0,0,0.14)', border: '1px solid #f3f4f6',
              overflow: 'hidden', zIndex: 1001,
            }}>
              {results.map(s => {
                const av = getAvailStatus(s);
                return (
                  <button key={s.id} onMouseDown={() => { onSelect(s); setQ(''); setOpen(false); }}
                    style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 12, padding: '11px 16px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
                    onMouseEnter={e => (e.currentTarget.style.background = '#f9fafb')}
                    onMouseLeave={e => (e.currentTarget.style.background = 'none')}
                  >
                    <div style={{ width: 36, height: 36, borderRadius: 10, background: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Zap size={14} color="#6b7280" />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 14, fontWeight: 500, color: '#111827', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{s.name}</div>
                      <div style={{ fontSize: 12, color: '#9ca3af', marginTop: 1 }}>{s.city} · {s.chargerType} · {s.maxKw} kW</div>
                    </div>
                    <span style={{ fontSize: 11, fontWeight: 600, color: av.text, background: av.bg, padding: '3px 8px', borderRadius: 999, whiteSpace: 'nowrap' }}>
                      {s.availableStalls}/{s.totalStalls}
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* View Toggle */}
        <div style={{
          display: 'flex', background: 'white', borderRadius: 14,
          boxShadow: '0 2px 16px rgba(0,0,0,0.12)', border: '1px solid #f3f4f6',
          overflow: 'hidden', flexShrink: 0,
        }}>
          {(['map', 'list'] as const).map(v => (
            <button key={v} onClick={() => onViewChange(v)} style={{
              width: 44, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center',
              border: 'none', cursor: 'pointer',
              background: view === v ? '#111827' : 'transparent',
              transition: 'background 0.2s',
            }}>
              {v === 'map' ? <Map size={16} color={view === v ? 'white' : '#6b7280'} /> : <List size={16} color={view === v ? 'white' : '#6b7280'} />}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
