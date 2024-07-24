import {createReducer, PayloadAction} from '@reduxjs/toolkit';
import {offers} from '../mocks/offers.ts';
import {selectCity} from './action.ts';
import {SixCitiesModel} from '../const/const.ts';
import {OfferModel} from '../types/types.ts';

export type TInitialState = {
  activeCity: SixCitiesModel;
  offersList: OfferModel[];
}

const initialState: TInitialState = {
  activeCity: 'Paris',
  offersList: offers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectCity, (state, action: PayloadAction<SixCitiesModel>) => {
      state.activeCity = action.payload;
    });
});

export {reducer};
