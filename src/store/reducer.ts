import {createReducer, PayloadAction} from '@reduxjs/toolkit';
import {offers} from '../mocks/offers.ts';
import {selectCity} from './action.ts';
import {TCities} from '../const/const.ts';
import {TOffers} from '../types/types.ts';

export type TInitialState = {
  activeCity: TCities;
  offersList: TOffers;
}

const initialState = {
  activeCity: 'Paris' as TCities,
  offersList: offers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectCity, (state, action: PayloadAction<TCities>) => {
      state.activeCity = action.payload;
    });
});

export {reducer};
