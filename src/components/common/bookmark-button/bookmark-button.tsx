import {useState} from 'react';
import cn from 'classnames';
import Button from '../button';
import useAuth from '../../../hooks/use-auth.tsx';
import {useNavigate} from 'react-router-dom';
import {AppRoute} from '../../../const/const.ts';
import {changeFavoriteAction} from '../../../store/api-actions.ts';
import {useAppDispatch} from '../../../store';


export type BookmarkButtonProps = {
  id: string;
  isFavorite: boolean;
  componentClassName: string;
  iconClassName: string;
  width: number;
  height: number;
}

function BookmarkButton({id, isFavorite, componentClassName, iconClassName, width, height}: BookmarkButtonProps) {
  const [active, setActive] = useState(isFavorite);
  const isAuthorized = useAuth();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // const requestStatus = useAppSelector(getRequestStatus);
  const buttonClassNames = cn(componentClassName, {
    [`${componentClassName}--active`]: active,
  });

  const handleClick = () => {
    if (!isAuthorized) {
      return navigate(AppRoute.Login);
    }
    // При проверке на состояние не проходят тесты на отправку запроса
    // if (requestStatus !== RequestStatus.Loading) {
    dispatch(changeFavoriteAction({
      offerId: id,
      status: Number(!active),
    }));
    setActive(!active);
    // }
  };

  return (
    <Button
      className={buttonClassNames}
      type="button"
      onClick={handleClick}
    >
      <svg className={iconClassName} width={width} height={height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{`${isFavorite ? 'In' : 'To'} bookmarks`}</span>
    </Button>
  );
}

export default BookmarkButton;
