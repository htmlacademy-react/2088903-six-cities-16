import {getRatingPercentage} from '../../../utils/utils.ts';

type OfferRatingProps = {
  rating: number;
};

function OfferRating({rating}: OfferRatingProps) {
  return (
    <div className="offer__rating rating">
      <div className="offer__stars rating__stars">
        <span style={{width: getRatingPercentage(rating)}}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      <span className="offer__rating-value rating__value">{rating}</span>
    </div>
  );
}

export default OfferRating;
