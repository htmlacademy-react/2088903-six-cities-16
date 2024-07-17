import {COMMENTS} from '../../../mocks/comments.ts';
import ReviewItem from '../review-item/review-item.tsx';
import {TComment, TComments} from '../../../types/types.ts';

const MAX_REVIEW_COUNT = 10;

function ReviewList() {
  const sortedComments: TComments = [...COMMENTS]
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, MAX_REVIEW_COUNT);

  return (
    <ul className="reviews__list">
      {
        sortedComments.map((review: TComment) => (
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
