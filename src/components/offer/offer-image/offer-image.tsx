import cn from 'classnames';
import {Link} from 'react-router-dom';

type Style = {
  width: number;
  height: number;
  wrapperClass: string;
}

const Cities: Style = {
  width: 260,
  height: 200,
  wrapperClass: 'cities__image-wrapper'
};

const Favorite: Style = {
  width: 150,
  height: 110,
  wrapperClass: 'favorites__image-wrapper'
};

type OfferImageProps = {
  previewImage: string;
  isFavoritesCard?: boolean;
}

function OfferImage({previewImage, isFavoritesCard = false}: OfferImageProps) {
  const imageStyle: Style = isFavoritesCard ? Favorite : Cities;
  const {width, height, wrapperClass} = imageStyle;

  const imageWrapperClasses = cn('place-card__image-wrapper', wrapperClass);

  return (
    <div className={imageWrapperClasses}>
      <Link to='/offer/a13b9fbd-1328-4e59-baad-7353729df28e'>
        <img className="place-card__image" src={previewImage} width={width} height={height} alt="Photo studio"/>
      </Link>
    </div>
  );
}

export default OfferImage;
