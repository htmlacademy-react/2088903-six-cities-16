import {ReviewModel} from '../types/types.ts';

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

export {getRatingPercentage, capitalize, pluralize, getSortedReviews};
