import ReviewList from '../../review/review-list/review-list.tsx';
import ReviewForm from '../../review/review-form/review-form.tsx';
import {ReviewModel} from '../../../types/review-model.ts';


type OfferReviewsProps = {
  id: string;
  isAuthorized: boolean;
  reviews: ReviewModel[];
}

function OfferReviews({id, isAuthorized, reviews}: OfferReviewsProps) {

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot;
        <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ReviewList reviews={reviews}/>
      {isAuthorized && <ReviewForm id={id}/>}
    </section>
  );
}

export default OfferReviews;
