'use client';
import { ChargerType } from '../../data/stations';

export interface Filters {
  chargerType: ChargerType | 'all';
  availability: 'all' | 'available' | 'busy' | 'full';
  city: string;
}

interface Props {
  filters: Filters;
  cities: string[];
  onChange: (f: Filters) => void;
  resultCount: number;
}

const TYPE_OPTIONS: { value: Filters['chargerType']; label: string; sub: string; color: string }[] = [
  { value: 'all', label: '全部', sub: '',       color: '#374151' },
  { value: 'V4',  label: 'V4',  sub: '350kW',  color: '#7c3aed' },
  { value: 'V3',  label: 'V3',  sub: '250kW',  color: '#2563eb' },
  { value: 'V2',  label: 'V2',  sub: '150kW',  color: '#6b7280' },
  { value: 'AC',  label: '慢充', sub: '≤22kW', color: '#16a34a' },
];

const AVAIL_OPTIONS: { value: Filters['availability']; label: string; dot: string }[] = [
  { value: 'all',       label: '全部',   dot: '#9ca3af' },
  { value: 'available', label: '有空位', dot: '#22c55e' },
  { value: 'busy',      label: '快滿了', dot: '#f97316' },
  { value: 'full',      label: '無空位', dot: '#ef4444' },
];

export default function FilterBar({ filters, cities, onChange, resultCount }: Props) {
  const pill = (active: boolean, color: string, onClick: () => void, children: React.ReactNode) => (
    <button onClick={onClick} style={{
      display: 'inline-flex', alignItems: 'center', gap: 5,
      padding: '6px 13px', borderRadius: 999, border: 'none', cursor: 'pointer',
      fontSize: 13, fontWeight: active ? 600 : 400, flexShrink: 0,
      background: active ? color : 'white',
      color: active ? 'white' : '#374151',
      boxShadow: active ? `0 2px 8px ${color}55` : '0 1px 3px rgba(0,0,0,0.08)',
      transition: 'all 0.15s',
      whiteSpace: 'nowrap',
    }}>
      {children}
    </button>
  );

  return (
    <div style={{
      position: 'fixed', top: 64, left: 0, right: 0, zIndex: 999,
      background: 'rgba(249,250,251,0.95)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(0,0,0,0.06)',
    }}>
      {/* Hide native scrollbar across all browsers */}
      <style>{`
        .filter-scroll::-webkit-scrollbar { display: none; }
        .filter-scroll { scrollbar-width: none; -ms-overflow-style: none; }
      `}</style>

      <div className="filter-scroll" style={{
        display: 'flex', alignItems: 'center', gap: 6,
        overflowX: 'auto', padding: '9px 16px',
      }}>
        {/* Charger type */}
        <span style={{ fontSize: 11, color: '#9ca3af', flexShrink: 0, marginRight: 2 }}>充電速度</span>
        {TYPE_OPTIONS.map(opt => pill(
          filters.chargerType === opt.value,
          opt.color,
          () => onChange({ ...filters, chargerType: opt.value }),
          <>{opt.label}{opt.sub && <span style={{ fontSize: 11, opacity: 0.85 }}>{opt.sub}</span>}</>
        ))}

        <div style={{ width: 1, height: 20, background: '#e5e7eb', flexShrink: 0, margin: '0 2px' }} />

        {/* Availability */}
        <span style={{ fontSize: 11, color: '#9ca3af', flexShrink: 0, marginRight: 2 }}>狀態</span>
        {AVAIL_OPTIONS.map(opt => pill(
          filters.availability === opt.value,
          opt.dot,
          () => onChange({ ...filters, availability: opt.value }),
          <>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: filters.availability === opt.value ? 'white' : opt.dot, display: 'inline-block' }} />
            {opt.label}
          </>
        ))}

        <div style={{ width: 1, height: 20, background: '#e5e7eb', flexShrink: 0, margin: '0 2px' }} />

        {/* City */}
        <select
          value={filters.city}
          onChange={e => onChange({ ...filters, city: e.target.value })}
          style={{
            flexShrink: 0, padding: '6px 12px', borderRadius: 999,
            border: '1px solid #e5e7eb', fontSize: 13, color: '#374151',
            background: 'white', cursor: 'pointer', outline: 'none',
            boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
          }}
        >
          <option value="all">全台灣</option>
          {cities.map(c => <option key={c} value={c}>{c}</option>)}
        </select>

        {/* Result count */}
        <span style={{ fontSize: 12, color: '#9ca3af', flexShrink: 0, marginLeft: 4, whiteSpace: 'nowrap' }}>
          找到 <strong style={{ color: '#374151' }}>{resultCount}</strong> 站
        </span>
      </div>
    </div>
  );
}
