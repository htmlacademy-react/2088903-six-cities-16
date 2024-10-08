import {FormEvent, useEffect, useState} from 'react';
import ReviewRatingForm from '../review-rating-form/review-rating-form.tsx';
import {sendReviewAction} from '../../../store/api-actions.ts';
import {useAppDispatch, useAppSelector} from '../../../store';
import {getCommentRequestStatus, getSuccessfullySentComment} from '../../../store/review-process/selectors.ts';
import {setCommentSendStatus} from '../../../store/review-process/review-process.ts';
import {RequestStatus} from '../../../store/offer-process/const.ts';


type ReviewFormProps = {
  id: string;
}

function ReviewForm({id}: ReviewFormProps) {
  const dispatch = useAppDispatch();
  const successfullySentComment = useAppSelector(getSuccessfullySentComment);
  const status = useAppSelector(getCommentRequestStatus);
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');

  const isButtonDisabled = !(rating && comment.length > 50 && comment.length < 200);

  useEffect(() => {
    if (successfullySentComment) {
      setRating('');
      setComment('');
      dispatch(setCommentSendStatus(false));
    }
  }, [successfullySentComment, dispatch]);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(sendReviewAction({id, comment: comment, rating: +rating}));
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <ReviewRatingForm
        rating={rating}
        status={status}
        handleInputChange={(evt) => setRating(evt.target.value)}
      />
      <textarea className="reviews__textarea form__textarea" id="review" name="comment"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={comment}
        disabled={status === RequestStatus.Loading}
        onChange={(evt) => setComment(evt.target.value)}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set
          <span className="reviews__star">rating</span>
          and describe your stay with at least
          <b className="reviews__text-amount"> 50characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit"
          disabled={isButtonDisabled || status === RequestStatus.Loading}
        >Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
