import {ReactElement} from 'react';
import cn from 'classnames';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const/const.ts';

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
  imagePath: string;
  isFavorite?: boolean;
}

function OfferImage({imagePath, isFavorite = false}: OfferImageProps): ReactElement {
  const imageStyle: Style = isFavorite ? Favorite : Cities;
  const {width, height, wrapperClass} = imageStyle;

  const imageWrapperClasses = cn('place-card__image-wrapper', wrapperClass);

  return (
    <div className={imageWrapperClasses}>
      <Link to={AppRoute.Offer}>
        <img className="place-card__image" src={imagePath} width={width} height={height} alt="Photo studio"/>
      </Link>
    </div>
  );
}

export default OfferImage;
