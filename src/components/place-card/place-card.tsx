import cn from 'classnames';
import {HTMLAttributes, PropsWithChildren} from 'react';
import PlaceCardInfo from './place-card-info/place-card-info.tsx';
import {PlaceCardModel} from '../../types/place-card-model.ts';

type PlaceCardProps = PlaceCardModel & HTMLAttributes<HTMLDivElement>;

function PlaceCard({
  id,
  title,
  type,
  price,
  rating,
  isFavorite,
  isPremium,
  className,
  children,
  ...restProps
}: PropsWithChildren<PlaceCardProps>) {

  const cardClassNames = cn('place-card', `${className}`);

  return (
    <article
      className={cardClassNames}
      {...restProps}
    >
      {isPremium &&
        <div className='place-card__mark'>
          <span>Premium</span>
        </div>}
      {children}
      <PlaceCardInfo
        id={id}
        title={title}
        type={type}
        price={price}
        rating={rating}
        isFavorite={isFavorite}
      />
    </article>
  );
}

export default PlaceCard;
