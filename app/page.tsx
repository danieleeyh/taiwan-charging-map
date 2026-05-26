'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { stations, Station } from './data/stations';
import StationPanel from './components/StationPanel';
import Header from './components/Header';
import StatsBar from './components/StatsBar';

const MapView = dynamic(() => import('./components/MapView'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-gray-50 flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 border-2 border-gray-900 border-t-transparent rounded-full animate-spin" />
        <p className="text-sm text-gray-400">載入地圖中…</p>
      </div>
    </div>
  ),
});

export default function Home() {
  const [selected, setSelected] = useState<Station | null>(null);
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-gray-100">
      <MapView stations={stations} selectedStation={selected} onSelectStation={setSelected} />
      <Header stations={stations} onSelect={setSelected} />
      <StatsBar stations={stations} />
      <StationPanel station={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
