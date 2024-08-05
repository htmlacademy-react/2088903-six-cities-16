import {OfferModel} from '../types/types.ts';
import {SortTypesModel} from '../components/sort-form/sort-form.tsx';
import {useMemo, useState} from 'react';


const getSortedOffers = (offers: OfferModel[], sortType: SortTypesModel) => {
  switch (sortType) {
    case 'popular':
      return offers;
    case 'priceToHigh':
      return [...offers].sort((a, b) => a.price - b.price);
    case 'priceToLow':
      return [...offers].sort((a, b) => b.price - a.price);
    case 'topRatedFirst':
      return [...offers].sort((a, b) => b.rating - a.rating);
    default:
      return offers;
  }
};

function useSortOffers(offers: OfferModel[]) {
  const [currentSortingType, setCurrentSortingType] = useState<SortTypesModel>(
    'popular'
  );

  const sortedOffers = useMemo(() => getSortedOffers(offers, currentSortingType), [offers, currentSortingType]);

  return [sortedOffers, currentSortingType, setCurrentSortingType] as const;
}

export default useSortOffers;
