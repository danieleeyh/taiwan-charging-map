import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "台灣超充地圖",
  description: "Taiwan Tesla Supercharger Map - 即時空位查詢",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-TW" className="h-full">
      <head>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" crossOrigin="" />
      </head>
      <body className="h-full antialiased">{children}</body>
    </html>
  );
}
