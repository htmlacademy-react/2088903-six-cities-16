import {FullOfferModel, OfferModel,} from '../types/offer-model.ts';
import {PointModel} from '../types/point-model.ts';
import {ReviewModel} from '../types/review-model.ts';
import {CITIES} from '../const/const.ts';

export const getRatingPercentage = (rating: number): string => {
  if (rating < 0) {
    return '0%';
  }

  return rating <= 5 ? `${Math.round(rating) * 20}%` : '100%';
};

export const getRandomCity = () => CITIES[Math.floor(Math.random() * CITIES.length)];

export const capitalize = (string: string) => string
  ? string.charAt(0).toUpperCase() + string.slice(1)
  : string;

export const pluralize = (string: string, number: number) => number > 1 ? `${string}s` : string;

export const getSortedReviews = (reviews: ReviewModel[], maxCount: number): ReviewModel[] => [...reviews]
  .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
  .slice(0, maxCount);

export const getMapPointFromOffer = (offer: OfferModel | FullOfferModel): PointModel => ({
  'id': offer.id,
  'location': {
    'latitude': offer.location.latitude,
    'longitude': offer.location.longitude,
    'zoom': offer.location.zoom,
  }
});

export const getMapPoints = (offers: OfferModel[]): PointModel[] => offers.reduce((acc: PointModel[], currentOffer: OfferModel) => {
  acc.push(getMapPointFromOffer(currentOffer));
  return acc;
}, []);
