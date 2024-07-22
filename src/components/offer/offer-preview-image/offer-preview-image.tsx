import cn from 'classnames';
import {generatePath, Link} from 'react-router-dom';
import {AppRoute} from '../../../const/const.ts';

export type OfferPreviewImageProps = {
  id: string;
  previewImage: string;
  className?: string;
  width?: number;
  height?: number;
}

function OfferPreviewImage({
  id,
  previewImage,
  className = 'cities',
  width = 260,
  height = 200
}: OfferPreviewImageProps) {

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
