import {ChangeEvent, FormEvent, useState} from 'react';
import ReviewRatingForm from '../review-rating-form/review-rating-form.tsx';

function ReviewForm() {
  const [formData, setFormData] = useState({
    rating: '',
    review: '',
    isSubmitDisable: true,
  });

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const {value, name} = evt.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <ReviewRatingForm
        rating={formData.rating}
        handleInputChange={handleInputChange}
      />
      <textarea className="reviews__textarea form__textarea" id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={formData.review}
        onChange={handleInputChange}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set
          <span className="reviews__star">rating</span>
          and describe your stay with at least
          <b className="reviews__text-amount">50characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit"
          disabled={formData.isSubmitDisable}
        >Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
