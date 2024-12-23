import './Navbar.css';
import {Link} from "react-router-dom"

const NavbarComponent = () => {
    return(
        <div class="sidebar">
            <p>Links will be over here</p>
            <Link to="/find">Find Friends</Link>
            <br/>
            <Link to="/manage">Manage Profile</Link>
            <br/>
            <Link to="/">Current Friends</Link>
            <br/>
            <Link to="/home">Homepage</Link>
        </div>
    );
}

export default NavbarComponent;