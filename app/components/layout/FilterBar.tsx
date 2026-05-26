'use client';
import { ChargerType } from '../../data/stations';
import { Zap } from 'lucide-react';

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

const TYPE_OPTIONS: { value: Filters['chargerType']; label: string; kw: string }[] = [
  { value: 'all',  label: '全部', kw: '' },
  { value: 'V4',   label: 'V4',   kw: '350kW' },
  { value: 'V3',   label: 'V3',   kw: '250kW' },
  { value: 'V2',   label: 'V2',   kw: '150kW' },
];

const AVAIL_OPTIONS: { value: Filters['availability']; label: string; dot: string }[] = [
  { value: 'all',       label: '全部',   dot: '#9ca3af' },
  { value: 'available', label: '有空位', dot: '#22c55e' },
  { value: 'busy',      label: '快滿了', dot: '#f97316' },
  { value: 'full',      label: '無空位', dot: '#ef4444' },
];

export default function FilterBar({ filters, cities, onChange, resultCount }: Props) {
  const pill = (active: boolean, onClick: () => void, children: React.ReactNode) => (
    <button onClick={onClick} style={{
      display: 'inline-flex', alignItems: 'center', gap: 5,
      padding: '7px 14px', borderRadius: 999, border: 'none', cursor: 'pointer',
      fontSize: 13, fontWeight: active ? 600 : 400,
      background: active ? '#111827' : 'white',
      color: active ? 'white' : '#374151',
      boxShadow: active ? '0 2px 8px rgba(0,0,0,0.2)' : '0 1px 4px rgba(0,0,0,0.08)',
      transition: 'all 0.18s',
      whiteSpace: 'nowrap',
    }}>
      {children}
    </button>
  );

  return (
    <div style={{
      position: 'fixed', top: 64, left: 0, right: 0, zIndex: 999,
      background: 'rgba(249,250,251,0.92)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid #f3f4f6',
      padding: '10px 16px',
    }}>
      <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 8 }}>

        {/* Row 1: Charger type */}
        <div style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 2 }}>
          <span style={{ fontSize: 12, color: '#9ca3af', alignSelf: 'center', flexShrink: 0, marginRight: 2 }}>充電器</span>
          {TYPE_OPTIONS.map(opt => pill(
            filters.chargerType === opt.value,
            () => onChange({ ...filters, chargerType: opt.value }),
            <>
              {opt.value !== 'all' && <Zap size={11} />}
              {opt.label}
              {opt.kw && <span style={{ fontSize: 11, opacity: 0.75 }}>{opt.kw}</span>}
            </>
          ))}

          <div style={{ width: 1, background: '#e5e7eb', margin: '0 4px', flexShrink: 0 }} />

          <span style={{ fontSize: 12, color: '#9ca3af', alignSelf: 'center', flexShrink: 0, marginRight: 2 }}>狀態</span>
          {AVAIL_OPTIONS.map(opt => pill(
            filters.availability === opt.value,
            () => onChange({ ...filters, availability: opt.value }),
            <>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: opt.dot, display: 'inline-block' }} />
              {opt.label}
            </>
          ))}

          <div style={{ width: 1, background: '#e5e7eb', margin: '0 4px', flexShrink: 0 }} />

          {/* City */}
          <select
            value={filters.city}
            onChange={e => onChange({ ...filters, city: e.target.value })}
            style={{
              padding: '7px 12px', borderRadius: 999, border: '1px solid #e5e7eb',
              fontSize: 13, color: '#374151', background: 'white', cursor: 'pointer',
              outline: 'none', boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
            }}
          >
            <option value="">全台灣</option>
            {cities.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>

        {/* Result count */}
        <div style={{ fontSize: 12, color: '#9ca3af' }}>
          找到 <strong style={{ color: '#374151' }}>{resultCount}</strong> 座充電站
        </div>
      </div>
    </div>
  );
}
