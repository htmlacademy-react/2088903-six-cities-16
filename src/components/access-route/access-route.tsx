import {Navigate} from 'react-router-dom';
import {AppRoute, AppRouteModel, AuthorizationStatus, AuthorizationStatusModel} from '../../const/const.ts';
import {PropsWithChildren} from 'react';
import {useAppSelector} from '../../store';
import {getAuthorizationStatus} from '../../store/user-process/selectors.ts';


const createAccessRoute = (statusToCheck: AuthorizationStatusModel, fallbackPath: AppRouteModel) =>
  function AccessRoute({children}: PropsWithChildren) {
    const authorizationStatus = useAppSelector(getAuthorizationStatus);
    switch (authorizationStatus) {
      case statusToCheck:
        return children;
      case 'UNKNOWN':
        return 'Loading...';
      default:
        return <Navigate to={fallbackPath}/>;
    }
  };

const AccessRoute = createAccessRoute(AuthorizationStatus.Auth, AppRoute.Login);

const NoAuthOnlyRoute = createAccessRoute(AuthorizationStatus.NoAuth, AppRoute.Root);

export {AccessRoute, NoAuthOnlyRoute};
