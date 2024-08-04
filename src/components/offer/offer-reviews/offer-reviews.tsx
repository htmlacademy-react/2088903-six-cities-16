import ReviewList from '../../review/review-list/review-list.tsx';
import ReviewForm from '../../review/review-form/review-form.tsx';
import {AuthorizationStatus, AuthorizationStatusModel} from '../../../const/const.ts';
import {ReviewModel} from '../../../types/review-model.ts';


type OfferReviewsProps = {
  id: string;
  authorizationStatus: AuthorizationStatusModel;
  reviews: ReviewModel[];
}

function OfferReviews({authorizationStatus, id, reviews}: OfferReviewsProps) {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot;
        <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ReviewList reviews={reviews}/>
      {authorizationStatus === AuthorizationStatus.Auth && <ReviewForm id={id}/>}
    </section>
  );
}

export default OfferReviews;
