export type PlaceCardModel = {
  id: string;
  title: string;
  type: string;
  price: number;
  rating: number;
  isFavorite: boolean;
  isPremium: boolean;
  className: 'cities__card' | 'favorites__card' | 'near-places__card';
};
