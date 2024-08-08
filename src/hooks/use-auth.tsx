import {AuthorizationStatus} from '../const/const.ts';
import {useAppSelector} from '../store';

function useAuth() {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  return authorizationStatus === AuthorizationStatus.Auth;
}

export default useAuth;
