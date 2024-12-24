import logo from './logo.svg';
import './App.css';
import React from 'react';
import LoginComponent from './components/LoginComponent';
import DashboardComponent from './components/DashboardComponent';
import RegistrationComponent from './components/RegistrationComponent';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
        <Routes>
             <Route path="/" element={<LoginComponent />} />
             <Route path="/login" element={<LoginComponent />} />
             <Route path="/dashboard" element={<DashboardComponent />} />
             <Route path="/register" element={<RegistrationComponent />} />
        </Routes>
    </Router>
  );
}

export default App;
