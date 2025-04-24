// src/components/Map.js
import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 39.92077,  // Örnek: Ankara koordinatları
  lng: 32.85411
};

function Map() {
  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
      >
        {/* Marker, direction, vs. buraya eklenebilir */}
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;
