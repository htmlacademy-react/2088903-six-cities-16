import {SixCitiesModel} from '../../const/const.ts';
import {FullOfferModel, OfferModel} from '../../types/offer-model.ts';
import {FavoriteStatus, RequestStatus} from './const.ts';

export type OfferProcessModel = {
  activeCity: SixCitiesModel;
  currentOffer: FullOfferModel | null;
  offers: OfferModel[];
  nearby: OfferModel[];
  favorites: OfferModel[];
  isCurrentOfferDataLoading: boolean;
  isOffersDataLoading: boolean;
  isNearbyDataLoading: boolean;
  status: RequestStatus;
};

export type FavoriteChangeProps = {
  offerId: string;
  status: FavoriteStatus;
}

export type FavoriteChangeResponse = {
  offer: OfferModel & FullOfferModel;
  status: FavoriteStatus;
}
