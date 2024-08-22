import ReviewItem from '../review-item/review-item.tsx';
import {sortReviews} from '../../../utils/utils.ts';
import {ReviewModel} from '../../../types/review-model.ts';

const MAX_REVIEW_COUNT = 10;

type ReviewListProps = {
  reviews: ReviewModel[];
};

function ReviewList({reviews}: ReviewListProps) {
  const sortedComments: ReviewModel[] = sortReviews(reviews, MAX_REVIEW_COUNT);

  return (
    <ul className="reviews__list">
      {
        sortedComments.map((review: ReviewModel) => (
          <ReviewItem
            key={review.id}
            review={review}
          />
        ))
      }
    </ul>
  );
}

export default ReviewList;
