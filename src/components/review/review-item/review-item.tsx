import {getRatingPercentage} from '../../../utils/utils.ts';
import {ReviewModel} from '../../../types/review-model.ts';

type ReviewItemProps = {
  review: ReviewModel;
}

function ReviewItem({review}: ReviewItemProps) {
  const {user, rating, comment, date} = review;
  const formatDate = (rawDate: string): string => new Date(rawDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long'
  });

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: getRatingPercentage(rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date}>{formatDate(date)}</time>
      </div>
    </li>
  );
}

export default ReviewItem;
