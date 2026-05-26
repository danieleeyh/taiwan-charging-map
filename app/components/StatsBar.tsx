'use client';
import { Station } from '../data/stations';

export default function StatsBar({ stations }: { stations: Station[] }) {
  const total = stations.reduce((s, st) => s + st.totalStalls, 0);
  const avail = stations.reduce((s, st) => s + st.availableStalls, 0);
  const pct = Math.round(((total - avail) / total) * 100);
  return (
    <div className="absolute bottom-6 left-4 z-20 md:bottom-10">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 px-4 py-3 flex items-center gap-4">
        <div className="text-center">
          <p className="text-[10px] text-gray-400 mb-0.5 uppercase tracking-wider">充電站</p>
          <p className="text-xl font-bold text-gray-900 leading-none">{stations.length}</p>
        </div>
        <div className="w-px h-8 bg-gray-100" />
        <div className="text-center">
          <p className="text-[10px] text-gray-400 mb-0.5 uppercase tracking-wider">空位</p>
          <p className="text-xl font-bold text-emerald-500 leading-none">{avail}</p>
        </div>
        <div className="w-px h-8 bg-gray-100" />
        <div className="text-center">
          <p className="text-[10px] text-gray-400 mb-0.5 uppercase tracking-wider">使用率</p>
          <p className="text-xl font-bold text-gray-900 leading-none">{pct}%</p>
        </div>
      </div>
    </div>
  );
}
