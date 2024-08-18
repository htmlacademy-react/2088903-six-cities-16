import {SixCitiesModel} from '../../const/const.ts';
import {FullOfferModel, OfferModel} from '../../types/offer-model.ts';

export type OfferProcessModel = {
  activeCity: SixCitiesModel;
  currentOffer: FullOfferModel | null;
  offers: OfferModel[];
  favorites: OfferModel[];
  nearby: OfferModel[];
  isCurrentOfferDataLoading: boolean;
  isOffersDataLoading: boolean;
  isFavoritesDataLoading: boolean;
  isNearbyDataLoading: boolean;
};
