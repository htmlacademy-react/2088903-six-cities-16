import MainPage from '../../pages/main-page/main-page.tsx';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import FavoritesPage from '../../pages/favorites-page/favorites-page.tsx';
import NotFoundPage from '../../pages/not-found-page/not-found-page.tsx';
import LoginPage from '../../pages/login-page/login-page.tsx';
import OfferPage from '../../pages/offer-page/offer-page.tsx';
import {AppRoute, AuthorizationStatus} from '../../const/const.ts';
import {NoAuthOnlyRoute, PrivateRoute} from '../private-route/private-route.tsx';
import {HelmetProvider} from 'react-helmet-async';
import ErrorPage from '../../pages/error-page/error-page.tsx';
import {useAppSelector} from '../../store';
import LoadingPage from '../../pages/loading-page/loading-page.tsx';


function App() {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isOffersDataLoading = useAppSelector((state) => state.isOffersDataLoading);

  if (authorizationStatus === AuthorizationStatus.Unknown || isOffersDataLoading) {
    return (
      <LoadingPage/>
    );
  }

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
              authorizationStatus={authorizationStatus}
            >
              <FavoritesPage/>
            </PrivateRoute>
          ),
        },
        {
          path: AppRoute.Login,
          element: (
            <NoAuthOnlyRoute
              authorizationStatus={authorizationStatus}
            >
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

  return (
    <HelmetProvider>
      <RouterProvider router={router}/>
    </HelmetProvider>
  );
}

export default App;
