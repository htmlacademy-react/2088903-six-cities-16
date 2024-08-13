import PlaceCardPreviewImage from '../place-card/place-card-preview-image/place-card-preview-image.tsx';
import PlaceCard from '../place-card/place-card.tsx';
import {OfferModel} from '../../types/offer-model.ts';


type NearPlacesProps = {
  offersNearby: OfferModel[];
}

function NearPlaces({offersNearby}: NearPlacesProps) {

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {
          offersNearby.map((offer) => (
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
