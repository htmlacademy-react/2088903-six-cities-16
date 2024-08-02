import cn from 'classnames';
import {HTMLAttributes, PropsWithChildren} from 'react';
import PlaceCardBadge from './place-card-badge';
import PlaceCardInfo from './place-card-info/place-card-info.tsx';

type PlaceCardProps = {
  id: string;
  title: string;
  type: string;
  price: number;
  rating: number;
  isFavorite: boolean;
  isPremium: boolean;
  className: 'cities__card' | 'favorites__card' | 'near-places__card';
} & HTMLAttributes<HTMLDivElement>;

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
      {
        isPremium &&
        <PlaceCardBadge>
          <span>Premium</span>
        </PlaceCardBadge>
      }
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
