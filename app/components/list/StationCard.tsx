'use client';
import { Zap, MapPin, Star, Plug } from 'lucide-react';
import { Station, getAvailStatus, getChargerStyle, ConnectorType } from '../../data/stations';

const CONNECTOR_COLORS: Record<ConnectorType, { bg: string; text: string }> = {
  CCS2:    { bg: '#eff6ff', text: '#2563eb' },
  CHAdeMO: { bg: '#fffbeb', text: '#d97706' },
  NACS:    { bg: '#fef2f2', text: '#dc2626' },
  Type2:   { bg: '#f0fdf4', text: '#16a34a' },
};

const NETWORK_COLORS: Record<string, string> = {
  Tesla: '#dc2626', Evalue: '#2563eb', 'ForMosa EV': '#16a34a', '自建': '#9ca3af', 'U-Power': '#7c3aed', '裕電能源': '#2563eb', '台灣中油': '#16a34a', '台灣電力': '#f59e0b', '停車場自建': '#6b7280',
};

export default function StationCard({ station, onSelect }: { station: Station; onSelect: (s: Station) => void }) {
  const av = getAvailStatus(station);
  const cs = getChargerStyle(station.chargerType);
  const ratio = station.availableStalls / station.totalStalls;
  const nc = NETWORK_COLORS[station.network] ?? '#6b7280';

  return (
    <div onClick={() => onSelect(station)} style={{ background: 'white', borderRadius: 18, padding: '16px 18px', cursor: 'pointer', border: '1px solid #f3f4f6', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', transition: 'transform 0.15s, box-shadow 0.15s' }}
      onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)'; }}
      onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = ''; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)'; }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
          <span style={{ padding: '3px 9px', borderRadius: 999, fontSize: 11, fontWeight: 600, background: cs.bg, color: cs.text, border: `1px solid ${cs.border}` }}>
            {station.chargerType} · {station.maxKw} kW
          </span>
          <span style={{ padding: '3px 9px', borderRadius: 999, fontSize: 11, fontWeight: 600, background: `${nc}15`, color: nc }}>
            {station.network}
          </span>
        </div>
        <span style={{ fontSize: 11, fontWeight: 600, color: av.text, background: av.bg, padding: '3px 9px', borderRadius: 999, whiteSpace: 'nowrap', marginLeft: 8 }}>
          {av.label}
        </span>
      </div>

      <div style={{ fontSize: 16, fontWeight: 700, color: '#111827', marginBottom: 5, lineHeight: 1.3 }}>{station.name}</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: '#9ca3af', marginBottom: 12 }}>
        <MapPin size={11} />{station.city} · {station.address.slice(0, 18)}…
      </div>

      {/* Connectors */}
      <div style={{ display: 'flex', gap: 5, marginBottom: 12 }}>
        {station.connectors.map(c => {
          const s = CONNECTOR_COLORS[c];
          return <span key={c} style={{ display: 'inline-flex', alignItems: 'center', gap: 3, padding: '2px 8px', borderRadius: 6, fontSize: 11, fontWeight: 600, background: s.bg, color: s.text }}><Plug size={9} />{c === 'NACS' ? 'Tesla NACS' : c}</span>;
        })}
      </div>

      {/* Progress bar */}
      <div style={{ marginBottom: 10 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginBottom: 5 }}>
          <span style={{ color: '#9ca3af' }}>格位使用</span>
          <span style={{ fontWeight: 600, color: '#374151' }}>{station.availableStalls}/{station.totalStalls}</span>
        </div>
        <div style={{ height: 5, background: '#f3f4f6', borderRadius: 3, overflow: 'hidden' }}>
          <div style={{ height: '100%', width: `${ratio * 100}%`, background: av.color, borderRadius: 3, transition: 'width 0.3s' }} />
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: '#9ca3af' }}>
        {station.rating && <span style={{ display: 'flex', alignItems: 'center', gap: 3 }}><Star size={11} fill="#fbbf24" color="#fbbf24" />{station.rating}</span>}
        <span>{station.openHours}</span>
        {station.pricePerKwh && <span>NT$ {station.pricePerKwh}/kWh</span>}
      </div>
    </div>
  );
}
