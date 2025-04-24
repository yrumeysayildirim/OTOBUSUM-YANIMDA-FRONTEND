// src/pages/BusDistribution.js
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { useTranslation } from 'react-i18next';

function BusDistribution() {
  const { t } = useTranslation();
  
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
    <div style={{ marginTop: '20px', textAlign: 'center' }}>
      <h3>{t('busDistribution.busDistribution')}</h3>
      <div style={{ width: '280px', height: '280px', margin: '0 auto' }}>
        <Pie data={chartData} options={chartOptions} />
      </div>

      {/* Percentage Information (optional) */}
      <div style={{ marginTop: '10px' }}>
        <p>{t('busDistribution.underMaintenancePercentage')}: 21%</p>
        <p>{t('busDistribution.notGoingOnTripPercentage')}: 9%</p>
        <p>{t('busDistribution.waitingBusesPercentage')}: 24%</p>
        <p>{t('busDistribution.departedBusesPercentage')}: 40%</p>
      </div>

      {/* Time Range Table */}
      <div style={{ marginTop: '20px' }}>
        <table
          style={{
            width: '80%',
            margin: '0 auto',
            borderCollapse: 'collapse',
            textAlign: 'center'
          }}
        >
          <thead>
            <tr style={{ backgroundColor: '#eee' }}>
              <th>{t('busDistribution.timeRange')}</th>
              <th>{t('busDistribution.busTime')}</th>
              <th>{t('busDistribution.tripStatus')}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>6.00 - 7.00</td>
              <td>5 {t('busDistribution.buses')}</td>
              <td style={{ color: 'green' }}>{t('busDistribution.completed')}</td>
            </tr>
            <tr>
              <td>7.00 - 9.00</td>
              <td>8 {t('busDistribution.buses')}</td>
              <td style={{ color: 'red' }}>{t('busDistribution.postponed')}</td>
            </tr>
            <tr>
              <td>9.00 - 10.00</td>
              <td>7 {t('busDistribution.buses')}</td>
              <td style={{ color: 'green' }}>{t('busDistribution.completed')}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BusDistribution;
