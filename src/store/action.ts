import {createAction} from '@reduxjs/toolkit';
import {AuthorizationStatusModel, SixCitiesModel} from '../const/const.ts';
import {OfferModel} from '../types/types.ts';

export const selectCity = createAction<SixCitiesModel>('main/selectCity');

export const loadOffers = createAction<OfferModel[]>('data/loadOffers');

export const requireAuthorization = createAction<AuthorizationStatusModel>('user/requireAuthorization');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');
