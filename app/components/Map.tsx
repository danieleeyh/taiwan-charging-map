"use client";

import { useEffect, useRef } from "react";
import type { ChargingStation } from "../data/stations";

interface MapProps {
  stations: ChargingStation[];
  selectedId: string | null;
  onSelectStation: (id: string) => void;
}

export default function Map({ stations, selectedId, onSelectStation }: MapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<{ map: any; L: any } | null>(null);
  const markersRef = useRef<Record<string, any>>({});
  const isInitialized = useRef(false);
  const onSelectRef = useRef(onSelectStation);
  onSelectRef.current = onSelectStation;

  useEffect(() => {
    if (isInitialized.current || !containerRef.current) return;
    isInitialized.current = true;

    (async () => {
      const L = (await import("leaflet")).default;

      if (!document.getElementById("leaflet-css")) {
        const link = document.createElement("link");
        link.id = "leaflet-css";
        link.rel = "stylesheet";
        link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
        document.head.appendChild(link);
      }

      const map = L.map(containerRef.current!, {
        center: [23.8, 121.0],
        zoom: 8,
        zoomControl: true,
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map);

      mapRef.current = { map, L };

      stations.forEach((station) => {
        const icon = L.divIcon({
          className: "",
          html: `<div style="width:11px;height:11px;background:#dc2626;border:2px solid white;border-radius:50%;box-shadow:0 1px 4px rgba(0,0,0,0.4)"></div>`,
          iconSize: [11, 11],
          iconAnchor: [5, 5],
        });

        const marker = L.marker([station.lat, station.lng], { icon }).addTo(map);
        marker.bindPopup(
          `<div style="font-family:system-ui,sans-serif;font-size:13px;line-height:1.6;min-width:180px">
            <div style="font-weight:600;margin-bottom:2px">${station.name}</div>
            <div style="color:#6b7280;margin-bottom:4px">${station.address}</div>
            <div style="color:${station.available > 0 ? "#16a34a" : "#dc2626"}">${station.available} of ${station.connectors} connectors available</div>
          </div>`
        );
        marker.on("click", () => onSelectRef.current(station.id));
        markersRef.current[station.id] = marker;
      });
    })();

    return () => {
      if (mapRef.current) {
        mapRef.current.map.remove();
        mapRef.current = null;
      }
      isInitialized.current = false;
    };
  }, []);

  useEffect(() => {
    if (!selectedId || !mapRef.current) return;
    const marker = markersRef.current[selectedId];
    if (marker) {
      mapRef.current.map.setView(marker.getLatLng(), 13, { animate: true });
      marker.openPopup();
    }
  }, [selectedId]);

  return <div ref={containerRef} style={{ height: "100%", width: "100%" }} />;
}
