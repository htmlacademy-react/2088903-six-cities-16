import {ReactElement} from 'react';
import cn from 'classnames';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../../const/const.ts';

type LocationItemProps = {
  city: string;
  activeCity?: string;
  handleClick?: () => void | ReactElement;
}

function LocationItem({
  city,
  activeCity,
  handleClick,
}: LocationItemProps) {

  const buttonClass = cn('locations__item-link tabs__item', {
    'tabs__item--active': activeCity === city,
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
