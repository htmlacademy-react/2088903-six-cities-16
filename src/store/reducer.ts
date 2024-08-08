import {createReducer} from '@reduxjs/toolkit';
import {
  loadFavorites,
  loadNearby,
  loadOfferById,
  loadOffers,
  loadReviews,
  requireAuthorization,
  saveUserEmail,
  selectCity,
  setCommentSendStatus,
  setFavoritesDataLoadingStatus,
  setOffersDataLoadingStatus
} from './action.ts';
import {AuthorizationStatus, AuthorizationStatusModel, SixCitiesModel} from '../const/const.ts';
import {FullOfferModel, OfferModel} from '../types/types.ts';
import {ReviewModel} from '../types/review-model.ts';

export type InitialStateModel = {
  activeCity: SixCitiesModel;
  offers: OfferModel[];
  favorites: OfferModel[];
  nearby: OfferModel[];
  currentOffer: FullOfferModel | null;
  currentReviews: ReviewModel[];
  authorizationStatus: AuthorizationStatusModel;
  user: string;
  isOffersDataLoading: boolean;
  isFavoritesDataLoading: boolean;
  successfullySentComment: boolean;
}

const initialState: InitialStateModel = {
  activeCity: 'Paris',
  offers: [],
  favorites: [],
  nearby: [],
  currentOffer: null,
  currentReviews: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  user: '',
  isOffersDataLoading: false,
  isFavoritesDataLoading: false,
  successfullySentComment: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(loadFavorites, (state, action) => {
      state.favorites = action.payload;
    })
    .addCase(loadNearby, (state, action) => {
      state.nearby = action.payload;
    })
    .addCase(loadOfferById, (state, action) => {
      state.currentOffer = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.currentReviews = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(setFavoritesDataLoadingStatus, (state, action) => {
      state.isFavoritesDataLoading = action.payload;
    })
    .addCase(saveUserEmail, (state, action) => {
      state.user = action.payload;
    })
    .addCase(setCommentSendStatus, (state, action) => {
      state.successfullySentComment = action.payload;
    });
});

export {reducer};
