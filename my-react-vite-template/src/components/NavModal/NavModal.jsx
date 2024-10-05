import NavBar from "../NavBar";
import "./NavModal.css";

const NavModal = ({ navModalOpen, setNavModalOpen }) => {
  return (
    <section className={`nav-modal ${navModalOpen ? "visible" : "hide"}`}>
      <button
        className="close-modal-button"
        onClick={() => {
          setNavModalOpen(false);
        }}
      >
        X
      </button>
      <NavBar classes=" col" />
    </section>
  );
};

export default NavModal;
