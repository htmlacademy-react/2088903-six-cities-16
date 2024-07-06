import {ReactElement} from 'react';
import Badge from '../common/badge/badge.tsx';
import OfferImage from '../offer-image/offer-image.tsx';
import OfferInfo from '../offer-info/offer-info.tsx';
import cn from 'classnames';

type PlaceCardProps = {
  title: string;
  type: string;
  price: number;
  rating: number;
  previewImage: string;
  isFavorite: boolean;
  isPremium: boolean;
  isFavoritesCard?: boolean;
};

function OfferCard({
  title,
  type,
  price,
  rating,
  isFavorite,
  isPremium,
  previewImage,
  isFavoritesCard = false,
}: PlaceCardProps): ReactElement {

  const cardClassNames = cn('place-card', {
    'cities__card': !isFavoritesCard,
    'favorites__card': isFavoritesCard,
  });

  return (
    <article className={cardClassNames}>
      {
        isPremium ? <Badge text={'Premium'}/> : null
      }
      <OfferImage previewImage={previewImage} isFavoritesCard={isFavoritesCard}/>
      <OfferInfo
        title={title}
        type={type}
        price={price}
        rating={rating}
        isFavorite={isFavorite}
      />
    </article>
  );
}

export default OfferCard;
