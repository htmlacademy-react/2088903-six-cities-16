import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const/const.ts';


type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  isAuthorizationRequires: boolean;
  children: JSX.Element;
}

function PrivateRoute({authorizationStatus, isAuthorizationRequires, children}: PrivateRouteProps): JSX.Element {
  if (isAuthorizationRequires) {
    return (
      authorizationStatus === AuthorizationStatus.Auth
        ? children
        : <Navigate to={AppRoute.Login}/>
    );
  }

  return (
    !isAuthorizationRequires && authorizationStatus === AuthorizationStatus.Auth
      ? <Navigate to={AppRoute.Root}/>
      : children
  );

}

export default PrivateRoute;
