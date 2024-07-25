import {OfferModel} from '../../types/types.ts';
import MainPage from '../../pages/main-page/main-page.tsx';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import FavoritesPage from '../../pages/favorites-page/favorites-page.tsx';
import NotFoundPage from '../../pages/not-found-page/not-found-page.tsx';
import LoginPage from '../../pages/login-page/login-page.tsx';
import OfferPage from '../../pages/offer-page/offer-page.tsx';
import {AppRoute, AuthorizationStatusModel} from '../../const/const.ts';
import {NoAuthOnlyRoute, PrivateRoute} from '../private-route/private-route.tsx';
import {HelmetProvider} from 'react-helmet-async';
import ErrorPage from '../../pages/error-page/error-page.tsx';
import {useDispatch} from 'react-redux';
import {checkAuthAction} from '../../store/api-actions.ts';

type AppProps = {
  offers: OfferModel[];
};

function App({offers}: AppProps) {
  const dispatch = useDispatch();
  const status: AuthorizationStatusModel = dispatch(checkAuthAction());

  const router = createBrowserRouter([
    {
      children: [
        {
          index: true,
          element: <MainPage/>,
        },
        {
          path: AppRoute.Favorites,
          element: (
            <PrivateRoute
              authorizationStatus={status}
            >
              <FavoritesPage/>
            </PrivateRoute>
          ),
        },
        {
          path: AppRoute.Login,
          element: (
            <NoAuthOnlyRoute
              authorizationStatus={status}
            >
              <LoginPage/>
            </NoAuthOnlyRoute>
          ),
        },
        {
          path: AppRoute.Offer,
          element: <OfferPage offers={offers}/>,
        },
        {
          path: AppRoute.NotFound,
          element: <NotFoundPage/>,
        },
      ],
      errorElement: <ErrorPage/>
    }
  ]);

  return (
    <HelmetProvider>
      <RouterProvider router={router}/>
    </HelmetProvider>
  );
}

export default App;
