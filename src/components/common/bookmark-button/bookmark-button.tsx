import {useState} from 'react';
import cn from 'classnames';
import Button from '../button';


export type BookmarkButtonProps = {
  isFavorite: boolean;
  componentClassName: string;
  iconClassName: string;
  width: number;
  height: number;
}

function BookmarkButton({isFavorite, componentClassName, iconClassName, width, height}: BookmarkButtonProps) {
  const [active, setActive] = useState(isFavorite);
  const buttonClassNames = cn(componentClassName, {
    [`${componentClassName}--active`]: active,
  });

  return (
    <Button
      className={buttonClassNames}
      type="button"
      onClick={() => setActive(!active)}
    >
      <svg className={iconClassName} width={width} height={height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{`${isFavorite ? 'In' : 'To'} bookmarks`}</span>
    </Button>
  );
}

export default BookmarkButton;
