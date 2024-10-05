import Logo from "../Logo";
import NavBar from "../NavBar";
import "./Header.css";

const Header = ({ navModalOpen, setNavModalOpen }) => {
  return (
    <header className="header row">
      <Logo />
      <button
        onClick={() => {
          console.log("clicked");
          setNavModalOpen(!navModalOpen);
        }}
      >
        <img
          className="hamburger-menu-icon"
          src="../../../public/assets/menu.png"
          alt="hamburger-menu-icon"
        />
      </button>
      <NavBar classes=" row" />
    </header>
  );
};

export default Header;
