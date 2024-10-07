import GalleryImage from "./GalleryImage.jsx";
import "./MusicGallery.css";
import { useState, useEffect } from "react";
import musicGalleryImages from "../../../public/assets/musicGalleryImages.js";

const beginningPath = "assets/music-gallery-images/";

const MusicGallery = () => {
  const [currentImage, setCurrentImage] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevValue) => {
        if (prevValue >= musicGalleryImages.length) {
          return 1;
        }
        return ++prevValue;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="main-container music-gallery-container">
      {musicGalleryImages.map((image) => {
        return (
          <GalleryImage
            key={image.id}
            imageSrc={`${beginningPath}${image.filename}`}
            imageCaption={image.caption}
            isVisible={image.id === currentImage}
          />
        );
      })}
    </section>
  );
};

export default MusicGallery;
