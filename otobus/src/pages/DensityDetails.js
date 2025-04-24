import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './DensityDetails.css';
import { ThemeContext } from './ThemeContext'; // Tema context'i

function DensityDetails() {
  const navigate = useNavigate();
  const { isDarkMode } = useContext(ThemeContext); // Tema bilgisini al

  // Örnek veriler
  const busRoutes = [
    { route: '474', currentTime: '12:30', color: 'red' },
    { route: '477', currentTime: '12:35', color: 'red' },
    { route: '472', currentTime: '12:38', color: 'green' },
    { route: '486', currentTime: '12:32', color: 'green' },
  ];

  // Yönlendirme
  const handleBusClick = (busId) => {
    navigate(`/bus-schedule/${busId}`);
  };

  return (
    <div className={`density-details-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="white-box">
        <div className="table-wrapper">
         
        </div>

        <div className="cards-grid">
          {busRoutes.map((bus, idx) => (
            <div 
              className="bus-card" 
              key={idx}
              onClick={() => handleBusClick(bus.route)}
              style={{ cursor: 'pointer' }}
            >
              <div className="bus-left-col">
                <span className="bus-route">{bus.route}</span>
              </div>

              <div className="bus-center-col">
                {/* Grafik kaldırıldı */}
              </div>

              <div className="bus-right-col">
                <span 
                  className="current-val" 
                  style={{ color: !isDarkMode ? bus.color : undefined }}
                >
                  {bus.currentTime}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DensityDetails;
