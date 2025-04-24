import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './BusSchedulePage.css';
import { ThemeContext } from './ThemeContext'; // ← Tema Context’i

function BusSchedulePage() {
  const { busId } = useParams();
  const { t } = useTranslation();
  const { isDarkMode } = useContext(ThemeContext); // Tema bilgisini alın

  // Örnek veriler
  const busSchedules = {
    "474": [
      { saat: "06.00", sefer: "06.05", guncel: "06.10" },
      { saat: "06.30", sefer: "06.35", guncel: "06.37" },
      { saat: "07.00", sefer: "07.10", guncel: "07.13" },
    ],
    "477": [
      { saat: "06.15", sefer: "06.20", guncel: "06.21" },
      { saat: "07.00", sefer: "07.05", guncel: "07.10" },
      { saat: "08.00", sefer: "08.10", guncel: "08.13" },
    ],
    "472": [
      { saat: "06.45", sefer: "06.50", guncel: "06.53" },
      { saat: "07.45", sefer: "07.50", guncel: "07.52" },
      { saat: "08.45", sefer: "08.55", guncel: "08.59" },
    ],
    "486": [
      { saat: "06.00", sefer: "06.10", guncel: "06.12" },
      { saat: "07.00", sefer: "07.05", guncel: "07.09" },
      { saat: "08.00", sefer: "08.10", guncel: "08.16" },
    ]
  };

  const scheduleData = busSchedules[busId] || [];

  return (
    <div className={`bus-schedule-page ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <h2 className="page-title">{t('bus_schedule.title', { busId })}</h2>
      {scheduleData.length > 0 ? (
        <table className="schedule-table">
          <thead>
            <tr>
              <th>{t('bus_schedule.departure')}</th>
              <th>{t('bus_schedule.tripTime')}</th>
              <th>{t('bus_schedule.updatedTime')}</th>
            </tr>
          </thead>
          <tbody>
            {scheduleData.map((row, index) => (
              <tr key={index}>
                <td>{row.saat}</td>
                <td>{row.sefer}</td>
                <td>{row.guncel}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>{t('bus_schedule.no_data')}</p>
      )}
    </div>
  );
}

export default BusSchedulePage;
