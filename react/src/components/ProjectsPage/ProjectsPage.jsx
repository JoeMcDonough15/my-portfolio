import FeaturedProject from "../FeaturedProject";
import featuredProjects from "../../../public/assets/featuredProjects";

const ProjectsPage = () => {
  return (
    <section>
      <div className="content-section main-container col">
        <h1>Projects</h1>

        <div className="u-palette-1-base u-shape u-shape-rectangle u-shape-1"></div>

        {featuredProjects.map((featuredProject) => {
          return (
            <FeaturedProject
              key={featuredProject.id}
              linkTo={featuredProject.hostedProjectUrl}
              imageSrc={featuredProject.previewImg}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsPage;
