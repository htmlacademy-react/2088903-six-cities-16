import {SixCitiesModel} from '../const/const.ts';

export type LocationModel = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type CityModel = {
  name: SixCitiesModel;
  location: LocationModel;
}

export type UserModel = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

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
};

export type FullOfferModel = Omit<OfferModel, 'previewImage'> & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: UserModel;
  images: string[];
  maxAdults: number;
}

export type ReviewModel = {
  id: string;
  date: string;
  user: UserModel;
  comment: string;
  rating: number;
}

export type FavoriteModel = Record<SixCitiesModel, OfferModel[]>;
