import {ReviewModel} from '../../types/review-model.ts';
import {RequestStatus} from '../offer-process/const.ts';

export type ReviewProcessModel = {
  currentReviews: ReviewModel[];
  successfullySentComment: boolean;
  status: RequestStatus;
};
