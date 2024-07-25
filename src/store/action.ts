import {createAction} from '@reduxjs/toolkit';
import {AuthorizationStatusModel, SixCitiesModel} from '../const/const.ts';
import {OfferModel} from '../types/types.ts';

export const selectCity = createAction('main/selectCity', (value: SixCitiesModel) => ({
  payload: value,
}));

export const loadOffers = createAction<OfferModel[]>('data/loadOffers');

export const requireAuthorization = createAction<AuthorizationStatusModel>('user/requireAuthorization');
