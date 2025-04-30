import React, { useContext, useEffect, useState } from 'react';
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

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


async function fetchMaxStopDensity(time, day) {
  try {
    const response = await fetch("http://localhost:8000/stop-density-pie", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ time, day }),
    });

    if (response.ok) {
      const result = await response.json();
      return result.maximum;
    } else {
      console.error("Error fetching max stop density");
      return null;
    }
  } catch (err) {
    console.error("Network error:", err);
    return null;
  }
}

// Example usage:


async function assignMaximum() {
  const maximum = await fetchMaxStopDensity("08:30", "Wednesday");
  console.log(maximum); // Now maximum holds the resolved value
  // You can use 'maximum' here or return it
  return maximum;
}

const maximum = assignMaximum()

async function getStudentCounts(timesArray, day) {
  const results = [];

  for (let time of timesArray) {
    try {
      const response = await fetch("http://localhost:8000/sd-pie", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ time, day }),
      });

      if (response.ok) {
        const data = await response.json();
        results.push(data["student count"]);
      } else {
        results.push(null);
      }
    } catch (error) {
      console.error("Error fetching time:", time, error);
      results.push(null);
    }
  }

  return results;
}

function calculatePercentage(part, total) {
  if (total === 0) {
    return 0; // Avoid division by zero
  }
  return Math.round((part / total) * 100);
}



const ttt = ["12:00", "13:00", "14:00", "15:00"] 
let small_times = [];
let ss_times = []

async function populate_small_times() {
  const ttt = ["12:00", "13:00", "14:00", "15:00"];
  small_times = await getStudentCounts(ttt, "Wednesday");
  // Now `small_times` is populated
  console.log(small_times); // Optional: for verification
  console.log(maximum)
  console.log(small_times[0].then)
  const percentage_12 = calculatePercentage(small_times[0], maximum);
  ss_times.push(percentage_12)
  console.log(percentage_12)
  const percentage_1 = calculatePercentage(small_times[1], maximum);
  ss_times.push(percentage_1)
  const percentage_2 = calculatePercentage(small_times[2], maximum);
  ss_times.push(percentage_2)
  const percentage_3 = calculatePercentage(small_times[3], maximum);
  ss_times.push(percentage_3)

}

populate_small_times()

sleep(7000)
const t_1 = calculatePercentage(501, 797)
const t_2 = calculatePercentage(450, 797)
const t_3 = calculatePercentage(90, 797)
const t_4 = calculatePercentage(595, 797)




// Örnek veriler
const doughnutDataArray = [
  { percent: t_1, total: 41415, hour: '12:00' },
  { percent: t_2, total: 41415, hour: '13:00' },
  { percent: t_3, total: 41415, hour: '14:00' },
  { percent: t_4, total: 41415, hour: '15:00' },
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

const values = [143, 108, 82, 121, 95]

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
      data: [50, values[0], values[1], values[2], values[3], values[4], 35], // for sunday and saturday keep it low (50, 35)because 
      fill: true,                         // there are no classes and the models cant predict for these days
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
