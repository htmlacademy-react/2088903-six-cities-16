import {useAppSelector} from '../../store';
import PlaceCardPreviewImage from '../place-card/place-card-preview-image/place-card-preview-image.tsx';
import PlaceCard from '../place-card/place-card.tsx';


const MAX_NEARBY_COUNT = 3;

function NearPlaces() {
  const offersNearby = useAppSelector((state) => state.nearby);

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {
          offersNearby.slice(0, MAX_NEARBY_COUNT).map((offer) => (
            <PlaceCard
              key={offer.id}
              id={offer.id}
              title={offer.title}
              type={offer.type}
              price={offer.price}
              rating={offer.rating}
              isFavorite={offer.isFavorite}
              isPremium={offer.isPremium}
              className='near-places__card'
            >
              <PlaceCardPreviewImage
                id={offer.id}
                className={'near-places__image-wrapper'}
                src={offer.previewImage}
                width={260}
                height={200}
              />
            </PlaceCard>
          ))
        }
      </div>
    </section>
  );
}

export default NearPlaces;
