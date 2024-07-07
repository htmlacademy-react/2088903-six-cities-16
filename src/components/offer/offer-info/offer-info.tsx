import {ReactElement} from 'react';
import {getRatingPercentage} from '../../../utils/utils.ts';
import Bookmark from '../../common/bookmark';

type OfferInfoProps = {
  title: string;
  type: string;
  price: number;
  rating: number;
  isFavorite: boolean;
};

function OfferInfo({
  title,
  type,
  price,
  rating,
  isFavorite
}: OfferInfoProps): ReactElement {


  return (
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <Bookmark isFavorite={isFavorite}/>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: getRatingPercentage(rating)}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <a href="#">{title}</a>
      </h2>
      <p className="place-card__type">{type}</p>
    </div>
  );
}

export default OfferInfo;
