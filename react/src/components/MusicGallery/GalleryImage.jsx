const GalleryImage = ({ imageSrc, imageCaption, isVisible }) => {
  return (
    <figure
      className={`gallery-image-container ${
        isVisible ? "visible" : "not-visible"
      }`}
    >
      <img className="gallery-image" src={imageSrc} alt={imageCaption} />
      <figcaption className="main-container gallery-img-caption">
        {imageCaption}
      </figcaption>
    </figure>
  );
};

export default GalleryImage;
