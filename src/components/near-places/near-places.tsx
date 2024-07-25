import OfferCard from '../offer/offer-card/offer-card.tsx';
import {OfferModel} from '../../types/types.ts';

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
            <OfferCard
              key={offer.id}
              id={offer.id}
              title={offer.title}
              type={offer.type}
              price={offer.price}
              rating={offer.rating}
              previewImage={offer.previewImage}
              isFavorite={offer.isFavorite}
              isPremium={offer.isPremium}
              className='near-places'
            />
          ))
        }
      </div>
    </section>
  );
}

export default NearPlaces;
