import PlaceCard from '../../place-card/place-card.tsx';
import {useAppSelector} from '../../../store';
import LoadingPage from '../../../pages/loading-page/loading-page.tsx';
import PlaceCardPreviewImage from '../../place-card/place-card-preview-image/place-card-preview-image.tsx';
import {getOffers} from '../../../store/offer-process/selectors.ts';


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

  const offer = useAppSelector(getOffers).find((item) => item.id === id);

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
      <PlaceCardPreviewImage
        id={id}
        className={'cities__image-wrapper'}
        src={previewImage}
        width={260}
        height={200}
      />
    </PlaceCard>
  );
}

export default CitiesCard;
