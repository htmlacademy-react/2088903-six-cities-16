import {useMemo} from 'react';
import {OFFER_GALLERY_IMAGES} from '../../const/const.ts';
import GalleryImage from './gallery-image/gallery-image.tsx';
import * as faker from 'faker';


type GalleryWithId = {
  id: string;
  image: string;
}

function Gallery() {

  const galleryWithId: GalleryWithId[] = useMemo(() => OFFER_GALLERY_IMAGES.map((image) => ({
    id: faker.datatype.uuid(),
    image
  })), []);

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
