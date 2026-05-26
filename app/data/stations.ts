export interface ChargingStation {
  id: string;
  name: string;
  address: string;
  city: string;
  lat: number;
  lng: number;
  type: string;
  connectors: number;
  available: number;
}

export const sampleStations: ChargingStation[] = [
  {
    id: "sc-taipei-city-hall",
    name: "Taipei City Hall Supercharger",
    address: "No. 1, Shifu Road, Xinyi District, Taipei",
    city: "Taipei",
    lat: 25.0400,
    lng: 121.5644,
    type: "Tesla Supercharger",
    connectors: 12,
    available: 5
  },
  {
    id: "sc-taipei-neihu",
    name: "Taipei Neihu Supercharger",
    address: "No. 2, Ruiguang Road, Neihu District, Taipei",
    city: "Taipei",
    lat: 25.0825,
    lng: 121.5672,
    type: "Tesla Supercharger",
    connectors: 8,
    available: 3
  },
  {
    id: "sc-linkou",
    name: "New Taipei Linkou Supercharger",
    address: "Linkou District, New Taipei City",
    city: "New Taipei",
    lat: 25.0800,
    lng: 121.3855,
    type: "Tesla Supercharger",
    connectors: 10,
    available: 7
  },
  {
    id: "sc-taoyuan-airport",
    name: "Taoyuan Airport Supercharger",
    address: "Dayuan District, Taoyuan City",
    city: "Taoyuan",
    lat: 25.0797,
    lng: 121.2342,
    type: "Tesla Supercharger",
    connectors: 12,
    available: 9
  },
  {
    id: "sc-hsinchu",
    name: "Hsinchu Big City Supercharger",
    address: "No. 6, Zhubei Road, East District, Hsinchu",
    city: "Hsinchu",
    lat: 24.8010,
    lng: 120.9726,
    type: "Tesla Supercharger",
    connectors: 8,
    available: 6
  },
  {
    id: "sc-taichung",
    name: "Taichung Park Lane Supercharger",
    address: "Xitun District, Taichung City",
    city: "Taichung",
    lat: 24.1628,
    lng: 120.6469,
    type: "Tesla Supercharger",
    connectors: 10,
    available: 4
  },
  {
    id: "sc-chiayi",
    name: "Chiayi Supercharger",
    address: "East District, Chiayi City",
    city: "Chiayi",
    lat: 23.4800,
    lng: 120.4490,
    type: "Tesla Supercharger",
    connectors: 6,
    available: 5
  },
  {
    id: "sc-tainan",
    name: "Tainan Supercharger",
    address: "North District, Tainan City",
    city: "Tainan",
    lat: 22.9998,
    lng: 120.2269,
    type: "Tesla Supercharger",
    connectors: 8,
    available: 2
  },
  {
    id: "sc-kaohsiung",
    name: "Kaohsiung Dream Mall Supercharger",
    address: "No. 789, Zhonghua 5th Road, Qianzhen District, Kaohsiung",
    city: "Kaohsiung",
    lat: 22.6093,
    lng: 120.2986,
    type: "Tesla Supercharger",
    connectors: 8,
    available: 4
  },
  {
    id: "sc-hualien",
    name: "Hualien Supercharger",
    address: "Hualien City, Hualien County",
    city: "Hualien",
    lat: 24.0020,
    lng: 121.6130,
    type: "Tesla Supercharger",
    connectors: 6,
    available: 3
  },
  {
    id: "sc-yilan",
    name: "Yilan Supercharger",
    address: "Yilan City, Yilan County",
    city: "Yilan",
    lat: 24.7530,
    lng: 121.7534,
    type: "Tesla Supercharger",
    connectors: 4,
    available: 3
  },
  {
    id: "sc-keelung",
    name: "Keelung Supercharger",
    address: "Zhongzheng District, Keelung City",
    city: "Keelung",
    lat: 25.1276,
    lng: 121.7392,
    type: "Tesla Supercharger",
    connectors: 4,
    available: 1
  }
];
