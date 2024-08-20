import {State} from '../index.ts';
import {NameSpace} from '../../const/const.ts';
import {ReviewModel} from '../../types/review-model.ts';
import {RequestStatus} from '../offer-process/const.ts';

export const getCurrentReviews = (state: State): ReviewModel[] => state[NameSpace.Review].currentReviews;

export const getSuccessfullySentComment = (state: State): boolean => state[NameSpace.Review].successfullySentComment;

export const getCommentRequestStatus = (state: State): RequestStatus => state[NameSpace.Review].status;
