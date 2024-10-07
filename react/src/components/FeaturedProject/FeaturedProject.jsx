import { Link } from "react-router-dom";
import "./FeaturedProject.css";

const FeaturedProject = ({ linkTo, imageSrc }) => {
  return (
    <div className="project-container">
      <Link to={linkTo}>
        <img src={imageSrc} />
      </Link>
    </div>
  );
};

export default FeaturedProject;
