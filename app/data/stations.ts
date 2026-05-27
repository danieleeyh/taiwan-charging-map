export type ChargerType = 'V2' | 'V3' | 'V4' | 'AC';
export type StationType = 'supercharger' | 'destination' | 'public';
export type ConnectorType = 'CCS2' | 'CHAdeMO' | 'NACS' | 'Type2';
export type AmenityType = 'restaurant' | 'cafe' | 'hotel' | 'shopping' | 'parking' | 'restroom' | 'wifi' | 'convenience';
export type StallStatus = 'available' | 'in_use' | 'faulted' | 'offline';

export interface Stall { id: number; status: StallStatus; }

export interface Station {
  id: string; name: string; network: string; address: string; city: string;
  lat: number; lng: number; totalStalls: number; availableStalls: number;
  chargerType: ChargerType; stationType: StationType; connectors: ConnectorType[];
  maxKw: number; amenities: AmenityType[]; stalls: Stall[];
  openHours: string; rating?: number; pricePerKwh?: number;
}

export const stations: Station[] = [
  {
    "id": "s1",
    "name": "信義中油充電站",
    "network": "台灣中油",
    "address": "台北市信義區五福路812號",
    "city": "台北市",
    "lat": 25.0325,
    "lng": 121.5635,
    "totalStalls": 3,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 100,
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.4,
    "pricePerKwh": 5
  },
  {
    "id": "s2",
    "name": "信義目的地充電站",
    "network": "自建",
    "address": "台北市信義區忠孝路484號",
    "city": "台北市",
    "lat": 25.0322,
    "lng": 121.565,
    "totalStalls": 5,
    "availableStalls": 1,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 20,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "24小時",
    "rating": 3.9,
    "pricePerKwh": 4
  },
  {
    "id": "s3",
    "name": "信義特斯拉超充站",
    "network": "Tesla",
    "address": "台北市信義區長安路468號",
    "city": "台北市",
    "lat": 25.036,
    "lng": 121.5632,
    "totalStalls": 10,
    "availableStalls": 6,
    "chargerType": "V4",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 335,
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.8,
    "pricePerKwh": 7.5
  },
  {
    "id": "s4",
    "name": "信義ForMosa站",
    "network": "ForMosa EV",
    "address": "台北市信義區台灣大道472號",
    "city": "台北市",
    "lat": 25.0353,
    "lng": 121.5661,
    "totalStalls": 8,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 95,
    "amenities": [
      "parking",
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
        "status": "faulted"
      }
    ],
    "openHours": "24小時",
    "rating": 3.6,
    "pricePerKwh": 5.5
  },
  {
    "id": "s5",
    "name": "信義目的地充電站",
    "network": "自建",
    "address": "台北市信義區長安路785號",
    "city": "台北市",
    "lat": 25.0406,
    "lng": 121.5648,
    "totalStalls": 4,
    "availableStalls": 2,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 15,
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
    "openHours": "24小時",
    "rating": 4,
    "pricePerKwh": 3
  },
  {
    "id": "s6",
    "name": "信義裕電站",
    "network": "裕電能源",
    "address": "台北市信義區成功路159號",
    "city": "台北市",
    "lat": 25.0429,
    "lng": 121.5632,
    "totalStalls": 6,
    "availableStalls": 1,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 206,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 3.7,
    "pricePerKwh": 6
  },
  {
    "id": "s7",
    "name": "信義停車場充電站",
    "network": "停車場自建",
    "address": "台北市信義區彰化路435號",
    "city": "台北市",
    "lat": 25.041,
    "lng": 121.5648,
    "totalStalls": 4,
    "availableStalls": 2,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 17,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.1,
    "pricePerKwh": 4.5
  },
  {
    "id": "s8",
    "name": "信義特斯拉超充站",
    "network": "Tesla",
    "address": "台北市信義區長安路490號",
    "city": "台北市",
    "lat": 25.0393,
    "lng": 121.5665,
    "totalStalls": 9,
    "availableStalls": 3,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 214,
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
    "pricePerKwh": 7
  },
  {
    "id": "s9",
    "name": "松山ForMosa站",
    "network": "ForMosa EV",
    "address": "台北市松山區博愛路327號",
    "city": "台北市",
    "lat": 25.0513,
    "lng": 121.5588,
    "totalStalls": 5,
    "availableStalls": 3,
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
    "openHours": "07:00–23:00",
    "rating": 3.8,
    "pricePerKwh": 5.8
  },
  {
    "id": "s10",
    "name": "松山目的地充電站",
    "network": "自建",
    "address": "台北市松山區和平路225號",
    "city": "台北市",
    "lat": 25.0499,
    "lng": 121.5575,
    "totalStalls": 5,
    "availableStalls": 4,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 22,
    "amenities": [
      "parking",
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
    "openHours": "06:00–22:00",
    "rating": 4.8,
    "pricePerKwh": 4
  },
  {
    "id": "s11",
    "name": "松山裕電站",
    "network": "裕電能源",
    "address": "台北市松山區文心路165號",
    "city": "台北市",
    "lat": 25.0503,
    "lng": 121.5577,
    "totalStalls": 5,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 109,
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
    "openHours": "24小時",
    "rating": 4.2,
    "pricePerKwh": 6.2
  },
  {
    "id": "s12",
    "name": "松山停車場充電站",
    "network": "停車場自建",
    "address": "台北市松山區博愛路988號",
    "city": "台北市",
    "lat": 25.0512,
    "lng": 121.5555,
    "totalStalls": 13,
    "availableStalls": 5,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2",
      "CCS2"
    ],
    "maxKw": 18,
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
    "rating": 3.6,
    "pricePerKwh": 4.5
  },
  {
    "id": "s13",
    "name": "中山ForMosa站",
    "network": "ForMosa EV",
    "address": "台北市中山區中山路713號",
    "city": "台北市",
    "lat": 25.0502,
    "lng": 121.5225,
    "totalStalls": 7,
    "availableStalls": 6,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 210,
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
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.7,
    "pricePerKwh": 5.5
  },
  {
    "id": "s14",
    "name": "中山台電充電站",
    "network": "台灣電力",
    "address": "台北市中山區文心路864號",
    "city": "台北市",
    "lat": 25.0516,
    "lng": 121.5261,
    "totalStalls": 6,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 111,
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
      }
    ],
    "openHours": "24小時",
    "rating": 3.9,
    "pricePerKwh": 4.8
  },
  {
    "id": "s15",
    "name": "中山特斯拉超充站",
    "network": "Tesla",
    "address": "台北市中山區信義路249號",
    "city": "台北市",
    "lat": 25.0557,
    "lng": 121.5227,
    "totalStalls": 8,
    "availableStalls": 3,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 195,
    "amenities": [
      "restaurant",
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
    "rating": 4.4,
    "pricePerKwh": 6.8
  },
  {
    "id": "s16",
    "name": "大同特斯拉超充站",
    "network": "Tesla",
    "address": "台北市大同區長安路675號",
    "city": "台北市",
    "lat": 25.048,
    "lng": 121.5145,
    "totalStalls": 12,
    "availableStalls": 4,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 216,
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
    "rating": 3.8,
    "pricePerKwh": 7
  },
  {
    "id": "s17",
    "name": "大同停車場充電站",
    "network": "停車場自建",
    "address": "台北市大同區復興路673號",
    "city": "台北市",
    "lat": 25.0497,
    "lng": 121.5185,
    "totalStalls": 15,
    "availableStalls": 1,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 11,
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
    "rating": 4.8,
    "pricePerKwh": 4.5
  },
  {
    "id": "s18",
    "name": "大同目的地充電站",
    "network": "自建",
    "address": "台北市大同區中山路951號",
    "city": "台北市",
    "lat": 25.0464,
    "lng": 121.515,
    "totalStalls": 8,
    "availableStalls": 6,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 8,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.4,
    "pricePerKwh": 3
  },
  {
    "id": "s19",
    "name": "大安ForMosa站",
    "network": "ForMosa EV",
    "address": "台北市大安區民生路879號",
    "city": "台北市",
    "lat": 25.0288,
    "lng": 121.5351,
    "totalStalls": 5,
    "availableStalls": 2,
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
    "pricePerKwh": 5.8
  },
  {
    "id": "s20",
    "name": "大安裕電站",
    "network": "裕電能源",
    "address": "台北市大安區台灣大道990號",
    "city": "台北市",
    "lat": 25.0285,
    "lng": 121.5331,
    "totalStalls": 10,
    "availableStalls": 6,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 98,
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.6,
    "pricePerKwh": 6
  },
  {
    "id": "s21",
    "name": "大安停車場充電站",
    "network": "停車場自建",
    "address": "台北市大安區復興路141號",
    "city": "台北市",
    "lat": 25.0211,
    "lng": 121.5437,
    "totalStalls": 13,
    "availableStalls": 12,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2",
      "CCS2"
    ],
    "maxKw": 16,
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
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.9,
    "pricePerKwh": 4.5
  },
  {
    "id": "s22",
    "name": "大安特斯拉超充站",
    "network": "Tesla",
    "address": "台北市大安區忠孝路984號",
    "city": "台北市",
    "lat": 25.026,
    "lng": 121.5489,
    "totalStalls": 19,
    "availableStalls": 0,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 219,
    "amenities": [
      "restaurant",
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
      },
      {
        "id": 17,
        "status": "in_use"
      },
      {
        "id": 18,
        "status": "in_use"
      },
      {
        "id": 19,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.4,
    "pricePerKwh": 6.8
  },
  {
    "id": "s23",
    "name": "大安目的地充電站",
    "network": "自建",
    "address": "台北市大安區民權路565號",
    "city": "台北市",
    "lat": 25.0207,
    "lng": 121.5471,
    "totalStalls": 4,
    "availableStalls": 2,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 8,
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.8,
    "pricePerKwh": 3
  },
  {
    "id": "s24",
    "name": "中正特斯拉超充站",
    "network": "Tesla",
    "address": "台北市中正區信義路185號",
    "city": "台北市",
    "lat": 25.0413,
    "lng": 121.5127,
    "totalStalls": 6,
    "availableStalls": 5,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 204,
    "amenities": [
      "shopping",
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
        "status": "faulted"
      }
    ],
    "openHours": "24小時",
    "rating": 4.9,
    "pricePerKwh": 7
  },
  {
    "id": "s25",
    "name": "中正停車場充電站",
    "network": "停車場自建",
    "address": "台北市中正區光明路592號",
    "city": "台北市",
    "lat": 25.0411,
    "lng": 121.5098,
    "totalStalls": 8,
    "availableStalls": 6,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2",
      "CCS2"
    ],
    "maxKw": 12,
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.4,
    "pricePerKwh": 4
  },
  {
    "id": "s26",
    "name": "萬華ForMosa站",
    "network": "ForMosa EV",
    "address": "台北市萬華區大安路834號",
    "city": "台北市",
    "lat": 25.0307,
    "lng": 121.5025,
    "totalStalls": 8,
    "availableStalls": 6,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 132,
    "amenities": [
      "parking",
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
        "status": "faulted"
      }
    ],
    "openHours": "24小時",
    "rating": 4,
    "pricePerKwh": 5.8
  },
  {
    "id": "s27",
    "name": "萬華裕電站",
    "network": "裕電能源",
    "address": "台北市萬華區民族路796號",
    "city": "台北市",
    "lat": 25.0304,
    "lng": 121.5023,
    "totalStalls": 6,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 89,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "24小時",
    "rating": 4,
    "pricePerKwh": 6.2
  },
  {
    "id": "s28",
    "name": "萬華中油充電站",
    "network": "台灣中油",
    "address": "台北市萬華區中山路965號",
    "city": "台北市",
    "lat": 25.0312,
    "lng": 121.5019,
    "totalStalls": 4,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 143,
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
        "status": "faulted"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.2,
    "pricePerKwh": 5
  },
  {
    "id": "s29",
    "name": "內湖ForMosa站",
    "network": "ForMosa EV",
    "address": "台北市內湖區十全路933號",
    "city": "台北市",
    "lat": 25.081,
    "lng": 121.5754,
    "totalStalls": 7,
    "availableStalls": 3,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 84,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.3,
    "pricePerKwh": 5.8
  },
  {
    "id": "s30",
    "name": "內湖目的地充電站",
    "network": "自建",
    "address": "台北市內湖區南京路872號",
    "city": "台北市",
    "lat": 25.0795,
    "lng": 121.5754,
    "totalStalls": 5,
    "availableStalls": 3,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 19,
    "amenities": [
      "parking",
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
        "status": "faulted"
      }
    ],
    "openHours": "24小時",
    "rating": 4.1,
    "pricePerKwh": 3
  },
  {
    "id": "s31",
    "name": "內湖裕電站",
    "network": "裕電能源",
    "address": "台北市內湖區中正路465號",
    "city": "台北市",
    "lat": 25.0809,
    "lng": 121.5768,
    "totalStalls": 9,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 96,
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.3,
    "pricePerKwh": 6
  },
  {
    "id": "s32",
    "name": "內湖台電充電站",
    "network": "台灣電力",
    "address": "台北市內湖區復興路487號",
    "city": "台北市",
    "lat": 25.0791,
    "lng": 121.5761,
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
    "pricePerKwh": 5
  },
  {
    "id": "s33",
    "name": "內湖特斯拉超充站",
    "network": "Tesla",
    "address": "台北市內湖區民權路823號",
    "city": "台北市",
    "lat": 25.0744,
    "lng": 121.5866,
    "totalStalls": 17,
    "availableStalls": 6,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 226,
    "amenities": [
      "restaurant",
      "shopping",
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
      },
      {
        "id": 17,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.9,
    "pricePerKwh": 7.5
  },
  {
    "id": "s34",
    "name": "內湖裕電站",
    "network": "裕電能源",
    "address": "台北市內湖區忠孝路963號",
    "city": "台北市",
    "lat": 25.0746,
    "lng": 121.5883,
    "totalStalls": 7,
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
      }
    ],
    "openHours": "24小時",
    "rating": 3.5,
    "pricePerKwh": 5.8
  },
  {
    "id": "s35",
    "name": "內湖ForMosa站",
    "network": "ForMosa EV",
    "address": "台北市內湖區中山路941號",
    "city": "台北市",
    "lat": 25.0729,
    "lng": 121.5898,
    "totalStalls": 6,
    "availableStalls": 1,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 249,
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
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.1,
    "pricePerKwh": 5.5
  },
  {
    "id": "s36",
    "name": "內湖台電充電站",
    "network": "台灣電力",
    "address": "台北市內湖區光明路357號",
    "city": "台北市",
    "lat": 25.0743,
    "lng": 121.5865,
    "totalStalls": 6,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 115,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "24小時",
    "rating": 3.6,
    "pricePerKwh": 5
  },
  {
    "id": "s37",
    "name": "松山台電充電站",
    "network": "台灣電力",
    "address": "台北市松山區長安路419號",
    "city": "台北市",
    "lat": 25.0636,
    "lng": 121.551,
    "totalStalls": 6,
    "availableStalls": 4,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 143,
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.9,
    "pricePerKwh": 4.8
  },
  {
    "id": "s38",
    "name": "松山中油充電站",
    "network": "台灣中油",
    "address": "台北市松山區大安路936號",
    "city": "台北市",
    "lat": 25.064,
    "lng": 121.553,
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
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.4,
    "pricePerKwh": 5.5
  },
  {
    "id": "s39",
    "name": "松山停車場充電站",
    "network": "停車場自建",
    "address": "台北市松山區自由路680號",
    "city": "台北市",
    "lat": 25.0648,
    "lng": 121.5537,
    "totalStalls": 12,
    "availableStalls": 9,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 7,
    "amenities": [
      "parking",
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
    "openHours": "24小時",
    "rating": 4.1,
    "pricePerKwh": 4
  },
  {
    "id": "s40",
    "name": "松山ForMosa站",
    "network": "ForMosa EV",
    "address": "台北市松山區光復路147號",
    "city": "台北市",
    "lat": 25.0657,
    "lng": 121.5515,
    "totalStalls": 8,
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.1,
    "pricePerKwh": 5.8
  },
  {
    "id": "s41",
    "name": "南港中油充電站",
    "network": "台灣中油",
    "address": "台北市南港區和平路172號",
    "city": "台北市",
    "lat": 25.054,
    "lng": 121.6047,
    "totalStalls": 4,
    "availableStalls": 3,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 132,
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
      }
    ],
    "openHours": "24小時",
    "rating": 3.8,
    "pricePerKwh": 5.5
  },
  {
    "id": "s42",
    "name": "南港目的地充電站",
    "network": "自建",
    "address": "台北市南港區七賢路249號",
    "city": "台北市",
    "lat": 25.0535,
    "lng": 121.6081,
    "totalStalls": 2,
    "availableStalls": 1,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 22,
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
      }
    ],
    "openHours": "24小時",
    "rating": 3.8,
    "pricePerKwh": 4
  },
  {
    "id": "s43",
    "name": "南港裕電站",
    "network": "裕電能源",
    "address": "台北市南港區信義路651號",
    "city": "台北市",
    "lat": 25.048,
    "lng": 121.6126,
    "totalStalls": 6,
    "availableStalls": 2,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 134,
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
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.7,
    "pricePerKwh": 6
  },
  {
    "id": "s44",
    "name": "南港ForMosa站",
    "network": "ForMosa EV",
    "address": "台北市南港區長安路877號",
    "city": "台北市",
    "lat": 25.0503,
    "lng": 121.6102,
    "totalStalls": 5,
    "availableStalls": 3,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 228,
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.4,
    "pricePerKwh": 5.8
  },
  {
    "id": "s45",
    "name": "士林目的地充電站",
    "network": "自建",
    "address": "台北市士林區光明路934號",
    "city": "台北市",
    "lat": 25.1012,
    "lng": 121.5166,
    "totalStalls": 2,
    "availableStalls": 0,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 19,
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
    "pricePerKwh": 3
  },
  {
    "id": "s46",
    "name": "士林特斯拉超充站",
    "network": "Tesla",
    "address": "台北市士林區成功路546號",
    "city": "台北市",
    "lat": 25.1012,
    "lng": 121.5214,
    "totalStalls": 18,
    "availableStalls": 8,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 210,
    "amenities": [
      "restaurant",
      "shopping",
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
      },
      {
        "id": 17,
        "status": "in_use"
      },
      {
        "id": 18,
        "status": "faulted"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.8,
    "pricePerKwh": 7.5
  },
  {
    "id": "s47",
    "name": "士林目的地充電站",
    "network": "自建",
    "address": "台北市士林區彰化路520號",
    "city": "台北市",
    "lat": 25.0852,
    "lng": 121.5169,
    "totalStalls": 8,
    "availableStalls": 0,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 11,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.6,
    "pricePerKwh": 4
  },
  {
    "id": "s48",
    "name": "士林裕電站",
    "network": "裕電能源",
    "address": "台北市士林區和平路211號",
    "city": "台北市",
    "lat": 25.0885,
    "lng": 121.5219,
    "totalStalls": 6,
    "availableStalls": 5,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 211,
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
    "openHours": "07:00–23:00",
    "rating": 3.8,
    "pricePerKwh": 6
  },
  {
    "id": "s49",
    "name": "北投特斯拉超充站",
    "network": "Tesla",
    "address": "台北市北投區中正路745號",
    "city": "台北市",
    "lat": 25.1173,
    "lng": 121.4979,
    "totalStalls": 15,
    "availableStalls": 12,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 193,
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
        "status": "in_use"
      },
      {
        "id": 15,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.8,
    "pricePerKwh": 7.5
  },
  {
    "id": "s50",
    "name": "北投停車場充電站",
    "network": "停車場自建",
    "address": "台北市北投區大安路935號",
    "city": "台北市",
    "lat": 25.1197,
    "lng": 121.4964,
    "totalStalls": 9,
    "availableStalls": 2,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2",
      "CCS2"
    ],
    "maxKw": 13,
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
    "rating": 4.3,
    "pricePerKwh": 4
  },
  {
    "id": "s51",
    "name": "北投裕電站",
    "network": "裕電能源",
    "address": "台北市北投區成功路915號",
    "city": "台北市",
    "lat": 25.1173,
    "lng": 121.4952,
    "totalStalls": 6,
    "availableStalls": 3,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 240,
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
    "rating": 3.7,
    "pricePerKwh": 6.2
  },
  {
    "id": "s52",
    "name": "北投U-Power站",
    "network": "U-Power",
    "address": "台北市北投區十全路275號",
    "city": "台北市",
    "lat": 25.1035,
    "lng": 121.5057,
    "totalStalls": 7,
    "availableStalls": 1,
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
    "rating": 3.7,
    "pricePerKwh": 6.3
  },
  {
    "id": "s53",
    "name": "北投目的地充電站",
    "network": "自建",
    "address": "台北市北投區建國路883號",
    "city": "台北市",
    "lat": 25.1027,
    "lng": 121.504,
    "totalStalls": 4,
    "availableStalls": 0,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 12,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "24小時",
    "rating": 3.7,
    "pricePerKwh": 3
  },
  {
    "id": "s54",
    "name": "文山裕電站",
    "network": "裕電能源",
    "address": "台北市文山區光明路258號",
    "city": "台北市",
    "lat": 25.001,
    "lng": 121.569,
    "totalStalls": 7,
    "availableStalls": 5,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 245,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.2,
    "pricePerKwh": 6.2
  },
  {
    "id": "s55",
    "name": "文山目的地充電站",
    "network": "自建",
    "address": "台北市文山區中山路117號",
    "city": "台北市",
    "lat": 24.9995,
    "lng": 121.5689,
    "totalStalls": 4,
    "availableStalls": 0,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 11,
    "amenities": [
      "parking",
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
        "status": "faulted"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 3.5,
    "pricePerKwh": 4
  },
  {
    "id": "s56",
    "name": "文山台電充電站",
    "network": "台灣電力",
    "address": "台北市文山區和平路576號",
    "city": "台北市",
    "lat": 25.0021,
    "lng": 121.5672,
    "totalStalls": 4,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 122,
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
        "status": "faulted"
      }
    ],
    "openHours": "24小時",
    "rating": 4.7,
    "pricePerKwh": 5
  },
  {
    "id": "s57",
    "name": "文山目的地充電站",
    "network": "自建",
    "address": "台北市文山區大安路688號",
    "city": "台北市",
    "lat": 25.0149,
    "lng": 121.5613,
    "totalStalls": 4,
    "availableStalls": 0,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 12,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "24小時",
    "rating": 3.9,
    "pricePerKwh": 4
  },
  {
    "id": "s58",
    "name": "文山台電充電站",
    "network": "台灣電力",
    "address": "台北市文山區成功路973號",
    "city": "台北市",
    "lat": 25.0092,
    "lng": 121.5578,
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
      "parking",
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
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.2,
    "pricePerKwh": 4.8
  },
  {
    "id": "s59",
    "name": "文山ForMosa站",
    "network": "ForMosa EV",
    "address": "台北市文山區自強路489號",
    "city": "台北市",
    "lat": 25.0093,
    "lng": 121.5618,
    "totalStalls": 4,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 133,
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.3,
    "pricePerKwh": 5.8
  },
  {
    "id": "s60",
    "name": "板橋裕電站",
    "network": "裕電能源",
    "address": "新北市板橋區十全路830號",
    "city": "新北市",
    "lat": 25.0131,
    "lng": 121.4647,
    "totalStalls": 6,
    "availableStalls": 4,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 114,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.3,
    "pricePerKwh": 6
  },
  {
    "id": "s61",
    "name": "板橋台電充電站",
    "network": "台灣電力",
    "address": "新北市板橋區民權路569號",
    "city": "新北市",
    "lat": 25.014,
    "lng": 121.4648,
    "totalStalls": 4,
    "availableStalls": 3,
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
    "rating": 3.5,
    "pricePerKwh": 4.8
  },
  {
    "id": "s62",
    "name": "板橋中油充電站",
    "network": "台灣中油",
    "address": "新北市板橋區信義路585號",
    "city": "新北市",
    "lat": 25.0139,
    "lng": 121.4657,
    "totalStalls": 6,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 109,
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
    "openHours": "24小時",
    "rating": 3.8,
    "pricePerKwh": 5
  },
  {
    "id": "s63",
    "name": "板橋中油充電站",
    "network": "台灣中油",
    "address": "新北市板橋區民族路367號",
    "city": "新北市",
    "lat": 25.0092,
    "lng": 121.4571,
    "totalStalls": 3,
    "availableStalls": 2,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 105,
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
      }
    ],
    "openHours": "24小時",
    "rating": 3.6,
    "pricePerKwh": 5.5
  },
  {
    "id": "s64",
    "name": "板橋目的地充電站",
    "network": "自建",
    "address": "新北市板橋區忠孝路817號",
    "city": "新北市",
    "lat": 25.007,
    "lng": 121.4616,
    "totalStalls": 8,
    "availableStalls": 3,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 14,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4,
    "pricePerKwh": 4
  },
  {
    "id": "s65",
    "name": "新莊中油充電站",
    "network": "台灣中油",
    "address": "新北市新莊區仁愛路171號",
    "city": "新北市",
    "lat": 25.0327,
    "lng": 121.4468,
    "totalStalls": 3,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 98,
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
    "rating": 3.5,
    "pricePerKwh": 5.5
  },
  {
    "id": "s66",
    "name": "新莊特斯拉超充站",
    "network": "Tesla",
    "address": "新北市新莊區民權路378號",
    "city": "新北市",
    "lat": 25.0313,
    "lng": 121.4437,
    "totalStalls": 20,
    "availableStalls": 3,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 207,
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
      },
      {
        "id": 17,
        "status": "in_use"
      },
      {
        "id": 18,
        "status": "in_use"
      },
      {
        "id": 19,
        "status": "in_use"
      },
      {
        "id": 20,
        "status": "faulted"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4,
    "pricePerKwh": 7.5
  },
  {
    "id": "s67",
    "name": "新莊裕電站",
    "network": "裕電能源",
    "address": "新北市新莊區建國路681號",
    "city": "新北市",
    "lat": 25.0318,
    "lng": 121.4431,
    "totalStalls": 9,
    "availableStalls": 0,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 242,
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
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4,
    "pricePerKwh": 6
  },
  {
    "id": "s68",
    "name": "新莊台電充電站",
    "network": "台灣電力",
    "address": "新北市新莊區光明路852號",
    "city": "新北市",
    "lat": 25.0351,
    "lng": 121.4463,
    "totalStalls": 3,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 111,
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
    "openHours": "07:00–23:00",
    "rating": 3.9,
    "pricePerKwh": 5
  },
  {
    "id": "s69",
    "name": "新莊特斯拉超充站",
    "network": "Tesla",
    "address": "新北市新莊區中山路759號",
    "city": "新北市",
    "lat": 25.044,
    "lng": 121.4615,
    "totalStalls": 13,
    "availableStalls": 12,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 197,
    "amenities": [
      "shopping",
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
    "rating": 4.4,
    "pricePerKwh": 7
  },
  {
    "id": "s70",
    "name": "新莊台電充電站",
    "network": "台灣電力",
    "address": "新北市新莊區忠孝路951號",
    "city": "新北市",
    "lat": 25.0419,
    "lng": 121.4574,
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
    "rating": 3.8,
    "pricePerKwh": 5
  },
  {
    "id": "s71",
    "name": "中和台電充電站",
    "network": "台灣電力",
    "address": "新北市中和區中華路834號",
    "city": "新北市",
    "lat": 25.0004,
    "lng": 121.5,
    "totalStalls": 4,
    "availableStalls": 2,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 107,
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
      }
    ],
    "openHours": "24小時",
    "rating": 4,
    "pricePerKwh": 4.8
  },
  {
    "id": "s72",
    "name": "中和目的地充電站",
    "network": "自建",
    "address": "新北市中和區南投路491號",
    "city": "新北市",
    "lat": 25.001,
    "lng": 121.4977,
    "totalStalls": 6,
    "availableStalls": 2,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 7,
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
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 3.6,
    "pricePerKwh": 3
  },
  {
    "id": "s73",
    "name": "永和台電充電站",
    "network": "台灣電力",
    "address": "新北市永和區信義路355號",
    "city": "新北市",
    "lat": 24.986,
    "lng": 121.4977,
    "totalStalls": 6,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 106,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.6,
    "pricePerKwh": 5
  },
  {
    "id": "s74",
    "name": "永和停車場充電站",
    "network": "停車場自建",
    "address": "新北市永和區自強路120號",
    "city": "新北市",
    "lat": 24.9876,
    "lng": 121.497,
    "totalStalls": 9,
    "availableStalls": 4,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2",
      "CCS2"
    ],
    "maxKw": 22,
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
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.9,
    "pricePerKwh": 4.5
  },
  {
    "id": "s75",
    "name": "永和目的地充電站",
    "network": "自建",
    "address": "新北市永和區民族路748號",
    "city": "新北市",
    "lat": 24.988,
    "lng": 121.4961,
    "totalStalls": 6,
    "availableStalls": 2,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 14,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "24小時",
    "rating": 3.6,
    "pricePerKwh": 4
  },
  {
    "id": "s76",
    "name": "永和中油充電站",
    "network": "台灣中油",
    "address": "新北市永和區台灣大道488號",
    "city": "新北市",
    "lat": 24.985,
    "lng": 121.4977,
    "totalStalls": 2,
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
    "pricePerKwh": 5.5
  },
  {
    "id": "s77",
    "name": "三重裕電站",
    "network": "裕電能源",
    "address": "新北市三重區中正路593號",
    "city": "新北市",
    "lat": 25.0596,
    "lng": 121.4913,
    "totalStalls": 5,
    "availableStalls": 4,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 93,
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.7,
    "pricePerKwh": 6.2
  },
  {
    "id": "s78",
    "name": "三重停車場充電站",
    "network": "停車場自建",
    "address": "新北市三重區五福路865號",
    "city": "新北市",
    "lat": 25.059,
    "lng": 121.4911,
    "totalStalls": 5,
    "availableStalls": 4,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 13,
    "amenities": [
      "parking",
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
    "openHours": "07:00–23:00",
    "rating": 4.6,
    "pricePerKwh": 4.5
  },
  {
    "id": "s79",
    "name": "三重台電充電站",
    "network": "台灣電力",
    "address": "新北市三重區北平路577號",
    "city": "新北市",
    "lat": 25.0599,
    "lng": 121.4882,
    "totalStalls": 4,
    "availableStalls": 2,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 91,
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
    "rating": 4.4,
    "pricePerKwh": 5
  },
  {
    "id": "s80",
    "name": "蘆洲U-Power站",
    "network": "U-Power",
    "address": "新北市蘆洲區民族路847號",
    "city": "新北市",
    "lat": 25.0722,
    "lng": 121.4634,
    "totalStalls": 5,
    "availableStalls": 2,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 224,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.9,
    "pricePerKwh": 6.3
  },
  {
    "id": "s81",
    "name": "蘆洲目的地充電站",
    "network": "自建",
    "address": "新北市蘆洲區五福路835號",
    "city": "新北市",
    "lat": 25.0733,
    "lng": 121.4642,
    "totalStalls": 5,
    "availableStalls": 4,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 16,
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
    "openHours": "07:00–23:00",
    "rating": 3.6,
    "pricePerKwh": 4
  },
  {
    "id": "s82",
    "name": "蘆洲ForMosa站",
    "network": "ForMosa EV",
    "address": "新北市蘆洲區七賢路316號",
    "city": "新北市",
    "lat": 25.0746,
    "lng": 121.4605,
    "totalStalls": 8,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 131,
    "amenities": [
      "parking",
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
        "status": "faulted"
      }
    ],
    "openHours": "24小時",
    "rating": 4.7,
    "pricePerKwh": 5.5
  },
  {
    "id": "s83",
    "name": "新店ForMosa站",
    "network": "ForMosa EV",
    "address": "新北市新店區和平路710號",
    "city": "新北市",
    "lat": 24.9707,
    "lng": 121.5395,
    "totalStalls": 8,
    "availableStalls": 6,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 119,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.6,
    "pricePerKwh": 5.5
  },
  {
    "id": "s84",
    "name": "新店台電充電站",
    "network": "台灣電力",
    "address": "新北市新店區中山路930號",
    "city": "新北市",
    "lat": 24.9728,
    "lng": 121.5395,
    "totalStalls": 5,
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
        "status": "faulted"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.2,
    "pricePerKwh": 5
  },
  {
    "id": "s85",
    "name": "新店裕電站",
    "network": "裕電能源",
    "address": "新北市新店區自由路519號",
    "city": "新北市",
    "lat": 24.9722,
    "lng": 121.5408,
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
      "parking",
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
    "rating": 4.1,
    "pricePerKwh": 6.2
  },
  {
    "id": "s86",
    "name": "新店中油充電站",
    "network": "台灣中油",
    "address": "新北市新店區建國路740號",
    "city": "新北市",
    "lat": 24.9689,
    "lng": 121.5427,
    "totalStalls": 3,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 90,
    "amenities": [
      "parking",
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
    "openHours": "24小時",
    "rating": 4.2,
    "pricePerKwh": 5
  },
  {
    "id": "s87",
    "name": "新店中油充電站",
    "network": "台灣中油",
    "address": "新北市新店區十全路659號",
    "city": "新北市",
    "lat": 24.9622,
    "lng": 121.5289,
    "totalStalls": 5,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 142,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.1,
    "pricePerKwh": 5
  },
  {
    "id": "s88",
    "name": "新店台電充電站",
    "network": "台灣電力",
    "address": "新北市新店區光明路943號",
    "city": "新北市",
    "lat": 24.9615,
    "lng": 121.527,
    "totalStalls": 4,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 80,
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.6,
    "pricePerKwh": 5
  },
  {
    "id": "s89",
    "name": "新店停車場充電站",
    "network": "停車場自建",
    "address": "新北市新店區光復路434號",
    "city": "新北市",
    "lat": 24.9617,
    "lng": 121.5313,
    "totalStalls": 13,
    "availableStalls": 12,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 19,
    "amenities": [
      "parking",
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
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.9,
    "pricePerKwh": 4.5
  },
  {
    "id": "s90",
    "name": "新店ForMosa站",
    "network": "ForMosa EV",
    "address": "新北市新店區文心路456號",
    "city": "新北市",
    "lat": 24.9639,
    "lng": 121.53,
    "totalStalls": 6,
    "availableStalls": 4,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 124,
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
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.7,
    "pricePerKwh": 5.5
  },
  {
    "id": "s91",
    "name": "土城目的地充電站",
    "network": "自建",
    "address": "新北市土城區大安路982號",
    "city": "新北市",
    "lat": 24.9753,
    "lng": 121.4417,
    "totalStalls": 8,
    "availableStalls": 4,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 12,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "24小時",
    "rating": 3.5,
    "pricePerKwh": 4
  },
  {
    "id": "s92",
    "name": "土城特斯拉超充站",
    "network": "Tesla",
    "address": "新北市土城區民權路374號",
    "city": "新北市",
    "lat": 24.9762,
    "lng": 121.4416,
    "totalStalls": 12,
    "availableStalls": 4,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 238,
    "amenities": [
      "restaurant",
      "shopping",
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
    "rating": 3.9,
    "pricePerKwh": 6.8
  },
  {
    "id": "s93",
    "name": "樹林ForMosa站",
    "network": "ForMosa EV",
    "address": "新北市樹林區南京路894號",
    "city": "新北市",
    "lat": 24.9987,
    "lng": 121.4378,
    "totalStalls": 5,
    "availableStalls": 3,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 141,
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
      }
    ],
    "openHours": "24小時",
    "rating": 3.7,
    "pricePerKwh": 5.8
  },
  {
    "id": "s94",
    "name": "樹林目的地充電站",
    "network": "自建",
    "address": "新北市樹林區和平路916號",
    "city": "新北市",
    "lat": 25.0018,
    "lng": 121.4347,
    "totalStalls": 7,
    "availableStalls": 2,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 9,
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
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.6,
    "pricePerKwh": 4
  },
  {
    "id": "s95",
    "name": "樹林中油充電站",
    "network": "台灣中油",
    "address": "新北市樹林區南投路163號",
    "city": "新北市",
    "lat": 25.0009,
    "lng": 121.4369,
    "totalStalls": 6,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 115,
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
      }
    ],
    "openHours": "24小時",
    "rating": 4,
    "pricePerKwh": 5.5
  },
  {
    "id": "s96",
    "name": "汐止ForMosa站",
    "network": "ForMosa EV",
    "address": "新北市汐止區建國路171號",
    "city": "新北市",
    "lat": 25.0641,
    "lng": 121.6399,
    "totalStalls": 8,
    "availableStalls": 6,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 188,
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.6,
    "pricePerKwh": 5.8
  },
  {
    "id": "s97",
    "name": "汐止停車場充電站",
    "network": "停車場自建",
    "address": "新北市汐止區彰化路775號",
    "city": "新北市",
    "lat": 25.0638,
    "lng": 121.6378,
    "totalStalls": 4,
    "availableStalls": 0,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 17,
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
      }
    ],
    "openHours": "24小時",
    "rating": 4,
    "pricePerKwh": 3.5
  },
  {
    "id": "s98",
    "name": "汐止特斯拉超充站",
    "network": "Tesla",
    "address": "新北市汐止區仁愛路844號",
    "city": "新北市",
    "lat": 25.0621,
    "lng": 121.637,
    "totalStalls": 7,
    "availableStalls": 2,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 199,
    "amenities": [
      "restaurant",
      "shopping",
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
    "pricePerKwh": 7.5
  },
  {
    "id": "s99",
    "name": "汐止U-Power站",
    "network": "U-Power",
    "address": "新北市汐止區信義路919號",
    "city": "新北市",
    "lat": 25.066,
    "lng": 121.6359,
    "totalStalls": 5,
    "availableStalls": 1,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 217,
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
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.1,
    "pricePerKwh": 6.5
  },
  {
    "id": "s100",
    "name": "淡水U-Power站",
    "network": "U-Power",
    "address": "新北市淡水區十全路919號",
    "city": "新北市",
    "lat": 25.1712,
    "lng": 121.4449,
    "totalStalls": 7,
    "availableStalls": 2,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 123,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "24小時",
    "rating": 3.7,
    "pricePerKwh": 6.8
  },
  {
    "id": "s101",
    "name": "淡水裕電站",
    "network": "裕電能源",
    "address": "新北市淡水區大安路328號",
    "city": "新北市",
    "lat": 25.169,
    "lng": 121.4442,
    "totalStalls": 8,
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.2,
    "pricePerKwh": 6.2
  },
  {
    "id": "s102",
    "name": "淡水特斯拉超充站",
    "network": "Tesla",
    "address": "新北市淡水區南京路345號",
    "city": "新北市",
    "lat": 25.1716,
    "lng": 121.4425,
    "totalStalls": 12,
    "availableStalls": 9,
    "chargerType": "V4",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 304,
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
    "pricePerKwh": 7.5
  },
  {
    "id": "s103",
    "name": "淡水台電充電站",
    "network": "台灣電力",
    "address": "新北市淡水區民族路248號",
    "city": "新北市",
    "lat": 25.1728,
    "lng": 121.4414,
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
      "parking",
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.1,
    "pricePerKwh": 4.8
  },
  {
    "id": "s104",
    "name": "淡水ForMosa站",
    "network": "ForMosa EV",
    "address": "新北市淡水區中山路162號",
    "city": "新北市",
    "lat": 25.1579,
    "lng": 121.4473,
    "totalStalls": 4,
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
      }
    ],
    "openHours": "24小時",
    "rating": 4,
    "pricePerKwh": 5.5
  },
  {
    "id": "s105",
    "name": "淡水中油充電站",
    "network": "台灣中油",
    "address": "新北市淡水區民生路588號",
    "city": "新北市",
    "lat": 25.1575,
    "lng": 121.4505,
    "totalStalls": 6,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 93,
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
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.7,
    "pricePerKwh": 5
  },
  {
    "id": "s106",
    "name": "淡水特斯拉超充站",
    "network": "Tesla",
    "address": "新北市淡水區北平路171號",
    "city": "新北市",
    "lat": 25.1556,
    "lng": 121.4487,
    "totalStalls": 6,
    "availableStalls": 0,
    "chargerType": "V4",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 329,
    "amenities": [
      "restaurant",
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
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 3.5,
    "pricePerKwh": 7
  },
  {
    "id": "s107",
    "name": "淡水U-Power站",
    "network": "U-Power",
    "address": "新北市淡水區自由路113號",
    "city": "新北市",
    "lat": 25.1564,
    "lng": 121.4481,
    "totalStalls": 5,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 134,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.3,
    "pricePerKwh": 6.8
  },
  {
    "id": "s108",
    "name": "汐止停車場充電站",
    "network": "停車場自建",
    "address": "新北市汐止區五福路779號",
    "city": "新北市",
    "lat": 25.0173,
    "lng": 121.6552,
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
      "parking",
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
      }
    ],
    "openHours": "24小時",
    "rating": 3.6,
    "pricePerKwh": 4.5
  },
  {
    "id": "s109",
    "name": "汐止U-Power站",
    "network": "U-Power",
    "address": "新北市汐止區北平路644號",
    "city": "新北市",
    "lat": 25.0217,
    "lng": 121.6551,
    "totalStalls": 10,
    "availableStalls": 5,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 198,
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
    "rating": 4.4,
    "pricePerKwh": 6.3
  },
  {
    "id": "s110",
    "name": "汐止目的地充電站",
    "network": "自建",
    "address": "新北市汐止區南京路413號",
    "city": "新北市",
    "lat": 25.0215,
    "lng": 121.6515,
    "totalStalls": 5,
    "availableStalls": 1,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 19,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "24小時",
    "rating": 4,
    "pricePerKwh": 3
  },
  {
    "id": "s111",
    "name": "仁愛目的地充電站",
    "network": "自建",
    "address": "基隆市仁愛區七賢路731號",
    "city": "基隆市",
    "lat": 25.1312,
    "lng": 121.7419,
    "totalStalls": 8,
    "availableStalls": 1,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 18,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "24小時",
    "rating": 3.7,
    "pricePerKwh": 3
  },
  {
    "id": "s112",
    "name": "仁愛ForMosa站",
    "network": "ForMosa EV",
    "address": "基隆市仁愛區博愛路822號",
    "city": "基隆市",
    "lat": 25.1274,
    "lng": 121.7427,
    "totalStalls": 4,
    "availableStalls": 3,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 241,
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
    "openHours": "24小時",
    "rating": 3.7,
    "pricePerKwh": 5.8
  },
  {
    "id": "s113",
    "name": "中正停車場充電站",
    "network": "停車場自建",
    "address": "基隆市中正區光明路444號",
    "city": "基隆市",
    "lat": 25.1293,
    "lng": 121.7474,
    "totalStalls": 6,
    "availableStalls": 0,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 18,
    "amenities": [
      "parking",
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
        "status": "faulted"
      }
    ],
    "openHours": "24小時",
    "rating": 4.6,
    "pricePerKwh": 4.5
  },
  {
    "id": "s114",
    "name": "中正台電充電站",
    "network": "台灣電力",
    "address": "基隆市中正區中正路498號",
    "city": "基隆市",
    "lat": 25.128,
    "lng": 121.7435,
    "totalStalls": 6,
    "availableStalls": 2,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 138,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "24小時",
    "rating": 3.9,
    "pricePerKwh": 5
  },
  {
    "id": "s115",
    "name": "中正目的地充電站",
    "network": "自建",
    "address": "基隆市中正區民生路137號",
    "city": "基隆市",
    "lat": 25.1317,
    "lng": 121.7481,
    "totalStalls": 2,
    "availableStalls": 1,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 16,
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.1,
    "pricePerKwh": 4
  },
  {
    "id": "s116",
    "name": "暖暖裕電站",
    "network": "裕電能源",
    "address": "基隆市暖暖區五福路973號",
    "city": "基隆市",
    "lat": 25.1102,
    "lng": 121.7228,
    "totalStalls": 4,
    "availableStalls": 3,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 227,
    "amenities": [
      "parking",
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
        "status": "faulted"
      }
    ],
    "openHours": "24小時",
    "rating": 4.7,
    "pricePerKwh": 6
  },
  {
    "id": "s117",
    "name": "暖暖目的地充電站",
    "network": "自建",
    "address": "基隆市暖暖區長安路769號",
    "city": "基隆市",
    "lat": 25.1115,
    "lng": 121.723,
    "totalStalls": 8,
    "availableStalls": 4,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 13,
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.2,
    "pricePerKwh": 3
  },
  {
    "id": "s118",
    "name": "暖暖中油充電站",
    "network": "台灣中油",
    "address": "基隆市暖暖區中正路662號",
    "city": "基隆市",
    "lat": 25.1095,
    "lng": 121.7227,
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.8,
    "pricePerKwh": 5.5
  },
  {
    "id": "s119",
    "name": "七堵U-Power站",
    "network": "U-Power",
    "address": "基隆市七堵區五福路750號",
    "city": "基隆市",
    "lat": 25.1444,
    "lng": 121.7596,
    "totalStalls": 4,
    "availableStalls": 2,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 207,
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
    "openHours": "24小時",
    "rating": 3.8,
    "pricePerKwh": 6.3
  },
  {
    "id": "s120",
    "name": "七堵中油充電站",
    "network": "台灣中油",
    "address": "基隆市七堵區復興路897號",
    "city": "基隆市",
    "lat": 25.1453,
    "lng": 121.7605,
    "totalStalls": 2,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 143,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 3.5,
    "pricePerKwh": 5
  },
  {
    "id": "s121",
    "name": "七堵目的地充電站",
    "network": "自建",
    "address": "基隆市七堵區北平路360號",
    "city": "基隆市",
    "lat": 25.1485,
    "lng": 121.7609,
    "totalStalls": 5,
    "availableStalls": 0,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 13,
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
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 3.6,
    "pricePerKwh": 4
  },
  {
    "id": "s122",
    "name": "中壢U-Power站",
    "network": "U-Power",
    "address": "桃園市中壢區博愛路461號",
    "city": "桃園市",
    "lat": 24.9747,
    "lng": 121.226,
    "totalStalls": 5,
    "availableStalls": 4,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 244,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "24小時",
    "rating": 3.7,
    "pricePerKwh": 6.5
  },
  {
    "id": "s123",
    "name": "中壢裕電站",
    "network": "裕電能源",
    "address": "桃園市中壢區成功路696號",
    "city": "桃園市",
    "lat": 24.98,
    "lng": 121.2258,
    "totalStalls": 5,
    "availableStalls": 0,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 185,
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
    "openHours": "24小時",
    "rating": 3.8,
    "pricePerKwh": 6
  },
  {
    "id": "s124",
    "name": "中壢中油充電站",
    "network": "台灣中油",
    "address": "桃園市中壢區仁愛路982號",
    "city": "桃園市",
    "lat": 24.9778,
    "lng": 121.2257,
    "totalStalls": 4,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 143,
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
      }
    ],
    "openHours": "24小時",
    "rating": 3.5,
    "pricePerKwh": 5
  },
  {
    "id": "s125",
    "name": "中壢停車場充電站",
    "network": "停車場自建",
    "address": "桃園市中壢區文心路884號",
    "city": "桃園市",
    "lat": 24.9768,
    "lng": 121.2287,
    "totalStalls": 4,
    "availableStalls": 2,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2",
      "CCS2"
    ],
    "maxKw": 15,
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
    "openHours": "24小時",
    "rating": 4.3,
    "pricePerKwh": 4.5
  },
  {
    "id": "s126",
    "name": "中壢台電充電站",
    "network": "台灣電力",
    "address": "桃園市中壢區建國路688號",
    "city": "桃園市",
    "lat": 24.9592,
    "lng": 121.2251,
    "totalStalls": 5,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 135,
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
    "openHours": "24小時",
    "rating": 4.7,
    "pricePerKwh": 4.8
  },
  {
    "id": "s127",
    "name": "中壢特斯拉超充站",
    "network": "Tesla",
    "address": "桃園市中壢區文心路819號",
    "city": "桃園市",
    "lat": 24.9609,
    "lng": 121.2269,
    "totalStalls": 15,
    "availableStalls": 14,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 187,
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
    "rating": 4.3,
    "pricePerKwh": 7
  },
  {
    "id": "s128",
    "name": "中壢U-Power站",
    "network": "U-Power",
    "address": "桃園市中壢區復興路934號",
    "city": "桃園市",
    "lat": 24.9633,
    "lng": 121.2239,
    "totalStalls": 6,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 88,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.7,
    "pricePerKwh": 6.8
  },
  {
    "id": "s129",
    "name": "蘆竹裕電站",
    "network": "裕電能源",
    "address": "桃園市蘆竹區自強路765號",
    "city": "桃園市",
    "lat": 24.9933,
    "lng": 121.291,
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
    "openHours": "24小時",
    "rating": 4.2,
    "pricePerKwh": 6.2
  },
  {
    "id": "s130",
    "name": "蘆竹目的地充電站",
    "network": "自建",
    "address": "桃園市蘆竹區北平路830號",
    "city": "桃園市",
    "lat": 24.9961,
    "lng": 121.2904,
    "totalStalls": 7,
    "availableStalls": 6,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 16,
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
    "openHours": "24小時",
    "rating": 4.4,
    "pricePerKwh": 3
  },
  {
    "id": "s131",
    "name": "蘆竹特斯拉超充站",
    "network": "Tesla",
    "address": "桃園市蘆竹區信義路893號",
    "city": "桃園市",
    "lat": 24.9918,
    "lng": 121.2892,
    "totalStalls": 18,
    "availableStalls": 10,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 181,
    "amenities": [
      "restaurant",
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
      },
      {
        "id": 17,
        "status": "in_use"
      },
      {
        "id": 18,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.2,
    "pricePerKwh": 7.5
  },
  {
    "id": "s132",
    "name": "蘆竹目的地充電站",
    "network": "自建",
    "address": "桃園市蘆竹區北平路190號",
    "city": "桃園市",
    "lat": 25.0436,
    "lng": 121.2888,
    "totalStalls": 7,
    "availableStalls": 6,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 10,
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.3,
    "pricePerKwh": 3
  },
  {
    "id": "s133",
    "name": "蘆竹特斯拉超充站",
    "network": "Tesla",
    "address": "桃園市蘆竹區自強路739號",
    "city": "桃園市",
    "lat": 25.0433,
    "lng": 121.2864,
    "totalStalls": 17,
    "availableStalls": 8,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 183,
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
      },
      {
        "id": 17,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.8,
    "pricePerKwh": 7
  },
  {
    "id": "s134",
    "name": "蘆竹台電充電站",
    "network": "台灣電力",
    "address": "桃園市蘆竹區長安路450號",
    "city": "桃園市",
    "lat": 25.0413,
    "lng": 121.2905,
    "totalStalls": 4,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 115,
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
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.8,
    "pricePerKwh": 5
  },
  {
    "id": "s135",
    "name": "蘆竹裕電站",
    "network": "裕電能源",
    "address": "桃園市蘆竹區光復路673號",
    "city": "桃園市",
    "lat": 25.0422,
    "lng": 121.2913,
    "totalStalls": 5,
    "availableStalls": 2,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 217,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.6,
    "pricePerKwh": 6
  },
  {
    "id": "s136",
    "name": "桃園U-Power站",
    "network": "U-Power",
    "address": "桃園市桃園區民生路384號",
    "city": "桃園市",
    "lat": 24.9923,
    "lng": 121.2993,
    "totalStalls": 6,
    "availableStalls": 2,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 183,
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
      }
    ],
    "openHours": "24小時",
    "rating": 5,
    "pricePerKwh": 6.8
  },
  {
    "id": "s137",
    "name": "桃園台電充電站",
    "network": "台灣電力",
    "address": "桃園市桃園區成功路739號",
    "city": "桃園市",
    "lat": 24.9924,
    "lng": 121.3038,
    "totalStalls": 3,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 83,
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
    "openHours": "24小時",
    "rating": 5,
    "pricePerKwh": 5
  },
  {
    "id": "s138",
    "name": "桃園停車場充電站",
    "network": "停車場自建",
    "address": "桃園市桃園區文化路774號",
    "city": "桃園市",
    "lat": 24.9942,
    "lng": 121.2991,
    "totalStalls": 9,
    "availableStalls": 1,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 11,
    "amenities": [],
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
    "openHours": "07:00–23:00",
    "rating": 4.9,
    "pricePerKwh": 3.5
  },
  {
    "id": "s139",
    "name": "桃園ForMosa站",
    "network": "ForMosa EV",
    "address": "桃園市桃園區文心路599號",
    "city": "桃園市",
    "lat": 24.9944,
    "lng": 121.3037,
    "totalStalls": 8,
    "availableStalls": 6,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 149,
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
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.8,
    "pricePerKwh": 5.5
  },
  {
    "id": "s140",
    "name": "桃園中油充電站",
    "network": "台灣中油",
    "address": "桃園市桃園區建國路276號",
    "city": "桃園市",
    "lat": 24.979,
    "lng": 121.314,
    "totalStalls": 3,
    "availableStalls": 1,
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
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.3,
    "pricePerKwh": 5
  },
  {
    "id": "s141",
    "name": "桃園停車場充電站",
    "network": "停車場自建",
    "address": "桃園市桃園區仁愛路947號",
    "city": "桃園市",
    "lat": 24.9821,
    "lng": 121.3141,
    "totalStalls": 15,
    "availableStalls": 4,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 14,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.8,
    "pricePerKwh": 4
  },
  {
    "id": "s142",
    "name": "桃園台電充電站",
    "network": "台灣電力",
    "address": "桃園市桃園區信義路892號",
    "city": "桃園市",
    "lat": 24.9813,
    "lng": 121.3123,
    "totalStalls": 2,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 87,
    "amenities": [],
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
    "rating": 4.8,
    "pricePerKwh": 4.8
  },
  {
    "id": "s143",
    "name": "桃園目的地充電站",
    "network": "自建",
    "address": "桃園市桃園區中華路685號",
    "city": "桃園市",
    "lat": 24.9812,
    "lng": 121.3121,
    "totalStalls": 4,
    "availableStalls": 1,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 15,
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.8,
    "pricePerKwh": 3
  },
  {
    "id": "s144",
    "name": "大園特斯拉超充站",
    "network": "Tesla",
    "address": "桃園市大園區光明路749號",
    "city": "桃園市",
    "lat": 25.0802,
    "lng": 121.2326,
    "totalStalls": 15,
    "availableStalls": 5,
    "chargerType": "V4",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 343,
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
    "rating": 4.3,
    "pricePerKwh": 7.5
  },
  {
    "id": "s145",
    "name": "大園中油充電站",
    "network": "台灣中油",
    "address": "桃園市大園區民族路774號",
    "city": "桃園市",
    "lat": 25.0748,
    "lng": 121.2337,
    "totalStalls": 4,
    "availableStalls": 0,
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
    "rating": 3.5,
    "pricePerKwh": 5.5
  },
  {
    "id": "s146",
    "name": "大園停車場充電站",
    "network": "停車場自建",
    "address": "桃園市大園區北平路311號",
    "city": "桃園市",
    "lat": 25.0754,
    "lng": 121.2316,
    "totalStalls": 7,
    "availableStalls": 3,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 19,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "24小時",
    "rating": 3.9,
    "pricePerKwh": 4.5
  },
  {
    "id": "s147",
    "name": "平停車場充電站",
    "network": "停車場自建",
    "address": "桃園市平鎮區民生路979號",
    "city": "桃園市",
    "lat": 24.8797,
    "lng": 121.2219,
    "totalStalls": 6,
    "availableStalls": 1,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 20,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.6,
    "pricePerKwh": 4.5
  },
  {
    "id": "s148",
    "name": "平特斯拉超充站",
    "network": "Tesla",
    "address": "桃園市平鎮區台灣大道384號",
    "city": "桃園市",
    "lat": 24.882,
    "lng": 121.2194,
    "totalStalls": 18,
    "availableStalls": 16,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 213,
    "amenities": [
      "restaurant",
      "shopping",
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
        "status": "available"
      },
      {
        "id": 17,
        "status": "in_use"
      },
      {
        "id": 18,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.7,
    "pricePerKwh": 6.8
  },
  {
    "id": "s149",
    "name": "八德台電充電站",
    "network": "台灣電力",
    "address": "桃園市八德區南投路364號",
    "city": "桃園市",
    "lat": 24.9166,
    "lng": 121.2364,
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
    "rating": 3.8,
    "pricePerKwh": 5
  },
  {
    "id": "s150",
    "name": "八德中油充電站",
    "network": "台灣中油",
    "address": "桃園市八德區博愛路115號",
    "city": "桃園市",
    "lat": 24.9159,
    "lng": 121.2381,
    "totalStalls": 6,
    "availableStalls": 3,
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
    "openHours": "07:00–23:00",
    "rating": 4.8,
    "pricePerKwh": 5
  },
  {
    "id": "s151",
    "name": "八德特斯拉超充站",
    "network": "Tesla",
    "address": "桃園市八德區成功路269號",
    "city": "桃園市",
    "lat": 24.9133,
    "lng": 121.2368,
    "totalStalls": 9,
    "availableStalls": 8,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 188,
    "amenities": [
      "restaurant",
      "shopping",
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
        "status": "available"
      },
      {
        "id": 8,
        "status": "available"
      },
      {
        "id": 9,
        "status": "faulted"
      }
    ],
    "openHours": "24小時",
    "rating": 3.7,
    "pricePerKwh": 7
  },
  {
    "id": "s152",
    "name": "楊梅停車場充電站",
    "network": "停車場自建",
    "address": "桃園市楊梅區彰化路835號",
    "city": "桃園市",
    "lat": 24.9419,
    "lng": 121.1797,
    "totalStalls": 4,
    "availableStalls": 3,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 22,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.1,
    "pricePerKwh": 4.5
  },
  {
    "id": "s153",
    "name": "楊梅特斯拉超充站",
    "network": "Tesla",
    "address": "桃園市楊梅區南京路685號",
    "city": "桃園市",
    "lat": 24.9428,
    "lng": 121.1809,
    "totalStalls": 8,
    "availableStalls": 4,
    "chargerType": "V4",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 307,
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
        "status": "faulted"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.9,
    "pricePerKwh": 7
  },
  {
    "id": "s154",
    "name": "龜山中油充電站",
    "network": "台灣中油",
    "address": "桃園市龜山區建國路394號",
    "city": "桃園市",
    "lat": 25.0617,
    "lng": 121.3601,
    "totalStalls": 6,
    "availableStalls": 2,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 106,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.2,
    "pricePerKwh": 5.5
  },
  {
    "id": "s155",
    "name": "龜山U-Power站",
    "network": "U-Power",
    "address": "桃園市龜山區南京路241號",
    "city": "桃園市",
    "lat": 25.0633,
    "lng": 121.3578,
    "totalStalls": 9,
    "availableStalls": 0,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 237,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.4,
    "pricePerKwh": 6.8
  },
  {
    "id": "s156",
    "name": "東目的地充電站",
    "network": "自建",
    "address": "新竹市東區復興路785號",
    "city": "新竹市",
    "lat": 24.8031,
    "lng": 120.9694,
    "totalStalls": 5,
    "availableStalls": 2,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 20,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.8,
    "pricePerKwh": 4
  },
  {
    "id": "s157",
    "name": "東裕電站",
    "network": "裕電能源",
    "address": "新竹市東區大安路526號",
    "city": "新竹市",
    "lat": 24.8003,
    "lng": 120.9728,
    "totalStalls": 9,
    "availableStalls": 4,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 150,
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
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.7,
    "pricePerKwh": 5.8
  },
  {
    "id": "s158",
    "name": "北台電充電站",
    "network": "台灣電力",
    "address": "新竹市北區建國路520號",
    "city": "新竹市",
    "lat": 24.8191,
    "lng": 120.9705,
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
      "parking",
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
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.6,
    "pricePerKwh": 4.8
  },
  {
    "id": "s159",
    "name": "北目的地充電站",
    "network": "自建",
    "address": "新竹市北區北平路241號",
    "city": "新竹市",
    "lat": 24.8183,
    "lng": 120.9674,
    "totalStalls": 5,
    "availableStalls": 3,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 11,
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.2,
    "pricePerKwh": 4
  },
  {
    "id": "s160",
    "name": "北裕電站",
    "network": "裕電能源",
    "address": "新竹市北區大安路949號",
    "city": "新竹市",
    "lat": 24.82,
    "lng": 120.9691,
    "totalStalls": 7,
    "availableStalls": 4,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 83,
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.5,
    "pricePerKwh": 5.8
  },
  {
    "id": "s161",
    "name": "北停車場充電站",
    "network": "停車場自建",
    "address": "新竹市北區七賢路353號",
    "city": "新竹市",
    "lat": 24.8181,
    "lng": 120.9706,
    "totalStalls": 12,
    "availableStalls": 9,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 10,
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
    "openHours": "07:00–23:00",
    "rating": 4.9,
    "pricePerKwh": 4
  },
  {
    "id": "s162",
    "name": "香山特斯拉超充站",
    "network": "Tesla",
    "address": "新竹市香山區光復路496號",
    "city": "新竹市",
    "lat": 24.7884,
    "lng": 120.9535,
    "totalStalls": 10,
    "availableStalls": 8,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 210,
    "amenities": [
      "restaurant",
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
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.8,
    "pricePerKwh": 7.5
  },
  {
    "id": "s163",
    "name": "香山裕電站",
    "network": "裕電能源",
    "address": "新竹市香山區建國路219號",
    "city": "新竹市",
    "lat": 24.7887,
    "lng": 120.9566,
    "totalStalls": 7,
    "availableStalls": 4,
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
    "pricePerKwh": 6.2
  },
  {
    "id": "s164",
    "name": "香山台電充電站",
    "network": "台灣電力",
    "address": "新竹市香山區彰化路151號",
    "city": "新竹市",
    "lat": 24.7879,
    "lng": 120.9538,
    "totalStalls": 5,
    "availableStalls": 4,
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
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.9,
    "pricePerKwh": 4.8
  },
  {
    "id": "s165",
    "name": "竹北ForMosa站",
    "network": "ForMosa EV",
    "address": "新竹縣竹北市文化路865號",
    "city": "新竹縣",
    "lat": 24.8367,
    "lng": 121.0069,
    "totalStalls": 5,
    "availableStalls": 3,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 125,
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
      }
    ],
    "openHours": "24小時",
    "rating": 3.7,
    "pricePerKwh": 5.5
  },
  {
    "id": "s166",
    "name": "竹北U-Power站",
    "network": "U-Power",
    "address": "新竹縣竹北市彰化路180號",
    "city": "新竹縣",
    "lat": 24.8386,
    "lng": 121.0062,
    "totalStalls": 6,
    "availableStalls": 1,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 182,
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
        "status": "faulted"
      }
    ],
    "openHours": "24小時",
    "rating": 4.8,
    "pricePerKwh": 6.8
  },
  {
    "id": "s167",
    "name": "竹北中油充電站",
    "network": "台灣中油",
    "address": "新竹縣竹北市大安路890號",
    "city": "新竹縣",
    "lat": 24.8413,
    "lng": 121.0018,
    "totalStalls": 6,
    "availableStalls": 2,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 106,
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
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4,
    "pricePerKwh": 5
  },
  {
    "id": "s168",
    "name": "竹北目的地充電站",
    "network": "自建",
    "address": "新竹縣竹北市忠孝路854號",
    "city": "新竹縣",
    "lat": 24.8413,
    "lng": 121.0025,
    "totalStalls": 4,
    "availableStalls": 3,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 12,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.1,
    "pricePerKwh": 4
  },
  {
    "id": "s169",
    "name": "竹北特斯拉超充站",
    "network": "Tesla",
    "address": "新竹縣竹北市仁愛路993號",
    "city": "新竹縣",
    "lat": 24.8242,
    "lng": 121.0157,
    "totalStalls": 8,
    "availableStalls": 5,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 213,
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
      },
      {
        "id": 8,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.6,
    "pricePerKwh": 6.8
  },
  {
    "id": "s170",
    "name": "竹北目的地充電站",
    "network": "自建",
    "address": "新竹縣竹北市建國路146號",
    "city": "新竹縣",
    "lat": 24.8261,
    "lng": 121.0121,
    "totalStalls": 5,
    "availableStalls": 2,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 15,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.2,
    "pricePerKwh": 4
  },
  {
    "id": "s171",
    "name": "竹北裕電站",
    "network": "裕電能源",
    "address": "新竹縣竹北市民權路478號",
    "city": "新竹縣",
    "lat": 24.8264,
    "lng": 121.0124,
    "totalStalls": 8,
    "availableStalls": 2,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 148,
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
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 3.9,
    "pricePerKwh": 5.8
  },
  {
    "id": "s172",
    "name": "竹北U-Power站",
    "network": "U-Power",
    "address": "新竹縣竹北市南京路175號",
    "city": "新竹縣",
    "lat": 24.8233,
    "lng": 121.0135,
    "totalStalls": 6,
    "availableStalls": 4,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 246,
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
    "openHours": "24小時",
    "rating": 4.5,
    "pricePerKwh": 6.3
  },
  {
    "id": "s173",
    "name": "竹北特斯拉超充站",
    "network": "Tesla",
    "address": "新竹縣竹北市台灣大道461號",
    "city": "新竹縣",
    "lat": 24.8155,
    "lng": 121.004,
    "totalStalls": 8,
    "availableStalls": 0,
    "chargerType": "V4",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 334,
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
        "status": "faulted"
      }
    ],
    "openHours": "24小時",
    "rating": 3.9,
    "pricePerKwh": 7
  },
  {
    "id": "s174",
    "name": "竹北U-Power站",
    "network": "U-Power",
    "address": "新竹縣竹北市中山路328號",
    "city": "新竹縣",
    "lat": 24.8146,
    "lng": 121.0016,
    "totalStalls": 6,
    "availableStalls": 0,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 189,
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
    "openHours": "24小時",
    "rating": 3.6,
    "pricePerKwh": 6.3
  },
  {
    "id": "s175",
    "name": "竹北中油充電站",
    "network": "台灣中油",
    "address": "新竹縣竹北市七賢路730號",
    "city": "新竹縣",
    "lat": 24.8152,
    "lng": 121.0049,
    "totalStalls": 6,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 93,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.7,
    "pricePerKwh": 5
  },
  {
    "id": "s176",
    "name": "竹東特斯拉超充站",
    "network": "Tesla",
    "address": "新竹縣竹東鎮民權路467號",
    "city": "新竹縣",
    "lat": 24.7004,
    "lng": 121.003,
    "totalStalls": 16,
    "availableStalls": 9,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 246,
    "amenities": [
      "restaurant",
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
    "openHours": "07:00–23:00",
    "rating": 4.4,
    "pricePerKwh": 7.5
  },
  {
    "id": "s177",
    "name": "竹東中油充電站",
    "network": "台灣中油",
    "address": "新竹縣竹東鎮和平路986號",
    "city": "新竹縣",
    "lat": 24.6982,
    "lng": 121.0018,
    "totalStalls": 3,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 111,
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
    "rating": 4.3,
    "pricePerKwh": 5.5
  },
  {
    "id": "s178",
    "name": "湖口U-Power站",
    "network": "U-Power",
    "address": "新竹縣湖口鄉自強路948號",
    "city": "新竹縣",
    "lat": 24.8968,
    "lng": 121.0391,
    "totalStalls": 8,
    "availableStalls": 2,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 225,
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
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.6,
    "pricePerKwh": 6.3
  },
  {
    "id": "s179",
    "name": "湖口台電充電站",
    "network": "台灣電力",
    "address": "新竹縣湖口鄉光復路897號",
    "city": "新竹縣",
    "lat": 24.8965,
    "lng": 121.0423,
    "totalStalls": 6,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 91,
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
    "openHours": "07:00–23:00",
    "rating": 3.8,
    "pricePerKwh": 4.8
  },
  {
    "id": "s180",
    "name": "竹南ForMosa站",
    "network": "ForMosa EV",
    "address": "苗栗縣竹南鎮民生路517號",
    "city": "苗栗縣",
    "lat": 24.6821,
    "lng": 120.8723,
    "totalStalls": 5,
    "availableStalls": 2,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 129,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "24小時",
    "rating": 3.7,
    "pricePerKwh": 5.5
  },
  {
    "id": "s181",
    "name": "竹南裕電站",
    "network": "裕電能源",
    "address": "苗栗縣竹南鎮長安路388號",
    "city": "苗栗縣",
    "lat": 24.685,
    "lng": 120.8723,
    "totalStalls": 8,
    "availableStalls": 2,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 92,
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
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.1,
    "pricePerKwh": 6
  },
  {
    "id": "s182",
    "name": "頭份台電充電站",
    "network": "台灣電力",
    "address": "苗栗縣頭份市文化路356號",
    "city": "苗栗縣",
    "lat": 24.6918,
    "lng": 120.9026,
    "totalStalls": 6,
    "availableStalls": 3,
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
        "status": "available"
      },
      {
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
    "id": "s183",
    "name": "頭份裕電站",
    "network": "裕電能源",
    "address": "苗栗縣頭份市光明路870號",
    "city": "苗栗縣",
    "lat": 24.6911,
    "lng": 120.8989,
    "totalStalls": 5,
    "availableStalls": 2,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 83,
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
      }
    ],
    "openHours": "24小時",
    "rating": 3.6,
    "pricePerKwh": 6
  },
  {
    "id": "s184",
    "name": "頭份ForMosa站",
    "network": "ForMosa EV",
    "address": "苗栗縣頭份市北平路159號",
    "city": "苗栗縣",
    "lat": 24.6874,
    "lng": 120.8991,
    "totalStalls": 5,
    "availableStalls": 3,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 87,
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.2,
    "pricePerKwh": 5.8
  },
  {
    "id": "s185",
    "name": "頭份特斯拉超充站",
    "network": "Tesla",
    "address": "苗栗縣頭份市北平路935號",
    "city": "苗栗縣",
    "lat": 24.6883,
    "lng": 120.9015,
    "totalStalls": 20,
    "availableStalls": 18,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 201,
    "amenities": [
      "restaurant",
      "shopping",
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
        "status": "available"
      },
      {
        "id": 17,
        "status": "available"
      },
      {
        "id": 18,
        "status": "available"
      },
      {
        "id": 19,
        "status": "in_use"
      },
      {
        "id": 20,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 3.6,
    "pricePerKwh": 7
  },
  {
    "id": "s186",
    "name": "苗栗裕電站",
    "network": "裕電能源",
    "address": "苗栗縣苗栗市和平路284號",
    "city": "苗栗縣",
    "lat": 24.562,
    "lng": 120.8183,
    "totalStalls": 6,
    "availableStalls": 3,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 100,
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
    "rating": 4.3,
    "pricePerKwh": 6
  },
  {
    "id": "s187",
    "name": "苗栗U-Power站",
    "network": "U-Power",
    "address": "苗栗縣苗栗市長安路448號",
    "city": "苗栗縣",
    "lat": 24.5634,
    "lng": 120.818,
    "totalStalls": 8,
    "availableStalls": 2,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 221,
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.1,
    "pricePerKwh": 6.5
  },
  {
    "id": "s188",
    "name": "通霄台電充電站",
    "network": "台灣電力",
    "address": "苗栗縣通霄鎮十全路254號",
    "city": "苗栗縣",
    "lat": 24.4789,
    "lng": 120.6788,
    "totalStalls": 6,
    "availableStalls": 4,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 88,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.1,
    "pricePerKwh": 4.8
  },
  {
    "id": "s189",
    "name": "通霄中油充電站",
    "network": "台灣中油",
    "address": "苗栗縣通霄鎮建國路153號",
    "city": "苗栗縣",
    "lat": 24.4799,
    "lng": 120.6822,
    "totalStalls": 3,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 146,
    "amenities": [
      "parking",
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
    "rating": 3.8,
    "pricePerKwh": 5.5
  },
  {
    "id": "s190",
    "name": "通霄停車場充電站",
    "network": "停車場自建",
    "address": "苗栗縣通霄鎮復興路777號",
    "city": "苗栗縣",
    "lat": 24.4796,
    "lng": 120.6789,
    "totalStalls": 7,
    "availableStalls": 3,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 21,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.7,
    "pricePerKwh": 4.5
  },
  {
    "id": "s191",
    "name": "苑裡U-Power站",
    "network": "U-Power",
    "address": "苗栗縣苑裡鎮自由路896號",
    "city": "苗栗縣",
    "lat": 24.3625,
    "lng": 120.596,
    "totalStalls": 9,
    "availableStalls": 2,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 236,
    "amenities": [
      "parking",
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
        "status": "faulted"
      }
    ],
    "openHours": "24小時",
    "rating": 4.3,
    "pricePerKwh": 6.3
  },
  {
    "id": "s192",
    "name": "苑裡特斯拉超充站",
    "network": "Tesla",
    "address": "苗栗縣苑裡鎮南投路672號",
    "city": "苗栗縣",
    "lat": 24.3596,
    "lng": 120.5987,
    "totalStalls": 19,
    "availableStalls": 4,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 187,
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
      },
      {
        "id": 17,
        "status": "in_use"
      },
      {
        "id": 18,
        "status": "in_use"
      },
      {
        "id": 19,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.7,
    "pricePerKwh": 7
  },
  {
    "id": "s193",
    "name": "苑裡停車場充電站",
    "network": "停車場自建",
    "address": "苗栗縣苑裡鎮中山路846號",
    "city": "苗栗縣",
    "lat": 24.3642,
    "lng": 120.6004,
    "totalStalls": 16,
    "availableStalls": 12,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2",
      "CCS2"
    ],
    "maxKw": 18,
    "amenities": [
      "parking",
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
    "openHours": "24小時",
    "rating": 3.7,
    "pricePerKwh": 4
  },
  {
    "id": "s194",
    "name": "苑裡ForMosa站",
    "network": "ForMosa EV",
    "address": "苗栗縣苑裡鎮成功路655號",
    "city": "苗栗縣",
    "lat": 24.359,
    "lng": 120.5982,
    "totalStalls": 7,
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
    "rating": 3.8,
    "pricePerKwh": 5.5
  },
  {
    "id": "s195",
    "name": "西屯停車場充電站",
    "network": "停車場自建",
    "address": "台中市西屯區民權路325號",
    "city": "台中市",
    "lat": 24.1613,
    "lng": 120.6503,
    "totalStalls": 5,
    "availableStalls": 3,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2",
      "CCS2"
    ],
    "maxKw": 20,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.4,
    "pricePerKwh": 4
  },
  {
    "id": "s196",
    "name": "西屯裕電站",
    "network": "裕電能源",
    "address": "台中市西屯區光明路194號",
    "city": "台中市",
    "lat": 24.1663,
    "lng": 120.6489,
    "totalStalls": 6,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 146,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 3.5,
    "pricePerKwh": 5.8
  },
  {
    "id": "s197",
    "name": "西屯U-Power站",
    "network": "U-Power",
    "address": "台中市西屯區長安路975號",
    "city": "台中市",
    "lat": 24.1642,
    "lng": 120.6482,
    "totalStalls": 4,
    "availableStalls": 0,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 234,
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.1,
    "pricePerKwh": 6.3
  },
  {
    "id": "s198",
    "name": "西屯台電充電站",
    "network": "台灣電力",
    "address": "台中市西屯區台灣大道373號",
    "city": "台中市",
    "lat": 24.159,
    "lng": 120.649,
    "totalStalls": 3,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 99,
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
    "openHours": "06:00–22:00",
    "rating": 4.6,
    "pricePerKwh": 5
  },
  {
    "id": "s199",
    "name": "西屯U-Power站",
    "network": "U-Power",
    "address": "台中市西屯區十全路333號",
    "city": "台中市",
    "lat": 24.1583,
    "lng": 120.6451,
    "totalStalls": 8,
    "availableStalls": 5,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 181,
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.3,
    "pricePerKwh": 6.8
  },
  {
    "id": "s200",
    "name": "北屯停車場充電站",
    "network": "停車場自建",
    "address": "台中市北屯區大安路746號",
    "city": "台中市",
    "lat": 24.1754,
    "lng": 120.6868,
    "totalStalls": 10,
    "availableStalls": 1,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 21,
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
    "rating": 4.9,
    "pricePerKwh": 4
  },
  {
    "id": "s201",
    "name": "北屯特斯拉超充站",
    "network": "Tesla",
    "address": "台中市北屯區文心路214號",
    "city": "台中市",
    "lat": 24.1743,
    "lng": 120.6883,
    "totalStalls": 6,
    "availableStalls": 4,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 201,
    "amenities": [
      "restaurant",
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
      }
    ],
    "openHours": "24小時",
    "rating": 3.8,
    "pricePerKwh": 7
  },
  {
    "id": "s202",
    "name": "北屯ForMosa站",
    "network": "ForMosa EV",
    "address": "台中市北屯區忠孝路133號",
    "city": "台中市",
    "lat": 24.176,
    "lng": 120.6867,
    "totalStalls": 5,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 95,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 3.8,
    "pricePerKwh": 5.5
  },
  {
    "id": "s203",
    "name": "北屯裕電站",
    "network": "裕電能源",
    "address": "台中市北屯區民族路681號",
    "city": "台中市",
    "lat": 24.1904,
    "lng": 120.6818,
    "totalStalls": 9,
    "availableStalls": 2,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 103,
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
    "rating": 3.5,
    "pricePerKwh": 6
  },
  {
    "id": "s204",
    "name": "北屯ForMosa站",
    "network": "ForMosa EV",
    "address": "台中市北屯區建國路444號",
    "city": "台中市",
    "lat": 24.1904,
    "lng": 120.6768,
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
    "openHours": "06:00–22:00",
    "rating": 4.9,
    "pricePerKwh": 5.5
  },
  {
    "id": "s205",
    "name": "北屯目的地充電站",
    "network": "自建",
    "address": "台中市北屯區中山路111號",
    "city": "台中市",
    "lat": 24.1881,
    "lng": 120.6788,
    "totalStalls": 8,
    "availableStalls": 5,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 21,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "24小時",
    "rating": 3.7,
    "pricePerKwh": 4
  },
  {
    "id": "s206",
    "name": "北屯特斯拉超充站",
    "network": "Tesla",
    "address": "台中市北屯區文化路190號",
    "city": "台中市",
    "lat": 24.1921,
    "lng": 120.6765,
    "totalStalls": 20,
    "availableStalls": 1,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 193,
    "amenities": [
      "restaurant",
      "shopping",
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
      },
      {
        "id": 17,
        "status": "in_use"
      },
      {
        "id": 18,
        "status": "in_use"
      },
      {
        "id": 19,
        "status": "in_use"
      },
      {
        "id": 20,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.8,
    "pricePerKwh": 6.8
  },
  {
    "id": "s207",
    "name": "北ForMosa站",
    "network": "ForMosa EV",
    "address": "台中市北區光明路529號",
    "city": "台中市",
    "lat": 24.1411,
    "lng": 120.6774,
    "totalStalls": 4,
    "availableStalls": 3,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 109,
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.9,
    "pricePerKwh": 5.8
  },
  {
    "id": "s208",
    "name": "北特斯拉超充站",
    "network": "Tesla",
    "address": "台中市北區南京路643號",
    "city": "台中市",
    "lat": 24.1443,
    "lng": 120.6741,
    "totalStalls": 14,
    "availableStalls": 13,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 229,
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
      }
    ],
    "openHours": "24小時",
    "rating": 3.9,
    "pricePerKwh": 7.5
  },
  {
    "id": "s209",
    "name": "中中油充電站",
    "network": "台灣中油",
    "address": "台中市中區仁愛路961號",
    "city": "台中市",
    "lat": 24.1345,
    "lng": 120.6723,
    "totalStalls": 6,
    "availableStalls": 4,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 85,
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.4,
    "pricePerKwh": 5.5
  },
  {
    "id": "s210",
    "name": "中ForMosa站",
    "network": "ForMosa EV",
    "address": "台中市中區建國路363號",
    "city": "台中市",
    "lat": 24.1372,
    "lng": 120.6673,
    "totalStalls": 4,
    "availableStalls": 1,
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
    "rating": 3.9,
    "pricePerKwh": 5.8
  },
  {
    "id": "s211",
    "name": "東裕電站",
    "network": "裕電能源",
    "address": "台中市東區南投路612號",
    "city": "台中市",
    "lat": 24.1287,
    "lng": 120.6834,
    "totalStalls": 7,
    "availableStalls": 4,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 85,
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.7,
    "pricePerKwh": 6
  },
  {
    "id": "s212",
    "name": "東ForMosa站",
    "network": "ForMosa EV",
    "address": "台中市東區七賢路640號",
    "city": "台中市",
    "lat": 24.1261,
    "lng": 120.6813,
    "totalStalls": 4,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 99,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.5,
    "pricePerKwh": 5.5
  },
  {
    "id": "s213",
    "name": "東U-Power站",
    "network": "U-Power",
    "address": "台中市東區大安路722號",
    "city": "台中市",
    "lat": 24.1311,
    "lng": 120.6815,
    "totalStalls": 6,
    "availableStalls": 3,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 133,
    "amenities": [
      "parking",
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
    "openHours": "06:00–22:00",
    "rating": 3.6,
    "pricePerKwh": 6.8
  },
  {
    "id": "s214",
    "name": "南特斯拉超充站",
    "network": "Tesla",
    "address": "台中市南區民族路910號",
    "city": "台中市",
    "lat": 24.123,
    "lng": 120.6663,
    "totalStalls": 18,
    "availableStalls": 3,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 207,
    "amenities": [
      "restaurant",
      "shopping",
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
      },
      {
        "id": 17,
        "status": "in_use"
      },
      {
        "id": 18,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.1,
    "pricePerKwh": 7.5
  },
  {
    "id": "s215",
    "name": "南裕電站",
    "network": "裕電能源",
    "address": "台中市南區文化路149號",
    "city": "台中市",
    "lat": 24.1213,
    "lng": 120.6639,
    "totalStalls": 8,
    "availableStalls": 3,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 146,
    "amenities": [
      "parking",
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
    "rating": 4.7,
    "pricePerKwh": 6.2
  },
  {
    "id": "s216",
    "name": "西屯U-Power站",
    "network": "U-Power",
    "address": "台中市西屯區光明路886號",
    "city": "台中市",
    "lat": 24.1646,
    "lng": 120.6425,
    "totalStalls": 7,
    "availableStalls": 2,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 212,
    "amenities": [
      "parking",
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
    "openHours": "24小時",
    "rating": 4.8,
    "pricePerKwh": 6.3
  },
  {
    "id": "s217",
    "name": "西屯裕電站",
    "network": "裕電能源",
    "address": "台中市西屯區中正路135號",
    "city": "台中市",
    "lat": 24.1599,
    "lng": 120.6425,
    "totalStalls": 6,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 111,
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
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.2,
    "pricePerKwh": 6
  },
  {
    "id": "s218",
    "name": "西屯特斯拉超充站",
    "network": "Tesla",
    "address": "台中市西屯區自強路316號",
    "city": "台中市",
    "lat": 24.161,
    "lng": 120.6454,
    "totalStalls": 15,
    "availableStalls": 0,
    "chargerType": "V4",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 310,
    "amenities": [
      "restaurant",
      "shopping",
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
    "rating": 4.9,
    "pricePerKwh": 6.8
  },
  {
    "id": "s219",
    "name": "豐原ForMosa站",
    "network": "ForMosa EV",
    "address": "台中市豐原區忠孝路473號",
    "city": "台中市",
    "lat": 24.2503,
    "lng": 120.718,
    "totalStalls": 7,
    "availableStalls": 0,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 245,
    "amenities": [
      "parking",
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
    "openHours": "06:00–22:00",
    "rating": 3.6,
    "pricePerKwh": 5.5
  },
  {
    "id": "s220",
    "name": "豐原裕電站",
    "network": "裕電能源",
    "address": "台中市豐原區信義路979號",
    "city": "台中市",
    "lat": 24.2513,
    "lng": 120.7201,
    "totalStalls": 7,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 95,
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
    "rating": 4.1,
    "pricePerKwh": 6
  },
  {
    "id": "s221",
    "name": "豐原目的地充電站",
    "network": "自建",
    "address": "台中市豐原區長安路866號",
    "city": "台中市",
    "lat": 24.2492,
    "lng": 120.7198,
    "totalStalls": 5,
    "availableStalls": 1,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 11,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.5,
    "pricePerKwh": 3
  },
  {
    "id": "s222",
    "name": "大里特斯拉超充站",
    "network": "Tesla",
    "address": "台中市大里區民生路222號",
    "city": "台中市",
    "lat": 24.1045,
    "lng": 120.6829,
    "totalStalls": 17,
    "availableStalls": 13,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 196,
    "amenities": [
      "restaurant",
      "shopping",
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
        "status": "in_use"
      },
      {
        "id": 15,
        "status": "in_use"
      },
      {
        "id": 16,
        "status": "in_use"
      },
      {
        "id": 17,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.8,
    "pricePerKwh": 6.8
  },
  {
    "id": "s223",
    "name": "大里目的地充電站",
    "network": "自建",
    "address": "台中市大里區台灣大道432號",
    "city": "台中市",
    "lat": 24.1082,
    "lng": 120.6851,
    "totalStalls": 8,
    "availableStalls": 6,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 16,
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
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.9,
    "pricePerKwh": 4
  },
  {
    "id": "s224",
    "name": "大里停車場充電站",
    "network": "停車場自建",
    "address": "台中市大里區忠孝路676號",
    "city": "台中市",
    "lat": 24.1063,
    "lng": 120.6848,
    "totalStalls": 8,
    "availableStalls": 6,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2",
      "CCS2"
    ],
    "maxKw": 10,
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
        "status": "in_use"
      },
      {
        "id": 8,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.7,
    "pricePerKwh": 4
  },
  {
    "id": "s225",
    "name": "大里ForMosa站",
    "network": "ForMosa EV",
    "address": "台中市大里區復興路199號",
    "city": "台中市",
    "lat": 24.1088,
    "lng": 120.6819,
    "totalStalls": 4,
    "availableStalls": 2,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 231,
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.4,
    "pricePerKwh": 5.8
  },
  {
    "id": "s226",
    "name": "太平台電充電站",
    "network": "台灣電力",
    "address": "台中市太平區中正路174號",
    "city": "台中市",
    "lat": 24.098,
    "lng": 120.7042,
    "totalStalls": 2,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 129,
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
    "openHours": "06:00–22:00",
    "rating": 3.8,
    "pricePerKwh": 5
  },
  {
    "id": "s227",
    "name": "太平中油充電站",
    "network": "台灣中油",
    "address": "台中市太平區光復路856號",
    "city": "台中市",
    "lat": 24.1013,
    "lng": 120.7052,
    "totalStalls": 6,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 132,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "24小時",
    "rating": 3.8,
    "pricePerKwh": 5.5
  },
  {
    "id": "s228",
    "name": "烏日停車場充電站",
    "network": "停車場自建",
    "address": "台中市烏日區民權路132號",
    "city": "台中市",
    "lat": 24.0466,
    "lng": 120.6906,
    "totalStalls": 10,
    "availableStalls": 0,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 21,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "24小時",
    "rating": 3.6,
    "pricePerKwh": 4.5
  },
  {
    "id": "s229",
    "name": "烏日ForMosa站",
    "network": "ForMosa EV",
    "address": "台中市烏日區中正路863號",
    "city": "台中市",
    "lat": 24.0478,
    "lng": 120.6935,
    "totalStalls": 4,
    "availableStalls": 2,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 192,
    "amenities": [
      "parking",
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
        "status": "faulted"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 3.9,
    "pricePerKwh": 5.8
  },
  {
    "id": "s230",
    "name": "烏日特斯拉超充站",
    "network": "Tesla",
    "address": "台中市烏日區光復路751號",
    "city": "台中市",
    "lat": 24.0516,
    "lng": 120.6909,
    "totalStalls": 7,
    "availableStalls": 2,
    "chargerType": "V4",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 334,
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
    "rating": 4.3,
    "pricePerKwh": 6.8
  },
  {
    "id": "s231",
    "name": "烏日裕電站",
    "network": "裕電能源",
    "address": "台中市烏日區大安路683號",
    "city": "台中市",
    "lat": 24.0478,
    "lng": 120.694,
    "totalStalls": 10,
    "availableStalls": 5,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 149,
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
    "openHours": "24小時",
    "rating": 3.7,
    "pricePerKwh": 5.8
  },
  {
    "id": "s232",
    "name": "梧棲ForMosa站",
    "network": "ForMosa EV",
    "address": "台中市梧棲區南投路721號",
    "city": "台中市",
    "lat": 24.2584,
    "lng": 120.5433,
    "totalStalls": 7,
    "availableStalls": 5,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 223,
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
      }
    ],
    "openHours": "24小時",
    "rating": 4,
    "pricePerKwh": 5.8
  },
  {
    "id": "s233",
    "name": "梧棲特斯拉超充站",
    "network": "Tesla",
    "address": "台中市梧棲區信義路173號",
    "city": "台中市",
    "lat": 24.2549,
    "lng": 120.5454,
    "totalStalls": 18,
    "availableStalls": 8,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 242,
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
      },
      {
        "id": 17,
        "status": "in_use"
      },
      {
        "id": 18,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.7,
    "pricePerKwh": 7.5
  },
  {
    "id": "s234",
    "name": "梧棲台電充電站",
    "network": "台灣電力",
    "address": "台中市梧棲區中華路519號",
    "city": "台中市",
    "lat": 24.2594,
    "lng": 120.5425,
    "totalStalls": 2,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 143,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.1,
    "pricePerKwh": 4.8
  },
  {
    "id": "s235",
    "name": "清水目的地充電站",
    "network": "自建",
    "address": "台中市清水區民生路313號",
    "city": "台中市",
    "lat": 24.2309,
    "lng": 120.534,
    "totalStalls": 7,
    "availableStalls": 2,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 11,
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
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.5,
    "pricePerKwh": 3
  },
  {
    "id": "s236",
    "name": "清水停車場充電站",
    "network": "停車場自建",
    "address": "台中市清水區北平路873號",
    "city": "台中市",
    "lat": 24.2331,
    "lng": 120.5362,
    "totalStalls": 12,
    "availableStalls": 10,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2",
      "CCS2"
    ],
    "maxKw": 8,
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
        "status": "in_use"
      },
      {
        "id": 12,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 3.5,
    "pricePerKwh": 4
  },
  {
    "id": "s237",
    "name": "潭子特斯拉超充站",
    "network": "Tesla",
    "address": "台中市潭子區十全路653號",
    "city": "台中市",
    "lat": 24.225,
    "lng": 120.6265,
    "totalStalls": 11,
    "availableStalls": 6,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 214,
    "amenities": [
      "restaurant",
      "shopping",
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
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.7,
    "pricePerKwh": 7
  },
  {
    "id": "s238",
    "name": "潭子中油充電站",
    "network": "台灣中油",
    "address": "台中市潭子區光明路770號",
    "city": "台中市",
    "lat": 24.2284,
    "lng": 120.6268,
    "totalStalls": 2,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 144,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.2,
    "pricePerKwh": 5.5
  },
  {
    "id": "s239",
    "name": "潭子U-Power站",
    "network": "U-Power",
    "address": "台中市潭子區南投路590號",
    "city": "台中市",
    "lat": 24.2272,
    "lng": 120.6289,
    "totalStalls": 10,
    "availableStalls": 6,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 222,
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
      }
    ],
    "openHours": "24小時",
    "rating": 3.6,
    "pricePerKwh": 6.3
  },
  {
    "id": "s240",
    "name": "潭子目的地充電站",
    "network": "自建",
    "address": "台中市潭子區復興路172號",
    "city": "台中市",
    "lat": 24.2261,
    "lng": 120.6263,
    "totalStalls": 2,
    "availableStalls": 0,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 9,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.2,
    "pricePerKwh": 4
  },
  {
    "id": "s241",
    "name": "彰化目的地充電站",
    "network": "自建",
    "address": "彰化縣彰化市中華路191號",
    "city": "彰化縣",
    "lat": 24.0858,
    "lng": 120.5393,
    "totalStalls": 6,
    "availableStalls": 2,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 21,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.6,
    "pricePerKwh": 3
  },
  {
    "id": "s242",
    "name": "彰化中油充電站",
    "network": "台灣中油",
    "address": "彰化縣彰化市北平路723號",
    "city": "彰化縣",
    "lat": 24.0847,
    "lng": 120.5388,
    "totalStalls": 5,
    "availableStalls": 4,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 128,
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.6,
    "pricePerKwh": 5
  },
  {
    "id": "s243",
    "name": "員林目的地充電站",
    "network": "自建",
    "address": "彰化縣員林市台灣大道376號",
    "city": "彰化縣",
    "lat": 23.9578,
    "lng": 120.5796,
    "totalStalls": 6,
    "availableStalls": 4,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 21,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "24小時",
    "rating": 3.9,
    "pricePerKwh": 4
  },
  {
    "id": "s244",
    "name": "員林裕電站",
    "network": "裕電能源",
    "address": "彰化縣員林市信義路428號",
    "city": "彰化縣",
    "lat": 23.9627,
    "lng": 120.582,
    "totalStalls": 9,
    "availableStalls": 4,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 241,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "24小時",
    "rating": 3.6,
    "pricePerKwh": 5.8
  },
  {
    "id": "s245",
    "name": "員林台電充電站",
    "network": "台灣電力",
    "address": "彰化縣員林市南投路195號",
    "city": "彰化縣",
    "lat": 23.9599,
    "lng": 120.579,
    "totalStalls": 2,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 134,
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
    "rating": 3.9,
    "pricePerKwh": 5
  },
  {
    "id": "s246",
    "name": "員林U-Power站",
    "network": "U-Power",
    "address": "彰化縣員林市台灣大道868號",
    "city": "彰化縣",
    "lat": 23.9628,
    "lng": 120.5788,
    "totalStalls": 8,
    "availableStalls": 0,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 238,
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
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.4,
    "pricePerKwh": 6.5
  },
  {
    "id": "s247",
    "name": "鹿港中油充電站",
    "network": "台灣中油",
    "address": "彰化縣鹿港鎮仁愛路499號",
    "city": "彰化縣",
    "lat": 24.1,
    "lng": 120.4347,
    "totalStalls": 3,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 123,
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
    "rating": 3.8,
    "pricePerKwh": 5.5
  },
  {
    "id": "s248",
    "name": "鹿港目的地充電站",
    "network": "自建",
    "address": "彰化縣鹿港鎮信義路117號",
    "city": "彰化縣",
    "lat": 24.0952,
    "lng": 120.4383,
    "totalStalls": 4,
    "availableStalls": 3,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 20,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.5,
    "pricePerKwh": 4
  },
  {
    "id": "s249",
    "name": "田中目的地充電站",
    "network": "自建",
    "address": "彰化縣田中鎮十全路230號",
    "city": "彰化縣",
    "lat": 23.8937,
    "lng": 120.523,
    "totalStalls": 6,
    "availableStalls": 5,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 22,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "24小時",
    "rating": 3.5,
    "pricePerKwh": 4
  },
  {
    "id": "s250",
    "name": "田中停車場充電站",
    "network": "停車場自建",
    "address": "彰化縣田中鎮民生路388號",
    "city": "彰化縣",
    "lat": 23.8945,
    "lng": 120.5203,
    "totalStalls": 12,
    "availableStalls": 5,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2",
      "CCS2"
    ],
    "maxKw": 16,
    "amenities": [
      "parking",
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
    "rating": 3.6,
    "pricePerKwh": 3.5
  },
  {
    "id": "s251",
    "name": "和美裕電站",
    "network": "裕電能源",
    "address": "彰化縣和美鎮和平路321號",
    "city": "彰化縣",
    "lat": 24.1321,
    "lng": 120.4734,
    "totalStalls": 7,
    "availableStalls": 4,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 118,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.4,
    "pricePerKwh": 6
  },
  {
    "id": "s252",
    "name": "和美中油充電站",
    "network": "台灣中油",
    "address": "彰化縣和美鎮五福路312號",
    "city": "彰化縣",
    "lat": 24.1331,
    "lng": 120.4728,
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
    "rating": 4.7,
    "pricePerKwh": 5.5
  },
  {
    "id": "s253",
    "name": "南投裕電站",
    "network": "裕電能源",
    "address": "南投縣南投市文化路212號",
    "city": "南投縣",
    "lat": 23.9187,
    "lng": 120.6802,
    "totalStalls": 4,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 110,
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.9,
    "pricePerKwh": 5.8
  },
  {
    "id": "s254",
    "name": "南投停車場充電站",
    "network": "停車場自建",
    "address": "南投縣南投市南投路725號",
    "city": "南投縣",
    "lat": 23.9184,
    "lng": 120.6856,
    "totalStalls": 11,
    "availableStalls": 0,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2",
      "CCS2"
    ],
    "maxKw": 16,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "24小時",
    "rating": 3.7,
    "pricePerKwh": 4.5
  },
  {
    "id": "s255",
    "name": "草屯中油充電站",
    "network": "台灣中油",
    "address": "南投縣草屯鎮大安路543號",
    "city": "南投縣",
    "lat": 24.0444,
    "lng": 120.6969,
    "totalStalls": 3,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 116,
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
    "openHours": "06:00–22:00",
    "rating": 3.6,
    "pricePerKwh": 5.5
  },
  {
    "id": "s256",
    "name": "草屯目的地充電站",
    "network": "自建",
    "address": "南投縣草屯鎮十全路142號",
    "city": "南投縣",
    "lat": 24.0415,
    "lng": 120.6933,
    "totalStalls": 7,
    "availableStalls": 5,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 8,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.3,
    "pricePerKwh": 4
  },
  {
    "id": "s257",
    "name": "埔里台電充電站",
    "network": "台灣電力",
    "address": "南投縣埔里鎮南投路282號",
    "city": "南投縣",
    "lat": 23.9614,
    "lng": 120.9731,
    "totalStalls": 6,
    "availableStalls": 3,
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
    "rating": 3.7,
    "pricePerKwh": 5
  },
  {
    "id": "s258",
    "name": "埔里停車場充電站",
    "network": "停車場自建",
    "address": "南投縣埔里鎮中山路424號",
    "city": "南投縣",
    "lat": 23.9565,
    "lng": 120.9726,
    "totalStalls": 13,
    "availableStalls": 8,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 19,
    "amenities": [
      "parking",
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
    "pricePerKwh": 3.5
  },
  {
    "id": "s259",
    "name": "埔里中油充電站",
    "network": "台灣中油",
    "address": "南投縣埔里鎮彰化路934號",
    "city": "南投縣",
    "lat": 23.9611,
    "lng": 120.971,
    "totalStalls": 6,
    "availableStalls": 4,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 104,
    "amenities": [
      "parking",
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
    "rating": 4.1,
    "pricePerKwh": 5
  },
  {
    "id": "s260",
    "name": "竹山特斯拉超充站",
    "network": "Tesla",
    "address": "南投縣竹山鎮長安路557號",
    "city": "南投縣",
    "lat": 23.8399,
    "lng": 120.8511,
    "totalStalls": 9,
    "availableStalls": 0,
    "chargerType": "V4",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 329,
    "amenities": [
      "restaurant",
      "shopping",
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
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 3.9,
    "pricePerKwh": 7.5
  },
  {
    "id": "s261",
    "name": "竹山台電充電站",
    "network": "台灣電力",
    "address": "南投縣竹山鎮南投路180號",
    "city": "南投縣",
    "lat": 23.8373,
    "lng": 120.8512,
    "totalStalls": 3,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 117,
    "amenities": [
      "parking",
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
    "openHours": "24小時",
    "rating": 4.1,
    "pricePerKwh": 5
  },
  {
    "id": "s262",
    "name": "竹山U-Power站",
    "network": "U-Power",
    "address": "南投縣竹山鎮成功路847號",
    "city": "南投縣",
    "lat": 23.8366,
    "lng": 120.852,
    "totalStalls": 7,
    "availableStalls": 6,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 128,
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
    "openHours": "07:00–23:00",
    "rating": 4.1,
    "pricePerKwh": 6.8
  },
  {
    "id": "s263",
    "name": "斗六特斯拉超充站",
    "network": "Tesla",
    "address": "雲林縣斗六市建國路495號",
    "city": "雲林縣",
    "lat": 23.7099,
    "lng": 120.5438,
    "totalStalls": 7,
    "availableStalls": 5,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 235,
    "amenities": [
      "restaurant",
      "shopping",
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
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.7,
    "pricePerKwh": 7.5
  },
  {
    "id": "s264",
    "name": "斗六裕電站",
    "network": "裕電能源",
    "address": "雲林縣斗六市成功路124號",
    "city": "雲林縣",
    "lat": 23.7116,
    "lng": 120.543,
    "totalStalls": 8,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 132,
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
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.8,
    "pricePerKwh": 6.2
  },
  {
    "id": "s265",
    "name": "斗六停車場充電站",
    "network": "停車場自建",
    "address": "雲林縣斗六市五福路557號",
    "city": "雲林縣",
    "lat": 23.711,
    "lng": 120.5443,
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
    "openHours": "24小時",
    "rating": 5,
    "pricePerKwh": 4.5
  },
  {
    "id": "s266",
    "name": "虎尾目的地充電站",
    "network": "自建",
    "address": "雲林縣虎尾鎮民權路574號",
    "city": "雲林縣",
    "lat": 23.6867,
    "lng": 120.4755,
    "totalStalls": 3,
    "availableStalls": 0,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 16,
    "amenities": [
      "parking",
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
    "openHours": "06:00–22:00",
    "rating": 4,
    "pricePerKwh": 3
  },
  {
    "id": "s267",
    "name": "虎尾U-Power站",
    "network": "U-Power",
    "address": "雲林縣虎尾鎮信義路448號",
    "city": "雲林縣",
    "lat": 23.6898,
    "lng": 120.474,
    "totalStalls": 7,
    "availableStalls": 5,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 225,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 3.8,
    "pricePerKwh": 6.3
  },
  {
    "id": "s268",
    "name": "北港裕電站",
    "network": "裕電能源",
    "address": "雲林縣北港鎮和平路725號",
    "city": "雲林縣",
    "lat": 23.636,
    "lng": 120.3546,
    "totalStalls": 6,
    "availableStalls": 4,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 134,
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
      }
    ],
    "openHours": "24小時",
    "rating": 3.8,
    "pricePerKwh": 6
  },
  {
    "id": "s269",
    "name": "北港停車場充電站",
    "network": "停車場自建",
    "address": "雲林縣北港鎮民生路324號",
    "city": "雲林縣",
    "lat": 23.6374,
    "lng": 120.3581,
    "totalStalls": 13,
    "availableStalls": 6,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2",
      "CCS2"
    ],
    "maxKw": 18,
    "amenities": [
      "parking",
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
    "rating": 5,
    "pricePerKwh": 4
  },
  {
    "id": "s270",
    "name": "斗南台電充電站",
    "network": "台灣電力",
    "address": "雲林縣斗南鎮忠孝路249號",
    "city": "雲林縣",
    "lat": 23.6719,
    "lng": 120.5331,
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
      "parking",
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.8,
    "pricePerKwh": 4.8
  },
  {
    "id": "s271",
    "name": "斗南U-Power站",
    "network": "U-Power",
    "address": "雲林縣斗南鎮台灣大道530號",
    "city": "雲林縣",
    "lat": 23.6735,
    "lng": 120.5285,
    "totalStalls": 9,
    "availableStalls": 7,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 236,
    "amenities": [
      "parking",
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
      },
      {
        "id": 9,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.9,
    "pricePerKwh": 6.8
  },
  {
    "id": "s272",
    "name": "斗南中油充電站",
    "network": "台灣中油",
    "address": "雲林縣斗南鎮民權路577號",
    "city": "雲林縣",
    "lat": 23.672,
    "lng": 120.5333,
    "totalStalls": 4,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 137,
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
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.8,
    "pricePerKwh": 5
  },
  {
    "id": "s273",
    "name": "斗南裕電站",
    "network": "裕電能源",
    "address": "雲林縣斗南鎮中正路420號",
    "city": "雲林縣",
    "lat": 23.6738,
    "lng": 120.533,
    "totalStalls": 4,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 114,
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
        "status": "faulted"
      }
    ],
    "openHours": "24小時",
    "rating": 4.1,
    "pricePerKwh": 6
  },
  {
    "id": "s274",
    "name": "東U-Power站",
    "network": "U-Power",
    "address": "嘉義市東區自強路663號",
    "city": "嘉義市",
    "lat": 23.4787,
    "lng": 120.4496,
    "totalStalls": 4,
    "availableStalls": 2,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 93,
    "amenities": [
      "parking",
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
        "status": "faulted"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4,
    "pricePerKwh": 6.5
  },
  {
    "id": "s275",
    "name": "東裕電站",
    "network": "裕電能源",
    "address": "嘉義市東區文心路610號",
    "city": "嘉義市",
    "lat": 23.4759,
    "lng": 120.4531,
    "totalStalls": 4,
    "availableStalls": 2,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 247,
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.7,
    "pricePerKwh": 6
  },
  {
    "id": "s276",
    "name": "東停車場充電站",
    "network": "停車場自建",
    "address": "嘉義市東區和平路147號",
    "city": "嘉義市",
    "lat": 23.4776,
    "lng": 120.452,
    "totalStalls": 7,
    "availableStalls": 2,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2",
      "CCS2"
    ],
    "maxKw": 14,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.7,
    "pricePerKwh": 4
  },
  {
    "id": "s277",
    "name": "東台電充電站",
    "network": "台灣電力",
    "address": "嘉義市東區南投路437號",
    "city": "嘉義市",
    "lat": 23.4851,
    "lng": 120.4482,
    "totalStalls": 2,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 106,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "24小時",
    "rating": 3.8,
    "pricePerKwh": 5
  },
  {
    "id": "s278",
    "name": "東中油充電站",
    "network": "台灣中油",
    "address": "嘉義市東區復興路374號",
    "city": "嘉義市",
    "lat": 23.4812,
    "lng": 120.4452,
    "totalStalls": 2,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 98,
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
    "rating": 4.2,
    "pricePerKwh": 5
  },
  {
    "id": "s279",
    "name": "西台電充電站",
    "network": "台灣電力",
    "address": "嘉義市西區十全路624號",
    "city": "嘉義市",
    "lat": 23.4696,
    "lng": 120.4336,
    "totalStalls": 6,
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
    "rating": 4.4,
    "pricePerKwh": 5
  },
  {
    "id": "s280",
    "name": "西目的地充電站",
    "network": "自建",
    "address": "嘉義市西區光明路873號",
    "city": "嘉義市",
    "lat": 23.4723,
    "lng": 120.4296,
    "totalStalls": 7,
    "availableStalls": 5,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 18,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.9,
    "pricePerKwh": 4
  },
  {
    "id": "s281",
    "name": "西U-Power站",
    "network": "U-Power",
    "address": "嘉義市西區忠孝路818號",
    "city": "嘉義市",
    "lat": 23.4631,
    "lng": 120.4527,
    "totalStalls": 8,
    "availableStalls": 5,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 180,
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
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.2,
    "pricePerKwh": 6.3
  },
  {
    "id": "s282",
    "name": "西裕電站",
    "network": "裕電能源",
    "address": "嘉義市西區博愛路660號",
    "city": "嘉義市",
    "lat": 23.4582,
    "lng": 120.4525,
    "totalStalls": 7,
    "availableStalls": 2,
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
    "rating": 3.8,
    "pricePerKwh": 6
  },
  {
    "id": "s283",
    "name": "太保ForMosa站",
    "network": "ForMosa EV",
    "address": "嘉義縣太保市博愛路364號",
    "city": "嘉義縣",
    "lat": 23.4992,
    "lng": 120.3298,
    "totalStalls": 5,
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
    "rating": 4.9,
    "pricePerKwh": 5.8
  },
  {
    "id": "s284",
    "name": "太保特斯拉超充站",
    "network": "Tesla",
    "address": "嘉義縣太保市成功路535號",
    "city": "嘉義縣",
    "lat": 23.4986,
    "lng": 120.3307,
    "totalStalls": 16,
    "availableStalls": 7,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 193,
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
    "openHours": "07:00–23:00",
    "rating": 4,
    "pricePerKwh": 7.5
  },
  {
    "id": "s285",
    "name": "太保目的地充電站",
    "network": "自建",
    "address": "嘉義縣太保市光明路387號",
    "city": "嘉義縣",
    "lat": 23.5026,
    "lng": 120.3262,
    "totalStalls": 5,
    "availableStalls": 0,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 16,
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.9,
    "pricePerKwh": 3
  },
  {
    "id": "s286",
    "name": "朴子U-Power站",
    "network": "U-Power",
    "address": "嘉義縣朴子市博愛路988號",
    "city": "嘉義縣",
    "lat": 23.4647,
    "lng": 120.394,
    "totalStalls": 7,
    "availableStalls": 0,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 247,
    "amenities": [
      "parking",
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
    "rating": 4.5,
    "pricePerKwh": 6.8
  },
  {
    "id": "s287",
    "name": "朴子中油充電站",
    "network": "台灣中油",
    "address": "嘉義縣朴子市台灣大道746號",
    "city": "嘉義縣",
    "lat": 23.4604,
    "lng": 120.3927,
    "totalStalls": 2,
    "availableStalls": 1,
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
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.5,
    "pricePerKwh": 5
  },
  {
    "id": "s288",
    "name": "大林台電充電站",
    "network": "台灣電力",
    "address": "嘉義縣大林鎮中正路332號",
    "city": "嘉義縣",
    "lat": 23.606,
    "lng": 120.4753,
    "totalStalls": 4,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 129,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "24小時",
    "rating": 3.9,
    "pricePerKwh": 4.8
  },
  {
    "id": "s289",
    "name": "大林裕電站",
    "network": "裕電能源",
    "address": "嘉義縣大林鎮自強路224號",
    "city": "嘉義縣",
    "lat": 23.603,
    "lng": 120.4751,
    "totalStalls": 6,
    "availableStalls": 2,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 118,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.7,
    "pricePerKwh": 5.8
  },
  {
    "id": "s290",
    "name": "大林中油充電站",
    "network": "台灣中油",
    "address": "嘉義縣大林鎮南投路332號",
    "city": "嘉義縣",
    "lat": 23.6057,
    "lng": 120.4755,
    "totalStalls": 4,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 108,
    "amenities": [
      "parking",
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
        "status": "faulted"
      }
    ],
    "openHours": "24小時",
    "rating": 4.8,
    "pricePerKwh": 5.5
  },
  {
    "id": "s291",
    "name": "大林目的地充電站",
    "network": "自建",
    "address": "嘉義縣大林鎮民族路431號",
    "city": "嘉義縣",
    "lat": 23.6026,
    "lng": 120.4787,
    "totalStalls": 3,
    "availableStalls": 1,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 13,
    "amenities": [],
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
    "pricePerKwh": 4
  },
  {
    "id": "s292",
    "name": "民雄裕電站",
    "network": "裕電能源",
    "address": "嘉義縣民雄鄉成功路295號",
    "city": "嘉義縣",
    "lat": 23.5465,
    "lng": 120.4683,
    "totalStalls": 8,
    "availableStalls": 6,
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
        "status": "available"
      },
      {
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
    "rating": 4.9,
    "pricePerKwh": 6.2
  },
  {
    "id": "s293",
    "name": "民雄目的地充電站",
    "network": "自建",
    "address": "嘉義縣民雄鄉光復路246號",
    "city": "嘉義縣",
    "lat": 23.5456,
    "lng": 120.469,
    "totalStalls": 7,
    "availableStalls": 4,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 13,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.7,
    "pricePerKwh": 3
  },
  {
    "id": "s294",
    "name": "民雄停車場充電站",
    "network": "停車場自建",
    "address": "嘉義縣民雄鄉光復路947號",
    "city": "嘉義縣",
    "lat": 23.5467,
    "lng": 120.4672,
    "totalStalls": 13,
    "availableStalls": 5,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 10,
    "amenities": [
      "parking",
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
    "pricePerKwh": 4
  },
  {
    "id": "s295",
    "name": "民雄中油充電站",
    "network": "台灣中油",
    "address": "嘉義縣民雄鄉信義路738號",
    "city": "嘉義縣",
    "lat": 23.5464,
    "lng": 120.4678,
    "totalStalls": 6,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 131,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 3.6,
    "pricePerKwh": 5.5
  },
  {
    "id": "s296",
    "name": "東ForMosa站",
    "network": "ForMosa EV",
    "address": "台南市東區光復路789號",
    "city": "台南市",
    "lat": 22.9897,
    "lng": 120.2122,
    "totalStalls": 6,
    "availableStalls": 5,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 212,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.5,
    "pricePerKwh": 5.5
  },
  {
    "id": "s297",
    "name": "東裕電站",
    "network": "裕電能源",
    "address": "台南市東區南投路526號",
    "city": "台南市",
    "lat": 22.9905,
    "lng": 120.2147,
    "totalStalls": 9,
    "availableStalls": 7,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 229,
    "amenities": [
      "parking",
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
      },
      {
        "id": 9,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.1,
    "pricePerKwh": 6
  },
  {
    "id": "s298",
    "name": "東中油充電站",
    "network": "台灣中油",
    "address": "台南市東區台灣大道685號",
    "city": "台南市",
    "lat": 22.9935,
    "lng": 120.2162,
    "totalStalls": 4,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 142,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "24小時",
    "rating": 4,
    "pricePerKwh": 5.5
  },
  {
    "id": "s299",
    "name": "北中油充電站",
    "network": "台灣中油",
    "address": "台南市北區中正路652號",
    "city": "台南市",
    "lat": 23.0123,
    "lng": 120.2059,
    "totalStalls": 3,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 91,
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
    "rating": 4,
    "pricePerKwh": 5.5
  },
  {
    "id": "s300",
    "name": "北目的地充電站",
    "network": "自建",
    "address": "台南市北區仁愛路440號",
    "city": "台南市",
    "lat": 23.0119,
    "lng": 120.2047,
    "totalStalls": 5,
    "availableStalls": 3,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 16,
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
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.9,
    "pricePerKwh": 4
  },
  {
    "id": "s301",
    "name": "北裕電站",
    "network": "裕電能源",
    "address": "台南市北區仁愛路194號",
    "city": "台南市",
    "lat": 23.0109,
    "lng": 120.202,
    "totalStalls": 5,
    "availableStalls": 2,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 182,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.3,
    "pricePerKwh": 6.2
  },
  {
    "id": "s302",
    "name": "東停車場充電站",
    "network": "停車場自建",
    "address": "台南市東區中華路753號",
    "city": "台南市",
    "lat": 22.9971,
    "lng": 120.2317,
    "totalStalls": 16,
    "availableStalls": 6,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2",
      "CCS2"
    ],
    "maxKw": 15,
    "amenities": [
      "parking",
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
    "pricePerKwh": 4.5
  },
  {
    "id": "s303",
    "name": "東中油充電站",
    "network": "台灣中油",
    "address": "台南市東區彰化路141號",
    "city": "台南市",
    "lat": 23.0003,
    "lng": 120.2288,
    "totalStalls": 2,
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.6,
    "pricePerKwh": 5
  },
  {
    "id": "s304",
    "name": "東裕電站",
    "network": "裕電能源",
    "address": "台南市東區忠孝路633號",
    "city": "台南市",
    "lat": 23.0005,
    "lng": 120.2306,
    "totalStalls": 8,
    "availableStalls": 6,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 119,
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
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.2,
    "pricePerKwh": 5.8
  },
  {
    "id": "s305",
    "name": "東目的地充電站",
    "network": "自建",
    "address": "台南市東區忠孝路321號",
    "city": "台南市",
    "lat": 22.9985,
    "lng": 120.2292,
    "totalStalls": 2,
    "availableStalls": 0,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 11,
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
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.4,
    "pricePerKwh": 4
  },
  {
    "id": "s306",
    "name": "南中油充電站",
    "network": "台灣中油",
    "address": "台南市南區自由路327號",
    "city": "台南市",
    "lat": 22.9679,
    "lng": 120.2206,
    "totalStalls": 3,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 124,
    "amenities": [
      "parking",
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
    "openHours": "24小時",
    "rating": 3.7,
    "pricePerKwh": 5
  },
  {
    "id": "s307",
    "name": "南台電充電站",
    "network": "台灣電力",
    "address": "台南市南區自強路791號",
    "city": "台南市",
    "lat": 22.9712,
    "lng": 120.2225,
    "totalStalls": 2,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 111,
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.5,
    "pricePerKwh": 4.8
  },
  {
    "id": "s308",
    "name": "南ForMosa站",
    "network": "ForMosa EV",
    "address": "台南市南區南京路148號",
    "city": "台南市",
    "lat": 22.9707,
    "lng": 120.2224,
    "totalStalls": 8,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 89,
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.9,
    "pricePerKwh": 5.5
  },
  {
    "id": "s309",
    "name": "中西停車場充電站",
    "network": "停車場自建",
    "address": "台南市中西區中正路632號",
    "city": "台南市",
    "lat": 22.991,
    "lng": 120.1843,
    "totalStalls": 13,
    "availableStalls": 7,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2",
      "CCS2"
    ],
    "maxKw": 13,
    "amenities": [
      "parking",
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
    "rating": 3.8,
    "pricePerKwh": 4.5
  },
  {
    "id": "s310",
    "name": "中西ForMosa站",
    "network": "ForMosa EV",
    "address": "台南市中西區信義路518號",
    "city": "台南市",
    "lat": 22.9924,
    "lng": 120.1835,
    "totalStalls": 8,
    "availableStalls": 2,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 141,
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.4,
    "pricePerKwh": 5.5
  },
  {
    "id": "s311",
    "name": "中西台電充電站",
    "network": "台灣電力",
    "address": "台南市中西區和平路377號",
    "city": "台南市",
    "lat": 22.9884,
    "lng": 120.1862,
    "totalStalls": 5,
    "availableStalls": 4,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 122,
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.1,
    "pricePerKwh": 4.8
  },
  {
    "id": "s312",
    "name": "安平中油充電站",
    "network": "台灣中油",
    "address": "台南市安平區信義路582號",
    "city": "台南市",
    "lat": 22.9971,
    "lng": 120.1564,
    "totalStalls": 4,
    "availableStalls": 2,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 136,
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.3,
    "pricePerKwh": 5
  },
  {
    "id": "s313",
    "name": "安平目的地充電站",
    "network": "自建",
    "address": "台南市安平區大安路397號",
    "city": "台南市",
    "lat": 22.9973,
    "lng": 120.1563,
    "totalStalls": 4,
    "availableStalls": 0,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 12,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "24小時",
    "rating": 3.8,
    "pricePerKwh": 4
  },
  {
    "id": "s314",
    "name": "安平停車場充電站",
    "network": "停車場自建",
    "address": "台南市安平區五福路593號",
    "city": "台南市",
    "lat": 22.9985,
    "lng": 120.158,
    "totalStalls": 12,
    "availableStalls": 6,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2",
      "CCS2"
    ],
    "maxKw": 11,
    "amenities": [
      "parking",
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
      },
      {
        "id": 12,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.1,
    "pricePerKwh": 4.5
  },
  {
    "id": "s315",
    "name": "安平裕電站",
    "network": "裕電能源",
    "address": "台南市安平區光復路167號",
    "city": "台南市",
    "lat": 22.9988,
    "lng": 120.1578,
    "totalStalls": 5,
    "availableStalls": 4,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 92,
    "amenities": [
      "parking",
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
    "openHours": "06:00–22:00",
    "rating": 4.6,
    "pricePerKwh": 5.8
  },
  {
    "id": "s316",
    "name": "安南U-Power站",
    "network": "U-Power",
    "address": "台南市安南區民權路120號",
    "city": "台南市",
    "lat": 23.0502,
    "lng": 120.2254,
    "totalStalls": 10,
    "availableStalls": 8,
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
        "status": "in_use"
      },
      {
        "id": 10,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 3.6,
    "pricePerKwh": 6.5
  },
  {
    "id": "s317",
    "name": "安南中油充電站",
    "network": "台灣中油",
    "address": "台南市安南區光明路934號",
    "city": "台南市",
    "lat": 23.0511,
    "lng": 120.2267,
    "totalStalls": 5,
    "availableStalls": 4,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 87,
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
    "openHours": "07:00–23:00",
    "rating": 4,
    "pricePerKwh": 5
  },
  {
    "id": "s318",
    "name": "安南停車場充電站",
    "network": "停車場自建",
    "address": "台南市安南區北平路715號",
    "city": "台南市",
    "lat": 23.0539,
    "lng": 120.227,
    "totalStalls": 7,
    "availableStalls": 0,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 10,
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
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 3.6,
    "pricePerKwh": 4
  },
  {
    "id": "s319",
    "name": "安南ForMosa站",
    "network": "ForMosa EV",
    "address": "台南市安南區十全路680號",
    "city": "台南市",
    "lat": 23.0526,
    "lng": 120.2224,
    "totalStalls": 7,
    "availableStalls": 5,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 143,
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
    "openHours": "24小時",
    "rating": 4,
    "pricePerKwh": 5.5
  },
  {
    "id": "s320",
    "name": "仁德ForMosa站",
    "network": "ForMosa EV",
    "address": "台南市仁德區十全路352號",
    "city": "台南市",
    "lat": 22.9501,
    "lng": 120.2336,
    "totalStalls": 6,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 97,
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
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 5,
    "pricePerKwh": 5.5
  },
  {
    "id": "s321",
    "name": "仁德目的地充電站",
    "network": "自建",
    "address": "台南市仁德區五福路356號",
    "city": "台南市",
    "lat": 22.9497,
    "lng": 120.2357,
    "totalStalls": 5,
    "availableStalls": 1,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 8,
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
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 3.8,
    "pricePerKwh": 4
  },
  {
    "id": "s322",
    "name": "仁德U-Power站",
    "network": "U-Power",
    "address": "台南市仁德區光明路225號",
    "city": "台南市",
    "lat": 22.9494,
    "lng": 120.2385,
    "totalStalls": 4,
    "availableStalls": 1,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 241,
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
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 3.9,
    "pricePerKwh": 6.5
  },
  {
    "id": "s323",
    "name": "仁德中油充電站",
    "network": "台灣中油",
    "address": "台南市仁德區建國路749號",
    "city": "台南市",
    "lat": 22.9492,
    "lng": 120.2358,
    "totalStalls": 6,
    "availableStalls": 4,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 126,
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
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.2,
    "pricePerKwh": 5
  },
  {
    "id": "s324",
    "name": "歸仁裕電站",
    "network": "裕電能源",
    "address": "台南市歸仁區光明路850號",
    "city": "台南市",
    "lat": 22.9248,
    "lng": 120.2492,
    "totalStalls": 7,
    "availableStalls": 4,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 84,
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
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.5,
    "pricePerKwh": 6.2
  },
  {
    "id": "s325",
    "name": "歸仁U-Power站",
    "network": "U-Power",
    "address": "台南市歸仁區民族路655號",
    "city": "台南市",
    "lat": 22.9274,
    "lng": 120.2535,
    "totalStalls": 5,
    "availableStalls": 4,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 231,
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
        "status": "faulted"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.1,
    "pricePerKwh": 6.3
  },
  {
    "id": "s326",
    "name": "歸仁台電充電站",
    "network": "台灣電力",
    "address": "台南市歸仁區南投路374號",
    "city": "台南市",
    "lat": 22.9282,
    "lng": 120.2525,
    "totalStalls": 2,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 105,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.5,
    "pricePerKwh": 4.8
  },
  {
    "id": "s327",
    "name": "歸仁目的地充電站",
    "network": "自建",
    "address": "台南市歸仁區民權路980號",
    "city": "台南市",
    "lat": 22.9254,
    "lng": 120.2505,
    "totalStalls": 6,
    "availableStalls": 0,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 17,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.6,
    "pricePerKwh": 4
  },
  {
    "id": "s328",
    "name": "永康裕電站",
    "network": "裕電能源",
    "address": "台南市永康區五福路450號",
    "city": "台南市",
    "lat": 23.0362,
    "lng": 120.3102,
    "totalStalls": 5,
    "availableStalls": 3,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 121,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "24小時",
    "rating": 4,
    "pricePerKwh": 5.8
  },
  {
    "id": "s329",
    "name": "永康中油充電站",
    "network": "台灣中油",
    "address": "台南市永康區台灣大道363號",
    "city": "台南市",
    "lat": 23.0361,
    "lng": 120.3071,
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
      "parking",
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
    "openHours": "24小時",
    "rating": 4.4,
    "pricePerKwh": 5
  },
  {
    "id": "s330",
    "name": "新營U-Power站",
    "network": "U-Power",
    "address": "台南市新營區成功路857號",
    "city": "台南市",
    "lat": 23.1294,
    "lng": 120.271,
    "totalStalls": 10,
    "availableStalls": 5,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 220,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.5,
    "pricePerKwh": 6.3
  },
  {
    "id": "s331",
    "name": "新營中油充電站",
    "network": "台灣中油",
    "address": "台南市新營區南京路810號",
    "city": "台南市",
    "lat": 23.1296,
    "lng": 120.2705,
    "totalStalls": 2,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 132,
    "amenities": [
      "parking",
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
    "openHours": "24小時",
    "rating": 4.5,
    "pricePerKwh": 5.5
  },
  {
    "id": "s332",
    "name": "新營裕電站",
    "network": "裕電能源",
    "address": "台南市新營區中華路891號",
    "city": "台南市",
    "lat": 23.1299,
    "lng": 120.2723,
    "totalStalls": 10,
    "availableStalls": 4,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 142,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "24小時",
    "rating": 4,
    "pricePerKwh": 6.2
  },
  {
    "id": "s333",
    "name": "新營台電充電站",
    "network": "台灣電力",
    "address": "台南市新營區南京路213號",
    "city": "台南市",
    "lat": 23.1295,
    "lng": 120.2708,
    "totalStalls": 4,
    "availableStalls": 2,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 121,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 3.8,
    "pricePerKwh": 5
  },
  {
    "id": "s334",
    "name": "學甲台電充電站",
    "network": "台灣電力",
    "address": "台南市學甲區彰化路829號",
    "city": "台南市",
    "lat": 23.1843,
    "lng": 120.1783,
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
      "parking",
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.7,
    "pricePerKwh": 5
  },
  {
    "id": "s335",
    "name": "學甲ForMosa站",
    "network": "ForMosa EV",
    "address": "台南市學甲區中華路887號",
    "city": "台南市",
    "lat": 23.1841,
    "lng": 120.1821,
    "totalStalls": 7,
    "availableStalls": 0,
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
    "openHours": "06:00–22:00",
    "rating": 5,
    "pricePerKwh": 5.5
  },
  {
    "id": "s336",
    "name": "學甲特斯拉超充站",
    "network": "Tesla",
    "address": "台南市學甲區台灣大道320號",
    "city": "台南市",
    "lat": 23.1845,
    "lng": 120.1802,
    "totalStalls": 17,
    "availableStalls": 0,
    "chargerType": "V4",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 310,
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
      },
      {
        "id": 17,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.2,
    "pricePerKwh": 7.5
  },
  {
    "id": "s337",
    "name": "左營特斯拉超充站",
    "network": "Tesla",
    "address": "高雄市左營區南投路348號",
    "city": "高雄市",
    "lat": 22.6905,
    "lng": 120.2989,
    "totalStalls": 7,
    "availableStalls": 5,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 226,
    "amenities": [
      "restaurant",
      "shopping",
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
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.5,
    "pricePerKwh": 7
  },
  {
    "id": "s338",
    "name": "左營中油充電站",
    "network": "台灣中油",
    "address": "高雄市左營區中山路270號",
    "city": "高雄市",
    "lat": 22.6881,
    "lng": 120.3019,
    "totalStalls": 4,
    "availableStalls": 0,
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
    "rating": 4.7,
    "pricePerKwh": 5
  },
  {
    "id": "s339",
    "name": "左營台電充電站",
    "network": "台灣電力",
    "address": "高雄市左營區信義路766號",
    "city": "高雄市",
    "lat": 22.6859,
    "lng": 120.3031,
    "totalStalls": 5,
    "availableStalls": 4,
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
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.9,
    "pricePerKwh": 4.8
  },
  {
    "id": "s340",
    "name": "左營特斯拉超充站",
    "network": "Tesla",
    "address": "高雄市左營區中華路577號",
    "city": "高雄市",
    "lat": 22.679,
    "lng": 120.2984,
    "totalStalls": 11,
    "availableStalls": 7,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 215,
    "amenities": [
      "restaurant",
      "shopping",
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
    "rating": 4.3,
    "pricePerKwh": 7
  },
  {
    "id": "s341",
    "name": "左營U-Power站",
    "network": "U-Power",
    "address": "高雄市左營區南京路599號",
    "city": "高雄市",
    "lat": 22.6806,
    "lng": 120.2972,
    "totalStalls": 4,
    "availableStalls": 0,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 245,
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
        "status": "faulted"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.4,
    "pricePerKwh": 6.5
  },
  {
    "id": "s342",
    "name": "左營ForMosa站",
    "network": "ForMosa EV",
    "address": "高雄市左營區中正路947號",
    "city": "高雄市",
    "lat": 22.6785,
    "lng": 120.2955,
    "totalStalls": 6,
    "availableStalls": 4,
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
        "status": "available"
      },
      {
        "id": 2,
        "status": "available"
      },
      {
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
    "rating": 4.1,
    "pricePerKwh": 5.8
  },
  {
    "id": "s343",
    "name": "左營中油充電站",
    "network": "台灣中油",
    "address": "高雄市左營區五福路217號",
    "city": "高雄市",
    "lat": 22.679,
    "lng": 120.2987,
    "totalStalls": 5,
    "availableStalls": 3,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 80,
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
      }
    ],
    "openHours": "24小時",
    "rating": 3.6,
    "pricePerKwh": 5.5
  },
  {
    "id": "s344",
    "name": "三民目的地充電站",
    "network": "自建",
    "address": "高雄市三民區和平路648號",
    "city": "高雄市",
    "lat": 22.6403,
    "lng": 120.314,
    "totalStalls": 3,
    "availableStalls": 2,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 8,
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
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 3.6,
    "pricePerKwh": 4
  },
  {
    "id": "s345",
    "name": "三民台電充電站",
    "network": "台灣電力",
    "address": "高雄市三民區大安路778號",
    "city": "高雄市",
    "lat": 22.6427,
    "lng": 120.3085,
    "totalStalls": 6,
    "availableStalls": 2,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 119,
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
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.9,
    "pricePerKwh": 5
  },
  {
    "id": "s346",
    "name": "鼓山ForMosa站",
    "network": "ForMosa EV",
    "address": "高雄市鼓山區光明路955號",
    "city": "高雄市",
    "lat": 22.6309,
    "lng": 120.3019,
    "totalStalls": 7,
    "availableStalls": 2,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 82,
    "amenities": [
      "parking",
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
    "openHours": "06:00–22:00",
    "rating": 4.3,
    "pricePerKwh": 5.5
  },
  {
    "id": "s347",
    "name": "鼓山裕電站",
    "network": "裕電能源",
    "address": "高雄市鼓山區復興路473號",
    "city": "高雄市",
    "lat": 22.6342,
    "lng": 120.304,
    "totalStalls": 7,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 130,
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
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.6,
    "pricePerKwh": 5.8
  },
  {
    "id": "s348",
    "name": "鼓山台電充電站",
    "network": "台灣電力",
    "address": "高雄市鼓山區建國路315號",
    "city": "高雄市",
    "lat": 22.6323,
    "lng": 120.304,
    "totalStalls": 5,
    "availableStalls": 4,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 100,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "24小時",
    "rating": 3.7,
    "pricePerKwh": 5
  },
  {
    "id": "s349",
    "name": "苓雅停車場充電站",
    "network": "停車場自建",
    "address": "高雄市苓雅區彰化路197號",
    "city": "高雄市",
    "lat": 22.6176,
    "lng": 120.3123,
    "totalStalls": 14,
    "availableStalls": 6,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2",
      "CCS2"
    ],
    "maxKw": 15,
    "amenities": [
      "parking",
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
    "pricePerKwh": 4.5
  },
  {
    "id": "s350",
    "name": "苓雅中油充電站",
    "network": "台灣中油",
    "address": "高雄市苓雅區大安路953號",
    "city": "高雄市",
    "lat": 22.6172,
    "lng": 120.3113,
    "totalStalls": 5,
    "availableStalls": 3,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 84,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.7,
    "pricePerKwh": 5
  },
  {
    "id": "s351",
    "name": "苓雅U-Power站",
    "network": "U-Power",
    "address": "高雄市苓雅區七賢路390號",
    "city": "高雄市",
    "lat": 22.6221,
    "lng": 120.3143,
    "totalStalls": 5,
    "availableStalls": 2,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 192,
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.3,
    "pricePerKwh": 6.5
  },
  {
    "id": "s352",
    "name": "前金U-Power站",
    "network": "U-Power",
    "address": "高雄市前金區民生路899號",
    "city": "高雄市",
    "lat": 22.6159,
    "lng": 120.3036,
    "totalStalls": 6,
    "availableStalls": 2,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 211,
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.4,
    "pricePerKwh": 6.3
  },
  {
    "id": "s353",
    "name": "前金台電充電站",
    "network": "台灣電力",
    "address": "高雄市前金區光復路340號",
    "city": "高雄市",
    "lat": 22.6106,
    "lng": 120.3039,
    "totalStalls": 6,
    "availableStalls": 1,
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
    "rating": 4.9,
    "pricePerKwh": 4.8
  },
  {
    "id": "s354",
    "name": "前金ForMosa站",
    "network": "ForMosa EV",
    "address": "高雄市前金區仁愛路660號",
    "city": "高雄市",
    "lat": 22.6156,
    "lng": 120.303,
    "totalStalls": 6,
    "availableStalls": 4,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 90,
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.5,
    "pricePerKwh": 5.5
  },
  {
    "id": "s355",
    "name": "前金中油充電站",
    "network": "台灣中油",
    "address": "高雄市前金區中正路736號",
    "city": "高雄市",
    "lat": 22.615,
    "lng": 120.3023,
    "totalStalls": 6,
    "availableStalls": 3,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 139,
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.9,
    "pricePerKwh": 5
  },
  {
    "id": "s356",
    "name": "前裕電站",
    "network": "裕電能源",
    "address": "高雄市前鎮區和平路275號",
    "city": "高雄市",
    "lat": 22.5993,
    "lng": 120.305,
    "totalStalls": 9,
    "availableStalls": 4,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 193,
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
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 3.6,
    "pricePerKwh": 5.8
  },
  {
    "id": "s357",
    "name": "前ForMosa站",
    "network": "ForMosa EV",
    "address": "高雄市前鎮區中華路237號",
    "city": "高雄市",
    "lat": 22.6012,
    "lng": 120.307,
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
    "openHours": "24小時",
    "rating": 4.4,
    "pricePerKwh": 5.5
  },
  {
    "id": "s358",
    "name": "前中油充電站",
    "network": "台灣中油",
    "address": "高雄市前鎮區光復路729號",
    "city": "高雄市",
    "lat": 22.598,
    "lng": 120.3069,
    "totalStalls": 4,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 91,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "24小時",
    "rating": 3.9,
    "pricePerKwh": 5.5
  },
  {
    "id": "s359",
    "name": "前目的地充電站",
    "network": "自建",
    "address": "高雄市前鎮區光明路946號",
    "city": "高雄市",
    "lat": 22.5992,
    "lng": 120.3062,
    "totalStalls": 3,
    "availableStalls": 2,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 18,
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
        "status": "faulted"
      }
    ],
    "openHours": "24小時",
    "rating": 3.7,
    "pricePerKwh": 4
  },
  {
    "id": "s360",
    "name": "小港ForMosa站",
    "network": "ForMosa EV",
    "address": "高雄市小港區信義路251號",
    "city": "高雄市",
    "lat": 22.5726,
    "lng": 120.3181,
    "totalStalls": 6,
    "availableStalls": 5,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 98,
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
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 3.6,
    "pricePerKwh": 5.8
  },
  {
    "id": "s361",
    "name": "小港停車場充電站",
    "network": "停車場自建",
    "address": "高雄市小港區忠孝路490號",
    "city": "高雄市",
    "lat": 22.5733,
    "lng": 120.321,
    "totalStalls": 16,
    "availableStalls": 9,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 15,
    "amenities": [
      "parking",
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
    "openHours": "24小時",
    "rating": 3.8,
    "pricePerKwh": 3.5
  },
  {
    "id": "s362",
    "name": "小港U-Power站",
    "network": "U-Power",
    "address": "高雄市小港區民族路615號",
    "city": "高雄市",
    "lat": 22.5722,
    "lng": 120.3219,
    "totalStalls": 5,
    "availableStalls": 2,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2"
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
    "pricePerKwh": 6.5
  },
  {
    "id": "s363",
    "name": "小港台電充電站",
    "network": "台灣電力",
    "address": "高雄市小港區長安路812號",
    "city": "高雄市",
    "lat": 22.5743,
    "lng": 120.3226,
    "totalStalls": 6,
    "availableStalls": 5,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 119,
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
    "openHours": "06:00–22:00",
    "rating": 3.6,
    "pricePerKwh": 4.8
  },
  {
    "id": "s364",
    "name": "鳳山台電充電站",
    "network": "台灣電力",
    "address": "高雄市鳳山區光復路839號",
    "city": "高雄市",
    "lat": 22.6276,
    "lng": 120.3559,
    "totalStalls": 6,
    "availableStalls": 2,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 97,
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.4,
    "pricePerKwh": 5
  },
  {
    "id": "s365",
    "name": "鳳山目的地充電站",
    "network": "自建",
    "address": "高雄市鳳山區光明路431號",
    "city": "高雄市",
    "lat": 22.6301,
    "lng": 120.3595,
    "totalStalls": 8,
    "availableStalls": 1,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 22,
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
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.8,
    "pricePerKwh": 3
  },
  {
    "id": "s366",
    "name": "鳳山U-Power站",
    "network": "U-Power",
    "address": "高雄市鳳山區民權路467號",
    "city": "高雄市",
    "lat": 22.628,
    "lng": 120.3552,
    "totalStalls": 4,
    "availableStalls": 2,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 215,
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.9,
    "pricePerKwh": 6.8
  },
  {
    "id": "s367",
    "name": "鳳山裕電站",
    "network": "裕電能源",
    "address": "高雄市鳳山區文化路978號",
    "city": "高雄市",
    "lat": 22.6266,
    "lng": 120.3557,
    "totalStalls": 6,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 118,
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.3,
    "pricePerKwh": 6.2
  },
  {
    "id": "s368",
    "name": "鳳山U-Power站",
    "network": "U-Power",
    "address": "高雄市鳳山區民權路722號",
    "city": "高雄市",
    "lat": 22.6467,
    "lng": 120.3621,
    "totalStalls": 9,
    "availableStalls": 7,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 213,
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
    "openHours": "24小時",
    "rating": 4.1,
    "pricePerKwh": 6.8
  },
  {
    "id": "s369",
    "name": "鳳山中油充電站",
    "network": "台灣中油",
    "address": "高雄市鳳山區博愛路213號",
    "city": "高雄市",
    "lat": 22.6446,
    "lng": 120.3603,
    "totalStalls": 3,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 103,
    "amenities": [],
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
    "rating": 4.5,
    "pricePerKwh": 5.5
  },
  {
    "id": "s370",
    "name": "鳳山停車場充電站",
    "network": "停車場自建",
    "address": "高雄市鳳山區民生路523號",
    "city": "高雄市",
    "lat": 22.6438,
    "lng": 120.3599,
    "totalStalls": 11,
    "availableStalls": 4,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2",
      "CCS2"
    ],
    "maxKw": 15,
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
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4,
    "pricePerKwh": 3.5
  },
  {
    "id": "s371",
    "name": "鳳山目的地充電站",
    "network": "自建",
    "address": "高雄市鳳山區民族路462號",
    "city": "高雄市",
    "lat": 22.6423,
    "lng": 120.3638,
    "totalStalls": 2,
    "availableStalls": 1,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 15,
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
    "openHours": "24小時",
    "rating": 4,
    "pricePerKwh": 4
  },
  {
    "id": "s372",
    "name": "楠梓U-Power站",
    "network": "U-Power",
    "address": "高雄市楠梓區成功路994號",
    "city": "高雄市",
    "lat": 22.7287,
    "lng": 120.314,
    "totalStalls": 7,
    "availableStalls": 2,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 231,
    "amenities": [
      "parking",
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
    "openHours": "24小時",
    "rating": 3.5,
    "pricePerKwh": 6.8
  },
  {
    "id": "s373",
    "name": "楠梓特斯拉超充站",
    "network": "Tesla",
    "address": "高雄市楠梓區五福路234號",
    "city": "高雄市",
    "lat": 22.7283,
    "lng": 120.3173,
    "totalStalls": 9,
    "availableStalls": 4,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 234,
    "amenities": [
      "restaurant",
      "shopping",
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
    "rating": 4.6,
    "pricePerKwh": 7
  },
  {
    "id": "s374",
    "name": "楠梓中油充電站",
    "network": "台灣中油",
    "address": "高雄市楠梓區光明路562號",
    "city": "高雄市",
    "lat": 22.7401,
    "lng": 120.305,
    "totalStalls": 6,
    "availableStalls": 4,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 112,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "24小時",
    "rating": 3.6,
    "pricePerKwh": 5
  },
  {
    "id": "s375",
    "name": "楠梓停車場充電站",
    "network": "停車場自建",
    "address": "高雄市楠梓區建國路999號",
    "city": "高雄市",
    "lat": 22.7372,
    "lng": 120.3066,
    "totalStalls": 9,
    "availableStalls": 3,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2",
      "CCS2"
    ],
    "maxKw": 8,
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
        "status": "faulted"
      }
    ],
    "openHours": "24小時",
    "rating": 4.9,
    "pricePerKwh": 4
  },
  {
    "id": "s376",
    "name": "楠梓特斯拉超充站",
    "network": "Tesla",
    "address": "高雄市楠梓區中正路354號",
    "city": "高雄市",
    "lat": 22.7401,
    "lng": 120.3046,
    "totalStalls": 12,
    "availableStalls": 2,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 241,
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
    "rating": 3.8,
    "pricePerKwh": 6.8
  },
  {
    "id": "s377",
    "name": "楠梓台電充電站",
    "network": "台灣電力",
    "address": "高雄市楠梓區光復路694號",
    "city": "高雄市",
    "lat": 22.7395,
    "lng": 120.3064,
    "totalStalls": 4,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 113,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.3,
    "pricePerKwh": 5
  },
  {
    "id": "s378",
    "name": "大寮中油充電站",
    "network": "台灣中油",
    "address": "高雄市大寮區自由路251號",
    "city": "高雄市",
    "lat": 22.6676,
    "lng": 120.4,
    "totalStalls": 4,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 107,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.3,
    "pricePerKwh": 5
  },
  {
    "id": "s379",
    "name": "大寮U-Power站",
    "network": "U-Power",
    "address": "高雄市大寮區中山路811號",
    "city": "高雄市",
    "lat": 22.6696,
    "lng": 120.4043,
    "totalStalls": 10,
    "availableStalls": 9,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 212,
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
      }
    ],
    "openHours": "24小時",
    "rating": 3.9,
    "pricePerKwh": 6.8
  },
  {
    "id": "s380",
    "name": "大寮特斯拉超充站",
    "network": "Tesla",
    "address": "高雄市大寮區和平路571號",
    "city": "高雄市",
    "lat": 22.6699,
    "lng": 120.3999,
    "totalStalls": 18,
    "availableStalls": 7,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 188,
    "amenities": [
      "shopping",
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
      },
      {
        "id": 17,
        "status": "in_use"
      },
      {
        "id": 18,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.5,
    "pricePerKwh": 6.8
  },
  {
    "id": "s381",
    "name": "大寮停車場充電站",
    "network": "停車場自建",
    "address": "高雄市大寮區復興路342號",
    "city": "高雄市",
    "lat": 22.6694,
    "lng": 120.4031,
    "totalStalls": 9,
    "availableStalls": 0,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2",
      "CCS2"
    ],
    "maxKw": 10,
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.5,
    "pricePerKwh": 3.5
  },
  {
    "id": "s382",
    "name": "橋頭特斯拉超充站",
    "network": "Tesla",
    "address": "高雄市橋頭區七賢路243號",
    "city": "高雄市",
    "lat": 22.7816,
    "lng": 120.2965,
    "totalStalls": 8,
    "availableStalls": 5,
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
    "rating": 3.7,
    "pricePerKwh": 6.8
  },
  {
    "id": "s383",
    "name": "橋頭停車場充電站",
    "network": "停車場自建",
    "address": "高雄市橋頭區博愛路325號",
    "city": "高雄市",
    "lat": 22.7782,
    "lng": 120.298,
    "totalStalls": 15,
    "availableStalls": 5,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2",
      "CCS2"
    ],
    "maxKw": 22,
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
    "rating": 3.5,
    "pricePerKwh": 3.5
  },
  {
    "id": "s384",
    "name": "橋頭ForMosa站",
    "network": "ForMosa EV",
    "address": "高雄市橋頭區信義路478號",
    "city": "高雄市",
    "lat": 22.7789,
    "lng": 120.2971,
    "totalStalls": 8,
    "availableStalls": 2,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 244,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "24小時",
    "rating": 3.9,
    "pricePerKwh": 5.5
  },
  {
    "id": "s385",
    "name": "橋頭裕電站",
    "network": "裕電能源",
    "address": "高雄市橋頭區博愛路813號",
    "city": "高雄市",
    "lat": 22.7821,
    "lng": 120.2985,
    "totalStalls": 4,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 138,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.1,
    "pricePerKwh": 6
  },
  {
    "id": "s386",
    "name": "岡山停車場充電站",
    "network": "停車場自建",
    "address": "高雄市岡山區忠孝路168號",
    "city": "高雄市",
    "lat": 22.7983,
    "lng": 120.292,
    "totalStalls": 13,
    "availableStalls": 4,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2",
      "CCS2"
    ],
    "maxKw": 12,
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
    "rating": 3.7,
    "pricePerKwh": 4
  },
  {
    "id": "s387",
    "name": "岡山ForMosa站",
    "network": "ForMosa EV",
    "address": "高雄市岡山區文心路432號",
    "city": "高雄市",
    "lat": 22.7987,
    "lng": 120.2963,
    "totalStalls": 6,
    "availableStalls": 0,
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
    "rating": 5,
    "pricePerKwh": 5.5
  },
  {
    "id": "s388",
    "name": "岡山目的地充電站",
    "network": "自建",
    "address": "高雄市岡山區成功路328號",
    "city": "高雄市",
    "lat": 22.7946,
    "lng": 120.2955,
    "totalStalls": 3,
    "availableStalls": 2,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 19,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.5,
    "pricePerKwh": 3
  },
  {
    "id": "s389",
    "name": "梓官ForMosa站",
    "network": "ForMosa EV",
    "address": "高雄市梓官區自由路595號",
    "city": "高雄市",
    "lat": 22.7153,
    "lng": 120.2655,
    "totalStalls": 5,
    "availableStalls": 4,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 201,
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
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.7,
    "pricePerKwh": 5.8
  },
  {
    "id": "s390",
    "name": "梓官停車場充電站",
    "network": "停車場自建",
    "address": "高雄市梓官區南投路566號",
    "city": "高雄市",
    "lat": 22.7157,
    "lng": 120.2647,
    "totalStalls": 13,
    "availableStalls": 5,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 14,
    "amenities": [
      "parking",
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
    "rating": 4.3,
    "pricePerKwh": 3.5
  },
  {
    "id": "s391",
    "name": "梓官中油充電站",
    "network": "台灣中油",
    "address": "高雄市梓官區建國路218號",
    "city": "高雄市",
    "lat": 22.7172,
    "lng": 120.268,
    "totalStalls": 5,
    "availableStalls": 3,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 108,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "24小時",
    "rating": 3.7,
    "pricePerKwh": 5
  },
  {
    "id": "s392",
    "name": "屏東目的地充電站",
    "network": "自建",
    "address": "屏東縣屏東市大安路988號",
    "city": "屏東縣",
    "lat": 22.6678,
    "lng": 120.487,
    "totalStalls": 3,
    "availableStalls": 0,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 22,
    "amenities": [
      "parking",
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
    "openHours": "24小時",
    "rating": 4.2,
    "pricePerKwh": 4
  },
  {
    "id": "s393",
    "name": "屏東中油充電站",
    "network": "台灣中油",
    "address": "屏東縣屏東市成功路622號",
    "city": "屏東縣",
    "lat": 22.673,
    "lng": 120.4876,
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
    "rating": 4.4,
    "pricePerKwh": 5
  },
  {
    "id": "s394",
    "name": "屏東台電充電站",
    "network": "台灣電力",
    "address": "屏東縣屏東市光明路678號",
    "city": "屏東縣",
    "lat": 22.6718,
    "lng": 120.4869,
    "totalStalls": 3,
    "availableStalls": 1,
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
        "status": "in_use"
      },
      {
        "id": 3,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.6,
    "pricePerKwh": 5
  },
  {
    "id": "s395",
    "name": "屏東特斯拉超充站",
    "network": "Tesla",
    "address": "屏東縣屏東市南京路284號",
    "city": "屏東縣",
    "lat": 22.6573,
    "lng": 120.4905,
    "totalStalls": 8,
    "availableStalls": 3,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 205,
    "amenities": [
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
    "rating": 4.6,
    "pricePerKwh": 7.5
  },
  {
    "id": "s396",
    "name": "屏東U-Power站",
    "network": "U-Power",
    "address": "屏東縣屏東市民族路429號",
    "city": "屏東縣",
    "lat": 22.6588,
    "lng": 120.4905,
    "totalStalls": 6,
    "availableStalls": 4,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 196,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.4,
    "pricePerKwh": 6.8
  },
  {
    "id": "s397",
    "name": "屏東台電充電站",
    "network": "台灣電力",
    "address": "屏東縣屏東市信義路145號",
    "city": "屏東縣",
    "lat": 22.657,
    "lng": 120.4913,
    "totalStalls": 2,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 110,
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
    "openHours": "06:00–22:00",
    "rating": 4.3,
    "pricePerKwh": 5
  },
  {
    "id": "s398",
    "name": "屏東目的地充電站",
    "network": "自建",
    "address": "屏東縣屏東市復興路816號",
    "city": "屏東縣",
    "lat": 22.6595,
    "lng": 120.4924,
    "totalStalls": 5,
    "availableStalls": 2,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 22,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "24小時",
    "rating": 3.6,
    "pricePerKwh": 3
  },
  {
    "id": "s399",
    "name": "潮州中油充電站",
    "network": "台灣中油",
    "address": "屏東縣潮州鎮民生路394號",
    "city": "屏東縣",
    "lat": 22.4998,
    "lng": 120.5436,
    "totalStalls": 5,
    "availableStalls": 4,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 106,
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
      }
    ],
    "openHours": "24小時",
    "rating": 3.9,
    "pricePerKwh": 5
  },
  {
    "id": "s400",
    "name": "潮州ForMosa站",
    "network": "ForMosa EV",
    "address": "屏東縣潮州鎮成功路389號",
    "city": "屏東縣",
    "lat": 22.4989,
    "lng": 120.544,
    "totalStalls": 7,
    "availableStalls": 5,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 94,
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.5,
    "pricePerKwh": 5.5
  },
  {
    "id": "s401",
    "name": "潮州停車場充電站",
    "network": "停車場自建",
    "address": "屏東縣潮州鎮和平路242號",
    "city": "屏東縣",
    "lat": 22.4966,
    "lng": 120.5435,
    "totalStalls": 11,
    "availableStalls": 2,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2",
      "CCS2"
    ],
    "maxKw": 13,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.2,
    "pricePerKwh": 4
  },
  {
    "id": "s402",
    "name": "東港台電充電站",
    "network": "台灣電力",
    "address": "屏東縣東港鎮光明路996號",
    "city": "屏東縣",
    "lat": 22.4595,
    "lng": 120.6506,
    "totalStalls": 6,
    "availableStalls": 3,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 85,
    "amenities": [
      "parking",
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
    "openHours": "07:00–23:00",
    "rating": 5,
    "pricePerKwh": 4.8
  },
  {
    "id": "s403",
    "name": "東港ForMosa站",
    "network": "ForMosa EV",
    "address": "屏東縣東港鎮南京路791號",
    "city": "屏東縣",
    "lat": 22.4636,
    "lng": 120.6496,
    "totalStalls": 4,
    "availableStalls": 2,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 128,
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
    "rating": 5,
    "pricePerKwh": 5.8
  },
  {
    "id": "s404",
    "name": "東港裕電站",
    "network": "裕電能源",
    "address": "屏東縣東港鎮中山路790號",
    "city": "屏東縣",
    "lat": 22.4613,
    "lng": 120.6516,
    "totalStalls": 6,
    "availableStalls": 4,
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
    "rating": 4.5,
    "pricePerKwh": 5.8
  },
  {
    "id": "s405",
    "name": "恆春裕電站",
    "network": "裕電能源",
    "address": "屏東縣恆春鎮中華路321號",
    "city": "屏東縣",
    "lat": 22.3406,
    "lng": 120.5897,
    "totalStalls": 9,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 84,
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
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.4,
    "pricePerKwh": 6.2
  },
  {
    "id": "s406",
    "name": "恆春ForMosa站",
    "network": "ForMosa EV",
    "address": "屏東縣恆春鎮南投路726號",
    "city": "屏東縣",
    "lat": 22.3401,
    "lng": 120.589,
    "totalStalls": 4,
    "availableStalls": 2,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 135,
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
      }
    ],
    "openHours": "24小時",
    "rating": 3.9,
    "pricePerKwh": 5.5
  },
  {
    "id": "s407",
    "name": "萬丹目的地充電站",
    "network": "自建",
    "address": "屏東縣萬丹鄉南京路939號",
    "city": "屏東縣",
    "lat": 22.5404,
    "lng": 120.6231,
    "totalStalls": 3,
    "availableStalls": 2,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 21,
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.7,
    "pricePerKwh": 4
  },
  {
    "id": "s408",
    "name": "萬丹ForMosa站",
    "network": "ForMosa EV",
    "address": "屏東縣萬丹鄉五福路887號",
    "city": "屏東縣",
    "lat": 22.5426,
    "lng": 120.6233,
    "totalStalls": 6,
    "availableStalls": 4,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 217,
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.7,
    "pricePerKwh": 5.5
  },
  {
    "id": "s409",
    "name": "萬丹台電充電站",
    "network": "台灣電力",
    "address": "屏東縣萬丹鄉光明路653號",
    "city": "屏東縣",
    "lat": 22.5421,
    "lng": 120.6231,
    "totalStalls": 2,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 89,
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
    "openHours": "06:00–22:00",
    "rating": 4.4,
    "pricePerKwh": 5
  },
  {
    "id": "s410",
    "name": "宜蘭裕電站",
    "network": "裕電能源",
    "address": "宜蘭縣宜蘭市七賢路451號",
    "city": "宜蘭縣",
    "lat": 24.7543,
    "lng": 121.7548,
    "totalStalls": 5,
    "availableStalls": 2,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 246,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 3.7,
    "pricePerKwh": 5.8
  },
  {
    "id": "s411",
    "name": "宜蘭U-Power站",
    "network": "U-Power",
    "address": "宜蘭縣宜蘭市博愛路491號",
    "city": "宜蘭縣",
    "lat": 24.7544,
    "lng": 121.7534,
    "totalStalls": 7,
    "availableStalls": 5,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 120,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "24小時",
    "rating": 3.9,
    "pricePerKwh": 6.5
  },
  {
    "id": "s412",
    "name": "羅東ForMosa站",
    "network": "ForMosa EV",
    "address": "宜蘭縣羅東鎮南京路673號",
    "city": "宜蘭縣",
    "lat": 24.6789,
    "lng": 121.7678,
    "totalStalls": 6,
    "availableStalls": 2,
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
    "rating": 4,
    "pricePerKwh": 5.5
  },
  {
    "id": "s413",
    "name": "羅東中油充電站",
    "network": "台灣中油",
    "address": "宜蘭縣羅東鎮復興路221號",
    "city": "宜蘭縣",
    "lat": 24.6757,
    "lng": 121.7727,
    "totalStalls": 3,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 84,
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
    "openHours": "24小時",
    "rating": 3.8,
    "pricePerKwh": 5.5
  },
  {
    "id": "s414",
    "name": "羅東U-Power站",
    "network": "U-Power",
    "address": "宜蘭縣羅東鎮北平路797號",
    "city": "宜蘭縣",
    "lat": 24.658,
    "lng": 121.7594,
    "totalStalls": 6,
    "availableStalls": 2,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 180,
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
      }
    ],
    "openHours": "24小時",
    "rating": 3.6,
    "pricePerKwh": 6.3
  },
  {
    "id": "s415",
    "name": "羅東目的地充電站",
    "network": "自建",
    "address": "宜蘭縣羅東鎮信義路973號",
    "city": "宜蘭縣",
    "lat": 24.6609,
    "lng": 121.76,
    "totalStalls": 5,
    "availableStalls": 3,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 15,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.8,
    "pricePerKwh": 3
  },
  {
    "id": "s416",
    "name": "礁溪中油充電站",
    "network": "台灣中油",
    "address": "宜蘭縣礁溪鄉中華路150號",
    "city": "宜蘭縣",
    "lat": 24.8251,
    "lng": 121.8041,
    "totalStalls": 5,
    "availableStalls": 2,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 145,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4.2,
    "pricePerKwh": 5.5
  },
  {
    "id": "s417",
    "name": "礁溪台電充電站",
    "network": "台灣電力",
    "address": "宜蘭縣礁溪鄉南投路778號",
    "city": "宜蘭縣",
    "lat": 24.8262,
    "lng": 121.8027,
    "totalStalls": 2,
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
    "pricePerKwh": 5
  },
  {
    "id": "s418",
    "name": "礁溪特斯拉超充站",
    "network": "Tesla",
    "address": "宜蘭縣礁溪鄉和平路488號",
    "city": "宜蘭縣",
    "lat": 24.8253,
    "lng": 121.8016,
    "totalStalls": 17,
    "availableStalls": 11,
    "chargerType": "V4",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 333,
    "amenities": [
      "restaurant",
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
      },
      {
        "id": 17,
        "status": "in_use"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 3.9,
    "pricePerKwh": 6.8
  },
  {
    "id": "s419",
    "name": "礁溪ForMosa站",
    "network": "ForMosa EV",
    "address": "宜蘭縣礁溪鄉仁愛路944號",
    "city": "宜蘭縣",
    "lat": 24.8258,
    "lng": 121.8041,
    "totalStalls": 6,
    "availableStalls": 3,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 123,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.9,
    "pricePerKwh": 5.8
  },
  {
    "id": "s420",
    "name": "冬山特斯拉超充站",
    "network": "Tesla",
    "address": "宜蘭縣冬山鄉自由路189號",
    "city": "宜蘭縣",
    "lat": 24.7034,
    "lng": 121.7793,
    "totalStalls": 10,
    "availableStalls": 5,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 195,
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
    "pricePerKwh": 7
  },
  {
    "id": "s421",
    "name": "冬山中油充電站",
    "network": "台灣中油",
    "address": "宜蘭縣冬山鄉十全路475號",
    "city": "宜蘭縣",
    "lat": 24.7047,
    "lng": 121.7789,
    "totalStalls": 3,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 99,
    "amenities": [
      "parking",
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
    "rating": 3.8,
    "pricePerKwh": 5.5
  },
  {
    "id": "s422",
    "name": "冬山ForMosa站",
    "network": "ForMosa EV",
    "address": "宜蘭縣冬山鄉復興路399號",
    "city": "宜蘭縣",
    "lat": 24.7037,
    "lng": 121.7794,
    "totalStalls": 8,
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
    "openHours": "06:00–22:00",
    "rating": 4.4,
    "pricePerKwh": 5.5
  },
  {
    "id": "s423",
    "name": "蘇澳ForMosa站",
    "network": "ForMosa EV",
    "address": "宜蘭縣蘇澳鎮光明路243號",
    "city": "宜蘭縣",
    "lat": 24.6008,
    "lng": 121.8417,
    "totalStalls": 7,
    "availableStalls": 3,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 112,
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
      }
    ],
    "openHours": "24小時",
    "rating": 3.6,
    "pricePerKwh": 5.8
  },
  {
    "id": "s424",
    "name": "蘇澳裕電站",
    "network": "裕電能源",
    "address": "宜蘭縣蘇澳鎮自強路997號",
    "city": "宜蘭縣",
    "lat": 24.5958,
    "lng": 121.8431,
    "totalStalls": 10,
    "availableStalls": 6,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 131,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 3.9,
    "pricePerKwh": 5.8
  },
  {
    "id": "s425",
    "name": "蘇澳U-Power站",
    "network": "U-Power",
    "address": "宜蘭縣蘇澳鎮自強路460號",
    "city": "宜蘭縣",
    "lat": 24.5963,
    "lng": 121.8415,
    "totalStalls": 4,
    "availableStalls": 1,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 232,
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
    "rating": 4.2,
    "pricePerKwh": 6.3
  },
  {
    "id": "s426",
    "name": "花蓮停車場充電站",
    "network": "停車場自建",
    "address": "花蓮縣花蓮市民族路476號",
    "city": "花蓮縣",
    "lat": 23.9793,
    "lng": 121.6026,
    "totalStalls": 11,
    "availableStalls": 7,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2",
      "CCS2"
    ],
    "maxKw": 11,
    "amenities": [
      "parking",
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
    "rating": 4.6,
    "pricePerKwh": 4.5
  },
  {
    "id": "s427",
    "name": "花蓮ForMosa站",
    "network": "ForMosa EV",
    "address": "花蓮縣花蓮市和平路912號",
    "city": "花蓮縣",
    "lat": 23.979,
    "lng": 121.6018,
    "totalStalls": 5,
    "availableStalls": 1,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 135,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.7,
    "pricePerKwh": 5.5
  },
  {
    "id": "s428",
    "name": "花蓮裕電站",
    "network": "裕電能源",
    "address": "花蓮縣花蓮市台灣大道316號",
    "city": "花蓮縣",
    "lat": 23.9674,
    "lng": 121.5985,
    "totalStalls": 7,
    "availableStalls": 0,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 184,
    "amenities": [
      "parking",
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
    "rating": 4.2,
    "pricePerKwh": 5.8
  },
  {
    "id": "s429",
    "name": "花蓮特斯拉超充站",
    "network": "Tesla",
    "address": "花蓮縣花蓮市南京路719號",
    "city": "花蓮縣",
    "lat": 23.9633,
    "lng": 121.5989,
    "totalStalls": 20,
    "availableStalls": 11,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 231,
    "amenities": [
      "restaurant",
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
      },
      {
        "id": 17,
        "status": "in_use"
      },
      {
        "id": 18,
        "status": "in_use"
      },
      {
        "id": 19,
        "status": "in_use"
      },
      {
        "id": 20,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.8,
    "pricePerKwh": 6.8
  },
  {
    "id": "s430",
    "name": "花蓮目的地充電站",
    "network": "自建",
    "address": "花蓮縣花蓮市五福路697號",
    "city": "花蓮縣",
    "lat": 23.9671,
    "lng": 121.5973,
    "totalStalls": 8,
    "availableStalls": 2,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 20,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 4,
    "pricePerKwh": 4
  },
  {
    "id": "s431",
    "name": "新城裕電站",
    "network": "裕電能源",
    "address": "花蓮縣新城鄉光復路569號",
    "city": "花蓮縣",
    "lat": 24.03,
    "lng": 121.6193,
    "totalStalls": 8,
    "availableStalls": 4,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 102,
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
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.7,
    "pricePerKwh": 6
  },
  {
    "id": "s432",
    "name": "新城停車場充電站",
    "network": "停車場自建",
    "address": "花蓮縣新城鄉十全路686號",
    "city": "花蓮縣",
    "lat": 24.0284,
    "lng": 121.6193,
    "totalStalls": 15,
    "availableStalls": 2,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 10,
    "amenities": [
      "parking",
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
    "pricePerKwh": 4.5
  },
  {
    "id": "s433",
    "name": "新城特斯拉超充站",
    "network": "Tesla",
    "address": "花蓮縣新城鄉忠孝路467號",
    "city": "花蓮縣",
    "lat": 24.031,
    "lng": 121.6209,
    "totalStalls": 11,
    "availableStalls": 7,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 200,
    "amenities": [
      "restaurant",
      "shopping",
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
    "pricePerKwh": 6.8
  },
  {
    "id": "s434",
    "name": "新城中油充電站",
    "network": "台灣中油",
    "address": "花蓮縣新城鄉忠孝路388號",
    "city": "花蓮縣",
    "lat": 24.0285,
    "lng": 121.6204,
    "totalStalls": 4,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 102,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "24小時",
    "rating": 4,
    "pricePerKwh": 5.5
  },
  {
    "id": "s435",
    "name": "鳳林ForMosa站",
    "network": "ForMosa EV",
    "address": "花蓮縣鳳林鎮七賢路482號",
    "city": "花蓮縣",
    "lat": 23.74,
    "lng": 121.4821,
    "totalStalls": 7,
    "availableStalls": 2,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 116,
    "amenities": [
      "parking",
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
    "openHours": "24小時",
    "rating": 3.9,
    "pricePerKwh": 5.8
  },
  {
    "id": "s436",
    "name": "鳳林台電充電站",
    "network": "台灣電力",
    "address": "花蓮縣鳳林鎮民族路374號",
    "city": "花蓮縣",
    "lat": 23.7436,
    "lng": 121.4813,
    "totalStalls": 5,
    "availableStalls": 3,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 134,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "24小時",
    "rating": 3.8,
    "pricePerKwh": 5
  },
  {
    "id": "s437",
    "name": "鳳林U-Power站",
    "network": "U-Power",
    "address": "花蓮縣鳳林鎮彰化路630號",
    "city": "花蓮縣",
    "lat": 23.7424,
    "lng": 121.4852,
    "totalStalls": 9,
    "availableStalls": 4,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 196,
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
      }
    ],
    "openHours": "24小時",
    "rating": 3.8,
    "pricePerKwh": 6.8
  },
  {
    "id": "s438",
    "name": "鳳林目的地充電站",
    "network": "自建",
    "address": "花蓮縣鳳林鎮自強路810號",
    "city": "花蓮縣",
    "lat": 23.7444,
    "lng": 121.4846,
    "totalStalls": 7,
    "availableStalls": 1,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 18,
    "amenities": [
      "parking",
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
    "openHours": "24小時",
    "rating": 3.9,
    "pricePerKwh": 4
  },
  {
    "id": "s439",
    "name": "玉里特斯拉超充站",
    "network": "Tesla",
    "address": "花蓮縣玉里鎮和平路880號",
    "city": "花蓮縣",
    "lat": 23.3539,
    "lng": 121.4148,
    "totalStalls": 6,
    "availableStalls": 4,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 207,
    "amenities": [
      "restaurant",
      "shopping",
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
      },
      {
        "id": 6,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.9,
    "pricePerKwh": 7.5
  },
  {
    "id": "s440",
    "name": "玉里台電充電站",
    "network": "台灣電力",
    "address": "花蓮縣玉里鎮南京路346號",
    "city": "花蓮縣",
    "lat": 23.3557,
    "lng": 121.4157,
    "totalStalls": 5,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 88,
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
      }
    ],
    "openHours": "24小時",
    "rating": 3.8,
    "pricePerKwh": 4.8
  },
  {
    "id": "s441",
    "name": "台東中油充電站",
    "network": "台灣中油",
    "address": "台東縣台東市長安路743號",
    "city": "台東縣",
    "lat": 22.7539,
    "lng": 121.1521,
    "totalStalls": 5,
    "availableStalls": 0,
    "chargerType": "V2",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
    ],
    "maxKw": 116,
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
        "status": "faulted"
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 3.9,
    "pricePerKwh": 5.5
  },
  {
    "id": "s442",
    "name": "台東U-Power站",
    "network": "U-Power",
    "address": "台東縣台東市忠孝路749號",
    "city": "台東縣",
    "lat": 22.7517,
    "lng": 121.1499,
    "totalStalls": 9,
    "availableStalls": 4,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 196,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.6,
    "pricePerKwh": 6.8
  },
  {
    "id": "s443",
    "name": "台東ForMosa站",
    "network": "ForMosa EV",
    "address": "台東縣台東市文化路865號",
    "city": "台東縣",
    "lat": 22.7513,
    "lng": 121.1475,
    "totalStalls": 7,
    "availableStalls": 5,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2",
      "CHAdeMO"
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
        "status": "in_use"
      },
      {
        "id": 7,
        "status": "in_use"
      }
    ],
    "openHours": "07:00–23:00",
    "rating": 5,
    "pricePerKwh": 5.5
  },
  {
    "id": "s444",
    "name": "台東停車場充電站",
    "network": "停車場自建",
    "address": "台東縣台東市文化路937號",
    "city": "台東縣",
    "lat": 22.754,
    "lng": 121.1498,
    "totalStalls": 15,
    "availableStalls": 5,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2",
      "CCS2"
    ],
    "maxKw": 21,
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
    "rating": 4.5,
    "pricePerKwh": 3.5
  },
  {
    "id": "s445",
    "name": "台東目的地充電站",
    "network": "自建",
    "address": "台東縣台東市建國路159號",
    "city": "台東縣",
    "lat": 22.7627,
    "lng": 121.1543,
    "totalStalls": 7,
    "availableStalls": 0,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 20,
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
      }
    ],
    "openHours": "24小時",
    "rating": 4.3,
    "pricePerKwh": 3
  },
  {
    "id": "s446",
    "name": "台東裕電站",
    "network": "裕電能源",
    "address": "台東縣台東市復興路362號",
    "city": "台東縣",
    "lat": 22.7608,
    "lng": 121.1531,
    "totalStalls": 4,
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
      }
    ],
    "openHours": "24小時",
    "rating": 3.5,
    "pricePerKwh": 5.8
  },
  {
    "id": "s447",
    "name": "成功目的地充電站",
    "network": "自建",
    "address": "台東縣成功鎮台灣大道719號",
    "city": "台東縣",
    "lat": 23.1016,
    "lng": 121.3641,
    "totalStalls": 2,
    "availableStalls": 1,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2"
    ],
    "maxKw": 14,
    "amenities": [
      "parking",
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
      }
    ],
    "openHours": "24小時",
    "rating": 3.7,
    "pricePerKwh": 4
  },
  {
    "id": "s448",
    "name": "成功停車場充電站",
    "network": "停車場自建",
    "address": "台東縣成功鎮建國路790號",
    "city": "台東縣",
    "lat": 23.1016,
    "lng": 121.3667,
    "totalStalls": 5,
    "availableStalls": 0,
    "chargerType": "AC",
    "stationType": "destination",
    "connectors": [
      "Type2",
      "CCS2"
    ],
    "maxKw": 7,
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
    "rating": 4.6,
    "pricePerKwh": 3.5
  },
  {
    "id": "s449",
    "name": "關山U-Power站",
    "network": "U-Power",
    "address": "台東縣關山鎮文心路998號",
    "city": "台東縣",
    "lat": 23.0436,
    "lng": 121.1677,
    "totalStalls": 7,
    "availableStalls": 1,
    "chargerType": "V3",
    "stationType": "public",
    "connectors": [
      "CCS2"
    ],
    "maxKw": 189,
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
      }
    ],
    "openHours": "06:00–22:00",
    "rating": 4.1,
    "pricePerKwh": 6.8
  },
  {
    "id": "s450",
    "name": "關山特斯拉超充站",
    "network": "Tesla",
    "address": "台東縣關山鎮和平路411號",
    "city": "台東縣",
    "lat": 23.0445,
    "lng": 121.1687,
    "totalStalls": 18,
    "availableStalls": 12,
    "chargerType": "V3",
    "stationType": "supercharger",
    "connectors": [
      "CCS2",
      "NACS"
    ],
    "maxKw": 211,
    "amenities": [
      "restaurant",
      "shopping",
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
      },
      {
        "id": 17,
        "status": "in_use"
      },
      {
        "id": 18,
        "status": "in_use"
      }
    ],
    "openHours": "24小時",
    "rating": 4.9,
    "pricePerKwh": 7.5
  },
  {
    "id": "s451",
    "name": "關山台電充電站",
    "network": "台灣電力",
    "address": "台東縣關山鎮文心路730號",
    "city": "台東縣",
    "lat": 23.0481,
    "lng": 121.1718,
    "totalStalls": 4,
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
    "openHours": "06:00–22:00",
    "rating": 4.6,
    "pricePerKwh": 4.8
  },
  {
    "id": "s452",
    "name": "關山ForMosa站",
    "network": "ForMosa EV",
    "address": "台東縣關山鎮南京路145號",
    "city": "台東縣",
    "lat": 23.0447,
    "lng": 121.1688,
    "totalStalls": 6,
    "availableStalls": 2,
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
    "pricePerKwh": 5.5
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

export function getMarkerColor(s: Station) {
  if (s.chargerType === 'AC' || s.stationType === 'destination') return { stroke: '#16a34a', border: '#86efac', bg: '#f0fdf4' };
  if (s.chargerType === 'V4') return { stroke: '#7c3aed', border: '#c4b5fd', bg: '#f5f3ff' };
  if (s.chargerType === 'V3') return { stroke: '#2563eb', border: '#93c5fd', bg: '#eff6ff' };
  return { stroke: '#6b7280', border: '#d1d5db', bg: '#f9fafb' };
}

export function haversine(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(dLat/2)**2 + Math.cos(lat1*Math.PI/180)*Math.cos(lat2*Math.PI/180)*Math.sin(dLng/2)**2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}
