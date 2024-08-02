import PlaceCard from '../../place-card/place-card.tsx';
import FavoritesCardPreviewImage from '../favorites-card-preview-image/favorites-card-preview-image.tsx';


type FavoritesCardProps = {
  id: string;
  previewImage: string;
  title: string;
  type: string;
  price: number;
  rating: number;
  isFavorite: boolean;
  isPremium: boolean;
};

function FavoritesCard({
  id,
  previewImage,
  title,
  type,
  price,
  rating,
  isFavorite,
  isPremium,
}: FavoritesCardProps) {

  return (
    <PlaceCard
      id={id}
      title={title}
      type={type}
      price={price}
      rating={rating}
      isFavorite={isFavorite}
      isPremium={isPremium}
      className={'favorites__card'}
    >
      <FavoritesCardPreviewImage
        id={id}
        previewImage={previewImage}
      />
    </PlaceCard>
  );
}

export default FavoritesCard;
