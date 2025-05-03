// src/pages/LiveBusMap.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Polyline, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './LiveBusMap.css';

// Otobüs ikonunu tanımlayalım (Leaflet varsayılan marker'ı düzeltelim)
const busIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/61/61231.png',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

// Örnek 474 hattının güzergahı (koordinatlar temsili)
const routeCoordinates = [
  [39.9848, 32.8570], // Kızılay
  [39.9903, 32.8541], // Ulus
  [40.0031, 32.8446], // Saray
  [40.0130, 32.8465], // Esertepe
];

// Örnek anlık otobüs konumları
const buses = [
  { id: 1, position: [39.9935, 32.8505] },
  { id: 2, position: [40.0011, 32.8479] },
  { id: 3, position: [40.0082, 32.8471] },
];

const LiveBusMap = () => {
  return (
    <div className="live-map-container">
      <h2>474 - Anlık Otobüs Takibi</h2>
      <MapContainer center={[39.99, 32.85]} zoom={12} style={{ height: '500px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />

        {/* Güzergah çizgisi */}
        <Polyline positions={routeCoordinates} color="blue" />

        {/* Otobüs markerları */}
        {buses.map(bus => (
          <Marker key={bus.id} position={bus.position} icon={busIcon}>
            <Popup>Otobüs #{bus.id}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default LiveBusMap;
