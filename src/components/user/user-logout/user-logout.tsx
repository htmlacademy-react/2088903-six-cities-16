import {Link} from 'react-router-dom';
import {AppRoute} from '../../../const/const.ts';
import {logoutAction} from '../../../store/api-actions.ts';
import {useAppDispatch} from '../../../store';

function UserLogout() {
  const dispatch = useAppDispatch();

  return (
    <li className="header__nav-item">
      <Link
        to={AppRoute.Root}
        className="header__nav-link"
        onClick={(evt) => {
          evt.preventDefault();
          dispatch(logoutAction());
        }}
      >
        <span className="header__signout">Sign out</span>
      </Link>
    </li>
  );
}

export default UserLogout;
