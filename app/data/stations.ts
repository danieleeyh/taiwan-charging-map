export type ChargerType = 'V2' | 'V3' | 'V4' | 'AC';
export type StationType = 'supercharger' | 'destination' | 'public';
export type ConnectorType = 'CCS2' | 'CHAdeMO' | 'NACS' | 'Type2';
export type AmenityType = 'restaurant' | 'cafe' | 'hotel' | 'shopping' | 'parking' | 'restroom' | 'wifi' | 'convenience';
export type StallStatus = 'available' | 'in_use' | 'faulted' | 'offline';

export interface Stall { id: number; status: StallStatus; }

export interface Station {
  id: string;
  name: string;
  network: string;
  address: string;
  city: string;
  lat: number;
  lng: number;
  totalStalls: number;
  availableStalls: number;
  chargerType: ChargerType;
  stationType: StationType;
  connectors: ConnectorType[];
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

  // ══════════════════════════════════════════
  // 台北市
  // ══════════════════════════════════════════
  {
    id: 'tpe-xinyi', name: '台北信義超充站', network: 'Tesla',
    address: '台北市信義區松仁路100號', city: '台北市',
    lat: 25.0336, lng: 121.5647, totalStalls: 12, availableStalls: 8,
    chargerType: 'V3', stationType: 'supercharger', connectors: ['CCS2', 'NACS'],
    maxKw: 250, amenities: ['restaurant', 'shopping', 'restroom', 'wifi'],
    stalls: makeStalls(12, 8), openHours: '24小時', rating: 4.8, pricePerKwh: 7.0,
  },
  {
    id: 'tpe-neihu', name: '台北內湖超充站', network: 'Tesla',
    address: '台北市內湖區瑞光路513號', city: '台北市',
    lat: 25.0810, lng: 121.5748, totalStalls: 8, availableStalls: 3,
    chargerType: 'V3', stationType: 'supercharger', connectors: ['CCS2', 'NACS'],
    maxKw: 250, amenities: ['restaurant', 'parking', 'restroom'],
    stalls: makeStalls(8, 3, 1), openHours: '24小時', rating: 4.5, pricePerKwh: 7.0,
  },
  {
    id: 'tpe-zhongshan', name: '台北中山超充站', network: 'Tesla',
    address: '台北市中山區中山北路二段39號', city: '台北市',
    lat: 25.0525, lng: 121.5249, totalStalls: 6, availableStalls: 6,
    chargerType: 'V4', stationType: 'supercharger', connectors: ['CCS2', 'NACS'],
    maxKw: 350, amenities: ['restaurant', 'cafe', 'hotel', 'restroom', 'wifi'],
    stalls: makeStalls(6, 6), openHours: '24小時', rating: 4.9, pricePerKwh: 7.5,
  },
  {
    id: 'tpe-nangang', name: '台北南港超充站', network: 'Tesla',
    address: '台北市南港區經貿二路66號', city: '台北市',
    lat: 25.0554, lng: 121.6074, totalStalls: 10, availableStalls: 7,
    chargerType: 'V3', stationType: 'supercharger', connectors: ['CCS2', 'NACS'],
    maxKw: 250, amenities: ['shopping', 'restroom', 'wifi', 'parking'],
    stalls: makeStalls(10, 7), openHours: '24小時', rating: 4.6, pricePerKwh: 7.0,
  },
  {
    id: 'tpe-evalue-da', name: '台北大安裕電站', network: '裕電能源',
    address: '台北市大安區新生南路二段1號', city: '台北市',
    lat: 25.0290, lng: 121.5333, totalStalls: 4, availableStalls: 2,
    chargerType: 'V2', stationType: 'public', connectors: ['CCS2', 'CHAdeMO'],
    maxKw: 120, amenities: ['parking', 'restroom'],
    stalls: makeStalls(4, 2), openHours: '24小時', rating: 4.3, pricePerKwh: 6.0,
  },
  {
    id: 'tpe-formosa-wp', name: '台北萬芳 ForMosa 站', network: 'ForMosa EV',
    address: '台北市文山區興隆路四段2號', city: '台北市',
    lat: 24.9993, lng: 121.5668, totalStalls: 6, availableStalls: 4,
    chargerType: 'V2', stationType: 'public', connectors: ['CCS2', 'CHAdeMO'],
    maxKw: 100, amenities: ['parking', 'restroom'],
    stalls: makeStalls(6, 4), openHours: '24小時', rating: 4.2, pricePerKwh: 5.8,
  },
  {
    id: 'tpe-dest-hotel', name: '台北君悅飯店目的地充電', network: '自建',
    address: '台北市信義區松壽路2號', city: '台北市',
    lat: 25.0356, lng: 121.5659, totalStalls: 4, availableStalls: 3,
    chargerType: 'AC', stationType: 'destination', connectors: ['Type2'],
    maxKw: 11, amenities: ['hotel', 'restroom'],
    stalls: makeStalls(4, 3), openHours: '24小時', rating: 4.1, pricePerKwh: 4.5,
  },
  {
    id: 'tpe-upower-zhonghe', name: '台北中和 U-Power 站', network: 'U-Power',
    address: '新北市中和區中山路二段328號', city: '台北市',
    lat: 24.9990, lng: 121.4974, totalStalls: 8, availableStalls: 5,
    chargerType: 'V3', stationType: 'public', connectors: ['CCS2'],
    maxKw: 180, amenities: ['parking', 'convenience', 'restroom'],
    stalls: makeStalls(8, 5), openHours: '24小時', rating: 4.6, pricePerKwh: 6.5,
  },
  {
    id: 'tpe-cpc-beitou', name: '台北北投台灣中油充電站', network: '台灣中油',
    address: '台北市北投區中央北路四段211號', city: '台北市',
    lat: 25.1180, lng: 121.4980, totalStalls: 4, availableStalls: 3,
    chargerType: 'V2', stationType: 'public', connectors: ['CCS2', 'CHAdeMO'],
    maxKw: 50, amenities: ['convenience', 'restroom'],
    stalls: makeStalls(4, 3), openHours: '06:00–22:00', rating: 4.0, pricePerKwh: 5.5,
  },
  {
    id: 'tpe-tpc-shilin', name: '台北士林台電充電站', network: '台灣電力',
    address: '台北市士林區中正路249號', city: '台北市',
    lat: 25.0880, lng: 121.5199, totalStalls: 6, availableStalls: 4,
    chargerType: 'V2', stationType: 'public', connectors: ['CCS2', 'CHAdeMO'],
    maxKw: 80, amenities: ['parking', 'restroom'],
    stalls: makeStalls(6, 4), openHours: '08:00–21:00', rating: 4.1, pricePerKwh: 5.0,
  },
  {
    id: 'tpe-parking-sgo', name: '松山機場停車場充電樁', network: '停車場自建',
    address: '台北市松山區敦化北路340-9號', city: '台北市',
    lat: 25.0630, lng: 121.5529, totalStalls: 10, availableStalls: 6,
    chargerType: 'AC', stationType: 'public', connectors: ['Type2', 'CCS2'],
    maxKw: 22, amenities: ['parking', 'restroom'],
    stalls: makeStalls(10, 6), openHours: '24小時', rating: 4.2, pricePerKwh: 4.0,
  },

  // ══════════════════════════════════════════
  // 新北市
  // ══════════════════════════════════════════
  {
    id: 'ntpc-banqiao', name: '新北板橋超充站', network: 'Tesla',
    address: '新北市板橋區縣民大道二段7號', city: '新北市',
    lat: 25.0128, lng: 121.4664, totalStalls: 10, availableStalls: 7,
    chargerType: 'V3', stationType: 'supercharger', connectors: ['CCS2', 'NACS'],
    maxKw: 250, amenities: ['shopping', 'restaurant', 'restroom', 'parking'],
    stalls: makeStalls(10, 7), openHours: '24小時', rating: 4.7, pricePerKwh: 7.0,
  },
  {
    id: 'ntpc-upower-xindian', name: '新北新店 U-Power 站', network: 'U-Power',
    address: '新北市新店區北新路三段200號', city: '新北市',
    lat: 24.9710, lng: 121.5397, totalStalls: 6, availableStalls: 3,
    chargerType: 'V3', stationType: 'public', connectors: ['CCS2'],
    maxKw: 180, amenities: ['parking', 'convenience'],
    stalls: makeStalls(6, 3), openHours: '24小時', rating: 4.4, pricePerKwh: 6.5,
  },
  {
    id: 'ntpc-tamsui', name: '淡水老街停車場充電樁', network: '停車場自建',
    address: '新北市淡水區中正路200號', city: '新北市',
    lat: 25.1701, lng: 121.4427, totalStalls: 4, availableStalls: 2,
    chargerType: 'AC', stationType: 'public', connectors: ['Type2'],
    maxKw: 7, amenities: ['parking', 'restroom'],
    stalls: makeStalls(4, 2), openHours: '08:00–22:00', rating: 3.9, pricePerKwh: 4.0,
  },

  // ══════════════════════════════════════════
  // 桃園市
  // ══════════════════════════════════════════
  {
    id: 'tao-taoyuan', name: '桃園高鐵超充站', network: 'Tesla',
    address: '桃園市中壢區高鐵北路一段6號', city: '桃園市',
    lat: 24.9776, lng: 121.2273, totalStalls: 16, availableStalls: 11,
    chargerType: 'V3', stationType: 'supercharger', connectors: ['CCS2', 'NACS'],
    maxKw: 250, amenities: ['restaurant', 'shopping', 'restroom', 'parking'],
    stalls: makeStalls(16, 11), openHours: '24小時', rating: 4.7, pricePerKwh: 6.8,
  },
  {
    id: 'tao-zhongli', name: '桃園中壢超充站', network: 'Tesla',
    address: '桃園市中壢區環中東路二段888號', city: '桃園市',
    lat: 24.9604, lng: 121.2250, totalStalls: 8, availableStalls: 5,
    chargerType: 'V2', stationType: 'supercharger', connectors: ['NACS'],
    maxKw: 150, amenities: ['shopping', 'restroom', 'parking'],
    stalls: makeStalls(8, 5), openHours: '24小時', rating: 4.3, pricePerKwh: 6.5,
  },
  {
    id: 'tao-evalue-a8', name: '桃園A8裕電站', network: '裕電能源',
    address: '桃園市蘆竹區南崁路一段141號', city: '桃園市',
    lat: 25.0428, lng: 121.2892, totalStalls: 6, availableStalls: 3,
    chargerType: 'V2', stationType: 'public', connectors: ['CCS2', 'CHAdeMO'],
    maxKw: 120, amenities: ['shopping', 'restroom', 'parking'],
    stalls: makeStalls(6, 3), openHours: '24小時', rating: 4.3, pricePerKwh: 6.0,
  },
  {
    id: 'tao-cpc-dayuan', name: '桃園大園台灣中油充電站', network: '台灣中油',
    address: '桃園市大園區橫山路52號', city: '桃園市',
    lat: 25.0622, lng: 121.2094, totalStalls: 4, availableStalls: 4,
    chargerType: 'V2', stationType: 'public', connectors: ['CCS2', 'CHAdeMO'],
    maxKw: 50, amenities: ['convenience', 'restroom'],
    stalls: makeStalls(4, 4), openHours: '06:00–22:00', rating: 4.1, pricePerKwh: 5.5,
  },
  {
    id: 'tao-airport-t1', name: '桃園機場第一航廈充電站', network: '停車場自建',
    address: '桃園市大園區航站南路9號', city: '桃園市',
    lat: 25.0777, lng: 121.2325, totalStalls: 12, availableStalls: 8,
    chargerType: 'AC', stationType: 'public', connectors: ['Type2', 'CCS2'],
    maxKw: 22, amenities: ['parking', 'restroom', 'restaurant'],
    stalls: makeStalls(12, 8), openHours: '24小時', rating: 4.3, pricePerKwh: 4.5,
  },

  // ══════════════════════════════════════════
  // 新竹縣市
  // ══════════════════════════════════════════
  {
    id: 'hc-hsinchu', name: '新竹竹北超充站', network: 'Tesla',
    address: '新竹縣竹北市縣政二路100號', city: '新竹縣',
    lat: 24.8389, lng: 121.0045, totalStalls: 10, availableStalls: 7,
    chargerType: 'V3', stationType: 'supercharger', connectors: ['CCS2', 'NACS'],
    maxKw: 250, amenities: ['restaurant', 'shopping', 'restroom'],
    stalls: makeStalls(10, 7), openHours: '24小時', rating: 4.6, pricePerKwh: 6.8,
  },
  {
    id: 'hc-formosa-sc', name: '新竹巨城 ForMosa 站', network: 'ForMosa EV',
    address: '新竹市東區中央路229號', city: '新竹縣',
    lat: 24.8016, lng: 120.9714, totalStalls: 4, availableStalls: 2,
    chargerType: 'V2', stationType: 'public', connectors: ['CCS2', 'CHAdeMO'],
    maxKw: 100, amenities: ['shopping', 'restroom'],
    stalls: makeStalls(4, 2), openHours: '10:00–22:00', rating: 4.4, pricePerKwh: 5.8,
  },
  {
    id: 'hc-upower-zhubei', name: '竹北 U-Power 快充站', network: 'U-Power',
    address: '新竹縣竹北市光明六路東二段120號', city: '新竹縣',
    lat: 24.8262, lng: 121.0144, totalStalls: 6, availableStalls: 5,
    chargerType: 'V3', stationType: 'public', connectors: ['CCS2'],
    maxKw: 180, amenities: ['parking', 'convenience', 'restroom'],
    stalls: makeStalls(6, 5), openHours: '24小時', rating: 4.5, pricePerKwh: 6.5,
  },

  // ══════════════════════════════════════════
  // 台中市
  // ══════════════════════════════════════════
  {
    id: 'tc-taichung', name: '台中市政超充站', network: 'Tesla',
    address: '台中市西屯區台灣大道三段99號', city: '台中市',
    lat: 24.1633, lng: 120.6473, totalStalls: 14, availableStalls: 9,
    chargerType: 'V3', stationType: 'supercharger', connectors: ['CCS2', 'NACS'],
    maxKw: 250, amenities: ['restaurant', 'shopping', 'hotel', 'restroom', 'wifi'],
    stalls: makeStalls(14, 9), openHours: '24小時', rating: 4.7, pricePerKwh: 6.8,
  },
  {
    id: 'tc-fengyuan', name: '台中豐原超充站', network: 'Tesla',
    address: '台中市豐原區中山路100號', city: '台中市',
    lat: 24.2517, lng: 120.7186, totalStalls: 8, availableStalls: 2,
    chargerType: 'V2', stationType: 'supercharger', connectors: ['NACS'],
    maxKw: 150, amenities: ['restaurant', 'parking', 'restroom'],
    stalls: makeStalls(8, 2, 1), openHours: '06:00–24:00', rating: 4.2, pricePerKwh: 6.5,
  },
  {
    id: 'tc-evalue-ota', name: '台中大里裕電站', network: '裕電能源',
    address: '台中市大里區中興路二段500號', city: '台中市',
    lat: 24.1060, lng: 120.6831, totalStalls: 6, availableStalls: 4,
    chargerType: 'V2', stationType: 'public', connectors: ['CCS2', 'CHAdeMO'],
    maxKw: 120, amenities: ['shopping', 'restroom', 'parking'],
    stalls: makeStalls(6, 4), openHours: '24小時', rating: 4.3, pricePerKwh: 6.0,
  },
  {
    id: 'tc-dest-mall', name: '台中大遠百目的地充電', network: '自建',
    address: '台中市西屯區台灣大道三段251號', city: '台中市',
    lat: 24.1617, lng: 120.6451, totalStalls: 6, availableStalls: 4,
    chargerType: 'AC', stationType: 'destination', connectors: ['Type2'],
    maxKw: 22, amenities: ['shopping', 'restaurant', 'restroom'],
    stalls: makeStalls(6, 4), openHours: '10:00–22:00', rating: 4.4, pricePerKwh: 4.5,
  },
  {
    id: 'tc-upower-tb', name: '台中台中港路 U-Power 站', network: 'U-Power',
    address: '台中市梧棲區台中港路一段500號', city: '台中市',
    lat: 24.2576, lng: 120.5454, totalStalls: 8, availableStalls: 6,
    chargerType: 'V3', stationType: 'public', connectors: ['CCS2'],
    maxKw: 180, amenities: ['convenience', 'parking', 'restroom'],
    stalls: makeStalls(8, 6), openHours: '24小時', rating: 4.5, pricePerKwh: 6.5,
  },
  {
    id: 'tc-cpc-beitun', name: '台中北屯台灣中油充電站', network: '台灣中油',
    address: '台中市北屯區松竹路二段100號', city: '台中市',
    lat: 24.1770, lng: 120.6869, totalStalls: 4, availableStalls: 2,
    chargerType: 'V2', stationType: 'public', connectors: ['CCS2', 'CHAdeMO'],
    maxKw: 50, amenities: ['convenience', 'restroom'],
    stalls: makeStalls(4, 2), openHours: '06:00–22:00', rating: 4.0, pricePerKwh: 5.5,
  },
  {
    id: 'tc-highwaynorth', name: '台中系統交流道北上服務區', network: '裕電能源',
    address: '台中市南屯區環中路一段 (國道一號)', city: '台中市',
    lat: 24.1201, lng: 120.6401, totalStalls: 6, availableStalls: 3,
    chargerType: 'V2', stationType: 'public', connectors: ['CCS2', 'CHAdeMO'],
    maxKw: 100, amenities: ['restaurant', 'restroom', 'convenience'],
    stalls: makeStalls(6, 3), openHours: '24小時', rating: 4.2, pricePerKwh: 6.0,
  },

  // ══════════════════════════════════════════
  // 台南市
  // ══════════════════════════════════════════
  {
    id: 'tainan-east', name: '台南東區超充站', network: 'Tesla',
    address: '台南市東區東門路一段236號', city: '台南市',
    lat: 22.9908, lng: 120.2133, totalStalls: 10, availableStalls: 8,
    chargerType: 'V3', stationType: 'supercharger', connectors: ['CCS2', 'NACS'],
    maxKw: 250, amenities: ['restaurant', 'cafe', 'restroom', 'wifi'],
    stalls: makeStalls(10, 8), openHours: '24小時', rating: 4.8, pricePerKwh: 6.8,
  },
  {
    id: 'tainan-north', name: '台南北區超充站', network: 'Tesla',
    address: '台南市北區西門路四段15號', city: '台南市',
    lat: 23.0109, lng: 120.2042, totalStalls: 6, availableStalls: 4,
    chargerType: 'V3', stationType: 'supercharger', connectors: ['CCS2', 'NACS'],
    maxKw: 250, amenities: ['shopping', 'restroom'],
    stalls: makeStalls(6, 4), openHours: '24小時', rating: 4.5, pricePerKwh: 6.8,
  },
  {
    id: 'tainan-formosa', name: '台南奇美 ForMosa 站', network: 'ForMosa EV',
    address: '台南市仁德區中山路1000號', city: '台南市',
    lat: 22.9509, lng: 120.2356, totalStalls: 4, availableStalls: 3,
    chargerType: 'V2', stationType: 'public', connectors: ['CCS2', 'CHAdeMO'],
    maxKw: 100, amenities: ['restroom', 'parking'],
    stalls: makeStalls(4, 3), openHours: '24小時', rating: 4.3, pricePerKwh: 5.8,
  },
  {
    id: 'tainan-upower', name: '台南 U-Power 崇明站', network: 'U-Power',
    address: '台南市東區崇明路450號', city: '台南市',
    lat: 22.9979, lng: 120.2289, totalStalls: 6, availableStalls: 4,
    chargerType: 'V3', stationType: 'public', connectors: ['CCS2'],
    maxKw: 180, amenities: ['parking', 'convenience', 'restroom'],
    stalls: makeStalls(6, 4), openHours: '24小時', rating: 4.4, pricePerKwh: 6.5,
  },
  {
    id: 'tainan-cpc', name: '台南仁德台灣中油充電站', network: '台灣中油',
    address: '台南市仁德區中山路650號', city: '台南市',
    lat: 22.9480, lng: 120.2303, totalStalls: 4, availableStalls: 3,
    chargerType: 'V2', stationType: 'public', connectors: ['CCS2', 'CHAdeMO'],
    maxKw: 50, amenities: ['convenience', 'restroom'],
    stalls: makeStalls(4, 3), openHours: '06:00–22:00', rating: 4.0, pricePerKwh: 5.5,
  },

  // ══════════════════════════════════════════
  // 高雄市
  // ══════════════════════════════════════════
  {
    id: 'kh-zuoying', name: '高雄左營高鐵超充站', network: 'Tesla',
    address: '高雄市左營區高鐵路99號', city: '高雄市',
    lat: 22.6877, lng: 120.3019, totalStalls: 20, availableStalls: 15,
    chargerType: 'V4', stationType: 'supercharger', connectors: ['CCS2', 'NACS'],
    maxKw: 350, amenities: ['restaurant', 'shopping', 'hotel', 'restroom', 'wifi', 'parking'],
    stalls: makeStalls(20, 15), openHours: '24小時', rating: 4.9, pricePerKwh: 7.0,
  },
  {
    id: 'kh-sanmin', name: '高雄三民超充站', network: 'Tesla',
    address: '高雄市三民區九如一路777號', city: '高雄市',
    lat: 22.6421, lng: 120.3112, totalStalls: 8, availableStalls: 5,
    chargerType: 'V3', stationType: 'supercharger', connectors: ['CCS2', 'NACS'],
    maxKw: 250, amenities: ['restaurant', 'convenience', 'restroom'],
    stalls: makeStalls(8, 5), openHours: '24小時', rating: 4.4, pricePerKwh: 6.8,
  },
  {
    id: 'kh-fengshan', name: '高雄鳳山超充站', network: 'Tesla',
    address: '高雄市鳳山區中山西路100號', city: '高雄市',
    lat: 22.6271, lng: 120.3568, totalStalls: 6, availableStalls: 0,
    chargerType: 'V2', stationType: 'supercharger', connectors: ['NACS'],
    maxKw: 150, amenities: ['parking', 'restroom'],
    stalls: makeStalls(6, 0, 1), openHours: '06:00–24:00', rating: 4.1, pricePerKwh: 6.5,
  },
  {
    id: 'kh-evalue-sf', name: '高雄夢時代裕電站', network: '裕電能源',
    address: '高雄市前鎮區中華五路789號', city: '高雄市',
    lat: 22.5989, lng: 120.3061, totalStalls: 8, availableStalls: 5,
    chargerType: 'V2', stationType: 'public', connectors: ['CCS2', 'CHAdeMO'],
    maxKw: 120, amenities: ['shopping', 'restaurant', 'restroom', 'parking'],
    stalls: makeStalls(8, 5), openHours: '10:00–22:00', rating: 4.5, pricePerKwh: 6.0,
  },
  {
    id: 'kh-upower-lingya', name: '高雄苓雅 U-Power 站', network: 'U-Power',
    address: '高雄市苓雅區四維三路2號', city: '高雄市',
    lat: 22.6200, lng: 120.3120, totalStalls: 6, availableStalls: 4,
    chargerType: 'V3', stationType: 'public', connectors: ['CCS2'],
    maxKw: 180, amenities: ['parking', 'convenience', 'restroom'],
    stalls: makeStalls(6, 4), openHours: '24小時', rating: 4.5, pricePerKwh: 6.5,
  },
  {
    id: 'kh-cpc-nanzi', name: '高雄楠梓台灣中油充電站', network: '台灣中油',
    address: '高雄市楠梓區楠梓新路350號', city: '高雄市',
    lat: 22.7290, lng: 120.3148, totalStalls: 4, availableStalls: 3,
    chargerType: 'V2', stationType: 'public', connectors: ['CCS2', 'CHAdeMO'],
    maxKw: 50, amenities: ['convenience', 'restroom'],
    stalls: makeStalls(4, 3), openHours: '06:00–22:00', rating: 4.0, pricePerKwh: 5.5,
  },
  {
    id: 'kh-parking-rt', name: '高雄漢神巨蛋停車場充電樁', network: '停車場自建',
    address: '高雄市左營區博愛二路777號', city: '高雄市',
    lat: 22.6796, lng: 120.2970, totalStalls: 8, availableStalls: 5,
    chargerType: 'AC', stationType: 'public', connectors: ['Type2', 'CCS2'],
    maxKw: 22, amenities: ['shopping', 'parking', 'restroom'],
    stalls: makeStalls(8, 5), openHours: '10:00–22:00', rating: 4.1, pricePerKwh: 4.0,
  },

  // ══════════════════════════════════════════
  // 宜蘭縣
  // ══════════════════════════════════════════
  {
    id: 'yilan', name: '宜蘭羅東超充站', network: 'Tesla',
    address: '宜蘭縣羅東鎮中正北路100號', city: '宜蘭縣',
    lat: 24.6775, lng: 121.7699, totalStalls: 6, availableStalls: 4,
    chargerType: 'V3', stationType: 'supercharger', connectors: ['CCS2', 'NACS'],
    maxKw: 250, amenities: ['restaurant', 'restroom'],
    stalls: makeStalls(6, 4), openHours: '24小時', rating: 4.6, pricePerKwh: 7.0,
  },
  {
    id: 'yilan-upower', name: '宜蘭市 U-Power 站', network: 'U-Power',
    address: '宜蘭縣宜蘭市民族路150號', city: '宜蘭縣',
    lat: 24.7545, lng: 121.7534, totalStalls: 4, availableStalls: 3,
    chargerType: 'V2', stationType: 'public', connectors: ['CCS2', 'CHAdeMO'],
    maxKw: 100, amenities: ['parking', 'restroom'],
    stalls: makeStalls(4, 3), openHours: '24小時', rating: 4.3, pricePerKwh: 6.0,
  },

  // ══════════════════════════════════════════
  // 花蓮縣
  // ══════════════════════════════════════════
  {
    id: 'hualien', name: '花蓮市超充站', network: 'Tesla',
    address: '花蓮縣花蓮市中山路88號', city: '花蓮縣',
    lat: 23.9772, lng: 121.6044, totalStalls: 8, availableStalls: 6,
    chargerType: 'V3', stationType: 'supercharger', connectors: ['CCS2', 'NACS'],
    maxKw: 250, amenities: ['restaurant', 'hotel', 'restroom', 'wifi'],
    stalls: makeStalls(8, 6), openHours: '24小時', rating: 4.7, pricePerKwh: 7.0,
  },
  {
    id: 'hualien-formosa', name: '花蓮 ForMosa 慢充站', network: 'ForMosa EV',
    address: '花蓮縣花蓮市國聯一路100號', city: '花蓮縣',
    lat: 23.9645, lng: 121.5989, totalStalls: 4, availableStalls: 3,
    chargerType: 'AC', stationType: 'destination', connectors: ['Type2', 'CCS2'],
    maxKw: 22, amenities: ['hotel', 'parking', 'restroom'],
    stalls: makeStalls(4, 3), openHours: '24小時', rating: 4.4, pricePerKwh: 4.5,
  },

  // ══════════════════════════════════════════
  // 屏東縣
  // ══════════════════════════════════════════
  {
    id: 'pt-formosa', name: '屏東墾丁 ForMosa 快充', network: 'ForMosa EV',
    address: '屏東縣恆春鎮墾丁路1號', city: '屏東縣',
    lat: 21.9450, lng: 120.8000, totalStalls: 6, availableStalls: 4,
    chargerType: 'V2', stationType: 'public', connectors: ['CCS2', 'CHAdeMO'],
    maxKw: 100, amenities: ['restaurant', 'restroom'],
    stalls: makeStalls(6, 4), openHours: '24小時', rating: 4.5, pricePerKwh: 5.8,
  },
  {
    id: 'pt-tesla', name: '屏東市超充站', network: 'Tesla',
    address: '屏東縣屏東市自由路700號', city: '屏東縣',
    lat: 22.6701, lng: 120.4857, totalStalls: 6, availableStalls: 5,
    chargerType: 'V3', stationType: 'supercharger', connectors: ['CCS2', 'NACS'],
    maxKw: 250, amenities: ['shopping', 'restroom', 'parking'],
    stalls: makeStalls(6, 5), openHours: '24小時', rating: 4.6, pricePerKwh: 6.8,
  },

  // ══════════════════════════════════════════
  // 嘉義市/縣
  // ══════════════════════════════════════════
  {
    id: 'cy-tesla', name: '嘉義市超充站', network: 'Tesla',
    address: '嘉義市東區中山路660號', city: '嘉義市',
    lat: 23.4768, lng: 120.4519, totalStalls: 8, availableStalls: 6,
    chargerType: 'V3', stationType: 'supercharger', connectors: ['CCS2', 'NACS'],
    maxKw: 250, amenities: ['restaurant', 'shopping', 'restroom'],
    stalls: makeStalls(8, 6), openHours: '24小時', rating: 4.6, pricePerKwh: 6.8,
  },
  {
    id: 'cy-upower', name: '嘉義 U-Power 文化路站', network: 'U-Power',
    address: '嘉義市東區文化路500號', city: '嘉義市',
    lat: 23.4822, lng: 120.4480, totalStalls: 4, availableStalls: 3,
    chargerType: 'V2', stationType: 'public', connectors: ['CCS2', 'CHAdeMO'],
    maxKw: 120, amenities: ['parking', 'restroom'],
    stalls: makeStalls(4, 3), openHours: '24小時', rating: 4.2, pricePerKwh: 6.0,
  },

  // ══════════════════════════════════════════
  // 苗栗縣
  // ══════════════════════════════════════════
  {
    id: 'ml-tesla', name: '苗栗竹南超充站', network: 'Tesla',
    address: '苗栗縣竹南鎮科學路100號', city: '苗栗縣',
    lat: 24.6838, lng: 120.8730, totalStalls: 8, availableStalls: 5,
    chargerType: 'V3', stationType: 'supercharger', connectors: ['CCS2', 'NACS'],
    maxKw: 250, amenities: ['restaurant', 'restroom', 'parking'],
    stalls: makeStalls(8, 5), openHours: '24小時', rating: 4.5, pricePerKwh: 6.8,
  },
  {
    id: 'ml-cpc', name: '苗栗頭份台灣中油充電站', network: '台灣中油',
    address: '苗栗縣頭份市中華路388號', city: '苗栗縣',
    lat: 24.6891, lng: 120.9009, totalStalls: 4, availableStalls: 2,
    chargerType: 'V2', stationType: 'public', connectors: ['CCS2', 'CHAdeMO'],
    maxKw: 50, amenities: ['convenience', 'restroom'],
    stalls: makeStalls(4, 2), openHours: '06:00–22:00', rating: 3.9, pricePerKwh: 5.5,
  },
];

export const cities = Array.from(new Set(stations.map(s => s.city)));

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
  if (type === 'V2') return { bg: '#f9fafb', text: '#6b7280', border: '#e5e7eb' };
  return { bg: '#f0fdf4', text: '#16a34a', border: '#bbf7d0' };
}

export function getMarkerColor(s: Station): { stroke: string; border: string; bg: string } {
  if (s.chargerType === 'AC' || s.stationType === 'destination') return { stroke: '#16a34a', border: '#86efac', bg: '#f0fdf4' };
  if (s.chargerType === 'V4') return { stroke: '#7c3aed', border: '#c4b5fd', bg: '#f5f3ff' };
  if (s.chargerType === 'V3') return { stroke: '#2563eb', border: '#93c5fd', bg: '#eff6ff' };
  return { stroke: '#6b7280', border: '#d1d5db', bg: '#f9fafb' };
}

export function haversine(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}
