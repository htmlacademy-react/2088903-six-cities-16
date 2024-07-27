import {AuthorizationStatus} from '../../const/const.ts';
import {useAppSelector} from '../../store';
import UserProfileLink from './user-profile-link/user-profile-link.tsx';
import UserLogout from './user-logout/user-logout.tsx';

function User() {

  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <UserProfileLink authorizationStatus={authorizationStatus}/>
        {
          authorizationStatus === AuthorizationStatus.Auth && <UserLogout/>
        }
      </ul>
    </nav>
  );
}

export default User;
