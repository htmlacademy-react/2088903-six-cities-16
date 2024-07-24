import {useState} from 'react';
import cn from 'classnames';

const PlaceCardStyle = {
  width: 18,
  height: 19,
} as const;

const OfferStyle = {
  width: 31,
  height: 33,
} as const;

type BookmarkProps = {
  isFavorite: boolean;
  className?: 'offer' | 'place-card';
}

function BookmarkToggle({isFavorite, className = 'place-card'}: BookmarkProps) {
  const [active, setActive] = useState(isFavorite);

  const {width, height} = (className === 'place-card') ? PlaceCardStyle : OfferStyle;
  const label = `${isFavorite ? 'In' : 'To'} bookmarks`;
  const buttonClassNames = cn('button', `${className}__bookmark-button`, {
    [`${className}__bookmark-button--active`]: active,
  });

  return (
    <button
      className={buttonClassNames}
      type="button"
      onClick={() => setActive(!active)}
    >
      <svg className={`${className}__bookmark-icon`} width={width} height={height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{label}</span>
    </button>
  );
}

export default BookmarkToggle;
