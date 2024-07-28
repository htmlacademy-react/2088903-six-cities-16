import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const/const.ts';
import {PropsWithChildren} from 'react';
import {useAppSelector} from '../../store';


export function PrivateRoute({children}: PropsWithChildren) {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return 'Loading...';
  }
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login}/>
  );
}

export function NoAuthOnlyRoute({children}: PropsWithChildren) {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return 'Loading...';
  }
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? <Navigate to={AppRoute.Root}/>
      : children
  );
}
