import PlaceCard from '../../place-card/place-card.tsx';
import {PlaceCardModel} from '../../../types/place-card.ts';
import PlaceCardPreviewImage from '../../place-card/place-card-preview-image/place-card-preview-image.tsx';


type FavoritesCardProps = {
  previewImage: string;
} & Omit<PlaceCardModel, 'className'>;

function FavoritesCard({
  id,
  title,
  type,
  price,
  rating,
  isFavorite,
  isPremium,
  previewImage,
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
      <PlaceCardPreviewImage
        id={id}
        className={'favorites__image-wrapper'}
        src={previewImage}
        width={150}
        height={100}
      />
    </PlaceCard>
  );
}

export default FavoritesCard;
