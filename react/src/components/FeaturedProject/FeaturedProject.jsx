import { Link } from "react-router-dom";

const FeaturedProject = ({ linkTo, imageSrc }) => {
  return (
    <div>
      <Link to={linkTo}>
        <img src={imageSrc} />
      </Link>
    </div>
  );
};

export default FeaturedProject;
