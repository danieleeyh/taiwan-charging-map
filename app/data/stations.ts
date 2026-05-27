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

export const stations: Station[] = [
  {
    "id": "sta-1",
    "name": "萬華停車場自建購物中心充電站",
    "network": "停車場自建",
    "address": "台北市萬華區自由路563號",
    "city": "台北市",
    "lat": 25.0879,
    "lng": 121.5611,
    "totalStalls": 14,
    "availableStalls": 1,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 18,
    "amenities": [
      "restroom",
      "cafe",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 3.8,
    "pricePerKwh": 4
  },
  {
    "id": "sta-2",
    "name": "松山ForMosa快充站",
    "network": "ForMosa EV",
    "address": "台北市松山區光明路421號",
    "city": "台北市",
    "lat": 24.9914,
    "lng": 121.565,
    "totalStalls": 16,
    "availableStalls": 6,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 245,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      },
      {
        "id": 15,
        "status": "in_use"
      },
      {
        "id": 16,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.6,
    "pricePerKwh": 5.8
  },
  {
    "id": "sta-3",
    "name": "文山特斯拉充電站",
    "network": "Tesla",
    "address": "台北市文山區建國路476號",
    "city": "台北市",
    "lat": 25.0705,
    "lng": 121.5952,
    "totalStalls": 4,
    "availableStalls": 3,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 226,
    "amenities": [
      "restroom",
      "parking",
      "restaurant",
      "wifi",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.3,
    "pricePerKwh": 7
  },
  {
    "id": "sta-4",
    "name": "文山特斯拉充電站",
    "network": "Tesla",
    "address": "台北市文山區文化路784號",
    "city": "台北市",
    "lat": 25.101,
    "lng": 121.4777,
    "totalStalls": 6,
    "availableStalls": 1,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 204,
    "amenities": [
      "restroom",
      "restaurant",
      "shopping",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.5,
    "pricePerKwh": 7
  },
  {
    "id": "sta-5",
    "name": "大同ForMosa購物中心充電站",
    "network": "ForMosa EV",
    "address": "台北市大同區中正路373號",
    "city": "台北市",
    "lat": 25.0147,
    "lng": 121.5094,
    "totalStalls": 3,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 129,
    "amenities": [
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.8,
    "pricePerKwh": 5.5
  },
  {
    "id": "sta-6",
    "name": "文山U-Power慢充站",
    "network": "U-Power",
    "address": "台北市文山區光明路182號",
    "city": "台北市",
    "lat": 25.0479,
    "lng": 121.5253,
    "totalStalls": 7,
    "availableStalls": 4,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 130,
    "amenities": [
      "restroom",
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 3.8,
    "pricePerKwh": 6.8
  },
  {
    "id": "sta-7",
    "name": "北投中油快充站",
    "network": "台灣中油",
    "address": "台北市北投區文化路738號",
    "city": "台北市",
    "lat": 24.993,
    "lng": 121.4776,
    "totalStalls": 3,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 122,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.1,
    "pricePerKwh": 5
  },
  {
    "id": "sta-8",
    "name": "中正裕電充電站",
    "network": "裕電能源",
    "address": "台北市中正區民生路136號",
    "city": "台北市",
    "lat": 24.9774,
    "lng": 121.5885,
    "totalStalls": 16,
    "availableStalls": 14,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 117,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "available"
      },
      {
        "id": 11,
        "status": "available"
      },
      {
        "id": 12,
        "status": "available"
      },
      {
        "id": 13,
        "status": "available"
      },
      {
        "id": 14,
        "status": "available"
      },
      {
        "id": 15,
        "status": "in_use"
      },
      {
        "id": 16,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.5,
    "pricePerKwh": 6.2
  },
  {
    "id": "sta-9",
    "name": "士林U-Power充電站",
    "network": "U-Power",
    "address": "台北市士林區文化路180號",
    "city": "台北市",
    "lat": 24.9822,
    "lng": 121.4754,
    "totalStalls": 16,
    "availableStalls": 9,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 247,
    "amenities": [
      "restroom"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      },
      {
        "id": 15,
        "status": "in_use"
      },
      {
        "id": 16,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 5,
    "pricePerKwh": 6.8
  },
  {
    "id": "sta-10",
    "name": "大安裕電充電站",
    "network": "裕電能源",
    "address": "台北市大安區中正路343號",
    "city": "台北市",
    "lat": 25.0169,
    "lng": 121.594,
    "totalStalls": 14,
    "availableStalls": 0,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 249,
    "amenities": [
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "faulted"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 5,
    "pricePerKwh": 6
  },
  {
    "id": "sta-11",
    "name": "文山中油超充站",
    "network": "台灣中油",
    "address": "台北市文山區建國路619號",
    "city": "台北市",
    "lat": 25.0303,
    "lng": 121.4823,
    "totalStalls": 6,
    "availableStalls": 3,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 149,
    "amenities": [
      "restroom",
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.6,
    "pricePerKwh": 5.5
  },
  {
    "id": "sta-12",
    "name": "松山裕電超充站",
    "network": "裕電能源",
    "address": "台北市松山區中山路273號",
    "city": "台北市",
    "lat": 25.0923,
    "lng": 121.4955,
    "totalStalls": 16,
    "availableStalls": 8,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 236,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      },
      {
        "id": 15,
        "status": "in_use"
      },
      {
        "id": 16,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.9,
    "pricePerKwh": 6
  },
  {
    "id": "sta-13",
    "name": "內湖台灣電力快充站",
    "network": "台灣電力",
    "address": "台北市內湖區民權路513號",
    "city": "台北市",
    "lat": 25.0367,
    "lng": 121.4362,
    "totalStalls": 12,
    "availableStalls": 9,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 147,
    "amenities": [
      "restroom"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 4.2,
    "pricePerKwh": 5
  },
  {
    "id": "sta-14",
    "name": "松山中油慢充站",
    "network": "台灣中油",
    "address": "台北市松山區復興路663號",
    "city": "台北市",
    "lat": 25.0439,
    "lng": 121.4319,
    "totalStalls": 2,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 131,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.2,
    "pricePerKwh": 5
  },
  {
    "id": "sta-15",
    "name": "松山停車場自建停車場充電樁",
    "network": "停車場自建",
    "address": "台北市松山區和平路916號",
    "city": "台北市",
    "lat": 25.0712,
    "lng": 121.5524,
    "totalStalls": 3,
    "availableStalls": 1,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 8,
    "amenities": [
      "parking",
      "hotel",
      "cafe",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.2,
    "pricePerKwh": 4.5
  },
  {
    "id": "sta-16",
    "name": "松山特斯拉快充站",
    "network": "Tesla",
    "address": "台北市松山區光明路787號",
    "city": "台北市",
    "lat": 24.9904,
    "lng": 121.5412,
    "totalStalls": 15,
    "availableStalls": 10,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 215,
    "amenities": [
      "restroom",
      "shopping",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "available"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      },
      {
        "id": 15,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.7,
    "pricePerKwh": 7.5
  },
  {
    "id": "sta-17",
    "name": "大安特斯拉快充站",
    "network": "Tesla",
    "address": "台北市大安區文化路572號",
    "city": "台北市",
    "lat": 24.9976,
    "lng": 121.598,
    "totalStalls": 15,
    "availableStalls": 14,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 224,
    "amenities": [
      "restroom",
      "shopping",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "available"
      },
      {
        "id": 11,
        "status": "available"
      },
      {
        "id": 12,
        "status": "available"
      },
      {
        "id": 13,
        "status": "available"
      },
      {
        "id": 14,
        "status": "available"
      },
      {
        "id": 15,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.3,
    "pricePerKwh": 7
  },
  {
    "id": "sta-18",
    "name": "北投U-Power快充站",
    "network": "U-Power",
    "address": "台北市北投區自由路648號",
    "city": "台北市",
    "lat": 25.0593,
    "lng": 121.5701,
    "totalStalls": 15,
    "availableStalls": 11,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 215,
    "amenities": [
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "available"
      },
      {
        "id": 11,
        "status": "available"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      },
      {
        "id": 15,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.9,
    "pricePerKwh": 6.8
  },
  {
    "id": "sta-19",
    "name": "大同停車場自建快充站",
    "network": "停車場自建",
    "address": "台北市大同區中山路278號",
    "city": "台北市",
    "lat": 25.0835,
    "lng": 121.6044,
    "totalStalls": 3,
    "availableStalls": 1,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2",
      "CCS2"
    ],
    "maxKw": 12,
    "amenities": [
      "parking",
      "cafe",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 3.6,
    "pricePerKwh": 3.5
  },
  {
    "id": "sta-20",
    "name": "北投自建購物中心充電站",
    "network": "自建",
    "address": "台北市北投區自由路823號",
    "city": "台北市",
    "lat": 24.9855,
    "lng": 121.5375,
    "totalStalls": 12,
    "availableStalls": 11,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 14,
    "amenities": [
      "restroom",
      "parking",
      "hotel",
      "cafe",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "available"
      },
      {
        "id": 11,
        "status": "available"
      },
      {
        "id": 12,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.9,
    "pricePerKwh": 4
  },
  {
    "id": "sta-21",
    "name": "信義U-Power快充站",
    "network": "U-Power",
    "address": "台北市信義區中山路694號",
    "city": "台北市",
    "lat": 25.008,
    "lng": 121.4932,
    "totalStalls": 2,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 129,
    "amenities": [
      "restroom",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.9,
    "pricePerKwh": 6.5
  },
  {
    "id": "sta-22",
    "name": "大安中油購物中心充電站",
    "network": "台灣中油",
    "address": "台北市大安區民生路956號",
    "city": "台北市",
    "lat": 25.0474,
    "lng": 121.5552,
    "totalStalls": 2,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 131,
    "amenities": [
      "restroom",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.2,
    "pricePerKwh": 5.5
  },
  {
    "id": "sta-23",
    "name": "文山中油購物中心充電站",
    "network": "台灣中油",
    "address": "台北市文山區和平路393號",
    "city": "台北市",
    "lat": 24.9879,
    "lng": 121.5726,
    "totalStalls": 2,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 146,
    "amenities": [
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.2,
    "pricePerKwh": 5.5
  },
  {
    "id": "sta-24",
    "name": "大安ForMosa充電站",
    "network": "ForMosa EV",
    "address": "台北市大安區中山路760號",
    "city": "台北市",
    "lat": 25.038,
    "lng": 121.5087,
    "totalStalls": 11,
    "availableStalls": 4,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 105,
    "amenities": [
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 5,
    "pricePerKwh": 5.5
  },
  {
    "id": "sta-25",
    "name": "南港ForMosa超充站",
    "network": "ForMosa EV",
    "address": "台北市南港區中山路856號",
    "city": "台北市",
    "lat": 25.1011,
    "lng": 121.4864,
    "totalStalls": 12,
    "availableStalls": 3,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 132,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.9,
    "pricePerKwh": 5.8
  },
  {
    "id": "sta-26",
    "name": "大安ForMosa購物中心充電站",
    "network": "ForMosa EV",
    "address": "台北市大安區民權路243號",
    "city": "台北市",
    "lat": 25.0398,
    "lng": 121.5875,
    "totalStalls": 8,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 121,
    "amenities": [
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.1,
    "pricePerKwh": 5.8
  },
  {
    "id": "sta-27",
    "name": "信義特斯拉充電站",
    "network": "Tesla",
    "address": "台北市信義區中正路124號",
    "city": "台北市",
    "lat": 25.115,
    "lng": 121.5243,
    "totalStalls": 8,
    "availableStalls": 6,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 218,
    "amenities": [
      "restroom",
      "parking",
      "restaurant",
      "shopping",
      "wifi",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 3.5,
    "pricePerKwh": 7.5
  },
  {
    "id": "sta-28",
    "name": "中正特斯拉超充站",
    "network": "Tesla",
    "address": "台北市中正區民生路680號",
    "city": "台北市",
    "lat": 24.9913,
    "lng": 121.5798,
    "totalStalls": 12,
    "availableStalls": 3,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 228,
    "amenities": [
      "restroom",
      "restaurant",
      "shopping",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 3.8,
    "pricePerKwh": 6.8
  },
  {
    "id": "sta-29",
    "name": "中山特斯拉充電站",
    "network": "Tesla",
    "address": "台北市中山區中山路211號",
    "city": "台北市",
    "lat": 25.0754,
    "lng": 121.5176,
    "totalStalls": 2,
    "availableStalls": 0,
    "chargerType": "V4",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 336,
    "amenities": [
      "restroom",
      "restaurant",
      "shopping",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 3.6,
    "pricePerKwh": 6.8
  },
  {
    "id": "sta-30",
    "name": "大安台灣電力快充站",
    "network": "台灣電力",
    "address": "台北市大安區中正路754號",
    "city": "台北市",
    "lat": 25.1054,
    "lng": 121.5548,
    "totalStalls": 12,
    "availableStalls": 4,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 116,
    "amenities": [
      "restroom",
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.2,
    "pricePerKwh": 5
  },
  {
    "id": "sta-31",
    "name": "北投U-Power快充站",
    "network": "U-Power",
    "address": "台北市北投區復興路123號",
    "city": "台北市",
    "lat": 24.9778,
    "lng": 121.5958,
    "totalStalls": 12,
    "availableStalls": 10,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 234,
    "amenities": [
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "available"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.4,
    "pricePerKwh": 6.5
  },
  {
    "id": "sta-32",
    "name": "中山U-Power快充站",
    "network": "U-Power",
    "address": "台北市中山區復興路323號",
    "city": "台北市",
    "lat": 25.1138,
    "lng": 121.4771,
    "totalStalls": 10,
    "availableStalls": 2,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 109,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "faulted"
      }
    ],
    "openHours": "24小時",
    "rating": 4.5,
    "pricePerKwh": 6.5
  },
  {
    "id": "sta-33",
    "name": "信義裕電慢充站",
    "network": "裕電能源",
    "address": "台北市信義區中山路319號",
    "city": "台北市",
    "lat": 24.9788,
    "lng": 121.5908,
    "totalStalls": 16,
    "availableStalls": 8,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 103,
    "amenities": [
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      },
      {
        "id": 15,
        "status": "in_use"
      },
      {
        "id": 16,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.6,
    "pricePerKwh": 6
  },
  {
    "id": "sta-34",
    "name": "中正停車場自建快充站",
    "network": "停車場自建",
    "address": "台北市中正區民生路779號",
    "city": "台北市",
    "lat": 25.0008,
    "lng": 121.4889,
    "totalStalls": 14,
    "availableStalls": 3,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2",
      "CCS2"
    ],
    "maxKw": 22,
    "amenities": [
      "restroom",
      "parking",
      "hotel"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "faulted"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.4,
    "pricePerKwh": 4
  },
  {
    "id": "sta-35",
    "name": "中山停車場自建快充站",
    "network": "停車場自建",
    "address": "台北市中山區民權路550號",
    "city": "台北市",
    "lat": 25.0121,
    "lng": 121.4786,
    "totalStalls": 8,
    "availableStalls": 2,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 22,
    "amenities": [
      "restroom",
      "parking",
      "hotel",
      "cafe",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.6,
    "pricePerKwh": 4
  },
  {
    "id": "sta-36",
    "name": "文山停車場自建慢充站",
    "network": "停車場自建",
    "address": "台北市文山區光明路717號",
    "city": "台北市",
    "lat": 25.1145,
    "lng": 121.4753,
    "totalStalls": 5,
    "availableStalls": 3,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 13,
    "amenities": [
      "restroom",
      "hotel",
      "cafe",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.5,
    "pricePerKwh": 3.5
  },
  {
    "id": "sta-37",
    "name": "信義停車場自建充電站",
    "network": "停車場自建",
    "address": "台北市信義區自由路388號",
    "city": "台北市",
    "lat": 25.0676,
    "lng": 121.4876,
    "totalStalls": 16,
    "availableStalls": 11,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 17,
    "amenities": [
      "restroom",
      "parking",
      "cafe",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "available"
      },
      {
        "id": 11,
        "status": "available"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      },
      {
        "id": 15,
        "status": "in_use"
      },
      {
        "id": 16,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.5,
    "pricePerKwh": 3.5
  },
  {
    "id": "sta-38",
    "name": "內湖特斯拉快充站",
    "network": "Tesla",
    "address": "台北市內湖區民權路287號",
    "city": "台北市",
    "lat": 25.0472,
    "lng": 121.5882,
    "totalStalls": 10,
    "availableStalls": 6,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 243,
    "amenities": [
      "restroom",
      "restaurant",
      "shopping",
      "wifi",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "faulted"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 3.8,
    "pricePerKwh": 7.5
  },
  {
    "id": "sta-39",
    "name": "內湖U-Power快充站",
    "network": "U-Power",
    "address": "台北市內湖區自由路210號",
    "city": "台北市",
    "lat": 25.0213,
    "lng": 121.5964,
    "totalStalls": 16,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 136,
    "amenities": [
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      },
      {
        "id": 15,
        "status": "in_use"
      },
      {
        "id": 16,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.6,
    "pricePerKwh": 6.5
  },
  {
    "id": "sta-40",
    "name": "內湖U-Power停車場充電樁",
    "network": "U-Power",
    "address": "台北市內湖區復興路855號",
    "city": "台北市",
    "lat": 25.019,
    "lng": 121.4529,
    "totalStalls": 14,
    "availableStalls": 11,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 126,
    "amenities": [
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "available"
      },
      {
        "id": 11,
        "status": "available"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.6,
    "pricePerKwh": 6.8
  },
  {
    "id": "sta-41",
    "name": "萬華停車場自建慢充站",
    "network": "停車場自建",
    "address": "台北市萬華區文化路529號",
    "city": "台北市",
    "lat": 25.0301,
    "lng": 121.5106,
    "totalStalls": 14,
    "availableStalls": 10,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2",
      "CCS2"
    ],
    "maxKw": 8,
    "amenities": [
      "restroom",
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "available"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "faulted"
      }
    ],
    "openHours": "24小時",
    "rating": 3.7,
    "pricePerKwh": 4
  },
  {
    "id": "sta-42",
    "name": "內湖裕電購物中心充電站",
    "network": "裕電能源",
    "address": "台北市內湖區中山路673號",
    "city": "台北市",
    "lat": 25.101,
    "lng": 121.549,
    "totalStalls": 6,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 140,
    "amenities": [
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "faulted"
      }
    ],
    "openHours": "24小時",
    "rating": 3.6,
    "pricePerKwh": 6
  },
  {
    "id": "sta-43",
    "name": "文山U-Power慢充站",
    "network": "U-Power",
    "address": "台北市文山區中山路524號",
    "city": "台北市",
    "lat": 25.021,
    "lng": 121.5752,
    "totalStalls": 14,
    "availableStalls": 5,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 208,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.7,
    "pricePerKwh": 6.5
  },
  {
    "id": "sta-44",
    "name": "士林中油快充站",
    "network": "台灣中油",
    "address": "台北市士林區中正路161號",
    "city": "台北市",
    "lat": 24.9876,
    "lng": 121.5091,
    "totalStalls": 3,
    "availableStalls": 2,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 127,
    "amenities": [
      "restroom",
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 5,
    "pricePerKwh": 5
  },
  {
    "id": "sta-45",
    "name": "南港裕電停車場充電樁",
    "network": "裕電能源",
    "address": "台北市南港區文化路199號",
    "city": "台北市",
    "lat": 25.0058,
    "lng": 121.6037,
    "totalStalls": 2,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 118,
    "amenities": [],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 4.7,
    "pricePerKwh": 5.8
  },
  {
    "id": "sta-46",
    "name": "南港中油快充站",
    "network": "台灣中油",
    "address": "台北市南港區文化路124號",
    "city": "台北市",
    "lat": 25.0376,
    "lng": 121.469,
    "totalStalls": 8,
    "availableStalls": 4,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 125,
    "amenities": [
      "restroom",
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 3.6,
    "pricePerKwh": 5
  },
  {
    "id": "sta-47",
    "name": "士林U-Power充電站",
    "network": "U-Power",
    "address": "台北市士林區民權路374號",
    "city": "台北市",
    "lat": 25.0868,
    "lng": 121.5696,
    "totalStalls": 7,
    "availableStalls": 6,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 250,
    "amenities": [
      "restroom",
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.6,
    "pricePerKwh": 6.8
  },
  {
    "id": "sta-48",
    "name": "北投自建停車場充電樁",
    "network": "自建",
    "address": "台北市北投區文化路689號",
    "city": "台北市",
    "lat": 25.1031,
    "lng": 121.4439,
    "totalStalls": 4,
    "availableStalls": 3,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 12,
    "amenities": [
      "restroom",
      "cafe"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.5,
    "pricePerKwh": 4
  },
  {
    "id": "sta-49",
    "name": "松山裕電購物中心充電站",
    "network": "裕電能源",
    "address": "台北市松山區自由路154號",
    "city": "台北市",
    "lat": 25.0928,
    "lng": 121.4511,
    "totalStalls": 4,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 104,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4,
    "pricePerKwh": 5.8
  },
  {
    "id": "sta-50",
    "name": "中正自建快充站",
    "network": "自建",
    "address": "台北市中正區復興路952號",
    "city": "台北市",
    "lat": 24.9966,
    "lng": 121.5884,
    "totalStalls": 4,
    "availableStalls": 2,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 18,
    "amenities": [
      "restroom",
      "hotel",
      "cafe"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 3.8,
    "pricePerKwh": 4
  },
  {
    "id": "sta-51",
    "name": "北投U-Power停車場充電樁",
    "network": "U-Power",
    "address": "台北市北投區自由路684號",
    "city": "台北市",
    "lat": 25.0936,
    "lng": 121.5009,
    "totalStalls": 14,
    "availableStalls": 2,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 131,
    "amenities": [
      "restroom",
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.5,
    "pricePerKwh": 6.8
  },
  {
    "id": "sta-52",
    "name": "松山中油停車場充電樁",
    "network": "台灣中油",
    "address": "台北市松山區建國路723號",
    "city": "台北市",
    "lat": 25.0501,
    "lng": 121.5719,
    "totalStalls": 8,
    "availableStalls": 3,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 134,
    "amenities": [
      "restroom",
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.6,
    "pricePerKwh": 5
  },
  {
    "id": "sta-53",
    "name": "萬華自建快充站",
    "network": "自建",
    "address": "台北市萬華區自由路777號",
    "city": "台北市",
    "lat": 24.9828,
    "lng": 121.4783,
    "totalStalls": 11,
    "availableStalls": 7,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 8,
    "amenities": [
      "parking",
      "hotel",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.1,
    "pricePerKwh": 4
  },
  {
    "id": "sta-54",
    "name": "萬華裕電充電站",
    "network": "裕電能源",
    "address": "台北市萬華區建國路349號",
    "city": "台北市",
    "lat": 25.0629,
    "lng": 121.4874,
    "totalStalls": 15,
    "availableStalls": 10,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 109,
    "amenities": [
      "restroom",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "available"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      },
      {
        "id": 15,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.4,
    "pricePerKwh": 6
  },
  {
    "id": "sta-55",
    "name": "萬華ForMosa充電站",
    "network": "ForMosa EV",
    "address": "台北市萬華區中山路177號",
    "city": "台北市",
    "lat": 25.057,
    "lng": 121.4357,
    "totalStalls": 3,
    "availableStalls": 2,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 132,
    "amenities": [
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4,
    "pricePerKwh": 5.5
  },
  {
    "id": "sta-56",
    "name": "內湖U-Power快充站",
    "network": "U-Power",
    "address": "台北市內湖區民權路762號",
    "city": "台北市",
    "lat": 25.0258,
    "lng": 121.4594,
    "totalStalls": 13,
    "availableStalls": 6,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 149,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 3.7,
    "pricePerKwh": 6.8
  },
  {
    "id": "sta-57",
    "name": "松山U-Power充電站",
    "network": "U-Power",
    "address": "台北市松山區中正路689號",
    "city": "台北市",
    "lat": 25.0576,
    "lng": 121.4822,
    "totalStalls": 8,
    "availableStalls": 1,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 250,
    "amenities": [
      "restroom",
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "faulted"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 3.5,
    "pricePerKwh": 6.3
  },
  {
    "id": "sta-58",
    "name": "松山特斯拉慢充站",
    "network": "Tesla",
    "address": "台北市松山區復興路449號",
    "city": "台北市",
    "lat": 25.0786,
    "lng": 121.5558,
    "totalStalls": 13,
    "availableStalls": 12,
    "chargerType": "V4",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 343,
    "amenities": [
      "restroom",
      "restaurant",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "available"
      },
      {
        "id": 11,
        "status": "available"
      },
      {
        "id": 12,
        "status": "available"
      },
      {
        "id": 13,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.1,
    "pricePerKwh": 7
  },
  {
    "id": "sta-59",
    "name": "文山台灣電力充電站",
    "network": "台灣電力",
    "address": "台北市文山區文化路116號",
    "city": "台北市",
    "lat": 25.0051,
    "lng": 121.443,
    "totalStalls": 10,
    "availableStalls": 9,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 101,
    "amenities": [
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.6,
    "pricePerKwh": 4.8
  },
  {
    "id": "sta-60",
    "name": "北投裕電購物中心充電站",
    "network": "裕電能源",
    "address": "台北市北投區中山路862號",
    "city": "台北市",
    "lat": 25.0768,
    "lng": 121.5866,
    "totalStalls": 13,
    "availableStalls": 5,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 250,
    "amenities": [
      "restroom",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 3.5,
    "pricePerKwh": 6
  },
  {
    "id": "sta-61",
    "name": "北投U-Power快充站",
    "network": "U-Power",
    "address": "台北市北投區復興路952號",
    "city": "台北市",
    "lat": 25.0609,
    "lng": 121.4274,
    "totalStalls": 13,
    "availableStalls": 10,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 224,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "available"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.8,
    "pricePerKwh": 6.5
  },
  {
    "id": "sta-62",
    "name": "萬華中油購物中心充電站",
    "network": "台灣中油",
    "address": "台北市萬華區光明路280號",
    "city": "台北市",
    "lat": 25.0947,
    "lng": 121.4988,
    "totalStalls": 4,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 132,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.8,
    "pricePerKwh": 5.5
  },
  {
    "id": "sta-63",
    "name": "南港中油超充站",
    "network": "台灣中油",
    "address": "台北市南港區中正路749號",
    "city": "台北市",
    "lat": 25.0071,
    "lng": 121.4469,
    "totalStalls": 15,
    "availableStalls": 10,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 104,
    "amenities": [
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "available"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      },
      {
        "id": 15,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 4.8,
    "pricePerKwh": 5
  },
  {
    "id": "sta-64",
    "name": "中山台灣電力超充站",
    "network": "台灣電力",
    "address": "台北市中山區建國路185號",
    "city": "台北市",
    "lat": 25.0263,
    "lng": 121.4799,
    "totalStalls": 13,
    "availableStalls": 5,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 114,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.6,
    "pricePerKwh": 5
  },
  {
    "id": "sta-65",
    "name": "文山自建慢充站",
    "network": "自建",
    "address": "台北市文山區和平路421號",
    "city": "台北市",
    "lat": 25.1144,
    "lng": 121.4573,
    "totalStalls": 11,
    "availableStalls": 8,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 7,
    "amenities": [
      "restroom",
      "parking",
      "cafe"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.8,
    "pricePerKwh": 4
  },
  {
    "id": "sta-66",
    "name": "中正台灣電力充電站",
    "network": "台灣電力",
    "address": "台北市中正區光明路919號",
    "city": "台北市",
    "lat": 25.033,
    "lng": 121.4604,
    "totalStalls": 2,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 136,
    "amenities": [
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4,
    "pricePerKwh": 4.8
  },
  {
    "id": "sta-67",
    "name": "士林ForMosa充電站",
    "network": "ForMosa EV",
    "address": "台北市士林區中正路612號",
    "city": "台北市",
    "lat": 25.0496,
    "lng": 121.4298,
    "totalStalls": 14,
    "availableStalls": 2,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 243,
    "amenities": [
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 4.1,
    "pricePerKwh": 5.5
  },
  {
    "id": "sta-68",
    "name": "內湖停車場自建停車場充電樁",
    "network": "停車場自建",
    "address": "台北市內湖區中正路670號",
    "city": "台北市",
    "lat": 25.1048,
    "lng": 121.4399,
    "totalStalls": 13,
    "availableStalls": 3,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 15,
    "amenities": [
      "restroom",
      "hotel",
      "cafe",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.7,
    "pricePerKwh": 4.5
  },
  {
    "id": "sta-69",
    "name": "中山停車場自建慢充站",
    "network": "停車場自建",
    "address": "台北市中山區民權路269號",
    "city": "台北市",
    "lat": 25.0798,
    "lng": 121.4666,
    "totalStalls": 2,
    "availableStalls": 1,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2",
      "CCS2"
    ],
    "maxKw": 12,
    "amenities": [
      "restroom",
      "hotel",
      "cafe",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.6,
    "pricePerKwh": 4.5
  },
  {
    "id": "sta-70",
    "name": "士林特斯拉快充站",
    "network": "Tesla",
    "address": "台北市士林區建國路578號",
    "city": "台北市",
    "lat": 25.0662,
    "lng": 121.4369,
    "totalStalls": 4,
    "availableStalls": 1,
    "chargerType": "V4",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 316,
    "amenities": [
      "parking",
      "restaurant",
      "shopping",
      "wifi",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 4.8,
    "pricePerKwh": 7
  },
  {
    "id": "sta-71",
    "name": "中正中油充電站",
    "network": "台灣中油",
    "address": "台北市中正區復興路315號",
    "city": "台北市",
    "lat": 25.1113,
    "lng": 121.5601,
    "totalStalls": 13,
    "availableStalls": 6,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 119,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.2,
    "pricePerKwh": 5
  },
  {
    "id": "sta-72",
    "name": "大安台灣電力充電站",
    "network": "台灣電力",
    "address": "台北市大安區民權路225號",
    "city": "台北市",
    "lat": 25.0036,
    "lng": 121.4832,
    "totalStalls": 13,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 140,
    "amenities": [
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 4.1,
    "pricePerKwh": 4.8
  },
  {
    "id": "sta-73",
    "name": "信義自建快充站",
    "network": "自建",
    "address": "台北市信義區民權路413號",
    "city": "台北市",
    "lat": 25.0496,
    "lng": 121.4472,
    "totalStalls": 9,
    "availableStalls": 3,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 11,
    "amenities": [
      "restroom",
      "parking",
      "cafe"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 3.7,
    "pricePerKwh": 4
  },
  {
    "id": "sta-74",
    "name": "松山停車場自建充電站",
    "network": "停車場自建",
    "address": "台北市松山區光明路342號",
    "city": "台北市",
    "lat": 25.1111,
    "lng": 121.4754,
    "totalStalls": 5,
    "availableStalls": 4,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2",
      "CCS2"
    ],
    "maxKw": 19,
    "amenities": [
      "restroom",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 4.2,
    "pricePerKwh": 4
  },
  {
    "id": "sta-75",
    "name": "信義中油快充站",
    "network": "台灣中油",
    "address": "台北市信義區復興路783號",
    "city": "台北市",
    "lat": 25.0776,
    "lng": 121.4606,
    "totalStalls": 8,
    "availableStalls": 2,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 128,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "faulted"
      }
    ],
    "openHours": "24小時",
    "rating": 4.2,
    "pricePerKwh": 5
  },
  {
    "id": "sta-76",
    "name": "松山台灣電力充電站",
    "network": "台灣電力",
    "address": "台北市松山區和平路410號",
    "city": "台北市",
    "lat": 25.1116,
    "lng": 121.508,
    "totalStalls": 12,
    "availableStalls": 2,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 144,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 3.5,
    "pricePerKwh": 5
  },
  {
    "id": "sta-77",
    "name": "北投中油快充站",
    "network": "台灣中油",
    "address": "台北市北投區中正路963號",
    "city": "台北市",
    "lat": 25.0078,
    "lng": 121.5492,
    "totalStalls": 13,
    "availableStalls": 12,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 105,
    "amenities": [
      "restroom",
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "available"
      },
      {
        "id": 11,
        "status": "available"
      },
      {
        "id": 12,
        "status": "available"
      },
      {
        "id": 13,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 4.3,
    "pricePerKwh": 5.5
  },
  {
    "id": "sta-78",
    "name": "內湖特斯拉超充站",
    "network": "Tesla",
    "address": "台北市內湖區民生路278號",
    "city": "台北市",
    "lat": 25.0282,
    "lng": 121.4436,
    "totalStalls": 12,
    "availableStalls": 1,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 231,
    "amenities": [
      "restroom",
      "parking",
      "restaurant",
      "shopping",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.5,
    "pricePerKwh": 7
  },
  {
    "id": "sta-79",
    "name": "信義中油充電站",
    "network": "台灣中油",
    "address": "台北市信義區光明路724號",
    "city": "台北市",
    "lat": 25.0035,
    "lng": 121.5343,
    "totalStalls": 2,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 124,
    "amenities": [
      "restroom",
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.8,
    "pricePerKwh": 5
  },
  {
    "id": "sta-80",
    "name": "文山裕電慢充站",
    "network": "裕電能源",
    "address": "台北市文山區自由路937號",
    "city": "台北市",
    "lat": 25.0222,
    "lng": 121.4609,
    "totalStalls": 9,
    "availableStalls": 3,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 132,
    "amenities": [
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 3.8,
    "pricePerKwh": 5.8
  },
  {
    "id": "sta-81",
    "name": "中和U-Power快充站",
    "network": "U-Power",
    "address": "新北市中和區和平路279號",
    "city": "新北市",
    "lat": 24.9996,
    "lng": 121.3507,
    "totalStalls": 8,
    "availableStalls": 5,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 218,
    "amenities": [
      "restroom",
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.8,
    "pricePerKwh": 6.8
  },
  {
    "id": "sta-82",
    "name": "淡水台灣電力慢充站",
    "network": "台灣電力",
    "address": "新北市淡水區中山路263號",
    "city": "新北市",
    "lat": 25.0834,
    "lng": 121.4089,
    "totalStalls": 13,
    "availableStalls": 6,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 120,
    "amenities": [
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 4.9,
    "pricePerKwh": 5
  },
  {
    "id": "sta-83",
    "name": "中和台灣電力快充站",
    "network": "台灣電力",
    "address": "新北市中和區中山路653號",
    "city": "新北市",
    "lat": 25.0732,
    "lng": 121.5513,
    "totalStalls": 15,
    "availableStalls": 8,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 115,
    "amenities": [
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      },
      {
        "id": 15,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 3.9,
    "pricePerKwh": 4.8
  },
  {
    "id": "sta-84",
    "name": "樹林特斯拉購物中心充電站",
    "network": "Tesla",
    "address": "新北市樹林區民生路835號",
    "city": "新北市",
    "lat": 24.9444,
    "lng": 121.5418,
    "totalStalls": 2,
    "availableStalls": 1,
    "chargerType": "V4",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 313,
    "amenities": [
      "parking",
      "restaurant",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.7,
    "pricePerKwh": 6.8
  },
  {
    "id": "sta-85",
    "name": "三重自建快充站",
    "network": "自建",
    "address": "新北市三重區中正路769號",
    "city": "新北市",
    "lat": 25.0012,
    "lng": 121.4049,
    "totalStalls": 5,
    "availableStalls": 2,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 11,
    "amenities": [
      "restroom",
      "parking",
      "cafe"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 3.8,
    "pricePerKwh": 4
  },
  {
    "id": "sta-86",
    "name": "土城停車場自建快充站",
    "network": "停車場自建",
    "address": "新北市土城區中正路730號",
    "city": "新北市",
    "lat": 24.9103,
    "lng": 121.4623,
    "totalStalls": 15,
    "availableStalls": 7,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2",
      "CCS2"
    ],
    "maxKw": 16,
    "amenities": [
      "restroom",
      "parking",
      "hotel",
      "cafe",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      },
      {
        "id": 15,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4,
    "pricePerKwh": 4.5
  },
  {
    "id": "sta-87",
    "name": "汐止U-Power慢充站",
    "network": "U-Power",
    "address": "新北市汐止區民權路628號",
    "city": "新北市",
    "lat": 25.0236,
    "lng": 121.5826,
    "totalStalls": 14,
    "availableStalls": 12,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 238,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "available"
      },
      {
        "id": 11,
        "status": "available"
      },
      {
        "id": 12,
        "status": "available"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4,
    "pricePerKwh": 6.5
  },
  {
    "id": "sta-88",
    "name": "淡水ForMosa充電站",
    "network": "ForMosa EV",
    "address": "新北市淡水區光明路886號",
    "city": "新北市",
    "lat": 24.9565,
    "lng": 121.464,
    "totalStalls": 16,
    "availableStalls": 9,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 146,
    "amenities": [
      "restroom",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      },
      {
        "id": 15,
        "status": "in_use"
      },
      {
        "id": 16,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 4.9,
    "pricePerKwh": 5.8
  },
  {
    "id": "sta-89",
    "name": "蘆洲中油購物中心充電站",
    "network": "台灣中油",
    "address": "新北市蘆洲區和平路253號",
    "city": "新北市",
    "lat": 24.9165,
    "lng": 121.5061,
    "totalStalls": 2,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 141,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.1,
    "pricePerKwh": 5.5
  },
  {
    "id": "sta-90",
    "name": "蘆洲U-Power停車場充電樁",
    "network": "U-Power",
    "address": "新北市蘆洲區民生路352號",
    "city": "新北市",
    "lat": 24.9896,
    "lng": 121.5741,
    "totalStalls": 10,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 126,
    "amenities": [
      "restroom",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 4.5,
    "pricePerKwh": 6.3
  },
  {
    "id": "sta-91",
    "name": "三峽ForMosa購物中心充電站",
    "network": "ForMosa EV",
    "address": "新北市三峽區中正路543號",
    "city": "新北市",
    "lat": 25.026,
    "lng": 121.3762,
    "totalStalls": 14,
    "availableStalls": 11,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 102,
    "amenities": [
      "restroom",
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "available"
      },
      {
        "id": 11,
        "status": "available"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.6,
    "pricePerKwh": 5.5
  },
  {
    "id": "sta-92",
    "name": "板橋特斯拉超充站",
    "network": "Tesla",
    "address": "新北市板橋區和平路594號",
    "city": "新北市",
    "lat": 24.9444,
    "lng": 121.5048,
    "totalStalls": 5,
    "availableStalls": 1,
    "chargerType": "V4",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 327,
    "amenities": [
      "parking",
      "restaurant",
      "shopping",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.7,
    "pricePerKwh": 7.5
  },
  {
    "id": "sta-93",
    "name": "中和台灣電力快充站",
    "network": "台灣電力",
    "address": "新北市中和區民權路251號",
    "city": "新北市",
    "lat": 24.9378,
    "lng": 121.4299,
    "totalStalls": 2,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 139,
    "amenities": [
      "restroom",
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.5,
    "pricePerKwh": 4.8
  },
  {
    "id": "sta-94",
    "name": "三重台灣電力超充站",
    "network": "台灣電力",
    "address": "新北市三重區中山路861號",
    "city": "新北市",
    "lat": 25.0128,
    "lng": 121.3997,
    "totalStalls": 14,
    "availableStalls": 2,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 141,
    "amenities": [],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.8,
    "pricePerKwh": 4.8
  },
  {
    "id": "sta-95",
    "name": "三峽裕電慢充站",
    "network": "裕電能源",
    "address": "新北市三峽區中山路241號",
    "city": "新北市",
    "lat": 24.9376,
    "lng": 121.584,
    "totalStalls": 13,
    "availableStalls": 6,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 216,
    "amenities": [
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 5,
    "pricePerKwh": 6
  },
  {
    "id": "sta-96",
    "name": "中和自建充電站",
    "network": "自建",
    "address": "新北市中和區民生路140號",
    "city": "新北市",
    "lat": 24.9943,
    "lng": 121.3483,
    "totalStalls": 5,
    "availableStalls": 0,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 17,
    "amenities": [
      "cafe",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "faulted"
      }
    ],
    "openHours": "24小時",
    "rating": 5,
    "pricePerKwh": 4
  },
  {
    "id": "sta-97",
    "name": "樹林ForMosa充電站",
    "network": "ForMosa EV",
    "address": "新北市樹林區和平路239號",
    "city": "新北市",
    "lat": 24.8809,
    "lng": 121.5646,
    "totalStalls": 14,
    "availableStalls": 4,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 123,
    "amenities": [
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.1,
    "pricePerKwh": 5.5
  },
  {
    "id": "sta-98",
    "name": "三峽自建充電站",
    "network": "自建",
    "address": "新北市三峽區民權路822號",
    "city": "新北市",
    "lat": 25.0381,
    "lng": 121.487,
    "totalStalls": 6,
    "availableStalls": 0,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 15,
    "amenities": [
      "restroom",
      "cafe",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.8,
    "pricePerKwh": 4
  },
  {
    "id": "sta-99",
    "name": "三峽自建超充站",
    "network": "自建",
    "address": "新北市三峽區中山路798號",
    "city": "新北市",
    "lat": 24.9855,
    "lng": 121.4382,
    "totalStalls": 6,
    "availableStalls": 2,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 10,
    "amenities": [
      "restroom",
      "parking",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 4,
    "pricePerKwh": 4
  },
  {
    "id": "sta-100",
    "name": "三峽自建充電站",
    "network": "自建",
    "address": "新北市三峽區民生路129號",
    "city": "新北市",
    "lat": 25.0686,
    "lng": 121.4122,
    "totalStalls": 15,
    "availableStalls": 3,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 18,
    "amenities": [
      "parking",
      "hotel",
      "cafe",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      },
      {
        "id": 15,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.4,
    "pricePerKwh": 4
  },
  {
    "id": "sta-101",
    "name": "淡水特斯拉快充站",
    "network": "Tesla",
    "address": "新北市淡水區復興路828號",
    "city": "新北市",
    "lat": 25.055,
    "lng": 121.4363,
    "totalStalls": 16,
    "availableStalls": 4,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 206,
    "amenities": [
      "restroom",
      "parking",
      "restaurant",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      },
      {
        "id": 15,
        "status": "in_use"
      },
      {
        "id": 16,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.2,
    "pricePerKwh": 6.8
  },
  {
    "id": "sta-102",
    "name": "汐止停車場自建停車場充電樁",
    "network": "停車場自建",
    "address": "新北市汐止區自由路468號",
    "city": "新北市",
    "lat": 24.9915,
    "lng": 121.5404,
    "totalStalls": 14,
    "availableStalls": 12,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 20,
    "amenities": [
      "parking",
      "hotel",
      "cafe"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "available"
      },
      {
        "id": 11,
        "status": "available"
      },
      {
        "id": 12,
        "status": "available"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 3.6,
    "pricePerKwh": 4.5
  },
  {
    "id": "sta-103",
    "name": "新莊裕電超充站",
    "network": "裕電能源",
    "address": "新北市新莊區復興路467號",
    "city": "新北市",
    "lat": 25.0058,
    "lng": 121.3484,
    "totalStalls": 6,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 120,
    "amenities": [
      "restroom",
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.2,
    "pricePerKwh": 6
  },
  {
    "id": "sta-104",
    "name": "汐止U-Power充電站",
    "network": "U-Power",
    "address": "新北市汐止區建國路357號",
    "city": "新北市",
    "lat": 25.1024,
    "lng": 121.4675,
    "totalStalls": 13,
    "availableStalls": 6,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 145,
    "amenities": [
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.4,
    "pricePerKwh": 6.8
  },
  {
    "id": "sta-105",
    "name": "新店停車場自建快充站",
    "network": "停車場自建",
    "address": "新北市新店區民權路897號",
    "city": "新北市",
    "lat": 24.9288,
    "lng": 121.4682,
    "totalStalls": 16,
    "availableStalls": 4,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2",
      "CCS2"
    ],
    "maxKw": 13,
    "amenities": [
      "restroom",
      "hotel",
      "cafe"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      },
      {
        "id": 15,
        "status": "in_use"
      },
      {
        "id": 16,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.1,
    "pricePerKwh": 3.5
  },
  {
    "id": "sta-106",
    "name": "板橋U-Power快充站",
    "network": "U-Power",
    "address": "新北市板橋區光明路697號",
    "city": "新北市",
    "lat": 24.984,
    "lng": 121.3866,
    "totalStalls": 8,
    "availableStalls": 3,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 108,
    "amenities": [
      "restroom",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.2,
    "pricePerKwh": 6.8
  },
  {
    "id": "sta-107",
    "name": "中和特斯拉充電站",
    "network": "Tesla",
    "address": "新北市中和區民權路352號",
    "city": "新北市",
    "lat": 25.0836,
    "lng": 121.4328,
    "totalStalls": 6,
    "availableStalls": 4,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 216,
    "amenities": [
      "parking",
      "wifi",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 3.5,
    "pricePerKwh": 7
  },
  {
    "id": "sta-108",
    "name": "鶯歌中油充電站",
    "network": "台灣中油",
    "address": "新北市鶯歌區自由路771號",
    "city": "新北市",
    "lat": 24.9127,
    "lng": 121.4025,
    "totalStalls": 10,
    "availableStalls": 5,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 102,
    "amenities": [
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.3,
    "pricePerKwh": 5
  },
  {
    "id": "sta-109",
    "name": "汐止自建快充站",
    "network": "自建",
    "address": "新北市汐止區自由路215號",
    "city": "新北市",
    "lat": 24.9583,
    "lng": 121.3916,
    "totalStalls": 8,
    "availableStalls": 5,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 13,
    "amenities": [
      "restroom",
      "hotel",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "faulted"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.6,
    "pricePerKwh": 4
  },
  {
    "id": "sta-110",
    "name": "新店裕電停車場充電樁",
    "network": "裕電能源",
    "address": "新北市新店區中正路785號",
    "city": "新北市",
    "lat": 24.9638,
    "lng": 121.499,
    "totalStalls": 2,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 137,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.8,
    "pricePerKwh": 5.8
  },
  {
    "id": "sta-111",
    "name": "新莊台灣電力快充站",
    "network": "台灣電力",
    "address": "新北市新莊區民生路481號",
    "city": "新北市",
    "lat": 25.0204,
    "lng": 121.4289,
    "totalStalls": 11,
    "availableStalls": 2,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 142,
    "amenities": [
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.6,
    "pricePerKwh": 4.8
  },
  {
    "id": "sta-112",
    "name": "淡水自建快充站",
    "network": "自建",
    "address": "新北市淡水區自由路460號",
    "city": "新北市",
    "lat": 24.8807,
    "lng": 121.3887,
    "totalStalls": 2,
    "availableStalls": 1,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 17,
    "amenities": [
      "restroom",
      "hotel",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.2,
    "pricePerKwh": 4
  },
  {
    "id": "sta-113",
    "name": "永和台灣電力快充站",
    "network": "台灣電力",
    "address": "新北市永和區文化路216號",
    "city": "新北市",
    "lat": 24.9097,
    "lng": 121.5543,
    "totalStalls": 7,
    "availableStalls": 6,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 123,
    "amenities": [
      "restroom",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.5,
    "pricePerKwh": 5
  },
  {
    "id": "sta-114",
    "name": "永和自建快充站",
    "network": "自建",
    "address": "新北市永和區中正路491號",
    "city": "新北市",
    "lat": 25.0976,
    "lng": 121.4406,
    "totalStalls": 13,
    "availableStalls": 6,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 9,
    "amenities": [
      "restroom",
      "parking",
      "hotel",
      "cafe"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.7,
    "pricePerKwh": 4
  },
  {
    "id": "sta-115",
    "name": "永和台灣電力慢充站",
    "network": "台灣電力",
    "address": "新北市永和區民生路883號",
    "city": "新北市",
    "lat": 24.9142,
    "lng": 121.4993,
    "totalStalls": 2,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 124,
    "amenities": [
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.9,
    "pricePerKwh": 5
  },
  {
    "id": "sta-116",
    "name": "土城U-Power快充站",
    "network": "U-Power",
    "address": "新北市土城區民權路887號",
    "city": "新北市",
    "lat": 25.0263,
    "lng": 121.39,
    "totalStalls": 7,
    "availableStalls": 4,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 237,
    "amenities": [
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 3.7,
    "pricePerKwh": 6.8
  },
  {
    "id": "sta-117",
    "name": "中和自建購物中心充電站",
    "network": "自建",
    "address": "新北市中和區中正路870號",
    "city": "新北市",
    "lat": 24.9151,
    "lng": 121.5531,
    "totalStalls": 9,
    "availableStalls": 3,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 11,
    "amenities": [
      "restroom",
      "hotel",
      "cafe",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 5,
    "pricePerKwh": 3
  },
  {
    "id": "sta-118",
    "name": "樹林ForMosa停車場充電樁",
    "network": "ForMosa EV",
    "address": "新北市樹林區中山路817號",
    "city": "新北市",
    "lat": 24.9982,
    "lng": 121.436,
    "totalStalls": 3,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 144,
    "amenities": [
      "restroom"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 3.7,
    "pricePerKwh": 5.5
  },
  {
    "id": "sta-119",
    "name": "土城ForMosa充電站",
    "network": "ForMosa EV",
    "address": "新北市土城區建國路820號",
    "city": "新北市",
    "lat": 24.9421,
    "lng": 121.4423,
    "totalStalls": 8,
    "availableStalls": 7,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 144,
    "amenities": [
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 4.8,
    "pricePerKwh": 6
  },
  {
    "id": "sta-120",
    "name": "蘆洲停車場自建快充站",
    "network": "停車場自建",
    "address": "新北市蘆洲區中山路312號",
    "city": "新北市",
    "lat": 24.9146,
    "lng": 121.5438,
    "totalStalls": 3,
    "availableStalls": 0,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 13,
    "amenities": [
      "restroom",
      "parking",
      "hotel",
      "cafe"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.9,
    "pricePerKwh": 4.5
  },
  {
    "id": "sta-121",
    "name": "新店U-Power充電站",
    "network": "U-Power",
    "address": "新北市新店區光明路436號",
    "city": "新北市",
    "lat": 25.0206,
    "lng": 121.4934,
    "totalStalls": 11,
    "availableStalls": 10,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 214,
    "amenities": [
      "restroom",
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "available"
      },
      {
        "id": 11,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 3.9,
    "pricePerKwh": 6.3
  },
  {
    "id": "sta-122",
    "name": "汐止ForMosa快充站",
    "network": "ForMosa EV",
    "address": "新北市汐止區民權路562號",
    "city": "新北市",
    "lat": 25.052,
    "lng": 121.3884,
    "totalStalls": 9,
    "availableStalls": 5,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 212,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4,
    "pricePerKwh": 5.8
  },
  {
    "id": "sta-123",
    "name": "永和裕電充電站",
    "network": "裕電能源",
    "address": "新北市永和區自由路555號",
    "city": "新北市",
    "lat": 24.9115,
    "lng": 121.3964,
    "totalStalls": 10,
    "availableStalls": 0,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 227,
    "amenities": [
      "restroom",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 3.7,
    "pricePerKwh": 5.8
  },
  {
    "id": "sta-124",
    "name": "汐止台灣電力超充站",
    "network": "台灣電力",
    "address": "新北市汐止區復興路425號",
    "city": "新北市",
    "lat": 24.9683,
    "lng": 121.418,
    "totalStalls": 6,
    "availableStalls": 3,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 120,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.1,
    "pricePerKwh": 5
  },
  {
    "id": "sta-125",
    "name": "淡水裕電購物中心充電站",
    "network": "裕電能源",
    "address": "新北市淡水區和平路644號",
    "city": "新北市",
    "lat": 25.1041,
    "lng": 121.4502,
    "totalStalls": 15,
    "availableStalls": 14,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 135,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "available"
      },
      {
        "id": 11,
        "status": "available"
      },
      {
        "id": 12,
        "status": "available"
      },
      {
        "id": 13,
        "status": "available"
      },
      {
        "id": 14,
        "status": "available"
      },
      {
        "id": 15,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 3.9,
    "pricePerKwh": 6.2
  },
  {
    "id": "sta-126",
    "name": "永和中油充電站",
    "network": "台灣中油",
    "address": "新北市永和區復興路174號",
    "city": "新北市",
    "lat": 24.9865,
    "lng": 121.4424,
    "totalStalls": 16,
    "availableStalls": 6,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 131,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      },
      {
        "id": 15,
        "status": "in_use"
      },
      {
        "id": 16,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.5,
    "pricePerKwh": 5.5
  },
  {
    "id": "sta-127",
    "name": "中和裕電充電站",
    "network": "裕電能源",
    "address": "新北市中和區光明路835號",
    "city": "新北市",
    "lat": 25.0072,
    "lng": 121.4581,
    "totalStalls": 15,
    "availableStalls": 14,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 228,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "available"
      },
      {
        "id": 11,
        "status": "available"
      },
      {
        "id": 12,
        "status": "available"
      },
      {
        "id": 13,
        "status": "available"
      },
      {
        "id": 14,
        "status": "available"
      },
      {
        "id": 15,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 4.2,
    "pricePerKwh": 6
  },
  {
    "id": "sta-128",
    "name": "汐止中油購物中心充電站",
    "network": "台灣中油",
    "address": "新北市汐止區民權路892號",
    "city": "新北市",
    "lat": 25.0852,
    "lng": 121.4256,
    "totalStalls": 5,
    "availableStalls": 3,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 136,
    "amenities": [
      "restroom",
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.5,
    "pricePerKwh": 5.5
  },
  {
    "id": "sta-129",
    "name": "永和特斯拉購物中心充電站",
    "network": "Tesla",
    "address": "新北市永和區和平路256號",
    "city": "新北市",
    "lat": 24.9894,
    "lng": 121.4977,
    "totalStalls": 14,
    "availableStalls": 2,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 246,
    "amenities": [
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.7,
    "pricePerKwh": 7.5
  },
  {
    "id": "sta-130",
    "name": "樹林U-Power充電站",
    "network": "U-Power",
    "address": "新北市樹林區建國路338號",
    "city": "新北市",
    "lat": 24.9577,
    "lng": 121.5795,
    "totalStalls": 11,
    "availableStalls": 6,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 124,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 4.2,
    "pricePerKwh": 6.5
  },
  {
    "id": "sta-131",
    "name": "中和停車場自建購物中心充電站",
    "network": "停車場自建",
    "address": "新北市中和區民權路927號",
    "city": "新北市",
    "lat": 25.0872,
    "lng": 121.4252,
    "totalStalls": 7,
    "availableStalls": 3,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2",
      "CCS2"
    ],
    "maxKw": 7,
    "amenities": [
      "restroom",
      "parking",
      "hotel",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.8,
    "pricePerKwh": 4
  },
  {
    "id": "sta-132",
    "name": "永和台灣電力超充站",
    "network": "台灣電力",
    "address": "新北市永和區民權路469號",
    "city": "新北市",
    "lat": 24.8797,
    "lng": 121.4201,
    "totalStalls": 16,
    "availableStalls": 4,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 137,
    "amenities": [
      "restroom"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      },
      {
        "id": 15,
        "status": "in_use"
      },
      {
        "id": 16,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.3,
    "pricePerKwh": 4.8
  },
  {
    "id": "sta-133",
    "name": "土城台灣電力超充站",
    "network": "台灣電力",
    "address": "新北市土城區民權路326號",
    "city": "新北市",
    "lat": 24.969,
    "lng": 121.533,
    "totalStalls": 7,
    "availableStalls": 6,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 124,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.1,
    "pricePerKwh": 5
  },
  {
    "id": "sta-134",
    "name": "鶯歌中油充電站",
    "network": "台灣中油",
    "address": "新北市鶯歌區自由路667號",
    "city": "新北市",
    "lat": 24.9952,
    "lng": 121.4731,
    "totalStalls": 13,
    "availableStalls": 11,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 104,
    "amenities": [
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "available"
      },
      {
        "id": 11,
        "status": "available"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 4.8,
    "pricePerKwh": 5
  },
  {
    "id": "sta-135",
    "name": "汐止台灣電力超充站",
    "network": "台灣電力",
    "address": "新北市汐止區民生路464號",
    "city": "新北市",
    "lat": 24.9442,
    "lng": 121.5856,
    "totalStalls": 11,
    "availableStalls": 10,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 136,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "available"
      },
      {
        "id": 11,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 5,
    "pricePerKwh": 4.8
  },
  {
    "id": "sta-136",
    "name": "鶯歌中油快充站",
    "network": "台灣中油",
    "address": "新北市鶯歌區文化路242號",
    "city": "新北市",
    "lat": 25.0084,
    "lng": 121.4407,
    "totalStalls": 6,
    "availableStalls": 2,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 144,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.1,
    "pricePerKwh": 5
  },
  {
    "id": "sta-137",
    "name": "淡水裕電快充站",
    "network": "裕電能源",
    "address": "新北市淡水區中正路245號",
    "city": "新北市",
    "lat": 25.0565,
    "lng": 121.4886,
    "totalStalls": 7,
    "availableStalls": 4,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 105,
    "amenities": [
      "restroom",
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.7,
    "pricePerKwh": 5.8
  },
  {
    "id": "sta-138",
    "name": "蘆洲裕電購物中心充電站",
    "network": "裕電能源",
    "address": "新北市蘆洲區建國路723號",
    "city": "新北市",
    "lat": 25.1073,
    "lng": 121.385,
    "totalStalls": 10,
    "availableStalls": 4,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 108,
    "amenities": [
      "restroom",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.5,
    "pricePerKwh": 6
  },
  {
    "id": "sta-139",
    "name": "板橋中油快充站",
    "network": "台灣中油",
    "address": "新北市板橋區文化路712號",
    "city": "新北市",
    "lat": 25.0273,
    "lng": 121.3531,
    "totalStalls": 11,
    "availableStalls": 3,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 121,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.5,
    "pricePerKwh": 5
  },
  {
    "id": "sta-140",
    "name": "三峽台灣電力購物中心充電站",
    "network": "台灣電力",
    "address": "新北市三峽區復興路698號",
    "city": "新北市",
    "lat": 24.9643,
    "lng": 121.5328,
    "totalStalls": 6,
    "availableStalls": 2,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 143,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 4.6,
    "pricePerKwh": 4.8
  },
  {
    "id": "sta-141",
    "name": "新店台灣電力慢充站",
    "network": "台灣電力",
    "address": "新北市新店區自由路371號",
    "city": "新北市",
    "lat": 24.96,
    "lng": 121.4926,
    "totalStalls": 10,
    "availableStalls": 5,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 131,
    "amenities": [],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.2,
    "pricePerKwh": 4.8
  },
  {
    "id": "sta-142",
    "name": "三重裕電快充站",
    "network": "裕電能源",
    "address": "新北市三重區光明路555號",
    "city": "新北市",
    "lat": 24.9311,
    "lng": 121.4595,
    "totalStalls": 16,
    "availableStalls": 3,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 237,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      },
      {
        "id": 15,
        "status": "in_use"
      },
      {
        "id": 16,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.9,
    "pricePerKwh": 5.8
  },
  {
    "id": "sta-143",
    "name": "新莊ForMosa充電站",
    "network": "ForMosa EV",
    "address": "新北市新莊區復興路459號",
    "city": "新北市",
    "lat": 24.9353,
    "lng": 121.5453,
    "totalStalls": 14,
    "availableStalls": 1,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 233,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.5,
    "pricePerKwh": 5.8
  },
  {
    "id": "sta-144",
    "name": "汐止特斯拉超充站",
    "network": "Tesla",
    "address": "新北市汐止區民生路820號",
    "city": "新北市",
    "lat": 25.025,
    "lng": 121.377,
    "totalStalls": 7,
    "availableStalls": 6,
    "chargerType": "V4",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 301,
    "amenities": [
      "parking",
      "shopping",
      "wifi",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.2,
    "pricePerKwh": 6.8
  },
  {
    "id": "sta-145",
    "name": "永和U-Power超充站",
    "network": "U-Power",
    "address": "新北市永和區中山路593號",
    "city": "新北市",
    "lat": 25.0813,
    "lng": 121.456,
    "totalStalls": 12,
    "availableStalls": 7,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 204,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.4,
    "pricePerKwh": 6.3
  },
  {
    "id": "sta-146",
    "name": "淡水中油快充站",
    "network": "台灣中油",
    "address": "新北市淡水區復興路923號",
    "city": "新北市",
    "lat": 24.9004,
    "lng": 121.5622,
    "totalStalls": 4,
    "availableStalls": 2,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 146,
    "amenities": [
      "restroom",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.2,
    "pricePerKwh": 5
  },
  {
    "id": "sta-147",
    "name": "中和台灣電力充電站",
    "network": "台灣電力",
    "address": "新北市中和區民生路385號",
    "city": "新北市",
    "lat": 24.9032,
    "lng": 121.4028,
    "totalStalls": 13,
    "availableStalls": 9,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 102,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "faulted"
      }
    ],
    "openHours": "24小時",
    "rating": 4.3,
    "pricePerKwh": 5
  },
  {
    "id": "sta-148",
    "name": "淡水自建快充站",
    "network": "自建",
    "address": "新北市淡水區自由路268號",
    "city": "新北市",
    "lat": 24.9957,
    "lng": 121.3868,
    "totalStalls": 8,
    "availableStalls": 2,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 11,
    "amenities": [
      "restroom",
      "parking",
      "hotel",
      "cafe"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.7,
    "pricePerKwh": 4
  },
  {
    "id": "sta-149",
    "name": "樹林裕電購物中心充電站",
    "network": "裕電能源",
    "address": "新北市樹林區中正路759號",
    "city": "新北市",
    "lat": 24.9214,
    "lng": 121.5687,
    "totalStalls": 12,
    "availableStalls": 11,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 118,
    "amenities": [
      "restroom",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "available"
      },
      {
        "id": 11,
        "status": "available"
      },
      {
        "id": 12,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 3.6,
    "pricePerKwh": 6.2
  },
  {
    "id": "sta-150",
    "name": "鶯歌ForMosa停車場充電樁",
    "network": "ForMosa EV",
    "address": "新北市鶯歌區自由路550號",
    "city": "新北市",
    "lat": 25.0074,
    "lng": 121.3972,
    "totalStalls": 2,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 147,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.9,
    "pricePerKwh": 5.8
  },
  {
    "id": "sta-151",
    "name": "中壢U-Power慢充站",
    "network": "U-Power",
    "address": "桃園市中壢區光明路897號",
    "city": "桃園市",
    "lat": 25.0364,
    "lng": 121.3162,
    "totalStalls": 16,
    "availableStalls": 3,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 245,
    "amenities": [
      "restroom",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      },
      {
        "id": 15,
        "status": "in_use"
      },
      {
        "id": 16,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.1,
    "pricePerKwh": 6.5
  },
  {
    "id": "sta-152",
    "name": "中壢特斯拉超充站",
    "network": "Tesla",
    "address": "桃園市中壢區中正路555號",
    "city": "桃園市",
    "lat": 24.9605,
    "lng": 121.2679,
    "totalStalls": 11,
    "availableStalls": 8,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 212,
    "amenities": [
      "restroom",
      "parking",
      "restaurant",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.4,
    "pricePerKwh": 6.8
  },
  {
    "id": "sta-153",
    "name": "大溪停車場自建購物中心充電站",
    "network": "停車場自建",
    "address": "桃園市大溪區建國路851號",
    "city": "桃園市",
    "lat": 24.9919,
    "lng": 121.4023,
    "totalStalls": 5,
    "availableStalls": 0,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2",
      "CCS2"
    ],
    "maxKw": 22,
    "amenities": [
      "parking",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.6,
    "pricePerKwh": 4
  },
  {
    "id": "sta-154",
    "name": "八德中油慢充站",
    "network": "台灣中油",
    "address": "桃園市八德區建國路554號",
    "city": "桃園市",
    "lat": 24.9129,
    "lng": 121.3818,
    "totalStalls": 15,
    "availableStalls": 2,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 144,
    "amenities": [
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      },
      {
        "id": 15,
        "status": "faulted"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.7,
    "pricePerKwh": 5
  },
  {
    "id": "sta-155",
    "name": "平鎮ForMosa購物中心充電站",
    "network": "ForMosa EV",
    "address": "桃園市平鎮區中正路837號",
    "city": "桃園市",
    "lat": 24.9571,
    "lng": 121.1885,
    "totalStalls": 8,
    "availableStalls": 5,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 247,
    "amenities": [
      "restroom",
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.4,
    "pricePerKwh": 5.5
  },
  {
    "id": "sta-156",
    "name": "中壢U-Power慢充站",
    "network": "U-Power",
    "address": "桃園市中壢區復興路352號",
    "city": "桃園市",
    "lat": 25.0677,
    "lng": 121.2949,
    "totalStalls": 13,
    "availableStalls": 6,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 126,
    "amenities": [
      "restroom",
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.1,
    "pricePerKwh": 6.5
  },
  {
    "id": "sta-157",
    "name": "新屋U-Power充電站",
    "network": "U-Power",
    "address": "桃園市新屋區建國路162號",
    "city": "桃園市",
    "lat": 25.0369,
    "lng": 121.342,
    "totalStalls": 3,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 123,
    "amenities": [
      "restroom",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.9,
    "pricePerKwh": 6.3
  },
  {
    "id": "sta-158",
    "name": "平鎮裕電快充站",
    "network": "裕電能源",
    "address": "桃園市平鎮區復興路864號",
    "city": "桃園市",
    "lat": 25.018,
    "lng": 121.4097,
    "totalStalls": 10,
    "availableStalls": 6,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 102,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.5,
    "pricePerKwh": 6.2
  },
  {
    "id": "sta-159",
    "name": "新屋中油快充站",
    "network": "台灣中油",
    "address": "桃園市新屋區光明路669號",
    "city": "桃園市",
    "lat": 25.0229,
    "lng": 121.2065,
    "totalStalls": 13,
    "availableStalls": 6,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 120,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4,
    "pricePerKwh": 5
  },
  {
    "id": "sta-160",
    "name": "八德自建快充站",
    "network": "自建",
    "address": "桃園市八德區中山路868號",
    "city": "桃園市",
    "lat": 25.0679,
    "lng": 121.2825,
    "totalStalls": 4,
    "availableStalls": 1,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 7,
    "amenities": [
      "parking",
      "cafe",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.2,
    "pricePerKwh": 4
  },
  {
    "id": "sta-161",
    "name": "蘆竹裕電充電站",
    "network": "裕電能源",
    "address": "桃園市蘆竹區中山路825號",
    "city": "桃園市",
    "lat": 24.8959,
    "lng": 121.201,
    "totalStalls": 2,
    "availableStalls": 1,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 235,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.1,
    "pricePerKwh": 5.8
  },
  {
    "id": "sta-162",
    "name": "中壢ForMosa充電站",
    "network": "ForMosa EV",
    "address": "桃園市中壢區文化路732號",
    "city": "桃園市",
    "lat": 25.0868,
    "lng": 121.3543,
    "totalStalls": 13,
    "availableStalls": 2,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 222,
    "amenities": [
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 3.9,
    "pricePerKwh": 5.8
  },
  {
    "id": "sta-163",
    "name": "平鎮U-Power超充站",
    "network": "U-Power",
    "address": "桃園市平鎮區光明路629號",
    "city": "桃園市",
    "lat": 24.9281,
    "lng": 121.2427,
    "totalStalls": 9,
    "availableStalls": 3,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 100,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.5,
    "pricePerKwh": 6.5
  },
  {
    "id": "sta-164",
    "name": "大溪中油停車場充電樁",
    "network": "台灣中油",
    "address": "桃園市大溪區文化路259號",
    "city": "桃園市",
    "lat": 24.9675,
    "lng": 121.3766,
    "totalStalls": 3,
    "availableStalls": 2,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 108,
    "amenities": [
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 3.8,
    "pricePerKwh": 5.5
  },
  {
    "id": "sta-165",
    "name": "蘆竹U-Power慢充站",
    "network": "U-Power",
    "address": "桃園市蘆竹區自由路963號",
    "city": "桃園市",
    "lat": 24.969,
    "lng": 121.329,
    "totalStalls": 6,
    "availableStalls": 4,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 214,
    "amenities": [
      "restroom",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.3,
    "pricePerKwh": 6.5
  },
  {
    "id": "sta-166",
    "name": "桃園自建充電站",
    "network": "自建",
    "address": "桃園市桃園區文化路547號",
    "city": "桃園市",
    "lat": 24.9604,
    "lng": 121.369,
    "totalStalls": 13,
    "availableStalls": 6,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 20,
    "amenities": [
      "restroom",
      "parking",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.4,
    "pricePerKwh": 4
  },
  {
    "id": "sta-167",
    "name": "龍潭中油快充站",
    "network": "台灣中油",
    "address": "桃園市龍潭區中正路533號",
    "city": "桃園市",
    "lat": 25.0373,
    "lng": 121.2882,
    "totalStalls": 15,
    "availableStalls": 9,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 132,
    "amenities": [
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      },
      {
        "id": 15,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.1,
    "pricePerKwh": 5
  },
  {
    "id": "sta-168",
    "name": "新屋自建停車場充電樁",
    "network": "自建",
    "address": "桃園市新屋區民權路968號",
    "city": "桃園市",
    "lat": 25.0369,
    "lng": 121.2954,
    "totalStalls": 8,
    "availableStalls": 0,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 21,
    "amenities": [
      "restroom",
      "parking",
      "hotel",
      "cafe"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 3.6,
    "pricePerKwh": 4
  },
  {
    "id": "sta-169",
    "name": "桃園裕電購物中心充電站",
    "network": "裕電能源",
    "address": "桃園市桃園區中正路439號",
    "city": "桃園市",
    "lat": 24.9773,
    "lng": 121.2828,
    "totalStalls": 14,
    "availableStalls": 7,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 215,
    "amenities": [
      "restroom",
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "faulted"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.2,
    "pricePerKwh": 6.2
  },
  {
    "id": "sta-170",
    "name": "中壢停車場自建慢充站",
    "network": "停車場自建",
    "address": "桃園市中壢區文化路881號",
    "city": "桃園市",
    "lat": 25.0264,
    "lng": 121.3794,
    "totalStalls": 7,
    "availableStalls": 3,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 19,
    "amenities": [
      "restroom",
      "hotel",
      "cafe",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.6,
    "pricePerKwh": 3.5
  },
  {
    "id": "sta-171",
    "name": "大園停車場自建快充站",
    "network": "停車場自建",
    "address": "桃園市大園區中山路190號",
    "city": "桃園市",
    "lat": 24.9855,
    "lng": 121.3037,
    "totalStalls": 3,
    "availableStalls": 2,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2",
      "CCS2"
    ],
    "maxKw": 18,
    "amenities": [
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.5,
    "pricePerKwh": 4.5
  },
  {
    "id": "sta-172",
    "name": "楊梅U-Power停車場充電樁",
    "network": "U-Power",
    "address": "桃園市楊梅區中山路552號",
    "city": "桃園市",
    "lat": 24.9154,
    "lng": 121.1908,
    "totalStalls": 16,
    "availableStalls": 3,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 106,
    "amenities": [
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      },
      {
        "id": 15,
        "status": "in_use"
      },
      {
        "id": 16,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 4.8,
    "pricePerKwh": 6.5
  },
  {
    "id": "sta-173",
    "name": "新屋特斯拉快充站",
    "network": "Tesla",
    "address": "桃園市新屋區中山路597號",
    "city": "桃園市",
    "lat": 25.0477,
    "lng": 121.3253,
    "totalStalls": 7,
    "availableStalls": 2,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 206,
    "amenities": [
      "restroom",
      "parking",
      "restaurant",
      "shopping"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 5,
    "pricePerKwh": 7.5
  },
  {
    "id": "sta-174",
    "name": "桃園特斯拉超充站",
    "network": "Tesla",
    "address": "桃園市桃園區復興路354號",
    "city": "桃園市",
    "lat": 25.0616,
    "lng": 121.2287,
    "totalStalls": 14,
    "availableStalls": 12,
    "chargerType": "V4",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 316,
    "amenities": [
      "shopping",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "available"
      },
      {
        "id": 11,
        "status": "available"
      },
      {
        "id": 12,
        "status": "available"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "faulted"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.5,
    "pricePerKwh": 7
  },
  {
    "id": "sta-175",
    "name": "蘆竹停車場自建快充站",
    "network": "停車場自建",
    "address": "桃園市蘆竹區建國路665號",
    "city": "桃園市",
    "lat": 24.9489,
    "lng": 121.3397,
    "totalStalls": 8,
    "availableStalls": 4,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 8,
    "amenities": [
      "restroom",
      "hotel",
      "cafe",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.7,
    "pricePerKwh": 4
  },
  {
    "id": "sta-176",
    "name": "大園台灣電力超充站",
    "network": "台灣電力",
    "address": "桃園市大園區民權路260號",
    "city": "桃園市",
    "lat": 24.9574,
    "lng": 121.3994,
    "totalStalls": 3,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 144,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "faulted"
      }
    ],
    "openHours": "24小時",
    "rating": 4.6,
    "pricePerKwh": 5
  },
  {
    "id": "sta-177",
    "name": "中壢特斯拉慢充站",
    "network": "Tesla",
    "address": "桃園市中壢區光明路357號",
    "city": "桃園市",
    "lat": 24.9841,
    "lng": 121.3113,
    "totalStalls": 16,
    "availableStalls": 8,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 210,
    "amenities": [
      "restroom",
      "parking",
      "restaurant",
      "shopping",
      "wifi",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      },
      {
        "id": 15,
        "status": "in_use"
      },
      {
        "id": 16,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.3,
    "pricePerKwh": 7.5
  },
  {
    "id": "sta-178",
    "name": "中壢中油快充站",
    "network": "台灣中油",
    "address": "桃園市中壢區民權路993號",
    "city": "桃園市",
    "lat": 24.9421,
    "lng": 121.3669,
    "totalStalls": 3,
    "availableStalls": 2,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 133,
    "amenities": [
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 4.7,
    "pricePerKwh": 5
  },
  {
    "id": "sta-179",
    "name": "龜山裕電購物中心充電站",
    "network": "裕電能源",
    "address": "桃園市龜山區民生路155號",
    "city": "桃園市",
    "lat": 24.9855,
    "lng": 121.3818,
    "totalStalls": 8,
    "availableStalls": 5,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 131,
    "amenities": [
      "restroom"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "faulted"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.8,
    "pricePerKwh": 5.8
  },
  {
    "id": "sta-180",
    "name": "平鎮特斯拉充電站",
    "network": "Tesla",
    "address": "桃園市平鎮區復興路578號",
    "city": "桃園市",
    "lat": 25.0846,
    "lng": 121.2849,
    "totalStalls": 5,
    "availableStalls": 3,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 205,
    "amenities": [
      "restroom",
      "parking",
      "restaurant",
      "shopping",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 3.8,
    "pricePerKwh": 7.5
  },
  {
    "id": "sta-181",
    "name": "平鎮U-Power停車場充電樁",
    "network": "U-Power",
    "address": "桃園市平鎮區和平路839號",
    "city": "桃園市",
    "lat": 24.8959,
    "lng": 121.2684,
    "totalStalls": 13,
    "availableStalls": 7,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 120,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.9,
    "pricePerKwh": 6.8
  },
  {
    "id": "sta-182",
    "name": "大溪特斯拉購物中心充電站",
    "network": "Tesla",
    "address": "桃園市大溪區民生路273號",
    "city": "桃園市",
    "lat": 24.9198,
    "lng": 121.3231,
    "totalStalls": 3,
    "availableStalls": 0,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 229,
    "amenities": [
      "restroom",
      "parking",
      "shopping",
      "wifi",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.9,
    "pricePerKwh": 7.5
  },
  {
    "id": "sta-183",
    "name": "中壢ForMosa購物中心充電站",
    "network": "ForMosa EV",
    "address": "桃園市中壢區文化路198號",
    "city": "桃園市",
    "lat": 24.9941,
    "lng": 121.392,
    "totalStalls": 7,
    "availableStalls": 2,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 137,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.9,
    "pricePerKwh": 6
  },
  {
    "id": "sta-184",
    "name": "桃園裕電快充站",
    "network": "裕電能源",
    "address": "桃園市桃園區中正路991號",
    "city": "桃園市",
    "lat": 24.9225,
    "lng": 121.3858,
    "totalStalls": 4,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 139,
    "amenities": [
      "restroom",
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.3,
    "pricePerKwh": 6.2
  },
  {
    "id": "sta-185",
    "name": "大溪自建超充站",
    "network": "自建",
    "address": "桃園市大溪區復興路811號",
    "city": "桃園市",
    "lat": 25.0649,
    "lng": 121.3445,
    "totalStalls": 2,
    "availableStalls": 1,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 13,
    "amenities": [
      "restroom",
      "cafe",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.8,
    "pricePerKwh": 4
  },
  {
    "id": "sta-186",
    "name": "新屋台灣電力購物中心充電站",
    "network": "台灣電力",
    "address": "桃園市新屋區民權路617號",
    "city": "桃園市",
    "lat": 24.9975,
    "lng": 121.3726,
    "totalStalls": 15,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 140,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      },
      {
        "id": 15,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.4,
    "pricePerKwh": 4.8
  },
  {
    "id": "sta-187",
    "name": "八德裕電停車場充電樁",
    "network": "裕電能源",
    "address": "桃園市八德區和平路567號",
    "city": "桃園市",
    "lat": 24.9268,
    "lng": 121.3244,
    "totalStalls": 14,
    "availableStalls": 12,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 145,
    "amenities": [
      "restroom",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "available"
      },
      {
        "id": 11,
        "status": "available"
      },
      {
        "id": 12,
        "status": "available"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.9,
    "pricePerKwh": 6.2
  },
  {
    "id": "sta-188",
    "name": "八德特斯拉充電站",
    "network": "Tesla",
    "address": "桃園市八德區文化路337號",
    "city": "桃園市",
    "lat": 25.0775,
    "lng": 121.1864,
    "totalStalls": 9,
    "availableStalls": 1,
    "chargerType": "V4",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 304,
    "amenities": [
      "restroom",
      "parking",
      "restaurant",
      "shopping",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.6,
    "pricePerKwh": 7.5
  },
  {
    "id": "sta-189",
    "name": "大溪U-Power快充站",
    "network": "U-Power",
    "address": "桃園市大溪區文化路853號",
    "city": "桃園市",
    "lat": 25.063,
    "lng": 121.3942,
    "totalStalls": 10,
    "availableStalls": 7,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 236,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.5,
    "pricePerKwh": 6.3
  },
  {
    "id": "sta-190",
    "name": "龜山U-Power停車場充電樁",
    "network": "U-Power",
    "address": "桃園市龜山區建國路818號",
    "city": "桃園市",
    "lat": 25.0367,
    "lng": 121.3636,
    "totalStalls": 4,
    "availableStalls": 3,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 129,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.6,
    "pricePerKwh": 6.8
  },
  {
    "id": "sta-191",
    "name": "新屋停車場自建快充站",
    "network": "停車場自建",
    "address": "桃園市新屋區中正路939號",
    "city": "桃園市",
    "lat": 25.0578,
    "lng": 121.3042,
    "totalStalls": 16,
    "availableStalls": 7,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 22,
    "amenities": [
      "parking",
      "cafe"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      },
      {
        "id": 15,
        "status": "in_use"
      },
      {
        "id": 16,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.3,
    "pricePerKwh": 4
  },
  {
    "id": "sta-192",
    "name": "大溪中油快充站",
    "network": "台灣中油",
    "address": "桃園市大溪區中山路241號",
    "city": "桃園市",
    "lat": 25.0347,
    "lng": 121.3532,
    "totalStalls": 4,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 148,
    "amenities": [
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 3.7,
    "pricePerKwh": 5.5
  },
  {
    "id": "sta-193",
    "name": "大溪U-Power慢充站",
    "network": "U-Power",
    "address": "桃園市大溪區和平路846號",
    "city": "桃園市",
    "lat": 24.9067,
    "lng": 121.1963,
    "totalStalls": 3,
    "availableStalls": 2,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 100,
    "amenities": [
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.2,
    "pricePerKwh": 6.5
  },
  {
    "id": "sta-194",
    "name": "大溪裕電快充站",
    "network": "裕電能源",
    "address": "桃園市大溪區建國路392號",
    "city": "桃園市",
    "lat": 24.995,
    "lng": 121.3676,
    "totalStalls": 8,
    "availableStalls": 7,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 237,
    "amenities": [
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.1,
    "pricePerKwh": 6
  },
  {
    "id": "sta-195",
    "name": "大園ForMosa超充站",
    "network": "ForMosa EV",
    "address": "桃園市大園區中正路950號",
    "city": "桃園市",
    "lat": 25.059,
    "lng": 121.3256,
    "totalStalls": 13,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 102,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.5,
    "pricePerKwh": 5.8
  },
  {
    "id": "sta-196",
    "name": "龍潭特斯拉充電站",
    "network": "Tesla",
    "address": "桃園市龍潭區文化路283號",
    "city": "桃園市",
    "lat": 25.0053,
    "lng": 121.3317,
    "totalStalls": 7,
    "availableStalls": 0,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 245,
    "amenities": [
      "parking",
      "shopping",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.8,
    "pricePerKwh": 7
  },
  {
    "id": "sta-197",
    "name": "平鎮中油充電站",
    "network": "台灣中油",
    "address": "桃園市平鎮區文化路758號",
    "city": "桃園市",
    "lat": 25.0677,
    "lng": 121.2618,
    "totalStalls": 14,
    "availableStalls": 7,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 149,
    "amenities": [
      "restroom",
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.7,
    "pricePerKwh": 5
  },
  {
    "id": "sta-198",
    "name": "大溪ForMosa快充站",
    "network": "ForMosa EV",
    "address": "桃園市大溪區文化路352號",
    "city": "桃園市",
    "lat": 25.084,
    "lng": 121.3543,
    "totalStalls": 8,
    "availableStalls": 5,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 148,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.3,
    "pricePerKwh": 5.8
  },
  {
    "id": "sta-199",
    "name": "八德特斯拉停車場充電樁",
    "network": "Tesla",
    "address": "桃園市八德區中正路289號",
    "city": "桃園市",
    "lat": 24.9996,
    "lng": 121.3056,
    "totalStalls": 3,
    "availableStalls": 1,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 216,
    "amenities": [
      "restroom",
      "parking",
      "restaurant",
      "shopping",
      "wifi",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.4,
    "pricePerKwh": 7
  },
  {
    "id": "sta-200",
    "name": "龍潭自建停車場充電樁",
    "network": "自建",
    "address": "桃園市龍潭區光明路348號",
    "city": "桃園市",
    "lat": 24.9841,
    "lng": 121.1907,
    "totalStalls": 13,
    "availableStalls": 7,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 14,
    "amenities": [
      "restroom",
      "hotel",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.8,
    "pricePerKwh": 3
  },
  {
    "id": "sta-201",
    "name": "平鎮裕電購物中心充電站",
    "network": "裕電能源",
    "address": "桃園市平鎮區自由路513號",
    "city": "桃園市",
    "lat": 25.0411,
    "lng": 121.2926,
    "totalStalls": 14,
    "availableStalls": 3,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 117,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.1,
    "pricePerKwh": 5.8
  },
  {
    "id": "sta-202",
    "name": "龍潭裕電快充站",
    "network": "裕電能源",
    "address": "桃園市龍潭區民生路129號",
    "city": "桃園市",
    "lat": 25.0709,
    "lng": 121.3134,
    "totalStalls": 12,
    "availableStalls": 8,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 243,
    "amenities": [
      "restroom",
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.5,
    "pricePerKwh": 5.8
  },
  {
    "id": "sta-203",
    "name": "中壢停車場自建購物中心充電站",
    "network": "停車場自建",
    "address": "桃園市中壢區文化路926號",
    "city": "桃園市",
    "lat": 24.9643,
    "lng": 121.3567,
    "totalStalls": 3,
    "availableStalls": 0,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2",
      "CCS2"
    ],
    "maxKw": 12,
    "amenities": [
      "parking",
      "hotel",
      "cafe",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.5,
    "pricePerKwh": 4.5
  },
  {
    "id": "sta-204",
    "name": "楊梅ForMosa充電站",
    "network": "ForMosa EV",
    "address": "桃園市楊梅區自由路536號",
    "city": "桃園市",
    "lat": 24.9516,
    "lng": 121.3769,
    "totalStalls": 13,
    "availableStalls": 6,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 142,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.1,
    "pricePerKwh": 5.5
  },
  {
    "id": "sta-205",
    "name": "楊梅裕電購物中心充電站",
    "network": "裕電能源",
    "address": "桃園市楊梅區光明路523號",
    "city": "桃園市",
    "lat": 24.9539,
    "lng": 121.3728,
    "totalStalls": 5,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 106,
    "amenities": [
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "faulted"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 4.7,
    "pricePerKwh": 5.8
  },
  {
    "id": "sta-206",
    "name": "北區ForMosa慢充站",
    "network": "ForMosa EV",
    "address": "新竹市北區區民權路187號",
    "city": "新竹市",
    "lat": 24.7772,
    "lng": 120.9956,
    "totalStalls": 7,
    "availableStalls": 2,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 103,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 4.1,
    "pricePerKwh": 5.5
  },
  {
    "id": "sta-207",
    "name": "香山區中油停車場充電樁",
    "network": "台灣中油",
    "address": "新竹市香山區區自由路754號",
    "city": "新竹市",
    "lat": 24.8299,
    "lng": 120.9561,
    "totalStalls": 15,
    "availableStalls": 8,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 143,
    "amenities": [
      "restroom",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      },
      {
        "id": 15,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4,
    "pricePerKwh": 5.5
  },
  {
    "id": "sta-208",
    "name": "香山區ForMosa超充站",
    "network": "ForMosa EV",
    "address": "新竹市香山區區民權路891號",
    "city": "新竹市",
    "lat": 24.8243,
    "lng": 120.9584,
    "totalStalls": 10,
    "availableStalls": 4,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 135,
    "amenities": [
      "restroom",
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 5,
    "pricePerKwh": 5.5
  },
  {
    "id": "sta-209",
    "name": "東區ForMosa充電站",
    "network": "ForMosa EV",
    "address": "新竹市東區區民權路537號",
    "city": "新竹市",
    "lat": 24.8182,
    "lng": 120.9797,
    "totalStalls": 10,
    "availableStalls": 7,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 234,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.9,
    "pricePerKwh": 5.5
  },
  {
    "id": "sta-210",
    "name": "東區U-Power停車場充電樁",
    "network": "U-Power",
    "address": "新竹市東區區自由路227號",
    "city": "新竹市",
    "lat": 24.8139,
    "lng": 120.9764,
    "totalStalls": 9,
    "availableStalls": 0,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 226,
    "amenities": [],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 4.4,
    "pricePerKwh": 6.3
  },
  {
    "id": "sta-211",
    "name": "東區停車場自建停車場充電樁",
    "network": "停車場自建",
    "address": "新竹市東區區民權路851號",
    "city": "新竹市",
    "lat": 24.8205,
    "lng": 120.9366,
    "totalStalls": 16,
    "availableStalls": 12,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2",
      "CCS2"
    ],
    "maxKw": 9,
    "amenities": [
      "restroom",
      "parking",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "available"
      },
      {
        "id": 11,
        "status": "available"
      },
      {
        "id": 12,
        "status": "available"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      },
      {
        "id": 15,
        "status": "in_use"
      },
      {
        "id": 16,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.4,
    "pricePerKwh": 4.5
  },
  {
    "id": "sta-212",
    "name": "香山區ForMosa快充站",
    "network": "ForMosa EV",
    "address": "新竹市香山區區復興路243號",
    "city": "新竹市",
    "lat": 24.7832,
    "lng": 120.9656,
    "totalStalls": 15,
    "availableStalls": 10,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 102,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "available"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      },
      {
        "id": 15,
        "status": "faulted"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.4,
    "pricePerKwh": 6
  },
  {
    "id": "sta-213",
    "name": "東區裕電快充站",
    "network": "裕電能源",
    "address": "新竹市東區區和平路419號",
    "city": "新竹市",
    "lat": 24.8024,
    "lng": 120.995,
    "totalStalls": 15,
    "availableStalls": 4,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 104,
    "amenities": [],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      },
      {
        "id": 15,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.8,
    "pricePerKwh": 6.2
  },
  {
    "id": "sta-214",
    "name": "香山區台灣電力充電站",
    "network": "台灣電力",
    "address": "新竹市香山區區復興路237號",
    "city": "新竹市",
    "lat": 24.7857,
    "lng": 120.9792,
    "totalStalls": 13,
    "availableStalls": 9,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 125,
    "amenities": [
      "restroom",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.9,
    "pricePerKwh": 5
  },
  {
    "id": "sta-215",
    "name": "香山區台灣電力充電站",
    "network": "台灣電力",
    "address": "新竹市香山區區文化路714號",
    "city": "新竹市",
    "lat": 24.8285,
    "lng": 120.9516,
    "totalStalls": 11,
    "availableStalls": 5,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 108,
    "amenities": [
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "faulted"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.3,
    "pricePerKwh": 4.8
  },
  {
    "id": "sta-216",
    "name": "東區停車場自建停車場充電樁",
    "network": "停車場自建",
    "address": "新竹市東區區自由路891號",
    "city": "新竹市",
    "lat": 24.8147,
    "lng": 120.9696,
    "totalStalls": 6,
    "availableStalls": 0,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 19,
    "amenities": [
      "parking",
      "hotel",
      "cafe",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4,
    "pricePerKwh": 4.5
  },
  {
    "id": "sta-217",
    "name": "東區裕電停車場充電樁",
    "network": "裕電能源",
    "address": "新竹市東區區自由路295號",
    "city": "新竹市",
    "lat": 24.8204,
    "lng": 120.9344,
    "totalStalls": 16,
    "availableStalls": 9,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 227,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      },
      {
        "id": 15,
        "status": "in_use"
      },
      {
        "id": 16,
        "status": "faulted"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 3.9,
    "pricePerKwh": 6.2
  },
  {
    "id": "sta-218",
    "name": "東區自建購物中心充電站",
    "network": "自建",
    "address": "新竹市東區區復興路862號",
    "city": "新竹市",
    "lat": 24.8007,
    "lng": 120.9448,
    "totalStalls": 2,
    "availableStalls": 1,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 14,
    "amenities": [
      "restroom",
      "parking",
      "hotel",
      "cafe",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.8,
    "pricePerKwh": 4
  },
  {
    "id": "sta-219",
    "name": "北區特斯拉快充站",
    "network": "Tesla",
    "address": "新竹市北區區復興路182號",
    "city": "新竹市",
    "lat": 24.8273,
    "lng": 121.0065,
    "totalStalls": 13,
    "availableStalls": 3,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 230,
    "amenities": [
      "shopping",
      "wifi",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.9,
    "pricePerKwh": 7
  },
  {
    "id": "sta-220",
    "name": "香山區自建超充站",
    "network": "自建",
    "address": "新竹市香山區區光明路360號",
    "city": "新竹市",
    "lat": 24.79,
    "lng": 120.9346,
    "totalStalls": 16,
    "availableStalls": 3,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 12,
    "amenities": [
      "parking",
      "hotel",
      "cafe",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      },
      {
        "id": 15,
        "status": "in_use"
      },
      {
        "id": 16,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4,
    "pricePerKwh": 3
  },
  {
    "id": "sta-221",
    "name": "北區ForMosa快充站",
    "network": "ForMosa EV",
    "address": "新竹市北區區文化路422號",
    "city": "新竹市",
    "lat": 24.8363,
    "lng": 120.9336,
    "totalStalls": 11,
    "availableStalls": 3,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 126,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 4.7,
    "pricePerKwh": 6
  },
  {
    "id": "sta-222",
    "name": "東區自建充電站",
    "network": "自建",
    "address": "新竹市東區區民生路451號",
    "city": "新竹市",
    "lat": 24.8203,
    "lng": 121.0034,
    "totalStalls": 14,
    "availableStalls": 5,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 18,
    "amenities": [
      "parking",
      "hotel",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "faulted"
      }
    ],
    "openHours": "24小時",
    "rating": 3.8,
    "pricePerKwh": 4
  },
  {
    "id": "sta-223",
    "name": "東區特斯拉快充站",
    "network": "Tesla",
    "address": "新竹市東區區民權路895號",
    "city": "新竹市",
    "lat": 24.8412,
    "lng": 120.9596,
    "totalStalls": 3,
    "availableStalls": 0,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 227,
    "amenities": [
      "restaurant",
      "wifi",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "faulted"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 3.9,
    "pricePerKwh": 6.8
  },
  {
    "id": "sta-224",
    "name": "香山區特斯拉快充站",
    "network": "Tesla",
    "address": "新竹市香山區區中山路237號",
    "city": "新竹市",
    "lat": 24.8311,
    "lng": 121.0105,
    "totalStalls": 7,
    "availableStalls": 2,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 228,
    "amenities": [
      "restroom",
      "parking",
      "shopping",
      "wifi",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.8,
    "pricePerKwh": 6.8
  },
  {
    "id": "sta-225",
    "name": "北區裕電慢充站",
    "network": "裕電能源",
    "address": "新竹市北區區文化路359號",
    "city": "新竹市",
    "lat": 24.7994,
    "lng": 120.9996,
    "totalStalls": 11,
    "availableStalls": 4,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 133,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 3.9,
    "pricePerKwh": 6.2
  },
  {
    "id": "sta-226",
    "name": "新埔特斯拉超充站",
    "network": "Tesla",
    "address": "新竹縣新埔區和平路894號",
    "city": "新竹縣",
    "lat": 24.8369,
    "lng": 121.0514,
    "totalStalls": 12,
    "availableStalls": 2,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 227,
    "amenities": [
      "restroom",
      "restaurant",
      "wifi",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 3.6,
    "pricePerKwh": 6.8
  },
  {
    "id": "sta-227",
    "name": "竹北U-Power快充站",
    "network": "U-Power",
    "address": "新竹縣竹北區中正路537號",
    "city": "新竹縣",
    "lat": 24.8319,
    "lng": 120.9878,
    "totalStalls": 6,
    "availableStalls": 3,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 242,
    "amenities": [
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.9,
    "pricePerKwh": 6.8
  },
  {
    "id": "sta-228",
    "name": "竹北U-Power超充站",
    "network": "U-Power",
    "address": "新竹縣竹北區復興路460號",
    "city": "新竹縣",
    "lat": 24.793,
    "lng": 120.9691,
    "totalStalls": 9,
    "availableStalls": 0,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 200,
    "amenities": [
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.8,
    "pricePerKwh": 6.5
  },
  {
    "id": "sta-229",
    "name": "關西自建充電站",
    "network": "自建",
    "address": "新竹縣關西區自由路949號",
    "city": "新竹縣",
    "lat": 24.8176,
    "lng": 120.9342,
    "totalStalls": 8,
    "availableStalls": 4,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 19,
    "amenities": [
      "cafe",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.5,
    "pricePerKwh": 4
  },
  {
    "id": "sta-230",
    "name": "關西U-Power購物中心充電站",
    "network": "U-Power",
    "address": "新竹縣關西區文化路755號",
    "city": "新竹縣",
    "lat": 24.8021,
    "lng": 120.9588,
    "totalStalls": 2,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 101,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.8,
    "pricePerKwh": 6.8
  },
  {
    "id": "sta-231",
    "name": "湖口自建慢充站",
    "network": "自建",
    "address": "新竹縣湖口區民生路539號",
    "city": "新竹縣",
    "lat": 24.7956,
    "lng": 120.9988,
    "totalStalls": 4,
    "availableStalls": 2,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 10,
    "amenities": [
      "restroom",
      "parking",
      "hotel",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "faulted"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.4,
    "pricePerKwh": 3
  },
  {
    "id": "sta-232",
    "name": "關西台灣電力慢充站",
    "network": "台灣電力",
    "address": "新竹縣關西區建國路791號",
    "city": "新竹縣",
    "lat": 24.8529,
    "lng": 120.9418,
    "totalStalls": 7,
    "availableStalls": 2,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 144,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 4.4,
    "pricePerKwh": 4.8
  },
  {
    "id": "sta-233",
    "name": "竹北裕電充電站",
    "network": "裕電能源",
    "address": "新竹縣竹北區光明路429號",
    "city": "新竹縣",
    "lat": 24.8776,
    "lng": 121.0839,
    "totalStalls": 13,
    "availableStalls": 4,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 142,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 4.1,
    "pricePerKwh": 6.2
  },
  {
    "id": "sta-234",
    "name": "竹北裕電快充站",
    "network": "裕電能源",
    "address": "新竹縣竹北區建國路419號",
    "city": "新竹縣",
    "lat": 24.8715,
    "lng": 120.9907,
    "totalStalls": 2,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 102,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.7,
    "pricePerKwh": 6
  },
  {
    "id": "sta-235",
    "name": "竹北台灣電力快充站",
    "network": "台灣電力",
    "address": "新竹縣竹北區建國路727號",
    "city": "新竹縣",
    "lat": 24.8551,
    "lng": 120.9906,
    "totalStalls": 13,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 143,
    "amenities": [
      "restroom"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4,
    "pricePerKwh": 5
  },
  {
    "id": "sta-236",
    "name": "竹北台灣電力停車場充電樁",
    "network": "台灣電力",
    "address": "新竹縣竹北區民權路762號",
    "city": "新竹縣",
    "lat": 24.8578,
    "lng": 121.0114,
    "totalStalls": 2,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 142,
    "amenities": [
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "faulted"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.5,
    "pricePerKwh": 5
  },
  {
    "id": "sta-237",
    "name": "關西台灣電力快充站",
    "network": "台灣電力",
    "address": "新竹縣關西區自由路396號",
    "city": "新竹縣",
    "lat": 24.8169,
    "lng": 121.0515,
    "totalStalls": 12,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 146,
    "amenities": [
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.9,
    "pricePerKwh": 4.8
  },
  {
    "id": "sta-238",
    "name": "新豐ForMosa快充站",
    "network": "ForMosa EV",
    "address": "新竹縣新豐區建國路178號",
    "city": "新竹縣",
    "lat": 24.8209,
    "lng": 120.9251,
    "totalStalls": 9,
    "availableStalls": 6,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 102,
    "amenities": [
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "faulted"
      }
    ],
    "openHours": "24小時",
    "rating": 3.8,
    "pricePerKwh": 6
  },
  {
    "id": "sta-239",
    "name": "湖口停車場自建充電站",
    "network": "停車場自建",
    "address": "新竹縣湖口區自由路455號",
    "city": "新竹縣",
    "lat": 24.7856,
    "lng": 121.0817,
    "totalStalls": 12,
    "availableStalls": 1,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 16,
    "amenities": [
      "parking",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "faulted"
      }
    ],
    "openHours": "24小時",
    "rating": 4.7,
    "pricePerKwh": 4
  },
  {
    "id": "sta-240",
    "name": "新埔ForMosa快充站",
    "network": "ForMosa EV",
    "address": "新竹縣新埔區建國路529號",
    "city": "新竹縣",
    "lat": 24.7918,
    "lng": 121.0067,
    "totalStalls": 6,
    "availableStalls": 3,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 128,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "faulted"
      }
    ],
    "openHours": "24小時",
    "rating": 5,
    "pricePerKwh": 5.5
  },
  {
    "id": "sta-241",
    "name": "關西台灣電力停車場充電樁",
    "network": "台灣電力",
    "address": "新竹縣關西區中山路652號",
    "city": "新竹縣",
    "lat": 24.861,
    "lng": 121.0814,
    "totalStalls": 10,
    "availableStalls": 2,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 126,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 3.7,
    "pricePerKwh": 4.8
  },
  {
    "id": "sta-242",
    "name": "竹北中油慢充站",
    "network": "台灣中油",
    "address": "新竹縣竹北區民生路186號",
    "city": "新竹縣",
    "lat": 24.7733,
    "lng": 121.0752,
    "totalStalls": 3,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 131,
    "amenities": [
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "faulted"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 4.5,
    "pricePerKwh": 5
  },
  {
    "id": "sta-243",
    "name": "新豐停車場自建停車場充電樁",
    "network": "停車場自建",
    "address": "新竹縣新豐區文化路171號",
    "city": "新竹縣",
    "lat": 24.899,
    "lng": 120.9324,
    "totalStalls": 7,
    "availableStalls": 0,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 13,
    "amenities": [
      "restroom",
      "parking",
      "hotel",
      "cafe",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.5,
    "pricePerKwh": 4
  },
  {
    "id": "sta-244",
    "name": "關西停車場自建充電站",
    "network": "停車場自建",
    "address": "新竹縣關西區民權路930號",
    "city": "新竹縣",
    "lat": 24.7605,
    "lng": 121.0426,
    "totalStalls": 16,
    "availableStalls": 0,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 8,
    "amenities": [
      "restroom",
      "hotel",
      "cafe"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      },
      {
        "id": 15,
        "status": "in_use"
      },
      {
        "id": 16,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.7,
    "pricePerKwh": 4
  },
  {
    "id": "sta-245",
    "name": "湖口中油購物中心充電站",
    "network": "台灣中油",
    "address": "新竹縣湖口區民權路186號",
    "city": "新竹縣",
    "lat": 24.8394,
    "lng": 121.0265,
    "totalStalls": 14,
    "availableStalls": 5,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 142,
    "amenities": [
      "restroom",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.8,
    "pricePerKwh": 5.5
  },
  {
    "id": "sta-246",
    "name": "通霄U-Power快充站",
    "network": "U-Power",
    "address": "苗栗縣通霄區和平路843號",
    "city": "苗栗縣",
    "lat": 24.493,
    "lng": 120.8301,
    "totalStalls": 9,
    "availableStalls": 3,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 105,
    "amenities": [
      "restroom",
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.2,
    "pricePerKwh": 6.3
  },
  {
    "id": "sta-247",
    "name": "苗栗裕電停車場充電樁",
    "network": "裕電能源",
    "address": "苗栗縣苗栗區自由路918號",
    "city": "苗栗縣",
    "lat": 24.6791,
    "lng": 120.897,
    "totalStalls": 12,
    "availableStalls": 4,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 219,
    "amenities": [
      "restroom"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.2,
    "pricePerKwh": 6
  },
  {
    "id": "sta-248",
    "name": "竹南台灣電力停車場充電樁",
    "network": "台灣電力",
    "address": "苗栗縣竹南區文化路210號",
    "city": "苗栗縣",
    "lat": 24.4846,
    "lng": 120.8389,
    "totalStalls": 3,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 107,
    "amenities": [
      "restroom",
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.3,
    "pricePerKwh": 5
  },
  {
    "id": "sta-249",
    "name": "卓蘭U-Power超充站",
    "network": "U-Power",
    "address": "苗栗縣卓蘭區民權路433號",
    "city": "苗栗縣",
    "lat": 24.4445,
    "lng": 120.7469,
    "totalStalls": 2,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 137,
    "amenities": [
      "restroom",
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.9,
    "pricePerKwh": 6.5
  },
  {
    "id": "sta-250",
    "name": "苑裡ForMosa充電站",
    "network": "ForMosa EV",
    "address": "苗栗縣苑裡區自由路590號",
    "city": "苗栗縣",
    "lat": 24.5564,
    "lng": 120.8522,
    "totalStalls": 8,
    "availableStalls": 3,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 234,
    "amenities": [
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "faulted"
      }
    ],
    "openHours": "24小時",
    "rating": 4.3,
    "pricePerKwh": 5.8
  },
  {
    "id": "sta-251",
    "name": "苗栗U-Power快充站",
    "network": "U-Power",
    "address": "苗栗縣苗栗區和平路965號",
    "city": "苗栗縣",
    "lat": 24.667,
    "lng": 120.7451,
    "totalStalls": 13,
    "availableStalls": 3,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 222,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.1,
    "pricePerKwh": 6.5
  },
  {
    "id": "sta-252",
    "name": "頭份台灣電力充電站",
    "network": "台灣電力",
    "address": "苗栗縣頭份區民權路371號",
    "city": "苗栗縣",
    "lat": 24.5922,
    "lng": 120.8083,
    "totalStalls": 13,
    "availableStalls": 3,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 131,
    "amenities": [
      "restroom",
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.5,
    "pricePerKwh": 4.8
  },
  {
    "id": "sta-253",
    "name": "通霄自建快充站",
    "network": "自建",
    "address": "苗栗縣通霄區民權路376號",
    "city": "苗栗縣",
    "lat": 24.5475,
    "lng": 120.9035,
    "totalStalls": 14,
    "availableStalls": 2,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 15,
    "amenities": [
      "parking",
      "hotel",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.8,
    "pricePerKwh": 3
  },
  {
    "id": "sta-254",
    "name": "竹南自建超充站",
    "network": "自建",
    "address": "苗栗縣竹南區自由路241號",
    "city": "苗栗縣",
    "lat": 24.5811,
    "lng": 120.7545,
    "totalStalls": 7,
    "availableStalls": 0,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 17,
    "amenities": [
      "restroom",
      "parking",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.4,
    "pricePerKwh": 4
  },
  {
    "id": "sta-255",
    "name": "卓蘭中油快充站",
    "network": "台灣中油",
    "address": "苗栗縣卓蘭區民權路842號",
    "city": "苗栗縣",
    "lat": 24.5068,
    "lng": 120.8281,
    "totalStalls": 4,
    "availableStalls": 3,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 107,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 3.9,
    "pricePerKwh": 5.5
  },
  {
    "id": "sta-256",
    "name": "通霄停車場自建購物中心充電站",
    "network": "停車場自建",
    "address": "苗栗縣通霄區民權路653號",
    "city": "苗栗縣",
    "lat": 24.5083,
    "lng": 120.9175,
    "totalStalls": 4,
    "availableStalls": 2,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 13,
    "amenities": [
      "restroom",
      "parking",
      "cafe",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.5,
    "pricePerKwh": 4
  },
  {
    "id": "sta-257",
    "name": "竹南特斯拉充電站",
    "network": "Tesla",
    "address": "苗栗縣竹南區自由路531號",
    "city": "苗栗縣",
    "lat": 24.5088,
    "lng": 120.7727,
    "totalStalls": 7,
    "availableStalls": 3,
    "chargerType": "V4",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 333,
    "amenities": [
      "restroom",
      "restaurant",
      "shopping",
      "wifi",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 3.9,
    "pricePerKwh": 7.5
  },
  {
    "id": "sta-258",
    "name": "後龍ForMosa快充站",
    "network": "ForMosa EV",
    "address": "苗栗縣後龍區光明路771號",
    "city": "苗栗縣",
    "lat": 24.4506,
    "lng": 120.7752,
    "totalStalls": 7,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 114,
    "amenities": [
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 4.8,
    "pricePerKwh": 6
  },
  {
    "id": "sta-259",
    "name": "後龍台灣電力購物中心充電站",
    "network": "台灣電力",
    "address": "苗栗縣後龍區和平路690號",
    "city": "苗栗縣",
    "lat": 24.5825,
    "lng": 120.84,
    "totalStalls": 15,
    "availableStalls": 3,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 120,
    "amenities": [
      "restroom"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      },
      {
        "id": 15,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 4.8,
    "pricePerKwh": 4.8
  },
  {
    "id": "sta-260",
    "name": "後龍裕電購物中心充電站",
    "network": "裕電能源",
    "address": "苗栗縣後龍區民權路965號",
    "city": "苗栗縣",
    "lat": 24.5914,
    "lng": 120.7609,
    "totalStalls": 9,
    "availableStalls": 3,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 108,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.4,
    "pricePerKwh": 5.8
  },
  {
    "id": "sta-261",
    "name": "苗栗台灣電力充電站",
    "network": "台灣電力",
    "address": "苗栗縣苗栗區文化路872號",
    "city": "苗栗縣",
    "lat": 24.6529,
    "lng": 120.7606,
    "totalStalls": 15,
    "availableStalls": 4,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 119,
    "amenities": [
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      },
      {
        "id": 15,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 3.9,
    "pricePerKwh": 5
  },
  {
    "id": "sta-262",
    "name": "頭份裕電充電站",
    "network": "裕電能源",
    "address": "苗栗縣頭份區民生路596號",
    "city": "苗栗縣",
    "lat": 24.5439,
    "lng": 120.7592,
    "totalStalls": 2,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 101,
    "amenities": [
      "restroom",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 3.7,
    "pricePerKwh": 5.8
  },
  {
    "id": "sta-263",
    "name": "後龍U-Power充電站",
    "network": "U-Power",
    "address": "苗栗縣後龍區文化路889號",
    "city": "苗栗縣",
    "lat": 24.672,
    "lng": 120.8217,
    "totalStalls": 12,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 117,
    "amenities": [
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 3.6,
    "pricePerKwh": 6.5
  },
  {
    "id": "sta-264",
    "name": "頭份台灣電力充電站",
    "network": "台灣電力",
    "address": "苗栗縣頭份區中正路738號",
    "city": "苗栗縣",
    "lat": 24.4732,
    "lng": 120.8129,
    "totalStalls": 4,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 123,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 4.5,
    "pricePerKwh": 4.8
  },
  {
    "id": "sta-265",
    "name": "竹南U-Power快充站",
    "network": "U-Power",
    "address": "苗栗縣竹南區和平路956號",
    "city": "苗栗縣",
    "lat": 24.4618,
    "lng": 120.816,
    "totalStalls": 13,
    "availableStalls": 0,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 208,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.5,
    "pricePerKwh": 6.5
  },
  {
    "id": "sta-266",
    "name": "卓蘭ForMosa充電站",
    "network": "ForMosa EV",
    "address": "苗栗縣卓蘭區中山路370號",
    "city": "苗栗縣",
    "lat": 24.6499,
    "lng": 120.8601,
    "totalStalls": 15,
    "availableStalls": 10,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 106,
    "amenities": [
      "restroom",
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "available"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      },
      {
        "id": 15,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.9,
    "pricePerKwh": 5.8
  },
  {
    "id": "sta-267",
    "name": "苑裡裕電購物中心充電站",
    "network": "裕電能源",
    "address": "苗栗縣苑裡區和平路621號",
    "city": "苗栗縣",
    "lat": 24.663,
    "lng": 120.7755,
    "totalStalls": 4,
    "availableStalls": 2,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 105,
    "amenities": [
      "restroom",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 4.9,
    "pricePerKwh": 5.8
  },
  {
    "id": "sta-268",
    "name": "西屯ForMosa停車場充電樁",
    "network": "ForMosa EV",
    "address": "台中市西屯區文化路796號",
    "city": "台中市",
    "lat": 24.18,
    "lng": 120.7712,
    "totalStalls": 4,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 112,
    "amenities": [
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 4.1,
    "pricePerKwh": 5.5
  },
  {
    "id": "sta-269",
    "name": "梧棲ForMosa快充站",
    "network": "ForMosa EV",
    "address": "台中市梧棲區中正路247號",
    "city": "台中市",
    "lat": 24.1234,
    "lng": 120.7938,
    "totalStalls": 4,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 127,
    "amenities": [
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.2,
    "pricePerKwh": 5.8
  },
  {
    "id": "sta-270",
    "name": "東區台灣電力充電站",
    "network": "台灣電力",
    "address": "台中市東區區中正路947號",
    "city": "台中市",
    "lat": 24.0602,
    "lng": 120.677,
    "totalStalls": 14,
    "availableStalls": 5,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 125,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.9,
    "pricePerKwh": 5
  },
  {
    "id": "sta-271",
    "name": "中區台灣電力快充站",
    "network": "台灣電力",
    "address": "台中市中區區中正路240號",
    "city": "台中市",
    "lat": 24.2532,
    "lng": 120.6175,
    "totalStalls": 11,
    "availableStalls": 8,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 108,
    "amenities": [
      "restroom",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.9,
    "pricePerKwh": 5
  },
  {
    "id": "sta-272",
    "name": "大里台灣電力快充站",
    "network": "台灣電力",
    "address": "台中市大里區民權路778號",
    "city": "台中市",
    "lat": 24.1136,
    "lng": 120.718,
    "totalStalls": 13,
    "availableStalls": 12,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 118,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "available"
      },
      {
        "id": 11,
        "status": "available"
      },
      {
        "id": 12,
        "status": "available"
      },
      {
        "id": 13,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.7,
    "pricePerKwh": 5
  },
  {
    "id": "sta-273",
    "name": "西區停車場自建快充站",
    "network": "停車場自建",
    "address": "台中市西區區民生路335號",
    "city": "台中市",
    "lat": 24.1822,
    "lng": 120.6574,
    "totalStalls": 7,
    "availableStalls": 6,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2",
      "CCS2"
    ],
    "maxKw": 22,
    "amenities": [
      "parking",
      "hotel",
      "cafe",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 4.9,
    "pricePerKwh": 4.5
  },
  {
    "id": "sta-274",
    "name": "中區特斯拉快充站",
    "network": "Tesla",
    "address": "台中市中區區光明路751號",
    "city": "台中市",
    "lat": 24.239,
    "lng": 120.6433,
    "totalStalls": 7,
    "availableStalls": 5,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 216,
    "amenities": [
      "restroom",
      "shopping",
      "wifi",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.9,
    "pricePerKwh": 7
  },
  {
    "id": "sta-275",
    "name": "沙鹿U-Power超充站",
    "network": "U-Power",
    "address": "台中市沙鹿區民生路220號",
    "city": "台中市",
    "lat": 24.1617,
    "lng": 120.6937,
    "totalStalls": 6,
    "availableStalls": 1,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 232,
    "amenities": [
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 3.6,
    "pricePerKwh": 6.8
  },
  {
    "id": "sta-276",
    "name": "北區台灣電力快充站",
    "network": "台灣電力",
    "address": "台中市北區區復興路654號",
    "city": "台中市",
    "lat": 24.0455,
    "lng": 120.6855,
    "totalStalls": 5,
    "availableStalls": 4,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 123,
    "amenities": [
      "restroom",
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4,
    "pricePerKwh": 4.8
  },
  {
    "id": "sta-277",
    "name": "南區U-Power快充站",
    "network": "U-Power",
    "address": "台中市南區區和平路961號",
    "city": "台中市",
    "lat": 24.1674,
    "lng": 120.7118,
    "totalStalls": 14,
    "availableStalls": 2,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 217,
    "amenities": [
      "restroom",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.9,
    "pricePerKwh": 6.5
  },
  {
    "id": "sta-278",
    "name": "北區自建充電站",
    "network": "自建",
    "address": "台中市北區區自由路641號",
    "city": "台中市",
    "lat": 24.1026,
    "lng": 120.7417,
    "totalStalls": 11,
    "availableStalls": 6,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 14,
    "amenities": [
      "restroom",
      "parking",
      "cafe",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.8,
    "pricePerKwh": 3
  },
  {
    "id": "sta-279",
    "name": "梧棲停車場自建快充站",
    "network": "停車場自建",
    "address": "台中市梧棲區民生路418號",
    "city": "台中市",
    "lat": 24.0402,
    "lng": 120.5974,
    "totalStalls": 13,
    "availableStalls": 6,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 20,
    "amenities": [
      "restroom",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.7,
    "pricePerKwh": 4.5
  },
  {
    "id": "sta-280",
    "name": "中區特斯拉停車場充電樁",
    "network": "Tesla",
    "address": "台中市中區區中正路612號",
    "city": "台中市",
    "lat": 24.2446,
    "lng": 120.6118,
    "totalStalls": 15,
    "availableStalls": 10,
    "chargerType": "V4",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 350,
    "amenities": [
      "restroom",
      "parking",
      "restaurant",
      "wifi",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "available"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      },
      {
        "id": 15,
        "status": "faulted"
      }
    ],
    "openHours": "24小時",
    "rating": 4.2,
    "pricePerKwh": 6.8
  },
  {
    "id": "sta-281",
    "name": "西區U-Power快充站",
    "network": "U-Power",
    "address": "台中市西區區光明路439號",
    "city": "台中市",
    "lat": 24.1334,
    "lng": 120.6812,
    "totalStalls": 6,
    "availableStalls": 5,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 105,
    "amenities": [
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.5,
    "pricePerKwh": 6.3
  },
  {
    "id": "sta-282",
    "name": "大里ForMosa快充站",
    "network": "ForMosa EV",
    "address": "台中市大里區復興路862號",
    "city": "台中市",
    "lat": 24.1116,
    "lng": 120.5849,
    "totalStalls": 12,
    "availableStalls": 4,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 111,
    "amenities": [
      "restroom",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.2,
    "pricePerKwh": 5.8
  },
  {
    "id": "sta-283",
    "name": "清水裕電超充站",
    "network": "裕電能源",
    "address": "台中市清水區自由路899號",
    "city": "台中市",
    "lat": 24.2629,
    "lng": 120.588,
    "totalStalls": 12,
    "availableStalls": 3,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 243,
    "amenities": [
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 3.7,
    "pricePerKwh": 6.2
  },
  {
    "id": "sta-284",
    "name": "北區台灣電力快充站",
    "network": "台灣電力",
    "address": "台中市北區區文化路416號",
    "city": "台中市",
    "lat": 24.1727,
    "lng": 120.6306,
    "totalStalls": 4,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 121,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 4.4,
    "pricePerKwh": 4.8
  },
  {
    "id": "sta-285",
    "name": "梧棲中油快充站",
    "network": "台灣中油",
    "address": "台中市梧棲區中正路958號",
    "city": "台中市",
    "lat": 24.2425,
    "lng": 120.6124,
    "totalStalls": 7,
    "availableStalls": 3,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 130,
    "amenities": [],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "faulted"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 3.9,
    "pricePerKwh": 5
  },
  {
    "id": "sta-286",
    "name": "清水自建快充站",
    "network": "自建",
    "address": "台中市清水區光明路685號",
    "city": "台中市",
    "lat": 24.1872,
    "lng": 120.5911,
    "totalStalls": 12,
    "availableStalls": 4,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 15,
    "amenities": [
      "restroom",
      "parking",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 5,
    "pricePerKwh": 4
  },
  {
    "id": "sta-287",
    "name": "南屯自建購物中心充電站",
    "network": "自建",
    "address": "台中市南屯區中正路977號",
    "city": "台中市",
    "lat": 24.0382,
    "lng": 120.7798,
    "totalStalls": 16,
    "availableStalls": 7,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 18,
    "amenities": [
      "restroom",
      "parking",
      "hotel",
      "cafe",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      },
      {
        "id": 15,
        "status": "in_use"
      },
      {
        "id": 16,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 4.2,
    "pricePerKwh": 4
  },
  {
    "id": "sta-288",
    "name": "北屯自建慢充站",
    "network": "自建",
    "address": "台中市北屯區民權路892號",
    "city": "台中市",
    "lat": 24.1131,
    "lng": 120.7582,
    "totalStalls": 11,
    "availableStalls": 1,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 10,
    "amenities": [
      "parking",
      "hotel",
      "cafe"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4,
    "pricePerKwh": 4
  },
  {
    "id": "sta-289",
    "name": "大里停車場自建快充站",
    "network": "停車場自建",
    "address": "台中市大里區民生路426號",
    "city": "台中市",
    "lat": 24.0662,
    "lng": 120.7922,
    "totalStalls": 7,
    "availableStalls": 2,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2",
      "CCS2"
    ],
    "maxKw": 19,
    "amenities": [
      "restroom",
      "parking",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4,
    "pricePerKwh": 4
  },
  {
    "id": "sta-290",
    "name": "豐原裕電快充站",
    "network": "裕電能源",
    "address": "台中市豐原區復興路198號",
    "city": "台中市",
    "lat": 24.2476,
    "lng": 120.5647,
    "totalStalls": 10,
    "availableStalls": 3,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 138,
    "amenities": [
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.7,
    "pricePerKwh": 6
  },
  {
    "id": "sta-291",
    "name": "南屯ForMosa購物中心充電站",
    "network": "ForMosa EV",
    "address": "台中市南屯區自由路853號",
    "city": "台中市",
    "lat": 24.081,
    "lng": 120.7299,
    "totalStalls": 16,
    "availableStalls": 4,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 100,
    "amenities": [
      "restroom",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      },
      {
        "id": 15,
        "status": "in_use"
      },
      {
        "id": 16,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.2,
    "pricePerKwh": 6
  },
  {
    "id": "sta-292",
    "name": "北區中油超充站",
    "network": "台灣中油",
    "address": "台中市北區區民生路775號",
    "city": "台中市",
    "lat": 24.2302,
    "lng": 120.6165,
    "totalStalls": 13,
    "availableStalls": 3,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 110,
    "amenities": [
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.8,
    "pricePerKwh": 5.5
  },
  {
    "id": "sta-293",
    "name": "南屯自建購物中心充電站",
    "network": "自建",
    "address": "台中市南屯區民權路571號",
    "city": "台中市",
    "lat": 24.2597,
    "lng": 120.7349,
    "totalStalls": 4,
    "availableStalls": 0,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 22,
    "amenities": [
      "parking",
      "cafe",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 3.5,
    "pricePerKwh": 4
  },
  {
    "id": "sta-294",
    "name": "南區中油超充站",
    "network": "台灣中油",
    "address": "台中市南區區光明路446號",
    "city": "台中市",
    "lat": 24.0288,
    "lng": 120.6071,
    "totalStalls": 9,
    "availableStalls": 6,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 120,
    "amenities": [
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.5,
    "pricePerKwh": 5.5
  },
  {
    "id": "sta-295",
    "name": "北區ForMosa充電站",
    "network": "ForMosa EV",
    "address": "台中市北區區民生路283號",
    "city": "台中市",
    "lat": 24.208,
    "lng": 120.6554,
    "totalStalls": 12,
    "availableStalls": 5,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 137,
    "amenities": [
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.1,
    "pricePerKwh": 5.8
  },
  {
    "id": "sta-296",
    "name": "北區停車場自建充電站",
    "network": "停車場自建",
    "address": "台中市北區區和平路839號",
    "city": "台中市",
    "lat": 24.1485,
    "lng": 120.5971,
    "totalStalls": 4,
    "availableStalls": 2,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 13,
    "amenities": [
      "hotel",
      "cafe",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.1,
    "pricePerKwh": 4.5
  },
  {
    "id": "sta-297",
    "name": "西屯特斯拉慢充站",
    "network": "Tesla",
    "address": "台中市西屯區文化路489號",
    "city": "台中市",
    "lat": 24.1077,
    "lng": 120.7121,
    "totalStalls": 9,
    "availableStalls": 4,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 240,
    "amenities": [
      "restroom",
      "parking",
      "restaurant",
      "wifi",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "faulted"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 4,
    "pricePerKwh": 6.8
  },
  {
    "id": "sta-298",
    "name": "梧棲台灣電力購物中心充電站",
    "network": "台灣電力",
    "address": "台中市梧棲區復興路413號",
    "city": "台中市",
    "lat": 24.1158,
    "lng": 120.5965,
    "totalStalls": 15,
    "availableStalls": 7,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 142,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      },
      {
        "id": 15,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 3.6,
    "pricePerKwh": 4.8
  },
  {
    "id": "sta-299",
    "name": "清水特斯拉停車場充電樁",
    "network": "Tesla",
    "address": "台中市清水區民生路797號",
    "city": "台中市",
    "lat": 24.0687,
    "lng": 120.792,
    "totalStalls": 8,
    "availableStalls": 2,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 238,
    "amenities": [
      "restroom",
      "parking",
      "shopping"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.2,
    "pricePerKwh": 7
  },
  {
    "id": "sta-300",
    "name": "南屯停車場自建快充站",
    "network": "停車場自建",
    "address": "台中市南屯區和平路613號",
    "city": "台中市",
    "lat": 24.1431,
    "lng": 120.67,
    "totalStalls": 13,
    "availableStalls": 12,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2",
      "CCS2"
    ],
    "maxKw": 11,
    "amenities": [
      "restroom",
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "available"
      },
      {
        "id": 11,
        "status": "available"
      },
      {
        "id": 12,
        "status": "available"
      },
      {
        "id": 13,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 3.7,
    "pricePerKwh": 4.5
  },
  {
    "id": "sta-301",
    "name": "豐原停車場自建快充站",
    "network": "停車場自建",
    "address": "台中市豐原區和平路778號",
    "city": "台中市",
    "lat": 24.1563,
    "lng": 120.617,
    "totalStalls": 3,
    "availableStalls": 2,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 15,
    "amenities": [
      "restroom",
      "cafe"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.8,
    "pricePerKwh": 4.5
  },
  {
    "id": "sta-302",
    "name": "東區台灣電力停車場充電樁",
    "network": "台灣電力",
    "address": "台中市東區區中正路447號",
    "city": "台中市",
    "lat": 24.1485,
    "lng": 120.7269,
    "totalStalls": 5,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 113,
    "amenities": [
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 4.6,
    "pricePerKwh": 4.8
  },
  {
    "id": "sta-303",
    "name": "清水特斯拉快充站",
    "network": "Tesla",
    "address": "台中市清水區自由路880號",
    "city": "台中市",
    "lat": 24.0347,
    "lng": 120.5616,
    "totalStalls": 5,
    "availableStalls": 2,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 243,
    "amenities": [
      "parking",
      "shopping",
      "wifi",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.9,
    "pricePerKwh": 7.5
  },
  {
    "id": "sta-304",
    "name": "清水停車場自建快充站",
    "network": "停車場自建",
    "address": "台中市清水區中山路256號",
    "city": "台中市",
    "lat": 24.1548,
    "lng": 120.7622,
    "totalStalls": 15,
    "availableStalls": 4,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2",
      "CCS2"
    ],
    "maxKw": 10,
    "amenities": [
      "restroom",
      "parking",
      "hotel"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      },
      {
        "id": 15,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 3.7,
    "pricePerKwh": 4.5
  },
  {
    "id": "sta-305",
    "name": "西屯台灣電力快充站",
    "network": "台灣電力",
    "address": "台中市西屯區文化路290號",
    "city": "台中市",
    "lat": 24.2593,
    "lng": 120.6771,
    "totalStalls": 11,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 124,
    "amenities": [
      "restroom",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 3.7,
    "pricePerKwh": 4.8
  },
  {
    "id": "sta-306",
    "name": "東區自建慢充站",
    "network": "自建",
    "address": "台中市東區區復興路631號",
    "city": "台中市",
    "lat": 24.1362,
    "lng": 120.754,
    "totalStalls": 5,
    "availableStalls": 4,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 10,
    "amenities": [
      "parking",
      "cafe",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 3.9,
    "pricePerKwh": 4
  },
  {
    "id": "sta-307",
    "name": "中區自建購物中心充電站",
    "network": "自建",
    "address": "台中市中區區復興路537號",
    "city": "台中市",
    "lat": 24.2389,
    "lng": 120.6922,
    "totalStalls": 10,
    "availableStalls": 8,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 10,
    "amenities": [
      "restroom",
      "parking",
      "hotel",
      "cafe"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.9,
    "pricePerKwh": 4
  },
  {
    "id": "sta-308",
    "name": "太平自建充電站",
    "network": "自建",
    "address": "台中市太平區中正路286號",
    "city": "台中市",
    "lat": 24.2488,
    "lng": 120.657,
    "totalStalls": 8,
    "availableStalls": 0,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 13,
    "amenities": [
      "restroom",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 4.8,
    "pricePerKwh": 3
  },
  {
    "id": "sta-309",
    "name": "南區ForMosa慢充站",
    "network": "ForMosa EV",
    "address": "台中市南區區和平路256號",
    "city": "台中市",
    "lat": 24.1587,
    "lng": 120.6011,
    "totalStalls": 10,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 136,
    "amenities": [
      "restroom",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 4.8,
    "pricePerKwh": 6
  },
  {
    "id": "sta-310",
    "name": "西區ForMosa快充站",
    "network": "ForMosa EV",
    "address": "台中市西區區復興路376號",
    "city": "台中市",
    "lat": 24.2649,
    "lng": 120.644,
    "totalStalls": 12,
    "availableStalls": 2,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 242,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.9,
    "pricePerKwh": 6
  },
  {
    "id": "sta-311",
    "name": "南區停車場自建充電站",
    "network": "停車場自建",
    "address": "台中市南區區光明路481號",
    "city": "台中市",
    "lat": 24.1713,
    "lng": 120.704,
    "totalStalls": 12,
    "availableStalls": 0,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 9,
    "amenities": [
      "restroom",
      "parking",
      "hotel",
      "cafe"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.2,
    "pricePerKwh": 4.5
  },
  {
    "id": "sta-312",
    "name": "北屯中油快充站",
    "network": "台灣中油",
    "address": "台中市北屯區建國路532號",
    "city": "台中市",
    "lat": 24.1932,
    "lng": 120.5692,
    "totalStalls": 9,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 133,
    "amenities": [
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 4.1,
    "pricePerKwh": 5.5
  },
  {
    "id": "sta-313",
    "name": "豐原U-Power快充站",
    "network": "U-Power",
    "address": "台中市豐原區民生路741號",
    "city": "台中市",
    "lat": 24.0772,
    "lng": 120.764,
    "totalStalls": 15,
    "availableStalls": 5,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 200,
    "amenities": [
      "restroom",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      },
      {
        "id": 15,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.3,
    "pricePerKwh": 6.3
  },
  {
    "id": "sta-314",
    "name": "東區裕電快充站",
    "network": "裕電能源",
    "address": "台中市東區區自由路799號",
    "city": "台中市",
    "lat": 24.1902,
    "lng": 120.6729,
    "totalStalls": 15,
    "availableStalls": 9,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 108,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      },
      {
        "id": 15,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.7,
    "pricePerKwh": 5.8
  },
  {
    "id": "sta-315",
    "name": "沙鹿特斯拉超充站",
    "network": "Tesla",
    "address": "台中市沙鹿區自由路887號",
    "city": "台中市",
    "lat": 24.2237,
    "lng": 120.6301,
    "totalStalls": 3,
    "availableStalls": 0,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 205,
    "amenities": [
      "restroom",
      "shopping",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.5,
    "pricePerKwh": 7.5
  },
  {
    "id": "sta-316",
    "name": "北區ForMosa停車場充電樁",
    "network": "ForMosa EV",
    "address": "台中市北區區民權路794號",
    "city": "台中市",
    "lat": 24.2195,
    "lng": 120.7878,
    "totalStalls": 11,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 125,
    "amenities": [
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4,
    "pricePerKwh": 6
  },
  {
    "id": "sta-317",
    "name": "清水中油快充站",
    "network": "台灣中油",
    "address": "台中市清水區中正路556號",
    "city": "台中市",
    "lat": 24.0309,
    "lng": 120.7554,
    "totalStalls": 6,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 126,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "faulted"
      }
    ],
    "openHours": "24小時",
    "rating": 4.2,
    "pricePerKwh": 5.5
  },
  {
    "id": "sta-318",
    "name": "西區停車場自建充電站",
    "network": "停車場自建",
    "address": "台中市西區區中山路523號",
    "city": "台中市",
    "lat": 24.2348,
    "lng": 120.7349,
    "totalStalls": 8,
    "availableStalls": 2,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2",
      "CCS2"
    ],
    "maxKw": 13,
    "amenities": [
      "restroom",
      "parking",
      "cafe"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 4.4,
    "pricePerKwh": 4.5
  },
  {
    "id": "sta-319",
    "name": "東區特斯拉快充站",
    "network": "Tesla",
    "address": "台中市東區區民權路918號",
    "city": "台中市",
    "lat": 24.1691,
    "lng": 120.6614,
    "totalStalls": 16,
    "availableStalls": 1,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 210,
    "amenities": [
      "restroom",
      "parking",
      "restaurant",
      "shopping",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      },
      {
        "id": 15,
        "status": "in_use"
      },
      {
        "id": 16,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 3.9,
    "pricePerKwh": 6.8
  },
  {
    "id": "sta-320",
    "name": "梧棲U-Power慢充站",
    "network": "U-Power",
    "address": "台中市梧棲區民生路288號",
    "city": "台中市",
    "lat": 24.0892,
    "lng": 120.6299,
    "totalStalls": 2,
    "availableStalls": 0,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 214,
    "amenities": [
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4,
    "pricePerKwh": 6.8
  },
  {
    "id": "sta-321",
    "name": "南區特斯拉購物中心充電站",
    "network": "Tesla",
    "address": "台中市南區區光明路133號",
    "city": "台中市",
    "lat": 24.1207,
    "lng": 120.5694,
    "totalStalls": 10,
    "availableStalls": 6,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 248,
    "amenities": [
      "restroom",
      "parking",
      "restaurant",
      "shopping",
      "wifi",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.1,
    "pricePerKwh": 7
  },
  {
    "id": "sta-322",
    "name": "中區ForMosa快充站",
    "network": "ForMosa EV",
    "address": "台中市中區區民生路240號",
    "city": "台中市",
    "lat": 24.1078,
    "lng": 120.6572,
    "totalStalls": 11,
    "availableStalls": 6,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 129,
    "amenities": [
      "restroom"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 3.6,
    "pricePerKwh": 5.8
  },
  {
    "id": "sta-323",
    "name": "西區U-Power快充站",
    "network": "U-Power",
    "address": "台中市西區區中正路951號",
    "city": "台中市",
    "lat": 24.2613,
    "lng": 120.6993,
    "totalStalls": 2,
    "availableStalls": 0,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 205,
    "amenities": [
      "restroom",
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.7,
    "pricePerKwh": 6.3
  },
  {
    "id": "sta-324",
    "name": "梧棲裕電快充站",
    "network": "裕電能源",
    "address": "台中市梧棲區和平路561號",
    "city": "台中市",
    "lat": 24.1424,
    "lng": 120.5799,
    "totalStalls": 11,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 139,
    "amenities": [
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "faulted"
      }
    ],
    "openHours": "24小時",
    "rating": 3.6,
    "pricePerKwh": 6
  },
  {
    "id": "sta-325",
    "name": "西區停車場自建充電站",
    "network": "停車場自建",
    "address": "台中市西區區復興路496號",
    "city": "台中市",
    "lat": 24.1859,
    "lng": 120.6313,
    "totalStalls": 9,
    "availableStalls": 4,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 19,
    "amenities": [
      "restroom",
      "parking",
      "hotel",
      "cafe",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 3.9,
    "pricePerKwh": 4
  },
  {
    "id": "sta-326",
    "name": "梧棲ForMosa充電站",
    "network": "ForMosa EV",
    "address": "台中市梧棲區自由路981號",
    "city": "台中市",
    "lat": 24.0951,
    "lng": 120.6646,
    "totalStalls": 7,
    "availableStalls": 3,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 203,
    "amenities": [
      "restroom",
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.6,
    "pricePerKwh": 5.5
  },
  {
    "id": "sta-327",
    "name": "豐原裕電快充站",
    "network": "裕電能源",
    "address": "台中市豐原區建國路867號",
    "city": "台中市",
    "lat": 24.1038,
    "lng": 120.6063,
    "totalStalls": 2,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 122,
    "amenities": [
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.2,
    "pricePerKwh": 6
  },
  {
    "id": "sta-328",
    "name": "太平台灣電力慢充站",
    "network": "台灣電力",
    "address": "台中市太平區文化路538號",
    "city": "台中市",
    "lat": 24.1277,
    "lng": 120.7899,
    "totalStalls": 6,
    "availableStalls": 3,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 137,
    "amenities": [
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.5,
    "pricePerKwh": 4.8
  },
  {
    "id": "sta-329",
    "name": "西區自建慢充站",
    "network": "自建",
    "address": "台中市西區區民生路227號",
    "city": "台中市",
    "lat": 24.0619,
    "lng": 120.7586,
    "totalStalls": 14,
    "availableStalls": 9,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 22,
    "amenities": [
      "restroom",
      "parking",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.6,
    "pricePerKwh": 4
  },
  {
    "id": "sta-330",
    "name": "北區裕電快充站",
    "network": "裕電能源",
    "address": "台中市北區區文化路579號",
    "city": "台中市",
    "lat": 24.1922,
    "lng": 120.6824,
    "totalStalls": 13,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 132,
    "amenities": [
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 4.2,
    "pricePerKwh": 5.8
  },
  {
    "id": "sta-331",
    "name": "豐原自建充電站",
    "network": "自建",
    "address": "台中市豐原區文化路749號",
    "city": "台中市",
    "lat": 24.2552,
    "lng": 120.6215,
    "totalStalls": 15,
    "availableStalls": 11,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 7,
    "amenities": [
      "restroom",
      "parking",
      "cafe",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "available"
      },
      {
        "id": 11,
        "status": "available"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      },
      {
        "id": 15,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 3.6,
    "pricePerKwh": 4
  },
  {
    "id": "sta-332",
    "name": "南區中油快充站",
    "network": "台灣中油",
    "address": "台中市南區區民生路695號",
    "city": "台中市",
    "lat": 24.2173,
    "lng": 120.6025,
    "totalStalls": 14,
    "availableStalls": 2,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 115,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.2,
    "pricePerKwh": 5
  },
  {
    "id": "sta-333",
    "name": "大里停車場自建購物中心充電站",
    "network": "停車場自建",
    "address": "台中市大里區民生路865號",
    "city": "台中市",
    "lat": 24.1484,
    "lng": 120.7292,
    "totalStalls": 5,
    "availableStalls": 2,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2",
      "CCS2"
    ],
    "maxKw": 15,
    "amenities": [
      "restroom",
      "parking",
      "hotel",
      "cafe",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.3,
    "pricePerKwh": 4
  },
  {
    "id": "sta-334",
    "name": "大里特斯拉快充站",
    "network": "Tesla",
    "address": "台中市大里區復興路199號",
    "city": "台中市",
    "lat": 24.1104,
    "lng": 120.7719,
    "totalStalls": 4,
    "availableStalls": 1,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 213,
    "amenities": [
      "restroom",
      "shopping",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.7,
    "pricePerKwh": 7.5
  },
  {
    "id": "sta-335",
    "name": "豐原特斯拉快充站",
    "network": "Tesla",
    "address": "台中市豐原區建國路277號",
    "city": "台中市",
    "lat": 24.0958,
    "lng": 120.7075,
    "totalStalls": 13,
    "availableStalls": 4,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 230,
    "amenities": [
      "restroom",
      "parking",
      "shopping"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "faulted"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 3.5,
    "pricePerKwh": 6.8
  },
  {
    "id": "sta-336",
    "name": "西區裕電慢充站",
    "network": "裕電能源",
    "address": "台中市西區區民生路398號",
    "city": "台中市",
    "lat": 24.0348,
    "lng": 120.662,
    "totalStalls": 3,
    "availableStalls": 2,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 112,
    "amenities": [
      "restroom",
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.5,
    "pricePerKwh": 6.2
  },
  {
    "id": "sta-337",
    "name": "西區停車場自建充電站",
    "network": "停車場自建",
    "address": "台中市西區區復興路829號",
    "city": "台中市",
    "lat": 24.0718,
    "lng": 120.768,
    "totalStalls": 4,
    "availableStalls": 0,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 14,
    "amenities": [
      "parking",
      "cafe"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 4.3,
    "pricePerKwh": 4.5
  },
  {
    "id": "sta-338",
    "name": "梧棲U-Power停車場充電樁",
    "network": "U-Power",
    "address": "台中市梧棲區中山路485號",
    "city": "台中市",
    "lat": 24.2514,
    "lng": 120.7007,
    "totalStalls": 11,
    "availableStalls": 10,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 213,
    "amenities": [
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "available"
      },
      {
        "id": 11,
        "status": "faulted"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.3,
    "pricePerKwh": 6.3
  },
  {
    "id": "sta-339",
    "name": "西區特斯拉快充站",
    "network": "Tesla",
    "address": "台中市西區區中山路650號",
    "city": "台中市",
    "lat": 24.2344,
    "lng": 120.5929,
    "totalStalls": 9,
    "availableStalls": 5,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 207,
    "amenities": [
      "restaurant",
      "wifi",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.9,
    "pricePerKwh": 7
  },
  {
    "id": "sta-340",
    "name": "西區特斯拉充電站",
    "network": "Tesla",
    "address": "台中市西區區自由路151號",
    "city": "台中市",
    "lat": 24.2587,
    "lng": 120.7478,
    "totalStalls": 15,
    "availableStalls": 4,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 228,
    "amenities": [
      "restroom",
      "parking",
      "restaurant",
      "shopping"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      },
      {
        "id": 15,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.1,
    "pricePerKwh": 7
  },
  {
    "id": "sta-341",
    "name": "西區U-Power快充站",
    "network": "U-Power",
    "address": "台中市西區區民權路590號",
    "city": "台中市",
    "lat": 24.0877,
    "lng": 120.6418,
    "totalStalls": 13,
    "availableStalls": 6,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 127,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.7,
    "pricePerKwh": 6.8
  },
  {
    "id": "sta-342",
    "name": "西屯停車場自建快充站",
    "network": "停車場自建",
    "address": "台中市西屯區中正路314號",
    "city": "台中市",
    "lat": 24.1543,
    "lng": 120.565,
    "totalStalls": 5,
    "availableStalls": 4,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 18,
    "amenities": [
      "restroom",
      "parking",
      "hotel",
      "cafe",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.8,
    "pricePerKwh": 4
  },
  {
    "id": "sta-343",
    "name": "員林ForMosa停車場充電樁",
    "network": "ForMosa EV",
    "address": "彰化縣員林區和平路611號",
    "city": "彰化縣",
    "lat": 24.102,
    "lng": 120.594,
    "totalStalls": 5,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 133,
    "amenities": [],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "faulted"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 3.6,
    "pricePerKwh": 6
  },
  {
    "id": "sta-344",
    "name": "溪湖ForMosa停車場充電樁",
    "network": "ForMosa EV",
    "address": "彰化縣溪湖區中正路662號",
    "city": "彰化縣",
    "lat": 23.9961,
    "lng": 120.4573,
    "totalStalls": 11,
    "availableStalls": 6,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 120,
    "amenities": [
      "restroom",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "faulted"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.1,
    "pricePerKwh": 5.5
  },
  {
    "id": "sta-345",
    "name": "溪湖裕電快充站",
    "network": "裕電能源",
    "address": "彰化縣溪湖區中正路897號",
    "city": "彰化縣",
    "lat": 24.0841,
    "lng": 120.4938,
    "totalStalls": 4,
    "availableStalls": 3,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 235,
    "amenities": [
      "restroom",
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 4.1,
    "pricePerKwh": 5.8
  },
  {
    "id": "sta-346",
    "name": "彰化ForMosa快充站",
    "network": "ForMosa EV",
    "address": "彰化縣彰化區建國路534號",
    "city": "彰化縣",
    "lat": 24.0782,
    "lng": 120.4597,
    "totalStalls": 4,
    "availableStalls": 2,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 123,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4,
    "pricePerKwh": 5.8
  },
  {
    "id": "sta-347",
    "name": "田中停車場自建快充站",
    "network": "停車場自建",
    "address": "彰化縣田中區復興路449號",
    "city": "彰化縣",
    "lat": 24.0722,
    "lng": 120.5625,
    "totalStalls": 14,
    "availableStalls": 12,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2",
      "CCS2"
    ],
    "maxKw": 13,
    "amenities": [
      "restroom",
      "hotel"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "available"
      },
      {
        "id": 11,
        "status": "available"
      },
      {
        "id": 12,
        "status": "available"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.5,
    "pricePerKwh": 4.5
  },
  {
    "id": "sta-348",
    "name": "彰化ForMosa充電站",
    "network": "ForMosa EV",
    "address": "彰化縣彰化區復興路637號",
    "city": "彰化縣",
    "lat": 23.9813,
    "lng": 120.5315,
    "totalStalls": 15,
    "availableStalls": 7,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 146,
    "amenities": [
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      },
      {
        "id": 15,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.7,
    "pricePerKwh": 5.8
  },
  {
    "id": "sta-349",
    "name": "溪湖特斯拉充電站",
    "network": "Tesla",
    "address": "彰化縣溪湖區復興路449號",
    "city": "彰化縣",
    "lat": 24.0383,
    "lng": 120.5601,
    "totalStalls": 10,
    "availableStalls": 6,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 241,
    "amenities": [
      "restroom",
      "parking",
      "restaurant",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 4,
    "pricePerKwh": 6.8
  },
  {
    "id": "sta-350",
    "name": "二林自建充電站",
    "network": "自建",
    "address": "彰化縣二林區中正路424號",
    "city": "彰化縣",
    "lat": 24.1364,
    "lng": 120.5079,
    "totalStalls": 15,
    "availableStalls": 14,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 15,
    "amenities": [
      "restroom",
      "hotel",
      "cafe",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "available"
      },
      {
        "id": 11,
        "status": "available"
      },
      {
        "id": 12,
        "status": "available"
      },
      {
        "id": 13,
        "status": "available"
      },
      {
        "id": 14,
        "status": "available"
      },
      {
        "id": 15,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 4.9,
    "pricePerKwh": 3
  },
  {
    "id": "sta-351",
    "name": "二林中油停車場充電樁",
    "network": "台灣中油",
    "address": "彰化縣二林區光明路993號",
    "city": "彰化縣",
    "lat": 23.9807,
    "lng": 120.5403,
    "totalStalls": 11,
    "availableStalls": 10,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 104,
    "amenities": [
      "restroom",
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "available"
      },
      {
        "id": 11,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.6,
    "pricePerKwh": 5.5
  },
  {
    "id": "sta-352",
    "name": "溪湖自建快充站",
    "network": "自建",
    "address": "彰化縣溪湖區中山路377號",
    "city": "彰化縣",
    "lat": 24.0181,
    "lng": 120.4691,
    "totalStalls": 10,
    "availableStalls": 0,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 10,
    "amenities": [
      "restroom",
      "hotel",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.8,
    "pricePerKwh": 3
  },
  {
    "id": "sta-353",
    "name": "田中裕電充電站",
    "network": "裕電能源",
    "address": "彰化縣田中區民權路938號",
    "city": "彰化縣",
    "lat": 24.0388,
    "lng": 120.4731,
    "totalStalls": 7,
    "availableStalls": 2,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 100,
    "amenities": [
      "restroom",
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.8,
    "pricePerKwh": 5.8
  },
  {
    "id": "sta-354",
    "name": "和美台灣電力充電站",
    "network": "台灣電力",
    "address": "彰化縣和美區自由路156號",
    "city": "彰化縣",
    "lat": 24.147,
    "lng": 120.5802,
    "totalStalls": 7,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 117,
    "amenities": [
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.1,
    "pricePerKwh": 5
  },
  {
    "id": "sta-355",
    "name": "員林裕電快充站",
    "network": "裕電能源",
    "address": "彰化縣員林區光明路121號",
    "city": "彰化縣",
    "lat": 24.0201,
    "lng": 120.5641,
    "totalStalls": 7,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 133,
    "amenities": [
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.2,
    "pricePerKwh": 6.2
  },
  {
    "id": "sta-356",
    "name": "溪湖U-Power慢充站",
    "network": "U-Power",
    "address": "彰化縣溪湖區中山路510號",
    "city": "彰化縣",
    "lat": 24.0917,
    "lng": 120.498,
    "totalStalls": 9,
    "availableStalls": 7,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 203,
    "amenities": [
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.8,
    "pricePerKwh": 6.3
  },
  {
    "id": "sta-357",
    "name": "員林裕電快充站",
    "network": "裕電能源",
    "address": "彰化縣員林區民權路456號",
    "city": "彰化縣",
    "lat": 24.0303,
    "lng": 120.576,
    "totalStalls": 14,
    "availableStalls": 5,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 129,
    "amenities": [
      "restroom",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 3.6,
    "pricePerKwh": 6
  },
  {
    "id": "sta-358",
    "name": "彰化台灣電力充電站",
    "network": "台灣電力",
    "address": "彰化縣彰化區自由路765號",
    "city": "彰化縣",
    "lat": 24.1457,
    "lng": 120.4907,
    "totalStalls": 13,
    "availableStalls": 8,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 135,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 3.5,
    "pricePerKwh": 5
  },
  {
    "id": "sta-359",
    "name": "彰化停車場自建充電站",
    "network": "停車場自建",
    "address": "彰化縣彰化區民生路377號",
    "city": "彰化縣",
    "lat": 24.1347,
    "lng": 120.5383,
    "totalStalls": 3,
    "availableStalls": 0,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2",
      "CCS2"
    ],
    "maxKw": 7,
    "amenities": [
      "restroom",
      "parking",
      "hotel",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 3.6,
    "pricePerKwh": 4.5
  },
  {
    "id": "sta-360",
    "name": "和美台灣電力慢充站",
    "network": "台灣電力",
    "address": "彰化縣和美區民權路765號",
    "city": "彰化縣",
    "lat": 23.9814,
    "lng": 120.5203,
    "totalStalls": 2,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 142,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 3.9,
    "pricePerKwh": 4.8
  },
  {
    "id": "sta-361",
    "name": "鹿港中油快充站",
    "network": "台灣中油",
    "address": "彰化縣鹿港區民生路150號",
    "city": "彰化縣",
    "lat": 24.0244,
    "lng": 120.5637,
    "totalStalls": 2,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 112,
    "amenities": [
      "restroom",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.8,
    "pricePerKwh": 5
  },
  {
    "id": "sta-362",
    "name": "和美停車場自建快充站",
    "network": "停車場自建",
    "address": "彰化縣和美區中山路860號",
    "city": "彰化縣",
    "lat": 24.0135,
    "lng": 120.5967,
    "totalStalls": 4,
    "availableStalls": 1,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2",
      "CCS2"
    ],
    "maxKw": 11,
    "amenities": [
      "cafe",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.5,
    "pricePerKwh": 3.5
  },
  {
    "id": "sta-363",
    "name": "田中U-Power停車場充電樁",
    "network": "U-Power",
    "address": "彰化縣田中區和平路852號",
    "city": "彰化縣",
    "lat": 24.071,
    "lng": 120.5141,
    "totalStalls": 12,
    "availableStalls": 3,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 247,
    "amenities": [
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4,
    "pricePerKwh": 6.3
  },
  {
    "id": "sta-364",
    "name": "溪湖特斯拉停車場充電樁",
    "network": "Tesla",
    "address": "彰化縣溪湖區和平路650號",
    "city": "彰化縣",
    "lat": 24.0074,
    "lng": 120.6013,
    "totalStalls": 11,
    "availableStalls": 2,
    "chargerType": "V4",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 336,
    "amenities": [
      "restroom",
      "parking",
      "restaurant"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 3.6,
    "pricePerKwh": 6.8
  },
  {
    "id": "sta-365",
    "name": "溪湖特斯拉快充站",
    "network": "Tesla",
    "address": "彰化縣溪湖區文化路653號",
    "city": "彰化縣",
    "lat": 24.0053,
    "lng": 120.4915,
    "totalStalls": 5,
    "availableStalls": 2,
    "chargerType": "V4",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 321,
    "amenities": [
      "restroom",
      "restaurant",
      "shopping",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.3,
    "pricePerKwh": 6.8
  },
  {
    "id": "sta-366",
    "name": "田中台灣電力慢充站",
    "network": "台灣電力",
    "address": "彰化縣田中區建國路353號",
    "city": "彰化縣",
    "lat": 23.987,
    "lng": 120.497,
    "totalStalls": 3,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 149,
    "amenities": [
      "restroom"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.2,
    "pricePerKwh": 4.8
  },
  {
    "id": "sta-367",
    "name": "田中裕電停車場充電樁",
    "network": "裕電能源",
    "address": "彰化縣田中區民生路812號",
    "city": "彰化縣",
    "lat": 24.0887,
    "lng": 120.5187,
    "totalStalls": 4,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 103,
    "amenities": [
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4,
    "pricePerKwh": 6
  },
  {
    "id": "sta-368",
    "name": "南投中油購物中心充電站",
    "network": "台灣中油",
    "address": "南投縣南投區復興路968號",
    "city": "南投縣",
    "lat": 24.107,
    "lng": 121.0213,
    "totalStalls": 14,
    "availableStalls": 10,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 144,
    "amenities": [
      "restroom",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "available"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.2,
    "pricePerKwh": 5.5
  },
  {
    "id": "sta-369",
    "name": "竹山台灣電力快充站",
    "network": "台灣電力",
    "address": "南投縣竹山區民權路931號",
    "city": "南投縣",
    "lat": 23.8377,
    "lng": 121.0554,
    "totalStalls": 9,
    "availableStalls": 3,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 130,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 3.7,
    "pricePerKwh": 4.8
  },
  {
    "id": "sta-370",
    "name": "集集自建充電站",
    "network": "自建",
    "address": "南投縣集集區文化路187號",
    "city": "南投縣",
    "lat": 24.0155,
    "lng": 121.0354,
    "totalStalls": 13,
    "availableStalls": 7,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 8,
    "amenities": [
      "hotel",
      "cafe",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 3.8,
    "pricePerKwh": 4
  },
  {
    "id": "sta-371",
    "name": "埔里特斯拉充電站",
    "network": "Tesla",
    "address": "南投縣埔里區文化路983號",
    "city": "南投縣",
    "lat": 23.9148,
    "lng": 121.0538,
    "totalStalls": 12,
    "availableStalls": 7,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 241,
    "amenities": [
      "restroom",
      "parking",
      "restaurant",
      "shopping",
      "wifi",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.8,
    "pricePerKwh": 6.8
  },
  {
    "id": "sta-372",
    "name": "南投U-Power快充站",
    "network": "U-Power",
    "address": "南投縣南投區和平路665號",
    "city": "南投縣",
    "lat": 23.9915,
    "lng": 120.9533,
    "totalStalls": 5,
    "availableStalls": 0,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 222,
    "amenities": [
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.5,
    "pricePerKwh": 6.8
  },
  {
    "id": "sta-373",
    "name": "名間停車場自建停車場充電樁",
    "network": "停車場自建",
    "address": "南投縣名間區光明路263號",
    "city": "南投縣",
    "lat": 23.8338,
    "lng": 120.9219,
    "totalStalls": 16,
    "availableStalls": 7,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 22,
    "amenities": [
      "restroom",
      "parking",
      "hotel",
      "cafe",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      },
      {
        "id": 15,
        "status": "in_use"
      },
      {
        "id": 16,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.4,
    "pricePerKwh": 3.5
  },
  {
    "id": "sta-374",
    "name": "名間ForMosa購物中心充電站",
    "network": "ForMosa EV",
    "address": "南投縣名間區民權路995號",
    "city": "南投縣",
    "lat": 23.9959,
    "lng": 121.0016,
    "totalStalls": 11,
    "availableStalls": 9,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 223,
    "amenities": [
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.8,
    "pricePerKwh": 5.8
  },
  {
    "id": "sta-375",
    "name": "竹山自建慢充站",
    "network": "自建",
    "address": "南投縣竹山區中山路595號",
    "city": "南投縣",
    "lat": 24.0783,
    "lng": 121.0187,
    "totalStalls": 9,
    "availableStalls": 6,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 18,
    "amenities": [
      "restroom",
      "parking",
      "hotel",
      "cafe",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.8,
    "pricePerKwh": 3
  },
  {
    "id": "sta-376",
    "name": "草屯裕電購物中心充電站",
    "network": "裕電能源",
    "address": "南投縣草屯區自由路687號",
    "city": "南投縣",
    "lat": 23.9342,
    "lng": 120.9745,
    "totalStalls": 11,
    "availableStalls": 3,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 236,
    "amenities": [
      "restroom",
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.5,
    "pricePerKwh": 6
  },
  {
    "id": "sta-377",
    "name": "竹山裕電充電站",
    "network": "裕電能源",
    "address": "南投縣竹山區建國路314號",
    "city": "南投縣",
    "lat": 24.1076,
    "lng": 120.9644,
    "totalStalls": 4,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 120,
    "amenities": [
      "restroom",
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.8,
    "pricePerKwh": 6
  },
  {
    "id": "sta-378",
    "name": "草屯ForMosa停車場充電樁",
    "network": "ForMosa EV",
    "address": "南投縣草屯區復興路156號",
    "city": "南投縣",
    "lat": 23.9181,
    "lng": 120.894,
    "totalStalls": 3,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 116,
    "amenities": [
      "restroom",
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.2,
    "pricePerKwh": 6
  },
  {
    "id": "sta-379",
    "name": "埔里ForMosa快充站",
    "network": "ForMosa EV",
    "address": "南投縣埔里區和平路626號",
    "city": "南投縣",
    "lat": 24.0087,
    "lng": 120.8866,
    "totalStalls": 16,
    "availableStalls": 8,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 120,
    "amenities": [
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      },
      {
        "id": 15,
        "status": "in_use"
      },
      {
        "id": 16,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 3.6,
    "pricePerKwh": 5.8
  },
  {
    "id": "sta-380",
    "name": "草屯中油快充站",
    "network": "台灣中油",
    "address": "南投縣草屯區民權路286號",
    "city": "南投縣",
    "lat": 24.0845,
    "lng": 120.9668,
    "totalStalls": 10,
    "availableStalls": 5,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 100,
    "amenities": [
      "restroom",
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.8,
    "pricePerKwh": 5.5
  },
  {
    "id": "sta-381",
    "name": "名間ForMosa停車場充電樁",
    "network": "ForMosa EV",
    "address": "南投縣名間區文化路375號",
    "city": "南投縣",
    "lat": 23.8713,
    "lng": 121.0344,
    "totalStalls": 3,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 119,
    "amenities": [
      "restroom",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 4.9,
    "pricePerKwh": 6
  },
  {
    "id": "sta-382",
    "name": "埔里ForMosa快充站",
    "network": "ForMosa EV",
    "address": "南投縣埔里區光明路811號",
    "city": "南投縣",
    "lat": 24.0918,
    "lng": 121.0406,
    "totalStalls": 5,
    "availableStalls": 4,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 110,
    "amenities": [
      "restroom"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "faulted"
      }
    ],
    "openHours": "24小時",
    "rating": 3.9,
    "pricePerKwh": 5.5
  },
  {
    "id": "sta-383",
    "name": "南投ForMosa充電站",
    "network": "ForMosa EV",
    "address": "南投縣南投區復興路869號",
    "city": "南投縣",
    "lat": 23.8852,
    "lng": 120.9855,
    "totalStalls": 6,
    "availableStalls": 1,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 222,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "faulted"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.7,
    "pricePerKwh": 5.5
  },
  {
    "id": "sta-384",
    "name": "草屯自建充電站",
    "network": "自建",
    "address": "南投縣草屯區建國路384號",
    "city": "南投縣",
    "lat": 24.0996,
    "lng": 121.0217,
    "totalStalls": 9,
    "availableStalls": 0,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 7,
    "amenities": [
      "restroom",
      "cafe",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 4,
    "pricePerKwh": 4
  },
  {
    "id": "sta-385",
    "name": "集集中油充電站",
    "network": "台灣中油",
    "address": "南投縣集集區民生路553號",
    "city": "南投縣",
    "lat": 24.0368,
    "lng": 120.9837,
    "totalStalls": 13,
    "availableStalls": 9,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 127,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.1,
    "pricePerKwh": 5
  },
  {
    "id": "sta-386",
    "name": "北港特斯拉充電站",
    "network": "Tesla",
    "address": "雲林縣北港區中正路812號",
    "city": "雲林縣",
    "lat": 23.7035,
    "lng": 120.3765,
    "totalStalls": 7,
    "availableStalls": 2,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 205,
    "amenities": [
      "parking",
      "shopping",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 3.6,
    "pricePerKwh": 6.8
  },
  {
    "id": "sta-387",
    "name": "虎尾ForMosa停車場充電樁",
    "network": "ForMosa EV",
    "address": "雲林縣虎尾區文化路217號",
    "city": "雲林縣",
    "lat": 23.7056,
    "lng": 120.3441,
    "totalStalls": 3,
    "availableStalls": 1,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 208,
    "amenities": [
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 4.2,
    "pricePerKwh": 5.8
  },
  {
    "id": "sta-388",
    "name": "虎尾中油充電站",
    "network": "台灣中油",
    "address": "雲林縣虎尾區和平路242號",
    "city": "雲林縣",
    "lat": 23.6364,
    "lng": 120.4683,
    "totalStalls": 8,
    "availableStalls": 5,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 125,
    "amenities": [
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "faulted"
      }
    ],
    "openHours": "24小時",
    "rating": 4.6,
    "pricePerKwh": 5.5
  },
  {
    "id": "sta-389",
    "name": "土庫中油充電站",
    "network": "台灣中油",
    "address": "雲林縣土庫區復興路587號",
    "city": "雲林縣",
    "lat": 23.7139,
    "lng": 120.4876,
    "totalStalls": 13,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 136,
    "amenities": [
      "restroom",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 4.8,
    "pricePerKwh": 5
  },
  {
    "id": "sta-390",
    "name": "斗南台灣電力快充站",
    "network": "台灣電力",
    "address": "雲林縣斗南區和平路170號",
    "city": "雲林縣",
    "lat": 23.7329,
    "lng": 120.485,
    "totalStalls": 2,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 114,
    "amenities": [
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 4.2,
    "pricePerKwh": 4.8
  },
  {
    "id": "sta-391",
    "name": "虎尾停車場自建快充站",
    "network": "停車場自建",
    "address": "雲林縣虎尾區文化路746號",
    "city": "雲林縣",
    "lat": 23.7503,
    "lng": 120.4772,
    "totalStalls": 5,
    "availableStalls": 4,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2",
      "CCS2"
    ],
    "maxKw": 8,
    "amenities": [
      "restroom",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "faulted"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 3.7,
    "pricePerKwh": 3.5
  },
  {
    "id": "sta-392",
    "name": "虎尾ForMosa充電站",
    "network": "ForMosa EV",
    "address": "雲林縣虎尾區光明路286號",
    "city": "雲林縣",
    "lat": 23.6607,
    "lng": 120.4661,
    "totalStalls": 15,
    "availableStalls": 1,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 232,
    "amenities": [
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      },
      {
        "id": 15,
        "status": "faulted"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.7,
    "pricePerKwh": 5.5
  },
  {
    "id": "sta-393",
    "name": "土庫裕電快充站",
    "network": "裕電能源",
    "address": "雲林縣土庫區光明路612號",
    "city": "雲林縣",
    "lat": 23.6651,
    "lng": 120.4112,
    "totalStalls": 3,
    "availableStalls": 2,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 126,
    "amenities": [
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.6,
    "pricePerKwh": 6
  },
  {
    "id": "sta-394",
    "name": "北港裕電快充站",
    "network": "裕電能源",
    "address": "雲林縣北港區民生路162號",
    "city": "雲林縣",
    "lat": 23.6529,
    "lng": 120.4785,
    "totalStalls": 2,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 108,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.9,
    "pricePerKwh": 5.8
  },
  {
    "id": "sta-395",
    "name": "斗南台灣電力充電站",
    "network": "台灣電力",
    "address": "雲林縣斗南區文化路483號",
    "city": "雲林縣",
    "lat": 23.6581,
    "lng": 120.3788,
    "totalStalls": 11,
    "availableStalls": 4,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 147,
    "amenities": [
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.9,
    "pricePerKwh": 5
  },
  {
    "id": "sta-396",
    "name": "虎尾台灣電力充電站",
    "network": "台灣電力",
    "address": "雲林縣虎尾區和平路142號",
    "city": "雲林縣",
    "lat": 23.7619,
    "lng": 120.4089,
    "totalStalls": 10,
    "availableStalls": 7,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 140,
    "amenities": [
      "restroom",
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.5,
    "pricePerKwh": 4.8
  },
  {
    "id": "sta-397",
    "name": "西螺特斯拉快充站",
    "network": "Tesla",
    "address": "雲林縣西螺區中正路641號",
    "city": "雲林縣",
    "lat": 23.7317,
    "lng": 120.3911,
    "totalStalls": 7,
    "availableStalls": 3,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 225,
    "amenities": [
      "restroom",
      "shopping",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 4.5,
    "pricePerKwh": 6.8
  },
  {
    "id": "sta-398",
    "name": "西螺中油快充站",
    "network": "台灣中油",
    "address": "雲林縣西螺區自由路881號",
    "city": "雲林縣",
    "lat": 23.6944,
    "lng": 120.4659,
    "totalStalls": 6,
    "availableStalls": 3,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 140,
    "amenities": [
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.9,
    "pricePerKwh": 5
  },
  {
    "id": "sta-399",
    "name": "斗六U-Power快充站",
    "network": "U-Power",
    "address": "雲林縣斗六區文化路381號",
    "city": "雲林縣",
    "lat": 23.6817,
    "lng": 120.4842,
    "totalStalls": 7,
    "availableStalls": 0,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 213,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4,
    "pricePerKwh": 6.3
  },
  {
    "id": "sta-400",
    "name": "斗南停車場自建充電站",
    "network": "停車場自建",
    "address": "雲林縣斗南區自由路129號",
    "city": "雲林縣",
    "lat": 23.6665,
    "lng": 120.4149,
    "totalStalls": 13,
    "availableStalls": 10,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 12,
    "amenities": [
      "restroom",
      "cafe"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "available"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.2,
    "pricePerKwh": 3.5
  },
  {
    "id": "sta-401",
    "name": "虎尾中油快充站",
    "network": "台灣中油",
    "address": "雲林縣虎尾區民權路846號",
    "city": "雲林縣",
    "lat": 23.7397,
    "lng": 120.3468,
    "totalStalls": 4,
    "availableStalls": 3,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 122,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 3.6,
    "pricePerKwh": 5.5
  },
  {
    "id": "sta-402",
    "name": "斗六ForMosa停車場充電樁",
    "network": "ForMosa EV",
    "address": "雲林縣斗六區光明路574號",
    "city": "雲林縣",
    "lat": 23.636,
    "lng": 120.5071,
    "totalStalls": 13,
    "availableStalls": 4,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 226,
    "amenities": [
      "restroom"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.5,
    "pricePerKwh": 5.8
  },
  {
    "id": "sta-403",
    "name": "虎尾特斯拉慢充站",
    "network": "Tesla",
    "address": "雲林縣虎尾區中正路332號",
    "city": "雲林縣",
    "lat": 23.7502,
    "lng": 120.39,
    "totalStalls": 15,
    "availableStalls": 3,
    "chargerType": "V4",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 344,
    "amenities": [
      "restaurant"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      },
      {
        "id": 15,
        "status": "faulted"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.7,
    "pricePerKwh": 7.5
  },
  {
    "id": "sta-404",
    "name": "土庫中油充電站",
    "network": "台灣中油",
    "address": "雲林縣土庫區自由路755號",
    "city": "雲林縣",
    "lat": 23.6786,
    "lng": 120.3919,
    "totalStalls": 3,
    "availableStalls": 2,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 129,
    "amenities": [
      "restroom",
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4,
    "pricePerKwh": 5.5
  },
  {
    "id": "sta-405",
    "name": "斗六台灣電力充電站",
    "network": "台灣電力",
    "address": "雲林縣斗六區民生路513號",
    "city": "雲林縣",
    "lat": 23.6389,
    "lng": 120.3428,
    "totalStalls": 13,
    "availableStalls": 4,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 143,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.7,
    "pricePerKwh": 4.8
  },
  {
    "id": "sta-406",
    "name": "西區中油慢充站",
    "network": "台灣中油",
    "address": "嘉義市西區區中正路632號",
    "city": "嘉義市",
    "lat": 23.4525,
    "lng": 120.4288,
    "totalStalls": 12,
    "availableStalls": 2,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 137,
    "amenities": [
      "restroom",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.6,
    "pricePerKwh": 5
  },
  {
    "id": "sta-407",
    "name": "東區ForMosa快充站",
    "network": "ForMosa EV",
    "address": "嘉義市東區區中山路750號",
    "city": "嘉義市",
    "lat": 23.4591,
    "lng": 120.4321,
    "totalStalls": 13,
    "availableStalls": 2,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 205,
    "amenities": [
      "restroom",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.5,
    "pricePerKwh": 6
  },
  {
    "id": "sta-408",
    "name": "西區U-Power購物中心充電站",
    "network": "U-Power",
    "address": "嘉義市西區區自由路718號",
    "city": "嘉義市",
    "lat": 23.4921,
    "lng": 120.43,
    "totalStalls": 11,
    "availableStalls": 3,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 204,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.6,
    "pricePerKwh": 6.5
  },
  {
    "id": "sta-409",
    "name": "西區裕電超充站",
    "network": "裕電能源",
    "address": "嘉義市西區區民生路541號",
    "city": "嘉義市",
    "lat": 23.484,
    "lng": 120.4229,
    "totalStalls": 2,
    "availableStalls": 0,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 214,
    "amenities": [
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "faulted"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 3.9,
    "pricePerKwh": 5.8
  },
  {
    "id": "sta-410",
    "name": "西區台灣電力快充站",
    "network": "台灣電力",
    "address": "嘉義市西區區民權路788號",
    "city": "嘉義市",
    "lat": 23.4926,
    "lng": 120.4643,
    "totalStalls": 2,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 145,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.5,
    "pricePerKwh": 5
  },
  {
    "id": "sta-411",
    "name": "西區U-Power停車場充電樁",
    "network": "U-Power",
    "address": "嘉義市西區區中山路489號",
    "city": "嘉義市",
    "lat": 23.4817,
    "lng": 120.422,
    "totalStalls": 5,
    "availableStalls": 2,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 223,
    "amenities": [
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.3,
    "pricePerKwh": 6.5
  },
  {
    "id": "sta-412",
    "name": "東區特斯拉快充站",
    "network": "Tesla",
    "address": "嘉義市東區區復興路681號",
    "city": "嘉義市",
    "lat": 23.4944,
    "lng": 120.4225,
    "totalStalls": 11,
    "availableStalls": 9,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 240,
    "amenities": [
      "restroom",
      "parking",
      "wifi",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.5,
    "pricePerKwh": 7
  },
  {
    "id": "sta-413",
    "name": "西區中油充電站",
    "network": "台灣中油",
    "address": "嘉義市西區區民權路932號",
    "city": "嘉義市",
    "lat": 23.487,
    "lng": 120.4698,
    "totalStalls": 12,
    "availableStalls": 8,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 119,
    "amenities": [
      "restroom",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 3.9,
    "pricePerKwh": 5
  },
  {
    "id": "sta-414",
    "name": "西區中油快充站",
    "network": "台灣中油",
    "address": "嘉義市西區區和平路836號",
    "city": "嘉義市",
    "lat": 23.4743,
    "lng": 120.4548,
    "totalStalls": 4,
    "availableStalls": 3,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 126,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.9,
    "pricePerKwh": 5.5
  },
  {
    "id": "sta-415",
    "name": "西區U-Power停車場充電樁",
    "network": "U-Power",
    "address": "嘉義市西區區自由路184號",
    "city": "嘉義市",
    "lat": 23.5076,
    "lng": 120.4451,
    "totalStalls": 3,
    "availableStalls": 1,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 210,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 3.9,
    "pricePerKwh": 6.5
  },
  {
    "id": "sta-416",
    "name": "西區裕電快充站",
    "network": "裕電能源",
    "address": "嘉義市西區區中山路541號",
    "city": "嘉義市",
    "lat": 23.4657,
    "lng": 120.4699,
    "totalStalls": 12,
    "availableStalls": 8,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 136,
    "amenities": [],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "faulted"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.9,
    "pricePerKwh": 6.2
  },
  {
    "id": "sta-417",
    "name": "西區台灣電力停車場充電樁",
    "network": "台灣電力",
    "address": "嘉義市西區區民權路432號",
    "city": "嘉義市",
    "lat": 23.5049,
    "lng": 120.4383,
    "totalStalls": 8,
    "availableStalls": 5,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 106,
    "amenities": [
      "restroom",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.3,
    "pricePerKwh": 5
  },
  {
    "id": "sta-418",
    "name": "西區裕電快充站",
    "network": "裕電能源",
    "address": "嘉義市西區區民權路214號",
    "city": "嘉義市",
    "lat": 23.4655,
    "lng": 120.4225,
    "totalStalls": 6,
    "availableStalls": 5,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 120,
    "amenities": [
      "restroom",
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.7,
    "pricePerKwh": 6.2
  },
  {
    "id": "sta-419",
    "name": "東區自建快充站",
    "network": "自建",
    "address": "嘉義市東區區中山路499號",
    "city": "嘉義市",
    "lat": 23.5001,
    "lng": 120.4304,
    "totalStalls": 5,
    "availableStalls": 4,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 15,
    "amenities": [
      "restroom",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.8,
    "pricePerKwh": 4
  },
  {
    "id": "sta-420",
    "name": "西區自建慢充站",
    "network": "自建",
    "address": "嘉義市西區區自由路256號",
    "city": "嘉義市",
    "lat": 23.4932,
    "lng": 120.4671,
    "totalStalls": 8,
    "availableStalls": 2,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 12,
    "amenities": [
      "restroom",
      "parking",
      "hotel",
      "cafe",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.3,
    "pricePerKwh": 4
  },
  {
    "id": "sta-421",
    "name": "東區停車場自建充電站",
    "network": "停車場自建",
    "address": "嘉義市東區區復興路529號",
    "city": "嘉義市",
    "lat": 23.4535,
    "lng": 120.4596,
    "totalStalls": 7,
    "availableStalls": 1,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2",
      "CCS2"
    ],
    "maxKw": 13,
    "amenities": [
      "restroom",
      "hotel",
      "cafe",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.7,
    "pricePerKwh": 3.5
  },
  {
    "id": "sta-422",
    "name": "東區中油慢充站",
    "network": "台灣中油",
    "address": "嘉義市東區區復興路168號",
    "city": "嘉義市",
    "lat": 23.4577,
    "lng": 120.4598,
    "totalStalls": 11,
    "availableStalls": 6,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 120,
    "amenities": [
      "restroom",
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.2,
    "pricePerKwh": 5
  },
  {
    "id": "sta-423",
    "name": "西區特斯拉超充站",
    "network": "Tesla",
    "address": "嘉義市西區區民生路889號",
    "city": "嘉義市",
    "lat": 23.4804,
    "lng": 120.4765,
    "totalStalls": 2,
    "availableStalls": 0,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 233,
    "amenities": [
      "parking",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.6,
    "pricePerKwh": 6.8
  },
  {
    "id": "sta-424",
    "name": "布袋台灣電力充電站",
    "network": "台灣電力",
    "address": "嘉義縣布袋區自由路924號",
    "city": "嘉義縣",
    "lat": 23.4408,
    "lng": 120.3158,
    "totalStalls": 7,
    "availableStalls": 5,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 107,
    "amenities": [
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 3.9,
    "pricePerKwh": 4.8
  },
  {
    "id": "sta-425",
    "name": "朴子中油充電站",
    "network": "台灣中油",
    "address": "嘉義縣朴子區民權路940號",
    "city": "嘉義縣",
    "lat": 23.492,
    "lng": 120.3519,
    "totalStalls": 15,
    "availableStalls": 9,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 129,
    "amenities": [],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      },
      {
        "id": 15,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 3.8,
    "pricePerKwh": 5
  },
  {
    "id": "sta-426",
    "name": "大林裕電停車場充電樁",
    "network": "裕電能源",
    "address": "嘉義縣大林區民權路541號",
    "city": "嘉義縣",
    "lat": 23.3653,
    "lng": 120.236,
    "totalStalls": 10,
    "availableStalls": 6,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 206,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.8,
    "pricePerKwh": 6
  },
  {
    "id": "sta-427",
    "name": "溪口特斯拉慢充站",
    "network": "Tesla",
    "address": "嘉義縣溪口區建國路997號",
    "city": "嘉義縣",
    "lat": 23.4149,
    "lng": 120.1587,
    "totalStalls": 14,
    "availableStalls": 4,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 248,
    "amenities": [
      "restroom",
      "parking",
      "restaurant"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.7,
    "pricePerKwh": 6.8
  },
  {
    "id": "sta-428",
    "name": "朴子裕電快充站",
    "network": "裕電能源",
    "address": "嘉義縣朴子區民權路834號",
    "city": "嘉義縣",
    "lat": 23.3839,
    "lng": 120.1702,
    "totalStalls": 15,
    "availableStalls": 8,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 221,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      },
      {
        "id": 15,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.4,
    "pricePerKwh": 5.8
  },
  {
    "id": "sta-429",
    "name": "朴子ForMosa慢充站",
    "network": "ForMosa EV",
    "address": "嘉義縣朴子區復興路597號",
    "city": "嘉義縣",
    "lat": 23.3671,
    "lng": 120.2551,
    "totalStalls": 8,
    "availableStalls": 4,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 217,
    "amenities": [
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.5,
    "pricePerKwh": 5.8
  },
  {
    "id": "sta-430",
    "name": "大林中油快充站",
    "network": "台灣中油",
    "address": "嘉義縣大林區文化路220號",
    "city": "嘉義縣",
    "lat": 23.5519,
    "lng": 120.3463,
    "totalStalls": 12,
    "availableStalls": 3,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 123,
    "amenities": [
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.9,
    "pricePerKwh": 5.5
  },
  {
    "id": "sta-431",
    "name": "溪口ForMosa快充站",
    "network": "ForMosa EV",
    "address": "嘉義縣溪口區建國路571號",
    "city": "嘉義縣",
    "lat": 23.4397,
    "lng": 120.1707,
    "totalStalls": 3,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 137,
    "amenities": [
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "faulted"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.3,
    "pricePerKwh": 5.8
  },
  {
    "id": "sta-432",
    "name": "朴子台灣電力快充站",
    "network": "台灣電力",
    "address": "嘉義縣朴子區民權路274號",
    "city": "嘉義縣",
    "lat": 23.5386,
    "lng": 120.2467,
    "totalStalls": 5,
    "availableStalls": 2,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 110,
    "amenities": [
      "restroom",
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.5,
    "pricePerKwh": 4.8
  },
  {
    "id": "sta-433",
    "name": "朴子停車場自建快充站",
    "network": "停車場自建",
    "address": "嘉義縣朴子區中山路886號",
    "city": "嘉義縣",
    "lat": 23.5138,
    "lng": 120.1559,
    "totalStalls": 5,
    "availableStalls": 4,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 8,
    "amenities": [
      "parking",
      "cafe",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 4.2,
    "pricePerKwh": 3.5
  },
  {
    "id": "sta-434",
    "name": "太保中油購物中心充電站",
    "network": "台灣中油",
    "address": "嘉義縣太保區建國路820號",
    "city": "嘉義縣",
    "lat": 23.4694,
    "lng": 120.1976,
    "totalStalls": 2,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 108,
    "amenities": [
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.1,
    "pricePerKwh": 5
  },
  {
    "id": "sta-435",
    "name": "朴子裕電慢充站",
    "network": "裕電能源",
    "address": "嘉義縣朴子區民權路826號",
    "city": "嘉義縣",
    "lat": 23.4668,
    "lng": 120.3479,
    "totalStalls": 3,
    "availableStalls": 2,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 213,
    "amenities": [
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.9,
    "pricePerKwh": 6.2
  },
  {
    "id": "sta-436",
    "name": "太保停車場自建超充站",
    "network": "停車場自建",
    "address": "嘉義縣太保區建國路336號",
    "city": "嘉義縣",
    "lat": 23.491,
    "lng": 120.2106,
    "totalStalls": 4,
    "availableStalls": 3,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2",
      "CCS2"
    ],
    "maxKw": 8,
    "amenities": [
      "restroom",
      "parking",
      "hotel",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 3.8,
    "pricePerKwh": 4.5
  },
  {
    "id": "sta-437",
    "name": "大林ForMosa慢充站",
    "network": "ForMosa EV",
    "address": "嘉義縣大林區建國路165號",
    "city": "嘉義縣",
    "lat": 23.5452,
    "lng": 120.2272,
    "totalStalls": 3,
    "availableStalls": 1,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 222,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 3.6,
    "pricePerKwh": 5.5
  },
  {
    "id": "sta-438",
    "name": "朴子ForMosa快充站",
    "network": "ForMosa EV",
    "address": "嘉義縣朴子區光明路650號",
    "city": "嘉義縣",
    "lat": 23.4386,
    "lng": 120.1681,
    "totalStalls": 9,
    "availableStalls": 5,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 132,
    "amenities": [
      "restroom",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4,
    "pricePerKwh": 5.5
  },
  {
    "id": "sta-439",
    "name": "北門U-Power購物中心充電站",
    "network": "U-Power",
    "address": "台南市北門區自由路277號",
    "city": "台南市",
    "lat": 22.912,
    "lng": 120.1695,
    "totalStalls": 7,
    "availableStalls": 4,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 246,
    "amenities": [
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.7,
    "pricePerKwh": 6.3
  },
  {
    "id": "sta-440",
    "name": "六甲停車場自建快充站",
    "network": "停車場自建",
    "address": "台南市六甲區光明路935號",
    "city": "台南市",
    "lat": 23.0947,
    "lng": 120.2916,
    "totalStalls": 6,
    "availableStalls": 0,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 8,
    "amenities": [
      "parking",
      "hotel",
      "cafe"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "faulted"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 3.9,
    "pricePerKwh": 4.5
  },
  {
    "id": "sta-441",
    "name": "歸仁停車場自建停車場充電樁",
    "network": "停車場自建",
    "address": "台南市歸仁區中正路264號",
    "city": "台南市",
    "lat": 22.9538,
    "lng": 120.2701,
    "totalStalls": 9,
    "availableStalls": 5,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2",
      "CCS2"
    ],
    "maxKw": 14,
    "amenities": [
      "parking",
      "cafe"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.1,
    "pricePerKwh": 4
  },
  {
    "id": "sta-442",
    "name": "麻豆台灣電力充電站",
    "network": "台灣電力",
    "address": "台南市麻豆區和平路184號",
    "city": "台南市",
    "lat": 23.0326,
    "lng": 120.1594,
    "totalStalls": 2,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 140,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.5,
    "pricePerKwh": 4.8
  },
  {
    "id": "sta-443",
    "name": "龍崎停車場自建充電站",
    "network": "停車場自建",
    "address": "台南市龍崎區和平路897號",
    "city": "台南市",
    "lat": 22.9346,
    "lng": 120.183,
    "totalStalls": 8,
    "availableStalls": 7,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 16,
    "amenities": [
      "parking",
      "hotel",
      "cafe",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.8,
    "pricePerKwh": 4.5
  },
  {
    "id": "sta-444",
    "name": "北門自建停車場充電樁",
    "network": "自建",
    "address": "台南市北門區建國路227號",
    "city": "台南市",
    "lat": 22.9506,
    "lng": 120.2943,
    "totalStalls": 7,
    "availableStalls": 4,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 22,
    "amenities": [
      "restroom",
      "parking",
      "hotel",
      "cafe",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4,
    "pricePerKwh": 4
  },
  {
    "id": "sta-445",
    "name": "龍崎中油充電站",
    "network": "台灣中油",
    "address": "台南市龍崎區建國路237號",
    "city": "台南市",
    "lat": 22.9388,
    "lng": 120.2133,
    "totalStalls": 4,
    "availableStalls": 3,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 115,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.8,
    "pricePerKwh": 5.5
  },
  {
    "id": "sta-446",
    "name": "新化特斯拉快充站",
    "network": "Tesla",
    "address": "台南市新化區光明路521號",
    "city": "台南市",
    "lat": 23.0337,
    "lng": 120.1342,
    "totalStalls": 12,
    "availableStalls": 0,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 234,
    "amenities": [
      "parking",
      "shopping",
      "wifi",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.9,
    "pricePerKwh": 7
  },
  {
    "id": "sta-447",
    "name": "麻豆裕電購物中心充電站",
    "network": "裕電能源",
    "address": "台南市麻豆區自由路718號",
    "city": "台南市",
    "lat": 23.1166,
    "lng": 120.1825,
    "totalStalls": 16,
    "availableStalls": 11,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 146,
    "amenities": [
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "available"
      },
      {
        "id": 11,
        "status": "available"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      },
      {
        "id": 15,
        "status": "in_use"
      },
      {
        "id": 16,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4,
    "pricePerKwh": 5.8
  },
  {
    "id": "sta-448",
    "name": "安南裕電快充站",
    "network": "裕電能源",
    "address": "台南市安南區復興路447號",
    "city": "台南市",
    "lat": 23.0468,
    "lng": 120.3009,
    "totalStalls": 9,
    "availableStalls": 7,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 130,
    "amenities": [
      "restroom",
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.8,
    "pricePerKwh": 5.8
  },
  {
    "id": "sta-449",
    "name": "東自建購物中心充電站",
    "network": "自建",
    "address": "台南市東區文化路192號",
    "city": "台南市",
    "lat": 22.9113,
    "lng": 120.1787,
    "totalStalls": 10,
    "availableStalls": 1,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 10,
    "amenities": [
      "restroom",
      "hotel",
      "cafe",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.1,
    "pricePerKwh": 3
  },
  {
    "id": "sta-450",
    "name": "學甲自建慢充站",
    "network": "自建",
    "address": "台南市學甲區文化路846號",
    "city": "台南市",
    "lat": 22.9696,
    "lng": 120.1533,
    "totalStalls": 14,
    "availableStalls": 6,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 11,
    "amenities": [
      "restroom",
      "hotel",
      "cafe"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "faulted"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.8,
    "pricePerKwh": 3
  },
  {
    "id": "sta-451",
    "name": "關廟ForMosa停車場充電樁",
    "network": "ForMosa EV",
    "address": "台南市關廟區文化路810號",
    "city": "台南市",
    "lat": 22.9549,
    "lng": 120.2553,
    "totalStalls": 4,
    "availableStalls": 3,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 110,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4,
    "pricePerKwh": 5.5
  },
  {
    "id": "sta-452",
    "name": "西港特斯拉停車場充電樁",
    "network": "Tesla",
    "address": "台南市西港區文化路315號",
    "city": "台南市",
    "lat": 23.014,
    "lng": 120.3193,
    "totalStalls": 3,
    "availableStalls": 2,
    "chargerType": "V4",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 340,
    "amenities": [
      "restroom",
      "parking",
      "restaurant"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 3.8,
    "pricePerKwh": 7.5
  },
  {
    "id": "sta-453",
    "name": "麻豆裕電快充站",
    "network": "裕電能源",
    "address": "台南市麻豆區民生路143號",
    "city": "台南市",
    "lat": 23.0586,
    "lng": 120.3135,
    "totalStalls": 9,
    "availableStalls": 6,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 149,
    "amenities": [
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 4.1,
    "pricePerKwh": 6.2
  },
  {
    "id": "sta-454",
    "name": "六甲裕電充電站",
    "network": "裕電能源",
    "address": "台南市六甲區中正路655號",
    "city": "台南市",
    "lat": 22.9411,
    "lng": 120.1848,
    "totalStalls": 10,
    "availableStalls": 0,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 224,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.8,
    "pricePerKwh": 6
  },
  {
    "id": "sta-455",
    "name": "新營U-Power快充站",
    "network": "U-Power",
    "address": "台南市新營區中正路962號",
    "city": "台南市",
    "lat": 22.9775,
    "lng": 120.2504,
    "totalStalls": 12,
    "availableStalls": 0,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 235,
    "amenities": [
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.2,
    "pricePerKwh": 6.5
  },
  {
    "id": "sta-456",
    "name": "學甲裕電快充站",
    "network": "裕電能源",
    "address": "台南市學甲區復興路915號",
    "city": "台南市",
    "lat": 23.0503,
    "lng": 120.3135,
    "totalStalls": 8,
    "availableStalls": 7,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 146,
    "amenities": [
      "restroom"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.6,
    "pricePerKwh": 6
  },
  {
    "id": "sta-457",
    "name": "北門特斯拉充電站",
    "network": "Tesla",
    "address": "台南市北門區建國路626號",
    "city": "台南市",
    "lat": 22.9577,
    "lng": 120.1272,
    "totalStalls": 16,
    "availableStalls": 5,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 237,
    "amenities": [
      "restroom",
      "parking",
      "restaurant",
      "shopping",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      },
      {
        "id": 15,
        "status": "in_use"
      },
      {
        "id": 16,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.2,
    "pricePerKwh": 7
  },
  {
    "id": "sta-458",
    "name": "龍崎裕電充電站",
    "network": "裕電能源",
    "address": "台南市龍崎區民生路575號",
    "city": "台南市",
    "lat": 22.8969,
    "lng": 120.2917,
    "totalStalls": 12,
    "availableStalls": 2,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 245,
    "amenities": [
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.3,
    "pricePerKwh": 5.8
  },
  {
    "id": "sta-459",
    "name": "中西台灣電力停車場充電樁",
    "network": "台灣電力",
    "address": "台南市中西區建國路432號",
    "city": "台南市",
    "lat": 23.1184,
    "lng": 120.3044,
    "totalStalls": 2,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 100,
    "amenities": [
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.8,
    "pricePerKwh": 5
  },
  {
    "id": "sta-460",
    "name": "關廟台灣電力超充站",
    "network": "台灣電力",
    "address": "台南市關廟區民權路352號",
    "city": "台南市",
    "lat": 23.0729,
    "lng": 120.2069,
    "totalStalls": 3,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 102,
    "amenities": [
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.6,
    "pricePerKwh": 4.8
  },
  {
    "id": "sta-461",
    "name": "白河裕電慢充站",
    "network": "裕電能源",
    "address": "台南市白河區光明路772號",
    "city": "台南市",
    "lat": 22.9016,
    "lng": 120.1435,
    "totalStalls": 10,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 120,
    "amenities": [
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.8,
    "pricePerKwh": 5.8
  },
  {
    "id": "sta-462",
    "name": "後壁U-Power慢充站",
    "network": "U-Power",
    "address": "台南市後壁區建國路357號",
    "city": "台南市",
    "lat": 23.0858,
    "lng": 120.2595,
    "totalStalls": 11,
    "availableStalls": 6,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 150,
    "amenities": [
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 5,
    "pricePerKwh": 6.5
  },
  {
    "id": "sta-463",
    "name": "南特斯拉慢充站",
    "network": "Tesla",
    "address": "台南市南區中正路358號",
    "city": "台南市",
    "lat": 22.9196,
    "lng": 120.267,
    "totalStalls": 7,
    "availableStalls": 5,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 244,
    "amenities": [
      "restaurant",
      "shopping"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.9,
    "pricePerKwh": 7.5
  },
  {
    "id": "sta-464",
    "name": "仁德停車場自建快充站",
    "network": "停車場自建",
    "address": "台南市仁德區文化路135號",
    "city": "台南市",
    "lat": 22.8896,
    "lng": 120.3269,
    "totalStalls": 16,
    "availableStalls": 11,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2",
      "CCS2"
    ],
    "maxKw": 12,
    "amenities": [
      "restroom",
      "parking",
      "cafe",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "available"
      },
      {
        "id": 11,
        "status": "available"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      },
      {
        "id": 15,
        "status": "in_use"
      },
      {
        "id": 16,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.7,
    "pricePerKwh": 4
  },
  {
    "id": "sta-465",
    "name": "佳里特斯拉快充站",
    "network": "Tesla",
    "address": "台南市佳里區光明路229號",
    "city": "台南市",
    "lat": 23.0294,
    "lng": 120.1602,
    "totalStalls": 16,
    "availableStalls": 7,
    "chargerType": "V4",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 338,
    "amenities": [
      "restroom",
      "parking",
      "shopping",
      "wifi",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      },
      {
        "id": 15,
        "status": "in_use"
      },
      {
        "id": 16,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.4,
    "pricePerKwh": 7.5
  },
  {
    "id": "sta-466",
    "name": "白河特斯拉充電站",
    "network": "Tesla",
    "address": "台南市白河區建國路917號",
    "city": "台南市",
    "lat": 23.1082,
    "lng": 120.2003,
    "totalStalls": 8,
    "availableStalls": 7,
    "chargerType": "V4",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 307,
    "amenities": [
      "restaurant",
      "shopping",
      "wifi",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4,
    "pricePerKwh": 7.5
  },
  {
    "id": "sta-467",
    "name": "歸仁特斯拉快充站",
    "network": "Tesla",
    "address": "台南市歸仁區民生路955號",
    "city": "台南市",
    "lat": 22.9665,
    "lng": 120.2406,
    "totalStalls": 13,
    "availableStalls": 1,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 248,
    "amenities": [
      "restroom",
      "parking",
      "restaurant",
      "shopping",
      "wifi",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 3.9,
    "pricePerKwh": 7
  },
  {
    "id": "sta-468",
    "name": "佳里特斯拉充電站",
    "network": "Tesla",
    "address": "台南市佳里區和平路398號",
    "city": "台南市",
    "lat": 22.928,
    "lng": 120.1475,
    "totalStalls": 12,
    "availableStalls": 7,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 242,
    "amenities": [
      "restroom",
      "parking",
      "restaurant",
      "shopping",
      "wifi",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.3,
    "pricePerKwh": 7.5
  },
  {
    "id": "sta-469",
    "name": "新化U-Power快充站",
    "network": "U-Power",
    "address": "台南市新化區民權路822號",
    "city": "台南市",
    "lat": 23.1003,
    "lng": 120.1389,
    "totalStalls": 2,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 139,
    "amenities": [
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "faulted"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 4.3,
    "pricePerKwh": 6.3
  },
  {
    "id": "sta-470",
    "name": "官田台灣電力購物中心充電站",
    "network": "台灣電力",
    "address": "台南市官田區建國路994號",
    "city": "台南市",
    "lat": 23.002,
    "lng": 120.3177,
    "totalStalls": 13,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 133,
    "amenities": [
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.8,
    "pricePerKwh": 5
  },
  {
    "id": "sta-471",
    "name": "左鎮U-Power快充站",
    "network": "U-Power",
    "address": "台南市左鎮區自由路583號",
    "city": "台南市",
    "lat": 23.1123,
    "lng": 120.3264,
    "totalStalls": 8,
    "availableStalls": 7,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 125,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.4,
    "pricePerKwh": 6.8
  },
  {
    "id": "sta-472",
    "name": "六甲中油超充站",
    "network": "台灣中油",
    "address": "台南市六甲區和平路732號",
    "city": "台南市",
    "lat": 22.9837,
    "lng": 120.2009,
    "totalStalls": 7,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 137,
    "amenities": [
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.4,
    "pricePerKwh": 5
  },
  {
    "id": "sta-473",
    "name": "仁德台灣電力購物中心充電站",
    "network": "台灣電力",
    "address": "台南市仁德區和平路516號",
    "city": "台南市",
    "lat": 22.9115,
    "lng": 120.194,
    "totalStalls": 3,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 150,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.7,
    "pricePerKwh": 5
  },
  {
    "id": "sta-474",
    "name": "玉井特斯拉充電站",
    "network": "Tesla",
    "address": "台南市玉井區文化路573號",
    "city": "台南市",
    "lat": 23.0103,
    "lng": 120.2123,
    "totalStalls": 8,
    "availableStalls": 1,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 207,
    "amenities": [
      "restroom",
      "parking",
      "shopping",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 3.6,
    "pricePerKwh": 7
  },
  {
    "id": "sta-475",
    "name": "仁德自建充電站",
    "network": "自建",
    "address": "台南市仁德區民權路716號",
    "city": "台南市",
    "lat": 23.0738,
    "lng": 120.1441,
    "totalStalls": 6,
    "availableStalls": 0,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 16,
    "amenities": [
      "restroom",
      "parking",
      "hotel"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "faulted"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.3,
    "pricePerKwh": 3
  },
  {
    "id": "sta-476",
    "name": "白河自建超充站",
    "network": "自建",
    "address": "台南市白河區中山路189號",
    "city": "台南市",
    "lat": 22.8873,
    "lng": 120.3198,
    "totalStalls": 11,
    "availableStalls": 7,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 20,
    "amenities": [
      "restroom",
      "parking",
      "hotel",
      "cafe",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "faulted"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.7,
    "pricePerKwh": 3
  },
  {
    "id": "sta-477",
    "name": "仁德ForMosa購物中心充電站",
    "network": "ForMosa EV",
    "address": "台南市仁德區民生路956號",
    "city": "台南市",
    "lat": 22.8902,
    "lng": 120.3253,
    "totalStalls": 12,
    "availableStalls": 4,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 105,
    "amenities": [
      "restroom",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.7,
    "pricePerKwh": 5.5
  },
  {
    "id": "sta-478",
    "name": "將軍台灣電力慢充站",
    "network": "台灣電力",
    "address": "台南市將軍區自由路510號",
    "city": "台南市",
    "lat": 22.9315,
    "lng": 120.2419,
    "totalStalls": 4,
    "availableStalls": 2,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 103,
    "amenities": [
      "restroom",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 3.7,
    "pricePerKwh": 4.8
  },
  {
    "id": "sta-479",
    "name": "新化U-Power快充站",
    "network": "U-Power",
    "address": "台南市新化區光明路130號",
    "city": "台南市",
    "lat": 22.9903,
    "lng": 120.2901,
    "totalStalls": 13,
    "availableStalls": 2,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 243,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.9,
    "pricePerKwh": 6.5
  },
  {
    "id": "sta-480",
    "name": "玉井特斯拉停車場充電樁",
    "network": "Tesla",
    "address": "台南市玉井區和平路699號",
    "city": "台南市",
    "lat": 23.0015,
    "lng": 120.2363,
    "totalStalls": 9,
    "availableStalls": 3,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 202,
    "amenities": [
      "restroom",
      "parking",
      "wifi",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 3.9,
    "pricePerKwh": 7
  },
  {
    "id": "sta-481",
    "name": "西港裕電超充站",
    "network": "裕電能源",
    "address": "台南市西港區中山路699號",
    "city": "台南市",
    "lat": 23.1117,
    "lng": 120.1717,
    "totalStalls": 15,
    "availableStalls": 8,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 130,
    "amenities": [
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      },
      {
        "id": 15,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 5,
    "pricePerKwh": 6.2
  },
  {
    "id": "sta-482",
    "name": "左鎮自建快充站",
    "network": "自建",
    "address": "台南市左鎮區自由路190號",
    "city": "台南市",
    "lat": 23.0535,
    "lng": 120.2982,
    "totalStalls": 12,
    "availableStalls": 2,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 10,
    "amenities": [
      "restroom",
      "parking",
      "hotel",
      "cafe",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "faulted"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 3.8,
    "pricePerKwh": 3
  },
  {
    "id": "sta-483",
    "name": "安南特斯拉停車場充電樁",
    "network": "Tesla",
    "address": "台南市安南區中正路226號",
    "city": "台南市",
    "lat": 23.0532,
    "lng": 120.2929,
    "totalStalls": 5,
    "availableStalls": 0,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 223,
    "amenities": [
      "parking",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 3.9,
    "pricePerKwh": 6.8
  },
  {
    "id": "sta-484",
    "name": "龍崎停車場自建購物中心充電站",
    "network": "停車場自建",
    "address": "台南市龍崎區光明路211號",
    "city": "台南市",
    "lat": 22.8893,
    "lng": 120.1831,
    "totalStalls": 3,
    "availableStalls": 1,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2",
      "CCS2"
    ],
    "maxKw": 20,
    "amenities": [
      "restroom",
      "parking",
      "hotel",
      "cafe",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.6,
    "pricePerKwh": 4.5
  },
  {
    "id": "sta-485",
    "name": "七股台灣電力充電站",
    "network": "台灣電力",
    "address": "台南市七股區建國路480號",
    "city": "台南市",
    "lat": 23.0547,
    "lng": 120.1984,
    "totalStalls": 6,
    "availableStalls": 3,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 126,
    "amenities": [
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4,
    "pricePerKwh": 4.8
  },
  {
    "id": "sta-486",
    "name": "仁德ForMosa購物中心充電站",
    "network": "ForMosa EV",
    "address": "台南市仁德區中正路568號",
    "city": "台南市",
    "lat": 23.1022,
    "lng": 120.2221,
    "totalStalls": 13,
    "availableStalls": 10,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 108,
    "amenities": [
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "available"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.5,
    "pricePerKwh": 5.8
  },
  {
    "id": "sta-487",
    "name": "白河台灣電力停車場充電樁",
    "network": "台灣電力",
    "address": "台南市白河區自由路962號",
    "city": "台南市",
    "lat": 22.9029,
    "lng": 120.2002,
    "totalStalls": 15,
    "availableStalls": 14,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 138,
    "amenities": [
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "available"
      },
      {
        "id": 11,
        "status": "available"
      },
      {
        "id": 12,
        "status": "available"
      },
      {
        "id": 13,
        "status": "available"
      },
      {
        "id": 14,
        "status": "available"
      },
      {
        "id": 15,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 4.7,
    "pricePerKwh": 4.8
  },
  {
    "id": "sta-488",
    "name": "麻豆ForMosa購物中心充電站",
    "network": "ForMosa EV",
    "address": "台南市麻豆區中山路542號",
    "city": "台南市",
    "lat": 23.0838,
    "lng": 120.2739,
    "totalStalls": 12,
    "availableStalls": 9,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 109,
    "amenities": [
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.6,
    "pricePerKwh": 5.8
  },
  {
    "id": "sta-489",
    "name": "安南台灣電力購物中心充電站",
    "network": "台灣電力",
    "address": "台南市安南區民權路353號",
    "city": "台南市",
    "lat": 23.0178,
    "lng": 120.1711,
    "totalStalls": 4,
    "availableStalls": 2,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 103,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "faulted"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4,
    "pricePerKwh": 5
  },
  {
    "id": "sta-490",
    "name": "東山中油停車場充電樁",
    "network": "台灣中油",
    "address": "台南市東山區民生路331號",
    "city": "台南市",
    "lat": 22.9193,
    "lng": 120.3232,
    "totalStalls": 15,
    "availableStalls": 12,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 135,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "available"
      },
      {
        "id": 11,
        "status": "available"
      },
      {
        "id": 12,
        "status": "available"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      },
      {
        "id": 15,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.7,
    "pricePerKwh": 5
  },
  {
    "id": "sta-491",
    "name": "新化特斯拉快充站",
    "network": "Tesla",
    "address": "台南市新化區自由路496號",
    "city": "台南市",
    "lat": 22.9867,
    "lng": 120.209,
    "totalStalls": 14,
    "availableStalls": 1,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 234,
    "amenities": [
      "restroom",
      "parking",
      "restaurant",
      "shopping",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.1,
    "pricePerKwh": 7
  },
  {
    "id": "sta-492",
    "name": "安南ForMosa慢充站",
    "network": "ForMosa EV",
    "address": "台南市安南區光明路499號",
    "city": "台南市",
    "lat": 22.9134,
    "lng": 120.1364,
    "totalStalls": 5,
    "availableStalls": 2,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 149,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.9,
    "pricePerKwh": 6
  },
  {
    "id": "sta-493",
    "name": "安南中油超充站",
    "network": "台灣中油",
    "address": "台南市安南區中山路632號",
    "city": "台南市",
    "lat": 22.9661,
    "lng": 120.2471,
    "totalStalls": 11,
    "availableStalls": 9,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 136,
    "amenities": [
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 3.7,
    "pricePerKwh": 5
  },
  {
    "id": "sta-494",
    "name": "白河停車場自建停車場充電樁",
    "network": "停車場自建",
    "address": "台南市白河區復興路255號",
    "city": "台南市",
    "lat": 23.0667,
    "lng": 120.2582,
    "totalStalls": 9,
    "availableStalls": 5,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 16,
    "amenities": [
      "hotel",
      "cafe",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.7,
    "pricePerKwh": 3.5
  },
  {
    "id": "sta-495",
    "name": "仁德裕電快充站",
    "network": "裕電能源",
    "address": "台南市仁德區和平路436號",
    "city": "台南市",
    "lat": 22.9426,
    "lng": 120.1393,
    "totalStalls": 7,
    "availableStalls": 4,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 102,
    "amenities": [
      "restroom"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "faulted"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.4,
    "pricePerKwh": 6
  },
  {
    "id": "sta-496",
    "name": "東U-Power快充站",
    "network": "U-Power",
    "address": "台南市東區中山路262號",
    "city": "台南市",
    "lat": 23.0959,
    "lng": 120.319,
    "totalStalls": 13,
    "availableStalls": 3,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 238,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.9,
    "pricePerKwh": 6.8
  },
  {
    "id": "sta-497",
    "name": "南U-Power購物中心充電站",
    "network": "U-Power",
    "address": "台南市南區中正路432號",
    "city": "台南市",
    "lat": 23.095,
    "lng": 120.211,
    "totalStalls": 3,
    "availableStalls": 1,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 214,
    "amenities": [
      "restroom",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.1,
    "pricePerKwh": 6.8
  },
  {
    "id": "sta-498",
    "name": "中西自建快充站",
    "network": "自建",
    "address": "台南市中西區中正路588號",
    "city": "台南市",
    "lat": 23.0094,
    "lng": 120.2115,
    "totalStalls": 16,
    "availableStalls": 15,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 7,
    "amenities": [
      "hotel",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "available"
      },
      {
        "id": 11,
        "status": "available"
      },
      {
        "id": 12,
        "status": "available"
      },
      {
        "id": 13,
        "status": "available"
      },
      {
        "id": 14,
        "status": "available"
      },
      {
        "id": 15,
        "status": "available"
      },
      {
        "id": 16,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.7,
    "pricePerKwh": 4
  },
  {
    "id": "sta-499",
    "name": "鳳山U-Power慢充站",
    "network": "U-Power",
    "address": "高雄市鳳山區建國路863號",
    "city": "高雄市",
    "lat": 22.6941,
    "lng": 120.2282,
    "totalStalls": 8,
    "availableStalls": 6,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 225,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.4,
    "pricePerKwh": 6.3
  },
  {
    "id": "sta-500",
    "name": "大寮自建超充站",
    "network": "自建",
    "address": "高雄市大寮區復興路395號",
    "city": "高雄市",
    "lat": 22.7442,
    "lng": 120.356,
    "totalStalls": 7,
    "availableStalls": 1,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 20,
    "amenities": [
      "restroom",
      "parking",
      "cafe"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.5,
    "pricePerKwh": 4
  },
  {
    "id": "sta-501",
    "name": "岡山台灣電力快充站",
    "network": "台灣電力",
    "address": "高雄市岡山區中正路777號",
    "city": "高雄市",
    "lat": 22.7178,
    "lng": 120.2038,
    "totalStalls": 15,
    "availableStalls": 9,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 115,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      },
      {
        "id": 15,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.7,
    "pricePerKwh": 4.8
  },
  {
    "id": "sta-502",
    "name": "路竹中油充電站",
    "network": "台灣中油",
    "address": "高雄市路竹區文化路816號",
    "city": "高雄市",
    "lat": 22.5177,
    "lng": 120.3051,
    "totalStalls": 6,
    "availableStalls": 4,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 106,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.6,
    "pricePerKwh": 5
  },
  {
    "id": "sta-503",
    "name": "旗津台灣電力快充站",
    "network": "台灣電力",
    "address": "高雄市旗津區文化路675號",
    "city": "高雄市",
    "lat": 22.6085,
    "lng": 120.2757,
    "totalStalls": 13,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 139,
    "amenities": [
      "restroom",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 3.8,
    "pricePerKwh": 4.8
  },
  {
    "id": "sta-504",
    "name": "左營中油購物中心充電站",
    "network": "台灣中油",
    "address": "高雄市左營區中山路114號",
    "city": "高雄市",
    "lat": 22.6712,
    "lng": 120.2546,
    "totalStalls": 2,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 140,
    "amenities": [
      "restroom",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.8,
    "pricePerKwh": 5
  },
  {
    "id": "sta-505",
    "name": "三民裕電購物中心充電站",
    "network": "裕電能源",
    "address": "高雄市三民區中山路210號",
    "city": "高雄市",
    "lat": 22.7253,
    "lng": 120.2868,
    "totalStalls": 4,
    "availableStalls": 2,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 126,
    "amenities": [
      "restroom",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4,
    "pricePerKwh": 5.8
  },
  {
    "id": "sta-506",
    "name": "前金U-Power快充站",
    "network": "U-Power",
    "address": "高雄市前金區和平路249號",
    "city": "高雄市",
    "lat": 22.5223,
    "lng": 120.3544,
    "totalStalls": 11,
    "availableStalls": 3,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 238,
    "amenities": [
      "restroom"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.9,
    "pricePerKwh": 6.5
  },
  {
    "id": "sta-507",
    "name": "楠梓停車場自建購物中心充電站",
    "network": "停車場自建",
    "address": "高雄市楠梓區民權路537號",
    "city": "高雄市",
    "lat": 22.5928,
    "lng": 120.223,
    "totalStalls": 4,
    "availableStalls": 2,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2",
      "CCS2"
    ],
    "maxKw": 12,
    "amenities": [
      "parking",
      "hotel",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.6,
    "pricePerKwh": 4
  },
  {
    "id": "sta-508",
    "name": "永安特斯拉快充站",
    "network": "Tesla",
    "address": "高雄市永安區光明路466號",
    "city": "高雄市",
    "lat": 22.5611,
    "lng": 120.2228,
    "totalStalls": 3,
    "availableStalls": 0,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 218,
    "amenities": [
      "restaurant",
      "shopping",
      "wifi",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.5,
    "pricePerKwh": 7.5
  },
  {
    "id": "sta-509",
    "name": "橋頭特斯拉充電站",
    "network": "Tesla",
    "address": "高雄市橋頭區建國路863號",
    "city": "高雄市",
    "lat": 22.555,
    "lng": 120.2126,
    "totalStalls": 12,
    "availableStalls": 11,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 234,
    "amenities": [
      "restroom",
      "parking",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "available"
      },
      {
        "id": 11,
        "status": "available"
      },
      {
        "id": 12,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 4.4,
    "pricePerKwh": 7
  },
  {
    "id": "sta-510",
    "name": "岡山特斯拉快充站",
    "network": "Tesla",
    "address": "高雄市岡山區復興路188號",
    "city": "高雄市",
    "lat": 22.5094,
    "lng": 120.3596,
    "totalStalls": 14,
    "availableStalls": 0,
    "chargerType": "V4",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 324,
    "amenities": [
      "restroom",
      "parking",
      "restaurant",
      "shopping",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 3.9,
    "pricePerKwh": 7.5
  },
  {
    "id": "sta-511",
    "name": "大社中油購物中心充電站",
    "network": "台灣中油",
    "address": "高雄市大社區民權路759號",
    "city": "高雄市",
    "lat": 22.5951,
    "lng": 120.2637,
    "totalStalls": 16,
    "availableStalls": 4,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 136,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      },
      {
        "id": 15,
        "status": "in_use"
      },
      {
        "id": 16,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 4.1,
    "pricePerKwh": 5
  },
  {
    "id": "sta-512",
    "name": "大樹U-Power快充站",
    "network": "U-Power",
    "address": "高雄市大樹區文化路278號",
    "city": "高雄市",
    "lat": 22.5757,
    "lng": 120.3068,
    "totalStalls": 7,
    "availableStalls": 5,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 218,
    "amenities": [],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 5,
    "pricePerKwh": 6.3
  },
  {
    "id": "sta-513",
    "name": "岡山中油快充站",
    "network": "台灣中油",
    "address": "高雄市岡山區中正路780號",
    "city": "高雄市",
    "lat": 22.5354,
    "lng": 120.3148,
    "totalStalls": 15,
    "availableStalls": 8,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 132,
    "amenities": [
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      },
      {
        "id": 15,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.9,
    "pricePerKwh": 5.5
  },
  {
    "id": "sta-514",
    "name": "前鎮特斯拉停車場充電樁",
    "network": "Tesla",
    "address": "高雄市前鎮區民權路164號",
    "city": "高雄市",
    "lat": 22.5132,
    "lng": 120.2393,
    "totalStalls": 13,
    "availableStalls": 4,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 241,
    "amenities": [
      "restroom",
      "restaurant",
      "shopping",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 3.9,
    "pricePerKwh": 6.8
  },
  {
    "id": "sta-515",
    "name": "小港台灣電力充電站",
    "network": "台灣電力",
    "address": "高雄市小港區復興路421號",
    "city": "高雄市",
    "lat": 22.6655,
    "lng": 120.3334,
    "totalStalls": 2,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 117,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "faulted"
      }
    ],
    "openHours": "24小時",
    "rating": 5,
    "pricePerKwh": 5
  },
  {
    "id": "sta-516",
    "name": "林園台灣電力快充站",
    "network": "台灣電力",
    "address": "高雄市林園區中山路695號",
    "city": "高雄市",
    "lat": 22.6914,
    "lng": 120.3551,
    "totalStalls": 10,
    "availableStalls": 8,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 138,
    "amenities": [
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.2,
    "pricePerKwh": 5
  },
  {
    "id": "sta-517",
    "name": "小港ForMosa超充站",
    "network": "ForMosa EV",
    "address": "高雄市小港區民生路729號",
    "city": "高雄市",
    "lat": 22.7259,
    "lng": 120.3738,
    "totalStalls": 4,
    "availableStalls": 3,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 239,
    "amenities": [
      "restroom",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 3.6,
    "pricePerKwh": 5.8
  },
  {
    "id": "sta-518",
    "name": "田寮中油快充站",
    "network": "台灣中油",
    "address": "高雄市田寮區民權路620號",
    "city": "高雄市",
    "lat": 22.6219,
    "lng": 120.3116,
    "totalStalls": 5,
    "availableStalls": 4,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 133,
    "amenities": [
      "restroom",
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.1,
    "pricePerKwh": 5
  },
  {
    "id": "sta-519",
    "name": "大寮U-Power超充站",
    "network": "U-Power",
    "address": "高雄市大寮區中山路263號",
    "city": "高雄市",
    "lat": 22.6209,
    "lng": 120.3506,
    "totalStalls": 8,
    "availableStalls": 6,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 202,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.9,
    "pricePerKwh": 6.5
  },
  {
    "id": "sta-520",
    "name": "橋頭裕電慢充站",
    "network": "裕電能源",
    "address": "高雄市橋頭區中山路152號",
    "city": "高雄市",
    "lat": 22.738,
    "lng": 120.2582,
    "totalStalls": 3,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 140,
    "amenities": [
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.8,
    "pricePerKwh": 6
  },
  {
    "id": "sta-521",
    "name": "阿蓮台灣電力超充站",
    "network": "台灣電力",
    "address": "高雄市阿蓮區自由路283號",
    "city": "高雄市",
    "lat": 22.5571,
    "lng": 120.2609,
    "totalStalls": 7,
    "availableStalls": 2,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 133,
    "amenities": [
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.3,
    "pricePerKwh": 4.8
  },
  {
    "id": "sta-522",
    "name": "梓官特斯拉充電站",
    "network": "Tesla",
    "address": "高雄市梓官區建國路748號",
    "city": "高雄市",
    "lat": 22.7133,
    "lng": 120.3552,
    "totalStalls": 5,
    "availableStalls": 2,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 250,
    "amenities": [
      "parking",
      "restaurant",
      "shopping",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 3.9,
    "pricePerKwh": 7.5
  },
  {
    "id": "sta-523",
    "name": "左營自建超充站",
    "network": "自建",
    "address": "高雄市左營區復興路192號",
    "city": "高雄市",
    "lat": 22.5097,
    "lng": 120.2047,
    "totalStalls": 3,
    "availableStalls": 1,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 18,
    "amenities": [
      "parking",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 5,
    "pricePerKwh": 4
  },
  {
    "id": "sta-524",
    "name": "路竹特斯拉慢充站",
    "network": "Tesla",
    "address": "高雄市路竹區建國路393號",
    "city": "高雄市",
    "lat": 22.6703,
    "lng": 120.318,
    "totalStalls": 3,
    "availableStalls": 0,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 212,
    "amenities": [
      "restroom",
      "shopping",
      "wifi",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "faulted"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 4.4,
    "pricePerKwh": 7.5
  },
  {
    "id": "sta-525",
    "name": "路竹特斯拉購物中心充電站",
    "network": "Tesla",
    "address": "高雄市路竹區中正路772號",
    "city": "高雄市",
    "lat": 22.5362,
    "lng": 120.3934,
    "totalStalls": 12,
    "availableStalls": 8,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 234,
    "amenities": [
      "restroom",
      "parking",
      "shopping",
      "wifi",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "faulted"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 3.9,
    "pricePerKwh": 7.5
  },
  {
    "id": "sta-526",
    "name": "左營ForMosa快充站",
    "network": "ForMosa EV",
    "address": "高雄市左營區文化路947號",
    "city": "高雄市",
    "lat": 22.6942,
    "lng": 120.3347,
    "totalStalls": 10,
    "availableStalls": 8,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 127,
    "amenities": [
      "restroom",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 3.6,
    "pricePerKwh": 5.8
  },
  {
    "id": "sta-527",
    "name": "鳳山台灣電力購物中心充電站",
    "network": "台灣電力",
    "address": "高雄市鳳山區光明路683號",
    "city": "高雄市",
    "lat": 22.5527,
    "lng": 120.318,
    "totalStalls": 14,
    "availableStalls": 9,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 145,
    "amenities": [
      "restroom",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.4,
    "pricePerKwh": 4.8
  },
  {
    "id": "sta-528",
    "name": "彌陀自建停車場充電樁",
    "network": "自建",
    "address": "高雄市彌陀區中正路379號",
    "city": "高雄市",
    "lat": 22.7197,
    "lng": 120.2129,
    "totalStalls": 11,
    "availableStalls": 3,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 8,
    "amenities": [
      "parking",
      "cafe",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 3.8,
    "pricePerKwh": 4
  },
  {
    "id": "sta-529",
    "name": "鳳山ForMosa充電站",
    "network": "ForMosa EV",
    "address": "高雄市鳳山區中山路974號",
    "city": "高雄市",
    "lat": 22.5515,
    "lng": 120.3992,
    "totalStalls": 14,
    "availableStalls": 8,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 240,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.2,
    "pricePerKwh": 5.5
  },
  {
    "id": "sta-530",
    "name": "橋頭U-Power購物中心充電站",
    "network": "U-Power",
    "address": "高雄市橋頭區民權路880號",
    "city": "高雄市",
    "lat": 22.6235,
    "lng": 120.3063,
    "totalStalls": 7,
    "availableStalls": 6,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 219,
    "amenities": [
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 3.7,
    "pricePerKwh": 6.5
  },
  {
    "id": "sta-531",
    "name": "鳳山ForMosa快充站",
    "network": "ForMosa EV",
    "address": "高雄市鳳山區自由路510號",
    "city": "高雄市",
    "lat": 22.6873,
    "lng": 120.2896,
    "totalStalls": 16,
    "availableStalls": 6,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 238,
    "amenities": [
      "restroom",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      },
      {
        "id": 15,
        "status": "in_use"
      },
      {
        "id": 16,
        "status": "faulted"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 3.6,
    "pricePerKwh": 6
  },
  {
    "id": "sta-532",
    "name": "苓雅台灣電力慢充站",
    "network": "台灣電力",
    "address": "高雄市苓雅區中正路224號",
    "city": "高雄市",
    "lat": 22.5134,
    "lng": 120.33,
    "totalStalls": 15,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 101,
    "amenities": [
      "restroom",
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      },
      {
        "id": 15,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.9,
    "pricePerKwh": 4.8
  },
  {
    "id": "sta-533",
    "name": "小港裕電充電站",
    "network": "裕電能源",
    "address": "高雄市小港區建國路328號",
    "city": "高雄市",
    "lat": 22.5934,
    "lng": 120.3514,
    "totalStalls": 3,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 127,
    "amenities": [
      "restroom",
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.2,
    "pricePerKwh": 6.2
  },
  {
    "id": "sta-534",
    "name": "燕巢裕電充電站",
    "network": "裕電能源",
    "address": "高雄市燕巢區復興路635號",
    "city": "高雄市",
    "lat": 22.5914,
    "lng": 120.2231,
    "totalStalls": 9,
    "availableStalls": 5,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 239,
    "amenities": [
      "restroom"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.3,
    "pricePerKwh": 6
  },
  {
    "id": "sta-535",
    "name": "路竹U-Power充電站",
    "network": "U-Power",
    "address": "高雄市路竹區復興路411號",
    "city": "高雄市",
    "lat": 22.6401,
    "lng": 120.3973,
    "totalStalls": 10,
    "availableStalls": 1,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 236,
    "amenities": [
      "restroom"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.8,
    "pricePerKwh": 6.8
  },
  {
    "id": "sta-536",
    "name": "鳳山自建充電站",
    "network": "自建",
    "address": "高雄市鳳山區文化路627號",
    "city": "高雄市",
    "lat": 22.6207,
    "lng": 120.2462,
    "totalStalls": 9,
    "availableStalls": 5,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 16,
    "amenities": [
      "restroom",
      "hotel",
      "cafe",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 3.8,
    "pricePerKwh": 3
  },
  {
    "id": "sta-537",
    "name": "左營裕電停車場充電樁",
    "network": "裕電能源",
    "address": "高雄市左營區和平路793號",
    "city": "高雄市",
    "lat": 22.6441,
    "lng": 120.2977,
    "totalStalls": 8,
    "availableStalls": 7,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 206,
    "amenities": [
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 3.6,
    "pricePerKwh": 6.2
  },
  {
    "id": "sta-538",
    "name": "旗津停車場自建停車場充電樁",
    "network": "停車場自建",
    "address": "高雄市旗津區中正路225號",
    "city": "高雄市",
    "lat": 22.6616,
    "lng": 120.2778,
    "totalStalls": 10,
    "availableStalls": 7,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 14,
    "amenities": [
      "parking",
      "hotel",
      "cafe",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.1,
    "pricePerKwh": 4
  },
  {
    "id": "sta-539",
    "name": "旗津特斯拉慢充站",
    "network": "Tesla",
    "address": "高雄市旗津區文化路311號",
    "city": "高雄市",
    "lat": 22.5671,
    "lng": 120.3912,
    "totalStalls": 4,
    "availableStalls": 2,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 250,
    "amenities": [
      "restaurant",
      "shopping",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 4.5,
    "pricePerKwh": 7.5
  },
  {
    "id": "sta-540",
    "name": "阿蓮特斯拉購物中心充電站",
    "network": "Tesla",
    "address": "高雄市阿蓮區建國路655號",
    "city": "高雄市",
    "lat": 22.6333,
    "lng": 120.2781,
    "totalStalls": 12,
    "availableStalls": 0,
    "chargerType": "V4",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 326,
    "amenities": [
      "restroom",
      "parking",
      "restaurant",
      "wifi",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 4.5,
    "pricePerKwh": 7
  },
  {
    "id": "sta-541",
    "name": "永安特斯拉慢充站",
    "network": "Tesla",
    "address": "高雄市永安區民生路870號",
    "city": "高雄市",
    "lat": 22.6309,
    "lng": 120.3197,
    "totalStalls": 13,
    "availableStalls": 1,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 209,
    "amenities": [
      "restroom",
      "parking",
      "restaurant",
      "wifi",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.8,
    "pricePerKwh": 7
  },
  {
    "id": "sta-542",
    "name": "左營台灣電力充電站",
    "network": "台灣電力",
    "address": "高雄市左營區文化路553號",
    "city": "高雄市",
    "lat": 22.548,
    "lng": 120.22,
    "totalStalls": 13,
    "availableStalls": 2,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 118,
    "amenities": [
      "restroom"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4,
    "pricePerKwh": 4.8
  },
  {
    "id": "sta-543",
    "name": "湖內ForMosa快充站",
    "network": "ForMosa EV",
    "address": "高雄市湖內區民生路316號",
    "city": "高雄市",
    "lat": 22.5811,
    "lng": 120.3517,
    "totalStalls": 7,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 142,
    "amenities": [
      "restroom",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.8,
    "pricePerKwh": 5.8
  },
  {
    "id": "sta-544",
    "name": "鳳山特斯拉充電站",
    "network": "Tesla",
    "address": "高雄市鳳山區民生路512號",
    "city": "高雄市",
    "lat": 22.7395,
    "lng": 120.2694,
    "totalStalls": 16,
    "availableStalls": 14,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 214,
    "amenities": [
      "restroom",
      "parking",
      "restaurant",
      "shopping",
      "wifi",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "available"
      },
      {
        "id": 11,
        "status": "available"
      },
      {
        "id": 12,
        "status": "available"
      },
      {
        "id": 13,
        "status": "available"
      },
      {
        "id": 14,
        "status": "available"
      },
      {
        "id": 15,
        "status": "in_use"
      },
      {
        "id": 16,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.9,
    "pricePerKwh": 7.5
  },
  {
    "id": "sta-545",
    "name": "梓官停車場自建充電站",
    "network": "停車場自建",
    "address": "高雄市梓官區建國路880號",
    "city": "高雄市",
    "lat": 22.6589,
    "lng": 120.3563,
    "totalStalls": 10,
    "availableStalls": 4,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 9,
    "amenities": [
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.2,
    "pricePerKwh": 3.5
  },
  {
    "id": "sta-546",
    "name": "橋頭自建充電站",
    "network": "自建",
    "address": "高雄市橋頭區民權路134號",
    "city": "高雄市",
    "lat": 22.7015,
    "lng": 120.309,
    "totalStalls": 3,
    "availableStalls": 1,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 8,
    "amenities": [
      "hotel",
      "cafe"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 4.6,
    "pricePerKwh": 4
  },
  {
    "id": "sta-547",
    "name": "旗津裕電超充站",
    "network": "裕電能源",
    "address": "高雄市旗津區民生路648號",
    "city": "高雄市",
    "lat": 22.5932,
    "lng": 120.2999,
    "totalStalls": 11,
    "availableStalls": 7,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 146,
    "amenities": [
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.2,
    "pricePerKwh": 6.2
  },
  {
    "id": "sta-548",
    "name": "阿蓮特斯拉慢充站",
    "network": "Tesla",
    "address": "高雄市阿蓮區中正路396號",
    "city": "高雄市",
    "lat": 22.7035,
    "lng": 120.3699,
    "totalStalls": 3,
    "availableStalls": 0,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 215,
    "amenities": [
      "shopping",
      "wifi",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.7,
    "pricePerKwh": 6.8
  },
  {
    "id": "sta-549",
    "name": "旗津中油快充站",
    "network": "台灣中油",
    "address": "高雄市旗津區中正路252號",
    "city": "高雄市",
    "lat": 22.7267,
    "lng": 120.3813,
    "totalStalls": 14,
    "availableStalls": 4,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 110,
    "amenities": [
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.2,
    "pricePerKwh": 5.5
  },
  {
    "id": "sta-550",
    "name": "鳳山停車場自建慢充站",
    "network": "停車場自建",
    "address": "高雄市鳳山區中正路572號",
    "city": "高雄市",
    "lat": 22.745,
    "lng": 120.33,
    "totalStalls": 14,
    "availableStalls": 4,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2",
      "CCS2"
    ],
    "maxKw": 11,
    "amenities": [
      "parking",
      "cafe"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.6,
    "pricePerKwh": 4.5
  },
  {
    "id": "sta-551",
    "name": "新興特斯拉慢充站",
    "network": "Tesla",
    "address": "高雄市新興區文化路717號",
    "city": "高雄市",
    "lat": 22.5151,
    "lng": 120.2874,
    "totalStalls": 2,
    "availableStalls": 1,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 221,
    "amenities": [
      "parking",
      "shopping",
      "wifi",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.6,
    "pricePerKwh": 6.8
  },
  {
    "id": "sta-552",
    "name": "三民裕電快充站",
    "network": "裕電能源",
    "address": "高雄市三民區建國路598號",
    "city": "高雄市",
    "lat": 22.6419,
    "lng": 120.2174,
    "totalStalls": 9,
    "availableStalls": 2,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 117,
    "amenities": [
      "restroom"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.5,
    "pricePerKwh": 5.8
  },
  {
    "id": "sta-553",
    "name": "燕巢裕電充電站",
    "network": "裕電能源",
    "address": "高雄市燕巢區自由路946號",
    "city": "高雄市",
    "lat": 22.5356,
    "lng": 120.213,
    "totalStalls": 14,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 109,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 4.6,
    "pricePerKwh": 6
  },
  {
    "id": "sta-554",
    "name": "三民停車場自建停車場充電樁",
    "network": "停車場自建",
    "address": "高雄市三民區建國路490號",
    "city": "高雄市",
    "lat": 22.7206,
    "lng": 120.2797,
    "totalStalls": 2,
    "availableStalls": 1,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2",
      "CCS2"
    ],
    "maxKw": 17,
    "amenities": [
      "restroom",
      "cafe",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.9,
    "pricePerKwh": 4
  },
  {
    "id": "sta-555",
    "name": "苓雅特斯拉快充站",
    "network": "Tesla",
    "address": "高雄市苓雅區建國路764號",
    "city": "高雄市",
    "lat": 22.6227,
    "lng": 120.2468,
    "totalStalls": 15,
    "availableStalls": 7,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 222,
    "amenities": [
      "restroom",
      "parking",
      "shopping",
      "wifi",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      },
      {
        "id": 15,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.2,
    "pricePerKwh": 7.5
  },
  {
    "id": "sta-556",
    "name": "永安停車場自建購物中心充電站",
    "network": "停車場自建",
    "address": "高雄市永安區光明路570號",
    "city": "高雄市",
    "lat": 22.7063,
    "lng": 120.3829,
    "totalStalls": 6,
    "availableStalls": 1,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2",
      "CCS2"
    ],
    "maxKw": 7,
    "amenities": [
      "hotel",
      "cafe",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "faulted"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.1,
    "pricePerKwh": 4.5
  },
  {
    "id": "sta-557",
    "name": "大寮裕電充電站",
    "network": "裕電能源",
    "address": "高雄市大寮區中山路714號",
    "city": "高雄市",
    "lat": 22.5551,
    "lng": 120.3227,
    "totalStalls": 2,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 146,
    "amenities": [
      "restroom",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 4.1,
    "pricePerKwh": 6
  },
  {
    "id": "sta-558",
    "name": "新興特斯拉停車場充電樁",
    "network": "Tesla",
    "address": "高雄市新興區光明路697號",
    "city": "高雄市",
    "lat": 22.7257,
    "lng": 120.3385,
    "totalStalls": 15,
    "availableStalls": 14,
    "chargerType": "V4",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 317,
    "amenities": [
      "restroom",
      "restaurant",
      "shopping",
      "wifi",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "available"
      },
      {
        "id": 11,
        "status": "available"
      },
      {
        "id": 12,
        "status": "available"
      },
      {
        "id": 13,
        "status": "available"
      },
      {
        "id": 14,
        "status": "available"
      },
      {
        "id": 15,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.8,
    "pricePerKwh": 7
  },
  {
    "id": "sta-559",
    "name": "鳳山裕電充電站",
    "network": "裕電能源",
    "address": "高雄市鳳山區和平路352號",
    "city": "高雄市",
    "lat": 22.5497,
    "lng": 120.241,
    "totalStalls": 6,
    "availableStalls": 4,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 221,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 3.8,
    "pricePerKwh": 5.8
  },
  {
    "id": "sta-560",
    "name": "前鎮停車場自建快充站",
    "network": "停車場自建",
    "address": "高雄市前鎮區中山路442號",
    "city": "高雄市",
    "lat": 22.7016,
    "lng": 120.2814,
    "totalStalls": 11,
    "availableStalls": 2,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 21,
    "amenities": [
      "restroom",
      "parking",
      "hotel",
      "cafe",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 3.7,
    "pricePerKwh": 4.5
  },
  {
    "id": "sta-561",
    "name": "鳳山ForMosa充電站",
    "network": "ForMosa EV",
    "address": "高雄市鳳山區中正路237號",
    "city": "高雄市",
    "lat": 22.53,
    "lng": 120.2166,
    "totalStalls": 11,
    "availableStalls": 2,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 146,
    "amenities": [
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.6,
    "pricePerKwh": 5.5
  },
  {
    "id": "sta-562",
    "name": "橋頭裕電超充站",
    "network": "裕電能源",
    "address": "高雄市橋頭區光明路847號",
    "city": "高雄市",
    "lat": 22.7145,
    "lng": 120.202,
    "totalStalls": 3,
    "availableStalls": 1,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 206,
    "amenities": [
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 5,
    "pricePerKwh": 6
  },
  {
    "id": "sta-563",
    "name": "旗津中油停車場充電樁",
    "network": "台灣中油",
    "address": "高雄市旗津區光明路695號",
    "city": "高雄市",
    "lat": 22.5566,
    "lng": 120.3654,
    "totalStalls": 13,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 105,
    "amenities": [
      "restroom",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.4,
    "pricePerKwh": 5.5
  },
  {
    "id": "sta-564",
    "name": "大寮裕電充電站",
    "network": "裕電能源",
    "address": "高雄市大寮區建國路479號",
    "city": "高雄市",
    "lat": 22.5736,
    "lng": 120.3583,
    "totalStalls": 14,
    "availableStalls": 2,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 103,
    "amenities": [
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.6,
    "pricePerKwh": 6.2
  },
  {
    "id": "sta-565",
    "name": "阿蓮自建充電站",
    "network": "自建",
    "address": "高雄市阿蓮區復興路533號",
    "city": "高雄市",
    "lat": 22.5896,
    "lng": 120.3291,
    "totalStalls": 13,
    "availableStalls": 11,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 18,
    "amenities": [
      "restroom",
      "hotel"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "available"
      },
      {
        "id": 11,
        "status": "available"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 3.5,
    "pricePerKwh": 3
  },
  {
    "id": "sta-566",
    "name": "鳳山停車場自建慢充站",
    "network": "停車場自建",
    "address": "高雄市鳳山區中山路322號",
    "city": "高雄市",
    "lat": 22.5358,
    "lng": 120.315,
    "totalStalls": 2,
    "availableStalls": 0,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 18,
    "amenities": [
      "restroom",
      "hotel",
      "cafe",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.2,
    "pricePerKwh": 4
  },
  {
    "id": "sta-567",
    "name": "彌陀中油充電站",
    "network": "台灣中油",
    "address": "高雄市彌陀區和平路627號",
    "city": "高雄市",
    "lat": 22.7455,
    "lng": 120.3945,
    "totalStalls": 7,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 102,
    "amenities": [
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "faulted"
      }
    ],
    "openHours": "24小時",
    "rating": 3.6,
    "pricePerKwh": 5
  },
  {
    "id": "sta-568",
    "name": "鳳山自建慢充站",
    "network": "自建",
    "address": "高雄市鳳山區中山路663號",
    "city": "高雄市",
    "lat": 22.7423,
    "lng": 120.2829,
    "totalStalls": 9,
    "availableStalls": 5,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 7,
    "amenities": [
      "restroom",
      "parking",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.2,
    "pricePerKwh": 3
  },
  {
    "id": "sta-569",
    "name": "林園特斯拉快充站",
    "network": "Tesla",
    "address": "高雄市林園區中正路691號",
    "city": "高雄市",
    "lat": 22.6599,
    "lng": 120.3738,
    "totalStalls": 2,
    "availableStalls": 1,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 222,
    "amenities": [
      "parking",
      "restaurant",
      "shopping",
      "wifi",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 3.8,
    "pricePerKwh": 7.5
  },
  {
    "id": "sta-570",
    "name": "三民U-Power超充站",
    "network": "U-Power",
    "address": "高雄市三民區復興路189號",
    "city": "高雄市",
    "lat": 22.6488,
    "lng": 120.2328,
    "totalStalls": 14,
    "availableStalls": 12,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 244,
    "amenities": [
      "restroom",
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "available"
      },
      {
        "id": 11,
        "status": "available"
      },
      {
        "id": 12,
        "status": "available"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.6,
    "pricePerKwh": 6.8
  },
  {
    "id": "sta-571",
    "name": "大樹台灣電力慢充站",
    "network": "台灣電力",
    "address": "高雄市大樹區光明路239號",
    "city": "高雄市",
    "lat": 22.6738,
    "lng": 120.2841,
    "totalStalls": 7,
    "availableStalls": 6,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 117,
    "amenities": [
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 5,
    "pricePerKwh": 4.8
  },
  {
    "id": "sta-572",
    "name": "大社台灣電力超充站",
    "network": "台灣電力",
    "address": "高雄市大社區文化路369號",
    "city": "高雄市",
    "lat": 22.7208,
    "lng": 120.3122,
    "totalStalls": 15,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 146,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      },
      {
        "id": 15,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.6,
    "pricePerKwh": 5
  },
  {
    "id": "sta-573",
    "name": "前金特斯拉快充站",
    "network": "Tesla",
    "address": "高雄市前金區自由路222號",
    "city": "高雄市",
    "lat": 22.6933,
    "lng": 120.2652,
    "totalStalls": 13,
    "availableStalls": 8,
    "chargerType": "V4",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 319,
    "amenities": [
      "parking",
      "restaurant",
      "shopping",
      "wifi",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 3.8,
    "pricePerKwh": 7.5
  },
  {
    "id": "sta-574",
    "name": "九如ForMosa購物中心充電站",
    "network": "ForMosa EV",
    "address": "屏東縣九如區中山路385號",
    "city": "屏東縣",
    "lat": 22.542,
    "lng": 120.4783,
    "totalStalls": 16,
    "availableStalls": 14,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 210,
    "amenities": [],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "available"
      },
      {
        "id": 11,
        "status": "available"
      },
      {
        "id": 12,
        "status": "available"
      },
      {
        "id": 13,
        "status": "available"
      },
      {
        "id": 14,
        "status": "available"
      },
      {
        "id": 15,
        "status": "in_use"
      },
      {
        "id": 16,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.9,
    "pricePerKwh": 5.8
  },
  {
    "id": "sta-575",
    "name": "恆春特斯拉快充站",
    "network": "Tesla",
    "address": "屏東縣恆春區中山路812號",
    "city": "屏東縣",
    "lat": 22.6911,
    "lng": 120.5587,
    "totalStalls": 6,
    "availableStalls": 5,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 223,
    "amenities": [
      "restroom",
      "parking",
      "restaurant",
      "wifi",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 5,
    "pricePerKwh": 7
  },
  {
    "id": "sta-576",
    "name": "萬丹U-Power超充站",
    "network": "U-Power",
    "address": "屏東縣萬丹區文化路886號",
    "city": "屏東縣",
    "lat": 22.4651,
    "lng": 120.5723,
    "totalStalls": 16,
    "availableStalls": 14,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 207,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "available"
      },
      {
        "id": 11,
        "status": "available"
      },
      {
        "id": 12,
        "status": "available"
      },
      {
        "id": 13,
        "status": "available"
      },
      {
        "id": 14,
        "status": "available"
      },
      {
        "id": 15,
        "status": "in_use"
      },
      {
        "id": 16,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.3,
    "pricePerKwh": 6.3
  },
  {
    "id": "sta-577",
    "name": "長治ForMosa購物中心充電站",
    "network": "ForMosa EV",
    "address": "屏東縣長治區文化路340號",
    "city": "屏東縣",
    "lat": 22.6494,
    "lng": 120.6433,
    "totalStalls": 2,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 119,
    "amenities": [
      "restroom",
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.5,
    "pricePerKwh": 5.5
  },
  {
    "id": "sta-578",
    "name": "東港自建快充站",
    "network": "自建",
    "address": "屏東縣東港區建國路967號",
    "city": "屏東縣",
    "lat": 22.6701,
    "lng": 120.5189,
    "totalStalls": 8,
    "availableStalls": 0,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 13,
    "amenities": [
      "parking",
      "hotel",
      "cafe",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.9,
    "pricePerKwh": 3
  },
  {
    "id": "sta-579",
    "name": "長治中油充電站",
    "network": "台灣中油",
    "address": "屏東縣長治區光明路587號",
    "city": "屏東縣",
    "lat": 22.6802,
    "lng": 120.4621,
    "totalStalls": 2,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 131,
    "amenities": [
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.7,
    "pricePerKwh": 5.5
  },
  {
    "id": "sta-580",
    "name": "恆春停車場自建快充站",
    "network": "停車場自建",
    "address": "屏東縣恆春區光明路924號",
    "city": "屏東縣",
    "lat": 22.6502,
    "lng": 120.6462,
    "totalStalls": 4,
    "availableStalls": 1,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 19,
    "amenities": [
      "parking",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 3.7,
    "pricePerKwh": 4.5
  },
  {
    "id": "sta-581",
    "name": "鹽埔自建快充站",
    "network": "自建",
    "address": "屏東縣鹽埔區和平路398號",
    "city": "屏東縣",
    "lat": 22.5646,
    "lng": 120.4787,
    "totalStalls": 16,
    "availableStalls": 1,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 12,
    "amenities": [
      "parking",
      "hotel",
      "cafe",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      },
      {
        "id": 15,
        "status": "in_use"
      },
      {
        "id": 16,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.8,
    "pricePerKwh": 4
  },
  {
    "id": "sta-582",
    "name": "屏東台灣電力停車場充電樁",
    "network": "台灣電力",
    "address": "屏東縣屏東區自由路270號",
    "city": "屏東縣",
    "lat": 22.4939,
    "lng": 120.5198,
    "totalStalls": 10,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 131,
    "amenities": [
      "restroom",
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.2,
    "pricePerKwh": 5
  },
  {
    "id": "sta-583",
    "name": "九如中油充電站",
    "network": "台灣中油",
    "address": "屏東縣九如區光明路651號",
    "city": "屏東縣",
    "lat": 22.5847,
    "lng": 120.4845,
    "totalStalls": 8,
    "availableStalls": 5,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 118,
    "amenities": [
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 4.2,
    "pricePerKwh": 5
  },
  {
    "id": "sta-584",
    "name": "長治自建快充站",
    "network": "自建",
    "address": "屏東縣長治區民生路259號",
    "city": "屏東縣",
    "lat": 22.4017,
    "lng": 120.6424,
    "totalStalls": 7,
    "availableStalls": 6,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 21,
    "amenities": [
      "restroom",
      "parking",
      "hotel",
      "cafe"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 3.5,
    "pricePerKwh": 4
  },
  {
    "id": "sta-585",
    "name": "屏東中油超充站",
    "network": "台灣中油",
    "address": "屏東縣屏東區自由路969號",
    "city": "屏東縣",
    "lat": 22.5161,
    "lng": 120.4966,
    "totalStalls": 6,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 147,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.2,
    "pricePerKwh": 5.5
  },
  {
    "id": "sta-586",
    "name": "長治停車場自建超充站",
    "network": "停車場自建",
    "address": "屏東縣長治區民權路666號",
    "city": "屏東縣",
    "lat": 22.5155,
    "lng": 120.4905,
    "totalStalls": 12,
    "availableStalls": 4,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 8,
    "amenities": [
      "hotel",
      "cafe"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4,
    "pricePerKwh": 4.5
  },
  {
    "id": "sta-587",
    "name": "九如台灣電力超充站",
    "network": "台灣電力",
    "address": "屏東縣九如區中山路684號",
    "city": "屏東縣",
    "lat": 22.5238,
    "lng": 120.5013,
    "totalStalls": 10,
    "availableStalls": 2,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 129,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4,
    "pricePerKwh": 4.8
  },
  {
    "id": "sta-588",
    "name": "恆春台灣電力快充站",
    "network": "台灣電力",
    "address": "屏東縣恆春區文化路583號",
    "city": "屏東縣",
    "lat": 22.5325,
    "lng": 120.6489,
    "totalStalls": 6,
    "availableStalls": 4,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 123,
    "amenities": [
      "restroom",
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.2,
    "pricePerKwh": 4.8
  },
  {
    "id": "sta-589",
    "name": "九如自建慢充站",
    "network": "自建",
    "address": "屏東縣九如區文化路262號",
    "city": "屏東縣",
    "lat": 22.6668,
    "lng": 120.6302,
    "totalStalls": 14,
    "availableStalls": 10,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 20,
    "amenities": [
      "restroom",
      "parking",
      "hotel",
      "cafe",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "available"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 3.8,
    "pricePerKwh": 4
  },
  {
    "id": "sta-590",
    "name": "高樹中油購物中心充電站",
    "network": "台灣中油",
    "address": "屏東縣高樹區民權路476號",
    "city": "屏東縣",
    "lat": 22.551,
    "lng": 120.4799,
    "totalStalls": 15,
    "availableStalls": 11,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 132,
    "amenities": [
      "restroom",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "available"
      },
      {
        "id": 11,
        "status": "available"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      },
      {
        "id": 15,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.7,
    "pricePerKwh": 5.5
  },
  {
    "id": "sta-591",
    "name": "潮州特斯拉快充站",
    "network": "Tesla",
    "address": "屏東縣潮州區和平路680號",
    "city": "屏東縣",
    "lat": 22.5995,
    "lng": 120.5671,
    "totalStalls": 13,
    "availableStalls": 7,
    "chargerType": "V4",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 330,
    "amenities": [
      "restroom",
      "wifi",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 3.9,
    "pricePerKwh": 6.8
  },
  {
    "id": "sta-592",
    "name": "潮州停車場自建慢充站",
    "network": "停車場自建",
    "address": "屏東縣潮州區自由路347號",
    "city": "屏東縣",
    "lat": 22.6084,
    "lng": 120.6393,
    "totalStalls": 14,
    "availableStalls": 3,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2",
      "CCS2"
    ],
    "maxKw": 17,
    "amenities": [
      "restroom",
      "hotel",
      "cafe",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.8,
    "pricePerKwh": 3.5
  },
  {
    "id": "sta-593",
    "name": "萬丹台灣電力慢充站",
    "network": "台灣電力",
    "address": "屏東縣萬丹區文化路178號",
    "city": "屏東縣",
    "lat": 22.5959,
    "lng": 120.4692,
    "totalStalls": 9,
    "availableStalls": 6,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 118,
    "amenities": [
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "faulted"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 4.1,
    "pricePerKwh": 4.8
  },
  {
    "id": "sta-594",
    "name": "恆春停車場自建快充站",
    "network": "停車場自建",
    "address": "屏東縣恆春區和平路438號",
    "city": "屏東縣",
    "lat": 22.5876,
    "lng": 120.5261,
    "totalStalls": 8,
    "availableStalls": 3,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 19,
    "amenities": [
      "restroom",
      "parking",
      "hotel",
      "cafe",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.9,
    "pricePerKwh": 4.5
  },
  {
    "id": "sta-595",
    "name": "東港ForMosa購物中心充電站",
    "network": "ForMosa EV",
    "address": "屏東縣東港區民權路487號",
    "city": "屏東縣",
    "lat": 22.4068,
    "lng": 120.5838,
    "totalStalls": 12,
    "availableStalls": 6,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 125,
    "amenities": [
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 4.5,
    "pricePerKwh": 6
  },
  {
    "id": "sta-596",
    "name": "壯圍中油慢充站",
    "network": "台灣中油",
    "address": "宜蘭縣壯圍區文化路761號",
    "city": "宜蘭縣",
    "lat": 24.6426,
    "lng": 121.7209,
    "totalStalls": 13,
    "availableStalls": 6,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 133,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.8,
    "pricePerKwh": 5
  },
  {
    "id": "sta-597",
    "name": "壯圍自建購物中心充電站",
    "network": "自建",
    "address": "宜蘭縣壯圍區復興路935號",
    "city": "宜蘭縣",
    "lat": 24.7137,
    "lng": 121.6928,
    "totalStalls": 6,
    "availableStalls": 1,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 7,
    "amenities": [
      "restroom",
      "hotel",
      "cafe",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.9,
    "pricePerKwh": 4
  },
  {
    "id": "sta-598",
    "name": "員山台灣電力快充站",
    "network": "台灣電力",
    "address": "宜蘭縣員山區自由路244號",
    "city": "宜蘭縣",
    "lat": 24.6958,
    "lng": 121.8068,
    "totalStalls": 14,
    "availableStalls": 10,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 119,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "available"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.7,
    "pricePerKwh": 5
  },
  {
    "id": "sta-599",
    "name": "壯圍台灣電力快充站",
    "network": "台灣電力",
    "address": "宜蘭縣壯圍區和平路850號",
    "city": "宜蘭縣",
    "lat": 24.7018,
    "lng": 121.6931,
    "totalStalls": 16,
    "availableStalls": 10,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 119,
    "amenities": [
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "available"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      },
      {
        "id": 15,
        "status": "in_use"
      },
      {
        "id": 16,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.4,
    "pricePerKwh": 5
  },
  {
    "id": "sta-600",
    "name": "蘇澳U-Power停車場充電樁",
    "network": "U-Power",
    "address": "宜蘭縣蘇澳區文化路261號",
    "city": "宜蘭縣",
    "lat": 24.6875,
    "lng": 121.6985,
    "totalStalls": 5,
    "availableStalls": 0,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 214,
    "amenities": [
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 3.9,
    "pricePerKwh": 6.5
  },
  {
    "id": "sta-601",
    "name": "壯圍停車場自建慢充站",
    "network": "停車場自建",
    "address": "宜蘭縣壯圍區中正路613號",
    "city": "宜蘭縣",
    "lat": 24.6246,
    "lng": 121.6967,
    "totalStalls": 5,
    "availableStalls": 0,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 14,
    "amenities": [
      "cafe",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.3,
    "pricePerKwh": 3.5
  },
  {
    "id": "sta-602",
    "name": "宜蘭停車場自建快充站",
    "network": "停車場自建",
    "address": "宜蘭縣宜蘭區民生路461號",
    "city": "宜蘭縣",
    "lat": 24.6042,
    "lng": 121.8076,
    "totalStalls": 13,
    "availableStalls": 2,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 20,
    "amenities": [
      "restroom",
      "parking",
      "hotel",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.9,
    "pricePerKwh": 3.5
  },
  {
    "id": "sta-603",
    "name": "冬山停車場自建快充站",
    "network": "停車場自建",
    "address": "宜蘭縣冬山區民權路158號",
    "city": "宜蘭縣",
    "lat": 24.6096,
    "lng": 121.766,
    "totalStalls": 9,
    "availableStalls": 7,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2",
      "CCS2"
    ],
    "maxKw": 10,
    "amenities": [
      "restroom",
      "parking",
      "hotel",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.7,
    "pricePerKwh": 3.5
  },
  {
    "id": "sta-604",
    "name": "冬山特斯拉超充站",
    "network": "Tesla",
    "address": "宜蘭縣冬山區復興路149號",
    "city": "宜蘭縣",
    "lat": 24.6997,
    "lng": 121.7353,
    "totalStalls": 14,
    "availableStalls": 8,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 220,
    "amenities": [
      "parking",
      "restaurant",
      "shopping",
      "wifi",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 3.8,
    "pricePerKwh": 7
  },
  {
    "id": "sta-605",
    "name": "宜蘭ForMosa購物中心充電站",
    "network": "ForMosa EV",
    "address": "宜蘭縣宜蘭區民生路827號",
    "city": "宜蘭縣",
    "lat": 24.6732,
    "lng": 121.7288,
    "totalStalls": 6,
    "availableStalls": 5,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 127,
    "amenities": [
      "restroom",
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 4.4,
    "pricePerKwh": 5.8
  },
  {
    "id": "sta-606",
    "name": "羅東特斯拉停車場充電樁",
    "network": "Tesla",
    "address": "宜蘭縣羅東區和平路215號",
    "city": "宜蘭縣",
    "lat": 24.663,
    "lng": 121.6948,
    "totalStalls": 15,
    "availableStalls": 13,
    "chargerType": "V4",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 343,
    "amenities": [
      "restaurant",
      "shopping",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "available"
      },
      {
        "id": 11,
        "status": "available"
      },
      {
        "id": 12,
        "status": "available"
      },
      {
        "id": 13,
        "status": "available"
      },
      {
        "id": 14,
        "status": "in_use"
      },
      {
        "id": 15,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.7,
    "pricePerKwh": 6.8
  },
  {
    "id": "sta-607",
    "name": "蘇澳自建超充站",
    "network": "自建",
    "address": "宜蘭縣蘇澳區建國路913號",
    "city": "宜蘭縣",
    "lat": 24.7097,
    "lng": 121.7019,
    "totalStalls": 14,
    "availableStalls": 6,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 15,
    "amenities": [
      "parking",
      "cafe",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.8,
    "pricePerKwh": 3
  },
  {
    "id": "sta-608",
    "name": "礁溪中油慢充站",
    "network": "台灣中油",
    "address": "宜蘭縣礁溪區中山路934號",
    "city": "宜蘭縣",
    "lat": 24.6762,
    "lng": 121.803,
    "totalStalls": 2,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 146,
    "amenities": [
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 5,
    "pricePerKwh": 5.5
  },
  {
    "id": "sta-609",
    "name": "冬山特斯拉停車場充電樁",
    "network": "Tesla",
    "address": "宜蘭縣冬山區中山路720號",
    "city": "宜蘭縣",
    "lat": 24.694,
    "lng": 121.793,
    "totalStalls": 14,
    "availableStalls": 0,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 218,
    "amenities": [
      "parking",
      "restaurant"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.8,
    "pricePerKwh": 7
  },
  {
    "id": "sta-610",
    "name": "壯圍U-Power快充站",
    "network": "U-Power",
    "address": "宜蘭縣壯圍區中山路595號",
    "city": "宜蘭縣",
    "lat": 24.7738,
    "lng": 121.8083,
    "totalStalls": 7,
    "availableStalls": 2,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 215,
    "amenities": [
      "restroom",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.7,
    "pricePerKwh": 6.5
  },
  {
    "id": "sta-611",
    "name": "蘇澳停車場自建購物中心充電站",
    "network": "停車場自建",
    "address": "宜蘭縣蘇澳區民生路744號",
    "city": "宜蘭縣",
    "lat": 24.6878,
    "lng": 121.8133,
    "totalStalls": 2,
    "availableStalls": 1,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2",
      "CCS2"
    ],
    "maxKw": 9,
    "amenities": [
      "parking",
      "hotel",
      "cafe",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.4,
    "pricePerKwh": 4
  },
  {
    "id": "sta-612",
    "name": "礁溪特斯拉快充站",
    "network": "Tesla",
    "address": "宜蘭縣礁溪區自由路554號",
    "city": "宜蘭縣",
    "lat": 24.6178,
    "lng": 121.7244,
    "totalStalls": 3,
    "availableStalls": 0,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 202,
    "amenities": [
      "restroom",
      "parking",
      "wifi",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.8,
    "pricePerKwh": 6.8
  },
  {
    "id": "sta-613",
    "name": "宜蘭ForMosa充電站",
    "network": "ForMosa EV",
    "address": "宜蘭縣宜蘭區民生路429號",
    "city": "宜蘭縣",
    "lat": 24.6692,
    "lng": 121.8076,
    "totalStalls": 16,
    "availableStalls": 15,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 224,
    "amenities": [
      "restroom"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "available"
      },
      {
        "id": 11,
        "status": "available"
      },
      {
        "id": 12,
        "status": "available"
      },
      {
        "id": 13,
        "status": "available"
      },
      {
        "id": 14,
        "status": "available"
      },
      {
        "id": 15,
        "status": "available"
      },
      {
        "id": 16,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.1,
    "pricePerKwh": 5.8
  },
  {
    "id": "sta-614",
    "name": "宜蘭裕電充電站",
    "network": "裕電能源",
    "address": "宜蘭縣宜蘭區建國路379號",
    "city": "宜蘭縣",
    "lat": 24.739,
    "lng": 121.748,
    "totalStalls": 9,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 106,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "faulted"
      }
    ],
    "openHours": "24小時",
    "rating": 4.7,
    "pricePerKwh": 6.2
  },
  {
    "id": "sta-615",
    "name": "壯圍自建購物中心充電站",
    "network": "自建",
    "address": "宜蘭縣壯圍區光明路672號",
    "city": "宜蘭縣",
    "lat": 24.6853,
    "lng": 121.7596,
    "totalStalls": 8,
    "availableStalls": 2,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 18,
    "amenities": [
      "restroom",
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 4.6,
    "pricePerKwh": 4
  },
  {
    "id": "sta-616",
    "name": "花蓮ForMosa停車場充電樁",
    "network": "ForMosa EV",
    "address": "花蓮縣花蓮區文化路672號",
    "city": "花蓮縣",
    "lat": 24.009,
    "lng": 121.5892,
    "totalStalls": 6,
    "availableStalls": 3,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 144,
    "amenities": [
      "restroom",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.6,
    "pricePerKwh": 5.5
  },
  {
    "id": "sta-617",
    "name": "秀林停車場自建慢充站",
    "network": "停車場自建",
    "address": "花蓮縣秀林區光明路217號",
    "city": "花蓮縣",
    "lat": 24.2467,
    "lng": 121.5595,
    "totalStalls": 4,
    "availableStalls": 3,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2",
      "CCS2"
    ],
    "maxKw": 21,
    "amenities": [
      "restroom",
      "hotel"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.5,
    "pricePerKwh": 4.5
  },
  {
    "id": "sta-618",
    "name": "壽豐自建快充站",
    "network": "自建",
    "address": "花蓮縣壽豐區中山路559號",
    "city": "花蓮縣",
    "lat": 23.9015,
    "lng": 121.6043,
    "totalStalls": 11,
    "availableStalls": 6,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 19,
    "amenities": [
      "restroom",
      "parking",
      "hotel",
      "cafe"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "faulted"
      }
    ],
    "openHours": "24小時",
    "rating": 4.9,
    "pricePerKwh": 3
  },
  {
    "id": "sta-619",
    "name": "壽豐台灣電力充電站",
    "network": "台灣電力",
    "address": "花蓮縣壽豐區中山路169號",
    "city": "花蓮縣",
    "lat": 23.7798,
    "lng": 121.6269,
    "totalStalls": 3,
    "availableStalls": 2,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 117,
    "amenities": [
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4,
    "pricePerKwh": 5
  },
  {
    "id": "sta-620",
    "name": "新城中油快充站",
    "network": "台灣中油",
    "address": "花蓮縣新城區中正路249號",
    "city": "花蓮縣",
    "lat": 24.0274,
    "lng": 121.6446,
    "totalStalls": 7,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 113,
    "amenities": [
      "restroom"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.1,
    "pricePerKwh": 5
  },
  {
    "id": "sta-621",
    "name": "秀林停車場自建快充站",
    "network": "停車場自建",
    "address": "花蓮縣秀林區復興路650號",
    "city": "花蓮縣",
    "lat": 24.1989,
    "lng": 121.5927,
    "totalStalls": 3,
    "availableStalls": 0,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 12,
    "amenities": [
      "restroom",
      "parking",
      "hotel",
      "cafe",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 4.8,
    "pricePerKwh": 4.5
  },
  {
    "id": "sta-622",
    "name": "玉里ForMosa慢充站",
    "network": "ForMosa EV",
    "address": "花蓮縣玉里區民生路355號",
    "city": "花蓮縣",
    "lat": 24.0489,
    "lng": 121.5722,
    "totalStalls": 2,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 102,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.8,
    "pricePerKwh": 5.5
  },
  {
    "id": "sta-623",
    "name": "秀林台灣電力慢充站",
    "network": "台灣電力",
    "address": "花蓮縣秀林區文化路835號",
    "city": "花蓮縣",
    "lat": 24.0076,
    "lng": 121.5734,
    "totalStalls": 4,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 134,
    "amenities": [
      "restroom",
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4,
    "pricePerKwh": 4.8
  },
  {
    "id": "sta-624",
    "name": "壽豐特斯拉購物中心充電站",
    "network": "Tesla",
    "address": "花蓮縣壽豐區民生路782號",
    "city": "花蓮縣",
    "lat": 23.8788,
    "lng": 121.6074,
    "totalStalls": 6,
    "availableStalls": 1,
    "chargerType": "V4",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 321,
    "amenities": [
      "restroom",
      "parking",
      "wifi",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.4,
    "pricePerKwh": 7.5
  },
  {
    "id": "sta-625",
    "name": "鳳林自建快充站",
    "network": "自建",
    "address": "花蓮縣鳳林區中山路262號",
    "city": "花蓮縣",
    "lat": 24.0843,
    "lng": 121.5438,
    "totalStalls": 2,
    "availableStalls": 1,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 10,
    "amenities": [
      "restroom",
      "cafe"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.5,
    "pricePerKwh": 4
  },
  {
    "id": "sta-626",
    "name": "玉里U-Power快充站",
    "network": "U-Power",
    "address": "花蓮縣玉里區民生路326號",
    "city": "花蓮縣",
    "lat": 24.0318,
    "lng": 121.5875,
    "totalStalls": 4,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 135,
    "amenities": [
      "restroom",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "faulted"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.7,
    "pricePerKwh": 6.3
  },
  {
    "id": "sta-627",
    "name": "新城台灣電力購物中心充電站",
    "network": "台灣電力",
    "address": "花蓮縣新城區民生路375號",
    "city": "花蓮縣",
    "lat": 24.0706,
    "lng": 121.6154,
    "totalStalls": 5,
    "availableStalls": 2,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 143,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 3.8,
    "pricePerKwh": 4.8
  },
  {
    "id": "sta-628",
    "name": "光復中油超充站",
    "network": "台灣中油",
    "address": "花蓮縣光復區復興路120號",
    "city": "花蓮縣",
    "lat": 23.8179,
    "lng": 121.5891,
    "totalStalls": 4,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 124,
    "amenities": [
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "faulted"
      }
    ],
    "openHours": "24小時",
    "rating": 3.7,
    "pricePerKwh": 5
  },
  {
    "id": "sta-629",
    "name": "秀林特斯拉充電站",
    "network": "Tesla",
    "address": "花蓮縣秀林區中山路712號",
    "city": "花蓮縣",
    "lat": 24.1244,
    "lng": 121.6574,
    "totalStalls": 4,
    "availableStalls": 3,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 246,
    "amenities": [
      "parking",
      "wifi",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.2,
    "pricePerKwh": 7
  },
  {
    "id": "sta-630",
    "name": "新城U-Power慢充站",
    "network": "U-Power",
    "address": "花蓮縣新城區自由路177號",
    "city": "花蓮縣",
    "lat": 23.8714,
    "lng": 121.6313,
    "totalStalls": 14,
    "availableStalls": 10,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 122,
    "amenities": [],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "available"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.9,
    "pricePerKwh": 6.3
  },
  {
    "id": "sta-631",
    "name": "光復裕電超充站",
    "network": "裕電能源",
    "address": "花蓮縣光復區復興路245號",
    "city": "花蓮縣",
    "lat": 23.8508,
    "lng": 121.5867,
    "totalStalls": 9,
    "availableStalls": 2,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 139,
    "amenities": [
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 3.6,
    "pricePerKwh": 5.8
  },
  {
    "id": "sta-632",
    "name": "玉里特斯拉充電站",
    "network": "Tesla",
    "address": "花蓮縣玉里區民權路749號",
    "city": "花蓮縣",
    "lat": 24.1697,
    "lng": 121.6494,
    "totalStalls": 16,
    "availableStalls": 0,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 202,
    "amenities": [
      "parking",
      "restaurant",
      "shopping",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      },
      {
        "id": 15,
        "status": "in_use"
      },
      {
        "id": 16,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.3,
    "pricePerKwh": 6.8
  },
  {
    "id": "sta-633",
    "name": "秀林台灣電力充電站",
    "network": "台灣電力",
    "address": "花蓮縣秀林區復興路622號",
    "city": "花蓮縣",
    "lat": 23.9716,
    "lng": 121.5723,
    "totalStalls": 12,
    "availableStalls": 5,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 145,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 3.8,
    "pricePerKwh": 4.8
  },
  {
    "id": "sta-634",
    "name": "台東自建快充站",
    "network": "自建",
    "address": "台東縣台東區民權路428號",
    "city": "台東縣",
    "lat": 22.9336,
    "lng": 121.129,
    "totalStalls": 3,
    "availableStalls": 0,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 21,
    "amenities": [
      "restroom",
      "parking",
      "hotel",
      "cafe"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.5,
    "pricePerKwh": 3
  },
  {
    "id": "sta-635",
    "name": "台東ForMosa購物中心充電站",
    "network": "ForMosa EV",
    "address": "台東縣台東區民權路138號",
    "city": "台東縣",
    "lat": 22.6239,
    "lng": 121.1384,
    "totalStalls": 8,
    "availableStalls": 3,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 242,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.8,
    "pricePerKwh": 5.5
  },
  {
    "id": "sta-636",
    "name": "成功裕電快充站",
    "network": "裕電能源",
    "address": "台東縣成功區和平路959號",
    "city": "台東縣",
    "lat": 22.7318,
    "lng": 121.0837,
    "totalStalls": 5,
    "availableStalls": 4,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 109,
    "amenities": [
      "restroom"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.6,
    "pricePerKwh": 6
  },
  {
    "id": "sta-637",
    "name": "太麻里裕電快充站",
    "network": "裕電能源",
    "address": "台東縣太麻里區中正路617號",
    "city": "台東縣",
    "lat": 22.9188,
    "lng": 121.0815,
    "totalStalls": 10,
    "availableStalls": 6,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 101,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 4.5,
    "pricePerKwh": 5.8
  },
  {
    "id": "sta-638",
    "name": "關山裕電快充站",
    "network": "裕電能源",
    "address": "台東縣關山區中山路734號",
    "city": "台東縣",
    "lat": 22.6877,
    "lng": 121.0989,
    "totalStalls": 11,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 113,
    "amenities": [
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.7,
    "pricePerKwh": 6
  },
  {
    "id": "sta-639",
    "name": "關山停車場自建充電站",
    "network": "停車場自建",
    "address": "台東縣關山區中正路455號",
    "city": "台東縣",
    "lat": 22.8007,
    "lng": 121.1401,
    "totalStalls": 15,
    "availableStalls": 8,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 21,
    "amenities": [
      "parking",
      "hotel",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      },
      {
        "id": 15,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.7,
    "pricePerKwh": 4.5
  },
  {
    "id": "sta-640",
    "name": "關山自建快充站",
    "network": "自建",
    "address": "台東縣關山區民權路916號",
    "city": "台東縣",
    "lat": 22.9809,
    "lng": 121.1865,
    "totalStalls": 3,
    "availableStalls": 0,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 9,
    "amenities": [
      "restroom",
      "parking",
      "hotel",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.2,
    "pricePerKwh": 3
  },
  {
    "id": "sta-641",
    "name": "太麻里U-Power快充站",
    "network": "U-Power",
    "address": "台東縣太麻里區和平路784號",
    "city": "台東縣",
    "lat": 22.952,
    "lng": 121.0862,
    "totalStalls": 4,
    "availableStalls": 2,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 210,
    "amenities": [
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.1,
    "pricePerKwh": 6.5
  },
  {
    "id": "sta-642",
    "name": "卑南停車場自建快充站",
    "network": "停車場自建",
    "address": "台東縣卑南區建國路346號",
    "city": "台東縣",
    "lat": 22.8831,
    "lng": 121.2159,
    "totalStalls": 6,
    "availableStalls": 3,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 16,
    "amenities": [
      "restroom",
      "hotel",
      "cafe",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.6,
    "pricePerKwh": 4
  },
  {
    "id": "sta-643",
    "name": "成功特斯拉慢充站",
    "network": "Tesla",
    "address": "台東縣成功區中正路510號",
    "city": "台東縣",
    "lat": 22.9706,
    "lng": 121.1606,
    "totalStalls": 5,
    "availableStalls": 3,
    "chargerType": "V4",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 326,
    "amenities": [
      "restaurant",
      "shopping",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.8,
    "pricePerKwh": 6.8
  },
  {
    "id": "sta-644",
    "name": "成功裕電慢充站",
    "network": "裕電能源",
    "address": "台東縣成功區復興路422號",
    "city": "台東縣",
    "lat": 22.6627,
    "lng": 121.1192,
    "totalStalls": 4,
    "availableStalls": 3,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 250,
    "amenities": [
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 3.6,
    "pricePerKwh": 5.8
  },
  {
    "id": "sta-645",
    "name": "成功特斯拉快充站",
    "network": "Tesla",
    "address": "台東縣成功區自由路810號",
    "city": "台東縣",
    "lat": 22.7042,
    "lng": 121.0836,
    "totalStalls": 11,
    "availableStalls": 2,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 233,
    "amenities": [
      "restaurant",
      "shopping",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 5,
    "pricePerKwh": 7.5
  },
  {
    "id": "sta-646",
    "name": "成功自建充電站",
    "network": "自建",
    "address": "台東縣成功區中山路668號",
    "city": "台東縣",
    "lat": 22.9483,
    "lng": 121.0996,
    "totalStalls": 10,
    "availableStalls": 1,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 19,
    "amenities": [
      "restroom",
      "parking",
      "hotel",
      "cafe"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 3.5,
    "pricePerKwh": 3
  },
  {
    "id": "sta-647",
    "name": "太麻里停車場自建快充站",
    "network": "停車場自建",
    "address": "台東縣太麻里區民生路825號",
    "city": "台東縣",
    "lat": 22.85,
    "lng": 121.1549,
    "totalStalls": 13,
    "availableStalls": 6,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 21,
    "amenities": [
      "restroom",
      "parking",
      "hotel",
      "cafe",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.7,
    "pricePerKwh": 4
  },
  {
    "id": "sta-648",
    "name": "卑南特斯拉停車場充電樁",
    "network": "Tesla",
    "address": "台東縣卑南區文化路227號",
    "city": "台東縣",
    "lat": 22.7757,
    "lng": 121.1348,
    "totalStalls": 2,
    "availableStalls": 1,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 235,
    "amenities": [
      "parking",
      "restaurant",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.2,
    "pricePerKwh": 6.8
  },
  {
    "id": "sta-649",
    "name": "信義U-Power慢充站",
    "network": "U-Power",
    "address": "基隆市信義區自由路165號",
    "city": "基隆市",
    "lat": 25.1191,
    "lng": 121.7544,
    "totalStalls": 9,
    "availableStalls": 8,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 121,
    "amenities": [
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.3,
    "pricePerKwh": 6.5
  },
  {
    "id": "sta-650",
    "name": "安樂U-Power充電站",
    "network": "U-Power",
    "address": "基隆市安樂區建國路582號",
    "city": "基隆市",
    "lat": 25.1456,
    "lng": 121.7401,
    "totalStalls": 12,
    "availableStalls": 6,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 205,
    "amenities": [
      "restroom",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.8,
    "pricePerKwh": 6.8
  },
  {
    "id": "sta-651",
    "name": "安樂特斯拉充電站",
    "network": "Tesla",
    "address": "基隆市安樂區復興路488號",
    "city": "基隆市",
    "lat": 25.1515,
    "lng": 121.709,
    "totalStalls": 4,
    "availableStalls": 0,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 216,
    "amenities": [
      "restroom",
      "restaurant",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.9,
    "pricePerKwh": 7.5
  },
  {
    "id": "sta-652",
    "name": "七堵自建購物中心充電站",
    "network": "自建",
    "address": "基隆市七堵區和平路786號",
    "city": "基隆市",
    "lat": 25.088,
    "lng": 121.7155,
    "totalStalls": 3,
    "availableStalls": 0,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 16,
    "amenities": [
      "restroom",
      "hotel",
      "cafe"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.8,
    "pricePerKwh": 3
  },
  {
    "id": "sta-653",
    "name": "中山ForMosa充電站",
    "network": "ForMosa EV",
    "address": "基隆市中山區民權路146號",
    "city": "基隆市",
    "lat": 25.0963,
    "lng": 121.7638,
    "totalStalls": 6,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 146,
    "amenities": [],
    "stalls": [
      {
        "id": 1,
        "status": "in_use"
      },
      {
        "id": 2,
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      },
      {
        "id": 4,
        "status": "in_use"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 3.7,
    "pricePerKwh": 6
  },
  {
    "id": "sta-654",
    "name": "暖暖自建快充站",
    "network": "自建",
    "address": "基隆市暖暖區建國路283號",
    "city": "基隆市",
    "lat": 25.1205,
    "lng": 121.7129,
    "totalStalls": 2,
    "availableStalls": 1,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 14,
    "amenities": [
      "restroom",
      "parking",
      "hotel",
      "cafe"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.9,
    "pricePerKwh": 4
  },
  {
    "id": "sta-655",
    "name": "信義特斯拉快充站",
    "network": "Tesla",
    "address": "基隆市信義區民生路871號",
    "city": "基隆市",
    "lat": 25.0886,
    "lng": 121.7789,
    "totalStalls": 12,
    "availableStalls": 5,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 237,
    "amenities": [
      "restroom",
      "parking",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.7,
    "pricePerKwh": 7
  },
  {
    "id": "sta-656",
    "name": "七堵台灣電力快充站",
    "network": "台灣電力",
    "address": "基隆市七堵區復興路836號",
    "city": "基隆市",
    "lat": 25.1506,
    "lng": 121.7098,
    "totalStalls": 4,
    "availableStalls": 3,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 143,
    "amenities": [
      "restroom",
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.7,
    "pricePerKwh": 5
  },
  {
    "id": "sta-657",
    "name": "仁愛ForMosa快充站",
    "network": "ForMosa EV",
    "address": "基隆市仁愛區和平路544號",
    "city": "基隆市",
    "lat": 25.1235,
    "lng": 121.7734,
    "totalStalls": 8,
    "availableStalls": 7,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 238,
    "amenities": [
      "restroom"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "faulted"
      }
    ],
    "openHours": "24小時",
    "rating": 4,
    "pricePerKwh": 5.8
  },
  {
    "id": "sta-658",
    "name": "暖暖停車場自建充電站",
    "network": "停車場自建",
    "address": "基隆市暖暖區中正路916號",
    "city": "基隆市",
    "lat": 25.0895,
    "lng": 121.7585,
    "totalStalls": 13,
    "availableStalls": 4,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2",
      "CCS2"
    ],
    "maxKw": 19,
    "amenities": [
      "restroom",
      "hotel",
      "wifi"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "in_use"
      },
      {
        "id": 6,
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      }
    ],
    "openHours": "08:00–22:00",
    "rating": 4.7,
    "pricePerKwh": 3.5
  },
  {
    "id": "sta-659",
    "name": "七堵中油快充站",
    "network": "台灣中油",
    "address": "基隆市七堵區中山路578號",
    "city": "基隆市",
    "lat": 25.1389,
    "lng": 121.7051,
    "totalStalls": 13,
    "availableStalls": 6,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 144,
    "amenities": [
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      },
      {
        "id": 9,
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 3.7,
    "pricePerKwh": 5
  },
  {
    "id": "sta-660",
    "name": "暖暖U-Power超充站",
    "network": "U-Power",
    "address": "基隆市暖暖區光明路371號",
    "city": "基隆市",
    "lat": 25.1668,
    "lng": 121.7321,
    "totalStalls": 15,
    "availableStalls": 14,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 237,
    "amenities": [
      "convenience"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "available"
      },
      {
        "id": 11,
        "status": "available"
      },
      {
        "id": 12,
        "status": "available"
      },
      {
        "id": 13,
        "status": "available"
      },
      {
        "id": 14,
        "status": "available"
      },
      {
        "id": 15,
        "status": "faulted"
      }
    ],
    "openHours": "24小時",
    "rating": 4.5,
    "pricePerKwh": 6.8
  },
  {
    "id": "sta-661",
    "name": "中正中油購物中心充電站",
    "network": "台灣中油",
    "address": "基隆市中正區民生路796號",
    "city": "基隆市",
    "lat": 25.1016,
    "lng": 121.7376,
    "totalStalls": 8,
    "availableStalls": 6,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 147,
    "amenities": [
      "restroom",
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 3.7,
    "pricePerKwh": 5.5
  },
  {
    "id": "sta-662",
    "name": "中山中油慢充站",
    "network": "台灣中油",
    "address": "基隆市中山區民生路861號",
    "city": "基隆市",
    "lat": 25.1187,
    "lng": 121.7202,
    "totalStalls": 14,
    "availableStalls": 9,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 119,
    "amenities": [
      "parking"
    ],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "in_use"
      },
      {
        "id": 11,
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      },
      {
        "id": 13,
        "status": "in_use"
      },
      {
        "id": 14,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.6,
    "pricePerKwh": 5
  },
  {
    "id": "sta-663",
    "name": "暖暖中油購物中心充電站",
    "network": "台灣中油",
    "address": "基隆市暖暖區中正路317號",
    "city": "基隆市",
    "lat": 25.1416,
    "lng": 121.7725,
    "totalStalls": 15,
    "availableStalls": 13,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 100,
    "amenities": [],
    "stalls": [
      {
        "id": 1,
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
        "id": 3,
        "status": "available"
      },
      {
        "id": 4,
        "status": "available"
      },
      {
        "id": 5,
        "status": "available"
      },
      {
        "id": 6,
        "status": "available"
      },
      {
        "id": 7,
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "available"
      },
      {
        "id": 10,
        "status": "available"
      },
      {
        "id": 11,
        "status": "available"
      },
      {
        "id": 12,
        "status": "available"
      },
      {
        "id": 13,
        "status": "available"
      },
      {
        "id": 14,
        "status": "in_use"
      },
      {
        "id": 15,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.1,
    "pricePerKwh": 5
  }
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
