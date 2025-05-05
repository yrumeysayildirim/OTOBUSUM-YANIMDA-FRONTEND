import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './BusSchedulePage.css';
import { ThemeContext } from './ThemeContext'; // ← Tema Context’i

// --- Helper Functions (Unchanged) ---
function convert_string_time_to_num(timeStr) {
    // Added basic check
    if (!timeStr || typeof timeStr !== 'string' || !timeStr.includes(':')) return 0;
    const [hours, minutes] = timeStr.split(':').map(Number);
    return hours * 60 + minutes;
}

function convert_num_to_string_time(num) {
    // Added basic check
    if (typeof num !== 'number' || isNaN(num)) return "00:00";
    const totalMinutes = Math.max(0, num); // Ensure non-negative
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${(hours % 24).toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
}

function addFiveMinutes(timeStr) {
    try {
        const totalMinutes = convert_string_time_to_num(timeStr);
        // Add 5 minutes
        const newTotalMinutes = totalMinutes + 5;
        // Convert back to string format
        return convert_num_to_string_time(newTotalMinutes);
    } catch (error) {
        // Fallback in case of unexpected errors during conversion
        console.error(`Error adding five minutes to ${timeStr}:`, error);
        return timeStr; // Return original time if calculation fails
    }
}


function BusSchedulePage() {
    const { busId } = useParams();
    const { t } = useTranslation();
    const { isDarkMode } = useContext(ThemeContext);

    // --- State variables (Keep separate as requested) ---
    const [newTimes, setNewTimes] = useState([]); // For 474
    const [_477newTimes, set477NewTimes] = useState([]);
    const [_472newTimes, set472NewTimes] = useState([]);
    const [_486newTimes, set486NewTimes] = useState([]);

    // --- Base schedule data (Unchanged) ---
    const bus_474_weekdays = [
        '06:15', '06:30', '06:40', '06:50', '07:00', '07:10', '07:20', '07:30', '07:40', '07:50', '08:00', '08:15', '08:30', '08:50', '09:10', '09:32', '09:54', '10:16', '10:38', '11:00', '11:22', '11:44', '12:06', '12:28', '12:50', '13:10', '13:30', '13:50', '14:05', '14:20', '14:32', '14:44', '14:55', '15:05', '15:15', '15:25', '15:35', '15:45', '15:56', '16:08', '16:20', '16:35', '16:50', '17:00', '17:15', '17:30', '17:42', '17:54', '18:06', '18:18', '18:30', '18:45', '19:00', '19:20', '19:40', '20:00', '20:20', '20:45', '21:10', '21:30', '21:55', '22:30'
    ];
    const bus_477_weekdays = ['06:55', '07:55', '10:00', '12:00', '14:05', '16:05', '18:05'];
    const bus_472_weekdays = ['06:20', '06:40', '07:20', '07:45', '08:15', '08:35', '09:30', '10:15', '11:00', '12:00', '13:00', '13:45', '14:30', '15:15', '16:00', '16:45', '17:30', '18:10', '18:50', '19:30', '20:10', '20:40', '21:00', '21:15', '22:00'];
    const bus_486_weekdays = ['06:15', '06:26', '06:38', '06:50', '07:02', '07:15', '07:30', '07:45', '08:00', '08:20', '08:40', '09:00', '09:22', '09:44', '10:06', '10:28', '10:50', '11:12', '11:34', '11:56', '12:18', '12:40', '13:00', '13:20', '13:40', '14:00', '14:15', '14:30', '14:45', '15:00', '15:15', '15:30', '15:45', '16:00', '16:10', '16:20', '16:30', '16:40', '16:50', '17:00', '17:10', '17:20', '17:30', '17:40', '17:50', '18:00', '18:18', '18:36', '18:54', '19:12', '19:30', '19:50', '20:05', '20:20', '20:35', '20:50', '21:05', '21:20', '21:35', '21:50', '22:05', '22:20', '22:40', '23:00'];


    const ml_bus_474_weekdays = [
        '06:20', '06:35', '06:45', '06:55', '07:05',
        '07:15', '07:25', '07:35', '07:45', '07:55', 
        '08:05', '08:20', '08:35', '08:55', '09:15', 
        '09:37', '09:49', '10:21', '10:43', '11:05', 
        '11:27', '11:39', '12:11', '12:33', '12:45', 
        '13:05', '13:25', '13:50', '14:10', '14:25', 
        '14:27', '14:39', '14:50', '15:00', '15:10', 
        '15:20', '15:30', '15:40', '15:51', '16:03', 
        '16:15', '16:30', '16:55', '17:05', '17:20', 
        '17:35', '17:37', '17:59', '18:11', '18:23', 
        '18:35', '18:50', '19:05', '19:25', '19:45', 
        '20:05', '20:25', '20:50', '21:15', '21:35', 
        '22:00', '22:35'
    ];
    const ml_bus_477_weekdays = [
        '07:00', '08:00', '09:55', '11:55', '14:10', '16:00', '18:10'];
    const ml_bus_472_weekdays = [
        '06:25', '06:45', '07:25', '07:50', '08:20', 
        '08:40', '09:35', '10:20', '11:05', '11:55', 
        '12:55', '13:45', '14:25', '15:10', '15:55', 
        '16:50', '17:35', '18:15', '18:55', '19:35', 
        '20:15', '20:45', '21:05', '21:20', '22:05'];
    const ml_bus_486_weekdays = [
        '06:20', '06:31', '06:43', '06:55', '07:07', 
        '07:20', '07:35', '07:50', '08:05', '08:25', 
        '08:45', '09:05', '09:27', '09:49', '10:11', 
        '10:33', '10:55', '11:17', '11:29', '11:51', 
        '12:23', '12:35', '12:55', '13:15', '13:40', 
        '13:55', '14:20', '14:25', '14:40', '14:55', 
        '15:10', '15:25', '15:40', '15:55', '16:05', 
        '16:15', '16:25', '16:35', '16:55', '17:05', 
        '17:15', '17:25', '17:35', '17:45', '17:55', 
        '18:05', '18:23', '18:41', '18:59', '19:17', 
        '19:35', '19:55', '20:10', '20:25', '20:40', 
        '20:55', '21:10', '21:25', '21:40', '21:55', 
        '22:10', '22:25', '22:45', '23:05'];

    // --- Modified Fetch Functions (Parallel) ---

    // Note: _474valueList etc. are still defined outside but modified inside fetch.
    // This isn't ideal React practice but kept for minimal changes.
    const _474valueList = [];
    async function _474fetchTimes() {
        console.log("Starting parallel fetch for 474...");
        // 1. Create an array of promises, one for each time
        const promises = bus_474_weekdays.map(time =>
            fetch("https://otobusumyanimda-backend.onrender.com/474-classification-prediction", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ time: time, day: "Wednesday" }) // Assuming Wednesday
            }).then(response => {
                if (response.ok) return response.json();
                // Throw an error to be caught by Promise.allSettled for this specific fetch
                return Promise.reject(`HTTP error ${response.status} for time ${time}`);
            }).catch(error => {
                 // Catch network errors too
                 return Promise.reject(`Network error for time ${time}: ${error.message}`);
            })
        );

        // 2. Wait for all promises to settle
        const results = await Promise.allSettled(promises);

        // 3. Process the results
        const _474_new_time = [];
        _474valueList.length = 0; // Clear previous values if function is called again

        results.forEach((result, index) => {
            const originalTime = bus_474_weekdays[index];
            let calculatedTime = originalTime; // Default to original

            if (result.status === 'fulfilled') {
                try {
                    const dataa = result.value;
                    const data = dataa?._474_predicted_density?.trim().toUpperCase();
                    _474valueList.push(data ?? 'UNKNOWN'); // Store result or fallback

                    if (data === "LOW") {
                        calculatedTime = convert_num_to_string_time(convert_string_time_to_num(originalTime) + 5);
                    } else if (data === "HIGH") {
                        calculatedTime = convert_num_to_string_time(convert_string_time_to_num(originalTime) - 5);
                    }
                     // MEDIUM or UNKNOWN density uses original time (already set)
                } catch (e) {
                     console.error(`Error processing result for 474 time ${originalTime}:`, e);
                     _474valueList.push('ERROR');
                     // Keep calculatedTime as originalTime on processing error
                }
            } else {
                // Handle rejected promises (fetch errors)
                console.error(`Failed fetch for 474 time ${originalTime}:`, result.reason);
                _474valueList.push('FETCH_FAIL');
                // Keep calculatedTime as originalTime on fetch error
            }
            _474_new_time.push(calculatedTime);
        });

        // 4. Update state once
        console.log("474 valueList:", _474valueList);
        console.log("474 new_time:", _474_new_time);
        setNewTimes(_474_new_time);
        console.log("Finished fetch for 474.");
    }

    const _477valueList = [];
    async function _477fetchTimes() {
      console.log("Starting parallel fetch for 477...");
      const promises = bus_477_weekdays.map(time =>
          // *** FIX: Add method and headers explicitly ***
          fetch("https://otobusumyanimda-backend.onrender.com/477-classification-prediction", {
               method: "POST", // <-- Ensure this is present
               headers: { "Content-Type": "application/json" }, // <-- Ensure this is present
               body: JSON.stringify({ time: time, day: "Wednesday" })
          })
          .then(response => response.ok ? response.json() : Promise.reject(`HTTP error ${response.status} for time ${time}`))
          .catch(error => Promise.reject(`Network error for time ${time}: ${error.message}`))
      );
      // ... rest of the function remains the same ...
      const results = await Promise.allSettled(promises);
      const _477_new_time = [];
      _477valueList.length = 0;

      results.forEach((result, index) => {
           const originalTime = bus_477_weekdays[index];
           let calculatedTime = originalTime;
           if (result.status === 'fulfilled') {
               try {
                    const dataa = result.value;
                    const data = dataa?._477_predicted_density?.trim().toUpperCase();
                    _477valueList.push(data ?? 'UNKNOWN');
                    if (data === "LOW") calculatedTime = convert_num_to_string_time(convert_string_time_to_num(originalTime) + 5);
                    else if (data === "HIGH") calculatedTime = convert_num_to_string_time(convert_string_time_to_num(originalTime) - 5);
               } catch (e) { console.error(`Error processing 477 time ${originalTime}:`, e); _477valueList.push('ERROR');}
           } else { console.error(`Failed fetch for 477 time ${originalTime}:`, result.reason); _477valueList.push('FETCH_FAIL');}
           _477_new_time.push(calculatedTime);
       });

       console.log("477 valueList:", _477valueList);
       console.log("477 new_time:", _477_new_time);
       set477NewTimes(_477_new_time);
       console.log("Finished fetch for 477.");
  }

    const _472valueList = [];
    async function _472fetchTimes() {
      console.log("Starting parallel fetch for 472...");
      const promises = bus_472_weekdays.map(time =>
           // *** FIX: Add method and headers explicitly ***
           fetch("https://otobusumyanimda-backend.onrender.com/472-classification-prediction", {
               method: "POST", // <-- Ensure this is present
               headers: { "Content-Type": "application/json" }, // <-- Ensure this is present
               body: JSON.stringify({ time: time, day: "Wednesday" })
           })
          .then(response => response.ok ? response.json() : Promise.reject(`HTTP error ${response.status} for time ${time}`))
          .catch(error => Promise.reject(`Network error for time ${time}: ${error.message}`))
      );
      // ... rest of the function remains the same ...
      const results = await Promise.allSettled(promises);
      const _472_new_time = [];
       _472valueList.length = 0;

      results.forEach((result, index) => {
           const originalTime = bus_472_weekdays[index];
           let calculatedTime = originalTime;
           if (result.status === 'fulfilled') {
               try {
                    const dataa = result.value;
                    const data = dataa?._472_predicted_density?.trim().toUpperCase();
                    _472valueList.push(data ?? 'UNKNOWN');
                    if (data === "LOW") calculatedTime = convert_num_to_string_time(convert_string_time_to_num(originalTime) + 5);
                    else if (data === "HIGH") calculatedTime = convert_num_to_string_time(convert_string_time_to_num(originalTime) - 5);
               } catch (e) { console.error(`Error processing 472 time ${originalTime}:`, e); _472valueList.push('ERROR');}
           } else { console.error(`Failed fetch for 472 time ${originalTime}:`, result.reason); _472valueList.push('FETCH_FAIL');}
           _472_new_time.push(calculatedTime);
       });

       console.log("472 valueList:", _472valueList);
       console.log("472 new_time:", _472_new_time);
       set472NewTimes(_472_new_time);
       console.log("Finished fetch for 472.");
  }

    const _486valueList = [];
    async function _486fetchTimes() {
      console.log("Starting parallel fetch for 486...");
      const promises = bus_486_weekdays.map(time =>
          // *** FIX: Add method and headers explicitly ***
          fetch("https://otobusumyanimda-backend.onrender.com/486-classification-prediction", {
               method: "POST", // <-- Ensure this is present
               headers: { "Content-Type": "application/json" }, // <-- Ensure this is present
               body: JSON.stringify({ time: time, day: "Wednesday" })
          })
          .then(response => response.ok ? response.json() : Promise.reject(`HTTP error ${response.status} for time ${time}`))
          .catch(error => Promise.reject(`Network error for time ${time}: ${error.message}`))
      );
      // ... rest of the function remains the same ...
      const results = await Promise.allSettled(promises);
      const _486_new_time = [];
      _486valueList.length = 0;

      results.forEach((result, index) => {
           const originalTime = bus_486_weekdays[index];
           let calculatedTime = originalTime;
           if (result.status === 'fulfilled') {
               try {
                    const dataa = result.value;
                    const data = dataa?._486_predicted_density?.trim().toUpperCase();
                    _486valueList.push(data ?? 'UNKNOWN');
                    if (data === "LOW") calculatedTime = convert_num_to_string_time(convert_string_time_to_num(originalTime) + 5);
                    else if (data === "HIGH") calculatedTime = convert_num_to_string_time(convert_string_time_to_num(originalTime) - 5);
               } catch (e) { console.error(`Error processing 486 time ${originalTime}:`, e); _486valueList.push('ERROR');}
           } else { console.error(`Failed fetch for 486 time ${originalTime}:`, result.reason); _486valueList.push('FETCH_FAIL');}
           _486_new_time.push(calculatedTime);
       });

       console.log("486 valueList:", _486valueList);
       console.log("486 new_time:", _486_new_time);
       set486NewTimes(_486_new_time);
       console.log("Finished fetch for 486.");
  }


    // --- useEffect Hooks (Keep separate as requested) ---
    useEffect(() => {
        // This will fetch data for 474 regardless of the busId in the URL
        //_474fetchTimes();
        // If you only want to fetch for the specific busId, you'd need conditional logic here
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // Runs once on mount

    useEffect(() => {
        //_477fetchTimes();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        //_472fetchTimes();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        //_486fetchTimes();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    // --- Data Structure for Rendering (Keep structure as requested) ---
    // This object is rebuilt on every render. It uses the latest state values.
    /*
    const busSchedules = {
        "474": bus_474_weekdays.map((time, index) => ({ sefer: time, guncel: newTimes[index] ?? time })),
        "477": bus_477_weekdays.map((time, index) => ({ sefer: time, guncel: _477newTimes[index] ?? time })),
        "472": bus_472_weekdays.map((time, index) => ({ sefer: time, guncel: _472newTimes[index] ?? time })),
        "486": bus_486_weekdays.map((time, index) => ({ sefer: time, guncel: _486newTimes[index] ?? time })),
    };

    // Get the specific schedule based on the URL parameter
    const scheduleData = busSchedules[busId] || [];
    */
    const busSchedules = {
        "474": bus_474_weekdays.map((time, index) => ({
            sefer: time,
            // Use fetched time if available, otherwise show original time + 5 mins
            guncel: newTimes[index] ?? ml_bus_474_weekdays[index] ?? time
        })),
        "477": bus_477_weekdays.map((time, index) => ({
            sefer: time,
            // Use fetched time if available, otherwise show original time + 5 mins
            guncel: _477newTimes[index] ?? ml_bus_477_weekdays[index] ?? time
        })),
        "472": bus_472_weekdays.map((time, index) => ({
            sefer: time,
            // Use fetched time if available, otherwise show original time + 5 mins
            guncel: _472newTimes[index] ?? ml_bus_472_weekdays[index] ?? time
        })),
        "486": bus_486_weekdays.map((time, index) => ({
            sefer: time,
            // Use fetched time if available, otherwise show original time + 5 mins
            guncel: _486newTimes[index] ?? ml_bus_486_weekdays[index] ?? time
        })),
    };
    
    const scheduleData = busSchedules[busId] || [];


    // --- Return Statement (Unchanged from your original code) ---
    return (
        <div className={`bus-schedule-page ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            <h2 className="page-title">{t('bus_schedule.title', { busId })}</h2>
            {/* Added basic check for loading based on whether data exists */}
            {/* A proper loading state would be better, but sticking to minimal changes */}
            {scheduleData.length > 0 || newTimes.length > 0 || _477newTimes.length > 0 || _472newTimes.length > 0 || _486newTimes.length > 0 ? ( // Basic check if *any* data is loaded
                scheduleData.length > 0 ? (
                    <table className="schedule-table">
                        <thead>
                            <tr>
                                <th>{t('bus_schedule.tripTime')}</th>
                                <th>{t('bus_schedule.updatedTime')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Use ?? time as fallback if guncel is undefined/null */}
                            {scheduleData.map((row, index) => (
                                <tr key={index}>
                                    <td>{row.sefer}</td>
                                    <td>{row.guncel ?? row.sefer}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                     // Only show no_data if *all* fetches are done but this busId is invalid/empty
                    <p>{t('bus_schedule.no_data')}</p>
                )
            ) : (
                 // Show a generic loading message initially
                 <p>{t('loading', 'Loading schedule...')}</p>
             )}
        </div>
    );
}

export default BusSchedulePage;