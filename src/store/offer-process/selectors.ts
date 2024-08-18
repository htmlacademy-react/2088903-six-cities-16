import {State} from '../index.ts';
import {NameSpace, SixCitiesModel} from '../../const/const.ts';
import {FullOfferModel, OfferModel} from '../../types/offer-model.ts';

export const getSelectCity = (state: State): SixCitiesModel => state[NameSpace.Offer].activeCity;

export const getOffers = (state: State): OfferModel[] => state[NameSpace.Offer].offers;

export const getFavorites = (state: State): OfferModel[] => state[NameSpace.Offer].favorites;

export const getNearby = (state: State): OfferModel[] => state[NameSpace.Offer].nearby;

export const getCurrentOffer = (state: State): FullOfferModel | null => state[NameSpace.Offer].currentOffer;

export const getIsOffersDataLoading = (state: State): boolean => state[NameSpace.Offer].isOffersDataLoading;
