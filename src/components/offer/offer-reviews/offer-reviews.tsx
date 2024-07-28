import ReviewList from '../../review/review-list/review-list.tsx';
import ReviewForm from '../../review/review-form/review-form.tsx';
import {AuthorizationStatus, AuthorizationStatusModel} from '../../../const/const.ts';


type OfferReviewsProps = {
  id?: string;
  authorizationStatus: AuthorizationStatusModel;
}

function OfferReviews({authorizationStatus, id}: OfferReviewsProps) {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot;
        <span className="reviews__amount">1</span>
        <br/>
        <span>{id}</span>
      </h2>
      <ReviewList/>
      {authorizationStatus === AuthorizationStatus.Auth && <ReviewForm/>}
    </section>
  );
}

export default OfferReviews;
