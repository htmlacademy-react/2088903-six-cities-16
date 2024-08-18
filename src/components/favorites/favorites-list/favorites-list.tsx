import {FavoriteModel, OfferModel} from '../../../types/offer-model.ts';
import FavoritesLocation from '../favorites-location/favorites-location.tsx';
import {SixCitiesModel} from '../../../const/const.ts';
import {useAppDispatch, useAppSelector} from '../../../store';
import {useEffect} from 'react';
import {fetchFavoritesAction} from '../../../store/api-actions.ts';
import useAuth from '../../../hooks/use-auth.tsx';
import {getFavorites} from '../../../store/offer-process/selectors.ts';


function FavoritesList() {
  const dispatch = useAppDispatch();
  const isAuthorized = useAuth();

  useEffect(() => {
    if (isAuthorized) {
      dispatch(fetchFavoritesAction());
    }
  }, [dispatch, isAuthorized]);

  const favorites = useAppSelector(getFavorites);

  const favoritesSorted: FavoriteModel = favorites.reduce((acc: FavoriteModel, currentOffer: OfferModel) => {
    const cityName = currentOffer.city.name;

    if (!acc[cityName]) {
      acc[cityName] = [];
    }
    acc[cityName].push(currentOffer);
    return acc;
  }, {} as FavoriteModel);

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
