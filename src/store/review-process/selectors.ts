import {State} from '../index.ts';
import {NameSpace} from '../../const/const.ts';
import {ReviewModel} from '../../types/review-model.ts';

export const getCurrentReviews = (state: State): ReviewModel[] => state[NameSpace.Review].currentReviews;

export const getSuccessfullySentComment = (state: State): boolean => state[NameSpace.Review].successfullySentComment;
