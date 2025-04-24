import React, { useState, useEffect, useContext } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from './ThemeContext';   // ← Tema Context’i
import './RealTimeBusTrackingPage.css';
import busIcon from './bus-icon.png';

function RealTimeBusTrackingPage() {
  const { t } = useTranslation();
  const { isDarkMode } = useContext(ThemeContext);  // ← Tema bilgisini alın

  const initialBusLocations = [
    { lat: 39.925018, lng: 32.836956 },
    { lat: 39.927678, lng: 32.851326 },
    { lat: 39.930700, lng: 32.862440 },
    { lat: 39.933170, lng: 32.869499 },
    { lat: 39.935234, lng: 32.879072 },
  ];

  const [busLocations, setBusLocations] = useState(initialBusLocations);
  const [center, setCenter] = useState({ lat: 39.9334, lng: 32.8597 });

  useEffect(() => {
    const updateBusLocation = () => {
      setBusLocations(prev => {
        const last = prev[prev.length - 1];
        return [...prev, { lat: last.lat + 0.001, lng: last.lng + 0.001 }];
      });
    };
    const interval = setInterval(updateBusLocation, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (busLocations.length) {
      const last = busLocations[busLocations.length - 1];
      setCenter({ lat: last.lat, lng: last.lng });
    }
  }, [busLocations]);

  return (
    <div className={`real-time-bus-page ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <h2 className="page-title">{t('realTimeTracking.title')}</h2>
      
      <MapContainer center={center} zoom={13} className="map-container">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {busLocations.map((loc, idx) => (
          <Marker
            key={idx}
            position={loc}
            icon={new window.L.Icon({
              iconUrl: busIcon,
              iconSize: [32, 32],
              iconAnchor: [16, 32],
              popupAnchor: [0, -32],
            })}
          >
            <Popup>
              {t('realTimeTracking.bus')} {idx + 1}<br />
              {t('realTimeTracking.latitude')}: {loc.lat}<br />
              {t('realTimeTracking.longitude')}: {loc.lng}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default RealTimeBusTrackingPage;