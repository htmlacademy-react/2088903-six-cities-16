import UserProfileLink from './user-profile-link/user-profile-link.tsx';
import UserLogout from './user-logout/user-logout.tsx';
import useAuth from '../../hooks/use-auth.tsx';

function User() {
  const isAuthorized = useAuth();
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <UserProfileLink isAuthorized={isAuthorized}/>
        {
          isAuthorized && <UserLogout/>
        }
      </ul>
    </nav>
  );
}

export default User;
