import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace, SixCitiesModel} from '../../const/const.ts';
import {fetchFavoritesAction, fetchNearbyAction, fetchOfferByIdAction, fetchOffersAction} from '../api-actions.ts';
import {OfferProcessModel} from './types.ts';

const initialState: OfferProcessModel = {
  activeCity: 'Paris',
  currentOffer: null,
  offers: [],
  favorites: [],
  nearby: [],
  isCurrentOfferDataLoading: false,
  isOffersDataLoading: false,
  isFavoritesDataLoading: false,
  isNearbyDataLoading: false,
};

export const offerProcess = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {
    selectCity: (state, action: PayloadAction<SixCitiesModel>) => {
      state.activeCity = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOfferByIdAction.pending, (state) => {
        state.isCurrentOfferDataLoading = true;
      })
      .addCase(fetchOfferByIdAction.fulfilled, (state, action) => {
        state.isCurrentOfferDataLoading = false;
        state.currentOffer = action.payload;
      })
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.isOffersDataLoading = false;
        state.offers = action.payload;
      })
      .addCase(fetchFavoritesAction.pending, (state) => {
        state.isFavoritesDataLoading = true;
      })
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.isFavoritesDataLoading = false;
        state.favorites = action.payload;
      })
      .addCase(fetchNearbyAction.pending, (state) => {
        state.isNearbyDataLoading = true;
      })
      .addCase(fetchNearbyAction.fulfilled, (state, action) => {
        state.isNearbyDataLoading = false;
        state.nearby = action.payload;
      });
  }
});

export const {selectCity} = offerProcess.actions;
