import GalleryImage from './gallery-image/gallery-image.tsx';


type GalleryProps = {
  images: string[];
};

function Gallery({images}: GalleryProps) {

  return (
    <div className="offer__gallery">
      {
        images.map((image) => (
          <GalleryImage
            key={image}
            imagePath={image}
          />
        ))
      }
    </div>
  );
}

export default Gallery;
