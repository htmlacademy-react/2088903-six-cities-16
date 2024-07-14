import {favorites} from '../../../mocks/favorites.ts';
import {Favorite, Offer} from '../../../types/types.ts';
import FavoritesLocation from '../favorites-location/favorites-location.tsx';

const favoritesSorted: Favorite = favorites.reduce((acc: Favorite, currentOffer: Offer) => {
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
