import {ReactElement, useMemo, useState} from 'react';
import {OfferModel} from '../../types/types.ts';
import PlaceCard from '../place-card/place-card.tsx';
import SortForm, {TSortTypes} from '../sort-form/sort-form.tsx';
import {SixCitiesModel} from '../../const/const.ts';


type OffersListProps = {
  activeOffers: OfferModel[];
  activeCity: SixCitiesModel;
  setSelectedCard?: (id: string) => void;
};

function OffersList({activeOffers, activeCity, setSelectedCard}: OffersListProps) {
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
      <b className="places__found">{activeOffers.length} places to stay in {activeCity}</b>
      <SortForm
        sortType={sortType}
        setSortType={setSortType}
        showSortForm={showSortForm}
        setShowSortForm={setShowSortForm}
      />
      <div className="cities__places-list places__list tabs__content">
        {
          sortedOffers.map((offer: OfferModel): ReactElement => (
            <PlaceCard
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
