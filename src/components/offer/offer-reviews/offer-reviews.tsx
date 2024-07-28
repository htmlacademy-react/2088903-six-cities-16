import ReviewList from '../../review/review-list/review-list.tsx';
import ReviewForm from '../../review/review-form/review-form.tsx';
import {AuthorizationStatus, AuthorizationStatusModel} from '../../../const/const.ts';
import {ReviewModel} from '../../../types/types.ts';


type OfferReviewsProps = {
  id?: string;
  authorizationStatus: AuthorizationStatusModel;
  currentReviews: ReviewModel[];
}

function OfferReviews({authorizationStatus, id, currentReviews}: OfferReviewsProps) {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot;
        <span className="reviews__amount">{currentReviews.length}</span>
        <span style={{display: 'none'}}>{id}</span>
      </h2>
      <ReviewList currentReviews={currentReviews}/>
      {authorizationStatus === AuthorizationStatus.Auth && <ReviewForm/>}
    </section>
  );
}

export default OfferReviews;
