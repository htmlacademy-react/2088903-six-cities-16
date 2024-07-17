import ReviewList from '../../review/review-list/review-list.tsx';
import ReviewForm from '../../review/review-form/review-form.tsx';

function OfferReviews() {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot;
        <span className="reviews__amount">1</span>
      </h2>
      <ReviewList/>
      <ReviewForm/>
    </section>
  );
}

export default OfferReviews;
