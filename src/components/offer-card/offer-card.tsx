import {ReactElement} from 'react';
import {getRatingPercentage} from '../../utils/utils.ts';
import Badge from '../common/badge/badge.tsx';
import Bookmark from '../common/bookmark';
import OfferImage from '../offer-image/offer-image.tsx';

type PlaceCardProps = {
  title: string;
  type: string;
  price: number;
  rating: number;
  previewImage: string;
  isFavorite: boolean;
  isPremium: boolean;
};

function OfferCard({
  title,
  type,
  price,
  rating,
  isFavorite,
  isPremium,
  previewImage
}: PlaceCardProps): ReactElement {


  return (
    <article className="cities__card place-card">
      {
        isPremium ? <Badge text={'Premium'}/> : null
      }
      <OfferImage imagePath={previewImage}/>

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
    </article>
  );
}

export default OfferCard;
