import "./HomePage.css";
import SkillList from "../SkillList";
import skills from "../../../public/assets/skills.js";

const HomePage = () => {
  return (
    <>
      <section className="hero-section content-section">
        <div className="main-container col">
          <div className="circle-shape"></div>
          <h1 className="hero-section-header">I&apos;m Joe McDonough</h1>
          <p>
            I&apos;m a <span className="fill-in-word"></span> web developer
          </p>
        </div>
      </section>
      <section className="about-me content-section main-container col">
        <p className="text-block">
          I a web developer based in Philadelphia, PA. I am an entry-level
          programmer with a strong grasp on fundamentals and an eagerness to
          keep learning!
        </p>
        <div className="image-circle">
          <img src="assets/headshot.jpeg" alt="my headshot" />
        </div>
      </section>
      <section className="content-section more-info">
        <div className="main-container col">
          <p className="text-block">
            I have been a full time performing jazz trombonist for the past 20
            years! I have taught jazz trombone students as a faculty member at
            Temple University and have performed concerts all over the world.
          </p>
          <p className="text-block">
            I took on programming a few years ago as a hobby and have fallen in
            love with it. Building projects is how I love spending my time!
          </p>
        </div>
      </section>
      <section className="skills-section">
        <h2>Here Are Some of My Skills</h2>
        <SkillList listOfSkills={skills} />
      </section>
    </>
  );
};

export default HomePage;
