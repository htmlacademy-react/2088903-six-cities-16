import {TOffer, TOffers} from '../../../types/types.ts';
import OfferCard from '../../offer/offer-card/offer-card.tsx';
import {Link} from 'react-router-dom';
import {AppRoute, TCities} from '../../../const/const.ts';

type FavoritesLocationProps = {
  city: TCities;
  offers: TOffers;
}

function FavoritesLocation({city, offers}: FavoritesLocationProps) {

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link to={AppRoute.Root} className="locations__item-link">
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {
          offers.map((offer: TOffer) => (
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
              className = 'favorites'
            />
          )
          )
        }
      </div>
    </li>
  );
}

export default FavoritesLocation;
