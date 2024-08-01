import PlaceCardInfo from './place-card-info/place-card-info.tsx';
import cn from 'classnames';
import PlaceCardBadge from './place-card-badge/place-card-badge.tsx';
import PlaceCardPreviewImage from './place-card-preview-image/place-card-preview-image.tsx';

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

function PlaceCard({
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
      <PlaceCardPreviewImage
        id={id}
        previewImage={previewImage}
        className={className}
      />
      <PlaceCardInfo
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

export default PlaceCard;
