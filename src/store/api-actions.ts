import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from './index.ts';
import {FullOfferModel, OfferModel, ReviewModel} from '../types/types.ts';
import {APIRoute, AuthorizationStatus} from '../const/const.ts';
import {UserData,} from '../types/user-data.ts';
import {dropToken, saveToken} from '../services/token.ts';
import {AuthData} from '../types/auth-data.ts';
import {
  loadFavorites,
  loadOfferById,
  loadOffers,
  loadReviews,
  requireAuthorization,
  saveUserEmail,
  setFavoritesDataLoadingStatus,
  setOffersDataLoadingStatus,
} from './action.ts';


export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<OfferModel[]>(APIRoute.Offers);
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
    const {data} = await api.get<OfferModel[]>(APIRoute.Favorite);
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
    const {data} = await api.get<FullOfferModel>(`${APIRoute.Offers}/${id}`);
    dispatch(loadOfferById(data));
  },
);

export const fetchReviewsAction = createAsyncThunk<void, Record<'id', string>, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/loadReviews',
  async ({id}, {dispatch, extra: api}) => {
    const {data} = await api.get<ReviewModel[]>(`${APIRoute.Reviews}/${id}`);
    dispatch(loadReviews(data));
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
      const {data: {email}} = await api.get<UserData>(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(saveUserEmail(email));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
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
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);
