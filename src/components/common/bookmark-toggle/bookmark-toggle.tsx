import {ReactElement, useState} from 'react';
import cn from 'classnames';

type Style = {
  width: number;
  height: number;
  description: string;
  buttonClass: string;
  activeClass: string;
  iconClass: string;
};

const placeCardStyle: Style = {
  width: 18,
  height: 19,
  description: 'In bookmarks',
  buttonClass: 'place-card__bookmark-button',
  activeClass: 'place-card__bookmark-button--active',
  iconClass: 'place-card__bookmark-icon'
};

const offerStyle: Style = {
  width: 31,
  height: 33,
  description: 'To bookmarks',
  buttonClass: 'offer__bookmark-button',
  activeClass: 'offer__bookmark-button--active',
  iconClass: 'offer__bookmark-icon'
};

type BookmarkProps = {
  isFavorite: boolean;
  ifOfferDetail?: boolean;
}

function BookmarkToggle({isFavorite, ifOfferDetail = false}: BookmarkProps): ReactElement {
  const [active, setActive] = useState(isFavorite);

  const cardStyle: Style = ifOfferDetail ? offerStyle : placeCardStyle;
  const {width, height, description, buttonClass, activeClass, iconClass} = cardStyle;

  const buttonClassNames = cn(
    'button', buttonClass, {
      [activeClass]: active,
    });

  return (
    <button
      className={buttonClassNames}
      type="button"
      onClick={() => setActive(!active)}
    >
      <svg className={iconClass} width={width} height={height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{description}</span>
    </button>
  );
}

export default BookmarkToggle;
