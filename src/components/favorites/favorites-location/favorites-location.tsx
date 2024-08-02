import {OfferModel} from '../../../types/types.ts';
import {Link} from 'react-router-dom';
import {AppRoute, SixCitiesModel} from '../../../const/const.ts';
import FavoritesCard from '../favorites-card/favorites-card.tsx';

type FavoritesLocationProps = {
  city: SixCitiesModel;
  offers: OfferModel[];
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
          offers.map((offer: OfferModel) => (
            <FavoritesCard
              key={offer.id}
              id={offer.id}
              previewImage={offer.previewImage}
              title={offer.title}
              type={offer.type}
              price={offer.price}
              rating={offer.rating}
              isFavorite={offer.isFavorite}
              isPremium={offer.isPremium}
            />
          )
          )
        }
      </div>
    </li>
  );
}

export default FavoritesLocation;
