import {ReactElement} from 'react';
import * as classNames from 'classnames';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../../const/const.ts';

type LocationItemProps = {
  city: string;
  activeTab?: string;
  handleClick?: () => void | ReactElement;
}

function LocationItem({
  city,
  activeTab,
  handleClick,
}: LocationItemProps) {

  const buttonClass = classNames({
    'locations__item-link tabs__item': true,
    'tabs__item--active': activeTab === city,
  });

  return (
    <li className="locations__item">
      <Link to={AppRoute.Root} onClick={handleClick} className={buttonClass}>
        <span>{city}</span>
      </Link>
    </li>
  );
}

export default LocationItem;
