'use client';

import { useState } from 'react';
import { Search, Zap, X } from 'lucide-react';
import { Station } from '../data/stations';

export default function Header({ stations, onSelect }: { stations: Station[]; onSelect: (s: Station) => void }) {
  const [q, setQ] = useState('');
  const [open, setOpen] = useState(false);

  const results = q.length >= 1
    ? stations.filter(s => s.name.includes(q) || s.city.includes(q) || s.address.includes(q)).slice(0, 5)
    : [];

  const dotClass = (s: Station) => {
    const r = s.availableStalls / s.totalStalls;
    return r === 0 ? 'bg-red-400' : r < 0.3 ? 'bg-orange-400' : r < 0.7 ? 'bg-amber-400' : 'bg-emerald-400';
  };

  return (
    <div className="absolute top-4 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:w-[480px] z-20">
      <div className="relative">
        <div className="flex items-center bg-white rounded-2xl shadow-lg border border-gray-100 px-4 py-3 gap-3">
          <div className="w-7 h-7 rounded-lg bg-gray-900 flex items-center justify-center flex-shrink-0">
            <Zap size={14} className="text-white" fill="white" />
          </div>
          <input
            value={q}
            onChange={e => setQ(e.target.value)}
            onFocus={() => setOpen(true)}
            onBlur={() => setTimeout(() => setOpen(false), 150)}
            placeholder="搜尋超充站、城市…"
            className="flex-1 text-sm text-gray-700 placeholder:text-gray-400 outline-none bg-transparent"
          />
          {q ? (
            <button onClick={() => setQ('')}><X size={15} className="text-gray-400 hover:text-gray-600" /></button>
          ) : (
            <Search size={15} className="text-gray-400 flex-shrink-0" />
          )}
        </div>

        {open && results.length > 0 && (
          <div className="absolute top-full mt-2 left-0 right-0 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            {results.map(s => (
              <button
                key={s.id}
                onMouseDown={() => { onSelect(s); setQ(''); setOpen(false); }}
                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors text-left"
              >
                <div className="w-8 h-8 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <Zap size={13} className="text-gray-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-800 truncate">{s.name}</p>
                  <p className="text-xs text-gray-400">{s.city} · {s.chargerType} · {s.maxKw} kW</p>
                </div>
                <span className={`w-2 h-2 rounded-full ${dotClass(s)} flex-shrink-0`} />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
