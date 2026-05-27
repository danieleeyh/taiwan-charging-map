'use client';
import { useEffect, useRef } from 'react';
import { Station, getAvailStatus, getMarkerColor } from '../../data/stations';

interface Props {
  stations: Station[];
  selectedStation: Station | null;
  onSelectStation: (s: Station) => void;
  userLocation?: { lat: number; lng: number } | null;
}

export default function MapView({ stations, selectedStation, onSelectStation, userLocation }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);
  const lRef = useRef<any>(null);
  const clusterGroupRef = useRef<any>(null);
  const markersRef = useRef<Map<string, any>>(new Map());
  const userMarkerRef = useRef<any>(null);
  const onSelectRef = useRef(onSelectStation);
  const mapReadyRef = useRef(false);
  const stationsRef = useRef(stations);
  const selectedRef = useRef(selectedStation);

  useEffect(() => { onSelectRef.current = onSelectStation; });
  useEffect(() => { stationsRef.current = stations; }, [stations]);
  useEffect(() => { selectedRef.current = selectedStation; }, [selectedStation]);

  function buildMarkerHtml(station: Station, selected: boolean) {
    const av = getAvailStatus(station);
    const mc = getMarkerColor(station);
    const isAC = station.chargerType === 'AC' || station.stationType === 'destination';
    const borderColor = selected ? '#111827' : mc.border;
    const shadow = selected ? '0 4px 20px rgba(0,0,0,0.28)' : '0 2px 10px rgba(0,0,0,0.12)';
    const scale = selected ? 'scale(1.35)' : 'scale(1)';
    const radius = isAC ? '10px' : '50%';
    const iconSvg = isAC
      ? `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="${mc.stroke}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5v14"/><circle cx="12" cy="12" r="10"/></svg>`
      : `<svg width="14" height="14" viewBox="0 0 24 24" fill="${mc.stroke}" stroke="${mc.stroke}" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`;
    return `<div style="width:40px;height:40px;position:relative;cursor:pointer">
      <div class="sc-inner" data-id="${station.id}" style="
        position:absolute;inset:0;background:${mc.bg};border-radius:${radius};
        border:2.5px solid ${borderColor};box-shadow:${shadow};
        display:flex;align-items:center;justify-content:center;
        transform:${scale};transition:transform 0.2s,border-color 0.2s,box-shadow 0.2s;">
        ${iconSvg}
      </div>
      <div style="position:absolute;bottom:-1px;right:-1px;width:13px;height:13px;background:${av.color};border-radius:50%;border:2.5px solid white;"></div>
    </div>`;
  }

  function addMarkers(L: any, map: any, stns: Station[]) {
    // Remove old cluster group
    if (clusterGroupRef.current) {
      map.removeLayer(clusterGroupRef.current);
      clusterGroupRef.current = null;
    }
    markersRef.current.clear();

    // Build cluster group with custom styling
    const group = (L as any).markerClusterGroup({
      maxClusterRadius: 50,
      spiderfyOnMaxZoom: true,
      showCoverageOnHover: false,
      zoomToBoundsOnClick: true,
      iconCreateFunction: (cluster: any) => {
        const count = cluster.getChildCount();
        const size = count < 10 ? 36 : count < 50 ? 42 : 50;
        const bg = count < 10 ? '#2563eb' : count < 50 ? '#7c3aed' : '#dc2626';
        return L.divIcon({
          className: '',
          iconSize: [size, size],
          iconAnchor: [size/2, size/2],
          html: `<div style="
            width:${size}px;height:${size}px;border-radius:50%;
            background:${bg};color:white;font-size:13px;font-weight:700;
            display:flex;align-items:center;justify-content:center;
            border:3px solid white;box-shadow:0 3px 12px rgba(0,0,0,0.2);">
            ${count}
          </div>`,
        });
      },
    });

    stns.forEach(station => {
      const selected = selectedRef.current?.id === station.id;
      const icon = L.divIcon({ className: '', iconSize: [40,40], iconAnchor: [20,20], html: buildMarkerHtml(station, selected) });
      const marker = L.marker([station.lat, station.lng], { icon });
      marker.on('click', () => {
        onSelectRef.current(station);
        map.panTo([station.lat, station.lng], { animate: true, duration: 0.5 });
      });
      markersRef.current.set(station.id, marker);
      group.addLayer(marker);
    });

    map.addLayer(group);
    clusterGroupRef.current = group;
  }

  // Init map once
  useEffect(() => {
    if (typeof window === 'undefined' || !containerRef.current || mapRef.current) return;
    let mounted = true;
    (async () => {
      const L = (await import('leaflet')).default;
      // Load marker cluster plugin
      await import('leaflet.markercluster');
      if (!mounted || !containerRef.current) return;
      lRef.current = L;
      const map = L.map(containerRef.current, { center: [23.8, 120.9605], zoom: 8, zoomControl: false });
      mapRef.current = map;
      L.control.zoom({ position: 'bottomright' }).addTo(map);
      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '© OpenStreetMap © CARTO', subdomains: 'abcd', maxZoom: 20,
      }).addTo(map);
      mapReadyRef.current = true;
      addMarkers(L, map, stationsRef.current);
    })();
    return () => {
      mounted = false;
      mapRef.current?.remove();
      mapRef.current = null; lRef.current = null; mapReadyRef.current = false;
      clusterGroupRef.current = null;
    };
  }, []);

  // Rebuild markers when filtered stations change
  useEffect(() => {
    if (!mapReadyRef.current || !lRef.current || !mapRef.current) return;
    addMarkers(lRef.current, mapRef.current, stations);
  }, [stations]);

  // Update selected marker highlight
  useEffect(() => {
    markersRef.current.forEach((marker, id) => {
      const el = marker.getElement();
      if (!el) return;
      const inner = el.querySelector('.sc-inner') as HTMLElement | null;
      if (!inner) return;
      const station = stationsRef.current.find(s => s.id === id);
      if (!station) return;
      const mc = getMarkerColor(station);
      if (id === selectedStation?.id) {
        inner.style.transform = 'scale(1.35)';
        inner.style.borderColor = '#111827';
        inner.style.boxShadow = '0 4px 20px rgba(0,0,0,0.28)';
      } else {
        inner.style.transform = 'scale(1)';
        inner.style.borderColor = mc.border;
        inner.style.boxShadow = '0 2px 10px rgba(0,0,0,0.12)';
      }
    });
  }, [selectedStation]);

  // User location pulsing dot
  useEffect(() => {
    if (!mapReadyRef.current || !lRef.current || !mapRef.current) return;
    userMarkerRef.current?.remove();
    if (!userLocation) return;
    const L = lRef.current;
    const icon = L.divIcon({
      className: '',
      iconSize: [20, 20], iconAnchor: [10, 10],
      html: `<div style="width:20px;height:20px;position:relative">
        <div style="position:absolute;inset:0;border-radius:50%;background:rgba(37,99,235,0.2);animation:locpulse 1.6s ease-out infinite;"></div>
        <div style="position:absolute;inset:4px;border-radius:50%;background:#2563eb;border:2px solid white;box-shadow:0 2px 6px rgba(0,0,0,0.3);"></div>
      </div>`,
    });
    userMarkerRef.current = L.marker([userLocation.lat, userLocation.lng], { icon }).addTo(mapRef.current);
    mapRef.current.panTo([userLocation.lat, userLocation.lng], { animate: true, duration: 0.8 });
  }, [userLocation]);

  return (
    <>
      <div ref={containerRef} style={{ width: '100%', height: '100%' }} />
      <style>{`@keyframes locpulse{0%{transform:scale(.8);opacity:1}100%{transform:scale(2.8);opacity:0}}`}</style>
    </>
  );
}
