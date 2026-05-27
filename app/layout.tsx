import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "台灣電動車充電地圖",
  description: "台灣電動車充電站地圖 - 支援 Tesla、Evalue、ForMosa EV 等品牌，V2/V3/V4 快充與 AC 慢充，即時查詢充電站資訊",
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
