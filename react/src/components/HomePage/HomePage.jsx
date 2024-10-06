import "./HomePage.css";

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
        <h2
          class="u-align-center u-text u-text-default u-text-1"
          data-animation-name="customAnimationIn"
          data-animation-duration="1500"
        >
          Here Are Some of My Skills
        </h2>
        <ul>
          <li>
            <div>
              <svg viewBox="0 0 512 512" width="20px" height="20px">
                <path
                  d="m202.6 478-202.6-186.6 70.5-76.6 121.5 111.9 239.4-292.7 80.6 65.9z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            HTML5
          </li>
          <li>
            <div>
              <svg viewBox="0 0 512 512" width="20px" height="20px">
                <path
                  d="m202.6 478-202.6-186.6 70.5-76.6 121.5 111.9 239.4-292.7 80.6 65.9z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            CSS
          </li>
          <li>
            <div>
              <svg viewBox="0 0 512 512" width="20px" height="20px">
                <path
                  d="m202.6 478-202.6-186.6 70.5-76.6 121.5 111.9 239.4-292.7 80.6 65.9z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            Javascript
          </li>

          <li>
            <div>
              <svg viewBox="0 0 512 512" width="20px" height="20px">
                <path
                  d="m202.6 478-202.6-186.6 70.5-76.6 121.5 111.9 239.4-292.7 80.6 65.9z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            React
          </li>

          <li>
            <div>
              <svg viewBox="0 0 512 512" width="20px" height="20px">
                <path
                  d="m202.6 478-202.6-186.6 70.5-76.6 121.5 111.9 239.4-292.7 80.6 65.9z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            Node.js
          </li>
          <li>
            <div>
              <svg viewBox="0 0 512 512" width="20px" height="20px">
                <path
                  d="m202.6 478-202.6-186.6 70.5-76.6 121.5 111.9 239.4-292.7 80.6 65.9z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            Express
          </li>
          <li>
            <div>
              <svg viewBox="0 0 512 512" width="20px" height="20px">
                <path
                  d="m202.6 478-202.6-186.6 70.5-76.6 121.5 111.9 239.4-292.7 80.6 65.9z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            SQLite3
          </li>
          <li>
            <div>
              <svg viewBox="0 0 512 512" width="20px" height="20px">
                <path
                  d="m202.6 478-202.6-186.6 70.5-76.6 121.5 111.9 239.4-292.7 80.6 65.9z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            Sequelize
          </li>
          <li>
            <div>
              <svg viewBox="0 0 512 512" width="20px" height="20px">
                <path
                  d="m202.6 478-202.6-186.6 70.5-76.6 121.5 111.9 239.4-292.7 80.6 65.9z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            PostgreSQL
          </li>
        </ul>
      </section>
    </>
  );
};

export default HomePage;
