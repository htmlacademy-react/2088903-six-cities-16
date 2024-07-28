import {createBrowserRouter} from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page.tsx';
import {AppRoute} from '../../const/const.ts';
import {NoAuthOnlyRoute, PrivateRoute} from '../private-route/private-route.tsx';
import FavoritesPage from '../../pages/favorites-page/favorites-page.tsx';
import LoginPage from '../../pages/login-page/login-page.tsx';
import OfferPage from '../../pages/offer-page/offer-page.tsx';
import NotFoundPage from '../../pages/not-found-page/not-found-page.tsx';
import ErrorPage from '../../pages/error-page/error-page.tsx';

export const router = createBrowserRouter([
  {
    children: [
      {
        index: true,
        element: <MainPage/>,
      },
      {
        path: AppRoute.Favorites,
        element: (
          <PrivateRoute>
            <FavoritesPage/>
          </PrivateRoute>
        ),
      },
      {
        path: AppRoute.Login,
        element: (
          <NoAuthOnlyRoute>
            <LoginPage/>
          </NoAuthOnlyRoute>
        ),
      },
      {
        path: AppRoute.Offer,
        element: <OfferPage/>,
      },
      {
        path: AppRoute.NotFound,
        element: <NotFoundPage/>,
      },
    ],
    errorElement: <ErrorPage/>
  }
]);
