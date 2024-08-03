type GalleryImageProps = {
  imagePath: string;
}

function GalleryImage({imagePath}: GalleryImageProps) {

  return (
    <div className="offer__image-wrapper">
      <img className="offer__image" src={imagePath} width="260" height="200" alt="Photo studio"/>
    </div>
  );
}

export default GalleryImage;
