import {ReviewModel} from '../../types/review-model.ts';

export type ReviewProcessModel = {
  currentReviews: ReviewModel[];
  successfullySentComment: boolean;
};
