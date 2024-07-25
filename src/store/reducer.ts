import {createReducer, PayloadAction} from '@reduxjs/toolkit';
import {loadOffers, requireAuthorization, selectCity} from './action.ts';
import {AuthorizationStatus, AuthorizationStatusModel, SixCitiesModel} from '../const/const.ts';
import {OfferModel} from '../types/types.ts';

export type TInitialState = {
  activeCity: SixCitiesModel;
  offers: OfferModel[];
  authorizationStatus: AuthorizationStatusModel;
}

const initialState: TInitialState = {
  activeCity: 'Paris',
  offers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectCity, (state, action: PayloadAction<SixCitiesModel>) => {
      state.activeCity = action.payload;
    })
    .addCase(loadOffers, (state, action: PayloadAction<OfferModel[]>) => {
      state.offers = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export {reducer};

