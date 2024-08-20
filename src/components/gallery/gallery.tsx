import GalleryImage from './gallery-image/gallery-image.tsx';

const MAX_IMAGE_COUNT = 6;

type GalleryProps = {
  images: string[];
};

function Gallery({images}: GalleryProps) {

  return (
    <div className="offer__gallery">
      {
        images.slice(0, MAX_IMAGE_COUNT).map((image) => (
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
