import {Link} from 'react-router-dom';
import {AppRoute} from '../../const/const.ts';
import User from '../user/user.tsx';

type HeaderProps = {
  showUser?: boolean;
}

function Header({showUser}: HeaderProps) {

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={AppRoute.Root} className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          {
            showUser && <User/>
          }
        </div>
      </div>
    </header>
  );
}

export default Header;
