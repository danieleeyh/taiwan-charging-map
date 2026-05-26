'use client';

import { useEffect, useRef } from 'react';
import { X, Zap, MapPin, Clock, Star, ChevronRight, Navigation, Utensils, Coffee, Building2, ShoppingBag, ParkingSquare, Wifi, Store, Bath } from 'lucide-react';
import { Station, AmenityType, amenityLabels } from '../data/stations';

function availInfo(available: number, total: number) {
  const r = available / total;
  if (r === 0) return { bg: 'bg-red-50', text: 'text-red-600', dot: 'bg-red-500', label: '無空位' };
  if (r < 0.3) return { bg: 'bg-orange-50', text: 'text-orange-600', dot: 'bg-orange-500', label: '快滿了' };
  if (r < 0.7) return { bg: 'bg-amber-50', text: 'text-amber-600', dot: 'bg-amber-500', label: '部分可用' };
  return { bg: 'bg-emerald-50', text: 'text-emerald-600', dot: 'bg-emerald-500', label: '空位充足' };
}

function stallColor(status: string) {
  if (status === 'available') return '#34d399';
  if (status === 'in_use') return '#60a5fa';
  if (status === 'faulted') return '#f87171';
  return '#d1d5db';
}

function chargerBadge(type: string) {
  if (type === 'V4') return 'bg-purple-100 text-purple-700 border-purple-200';
  if (type === 'V3') return 'bg-blue-100 text-blue-700 border-blue-200';
  return 'bg-gray-100 text-gray-600 border-gray-200';
}

const amenityIcons: Record<AmenityType, React.ReactNode> = {
  restaurant: <Utensils size={13} />, cafe: <Coffee size={13} />, hotel: <Building2 size={13} />,
  shopping: <ShoppingBag size={13} />, parking: <ParkingSquare size={13} />, restroom: <Bath size={13} />,
  wifi: <Wifi size={13} />, convenience: <Store size={13} />,
};

export default function StationPanel({ station, onClose }: { station: Station | null; onClose: () => void }) {
  const bodyRef = useRef<HTMLDivElement>(null);
  useEffect(() => { if (station) bodyRef.current?.scrollTo(0, 0); }, [station?.id]);

  const info = station ? availInfo(station.availableStalls, station.totalStalls) : null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 z-30 transition-opacity duration-300 pointer-events-none"
        style={{ background: station ? 'rgba(0,0,0,0.18)' : 'transparent', pointerEvents: station ? 'auto' : 'none' }}
      />

      {/* Panel — slides up on mobile, in from right on desktop */}
      <div
        className="fixed z-40 bg-white flex flex-col
          bottom-0 left-0 right-0 rounded-t-[28px] max-h-[88vh]
          md:top-0 md:bottom-0 md:right-0 md:left-auto md:w-[420px] md:rounded-none md:max-h-full
          shadow-2xl
          transition-transform duration-500"
        style={{
          transform: station
            ? 'translateY(0)'
            : 'translateY(100%)',
          willChange: 'transform',
        }}
      >
        {/* Drag pill */}
        <div className="flex justify-center pt-3 pb-0 md:hidden">
          <div className="w-9 h-1 rounded-full bg-gray-200" />
        </div>

        {station && (
          <>
            {/* Header */}
            <div className="px-6 pt-4 pb-5 border-b border-gray-100 flex-shrink-0">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2.5">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-semibold rounded-full border ${chargerBadge(station.chargerType)}`}>
                      <Zap size={10} />
                      {station.chargerType} · {station.maxKw} kW
                    </span>
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-semibold rounded-full ${info!.bg} ${info!.text}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${info!.dot} animate-pulse`} />
                      {info!.label}
                    </span>
                  </div>

                  <h2 className="text-[22px] font-bold text-gray-900 leading-tight">{station.name}</h2>

                  <div className="flex items-center gap-1.5 mt-1.5 text-sm text-gray-500">
                    <MapPin size={12} className="flex-shrink-0 text-gray-400" />
                    <span className="truncate">{station.address}</span>
                  </div>

                  <div className="flex items-center gap-3 mt-2">
                    {station.rating && (
                      <span className="flex items-center gap-1 text-sm font-medium text-gray-700">
                        <Star size={12} className="fill-amber-400 text-amber-400" />
                        {station.rating}
                      </span>
                    )}
                    <span className="flex items-center gap-1 text-sm text-gray-500">
                      <Clock size={12} className="text-gray-400" />
                      {station.openHours}
                    </span>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors mt-0.5"
                >
                  <X size={15} className="text-gray-600" />
                </button>
              </div>
            </div>

            {/* Scrollable content */}
            <div ref={bodyRef} className="flex-1 overflow-y-auto px-6 py-5 space-y-6">

              {/* Stall grid */}
              <div>
                <div className="flex items-baseline justify-between mb-3">
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest">充電格位</h3>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-gray-900">{station.availableStalls}</span>
                    <span className="text-sm text-gray-400"> / {station.totalStalls} 可用</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  {station.stalls.map((stall) => (
                    <div
                      key={stall.id}
                      title={`格位 ${stall.id}`}
                      style={{ background: stallColor(stall.status) }}
                      className="w-7 h-8 rounded-md transition-opacity hover:opacity-75"
                    />
                  ))}
                </div>

                <div className="flex items-center gap-4 text-xs text-gray-400">
                  {[['#34d399', '空位'], ['#60a5fa', '使用中'], ['#f87171', '故障']].map(([color, label]) => (
                    <span key={label} className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-sm inline-block" style={{ background: color }} />
                      {label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Power card */}
              <div className="rounded-2xl bg-gray-50 p-4 flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-400 mb-0.5">最大功率</p>
                  <p className="text-3xl font-bold text-gray-900 leading-none">
                    {station.maxKw}
                    <span className="text-base font-medium text-gray-400 ml-1">kW</span>
                  </p>
                  <p className="text-xs text-gray-400 mt-1.5">≈ {Math.round(station.maxKw / 5)} km / min</p>
                </div>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                  station.chargerType === 'V4' ? 'bg-purple-100' :
                  station.chargerType === 'V3' ? 'bg-blue-100' : 'bg-gray-100'
                }`}>
                  <Zap size={26} className={
                    station.chargerType === 'V4' ? 'text-purple-600' :
                    station.chargerType === 'V3' ? 'text-blue-600' : 'text-gray-500'
                  } fill="currentColor" />
                </div>
              </div>

              {/* Amenities */}
              {station.amenities.length > 0 && (
                <div>
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">周邊設施</h3>
                  <div className="flex flex-wrap gap-2">
                    {station.amenities.map((a) => (
                      <span key={a} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-100 rounded-full text-sm text-gray-600 shadow-sm hover:border-gray-200 transition-colors">
                        <span className="text-gray-400">{amenityIcons[a]}</span>
                        {amenityLabels[a]}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA buttons */}
              <div className="space-y-2.5 pb-6">
                <button className="w-full flex items-center justify-between bg-gray-900 text-white px-5 py-[14px] rounded-2xl font-medium hover:bg-gray-700 active:scale-[0.98] transition-all">
                  <span className="flex items-center gap-2.5">
                    <Navigation size={17} />
                    前往導航
                  </span>
                  <ChevronRight size={17} className="text-gray-500" />
                </button>
                <button className="w-full flex items-center justify-between bg-gray-50 text-gray-700 px-5 py-[14px] rounded-2xl font-medium border border-gray-100 hover:bg-gray-100 active:scale-[0.98] transition-all">
                  <span>充電費率 &amp; 詳細資訊</span>
                  <ChevronRight size={17} className="text-gray-400" />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
