import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus, AuthorizationStatusType} from '../../const/const.ts';
import {ReactNode} from 'react';


type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatusType;
  children: ReactNode;
}

export function PrivateRoute({authorizationStatus, children}: PrivateRouteProps) {
  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return 'Loading...';
  }
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login}/>
  );
}

export function NoAuthOnlyRoute({authorizationStatus, children}: PrivateRouteProps) {
  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return 'Loading...';
  }
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? <Navigate to={AppRoute.Root}/>
      : children
  );
}
