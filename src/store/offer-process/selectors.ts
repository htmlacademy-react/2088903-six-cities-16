import {State} from '../index.ts';
import {NameSpace, SixCitiesModel} from '../../const/const.ts';
import {FullOfferModel, OfferModel} from '../../types/offer-model.ts';
import {RequestStatus} from './const.ts';

export const getSelectCity = (state: State): SixCitiesModel => state[NameSpace.Offer].activeCity;

export const getOffers = (state: State): OfferModel[] => state[NameSpace.Offer].offers;

export const getNearby = (state: State): OfferModel[] => state[NameSpace.Offer].nearby;

export const getCurrentOffer = (state: State): FullOfferModel | null => state[NameSpace.Offer].currentOffer;

export const getIsOffersDataLoading = (state: State): boolean => state[NameSpace.Offer].isOffersDataLoading;

export const getFavorites = (state: State): OfferModel[] => state[NameSpace.Offer].favorites;

export const getRequestStatus = (state: State): RequestStatus => state[NameSpace.Offer].status;
