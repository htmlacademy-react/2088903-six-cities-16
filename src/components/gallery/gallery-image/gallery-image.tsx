import {ReactElement} from 'react';

type OfferImageProps = {
  imagePath: string;
}

function OfferImage({imagePath}: OfferImageProps): ReactElement {

  return (
    <div className="offer__image-wrapper">
      <img className="offer__image" src={imagePath} width="260" height="200" alt="Photo studio"/>
    </div>
  );
}

export default OfferImage;
