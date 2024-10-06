import { NavLink } from "react-router-dom";
import "./Logo.css";

const Logo = () => {
  return (
    <NavLink className="logo-container" to="/">
      <img className="logo-img" src="../../../assets/trombone.png" />
    </NavLink>
  );
};

export default Logo;
