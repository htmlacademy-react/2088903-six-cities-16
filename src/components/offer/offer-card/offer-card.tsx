import Badge from '../../common/badge/badge.tsx';
import OfferInfo from '../offer-info/offer-info.tsx';
import cn from 'classnames';
import OfferPreviewImage from '../offer-preview-image/offer-preview-image.tsx';

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
  isFavoritesCard = false,
  setSelectedCard,
}: PlaceCardProps) {

  const cardClassNames = cn('place-card', {
    'cities__card': !isFavoritesCard,
    'favorites__card': isFavoritesCard,
  });

  const handleMouseEnter = () => setSelectedCard ? setSelectedCard(id) : null;
  const handleMouseLeave = () => setSelectedCard ? setSelectedCard('') : null;

  return (
    <article
      className={cardClassNames}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {
        isPremium && <Badge/>
      }
      <OfferPreviewImage
        id={id}
        previewImage={previewImage}

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
