import {createReducer} from '@reduxjs/toolkit';
import {loadOffers, requireAuthorization, selectCity, setOffersDataLoadingStatus} from './action.ts';
import {AuthorizationStatus, AuthorizationStatusModel, SixCitiesModel} from '../const/const.ts';
import {OfferModel} from '../types/types.ts';

export type InitialStateModel = {
  activeCity: SixCitiesModel;
  offers: OfferModel[];
  authorizationStatus: AuthorizationStatusModel;
  isOffersDataLoading: boolean;
}

const initialState: InitialStateModel = {
  activeCity: 'Paris',
  offers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    });
});

export {reducer};
