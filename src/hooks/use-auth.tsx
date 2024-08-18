import {AuthorizationStatus} from '../const/const.ts';
import {useAppSelector} from '../store';
import {getAuthorizationStatus} from '../store/user-process/selectors.ts';

function useAuth() {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return authorizationStatus === AuthorizationStatus.Auth;
}

export default useAuth;
