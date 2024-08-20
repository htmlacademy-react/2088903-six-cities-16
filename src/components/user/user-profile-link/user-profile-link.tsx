import {Link} from 'react-router-dom';
import {AppRoute} from '../../../const/const.ts';
import {useAppSelector} from '../../../store';
import {getUserName} from '../../../store/user-process/selectors.ts';
import {getFavorites} from '../../../store/offer-process/selectors.ts';


type UserProfileLinkProps = {
  isAuthorized: boolean;
};

function UserProfileLink({isAuthorized}: UserProfileLinkProps) {
  const userName = useAppSelector(getUserName);
  const favorites = useAppSelector(getFavorites);
  const link = isAuthorized ? AppRoute.Favorites : AppRoute.Login;

  return (
    <li className="header__nav-item user">
      <Link to={link} className="header__nav-link header__nav-link--profile">
        <div className="header__avatar-wrapper user__avatar-wrapper">
        </div>
        {
          isAuthorized ?
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
