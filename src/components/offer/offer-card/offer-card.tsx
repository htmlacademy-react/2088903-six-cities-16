import Badge from '../../common/badge/badge.tsx';
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
  setselectedCard?: (id: string) => void;
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
  setselectedCard,
}: PlaceCardProps) {

  const cardClassNames = cn('place-card', {
    'cities__card': !isFavoritesCard,
    'favorites__card': isFavoritesCard,
  });

  const handleMouseEnter = () => setselectedCard ? setselectedCard(id) : null;
  const handleMouseLeave = () => setselectedCard ? setselectedCard('') : null;

  return (
    <article
      className={cardClassNames}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {
        isPremium ? <Badge/> : null
      }
      <OfferImage
        id={id}
        previewImage={previewImage}
        isFavoritesCard={isFavoritesCard}
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
