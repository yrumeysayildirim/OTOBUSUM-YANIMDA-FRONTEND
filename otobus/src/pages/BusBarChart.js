import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import {
  CircularProgressbar,
  buildStyles
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './BusBarChart.css';
import { useTranslation } from 'react-i18next';

function BusBarChart() {
  const { t } = useTranslation();
  const isDarkMode = localStorage.getItem('theme') === 'dark';

  const data = [
    { day: t('busBarChart.Monday'),    red: 100, blue: 20,  green: 15, purple: 10 },
    { day: t('busBarChart.Tuesday'),   red: 100, blue: 30,  green: 20, purple: 15 },
    { day: t('busBarChart.Wednesday'), red: 100, blue: 25,  green: 18, purple: 14 },
    { day: t('busBarChart.Thursday'),  red: 100, blue: 28,  green: 16, purple: 12 },
    { day: t('busBarChart.Friday'),    red: 100, blue: 24,  green: 14, purple: 11 },
    { day: t('busBarChart.Saturday'),  red: 100, blue: 15,  green: 10, purple:  8 },
    { day: t('busBarChart.Sunday'),    red: 100, blue: 12,  green:  9, purple:  6 },
  ];

  const busRates = [
    { value: 100, number: 474, color: '#ff0050' },
    { value:  68, number: 486, color: '#00b3ff' },
    { value:  32, number: 472, color: '#4fffcf' },
  ];

  const busiestHours = [
    { day: t('busBarChart.Monday'),    hour: '08.00 - 10.00' },
    { day: t('busBarChart.Tuesday'),   hour: '08.00 - 10.00' },
    { day: t('busBarChart.Wednesday'), hour: '08.00 - 10.00' },
    { day: t('busBarChart.Thursday'),  hour: '08.00 - 10.00' },
    { day: t('busBarChart.Friday'),    hour: '08.00 - 10.00' },
    { day: t('busBarChart.Saturday'),  hour: '13.00 - 20.00' },
    { day: t('busBarChart.Sunday'),    hour: '15.00 - 22.00' },
  ];

  return (
    <div className={`bus-bar-chart-container ${isDarkMode ? 'dark' : 'light'}`}>
      <h2>{t('busBarChart.weeklyBusDensity')}</h2>

      <div className="chart-section">
        <h4>{t('busBarChart.dailyDistribution')}</h4>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} stackOffset="expand">
            <XAxis
              dataKey="day"
              stroke={isDarkMode ? '#fff' : '#000'}
              interval={0}               /* Tüm etiketleri göster */
              height={70}                /* Yüksekliği artırarak etiketlerin alacağı alanı genişletiyoruz */
              tick={{
                angle: -45,              /* Etiketleri -45° döndür */
                textAnchor: 'end',       /* Döndürme pivotunu hizala */
                fontSize: 12,
                fill: isDarkMode ? '#fff' : '#000',
                dx: 20                   /* Etiketleri sağa kaydır */
              }}
            />
            <YAxis hide />
            <Tooltip
              contentStyle={{
                backgroundColor: isDarkMode ? '#2d2d2d' : '#fff',
                color:             isDarkMode ? '#fff'    : '#000',
              }}
            />
            <Bar dataKey="red"    stackId="a" fill="#ff0050" />
            <Bar dataKey="blue"   stackId="a" fill="#00b3ff" />
            <Bar dataKey="green"  stackId="a" fill="#4fffcf" />
            <Bar dataKey="purple" stackId="a" fill="#b494ff" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="progress-section">
        <h4>{t('busBarChart.usedBusRate')}</h4>
        <div className="progress-bars">
          {busRates.map((bus, idx) => (
            <div key={idx} style={{ width: 80, textAlign: 'center' }}>
              <CircularProgressbar
                value={bus.value}
                text={`${bus.number}`}
                styles={buildStyles({
                  textSize:   '16px',
                  pathColor:  bus.color,
                  textColor:  isDarkMode ? '#fff' : '#333',
                  trailColor: isDarkMode ? '#444' : '#eee',
                })}
              />
              <p style={{ marginTop: 8, color: isDarkMode ? '#fff' : '#000' }}>
                %{bus.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="busiest-hours">
        <h4>{t('busBarChart.busiestHours')}</h4>
        {busiestHours.map((item, idx) => (
          <div key={idx} className="hour-row">
            <span>{item.day}</span>
            <span>
              {t('busBarChart.busiestHoursLabel')}: {item.hour}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BusBarChart;
