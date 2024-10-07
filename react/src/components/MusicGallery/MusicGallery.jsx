const beginningPath = "assets/music-gallery-images/";
import GalleryImage from "./GalleryImage.jsx";
import "./MusicGallery.css";
import { useState } from "react";

const musicGalleryImages = [
  {
    id: 1,
    filename: "12:29:2018 Triad Theatre with Patrick Bartley Orchestra.jpg",
    caption: "",
  },
  {
    id: 2,
    filename: "20220305_202310.jpg",
    caption: "",
  },
  {
    id: 3,
    filename: "Babysoda at Coney Island Art Walls III - 08:20:2016.png",
    caption: "",
  },
  { id: 4, filename: "FullSizeRender.jpg", caption: "" },
  {
    id: 5,
    filename: "Hot Sardines recording session 2013.jpg",
    caption: "",
  },
  {
    id: 6,
    filename: "IMAG0016.jpg",
    caption: "",
  },
  {
    id: 7,
    filename: "imagejpeg_3.jpg",
    caption: "",
  },
  {
    id: 8,
    filename: "IMG_0179.JPG",
    caption: "",
  },
  {
    id: 9,
    filename: "IMG_0762.jpeg",
    caption: "",
  },
  {
    id: 10,
    filename: "IMG_3430.jpg",
    caption: "",
  },
  {
    id: 11,
    filename: "IMG_4894.jpg",
    caption: "",
  },
  {
    id: 12,
    filename:
      "Jared Engle, Will Anderson, Simon Wettenhall, Steve Little 08:14:2015.jpg",
    caption: "",
  },
  {
    id: 13,
    filename: "Jazz Orch of Philadelphia 12:4:22 at World Cafe Live.png",
    caption: "",
  },
  {
    id: 14,
    filename: "JOP 12_18_2021.png",
    caption: "",
  },
  {
    id: 15,
    filename: "Karmin on Good Morning America 2012.jpg",
    caption: "",
  },
  {
    id: 16,
    filename: "Larry McKenna, George Rabbai, and Lee Smith 08:2012.jpg",
    caption: "",
  },
  {
    id: 17,
    filename:
      "Playing with Dandy Wellington's Band at Roofers Union Washington D.C. - 11:06:2016.jpg",
    caption: "",
  },
  {
    id: 18,
    filename: "Screen Shot 2022-04-03 at 1.44.47 AM.png",
    caption: "",
  },
  {
    id: 19,
    filename: "Soundcheck with Dizzy Gillespie All Star Big Band 05:2012.jpg",
    caption: "",
  },
  {
    id: 20,
    filename:
      "The Ear Inn with Evan Arntzen, Adam Moezinia, and Neil Caine - 10_23_2016.jpg",
    caption: "",
  },

  {
    id: 21,
    filename:
      "with Josh Brown, Frank Basile, Slide Hampton, Douglas Purviance, and Sam Dillon 03:22:2016.JPG",
    caption: "",
  },
];

const MusicGallery = () => {
  const [currentImage, setCurrentImage] = useState(3);
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
