import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const/const.ts';


type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  isAuthorizationRequired: boolean;
  children: JSX.Element;
}

function PrivateRoute({authorizationStatus, isAuthorizationRequired, children}: PrivateRouteProps) {
  if (isAuthorizationRequired) {
    return (
      authorizationStatus === AuthorizationStatus.Auth
        ? children
        : <Navigate to={AppRoute.Login}/>
    );
  }

  return (
    !isAuthorizationRequired && authorizationStatus === AuthorizationStatus.Auth
      ? <Navigate to={AppRoute.Root}/>
      : children
  );
}

export default PrivateRoute;
