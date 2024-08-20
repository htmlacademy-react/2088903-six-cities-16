import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from './index.ts';
import {FullOfferModel, OfferModel} from '../types/offer-model.ts';
import {Endpoint} from '../const/const.ts';
import {FullUserModel,} from '../types/user-model.ts';
import {dropToken, saveToken} from '../services/token.ts';
import {AuthModel} from '../types/auth-model.ts';
import {NewReviewModel, ReviewModel} from '../types/review-model.ts';
import {FavoriteChangeProps, FavoriteChangeResponse} from './offer-process/types.ts';
import {updateOffer} from './offer-process/offer-process.ts';


export const fetchOffersAction = createAsyncThunk<OfferModel[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offer/fetchOffers',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<OfferModel[]>(Endpoint.Offers);
    return data;
  },
);

export const fetchFavoritesAction = createAsyncThunk<OfferModel[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offer/fetchFavorites',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<OfferModel[]>(Endpoint.Favorite);
    return data;
  },
);

export const changeFavoriteAction = createAsyncThunk<FavoriteChangeResponse, FavoriteChangeProps, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offer/changeFavorite',
  async ({offerId, status}, {dispatch, extra: api}) => {
    const response = await api.post<OfferModel & FullOfferModel>(`${Endpoint.Favorite}/${offerId}/${status}`);
    dispatch(updateOffer(response.data));
    return {offer: response.data, status};
  },
);

export const fetchOfferByIdAction = createAsyncThunk<FullOfferModel, Record<'id', string>, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offer/fetchOfferById',
  async ({id}, {extra: api}) => {
    const {data} = await api.get<FullOfferModel>(`${Endpoint.Offers}/${id}`);
    return data;
  },
);

export const fetchNearbyAction = createAsyncThunk<OfferModel[], Record<'id', string>, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offer/fetchNearbyAction',
  async ({id}, {extra: api}) => {
    const {data} = await api.get<OfferModel[]>(`${Endpoint.Offers}/${id}/nearby`);
    return data;
  },
);

export const fetchReviewsAction = createAsyncThunk<ReviewModel[], Record<'id', string>, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'review/loadReviews',
  async ({id}, {extra: api}) => {
    const {data} = await api.get<ReviewModel[]>(`${Endpoint.Reviews}/${id}`);
    return data;
  },
);

export const sendReviewAction = createAsyncThunk<void, NewReviewModel, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'review/sendReview',
  async ({id, comment, rating}, {dispatch, extra: api}) => {
    await api.post<ReviewModel>(`${Endpoint.Reviews}/${id}`, {comment, rating});
    dispatch(fetchReviewsAction({id}));
  },
);

export const checkAuthAction = createAsyncThunk<string, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    const {data: {email}} = await api.get<FullUserModel>(Endpoint.Login);
    dispatch(fetchFavoritesAction());
    return email;
  },
);

export const loginAction = createAsyncThunk<string, AuthModel, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({email, password}, {extra: api}) => {
    const {data: {token}} = await api.post<FullUserModel>(Endpoint.Login, {email, password});
    saveToken(token);
    return email;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {extra: api}) => {
    await api.delete(Endpoint.Logout);
    dropToken();
  },
);
