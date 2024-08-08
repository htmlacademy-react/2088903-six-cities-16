import {UserModel} from './types.ts';

export type ReviewModel = {
  id: string;
  date: string;
  user: UserModel;
  comment: string;
  rating: number;
};

export type NewReviewModel = {
  id: string;
  comment: string;
  rating: number;
};
