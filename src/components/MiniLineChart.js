// src/components/MiniLineChart.js
import React, { useRef } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
} from 'chart.js';

// Chart.js bileşenlerini kaydediyoruz
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip);

function MiniLineChart({ dataPoints = [15.2, 15.4, 14.8, 16.0], color = 'red' }) {
  const chartRef = useRef(null);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    scales: {
      x: { display: false },
      y: { display: false },
    },
    elements: {
      line: { tension: 0.3 },
      point: { radius: 0 },
    },
  };

  const createGradient = (ctx, area) => {
    const gradient = ctx.createLinearGradient(0, area.top, 0, area.bottom);
    if (color === 'red') {
      gradient.addColorStop(0, 'rgba(255, 0, 0, 0.3)');
      gradient.addColorStop(1, 'rgba(255, 0, 0, 0)');
    } else {
      gradient.addColorStop(0, 'rgba(0, 200, 0, 0.3)');
      gradient.addColorStop(1, 'rgba(0, 200, 0, 0)');
    }
    return gradient;
  };

  const data = {
    labels: dataPoints.map((_, idx) => idx),
    datasets: [
      {
        data: dataPoints,
        fill: true,
        borderColor: color === 'red' ? 'rgba(255, 0, 0, 0.8)' : 'rgba(0, 200, 0, 0.8)',
        backgroundColor: (ctx) => {
          const chart = chartRef.current;
          const { ctx: canvasCtx, chartArea } = ctx.chart;
          return chartArea ? createGradient(canvasCtx, chartArea) : undefined;
        },
      },
    ],
  };

  return (
    <div style={{ width: '100%', maxWidth: '80px', height: '60px' }}>

      <Line ref={chartRef} data={data} options={options} />
    </div>
  );
}

export default MiniLineChart;