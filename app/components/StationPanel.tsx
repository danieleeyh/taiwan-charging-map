'use client';

import { useEffect, useRef, useState } from 'react';
import { X, Zap, MapPin, Clock, Star, ChevronRight, Navigation, Utensils, Coffee, Building2, ShoppingBag, ParkingSquare, Wifi, Store, Bath } from 'lucide-react';
import { Station, AmenityType, amenityLabels } from '../data/stations';

function availInfo(available: number, total: number) {
  const r = available / total;
  if (r === 0) return { bg: '#fef2f2', text: '#dc2626', dot: '#ef4444', label: '無空位' };
  if (r < 0.3) return { bg: '#fff7ed', text: '#ea580c', dot: '#f97316', label: '快滿了' };
  if (r < 0.7) return { bg: '#fffbeb', text: '#d97706', dot: '#f59e0b', label: '部分可用' };
  return { bg: '#f0fdf4', text: '#16a34a', dot: '#22c55e', label: '空位充足' };
}

function stallColor(status: string) {
  if (status === 'available') return '#34d399';
  if (status === 'in_use') return '#60a5fa';
  if (status === 'faulted') return '#f87171';
  return '#d1d5db';
}

function chargerColor(type: string) {
  if (type === 'V4') return { bg: '#f3e8ff', text: '#7c3aed' };
  if (type === 'V3') return { bg: '#eff6ff', text: '#2563eb' };
  return { bg: '#f9fafb', text: '#6b7280' };
}

const amenityIcons: Record<AmenityType, React.ReactNode> = {
  restaurant: <Utensils size={13} />, cafe: <Coffee size={13} />, hotel: <Building2 size={13} />,
  shopping: <ShoppingBag size={13} />, parking: <ParkingSquare size={13} />, restroom: <Bath size={13} />,
  wifi: <Wifi size={13} />, convenience: <Store size={13} />,
};

export default function StationPanel({ station, onClose }: { station: Station | null; onClose: () => void }) {
  const bodyRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  // Animate in/out with a small delay so CSS transition fires
  useEffect(() => {
    if (station) {
      // Trigger open on next frame
      requestAnimationFrame(() => setVisible(true));
      bodyRef.current?.scrollTo(0, 0);
    } else {
      setVisible(false);
    }
  }, [station?.id]);

  const info = station ? availInfo(station.availableStalls, station.totalStalls) : null;
  const cc = station ? chargerColor(station.chargerType) : null;

  return (
    <>
      {/* Backdrop */}
      {station && (
        <div
          onClick={onClose}
          style={{
            position: 'fixed', inset: 0,
            background: 'rgba(0,0,0,0.2)',
            zIndex: 1100,
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.3s ease',
          }}
        />
      )}

      {/* Panel */}
      <div
        style={{
          position: 'fixed',
          bottom: 0, left: 0, right: 0,
          zIndex: 1200,
          background: 'white',
          borderRadius: '24px 24px 0 0',
          boxShadow: '0 -4px 40px rgba(0,0,0,0.18)',
          display: 'flex',
          flexDirection: 'column',
          maxHeight: '88vh',
          transform: visible ? 'translateY(0)' : 'translateY(100%)',
          transition: 'transform 0.45s cubic-bezier(0.32,0.72,0,1)',
          willChange: 'transform',
        }}
      >
        {/* Drag handle */}
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 12, paddingBottom: 4 }}>
          <div style={{ width: 36, height: 4, borderRadius: 2, background: '#e5e7eb' }} />
        </div>

        {station && (
          <>
            {/* Header */}
            <div style={{ padding: '16px 24px 20px', borderBottom: '1px solid #f3f4f6', flexShrink: 0 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  {/* Badges */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 10 }}>
                    <span style={{
                      display: 'inline-flex', alignItems: 'center', gap: 5,
                      padding: '4px 10px', borderRadius: 999,
                      fontSize: 12, fontWeight: 600,
                      background: cc!.bg, color: cc!.text,
                      border: `1px solid ${cc!.text}30`,
                    }}>
                      <Zap size={10} /> {station.chargerType} · {station.maxKw} kW
                    </span>
                    <span style={{
                      display: 'inline-flex', alignItems: 'center', gap: 6,
                      padding: '4px 10px', borderRadius: 999,
                      fontSize: 12, fontWeight: 600,
                      background: info!.bg, color: info!.text,
                    }}>
                      <span style={{
                        width: 6, height: 6, borderRadius: '50%',
                        background: info!.dot,
                        animation: 'pulse 2s infinite',
                      }} />
                      {info!.label}
                    </span>
                  </div>

                  <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111827', margin: 0, lineHeight: 1.2 }}>
                    {station.name}
                  </h2>

                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 6, color: '#9ca3af', fontSize: 13 }}>
                    <MapPin size={12} />
                    <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{station.address}</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 8 }}>
                    {station.rating && (
                      <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 13, fontWeight: 500, color: '#374151' }}>
                        <Star size={12} fill="#fbbf24" color="#fbbf24" /> {station.rating}
                      </span>
                    )}
                    <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 13, color: '#9ca3af' }}>
                      <Clock size={12} /> {station.openHours}
                    </span>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  style={{
                    flexShrink: 0, width: 32, height: 32, borderRadius: '50%',
                    background: '#f3f4f6', border: 'none', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginTop: 2,
                  }}
                >
                  <X size={15} color="#6b7280" />
                </button>
              </div>
            </div>

            {/* Scrollable body */}
            <div ref={bodyRef} style={{ flex: 1, overflowY: 'auto', padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 24 }}>

              {/* Stall grid */}
              <div>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 12 }}>
                  <span style={{ fontSize: 11, fontWeight: 600, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.1em' }}>充電格位</span>
                  <div>
                    <span style={{ fontSize: 24, fontWeight: 700, color: '#111827' }}>{station.availableStalls}</span>
                    <span style={{ fontSize: 14, color: '#9ca3af' }}> / {station.totalStalls} 可用</span>
                  </div>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 12 }}>
                  {station.stalls.map(stall => (
                    <div
                      key={stall.id}
                      title={`格位 ${stall.id}`}
                      style={{
                        width: 28, height: 32, borderRadius: 6,
                        background: stallColor(stall.status),
                        transition: 'opacity 0.2s',
                      }}
                    />
                  ))}
                </div>

                <div style={{ display: 'flex', gap: 16 }}>
                  {[['#34d399', '空位'], ['#60a5fa', '使用中'], ['#f87171', '故障']].map(([color, label]) => (
                    <span key={label} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: '#9ca3af' }}>
                      <span style={{ width: 10, height: 10, borderRadius: 2, background: color, display: 'inline-block' }} />
                      {label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Power card */}
              <div style={{
                background: '#f9fafb', borderRadius: 16, padding: 16,
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              }}>
                <div>
                  <div style={{ fontSize: 12, color: '#9ca3af', marginBottom: 2 }}>最大功率</div>
                  <div style={{ fontSize: 32, fontWeight: 700, color: '#111827', lineHeight: 1 }}>
                    {station.maxKw}<span style={{ fontSize: 16, fontWeight: 500, color: '#9ca3af', marginLeft: 4 }}>kW</span>
                  </div>
                  <div style={{ fontSize: 12, color: '#9ca3af', marginTop: 6 }}>≈ {Math.round(station.maxKw / 5)} km / min</div>
                </div>
                <div style={{
                  width: 56, height: 56, borderRadius: 16,
                  background: cc!.bg,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Zap size={26} color={cc!.text} fill={cc!.text} />
                </div>
              </div>

              {/* Amenities */}
              {station.amenities.length > 0 && (
                <div>
                  <div style={{ fontSize: 11, fontWeight: 600, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>周邊設施</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {station.amenities.map(a => (
                      <span key={a} style={{
                        display: 'inline-flex', alignItems: 'center', gap: 6,
                        padding: '8px 14px', background: 'white', border: '1px solid #f3f4f6',
                        borderRadius: 999, fontSize: 13, color: '#374151',
                        boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
                      }}>
                        <span style={{ color: '#9ca3af' }}>{amenityIcons[a]}</span>
                        {amenityLabels[a]}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, paddingBottom: 24 }}>
                <button style={{
                  width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  background: '#111827', color: 'white',
                  padding: '15px 20px', borderRadius: 16, border: 'none',
                  fontSize: 15, fontWeight: 500, cursor: 'pointer',
                }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <Navigation size={17} /> 前往導航
                  </span>
                  <ChevronRight size={17} color="#6b7280" />
                </button>

                <button style={{
                  width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  background: '#f9fafb', color: '#374151',
                  padding: '15px 20px', borderRadius: 16,
                  border: '1px solid #f3f4f6',
                  fontSize: 15, fontWeight: 500, cursor: 'pointer',
                }}>
                  <span>充電費率 &amp; 詳細資訊</span>
                  <ChevronRight size={17} color="#9ca3af" />
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </>
  );
}
