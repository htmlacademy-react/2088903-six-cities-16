import cn from 'classnames';
import {generatePath, Link} from 'react-router-dom';
import {AppRoute} from '../../../const/const.ts';

const DefaultStyle = {
  width: 260,
  height: 200,
} as const;

const FavoritesStyle = {
  width: 150,
  height: 100,
} as const;

export type OfferPreviewImageProps = {
  id: string;
  previewImage: string;
  className: 'cities' | 'favorites' | 'near-places';
}

function OfferPreviewImage({
  id,
  previewImage,
  className,
}: OfferPreviewImageProps) {

  const {width, height} = (className === 'favorites') ? FavoritesStyle : DefaultStyle;
  const imageWrapperClasses = cn('place-card__image-wrapper', `${className}__image-wrapper`);
  const path = generatePath(AppRoute.Offer, {id});

  return (
    <div className={imageWrapperClasses}>
      <Link to={path}>
        <img className="place-card__image" src={previewImage} width={width} height={height} alt="Photo studio"/>
      </Link>
    </div>
  );
}

export default OfferPreviewImage;
