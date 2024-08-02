import PlaceCard from '../../place-card/place-card.tsx';
import CitiesCardPreviewImage from '../cities-card-preview-image/cities-card-preview-image.tsx';
import {useAppSelector} from '../../../store';
import LoadingPage from '../../../pages/loading-page/loading-page.tsx';


type CitiesCardProps = {
  id: string;
  previewImage: string;
  setSelectedCard?: (id: string) => void;
};

function CitiesCard({
  id,
  previewImage,
  setSelectedCard,
}: CitiesCardProps) {

  const handleMouseEnter = () => setSelectedCard ? setSelectedCard(id) : null;
  const handleMouseLeave = () => setSelectedCard ? setSelectedCard('') : null;

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
      className={'cities__card'}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CitiesCardPreviewImage
        id={id}
        previewImage={previewImage}
      />
    </PlaceCard>
  );
}

export default CitiesCard;
