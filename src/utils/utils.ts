import {FullOfferModel, OfferModel,} from '../types/offer-model.ts';
import {PointModel} from '../types/point-model.ts';
import {ReviewModel} from '../types/review-model.ts';

const getRatingPercentage = (rating: number): string => {
  if (rating < 0) {
    return '0%';
  }

  return rating <= 5 ? `${Math.round(rating) * 20}%` : '100%';
};

const capitalize = (string: string) => string
  ? string.charAt(0).toUpperCase() + string.slice(1)
  : string;

const pluralize = (string: string, number: number) => number > 1 ? `${string}s` : string;

const getSortedReviews = (reviews: ReviewModel[], maxCount: number): ReviewModel[] => [...reviews]
  .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
  .slice(0, maxCount);

const getMapPointFromOffer = (offer: OfferModel | FullOfferModel): PointModel => ({
  'id': offer.id,
  'location': {
    'latitude': offer.location.latitude,
    'longitude': offer.location.longitude,
    'zoom': offer.location.zoom,
  }
});

const getMapPoints = (offers: OfferModel[]): PointModel[] => offers.reduce((acc: PointModel[], currentOffer: OfferModel) => {
  acc.push(getMapPointFromOffer(currentOffer));
  return acc;
}, []);

export {getRatingPercentage, capitalize, pluralize, getSortedReviews, getMapPointFromOffer, getMapPoints};
