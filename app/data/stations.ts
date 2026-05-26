export type ChargerType = 'V2' | 'V3' | 'V4';
export type AmenityType = 'restaurant' | 'cafe' | 'hotel' | 'shopping' | 'parking' | 'restroom' | 'wifi' | 'convenience';
export type StallStatus = 'available' | 'in_use' | 'faulted' | 'offline';

export interface Stall { id: number; status: StallStatus; }

export interface Station {
  id: string;
  name: string;
  address: string;
  city: string;
  lat: number;
  lng: number;
  totalStalls: number;
  availableStalls: number;
  chargerType: ChargerType;
  maxKw: number;
  amenities: AmenityType[];
  stalls: Stall[];
  openHours: string;
  rating?: number;
  pricePerKwh?: number;
}

function makeStalls(total: number, available: number, faulted = 0): Stall[] {
  return Array.from({ length: total }, (_, i) => ({
    id: i + 1,
    status: i < available ? 'available' : i < total - faulted ? 'in_use' : 'faulted',
  } as Stall));
}

export const stations: Station[] = [
  { id: 'tpe-xinyi',    name: '台北信義超充站',    address: '台北市信義區松仁路100號',          city: '台北市', lat: 25.0336, lng: 121.5647, totalStalls: 12, availableStalls: 8,  chargerType: 'V3', maxKw: 250, amenities: ['restaurant','shopping','restroom','wifi'],        stalls: makeStalls(12,8),   openHours: '24小時', rating: 4.8, pricePerKwh: 7.0 },
  { id: 'tpe-neihu',    name: '台北內湖超充站',    address: '台北市內湖區瑞光路513號',          city: '台北市', lat: 25.0810, lng: 121.5748, totalStalls: 8,  availableStalls: 3,  chargerType: 'V3', maxKw: 250, amenities: ['restaurant','parking','restroom'],               stalls: makeStalls(8,3,1),  openHours: '24小時', rating: 4.5, pricePerKwh: 7.0 },
  { id: 'tpe-zhongshan',name: '台北中山超充站',    address: '台北市中山區中山北路二段39號',      city: '台北市', lat: 25.0525, lng: 121.5249, totalStalls: 6,  availableStalls: 6,  chargerType: 'V4', maxKw: 350, amenities: ['restaurant','cafe','hotel','restroom','wifi'],    stalls: makeStalls(6,6),    openHours: '24小時', rating: 4.9, pricePerKwh: 7.5 },
  { id: 'tpe-nangang',  name: '台北南港超充站',    address: '台北市南港區經貿二路66號',          city: '台北市', lat: 25.0554, lng: 121.6074, totalStalls: 10, availableStalls: 7,  chargerType: 'V3', maxKw: 250, amenities: ['shopping','restroom','wifi','parking'],           stalls: makeStalls(10,7),   openHours: '24小時', rating: 4.6, pricePerKwh: 7.0 },
  { id: 'tao-taoyuan',  name: '桃園高鐵超充站',    address: '桃園市中壢區高鐵北路一段6號',       city: '桃園市', lat: 24.9776, lng: 121.2273, totalStalls: 16, availableStalls: 11, chargerType: 'V3', maxKw: 250, amenities: ['restaurant','shopping','restroom','parking'],     stalls: makeStalls(16,11),  openHours: '24小時', rating: 4.7, pricePerKwh: 6.8 },
  { id: 'tao-zhongli',  name: '桃園中壢超充站',    address: '桃園市中壢區環中東路二段888號',     city: '桃園市', lat: 24.9604, lng: 121.2250, totalStalls: 8,  availableStalls: 5,  chargerType: 'V2', maxKw: 150, amenities: ['shopping','restroom','parking'],                  stalls: makeStalls(8,5),    openHours: '24小時', rating: 4.3, pricePerKwh: 6.5 },
  { id: 'hc-hsinchu',   name: '新竹竹北超充站',    address: '新竹縣竹北市縣政二路100號',         city: '新竹縣', lat: 24.8389, lng: 121.0045, totalStalls: 10, availableStalls: 7,  chargerType: 'V3', maxKw: 250, amenities: ['restaurant','shopping','restroom'],               stalls: makeStalls(10,7),   openHours: '24小時', rating: 4.6, pricePerKwh: 6.8 },
  { id: 'tc-taichung',  name: '台中市政超充站',    address: '台中市西屯區台灣大道三段99號',      city: '台中市', lat: 24.1633, lng: 120.6473, totalStalls: 14, availableStalls: 9,  chargerType: 'V3', maxKw: 250, amenities: ['restaurant','shopping','hotel','restroom','wifi'], stalls: makeStalls(14,9),   openHours: '24小時', rating: 4.7, pricePerKwh: 6.8 },
  { id: 'tc-fengyuan',  name: '台中豐原超充站',    address: '台中市豐原區中山路100號',           city: '台中市', lat: 24.2517, lng: 120.7186, totalStalls: 8,  availableStalls: 2,  chargerType: 'V2', maxKw: 150, amenities: ['restaurant','parking','restroom'],               stalls: makeStalls(8,2,1),  openHours: '06:00–24:00', rating: 4.2, pricePerKwh: 6.5 },
  { id: 'tainan-east',  name: '台南東區超充站',    address: '台南市東區東門路一段236號',         city: '台南市', lat: 22.9908, lng: 120.2133, totalStalls: 10, availableStalls: 8,  chargerType: 'V3', maxKw: 250, amenities: ['restaurant','cafe','restroom','wifi'],            stalls: makeStalls(10,8),   openHours: '24小時', rating: 4.8, pricePerKwh: 6.8 },
  { id: 'tainan-north', name: '台南北區超充站',    address: '台南市北區西門路四段15號',          city: '台南市', lat: 23.0109, lng: 120.2042, totalStalls: 6,  availableStalls: 4,  chargerType: 'V3', maxKw: 250, amenities: ['shopping','restroom'],                           stalls: makeStalls(6,4),    openHours: '24小時', rating: 4.5, pricePerKwh: 6.8 },
  { id: 'kh-zuoying',   name: '高雄左營高鐵超充站', address: '高雄市左營區高鐵路99號',           city: '高雄市', lat: 22.6877, lng: 120.3019, totalStalls: 20, availableStalls: 15, chargerType: 'V4', maxKw: 350, amenities: ['restaurant','shopping','hotel','restroom','wifi','parking'], stalls: makeStalls(20,15), openHours: '24小時', rating: 4.9, pricePerKwh: 7.0 },
  { id: 'kh-sanmin',    name: '高雄三民超充站',    address: '高雄市三民區九如一路777號',         city: '高雄市', lat: 22.6421, lng: 120.3112, totalStalls: 8,  availableStalls: 5,  chargerType: 'V3', maxKw: 250, amenities: ['restaurant','convenience','restroom'],           stalls: makeStalls(8,5),    openHours: '24小時', rating: 4.4, pricePerKwh: 6.8 },
  { id: 'kh-fengshan',  name: '高雄鳳山超充站',    address: '高雄市鳳山區中山西路100號',         city: '高雄市', lat: 22.6271, lng: 120.3568, totalStalls: 6,  availableStalls: 0,  chargerType: 'V2', maxKw: 150, amenities: ['parking','restroom'],                            stalls: makeStalls(6,0,1),  openHours: '06:00–24:00', rating: 4.1, pricePerKwh: 6.5 },
  { id: 'yilan',        name: '宜蘭羅東超充站',    address: '宜蘭縣羅東鎮中正北路100號',         city: '宜蘭縣', lat: 24.6775, lng: 121.7699, totalStalls: 6,  availableStalls: 4,  chargerType: 'V3', maxKw: 250, amenities: ['restaurant','restroom'],                         stalls: makeStalls(6,4),    openHours: '24小時', rating: 4.6, pricePerKwh: 7.0 },
  { id: 'hualien',      name: '花蓮市超充站',      address: '花蓮縣花蓮市中山路88號',            city: '花蓮縣', lat: 23.9772, lng: 121.6044, totalStalls: 8,  availableStalls: 6,  chargerType: 'V3', maxKw: 250, amenities: ['restaurant','hotel','restroom','wifi'],           stalls: makeStalls(8,6),    openHours: '24小時', rating: 4.7, pricePerKwh: 7.0 },
];

export const cities = [...new Set(stations.map(s => s.city))];

export const amenityLabels: Record<AmenityType, string> = {
  restaurant: '餐廳', cafe: '咖啡廳', hotel: '飯店', shopping: '購物',
  parking: '停車場', restroom: '廁所', wifi: 'Wi-Fi', convenience: '便利商店',
};

export function getAvailStatus(s: Station) {
  const r = s.availableStalls / s.totalStalls;
  if (r === 0) return { label: '無空位', color: '#ef4444', bg: '#fef2f2', text: '#dc2626' };
  if (r < 0.3) return { label: '快滿了', color: '#f97316', bg: '#fff7ed', text: '#ea580c' };
  if (r < 0.7) return { label: '部分可用', color: '#f59e0b', bg: '#fffbeb', text: '#d97706' };
  return { label: '空位充足', color: '#22c55e', bg: '#f0fdf4', text: '#16a34a' };
}

export function getChargerStyle(type: ChargerType) {
  if (type === 'V4') return { bg: '#f3e8ff', text: '#7c3aed', border: '#e9d5ff' };
  if (type === 'V3') return { bg: '#eff6ff', text: '#2563eb', border: '#bfdbfe' };
  return { bg: '#f9fafb', text: '#6b7280', border: '#e5e7eb' };
}
