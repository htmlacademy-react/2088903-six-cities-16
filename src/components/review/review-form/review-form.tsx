import {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import ReviewRatingForm from '../review-rating-form/review-rating-form.tsx';
import {sendReviewAction} from '../../../store/api-actions.ts';
import {useAppDispatch, useAppSelector} from '../../../store';
import {setCommentSendStatus} from '../../../store/action.ts';

type ReviewFormProps = {
  id: string;
}

function ReviewForm({id}: ReviewFormProps) {
  const dispatch = useAppDispatch();
  const hasCommentSuccessfullyBeenSent = useAppSelector((state) => state.hasCommentSuccessfullyBeenSent);
  const [formData, setFormData] = useState({
    rating: '',
    comment: '',
    buttonDisable: true,
  });

  useEffect(() => {
    const isButtonDisabled = !(formData.rating && formData.comment.length > 50 && formData.comment.length < 200);
    setFormData((prevState) => ({
      ...prevState,
      buttonDisable: isButtonDisabled,
    }));
  }, [formData.rating, formData.comment]);

  useEffect(() => {
    if (hasCommentSuccessfullyBeenSent) {
      setFormData((prevState) => ({...prevState, rating: '', comment: ''}));
      dispatch(setCommentSendStatus(false));
    }
  }, [hasCommentSuccessfullyBeenSent, dispatch]);

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const {value, name} = evt.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(sendReviewAction({id, comment: formData.comment, rating: +formData.rating}));
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <ReviewRatingForm
        rating={formData.rating}
        handleInputChange={handleInputChange}
      />
      <textarea className="reviews__textarea form__textarea" id="review" name="comment"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={formData.comment}
        onChange={handleInputChange}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set
          <span className="reviews__star">rating</span>
          and describe your stay with at least
          <b className="reviews__text-amount"> 50characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={formData.buttonDisable}>Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
