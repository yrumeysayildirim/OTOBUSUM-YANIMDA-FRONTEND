// src/pages/BarChartImagePage.js
import React from 'react';
import './BarChartImagePage.css';

function BarChartImagePage() {
  return (
    <div className="bar-chart-image-page">
      <h2>Bar Chart Visualization</h2>
      <img
        src="/bar-chart.jpg"
        alt="Bar Chart Visualization"
        className="bar-chart-image"
      />
    </div>
  );
}

export default BarChartImagePage;