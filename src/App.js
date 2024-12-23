import logo from './logo.svg';
import './App.css';
import LoginComponent from './LoginComponent';
import RegistrationComponent from './RegistrationComponent';
import HomepageComponent from './HomepageComponent';
import PostComponent from './PostComponent';
import NavbarComponent from './NavbarComponent';

function App() {
  return (
    <div className="App">
        <PostComponent/>
        <NavbarComponent/>
    </div>
  );
}

export default App;
