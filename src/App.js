import logo from './logo.svg';
import './App.css';
import React from 'react';
import LoginComponent from './components/LoginComponent';
import ManageProfileComponent from './components/ManageProfileComponent';
import RegistrationComponent from './components/RegistrationComponent';
import HomepageComponent from './components/HomepageComponent';
import FindFriendsComponent from './components/FindFriendsComponent';
import FriendsComponent from './components/FriendsComponent';
import NavbarComponent from './components/NavbarComponent';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
        <NavbarComponent/>
        <Routes>
             <Route path="/" element={<LoginComponent />} />
             <Route path="/login" element={<LoginComponent />} />
             <Route path="/home" element={<HomepageComponent />} />
             <Route path="/register" element={<RegistrationComponent />} />
             <Route path="/manage" element={<ManageProfileComponent />} />
             <Route path="/find" element={<FindFriendsComponent />} />
             <Route path="/friends" element={<FriendsComponent />} />
        </Routes>
    </Router>
  );
}

export default App;
