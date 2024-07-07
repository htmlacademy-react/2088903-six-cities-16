import {ReactElement} from 'react';
import {favorites} from '../../../mocks/favorites.ts';
import {Favorite, Offer} from '../../../types/types.ts';
import FavoritesLocation from '../favorites-location/favorites-location.tsx';

function FavoritesList(): ReactElement {
  const favoritesSorted: Favorite = favorites.reduce((acc: Favorite, currentOffer: Offer) => {
    const cityName = currentOffer.city.name;

    if (!acc[cityName]) {
      acc[cityName] = [];
    }
    acc[cityName].push(currentOffer);
    return acc;
  }, {});

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
