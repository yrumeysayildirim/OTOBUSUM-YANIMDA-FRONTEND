import './i18n'; // i18n konfigürasyonunu başlatıyoruz
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './pages/ThemeContext'; // 'pages' klasöründen import ediyoruz
import Home from './pages/Home';
import WeeklyBusUsagePage from './pages/WeeklyBusUsagePage';
import DensityDetails from './pages/DensityDetails';
import Settings from './pages/Settings';
import About from './pages/About';
import Contact from './pages/Contact';
import BottomNav from './components/BottomNav';
import BusDistributionPage from './pages/BusDistributionPage';
import BusBarChart from './pages/BusBarChart'; // Bar chart sayfası eklendi
import StopDensity from './pages/StopDensity';
import BusDetail from './pages/BusDetail'; // yeni oluşturacağımız sayfa
import RealTimeBusTrackingPage from './pages/RealTimeBusTrackingPage';
import BusSchedulePage from './pages/BusSchedulePage';  // Hat no'ya göre saat tablosu

import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app-container">
          <div className="content-wrapper">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/weekly-bus-usage" element={<WeeklyBusUsagePage />} />
              <Route path="/density" element={<DensityDetails />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/bus-distribution" element={<BusDistributionPage />} />
              <Route path="/bus-bar-chart" element={<BusBarChart />} />
              <Route path="/stop-density" element={<StopDensity />} />
              <Route path="/bus-detail" element={<BusDetail />} />
              <Route path="/real-time-bus" element={<RealTimeBusTrackingPage />} />
              <Route path="/bus-schedule/:busId" element={<BusSchedulePage />} />
            </Routes>
          </div>

          <BottomNav />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;

