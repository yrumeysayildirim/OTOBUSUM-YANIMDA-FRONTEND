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

  const bus_474_weekdays = [
    '06:15', '06:30', '06:40', '06:50', '07:00', '07:10', '07:20',
    '07:30', '07:40', '07:50', '08:00', '08:15', '08:30', '08:50',
    '09:10', '09:32', '09:54', '10:16', '10:38', '11:00', '11:22',
    '11:44', '12:06', '12:28', '12:50', '13:10', '13:30', '13:50',
    '14:05', '14:20', '14:32', '14:44', '14:55', '15:05', '15:15',
    '15:25', '15:35', '15:45', '15:56', '16:08', '16:20', '16:35',
    '16:50', '17:00', '17:15', '17:30', '17:42', '17:54', '18:06',
    '18:18', '18:30', '18:45', '19:00', '19:20', '19:40', '20:00',
    '20:20', '20:45', '21:10', '21:30', '21:55', '22:30'
  ];

  const bus_477_weekdays = ['06:55', '07:55', '10:00', '12:00',
     '14:05', '16:05', '18:05']

  const bus_472_weekdays = ['06:20', '06:40', '07:20', '07:45', '08:15',
     '08:35', '09:30','10:15', '11:00', '12:00', '13:00', '13:45', '14:30',
     '15:15', '16:00', '16:45', '17:30', '18:10', '18:50', '19:30', '20:10',
     '20:40', '21:00', '21:15', '22:00']

  const bus_486_weekdays = ['06:15', '06:26', '06:38', '06:50', '07:02', '07:15', '07:30',
      '07:45', '08:00', '08:20', '08:40', '09:00', '09:22', '09:44',
      '10:06', '10:28', '10:50', '11:12', '11:34', '11:56', '12:18',
      '12:40', '13:00', '13:20', '13:40', '14:00', '14:15', '14:30',
      '14:45', '15:00', '15:15', '15:30', '15:45', '16:00', '16:10',
      '16:20', '16:30', '16:40', '16:50', '17:00', '17:10', '17:20',
      '17:30', '17:40', '17:50', '18:00', '18:18', '18:36', '18:54',
      '19:12', '19:30', '19:50', '20:05', '20:20', '20:35', '20:50',
      '21:05', '21:20', '21:35', '21:50', '22:05', '22:20', '22:40',
      '23:00']

    const bus_474_weekends = [
      '06:30', '06:50', '07:10', '07:30', '07:50', '08:10', '08:30',
            '08:50', '09:10', '09:30', '09:50', '10:10', '10:30', '10:50',
            '11:10', '11:30', '11:50', '12:10', '12:30', '12:50', '13:10',
            '13:30', '13:50', '14:10', '14:30', '14:50', '15:10', '15:30',
            '15:45', '16:00', '16:15', '16:30', '16:45', '17:00', '17:20',
            '17:40', '18:00', '18:20', '18:40', '19:00', '19:20', '19:40',
            '20:00', '20:20', '20:40', '21:00', '21:20', '21:40', '22:00'
    ];
  
    const bus_477_weekends = ['06:55', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00']
  
    const bus_472_weekends = ['06:30', '07:15', '07:45', '08:20', '09:00', '10:00', '11:00',
            '11:45', '12:30', '13:30', '14:30', '15:15', '16:00', '16:45',
            '17:45', '18:45', '19:45', '20:45', '21:15', '22:00']
  
    const bus_486_weekends = ['06:20', '06:35', '06:50', '07:05', '07:20', '07:35', '07:50',
            '08:10', '08:30', '08:50', '09:10', '09:30', '09:50', '10:10',
            '10:30', '10:50', '11:10', '11:30', '11:55', '12:20', '12:45',
            '13:10', '13:30', '13:50', '14:10', '14:30', '14:50', '15:05',
            '15:20', '15:35', '15:50', '16:10', '16:30', '16:45', '17:00',
            '17:20', '17:40', '18:05', '18:25', '18:40', '18:55', '19:10',
            '19:25', '19:40', '19:55', '20:10', '20:25', '20:40', '20:55',
            '21:10', '21:25', '21:40', '21:55', '22:10', '22:25', '22:40',
            '23:00']

  const data = [
    { day: t('busBarChart.Monday'),    474: bus_474_weekdays.length, 486: bus_486_weekdays.length,  472: bus_472_weekdays.length, 477: bus_477_weekdays.length },
    { day: t('busBarChart.Tuesday'),   474: bus_474_weekdays.length, 486: bus_486_weekdays.length,  472: bus_472_weekdays.length, 477: bus_477_weekdays.length },
    { day: t('busBarChart.Wednesday'), 474: bus_474_weekdays.length, 486: bus_486_weekdays.length,  472: bus_472_weekdays.length, 477: bus_477_weekdays.length },
    { day: t('busBarChart.Thursday'),  474: bus_474_weekdays.length, 486: bus_486_weekdays.length,  472: bus_472_weekdays.length, 477: bus_477_weekdays.length },
    { day: t('busBarChart.Friday'),    474: bus_474_weekdays.length, 486: bus_486_weekdays.length,  472: bus_472_weekdays.length, 477: bus_477_weekdays.length },
    { day: t('busBarChart.Saturday'),  474: bus_474_weekends.length, 486: bus_486_weekends.length,  472: bus_472_weekends.length, 477:  bus_477_weekends.length },
    { day: t('busBarChart.Sunday'),    474: bus_474_weekends.length, 486: bus_486_weekends.length,  472:  bus_472_weekends.length, 477:  bus_477_weekends.length },
  ];

  const busRates = [
    { value: 100, number: 474, color: '#ff0050' },
    { value:  68, number: 486, color: '#00b3ff' },
    { value:  32, number: 472, color: '#4fffcf' },
  ];

  const busiestHours = [
    { day: t('busBarChart.Monday'),    hour: '12.00 - 16.00' },
    { day: t('busBarChart.Tuesday'),   hour: '12.00 - 16.00' },
    { day: t('busBarChart.Wednesday'), hour: '12.00 - 16.00' },
    { day: t('busBarChart.Thursday'),  hour: '12.00 - 16.00' },
    { day: t('busBarChart.Friday'),    hour: '12.00 - 16.00' },
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
            <Bar dataKey="474"    stackId="a" fill="#ff0050" />
            <Bar dataKey="486"   stackId="a" fill="#00b3ff" />
            <Bar dataKey="472"  stackId="a" fill="#4fffcf" />
            <Bar dataKey="477" stackId="a" fill="#b494ff" />
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
