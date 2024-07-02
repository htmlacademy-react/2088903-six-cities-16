import {ReactElement} from 'react';
import * as classNames from 'classnames';

type LocationItemProps = {
  city: string;
  activeTab: string;
  clickHandler: () => void;
}

function LocationItem({
  city,
  activeTab,
  clickHandler,
}: LocationItemProps): ReactElement {

  const buttonClass = classNames({
    'locations__item-link tabs__item': true,
    'tabs__item--active': activeTab === city,
  });

  return (
    <li className="locations__item">
      <a onClick={clickHandler} className={buttonClass}>
        <span>{city}</span>
      </a>
    </li>
  );
}

export default LocationItem;
