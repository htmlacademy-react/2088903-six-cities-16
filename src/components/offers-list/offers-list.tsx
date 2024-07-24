import {ReactElement, useMemo, useState} from 'react';
import {OfferModel} from '../../types/types.ts';
import OfferCard from '../offer/offer-card/offer-card.tsx';
import SortForm, {TSortTypes} from '../sort-form/sort-form.tsx';


type OffersListProps = {
  activeOffers: OfferModel[];
  setSelectedCard?: (id: string) => void;
};

function OffersList({activeOffers, setSelectedCard}: OffersListProps) {
  const [sortType, setSortType] = useState<TSortTypes>('popular');
  const [showSortForm, setShowSortForm] = useState(false);
  const sortedOffers = useMemo(() => {
    switch (sortType) {
      case 'popular':
        return activeOffers;
      case 'priceToHigh':
        return [...activeOffers].sort((a, b) => a.price - b.price);
      case 'priceToLow':
        return [...activeOffers].sort((a, b) => b.price - a.price);
      case 'topRatedFirst':
        return [...activeOffers].sort((a, b) => b.rating - a.rating);
      default:
        return activeOffers;
    }
  }, [activeOffers, sortType]);

  return (
    <section className='cities__places places'>
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{activeOffers.length} places to stay in Amsterdam</b>
      <SortForm
        sortType={sortType}
        setSortType={setSortType}
        showSortForm={showSortForm}
        setShowSortForm={setShowSortForm}
      />
      <div className="cities__places-list places__list tabs__content">
        {
          sortedOffers.map((offer: OfferModel): ReactElement => (
            <OfferCard
              key={offer.id}
              id={offer.id}
              title={offer.title}
              type={offer.type}
              price={offer.price}
              rating={offer.rating}
              isFavorite={offer.isFavorite}
              isPremium={offer.isPremium}
              previewImage={offer.previewImage}
              setSelectedCard={setSelectedCard}
            />
          ))
        }
      </div>
    </section>
  );
}

export default OffersList;
