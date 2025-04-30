import React, { useContext , useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './DensityDetails.css';
import { ThemeContext } from './ThemeContext'; // Tema context'i


const now = new Date();
const currentHours = now.getHours();
const currentMinutes = now.getMinutes();


const bus_474_weekdays = ['06:15', '06:30', '06:40', '06:50', '07:00', '07:10', '07:20',
  '07:30', '07:40', '07:50', '08:00', '08:15', '08:30', '08:50',
  '09:10', '09:32', '09:54', '10:16', '10:38', '11:00', '11:22',
  '11:44', '12:06', '12:28', '12:50', '13:10', '13:30', '13:50',
  '14:05', '14:20', '14:32', '14:44', '14:55', '15:05', '15:15',
  '15:25', '15:35', '15:45', '15:56', '16:08', '16:20', '16:35',
  '16:50', '17:00', '17:15', '17:30', '17:42', '17:54', '18:06',
  '18:18', '18:30', '18:45', '19:00', '19:20', '19:40', '20:00',
  '20:20', '20:45', '21:10', '21:30', '21:55', '22:30'];

const bus_472_weekdays = ['06:20', '06:40', '07:20', '07:45', '08:15', '08:35', '09:30',
'10:15', '11:00', '12:00', '13:00', '13:45', '14:30', '15:15',
'16:00', '16:45', '17:30', '18:10', '18:50', '19:30', '20:10',
'20:40', '21:00', '21:15', '22:00'];

const bus_486_weekdays = ['06:15', '06:26', '06:38', '06:50', '07:02', '07:15', '07:30',
'07:45', '08:00', '08:20', '08:40', '09:00', '09:22', '09:44',
'10:06', '10:28', '10:50', '11:12', '11:34', '11:56', '12:18',
'12:40', '13:00', '13:20', '13:40', '14:00', '14:15', '14:30',
'14:45', '15:00', '15:15', '15:30', '15:45', '16:00', '16:10',
'16:20', '16:30', '16:40', '16:50', '17:00', '17:10', '17:20',
'17:30', '17:40', '17:50', '18:00', '18:18', '18:36', '18:54',
'19:12', '19:30', '19:50', '20:05', '20:20', '20:35', '20:50',
'21:05', '21:20', '21:35', '21:50', '22:05', '22:20', '22:40',
'23:00'];

const bus_477_weekdays = ['06:55', '07:55', '10:00', '12:00', '14:05', '16:05', '18:05'];

const parsed_bus_474_weekdays = bus_474_weekdays.map(time => {
  const [hours, minutes] = time.split(":").map(Number);
  return { hours, minutes };
});

const parsed_bus_472_weekdays = bus_472_weekdays.map(time => {
  const [hours, minutes] = time.split(":").map(Number);
  return { hours, minutes };
});

const parsed_bus_486_weekdays = bus_486_weekdays.map(time => {
  const [hours, minutes] = time.split(":").map(Number);
  return { hours, minutes };
});

const parsed_bus_477_weekdays = bus_477_weekdays.map(time => {
  const [hours, minutes] = time.split(":").map(Number);
  return { hours, minutes };
});



function convert_string_time_to_num(time){

  var value = time.split(':');
  var hours = value[0];
  var mins = value[1];

  var hmins = Number(hours) * 60;
  var total_time = hmins + Number(mins);

  return total_time;
}

function convert_num_to_string_time(totalMins) {
  const hours = Math.floor(totalMins / 60);
  const mins = totalMins % 60;

  // Pad hours and minutes with leading zeros if needed
  const hoursStr = hours.toString().padStart(2, '0');
  const minsStr = mins.toString().padStart(2, '0');

  return `${hoursStr}:${minsStr}`;
}

/*

problem: we want to display the next bus time and when it arrives

steps:

  NOTE: probably keep current_time and current_time_nmm as seperate variables to not
  complicate things

  1. convert all times in the schedules to nums from midnight (nmm)
  2. get current time and convert it to nmm
  3. check closest after nmm_time_schedule to the current time if current nmm
   does not exist in schedule
  4. fetch api endpoint prediction for the chosen nmm (convert it back first)
  5. depending on result updataed_bus_arrival_time:

    low + 5 = red
    high - 5 = green
    medium +- 0 = gray/black

  6. check updataed_bus_arrival_time agaisnt cuurent_time (convert to nmm first)
  6.1 if cuurent_time is later, skip to the next time in schedule, and rerun the process
  (will only happen if density is high)
  6.2 if not, wait till it is
  


*/



function DensityDetails() {
  const navigate = useNavigate();
  const { isDarkMode } = useContext(ThemeContext); // Tema bilgisini al

  const [userInput, setUserInput] = useState('fixedInputValue');

  const [prediction, setPrediction] = useState(null);  // To store the prediction result

  // Fetch prediction when component mounts
  useEffect(() => {
    async function fetchPrediction() {
      const response = await fetch("http://localhost:8000/noon-classification-prediction", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input: userInput })
      });

      if (response.ok) {
        const result = await response.json(); // Parse the response JSON
        setPrediction(result.prediction); // Assuming the backend returns something like { prediction: 'HIGH' }
      } else {
        console.error("Error fetching prediction");
      }
    }

    fetchPrediction();
  }, [userInput]); // Re-run if userInput changes (or could be triggered by a button)

  console.log(prediction)
  let htime = convert_string_time_to_num('12:30');

  if (prediction === "HIGH") {
    htime = htime + 5; // Add 5 minutes if prediction is HIGH
  }

  let timeString = convert_num_to_string_time(htime);

  // Örnek veriler
  const busRoutes = [
    { route: '474', currentTime: timeString, color: 'red' },
    { route: '477', currentTime: '12:35', color: 'red' },
    { route: '472', currentTime: '12:38', color: 'green' },
    { route: '486', currentTime: '12:32', color: 'green' },
  ];

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };
  

  // Yönlendirme
  const handleBusClick = (busId) => {
    navigate(`/bus-schedule/${busId}`);
  };

  return (
    <div className={`density-details-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="white-box">
        <div className="table-wrapper">
         
        </div>

        <div className="cards-grid">
          {busRoutes.map((bus, idx) => (
            <div 
              className="bus-card" 
              key={idx}
              onClick={() => handleBusClick(bus.route)}
              style={{ cursor: 'pointer' }}
            >
              <div className="bus-left-col">
                <span className="bus-route">{bus.route}</span>
              </div>

              <div className="bus-center-col">
                {/* Grafik kaldırıldı */}
              </div>

              <div className="bus-right-col">
                <span 
                  className="current-val" 
                  style={{ color: !isDarkMode ? bus.color : undefined }}
                >
                  {bus.currentTime}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DensityDetails;
