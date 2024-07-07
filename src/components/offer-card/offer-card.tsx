import {ReactElement} from 'react';
import Badge from '../common/badge/badge.tsx';
import OfferImage from '../offer-image/offer-image.tsx';
import OfferInfo from '../offer-info/offer-info.tsx';
import cn from 'classnames';

type PlaceCardProps = {
  id: string;
  title: string;
  type: string;
  price: number;
  rating: number;
  previewImage: string;
  isFavorite: boolean;
  isPremium: boolean;
  isFavoritesCard?: boolean;
  setHoveredCard?: (id: string) => void;
};

function OfferCard({
  id,
  title,
  type,
  price,
  rating,
  isFavorite,
  isPremium,
  previewImage,
  isFavoritesCard = false,
  setHoveredCard,
}: PlaceCardProps): ReactElement {

  const cardClassNames = cn('place-card', {
    'cities__card': !isFavoritesCard,
    'favorites__card': isFavoritesCard,
  });

  const handleMouseEnter = () => setHoveredCard ? setHoveredCard(id) : null;
  const handleMouseLeave = () => setHoveredCard ? setHoveredCard('') : null;

  return (
    <article
      className={cardClassNames}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {
        isPremium ? <Badge text={'Premium'}/> : null
      }
      <OfferImage
        previewImage={previewImage}
        isFavoritesCard={isFavoritesCard}
      />
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
