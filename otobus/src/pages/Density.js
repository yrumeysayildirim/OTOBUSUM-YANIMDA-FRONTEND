// src/pages/Density.js
import React from 'react';
import './Density.css';

function Density() {
  // Örnek veri
  const busData = [
    { hatNo: 474, upDown: 'down', current: 15.20, prev: 15.40, color: 'red' },
    { hatNo: 482, upDown: 'up', current: 15.58, prev: 15.30, color: 'green' },
    { hatNo: 486, upDown: 'down', current: 15.30, prev: 16.00, color: 'red' },
    { hatNo: 477, upDown: 'up', current: 16.00, prev: 15.50, color: 'green' },
  ];

  return (
    <div className="density-container">
      <h2 className="page-title">Güncel Otobüs Listesi</h2>
      <span className="see-all">Tamamını Gör</span>

      {/* Otobüs Listesi */}
      <div className="bus-list">
        {busData.map((bus, index) => (
          <div className="bus-card" key={index}>
            <div className="hat-info">
              <span className="hat-no">{bus.hatNo}</span>
              {/* Trend okunu upDown değerine göre renk ve ikonla gösterebilirsiniz */}
              {bus.upDown === 'up' ? (
                <img src="/icons/arrow-up.png" alt="" className="trend-icon" />
              ) : (
                <img src="/icons/arrow-down.png" alt="" className="trend-icon" />
              )}
            </div>
            <div className="price-info">
              <span 
                className="current" 
                style={{ color: bus.color }}
              >
                {bus.current.toFixed(2)}
              </span>
              <span className="prev">
                {bus.prev.toFixed(2)}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Grafik Kartı */}
      <div className="chart-card">
        <h3>Geçen Haftaya Bakış</h3>
        <div className="chart-area">
          {/* Buraya örneğin react-chartjs-2 ile bir grafik ekleyebilirsiniz */}
          <p style={{ color: '#999', textAlign: 'center' }}>
            (Grafik Placeholder)
          </p>
        </div>
       
        <p className="week-summary">%80 Bu hafta %20 verim arttık.</p>
        <button className="details-btn">Detaylar</button>
      </div>
      
    </div>
    
  );
}

export default Density;