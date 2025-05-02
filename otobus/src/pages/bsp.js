import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './BusSchedulePage.css';
import { ThemeContext } from './ThemeContext'; // ← Tema Context’i


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}




function BusSchedulePage() {
  const { busId } = useParams();
  const { t } = useTranslation();
  const { isDarkMode } = useContext(ThemeContext); // Tema bilgisini alın
  
  const [newTimes, setNewTimes] = useState([]);
  const _474valueList = [];

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

  function convert_string_time_to_num(timeStr) {
    const [hours, minutes] = timeStr.split(':').map(Number);
    return hours * 60 + minutes;
  }

  function convert_num_to_string_time(num) {
    const hours = Math.floor(num / 60);
    const minutes = num % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  }

  async function _474fetchTimes() {
    const _474_new_time = [];
    for (let i = 0; i < bus_474_weekdays.length; i++) {
      const time = bus_474_weekdays[i];
      const response = await fetch("http://localhost:8000/474-classification-prediction", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ time: time, day: "Wednesday" })
      });

      if (response.ok) {
        const dataa = await response.json();
        const data = dataa._474_predicted_density.trim().toUpperCase();
        _474valueList.push(data);
        
        if (data === "LOW") {
          var new_time = convert_string_time_to_num(time);
          console.log(new_time)
          var new_time2 = new_time += 5;
          console.log(new_time2)
          var new_time3 = convert_num_to_string_time(new_time2);
          console.log(new_time3)
          _474_new_time.push(new_time3);
        }
        else if (data === "HIGH")
          { var new_time4 = convert_string_time_to_num(time);
            console.log(new_time4)
            var new_time5 = new_time4 -= 5;
            console.log(new_time5)
            var new_time6 = convert_num_to_string_time(new_time5);
            console.log(new_time6)
            _474_new_time.push(new_time6);}
        else {
          _474_new_time.push(time);
        }
      } else {
        console.error(`Failed to fetch for time: ${time}`);
      }
    }
    console.log(_474valueList);
    console.log(_474_new_time);
    setNewTimes(_474_new_time); // <-- finally update the state
  }

  useEffect(() => {
    _474fetchTimes();
  }, []);

  const [_477newTimes, set477NewTimes] = useState([]);
  const _477valueList = [];

  async function _477fetchTimes() {
    const _477_new_time = [];
    for (let i = 0; i < bus_477_weekdays.length; i++) {
      const time = bus_477_weekdays[i];
      const response = await fetch("http://localhost:8000/477-classification-prediction", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ time: time, day: "Wednesday" })
      });

      if (response.ok) {
        const dataa = await response.json();
        const data = dataa._477_predicted_density.trim().toUpperCase();
        _477valueList.push(data);
        
        if (data === "LOW") {
          var new_time = convert_string_time_to_num(time);
          console.log(new_time)
          var new_time2 = new_time += 5;
          console.log(new_time2)
          var new_time3 = convert_num_to_string_time(new_time2);
          console.log(new_time3)
          _477_new_time.push(new_time3);
        }
        else if (data === "HIGH")
          { var new_time4 = convert_string_time_to_num(time);
            console.log(new_time4)
            var new_time5 = new_time4 -= 5;
            console.log(new_time5)
            var new_time6 = convert_num_to_string_time(new_time5);
            console.log(new_time6)
            _477_new_time.push(new_time6);}
        else {
          _477_new_time.push(time);
        }
      } else {
        console.error(`Failed to fetch for time: ${time}`);
      }
    }
    console.log(_477valueList);
    console.log(_477_new_time);
    set477NewTimes(_477_new_time); // <-- finally update the state
  }

  useEffect(() => {
    _477fetchTimes();
  }, []);

  const [_472newTimes, set472NewTimes] = useState([]);
  const _472valueList = [];

  async function _472fetchTimes() {
    const _472_new_time = [];
    for (let i = 0; i < bus_472_weekdays.length; i++) {
      const time = bus_472_weekdays[i];
      const response = await fetch("http://localhost:8000/472-classification-prediction", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ time: time, day: "Wednesday" })
      });

      if (response.ok) {
        const dataa = await response.json();
        const data = dataa._472_predicted_density.trim().toUpperCase();
        _472valueList.push(data);
        
        if (data === "LOW") {
          var new_time = convert_string_time_to_num(time);
          console.log(new_time)
          var new_time2 = new_time += 5;
          console.log(new_time2)
          var new_time3 = convert_num_to_string_time(new_time2);
          console.log(new_time3)
          _472_new_time.push(new_time3);
        }
        else if (data === "HIGH")
          { var new_time4 = convert_string_time_to_num(time);
            console.log(new_time4)
            var new_time5 = new_time4 -= 5;
            console.log(new_time5)
            var new_time6 = convert_num_to_string_time(new_time5);
            console.log(new_time6)
            _472_new_time.push(new_time6);}
        else {
          _472_new_time.push(time);
        }
      } else {
        console.error(`Failed to fetch for time: ${time}`);
      }
    }
    console.log(_472valueList);
    console.log(_472_new_time);
    set472NewTimes(_472_new_time); // <-- finally update the state
  }

  useEffect(() => {
    _472fetchTimes();
  }, []);


  const [_486newTimes, set486NewTimes] = useState([]);
  const _486valueList = [];

  async function _486fetchTimes() {
    const _486_new_time = [];
    for (let i = 0; i < bus_486_weekdays.length; i++) {
      const time = bus_486_weekdays[i];
      const response = await fetch("http://localhost:8000/486-classification-prediction", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ time: time, day: "Wednesday" })
      });

      if (response.ok) {
        const dataa = await response.json();
        const data = dataa._486_predicted_density.trim().toUpperCase();
        _486valueList.push(data);
        
        if (data === "LOW") {
          var new_time = convert_string_time_to_num(time);
          console.log(new_time)
          var new_time2 = new_time += 5;
          console.log(new_time2)
          var new_time3 = convert_num_to_string_time(new_time2);
          console.log(new_time3)
          _486_new_time.push(new_time3);
        }
        else if (data === "HIGH")
          { var new_time4 = convert_string_time_to_num(time);
            console.log(new_time4)
            var new_time5 = new_time4 -= 5;
            console.log(new_time5)
            var new_time6 = convert_num_to_string_time(new_time5);
            console.log(new_time6)
            _486_new_time.push(new_time6);}
        else {
          _486_new_time.push(time);
        }
      } else {
        console.error(`Failed to fetch for time: ${time}`);
      }
    }
    console.log(_486valueList);
    console.log(_486_new_time);
    set486NewTimes(_486_new_time); // <-- finally update the state
  }

  useEffect(() => {
    _486fetchTimes();
  }, []);



  // Örnek veriler
  const busSchedules = {
    "474": [
      { sefer: "06:15", guncel: newTimes[0] },
      { sefer: "06:30", guncel: newTimes[1] },
      { sefer: "06:40", guncel: newTimes[2] },
      { sefer: "06:50", guncel: newTimes[3] },
      { sefer: "07:00", guncel: newTimes[4] },
      { sefer: "07:10", guncel: newTimes[5] },
      { sefer: "07:20", guncel: newTimes[6] },
      { sefer: "07:30", guncel: newTimes[7] },
      { sefer: "07:40", guncel: newTimes[8] },
      { sefer: "07:50", guncel: newTimes[9] },
      { sefer: "08:00", guncel: newTimes[10] },
      { sefer: "08:15", guncel: newTimes[11] },
      { sefer: "08:30", guncel: newTimes[12] },
      { sefer: "08:50", guncel: newTimes[13] },
      { sefer: "09:10", guncel: newTimes[14] },
      { sefer: "09:32", guncel: newTimes[15] },
      { sefer: "09:54", guncel: newTimes[16] },
      { sefer: "10:16", guncel: newTimes[17] },
      { sefer: "10:38", guncel: newTimes[18] },
      { sefer: "11:00", guncel: newTimes[19] },
      { sefer: "11:22", guncel: newTimes[20] },
      { sefer: "11:44", guncel: newTimes[21] },
      { sefer: "12:06", guncel: newTimes[22] },
      { sefer: "12:28", guncel: newTimes[23] },
      { sefer: "12:50", guncel: newTimes[24] },
      { sefer: "13:10", guncel: newTimes[25] },
      { sefer: "13:30", guncel: newTimes[26] },
      { sefer: "13:50", guncel: newTimes[27] },
      { sefer: "14:05", guncel: newTimes[28] },
      { sefer: "14:20", guncel: newTimes[29] },
      { sefer: "14:32", guncel: newTimes[30] },
      { sefer: "14:44", guncel: newTimes[31] },
      { sefer: "14:55", guncel: newTimes[32] },
      { sefer: "15:05", guncel: newTimes[33] },
      { sefer: "15:15", guncel: newTimes[34] },
      { sefer: "15:25", guncel: newTimes[35] },
      { sefer: "15:35", guncel: newTimes[36] },
      { sefer: "15:45", guncel: newTimes[37] },
      { sefer: "15:56", guncel: newTimes[38] },
      { sefer: "16:08", guncel: newTimes[39] },
      { sefer: "16:20", guncel: newTimes[40] },
      { sefer: "16:35", guncel: newTimes[41] },
      { sefer: "16:50", guncel: newTimes[42] },
      { sefer: "17:00", guncel: newTimes[43] },
      { sefer: "17:15", guncel: newTimes[44] },
      { sefer: "17:30", guncel: newTimes[45] },
      { sefer: "17:42", guncel: newTimes[46] },
      { sefer: "17:54", guncel: newTimes[47] },
      { sefer: "18:06", guncel: newTimes[48] },
      { sefer: "18:18", guncel: newTimes[49] },
      { sefer: "18:30", guncel: newTimes[50] },
      { sefer: "18:45", guncel: newTimes[51] },
      { sefer: "19:00", guncel: newTimes[52] },
      { sefer: "19:20", guncel: newTimes[53] },
      { sefer: "19:40", guncel: newTimes[54] },
      { sefer: "20:00", guncel: newTimes[55] },
      { sefer: "20:20", guncel: newTimes[56] },
      { sefer: "20:45", guncel: newTimes[57] },
      { sefer: "21:10", guncel: newTimes[58] },
      { sefer: "21:30", guncel: newTimes[59] },
      { sefer: "21:55", guncel: newTimes[60] },
      { sefer: "22:30", guncel: newTimes[61] }
    ],
    "477": [
      { sefer: "06:50", guncel: _477newTimes[0] },
      { sefer: "07:50", guncel: _477newTimes[1] },
      { sefer: "10:00", guncel: _477newTimes[2] },
      { sefer: "12:00", guncel: _477newTimes[3] },
      { sefer: "14:05", guncel: _477newTimes[4] },
      { sefer: "16:05", guncel: _477newTimes[5] },
      { sefer: "18:05", guncel: _477newTimes[6] }
    ],
    "472": [
      { sefer: "06:20", guncel: _472newTimes[0] },
      { sefer: "06:40", guncel: _472newTimes[1] },
      { sefer: "07:20", guncel: _472newTimes[2] },
      { sefer: "07:45", guncel: _472newTimes[3] },
      { sefer: "08:15", guncel: _472newTimes[4] },
      { sefer: "08:35", guncel: _472newTimes[5] },
      { sefer: "09:30", guncel: _472newTimes[6] },
      { sefer: "10:15", guncel: _472newTimes[7] },
      { sefer: "11:00", guncel: _472newTimes[8] },
      { sefer: "12:00", guncel: _472newTimes[9] },
      { sefer: "13:00", guncel: _472newTimes[10] },
      { sefer: "13:45", guncel: _472newTimes[11] },
      { sefer: "14:30", guncel: _472newTimes[12] },
      { sefer: "15:15", guncel: _472newTimes[13] },
      { sefer: "16:00", guncel: _472newTimes[14] },
      { sefer: "16:45", guncel: _472newTimes[15] },
      { sefer: "17:30", guncel: _472newTimes[16] },
      { sefer: "18:10", guncel: _472newTimes[17] },
      { sefer: "18:50", guncel: _472newTimes[18] },
      { sefer: "19:30", guncel: _472newTimes[19] },
      { sefer: "20:10", guncel: _472newTimes[20] },
      { sefer: "20:40", guncel: _472newTimes[21] },
      { sefer: "21:00", guncel: _472newTimes[22] },
      { sefer: "21:15", guncel: _472newTimes[23] },
      { sefer: "22:00", guncel: _472newTimes[24] }
    ],
    "486": [
      { sefer: "06:15", guncel: _486newTimes[0] },
      { sefer: "06:26", guncel: _486newTimes[1] },
      { sefer: "06:38", guncel: _486newTimes[2] },
      { sefer: "06:50", guncel: _486newTimes[3] },
      { sefer: "07:02", guncel: _486newTimes[4] },
      { sefer: "07:15", guncel: _486newTimes[5] },
      { sefer: "07:30", guncel: _486newTimes[6] },
      { sefer: "07:45", guncel: _486newTimes[7] },
      { sefer: "08:00", guncel: _486newTimes[8] },
      { sefer: "08:20", guncel: _486newTimes[9] },
      { sefer: "08:40", guncel: _486newTimes[10] },
      { sefer: "09:00", guncel: _486newTimes[11] },
      { sefer: "09:22", guncel: _486newTimes[12] },
      { sefer: "09:44", guncel: _486newTimes[13] },
      { sefer: "10:06", guncel: _486newTimes[14] },
      { sefer: "10:28", guncel: _486newTimes[15] },
      { sefer: "10:50", guncel: _486newTimes[16] },
      { sefer: "11:12", guncel: _486newTimes[17] },
      { sefer: "11:34", guncel: _486newTimes[18] },
      { sefer: "11:56", guncel: _486newTimes[19] },
      { sefer: "12:18", guncel: _486newTimes[20] },
      { sefer: "12:40", guncel: _486newTimes[21] },
      { sefer: "13:00", guncel: _486newTimes[22] },
      { sefer: "13:20", guncel: _486newTimes[23] },
      { sefer: "13:40", guncel: _486newTimes[24] },
      { sefer: "14:00", guncel: _486newTimes[25] },
      { sefer: "14:15", guncel: _486newTimes[26] },
      { sefer: "14:30", guncel: _486newTimes[27] },
      { sefer: "14:45", guncel: _486newTimes[28] },
      { sefer: "15:00", guncel: _486newTimes[29] },
      { sefer: "15:15", guncel: _486newTimes[30] },
      { sefer: "15:30", guncel: _486newTimes[31] },
      { sefer: "15:45", guncel: _486newTimes[32] },
      { sefer: "16:00", guncel: _486newTimes[33] },
      { sefer: "16:10", guncel: _486newTimes[34] },
      { sefer: "16:20", guncel: _486newTimes[35] },
      { sefer: "16:30", guncel: _486newTimes[36] },
      { sefer: "16:40", guncel: _486newTimes[37] },
      { sefer: "16:50", guncel: _486newTimes[38] },
      { sefer: "17:00", guncel: _486newTimes[39] },
      { sefer: "17:10", guncel: _486newTimes[40] },
      { sefer: "17:20", guncel: _486newTimes[41] },
      { sefer: "17:30", guncel: _486newTimes[42] },
      { sefer: "17:40", guncel: _486newTimes[43] },
      { sefer: "17:50", guncel: _486newTimes[44] },
      { sefer: "18:00", guncel: _486newTimes[45] },
      { sefer: "18:18", guncel: _486newTimes[46] },
      { sefer: "18:36", guncel: _486newTimes[47] },
      { sefer: "18:54", guncel: _486newTimes[48] },
      { sefer: "19:12", guncel: _486newTimes[49] },
      { sefer: "19:30", guncel: _486newTimes[50] },
      { sefer: "19:50", guncel: _486newTimes[51] },
      { sefer: "20:05", guncel: _486newTimes[52] },
      { sefer: "20:20", guncel: _486newTimes[53] },
      { sefer: "20:35", guncel: _486newTimes[54] },
      { sefer: "20:50", guncel: _486newTimes[55] },
      { sefer: "21:05", guncel: _486newTimes[56] },
      { sefer: "21:20", guncel: _486newTimes[57] },
      { sefer: "21:35", guncel: _486newTimes[58] },
      { sefer: "21:50", guncel: _486newTimes[59] },
      { sefer: "22:05", guncel: _486newTimes[60] },
      { sefer: "22:20", guncel: _486newTimes[61] },
      { sefer: "22:40", guncel: _486newTimes[62] },
      { sefer: "23:00", guncel: _486newTimes[63] },
    ]
  };

  const scheduleData = busSchedules[busId] || [];

  return (
    <div className={`bus-schedule-page ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <h2 className="page-title">{t('bus_schedule.title', { busId })}</h2>
      {scheduleData.length > 0 ? (
        <table className="schedule-table">
          <thead>
            <tr>
              <th>{t('bus_schedule.tripTime')}</th>
              <th>{t('bus_schedule.updatedTime')}</th>
            </tr>
          </thead>
          <tbody>
            {scheduleData.map((row, index) => (
              <tr key={index}>
                <td>{row.sefer}</td>
                <td>{row.guncel}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>{t('bus_schedule.no_data')}</p>
      )}
    </div>
  );
}

export default BusSchedulePage;
