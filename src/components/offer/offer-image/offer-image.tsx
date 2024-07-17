import cn from 'classnames';
import {generatePath, Link} from 'react-router-dom';
import {AppRoute} from '../../../const/const.ts';

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
  id: string;
  previewImage: string;
  isFavoritesCard?: boolean;
}

function OfferImage({id, previewImage, isFavoritesCard = false}: OfferImageProps) {
  const imageStyle: Style = isFavoritesCard ? Favorite : Cities;
  const {width, height, wrapperClass} = imageStyle;

  const imageWrapperClasses = cn('place-card__image-wrapper', wrapperClass);
  const path = generatePath(AppRoute.Offer, {id});

  return (
    <div className={imageWrapperClasses}>
      <Link to={path}>
        <img className="place-card__image" src={previewImage} width={width} height={height} alt="Photo studio"/>
      </Link>
    </div>
  );
}

export default OfferImage;
