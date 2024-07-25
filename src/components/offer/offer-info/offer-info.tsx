import {getRatingPercentage} from '../../../utils/utils.ts';
import {generatePath, Link} from 'react-router-dom';
import {AppRoute} from '../../../const/const.ts';
import PlaceCardBookmarkButton from '../../place-card/place-card-bookmark-button';

type OfferInfoProps = {
  id: string;
  title: string;
  type: string;
  price: number;
  rating: number;
  isFavorite: boolean;
};

function OfferInfo({
  id,
  title,
  type,
  price,
  rating,
  isFavorite
}: OfferInfoProps) {

  const path = generatePath(AppRoute.Offer, {id});

  return (
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <PlaceCardBookmarkButton isFavorite={isFavorite}/>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: getRatingPercentage(rating)}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <Link to={path}>{title}</Link>
      </h2>
      <p className="place-card__type">{type}</p>
    </div>
  );
}

export default OfferInfo;
