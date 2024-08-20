import {offerProcess} from './offer-process/offer-process.ts';
import {reviewProcess} from './review-process/review-process.ts';
import {userProcess} from './user-process/user-process.ts';
import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const/const.ts';

export const rootReducer = combineReducers({
  [NameSpace.Offer]: offerProcess.reducer,
  [NameSpace.Review]: reviewProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
});
