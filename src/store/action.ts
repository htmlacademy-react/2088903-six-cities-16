import {createAction} from '@reduxjs/toolkit';
import {AuthorizationStatusModel, SixCitiesModel} from '../const/const.ts';
import {FullOfferModel, OfferModel,} from '../types/types.ts';
import {ReviewModel} from '../types/review-model.ts';

export const selectCity = createAction<SixCitiesModel>('main/selectCity');

export const loadOffers = createAction<OfferModel[]>('data/loadOffers');

export const loadFavorites = createAction<OfferModel[]>('data/loadFavorites');

export const loadNearby = createAction<OfferModel[]>('data/loadNearby');

export const loadOfferById = createAction<FullOfferModel>('data/loadOfferById');

export const loadReviews = createAction<ReviewModel[]>('data/loadReviews');

export const requireAuthorization = createAction<AuthorizationStatusModel>('user/requireAuthorization');

export const saveUserEmail = createAction<string>('user/saveUserEmail');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const setFavoritesDataLoadingStatus = createAction<boolean>('data/setFavoritesDataLoadingStatus');
