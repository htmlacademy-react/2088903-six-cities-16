import {Link} from 'react-router-dom';
import {AppRoute, AuthorizationStatus, AuthorizationStatusModel} from '../../../const/const.ts';
import {useAppSelector} from '../../../store';


type UserProfileLinkProps = {
  authorizationStatus: AuthorizationStatusModel;
};

function UserProfileLink({authorizationStatus}: UserProfileLinkProps) {
  const userName = useAppSelector((state) => state.user);
  const favorites = useAppSelector((state) => state.favorites);
  const link = authorizationStatus === AuthorizationStatus.Auth
    ? AppRoute.Favorites
    : AppRoute.Login;

  return (
    <li className="header__nav-item user">
      <Link to={link} className="header__nav-link header__nav-link--profile">
        <div className="header__avatar-wrapper user__avatar-wrapper">
        </div>
        {
          authorizationStatus === AuthorizationStatus.Auth ?
            <>
              <span className="header__user-name user__name">{userName}</span>
              <span className="header__favorite-count">{favorites.length}</span>
            </>
            : <span className="header__login">Sign in</span>
        }

      </Link>
    </li>
  );
}

export default UserProfileLink;
