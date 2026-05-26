"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { sampleStations, type ChargingStation } from "./data/stations";

const Map = dynamic(() => import("./components/Map"), {
  ssr: false,
  loading: () => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        color: "#9ca3af",
        fontSize: 14,
        fontFamily: "system-ui, sans-serif",
      }}
    >
      Loading map...
    </div>
  ),
});

export default function Home() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const filtered: ChargingStation[] = sampleStations.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.city.toLowerCase().includes(search.toLowerCase()) ||
      s.address.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        color: "#111827",
      }}
    >
      {/* Header */}
      <header
        style={{
          height: 52,
          borderBottom: "1px solid #e5e7eb",
          display: "flex",
          alignItems: "center",
          paddingInline: 24,
          background: "white",
          flexShrink: 0,
        }}
      >
        <span
          style={{ fontSize: 15, fontWeight: 600, letterSpacing: "-0.01em" }}
        >
          Taiwan EV Charging Map
        </span>
      </header>

      {/* Body */}
      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        {/* Sidebar */}
        <aside
          style={{
            width: 300,
            borderRight: "1px solid #e5e7eb",
            display: "flex",
            flexDirection: "column",
            background: "white",
            flexShrink: 0,
            overflow: "hidden",
          }}
        >
          {/* Search */}
          <div
            style={{ padding: "12px 16px", borderBottom: "1px solid #e5e7eb" }}
          >
            <input
              type="search"
              placeholder="Search by name or city"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                width: "100%",
                padding: "7px 10px",
                fontSize: 13,
                border: "1px solid #d1d5db",
                borderRadius: 6,
                outline: "none",
                boxSizing: "border-box",
                background: "#f9fafb",
                fontFamily: "inherit",
              }}
            />
          </div>

          {/* Count */}
          <div
            style={{
              padding: "8px 16px",
              borderBottom: "1px solid #f3f4f6",
              fontSize: 12,
              color: "#6b7280",
            }}
          >
            {filtered.length} stations
          </div>

          {/* List */}
          <div style={{ flex: 1, overflowY: "auto" }}>
            {filtered.length === 0 ? (
              <div
                style={{
                  padding: 24,
                  textAlign: "center",
                  fontSize: 13,
                  color: "#9ca3af",
                }}
              >
                No stations found
              </div>
            ) : (
              filtered.map((station) => (
                <div
                  key={station.id}
                  onClick={() =>
                    setSelectedId(
                      station.id === selectedId ? null : station.id
                    )
                  }
                  style={{
                    padding: "12px 16px",
                    borderBottom: "1px solid #f3f4f6",
                    cursor: "pointer",
                    background:
                      selectedId === station.id ? "#eff6ff" : "transparent",
                    borderLeft:
                      selectedId === station.id
                        ? "3px solid #2563eb"
                        : "3px solid transparent",
                  }}
                >
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 500,
                      marginBottom: 2,
                      color: "#111827",
                    }}
                  >
                    {station.name}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: "#6b7280",
                      marginBottom: 4,
                    }}
                  >
                    {station.city}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: station.available > 0 ? "#16a34a" : "#dc2626",
                    }}
                  >
                    {station.available} of {station.connectors} connectors
                    available
                  </div>
                </div>
              ))
            )}
          </div>
        </aside>

        {/* Map */}
        <main style={{ flex: 1, position: "relative", overflow: "hidden" }}>
          <Map
            stations={sampleStations}
            selectedId={selectedId}
            onSelectStation={setSelectedId}
          />
        </main>
      </div>
    </div>
  );
}
