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
      { sefer: "06:15", guncel: "06:20" },
      { sefer: "06:30", guncel: "06:32" },
      { sefer: "06:40", guncel: "06:45" },
      { sefer: "06:50", guncel: "06:55" },
      { sefer: "07:00", guncel: "07:05" },
      { sefer: "07:10", guncel: "07:15" },
      { sefer: "07:20", guncel: "07:25" },
      { sefer: "07:30", guncel: "07:35" },
      { sefer: "07:40", guncel: "07:45" },
      { sefer: "07:50", guncel: "07:55" },
      { sefer: "08:00", guncel: "08:05" },
      { sefer: "08:15", guncel: "08:20" },
      { sefer: "08:30", guncel: "08:35" },
      { sefer: "08:50", guncel: "08:55" },
      { sefer: "09:10", guncel: "09:15" },
      { sefer: "09:32", guncel: "09:37" },
      { sefer: "09:54", guncel: "09:58" },
      { sefer: "10:16", guncel: "10:20" },
      { sefer: "10:38", guncel: "10:42" },
      { sefer: "11:00", guncel: "11:05" },
      { sefer: "11:22", guncel: "11:27" },
      { sefer: "11:44", guncel: "11:50" },
      { sefer: "12:06", guncel: "12:10" },
      { sefer: "12:28", guncel: "12:32" },
      { sefer: "12:50", guncel: "12:55" },
      { sefer: "13:10", guncel: "13:15" },
      { sefer: "13:30", guncel: "13:35" },
      { sefer: "13:50", guncel: "13:55" },
      { sefer: "14:05", guncel: "14:10" },
      { sefer: "14:20", guncel: "14:25" },
      { sefer: "14:32", guncel: "14:37" },
      { sefer: "14:44", guncel: "14:49" },
      { sefer: "14:55", guncel: "15:00" },
      { sefer: "15:05", guncel: "15:10" },
      { sefer: "15:15", guncel: "15:20" },
      { sefer: "15:25", guncel: "15:30" },
      { sefer: "15:35", guncel: "15:40" },
      { sefer: "15:45", guncel: "15:50" },
      { sefer: "15:56", guncel: "16:00" },
      { sefer: "16:08", guncel: "16:12" },
      { sefer: "16:20", guncel: "16:25" },
      { sefer: "16:35", guncel: "16:40" },
      { sefer: "16:50", guncel: "16:55" },
      { sefer: "17:00", guncel: "17:05" },
      { sefer: "17:15", guncel: "17:20" },
      { sefer: "17:30", guncel: "17:35" },
      { sefer: "17:42", guncel: "17:47" },
      { sefer: "17:54", guncel: "17:59" },
      { sefer: "18:06", guncel: "18:10" },
      { sefer: "18:18", guncel: "18:23" },
      { sefer: "18:30", guncel: "18:35" },
      { sefer: "18:45", guncel: "18:50" },
      { sefer: "19:00", guncel: "19:05" },
      { sefer: "19:20", guncel: "19:25" },
      { sefer: "19:40", guncel: "19:45" },
      { sefer: "20:00", guncel: "20:05" },
      { sefer: "20:20", guncel: "20:25" },
      { sefer: "20:45", guncel: "20:50" },
      { sefer: "21:10", guncel: "21:15" },
      { sefer: "21:30", guncel: "21:35" },
      { sefer: "21:55", guncel: "22:00" },
      { sefer: "22:30", guncel: "22:35" }
    ],
    "477": [
      { sefer: "06:50", guncel: "06:53" },
      { sefer: "07:50", guncel: "07:52" },
      { sefer: "10:00", guncel: "10:05" },
      { sefer: "12:00", guncel: "12:03" },
      { sefer: "14:05", guncel: "14:06" },
      { sefer: "16:05", guncel: "16:07" },
      { sefer: "18:05", guncel: "18:09" }
    ],
    "472": [
      { sefer: "06:20", guncel: "06:20" },
      { sefer: "06:40", guncel: "06:40" },
      { sefer: "07:20", guncel: "07:20" },
      { sefer: "07:45", guncel: "07:45" },
      { sefer: "08:15", guncel: "08:15" },
      { sefer: "08:35", guncel: "08:35" },
      { sefer: "09:30", guncel: "09:30" },
      { sefer: "10:15", guncel: "10:15" },
      { sefer: "11:00", guncel: "11:00" },
      { sefer: "12:00", guncel: "12:00" },
      { sefer: "13:00", guncel: "13:00" },
      { sefer: "13:45", guncel: "13:45" },
      { sefer: "14:30", guncel: "14:30" },
      { sefer: "15:15", guncel: "15:15" },
      { sefer: "16:00", guncel: "16:00" },
      { sefer: "16:45", guncel: "16:45" },
      { sefer: "17:30", guncel: "17:30" },
      { sefer: "18:10", guncel: "18:10" },
      { sefer: "18:50", guncel: "18:50" },
      { sefer: "19:30", guncel: "19:30" },
      { sefer: "20:10", guncel: "20:10" },
      { sefer: "20:40", guncel: "20:40" },
      { sefer: "21:00", guncel: "21:00" },
      { sefer: "21:15", guncel: "21:15" },
      { sefer: "22:00", guncel: "22:00" }
    ],
    "486": [
      { sefer: "06:15", guncel: "06:15" },
      { sefer: "06:26", guncel: "06:26" },
      { sefer: "06:38", guncel: "06:38" },
      { sefer: "06:50", guncel: "06:50" },
      { sefer: "07:02", guncel: "07:02" },
      { sefer: "07:15", guncel: "07:15" },
      { sefer: "07:30", guncel: "07:30" },
      { sefer: "07:45", guncel: "07:45" },
      { sefer: "08:00", guncel: "08:00" },
      { sefer: "08:20", guncel: "08:20" },
      { sefer: "08:40", guncel: "08:40" },
      { sefer: "09:00", guncel: "09:00" },
      { sefer: "09:22", guncel: "09:22" },
      { sefer: "09:44", guncel: "09:44" },
      { sefer: "10:06", guncel: "10:06" },
      { sefer: "10:28", guncel: "10:28" },
      { sefer: "10:50", guncel: "10:50" },
      { sefer: "11:12", guncel: "11:12" },
      { sefer: "11:34", guncel: "11:34" },
      { sefer: "11:56", guncel: "11:56" },
      { sefer: "12:18", guncel: "12:18" },
      { sefer: "12:40", guncel: "12:40" },
      { sefer: "13:00", guncel: "13:00" },
      { sefer: "13:20", guncel: "13:20" },
      { sefer: "13:40", guncel: "13:40" },
      { sefer: "14:00", guncel: "14:00" },
      { sefer: "14:15", guncel: "14:15" },
      { sefer: "14:30", guncel: "14:30" },
      { sefer: "14:45", guncel: "14:45" },
      { sefer: "15:00", guncel: "15:00" },
      { sefer: "15:15", guncel: "15:15" },
      { sefer: "15:30", guncel: "15:30" },
      { sefer: "15:45", guncel: "15:45" },
      { sefer: "16:00", guncel: "16:00" },
      { sefer: "16:10", guncel: "16:10" },
      { sefer: "16:20", guncel: "16:20" },
      { sefer: "16:30", guncel: "16:30" },
      { sefer: "16:40", guncel: "16:40" },
      { sefer: "16:50", guncel: "16:50" },
      { sefer: "17:00", guncel: "17:00" },
      { sefer: "17:10", guncel: "17:10" },
      { sefer: "17:20", guncel: "17:20" },
      { sefer: "17:30", guncel: "17:30" },
      { sefer: "17:40", guncel: "17:40" },
      { sefer: "17:50", guncel: "17:50" },
      { sefer: "18:00", guncel: "18:00" },
      { sefer: "18:18", guncel: "18:18" },
      { sefer: "18:36", guncel: "18:36" },
      { sefer: "18:54", guncel: "18:54" },
      { sefer: "19:12", guncel: "19:12" },
      { sefer: "19:30", guncel: "19:30" },
      { sefer: "19:50", guncel: "19:50" },
      { sefer: "20:05", guncel: "20:05" },
      { sefer: "20:20", guncel: "20:20" },
      { sefer: "20:35", guncel: "20:35" },
      { sefer: "20:50", guncel: "20:50" },
      { sefer: "21:05", guncel: "21:05" },
      { sefer: "21:20", guncel: "21:20" },
      { sefer: "21:35", guncel: "21:35" },
      { sefer: "21:50", guncel: "21:50" },
      { sefer: "22:05", guncel: "22:05" },
      { sefer: "22:20", guncel: "22:20" },
      { sefer: "22:40", guncel: "22:40" },
      { sefer: "23:00", guncel: "23:00" },
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
              <th>{t('bus_schedule.tripTime')}</th>
              <th>{t('bus_schedule.updatedTime')}</th>
            </tr>
          </thead>
          <tbody>
            {scheduleData.map((row, index) => (
              <tr key={index}>
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
