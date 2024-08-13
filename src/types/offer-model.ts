import {SixCitiesModel} from '../const/const.ts';
import {UserModel} from './user-model.ts';
import {LocationModel} from './location-model.ts';
import {CityModel} from './city-model.ts';


export type OfferModel = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: CityModel;
  location: LocationModel;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
}

export type FullOfferModel = Omit<OfferModel, 'previewImage'> & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: UserModel;
  images: string[];
  maxAdults: number;
}

export type FavoriteModel = Record<SixCitiesModel, OfferModel[]>;
