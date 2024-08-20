import {ChangeEvent} from 'react';

type ReviewRatingFormProps = {
  rating: string;
  handleInputChange: (evt: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void;
};

function ReviewRatingForm({rating, handleInputChange}: ReviewRatingFormProps) {
  return (
    <div className="reviews__rating-form form__rating">
      <input className="form__rating-input visually-hidden" name="rating" value="5"
        id="5-stars"
        type="radio"
        checked={rating === '5'}
        onChange={handleInputChange}
      />
      <label htmlFor="5-stars" className="reviews__rating-label form__rating-label"
        title="perfect"
      >
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>

      <input className="form__rating-input visually-hidden" name="rating" value="4"
        id="4-stars"
        type="radio"
        checked={rating === '4'}
        onChange={handleInputChange}
      />
      <label htmlFor="4-stars" className="reviews__rating-label form__rating-label"
        title="good"
      >
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>

      <input className="form__rating-input visually-hidden" name="rating" value="3"
        id="3-stars"
        type="radio"
        checked={rating === '3'}
        onChange={handleInputChange}
      />
      <label htmlFor="3-stars" className="reviews__rating-label form__rating-label"
        title="not bad"
      >
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>

      <input className="form__rating-input visually-hidden" name="rating" value="2"
        id="2-stars"
        type="radio"
        checked={rating === '2'}
        onChange={handleInputChange}
      />
      <label htmlFor="2-stars" className="reviews__rating-label form__rating-label"
        title="badly"
      >
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>

      <input className="form__rating-input visually-hidden" name="rating" value="1"
        id="1-stars"
        type="radio"
        checked={rating === '1'}
        onChange={handleInputChange}
      />
      <label htmlFor="1-stars" className="reviews__rating-label form__rating-label"
        title="terribly"
      >
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </div>
  );
}

export default ReviewRatingForm;
