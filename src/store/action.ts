import {createAction} from '@reduxjs/toolkit';
import {AuthorizationStatusModel, SixCitiesModel} from '../const/const.ts';
import {FullOfferModel, OfferModel, ReviewModel} from '../types/types.ts';

export const selectCity = createAction<SixCitiesModel>('main/selectCity');

export const loadOffers = createAction<OfferModel[]>('data/loadOffers');

export const loadOfferById = createAction<FullOfferModel>('data/loadOfferById');

export const loadReviews = createAction<ReviewModel[]>('data/loadReviews');

export const requireAuthorization = createAction<AuthorizationStatusModel>('user/requireAuthorization');

export const saveUserEmail = createAction<string>('user/saveUserEmail');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');
