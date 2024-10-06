import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = ({ classes }) => {
  return (
    <nav className={`nav-bar${classes ?? ""}`}>
      <NavLink className="nav-link" to="/">
        Home
      </NavLink>
      <NavLink className="nav-link" to="/contact">
        Contact
      </NavLink>
      <NavLink className="nav-link" to="/projects">
        Projects
      </NavLink>
      <NavLink className="nav-link" to="/music">
        Music
      </NavLink>
    </nav>
  );
};

export default NavBar;
