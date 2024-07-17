export type TLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type TCity = {
  name: string;
  location: TLocation;
}

export type TUser = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type TFullUserInfo = TUser & {
  email: string;
  token: string;
}

export type TOffer = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: TCity;
  location: TLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
};

export type TOfferWithoutPreview = Omit<TOffer, 'previewImage'>

export type TFullOffer = TOfferWithoutPreview & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: TUser;
  images: string[];
  maxAdults: number;
}

export type TOffers = TOffer[];

export type TFavoriteOffer = TFullOffer & {
  previewImage: string;
}

export type TComment = {
  id: string;
  date: string;
  user: TUser;
  comment: string;
  rating: number;
}

export type TComments = TComment[];

export type TFavorite = Record<string, TOffers>;
