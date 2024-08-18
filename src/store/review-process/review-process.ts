import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace} from '../../const/const.ts';
import {fetchReviewsAction, sendReviewAction} from '../api-actions.ts';
import {ReviewProcessModel} from './types.ts';


const initialState: ReviewProcessModel = {
  currentReviews: [],
  successfullySentComment: false,
};

export const reviewProcess = createSlice({
  name: NameSpace.Review,
  initialState,
  reducers: {
    setCommentSendStatus: (state, action: PayloadAction<boolean>) => {
      state.successfullySentComment = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.currentReviews = action.payload;
      })
      .addCase(sendReviewAction.fulfilled, (state) => {
        state.successfullySentComment = true;
      });
  }
});

export const {setCommentSendStatus} = reviewProcess.actions;
