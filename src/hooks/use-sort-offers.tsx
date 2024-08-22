import {OfferModel} from '../types/offer-model.ts';
import {useState} from 'react';
import {SortType} from '../const/const.ts';


const getSortedOffers = (offers: OfferModel[], selectedSortType: SortType) => {
  switch (selectedSortType) {
    case SortType.Popular:
      return offers;
    case SortType.PriceToHigh:
      return [...offers].sort((a, b) => a.price - b.price);
    case SortType.PriceToLow:
      return [...offers].sort((a, b) => b.price - a.price);
    case SortType.TopRatedFirst:
      return [...offers].sort((a, b) => b.rating - a.rating);
    default:
      return offers;
  }
};

function useSortOffers(offers: OfferModel[]) {
  const [selectedSortType, setCurrentSortingType] = useState<SortType>(
    SortType.Popular
  );
  const sortedOffers = getSortedOffers(offers, selectedSortType);

  return [sortedOffers, selectedSortType, setCurrentSortingType] as const;
}

export default useSortOffers;
