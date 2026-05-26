'use client';
import { Zap, MapPin, ChevronRight, Star } from 'lucide-react';
import { Station, getAvailStatus, getChargerStyle } from '../../data/stations';

interface Props {
  station: Station;
  onClick: () => void;
}

export default function StationCard({ station, onClick }: Props) {
  const av = getAvailStatus(station);
  const cs = getChargerStyle(station.chargerType);
  const usedStalls = station.totalStalls - station.availableStalls;

  return (
    <div
      onClick={onClick}
      style={{
        background: 'white', borderRadius: 16, border: '1px solid #f3f4f6',
        padding: '16px 18px', cursor: 'pointer',
        boxShadow: '0 1px 6px rgba(0,0,0,0.06)',
        transition: 'box-shadow 0.2s, transform 0.15s',
        display: 'flex', flexDirection: 'column', gap: 12,
      }}
      onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-1px)'; }}
      onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = '0 1px 6px rgba(0,0,0,0.06)'; (e.currentTarget as HTMLDivElement).style.transform = 'none'; }}
    >
      {/* Top row */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          {/* Badges */}
          <div style={{ display: 'flex', gap: 6, marginBottom: 8, flexWrap: 'wrap' }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 4,
              padding: '3px 9px', borderRadius: 999, fontSize: 11, fontWeight: 600,
              background: cs.bg, color: cs.text, border: `1px solid ${cs.border}`,
            }}>
              <Zap size={9} /> {station.chargerType} · {station.maxKw}kW
            </span>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 5,
              padding: '3px 9px', borderRadius: 999, fontSize: 11, fontWeight: 600,
              background: av.bg, color: av.text,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: av.color, display: 'inline-block' }} />
              {av.label}
            </span>
          </div>
          <h3 style={{ fontSize: 16, fontWeight: 700, color: '#111827', margin: 0, lineHeight: 1.3 }}>{station.name}</h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 4, fontSize: 13, color: '#9ca3af' }}>
            <MapPin size={11} />
            <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{station.address}</span>
          </div>
        </div>
        <ChevronRight size={18} color="#d1d5db" style={{ flexShrink: 0, marginTop: 2 }} />
      </div>

      {/* Stall progress bar */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
          <span style={{ fontSize: 12, color: '#9ca3af' }}>格位狀態</span>
          <span style={{ fontSize: 13, fontWeight: 600, color: '#111827' }}>
            {station.availableStalls} <span style={{ fontWeight: 400, color: '#9ca3af' }}>/ {station.totalStalls}</span>
          </span>
        </div>
        <div style={{ height: 6, background: '#f3f4f6', borderRadius: 999, overflow: 'hidden' }}>
          <div style={{
            height: '100%', borderRadius: 999,
            width: `${(station.availableStalls / station.totalStalls) * 100}%`,
            background: av.color,
            transition: 'width 0.3s',
          }} />
        </div>
      </div>

      {/* Bottom row */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 13, color: '#6b7280' }}>
          {station.rating && (
            <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontWeight: 500, color: '#374151' }}>
              <Star size={12} fill="#fbbf24" color="#fbbf24" /> {station.rating}
            </span>
          )}
          <span>{station.city}</span>
          <span>{station.openHours}</span>
        </div>
        {station.pricePerKwh && (
          <span style={{ fontSize: 13, fontWeight: 600, color: '#374151' }}>
            NT$ {station.pricePerKwh}<span style={{ fontWeight: 400, color: '#9ca3af' }}>/kWh</span>
          </span>
        )}
      </div>
    </div>
  );
}
