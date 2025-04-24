import React, { useContext } from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
} from 'chart.js';
import { Doughnut, Line } from 'react-chartjs-2';
import './StopDensity.css';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from './ThemeContext'; // ← Tema Context’i

ChartJS.register(
  ArcElement,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

// Örnek veriler
const doughnutDataArray = [
  { percent: 53, total: 41415, hour: '9.00' },
  { percent: 34, total: 41415, hour: '9.30' },
  { percent: 22, total: 41415, hour: '10.00' },
  { percent: 2, total: 41415, hour: '10.30' },
];

// t fonksiyonu parametre olarak alınacak şekilde düzenlendi
const generateDoughnutData = (percent, t) => ({
  labels: [t('stopDensity.full'), t('stopDensity.empty')],
  datasets: [
    {
      data: [percent, 100 - percent],
      backgroundColor: ['#D63384', '#e0e0e0'],
      borderWidth: 0,
    },
  ],
});

// Gün isimlerini çeviren fonksiyon
const generateLineChartData = (t) => ({
  labels: [
    t("busBarChart.Sunday"),
    t("busBarChart.Monday"),
    t("busBarChart.Tuesday"),
    t("busBarChart.Wednesday"),
    t("busBarChart.Thursday"),
    t("busBarChart.Friday"),
    t("busBarChart.Saturday"),
  ],
  datasets: [
    {
      label: '41415',
      data: [30, 40, 50, 30, 20, 35, 25],
      fill: true,
      backgroundColor: 'rgba(214, 51, 132, 0.2)',
      borderColor: '#D63384',
      tension: 0.4,
    },
    {
      label: '41230',
      data: [20, 30, 40, 20, 30, 25, 35],
      fill: true,
      backgroundColor: 'rgba(32, 201, 151, 0.2)',
      borderColor: '#20C997',
      tension: 0.4,
    },
  ],
});

const lineChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
  },
};

function StopDensityPage() {
  const { t } = useTranslation();
  const { isDarkMode } = useContext(ThemeContext); // Tema bilgisini alın

  return (
    <div className={`stop-density-page ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <h2 className="density-title">{t('stopDensity.title')}</h2>

      <div className="current-stops-container">
        {doughnutDataArray.map((item, index) => (
          <div key={index} className="doughnut-item">
            <div className="doughnut-chart">
              <Doughnut data={generateDoughnutData(item.percent, t)} />
            </div>
            <p className="percent-text">{t('stopDensity.percent')} {item.percent}</p>
            <p className="total-text">{item.total}</p>
            <p className="hour-text">{item.hour}</p>
          </div>
        ))}
      </div>

      <div className="line-chart-container">
        <Line data={generateLineChartData(t)} options={lineChartOptions} />
      </div>
    </div>
  );
}

export default StopDensityPage;
