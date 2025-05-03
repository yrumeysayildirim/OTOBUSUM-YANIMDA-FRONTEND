import React, { useContext } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useTranslation } from 'react-i18next';
import './BusDistributionPage.css';
import { ThemeContext } from './ThemeContext'; // ← Tema Context’i

ChartJS.register(ArcElement, Tooltip, Legend);


const bus_474_weekdays = ['06:15', '06:30', '06:40', '06:50', '07:00', '07:10', '07:20',
  '07:30', '07:40', '07:50', '08:00', '08:15', '08:30', '08:50',
  '09:10', '09:32', '09:54', '10:16', '10:38', '11:00', '11:22',
  '11:44', '12:06', '12:28', '12:50', '13:10', '13:30', '13:50',
  '14:05', '14:20', '14:32', '14:44', '14:55', '15:05', '15:15',
  '15:25', '15:35', '15:45', '15:56', '16:08', '16:20', '16:35',
  '16:50', '17:00', '17:15', '17:30', '17:42', '17:54', '18:06',
  '18:18', '18:30', '18:45', '19:00', '19:20', '19:40', '20:00',
  '20:20', '20:45', '21:10', '21:30', '21:55', '22:30'];

const bus_472_weekdays = ['06:20', '06:40', '07:20', '07:45', '08:15', '08:35', '09:30',
'10:15', '11:00', '12:00', '13:00', '13:45', '14:30', '15:15',
'16:00', '16:45', '17:30', '18:10', '18:50', '19:30', '20:10',
'20:40', '21:00', '21:15', '22:00'];

const bus_486_weekdays = ['06:15', '06:26', '06:38', '06:50', '07:02', '07:15', '07:30',
'07:45', '08:00', '08:20', '08:40', '09:00', '09:22', '09:44',
'10:06', '10:28', '10:50', '11:12', '11:34', '11:56', '12:18',
'12:40', '13:00', '13:20', '13:40', '14:00', '14:15', '14:30',
'14:45', '15:00', '15:15', '15:30', '15:45', '16:00', '16:10',
'16:20', '16:30', '16:40', '16:50', '17:00', '17:10', '17:20',
'17:30', '17:40', '17:50', '18:00', '18:18', '18:36', '18:54',
'19:12', '19:30', '19:50', '20:05', '20:20', '20:35', '20:50',
'21:05', '21:20', '21:35', '21:50', '22:05', '22:20', '22:40',
'23:00'];

const bus_477_weekdays = ['06:55', '07:55', '10:00', '12:00', '14:05', '16:05', '18:05'];


/*

what i want to do:

i want rolling hours for the table, last hour, this hour, next hour
and i want to count how many busses are at that time frame, then i 
want to get the predictions for those times and if they dont match with
the original times (one is later), i need to set the 3rd column as late

alternative:

it is for the busiest times right now, so leave it like that, and just get
the predictions for these times.


*/


function BusDistributionPage() {
  const { t } = useTranslation();
  const { isDarkMode } = useContext(ThemeContext); // Tema bilgisini alın

  const chartData = {
    labels: [
      t('busDistribution.underMaintenance'),
      t('busDistribution.notGoingOnTrip'),
      t('busDistribution.waitingBuses'),
      t('busDistribution.departedBuses')
    ],
    datasets: [
      {
        label: t('busDistribution.busDistribution'),
        data: [21, 9, 24, 40],
        backgroundColor: ['#ff9800', '#f44336', '#2196f3', '#4caf50']
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false // ← Chart.js legend'ı kapatıyoruz
      }
    }
  };

  return (
    <div className={`bus-distribution-page ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <h2 className="distribution-title">{t('busDistribution.busDistribution')}</h2>
      <div className="custom-legend">
  <div><span className="legend-box" style={{ backgroundColor: '#ff9800' }}></span> {t('busDistribution.underMaintenance')}</div>
  <div><span className="legend-box" style={{ backgroundColor: '#f44336' }}></span> {t('busDistribution.notGoingOnTrip')}</div>
  <div><span className="legend-box" style={{ backgroundColor: '#2196f3' }}></span> {t('busDistribution.waitingBuses')}</div>
  <div><span className="legend-box" style={{ backgroundColor: '#4caf50' }}></span> {t('busDistribution.departedBuses')}</div>
</div>

<div className="chart-container">
        <Pie data={chartData} options={chartOptions} />
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>{t('busDistribution.timeRange')}</th>
              <th>{t('busDistribution.buses')}</th>
              <th>{t('busDistribution.tripStatus')}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>12:00 - 13:00</td>
              <td>7</td>
              <td style={{ color: 'green' }}>{t('busDistribution.completed')}</td>
            </tr>
            <tr>
              <td>13:00 - 14:00</td>
              <td>7</td>
              <td style={{ color: 'red' }}>{t('busDistribution.postponed')}</td>
            </tr>
            <tr>
              <td>14:00 - 15:00</td>
              <td>11</td>
              <td style={{ color: 'green' }}>{t('busDistribution.completed')}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BusDistributionPage;
