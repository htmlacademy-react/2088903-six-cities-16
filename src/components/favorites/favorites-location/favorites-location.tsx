import {ReactElement} from 'react';
import {Offer, Offers} from '../../../types/types.ts';
import OfferCard from '../../offer-card/offer-card.tsx';

type FavoritesLocationProps = {
  city: string;
  offers: Offers;
}

function FavoritesLocation({city, offers}: FavoritesLocationProps): ReactElement {

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {
          offers.map((offer: Offer) => (
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
              isFavoritesCard
            />
          )
          )
        }
      </div>
    </li>
  );
}

export default FavoritesLocation;
