'use client';
import { useEffect, useRef, useState } from 'react';
import { X, Zap, MapPin, Clock, Star, ChevronRight, Navigation, Utensils, Coffee, Building2, ShoppingBag, ParkingSquare, Wifi, Store, Bath, DollarSign, Plug } from 'lucide-react';
import { Station, AmenityType, amenityLabels, getAvailStatus, getChargerStyle, ConnectorType } from '../../data/stations';

const amenityIcons: Record<AmenityType, React.ReactNode> = {
  restaurant: <Utensils size={13} />, cafe: <Coffee size={13} />, hotel: <Building2 size={13} />,
  shopping: <ShoppingBag size={13} />, parking: <ParkingSquare size={13} />, restroom: <Bath size={13} />,
  wifi: <Wifi size={13} />, convenience: <Store size={13} />,
};

const CONNECTOR_COLORS: Record<ConnectorType, { bg: string; text: string; label: string }> = {
  CCS2:    { bg: '#eff6ff', text: '#2563eb', label: 'CCS2' },
  CHAdeMO: { bg: '#fffbeb', text: '#d97706', label: 'CHAdeMO' },
  NACS:    { bg: '#fef2f2', text: '#dc2626', label: 'Tesla NACS' },
  Type2:   { bg: '#f0fdf4', text: '#16a34a', label: 'Type 2' },
};

const NETWORK_COLORS: Record<string, string> = {
  Tesla: '#dc2626', Evalue: '#2563eb', 'ForMosa EV': '#16a34a', '自建': '#9ca3af', 'U-Power': '#7c3aed', '裕電能源': '#2563eb', '台灣中油': '#16a34a', '台灣電力': '#f59e0b', '停車場自建': '#6b7280',
};

function StallGrid({ station }: { station: Station }) {
  const colors: Record<string, string> = { available: '#34d399', in_use: '#60a5fa', faulted: '#f87171', offline: '#d1d5db' };
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 10 }}>
        <span style={{ fontSize: 11, fontWeight: 600, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.1em' }}>充電格位</span>
        <div>
          <span style={{ fontSize: 24, fontWeight: 700, color: '#111827' }}>{station.availableStalls}</span>
          <span style={{ fontSize: 14, color: '#9ca3af' }}> / {station.totalStalls} 可用</span>
        </div>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: 10 }}>
        {station.stalls.map(stall => (
          <div key={stall.id} title={`格位 ${stall.id}`} style={{ width: 26, height: 32, borderRadius: 6, background: colors[stall.status] ?? '#d1d5db', transition: 'opacity 0.2s' }} />
        ))}
      </div>
      <div style={{ display: 'flex', gap: 16 }}>
        {[['#34d399','空位'],['#60a5fa','使用中'],['#f87171','故障']].map(([c,l]) => (
          <span key={l} style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 11, color: '#9ca3af' }}>
            <span style={{ width: 9, height: 9, borderRadius: 2, background: c, display: 'inline-block' }} />{l}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function StationPanel({ station, onClose }: { station: Station | null; onClose: () => void }) {
  const bodyRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (station) {
      const id = requestAnimationFrame(() => setVisible(true));
      bodyRef.current?.scrollTo(0, 0);
      return () => cancelAnimationFrame(id);
    } else { setVisible(false); }
  }, [station?.id]);

  const av = station ? getAvailStatus(station) : null;
  const cs = station ? getChargerStyle(station.chargerType) : null;
  const networkColor = station ? (NETWORK_COLORS[station.network] ?? '#6b7280') : '#6b7280';

  const chargerLabel: Record<string, string> = { V4: 'V4 超快充', V3: 'V3 快充', V2: 'V2 快充', AC: '目的地慢充' };

  return (
    <>
      {station && (
        <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.22)', zIndex: 1100, opacity: visible ? 1 : 0, transition: 'opacity 0.3s' }} />
      )}
      <div style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1200,
        background: 'white', borderRadius: '24px 24px 0 0',
        boxShadow: '0 -8px 40px rgba(0,0,0,0.15)',
        display: 'flex', flexDirection: 'column', maxHeight: '90vh',
        transform: visible ? 'translateY(0)' : 'translateY(100%)',
        transition: 'transform 0.45s cubic-bezier(0.32,0.72,0,1)',
        willChange: 'transform',
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', padding: '12px 0 4px' }}>
          <div style={{ width: 36, height: 4, borderRadius: 2, background: '#e5e7eb' }} />
        </div>

        {station && (
          <>
            {/* Header */}
            <div style={{ padding: '12px 20px 16px', borderBottom: '1px solid #f9fafb', flexShrink: 0 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  {/* Badges row 1: type + availability */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 8 }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '4px 10px', borderRadius: 999, fontSize: 12, fontWeight: 600, background: cs!.bg, color: cs!.text, border: `1px solid ${cs!.border}` }}>
                      <Zap size={10} fill={cs!.text} /> {chargerLabel[station.chargerType] ?? station.chargerType} · {station.maxKw} kW
                    </span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '4px 10px', borderRadius: 999, fontSize: 12, fontWeight: 600, background: av!.bg, color: av!.text }}>
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: av!.color, display: 'inline-block' }} />
                      {av!.label}
                    </span>
                  </div>
                  {/* Badges row 2: network + connectors */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: 10 }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, padding: '3px 9px', borderRadius: 999, fontSize: 11, fontWeight: 600, background: `${networkColor}15`, color: networkColor }}>
                      {station.network}
                    </span>
                    {station.connectors.map(c => {
                      const style = CONNECTOR_COLORS[c];
                      return (
                        <span key={c} style={{ display: 'inline-flex', alignItems: 'center', gap: 4, padding: '3px 9px', borderRadius: 999, fontSize: 11, fontWeight: 600, background: style.bg, color: style.text }}>
                          <Plug size={9} /> {style.label}
                        </span>
                      );
                    })}
                  </div>
                  <h2 style={{ fontSize: 20, fontWeight: 700, color: '#111827', margin: '0 0 6px', lineHeight: 1.25 }}>{station.name}</h2>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 13, color: '#9ca3af' }}>
                    <MapPin size={12} />
                    <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{station.address}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 6 }}>
                    {station.rating && (
                      <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 13, fontWeight: 500, color: '#374151' }}>
                        <Star size={12} fill="#fbbf24" color="#fbbf24" /> {station.rating}
                      </span>
                    )}
                    <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 13, color: '#9ca3af' }}>
                      <Clock size={12} /> {station.openHours}
                    </span>
                    {station.pricePerKwh && (
                      <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 13, color: '#9ca3af' }}>
                        <DollarSign size={12} /> NT$ {station.pricePerKwh}/kWh
                      </span>
                    )}
                  </div>
                </div>
                <button onClick={onClose} style={{ flexShrink: 0, width: 32, height: 32, borderRadius: '50%', background: '#f3f4f6', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <X size={15} color="#6b7280" />
                </button>
              </div>
            </div>

            {/* Body */}
            <div ref={bodyRef} style={{ flex: 1, overflowY: 'auto', padding: '20px 20px 0', display: 'flex', flexDirection: 'column', gap: 22 }}>
              <StallGrid station={station} />

              {/* Power card */}
              <div style={{ background: '#f9fafb', borderRadius: 16, padding: '16px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: 12, color: '#9ca3af', marginBottom: 2 }}>最大充電功率</div>
                  <div style={{ fontSize: 32, fontWeight: 700, color: '#111827', lineHeight: 1 }}>
                    {station.maxKw}<span style={{ fontSize: 15, fontWeight: 500, color: '#9ca3af', marginLeft: 4 }}>kW</span>
                  </div>
                  <div style={{ fontSize: 12, color: '#9ca3af', marginTop: 6 }}>
                    {station.chargerType === 'AC' ? `≈ ${station.maxKw} km / 小時` : `≈ ${Math.round(station.maxKw / 5)} km / 分鐘`}
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'flex-end' }}>
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: cs!.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Zap size={24} color={cs!.text} fill={cs!.text} />
                  </div>
                  {station.pricePerKwh && (
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: 11, color: '#9ca3af' }}>充電費率</div>
                      <div style={{ fontSize: 15, fontWeight: 700, color: '#111827' }}>NT$ {station.pricePerKwh}<span style={{ fontSize: 11, fontWeight: 400, color: '#9ca3af' }}>/kWh</span></div>
                    </div>
                  )}
                </div>
              </div>

              {/* Amenities */}
              {station.amenities.length > 0 && (
                <div>
                  <div style={{ fontSize: 11, fontWeight: 600, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10 }}>周邊設施</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {station.amenities.map(a => (
                      <span key={a} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '7px 14px', background: 'white', border: '1px solid #f3f4f6', borderRadius: 999, fontSize: 13, color: '#374151', boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
                        <span style={{ color: '#9ca3af' }}>{amenityIcons[a]}</span>{amenityLabels[a]}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Cost estimator */}
              {station.pricePerKwh && (
                <div style={{ background: '#f9fafb', borderRadius: 16, padding: '16px 18px' }}>
                  <div style={{ fontSize: 11, fontWeight: 600, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>充電費用估算</div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
                    {[[20,'20 kWh'],[50,'50 kWh'],[80,'80 kWh']].map(([kwh, label]) => (
                      <div key={kwh} style={{ textAlign: 'center', background: 'white', borderRadius: 10, padding: '10px 8px' }}>
                        <div style={{ fontSize: 11, color: '#9ca3af', marginBottom: 4 }}>{label}</div>
                        <div style={{ fontSize: 16, fontWeight: 700, color: '#111827' }}>NT$ {(Number(kwh) * station.pricePerKwh!).toFixed(0)}</div>
                        <div style={{ fontSize: 10, color: '#9ca3af', marginTop: 2 }}>≈ {Math.round(Number(kwh) * 6)} km</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTAs */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, paddingBottom: 28 }}>
                <button onClick={() => { window.open(`https://maps.google.com/?q=${station.lat},${station.lng}`, '_blank'); }}
                  style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#111827', color: 'white', padding: '15px 20px', borderRadius: 16, border: 'none', fontSize: 15, fontWeight: 600, cursor: 'pointer' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}><Navigation size={17} />前往導航</span>
                  <ChevronRight size={17} color="#6b7280" />
                </button>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                  <button onClick={() => { if (navigator.share) { navigator.share({ title: station.name, text: station.address, url: `https://maps.google.com/?q=${station.lat},${station.lng}` }); }}}
                    style={{ padding: '13px 16px', borderRadius: 14, border: '1px solid #f3f4f6', background: '#f9fafb', fontSize: 14, fontWeight: 500, color: '#374151', cursor: 'pointer' }}>
                    分享站點
                  </button>
                  <button style={{ padding: '13px 16px', borderRadius: 14, border: '1px solid #f3f4f6', background: '#f9fafb', fontSize: 14, fontWeight: 500, color: '#374151', cursor: 'pointer' }}>
                    加入最愛
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
