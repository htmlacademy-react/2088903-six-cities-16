import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace} from '../../const/const.ts';
import {fetchReviewsAction, sendReviewAction} from '../api-actions.ts';
import {ReviewProcessModel} from './types.ts';
import {RequestStatus} from '../offer-process/const.ts';
import {toast} from 'react-toastify';


const initialState: ReviewProcessModel = {
  currentReviews: [],
  successfullySentComment: false,
  status: RequestStatus.Idle,
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
        state.status = RequestStatus.Success;
      })
      .addCase(sendReviewAction.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(sendReviewAction.rejected, (state) => {
        state.status = RequestStatus.Failed;
        toast.warn('Не удалось отправить комментарий!');
      });
  }
});

export const {setCommentSendStatus} = reviewProcess.actions;
