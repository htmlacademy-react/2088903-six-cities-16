import {favorites} from '../../../mocks/favorites.ts';
import {FavoriteModel, OfferModel} from '../../../types/types.ts';
import FavoritesLocation from '../favorites-location/favorites-location.tsx';
import {SixCitiesModel} from '../../../const/const.ts';

const favoritesSorted: FavoriteModel = favorites.reduce((acc: FavoriteModel, currentOffer: OfferModel) => {
  const cityName = currentOffer.city.name;

  if (!acc[cityName]) {
    acc[cityName] = [];
  }
  acc[cityName].push(currentOffer);
  return acc;
}, {} as FavoriteModel);

function FavoritesList() {
  // нет переходов на страницу Offer - некорректные моки favorites.ts
  return (
    <ul className="favorites__list">
      {Object.entries(favoritesSorted).map(([city, offers]) => (
        <FavoritesLocation
          key={city}
          city={city as SixCitiesModel}
          offers={offers}
        />
      ))}
    </ul>
  );
}

export default FavoritesList;
