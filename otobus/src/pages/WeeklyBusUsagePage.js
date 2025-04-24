import React, { useContext } from 'react';
// Gerekli Chart.js bileşenleri
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';
// React-Chartjs-2 bileşenleri
import { Bar, Doughnut } from 'react-chartjs-2';
import './WeeklyBusUsagePage.css';
import { ThemeContext } from './ThemeContext'; // ← Tema Context’i

// Chart.js bileşenlerini kaydediyoruz
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

function WeeklyBusUsagePage() {
  const { isDarkMode } = useContext(ThemeContext); // Tema bilgisini alın

  // 1) Günlere Dağılım (Stacked Bar Chart) - Örnek veriler
  const barData = {
    labels: ['Pzt', 'Salı', 'Çar', 'Per', 'Cuma', 'Cmt', 'Paz'],
    datasets: [
      {
        label: 'Sabah',
        data: [12, 19, 8, 10, 15, 5, 9], // Örnek
        backgroundColor: '#42a5f5'
      },
      {
        label: 'Öğle',
        data: [8, 10, 14, 12, 9, 6, 11], // Örnek
        backgroundColor: '#66bb6a'
      },
      {
        label: 'Akşam',
        data: [15, 5, 20, 6, 14, 10, 12], // Örnek
        backgroundColor: '#ffa726'
      }
    ]
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: { stacked: true },
      y: { stacked: true }
    },
    plugins: {
      title: {
        display: true,
        text: 'Günlere Dağılım'
      }
    }
  };

  // 2) Kullanılan Otobüs Oranı (3 Adet Doughnut) - Örnek veriler
  const doughnutData474 = {
    labels: ['Otobüs 474', 'Diğer'],
    datasets: [
      {
        data: [100, 0],
        backgroundColor: ['#42a5f5', '#ddd']
      }
    ]
  };
  const doughnutData486 = {
    labels: ['Otobüs 486', 'Diğer'],
    datasets: [
      {
        data: [68, 32],
        backgroundColor: ['#66bb6a', '#ddd']
      }
    ]
  };
  const doughnutData472 = {
    labels: ['Otobüs 472', 'Diğer'],
    datasets: [
      {
        data: [32, 68],
        backgroundColor: ['#ffa726', '#ddd']
      }
    ]
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false
  };

  // 3) En Yoğun Saatler - Tablo (Örnek veriler)
  const tableData = [
    { day: 'Pazartesi', time: '08.00 - 09.00' },
    { day: 'Salı',      time: '11.00 - 12.00' },
    { day: 'Çarşamba',  time: '16.00 - 17.00' },
  ];

  return (
    <div className={`weekly-bus-usage-page ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <h2 className="page-title">Haftalık Otobüs Yoğunluğu</h2>

      {/* Bar Chart */}
      <div className="bar-chart-container">
        <Bar data={barData} options={barOptions} />
      </div>

      {/* 3 adet doughnut chart */}
      <h3 className="subtitle">Kullanılan Otobüs Oranı</h3>
      <div className="doughnut-section">
        <div className="doughnut-container">
          <Doughnut data={doughnutData474} options={doughnutOptions} />
          <p>474</p>
        </div>
        <div className="doughnut-container">
          <Doughnut data={doughnutData486} options={doughnutOptions} />
          <p>486</p>
        </div>
        <div className="doughnut-container">
          <Doughnut data={doughnutData472} options={doughnutOptions} />
          <p>472</p>
        </div>
      </div>

      {/* En Yoğun Saatler */}
      <h3 className="subtitle">En Yoğun Saatler</h3>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Gün</th>
              <th>En Yoğun Saatler</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, i) => (
              <tr key={i}>
                <td>{row.day}</td>
                <td>{row.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default WeeklyBusUsagePage;
