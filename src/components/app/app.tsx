import {RouterProvider} from 'react-router-dom';
import {AuthorizationStatus} from '../../const/const.ts';
import {HelmetProvider} from 'react-helmet-async';
import {useAppSelector} from '../../store';
import LoadingPage from '../../pages/loading-page/loading-page.tsx';
import {router} from '../router/router.tsx';


function App() {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isOffersDataLoading = useAppSelector((state) => state.isOffersDataLoading);

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
