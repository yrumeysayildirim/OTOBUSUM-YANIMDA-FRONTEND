import React, { useContext } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useTranslation } from 'react-i18next';
import './BusDistributionPage.css';
import { ThemeContext } from './ThemeContext'; // ← Tema Context’i

ChartJS.register(ArcElement, Tooltip, Legend);

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
    maintainAspectRatio: false
  };

  return (
    <div className={`bus-distribution-page ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <h2 className="distribution-title">{t('busDistribution.busDistribution')}</h2>
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
              <td>06:00 - 07:00</td>
              <td>5</td>
              <td style={{ color: 'green' }}>{t('busDistribution.completed')}</td>
            </tr>
            <tr>
              <td>07:00 - 09:00</td>
              <td>8</td>
              <td style={{ color: 'red' }}>{t('busDistribution.postponed')}</td>
            </tr>
            <tr>
              <td>09:00 - 10:00</td>
              <td>7</td>
              <td style={{ color: 'green' }}>{t('busDistribution.completed')}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BusDistributionPage;
