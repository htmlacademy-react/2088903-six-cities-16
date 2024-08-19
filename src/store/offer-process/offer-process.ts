import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace, SixCitiesModel} from '../../const/const.ts';
import {
  changeFavoriteAction,
  fetchFavoritesAction,
  fetchNearbyAction,
  fetchOfferByIdAction,
  fetchOffersAction
} from '../api-actions.ts';
import {OfferProcessModel} from './types.ts';
import {FavoriteStatus, RequestStatus} from './const.ts';
import {FullOfferModel, OfferModel} from '../../types/offer-model.ts';

const initialState: OfferProcessModel = {
  activeCity: 'Paris',
  currentOffer: null,
  offers: [],
  nearby: [],
  favorites: [],
  isCurrentOfferDataLoading: false,
  isOffersDataLoading: false,
  isNearbyDataLoading: false,
  status: RequestStatus.Idle,
};

export const offerProcess = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {
    selectCity: (state, action: PayloadAction<SixCitiesModel>) => {
      state.activeCity = action.payload;
    },
    updateOffer(state, action: PayloadAction<OfferModel & FullOfferModel>) {
      const offerToChange = action.payload;
      const foundOffer = state.offers.find((offer) => offer.id === offerToChange.id);
      if (foundOffer) {
        foundOffer.isFavorite = offerToChange.isFavorite;
      }
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
      .addCase(fetchNearbyAction.pending, (state) => {
        state.isNearbyDataLoading = true;
      })
      .addCase(fetchNearbyAction.fulfilled, (state, action) => {
        state.isNearbyDataLoading = false;
        state.nearby = action.payload;
      })
      .addCase(fetchFavoritesAction.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.favorites = action.payload;
        state.status = RequestStatus.Success;
      })
      .addCase(fetchFavoritesAction.rejected, (state) => {
        state.status = RequestStatus.Failed;
      })
      .addCase(changeFavoriteAction.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(changeFavoriteAction.fulfilled, (state, action) => {
        switch (action.payload.status) {
          case FavoriteStatus.Added:
            state.favorites.push(action.payload.offer);
            break;
          case FavoriteStatus.Removed:
            state.favorites = state.favorites.filter(({id}) => id !== action.payload.offer.id);
        }
        state.status = RequestStatus.Success;
      })
      .addCase(changeFavoriteAction.rejected, (state) => {
        state.status = RequestStatus.Failed;
      });
  }
});

export const {selectCity, updateOffer} = offerProcess.actions;
