import { Link } from "react-router-dom";
import "./Footer.css";
import NavBar from "../NavBar";
import CurrentYear from "../CurrentYear";

const externalLinks = [
  { linkDestination: "https://github.com/JoeMcDonough15", linkName: "github" },
  {
    linkDestination: "https://www.linkedin.com/in/joe-mcdonough-94599a20b/",
    linkName: "linkedIn",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <section className="main-container col">
        <div className="footer-nav-row row">
          <NavBar classes=" col" />
          <div className="external-links col">
            {externalLinks.map((externalLink, index) => {
              return (
                <Link
                  key={index + 1}
                  className="external-link"
                  to={externalLink.linkDestination}
                >
                  <h6 className="link-name">{externalLink.linkName} </h6>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="copyright row">
          <span>&copy; Joe McDonough</span>
          <CurrentYear />
        </div>
      </section>
    </footer>
  );
};

export default Footer;
