import {ReactElement} from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const/const.ts';
import {getRatingPercentage} from '../../utils/utils.ts';
import CardMark from '../common/card-mark/card-mark.tsx';
import * as classNames from 'classnames';

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

  const buttonClass = classNames({
    'place-card__bookmark-button button': true,
    'place-card__bookmark-button--active': isFavorite,
  });

  return (
    <article className="cities__card place-card">
      {
        isPremium ? <CardMark text={'Premium'}/> : null
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={AppRoute.Offer}>
          <img className="place-card__image" src={previewImage} width="260" height="200"
            alt={title}
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={buttonClass}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
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
