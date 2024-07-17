import {useState} from 'react';
import cn from 'classnames';

type Style = {
  width: number;
  height: number;
  buttonClass: string;
  activeClass: string;
  iconClass: string;
};

const placeCardStyle: Style = {
  width: 18,
  height: 19,
  buttonClass: 'place-card__bookmark-button',
  activeClass: 'place-card__bookmark-button--active',
  iconClass: 'place-card__bookmark-icon'
};

const offerStyle: Style = {
  width: 31,
  height: 33,
  buttonClass: 'offer__bookmark-button',
  activeClass: 'offer__bookmark-button--active',
  iconClass: 'offer__bookmark-icon'
};

type BookmarkProps = {
  isFavorite: boolean;
  ifOfferDetail?: boolean;
}

function BookmarkToggle({isFavorite, ifOfferDetail = false}: BookmarkProps) {
  const [active, setActive] = useState(isFavorite);

  const cardStyle: Style = ifOfferDetail ? offerStyle : placeCardStyle;
  const {width, height, buttonClass, activeClass, iconClass} = cardStyle;
  const label = `${isFavorite ? 'In' : 'To'} bookmarks`;
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
      <span className="visually-hidden">{label}</span>
    </button>
  );
}

export default BookmarkToggle;
