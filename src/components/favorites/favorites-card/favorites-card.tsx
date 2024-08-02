import PlaceCard from '../../place-card/place-card.tsx';
import FavoritesCardPreviewImage from '../favorites-card-preview-image/favorites-card-preview-image.tsx';
import {useAppSelector} from '../../../store';
import LoadingPage from '../../../pages/loading-page/loading-page.tsx';


type FavoritesCardProps = {
  id: string;
  previewImage: string;
};

function FavoritesCard({
  id,
  previewImage,
}: FavoritesCardProps) {

  // Временное решение, будет заменено на реальные данные с get /six-cities/favorite
  const offer = useAppSelector((state) => state.offers.find((item) => item.id === id));

  if (!offer) {
    return <LoadingPage/>;
  }

  const {
    title,
    type,
    price,
    rating,
    isFavorite,
    isPremium,
  } = offer;

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
