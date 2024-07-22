import {createReducer} from '@reduxjs/toolkit';
import {offers} from '../mocks/offers.ts';
import {selectCity} from './action.ts';
import {TState} from './index.ts';
import {TCities} from '../const/const.ts';
import {TOffers} from '../types/types.ts';

export type TInitialState = {
  activeCity: TCities;
  offersList: TOffers;
}

const initialState = {
  activeCity: 'Paris',
  offersList: offers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectCity, (state: TState, action) => {
      state.activeCity = action.payload;
    });
});

export {reducer};
