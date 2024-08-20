import {RouterProvider} from 'react-router-dom';
import {AuthorizationStatus} from '../../const/const.ts';
import {HelmetProvider} from 'react-helmet-async';
import {useAppSelector} from '../../store';
import LoadingPage from '../../pages/loading-page/loading-page.tsx';
import {router} from '../router/router.tsx';
import {getAuthorizationStatus} from '../../store/user-process/selectors.ts';
import {getIsOffersDataLoading} from '../../store/offer-process/selectors.ts';


function App() {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isOffersDataLoading = useAppSelector(getIsOffersDataLoading);

  if (authorizationStatus === AuthorizationStatus.Unknown || isOffersDataLoading) {
    return (
      <LoadingPage/>
    );
  }

  return (
    <HelmetProvider>
      <RouterProvider router={router}/>
    </HelmetProvider>
  );
}

export default App;
