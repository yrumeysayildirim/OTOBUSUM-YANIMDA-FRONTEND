import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // i18n ekleniyor
import './CurrentBusList.css';

function CurrentBusList() {
  const navigate = useNavigate();
  const { t } = useTranslation(); // useTranslation hook'u

  // Tablo verileri (İlk resme göre)
  const busListData = [
    { hatNo: '474', durakYogunlugu: 'Grafik1', guncelSaat: '12.30' },
    { hatNo: '486', durakYogunlugu: 'Grafik2', guncelSaat: '12.32' },
    { hatNo: '477', durakYogunlugu: 'Grafik3', guncelSaat: '12.35' },
    { hatNo: '472', durakYogunlugu: 'Grafik4', guncelSaat: '12.38' },
  ];

  // Tıklanan satır => busId parametresiyle /bus-schedule/:busId rotasına yönlendirme
  const handleRowClick = (hatNo) => {
    navigate(`/bus-schedule/${hatNo}`);
  };

  return (
    <div className="current-bus-list-container">
      <h2>{t('bus_schedule.densityTitle')}</h2> {/* Dil desteği eklendi */}
      <table className="current-bus-table">
        <thead>
          <tr>
            <th>{t('bus_schedule.departure')}</th> {/* Dil desteği eklendi */}
            <th>{t('bus_schedule.tripTime')}</th> {/* Dil desteği eklendi */}
            <th>{t('bus_schedule.updatedTime')}</th> {/* Dil desteği eklendi */}
          </tr>
        </thead>
        <tbody>
          {busListData.map((item, index) => (
            <tr
              key={index}
              onClick={() => handleRowClick(item.hatNo)}
              style={{ cursor: 'pointer' }}
            >
              <td>{item.hatNo}</td>
              <td>{item.durakYogunlugu}</td>
              <td>{item.guncelSaat}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CurrentBusList;
