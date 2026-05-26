'use client';
import { useEffect, useRef } from 'react';
import { Station, getAvailStatus } from '../../data/stations';

interface Props {
  stations: Station[];
  selectedStation: Station | null;
  onSelectStation: (s: Station) => void;
}

export default function MapView({ stations, selectedStation, onSelectStation }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);
  const markersRef = useRef<Map<string, any>>(new Map());

  useEffect(() => {
    if (typeof window === 'undefined' || !containerRef.current || mapRef.current) return;
    (async () => {
      const L = (await import('leaflet')).default;
      const map = L.map(containerRef.current!, { center: [23.6978, 120.9605], zoom: 8, zoomControl: false });
      mapRef.current = map;
      L.control.zoom({ position: 'bottomright' }).addTo(map);
      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '© OpenStreetMap © CARTO', subdomains: 'abcd', maxZoom: 20,
      }).addTo(map);

      stations.forEach(station => {
        const av = getAvailStatus(station);
        const icon = L.divIcon({
          className: '',
          iconSize: [40, 40], iconAnchor: [20, 20],
          html: `
            <div style="width:40px;height:40px;position:relative;cursor:pointer">
              <div class="sc-inner" data-id="${station.id}" style="
                position:absolute;inset:0;background:white;border-radius:50%;
                border:2.5px solid #e5e7eb;
                box-shadow:0 2px 10px rgba(0,0,0,0.12);
                display:flex;align-items:center;justify-content:center;
                transition:transform 0.2s,border-color 0.2s,box-shadow 0.2s;
              ">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#111" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                </svg>
              </div>
              <div style="position:absolute;bottom:-1px;right:-1px;width:13px;height:13px;background:${av.color};border-radius:50%;border:2.5px solid white;"></div>
            </div>
          `,
        });
        const marker = L.marker([station.lat, station.lng], { icon }).addTo(map);
        marker.on('click', () => {
          onSelectStation(station);
          map.panTo([station.lat, station.lng], { animate: true, duration: 0.5 });
        });
        markersRef.current.set(station.id, marker);
      });
    })();
    return () => { mapRef.current?.remove(); mapRef.current = null; };
  }, []);

  // Update selected marker style
  useEffect(() => {
    markersRef.current.forEach((marker, id) => {
      const el = marker.getElement();
      if (!el) return;
      const inner = el.querySelector('.sc-inner') as HTMLElement;
      if (!inner) return;
      if (id === selectedStation?.id) {
        inner.style.transform = 'scale(1.35)';
        inner.style.borderColor = '#111827';
        inner.style.boxShadow = '0 4px 20px rgba(0,0,0,0.25)';
      } else {
        inner.style.transform = 'scale(1)';
        inner.style.borderColor = '#e5e7eb';
        inner.style.boxShadow = '0 2px 10px rgba(0,0,0,0.12)';
      }
    });
  }, [selectedStation]);

  return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
}
