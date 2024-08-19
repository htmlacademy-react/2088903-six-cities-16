import {useAppDispatch, useAppSelector} from '../store';
import useAuth from './use-auth.tsx';
import {useEffect} from 'react';
import {fetchFavoritesAction} from '../store/api-actions.ts';
import {getFavorites} from '../store/favorite-process/selectors.ts';

function useFavorites() {
  const dispatch = useAppDispatch();
  const isAuthorized = useAuth();

  useEffect(() => {
    if (isAuthorized) {
      dispatch(fetchFavoritesAction());
    }
  }, [dispatch, isAuthorized]);

  return useAppSelector(getFavorites);
}

export default useFavorites;
