import cn from 'classnames';
import {generatePath, Link} from 'react-router-dom';
import {AppRoute} from '../../../const/const.ts';
import {ImgHTMLAttributes} from 'react';


type PlaceCardPreviewImageProps = {
  id: string;
  className: 'cities__image-wrapper' | 'favorites__image-wrapper' | 'near-places__image-wrapper';
} & ImgHTMLAttributes<HTMLImageElement>;

function PlaceCardPreviewImage({
  id,
  className,
  ...restProps
}: PlaceCardPreviewImageProps) {

  const imageWrapperClasses = cn('place-card__image-wrapper', `${className}`);
  const path = generatePath(AppRoute.Offer, {id});

  return (
    <div className={imageWrapperClasses}>
      <Link to={path}>
        <img className="place-card__image" alt="Photo studio" {...restProps} />
      </Link>
    </div>
  );
}

export default PlaceCardPreviewImage;
