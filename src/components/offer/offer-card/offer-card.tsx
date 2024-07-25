import OfferInfo from '../offer-info/offer-info.tsx';
import cn from 'classnames';
import OfferPreviewImage from '../offer-preview-image/offer-preview-image.tsx';
import PlaceCardBadge from '../../place-card/place-card-badge/place-card-badge.tsx';

type PlaceCardProps = {
  id: string;
  title: string;
  type: string;
  price: number;
  rating: number;
  previewImage: string;
  isFavorite: boolean;
  isPremium: boolean;
  className?: 'cities' | 'favorites' | 'near-places';
  setSelectedCard?: (id: string) => void;
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
  className = 'cities',
  setSelectedCard,
}: PlaceCardProps) {

  const cardClassNames = cn('place-card', `${className}__card`);

  const handleMouseEnter = () => setSelectedCard ? setSelectedCard(id) : null;
  const handleMouseLeave = () => setSelectedCard ? setSelectedCard('') : null;

  return (
    <article
      className={cardClassNames}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {
        isPremium &&
        <PlaceCardBadge>
          <span>Premium</span>
        </PlaceCardBadge>
      }
      <OfferPreviewImage
        id={id}
        previewImage={previewImage}
        className={className}
      />
      <OfferInfo
        id={id}
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
