import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "台灣電動車充電地圖",
  description: "台灣電動車充電站地圖 - 支援 Tesla、裕電能源、U-Power、台灣中油等品牌，V2/V3/V4 快充與 AC 慢充",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-TW" className="h-full">
      <head>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" crossOrigin="" />
        <link rel="stylesheet" href="https://unpkg.com/leaflet.markercluster@1.5.3/dist/MarkerCluster.css" crossOrigin="" />
        <link rel="stylesheet" href="https://unpkg.com/leaflet.markercluster@1.5.3/dist/MarkerCluster.Default.css" crossOrigin="" />
      </head>
      <body className="h-full antialiased">{children}</body>
    </html>
  );
}
