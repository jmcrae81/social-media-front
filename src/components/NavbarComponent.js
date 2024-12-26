import '../Navbar.css';
import {Link} from "react-router-dom"

const NavbarComponent = () => {
    return(
        <div className="sidebar">
          <div className="links">
            <p>Links will be over here</p>
            <Link to="/find">Find Friends</Link>
            <br/>
            <Link to="/manage">Manage Profile</Link>
            <br/>
            <Link to="/friends">Current Friends</Link>
            <br/>
            <br/>
            <Link to="/home">Homepage</Link>
            <br/>
            <Link to="/login">Log Off</Link>
          </div>
        </div>
    );
}

export default NavbarComponent;
