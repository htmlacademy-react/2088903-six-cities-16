import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from './index.ts';
import {FullOfferModel, OfferModel} from '../types/offer-model.ts';
import {AuthorizationStatus, Endpoint} from '../const/const.ts';
import {FullUserModel,} from '../types/user-model.ts';
import {dropToken, saveToken} from '../services/token.ts';
import {AuthModel} from '../types/auth-model.ts';
import {
  loadFavorites,
  loadNearby,
  loadOfferById,
  loadOffers,
  loadReviews,
  requireAuthorization,
  saveUserEmail,
  setCommentSendStatus,
  setFavoritesDataLoadingStatus,
  setOffersDataLoadingStatus,
} from './action.ts';
import {NewReviewModel, ReviewModel} from '../types/review-model.ts';
import {toast} from 'react-toastify';


export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<OfferModel[]>(Endpoint.Offers);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(loadOffers(data));
  },
);

export const fetchFavoritesAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFavorites',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setFavoritesDataLoadingStatus(true));
    const {data} = await api.get<OfferModel[]>(Endpoint.Favorite);
    dispatch(loadFavorites(data));
    dispatch(setFavoritesDataLoadingStatus(false));
  },
);

export const fetchOfferByIdAction = createAsyncThunk<void, Record<'id', string>, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOfferById',
  async ({id}, {dispatch, extra: api}) => {
    const {data} = await api.get<FullOfferModel>(`${Endpoint.Offers}/${id}`);
    dispatch(loadOfferById(data));
  },
);

export const fetchNearbyAction = createAsyncThunk<void, Record<'id', string>, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchNearbyAction',
  async ({id}, {dispatch, extra: api}) => {
    const {data} = await api.get<OfferModel[]>(`${Endpoint.Offers}/${id}/nearby`);
    dispatch(loadNearby(data));
  },
);

export const fetchReviewsAction = createAsyncThunk<void, Record<'id', string>, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/loadReviews',
  async ({id}, {dispatch, extra: api}) => {
    const {data} = await api.get<ReviewModel[]>(`${Endpoint.Reviews}/${id}`);
    dispatch(loadReviews(data));
  },
);

export const sendReviewAction = createAsyncThunk<void, NewReviewModel, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/sendReview',
  async ({id, comment, rating}, {dispatch, extra: api}) => {
    try {
      await api.post<ReviewModel>(`${Endpoint.Reviews}/${id}`, {comment, rating});
      dispatch(fetchReviewsAction({id}));
      dispatch(setCommentSendStatus(true));
    } catch {
      toast.warn('Не удалось отправить комментарий!');
    }
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data: {email}} = await api.get<FullUserModel>(Endpoint.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(saveUserEmail(email));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthModel, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<FullUserModel>(Endpoint.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(saveUserEmail(email));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(Endpoint.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);
