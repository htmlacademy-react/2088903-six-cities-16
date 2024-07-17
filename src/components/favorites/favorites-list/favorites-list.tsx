import {favorites} from '../../../mocks/favorites.ts';
import {TFavorite, TOffer} from '../../../types/types.ts';
import FavoritesLocation from '../favorites-location/favorites-location.tsx';

const favoritesSorted: TFavorite = favorites.reduce((acc: TFavorite, currentOffer: TOffer) => {
  const cityName = currentOffer.city.name;

  if (!acc[cityName]) {
    acc[cityName] = [];
  }
  acc[cityName].push(currentOffer);
  return acc;
}, {});

function FavoritesList() {
  // нет переходов на страницу Offer - некорректные моки favorites.ts
  return (
    <ul className="favorites__list">
      {Object.entries(favoritesSorted).map(([city, offers]) => (
        <FavoritesLocation
          key={city}
          city={city}
          offers={offers}
        />
      ))}
    </ul>
  );
}

export default FavoritesList;
