import "./MusicPage.css";
import { useEffect, useState } from "react";
import MusicGallery from "../MusicGallery";

const heroImageFile = {
  portrait: "fatCatPortrait",
  landscape: "fullSizeFatCat",
};

const MusicPage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const detectWindowChange = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", detectWindowChange);

    return () => {
      window.removeEventListener("resize", detectWindowChange);
    };
  }, []);

  return (
    <>
      <section className="music-hero-image-container">
        <img
          className="music-hero-image"
          style={{ width: "100%", height: "100%" }}
          src={`assets/${
            windowWidth < 480 ? heroImageFile.portrait : heroImageFile.landscape
          }.jpg`}
          alt="image of me playing at Fat Cat Jazz Club in New York City (now Cellar Dog)"
        />
      </section>
      <section className="main-container col music-bio-text">
        <p className="text-block">
          For the past 20 years, I have been a freelance jazz trombonist and
          tubist. Since graduating from Temple University in 2009, I have
          performed and recorded with The Christian McBride Big Band, including
          on their 2018 Grammy winning album, Bringin&apos; It. As a sideman
          with other groups, I have been featured with the Boston Symphony Pops
          Orchestra, aired on Good Morning America twice, and performed in
          concert halls and jazz clubs all over the world.
        </p>
        <p className="text-block">
          From 2014-2023, I was performing regularly with The Philly Pops Jazz
          Orchestra of Philadelphia, under the direction of Terell Stafford. As
          a member of the city&apos;s preeminent jazz orchestra, I had the
          privilege of performing with such jazz luminaries as Jimmy Heath,
          Clark Terry, Benny Golson, Randy Brecker, Jon Faddis Wynton Marsalis,
          and Kenny Barron.
        </p>
        <p className="text-block">
          As an educator, I have served on the faculty of Temple
          University&apos;s Boyer College of Music and Dance. I have also
          conducted educational workshops with Jazz at Lincoln Center and The
          Juilliard School, my second alma mater.
        </p>
      </section>
      <MusicGallery />
    </>
  );
};

export default MusicPage;
