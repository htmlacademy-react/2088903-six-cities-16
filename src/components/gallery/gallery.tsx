import {useMemo} from 'react';
import GalleryImage from './gallery-image/gallery-image.tsx';
import * as faker from 'faker';


type GalleryProps = {
  images: string[];
};

function Gallery({images}: GalleryProps) {

  const galleryWithId = useMemo(() => images.map((image) => ({
    id: faker.datatype.uuid(),
    image
  })), [images]);

  return (
    <div className="offer__gallery">
      {
        galleryWithId.map(({id, image}) => (
          <GalleryImage
            key={id}
            imagePath={image}
          />
        ))
      }
    </div>
  );
}

export default Gallery;
