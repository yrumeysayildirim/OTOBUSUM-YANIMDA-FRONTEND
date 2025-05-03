// src/pages/LiveBusTracker.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import busIconImage from '../assets/bus-icon.png'; // Otobüs ikonu buraya

const busIcon = new L.Icon({
  iconUrl: busIconImage,
  iconSize: [35, 35],
  iconAnchor: [17, 34],
  popupAnchor: [0, -36]
});

// Örnek konumlar (gerçekte API'den çekilebilir)
const busLocations = [
  { id: 1, lat: 39.92077, lng: 32.85411, label: 'Otobüs 1' },
  { id: 2, lat: 39.95077, lng: 32.86411, label: 'Otobüs 2' },
  { id: 3, lat: 40.00000, lng: 32.88000, label: 'Otobüs 3' }
];

const routePath = busLocations.map(loc => [loc.lat, loc.lng]);

function LiveBusTracker() {
  return (
    <div style={{ height: '100vh' }}>
      <h2 style={{ textAlign: 'center', padding: '10px' }}>474 Anlık Otobüs Takibi</h2>
      <MapContainer center={[39.92077, 32.85411]} zoom={11} style={{ height: '90%', width: '100%' }}>
        <TileLayer
          attribution='&copy; OpenStreetMap katkıda bulunanlar'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Polyline positions={routePath} color="blue" />
        {busLocations.map((bus) => (
          <Marker key={bus.id} position={[bus.lat, bus.lng]} icon={busIcon}>
            <Popup>{bus.label}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default LiveBusTracker;
