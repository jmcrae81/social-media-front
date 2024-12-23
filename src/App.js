import logo from './logo.svg';
import './App.css';
import LoginComponent from './LoginComponent';
import RegistrationComponent from './RegistrationComponent';
import HomepageComponent from './HomepageComponent';
import NavbarComponent from './NavbarComponent';
import ManageProfileComponent from './ManageProfileComponent';
import FindFriendsComponent from './FindFriendsComponent';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
        <div className="app">
            <NavbarComponent/>
        </div>
        <Routes>
            <Route path="/find" element={ <FindFriendsComponent/>} />
            <Route path="/manage" element={<ManageProfileComponent/>} />
            <Route path="/home" element={<HomepageComponent/>} />
        </Routes>
    </Router>
  );
}

export default App;
