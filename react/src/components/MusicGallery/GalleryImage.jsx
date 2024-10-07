const GalleryImage = ({ imageSrc, imageCaption, isVisible }) => {
  return (
    <figure
      className={`gallery-image ${isVisible ? "visible" : "not-visible"}`}
    >
      <div className="gallery-img-container">
        <img src={imageSrc} alt={imageCaption} />
      </div>
      <figcaption>{imageCaption}</figcaption>
    </figure>
  );
};

export default GalleryImage;
