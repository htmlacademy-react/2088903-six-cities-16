import {ReactElement, useState} from 'react';
import {OfferModel} from '../../types/offer-model.ts';
import SortForm from '../sort-form/sort-form.tsx';
import {SixCitiesModel} from '../../const/const.ts';
import CitiesCard from '../cities/cities-card/cities-card.tsx';
import useSortOffers from '../../hooks/use-sort-offers.tsx';


type OffersListProps = {
  activeOffers: OfferModel[];
  activeCity: SixCitiesModel;
  setSelectedCard?: (id: string) => void;
};

function OffersList({activeOffers, activeCity, setSelectedCard}: OffersListProps) {
  const [sortedOffers, currentSortingType, setCurrentSortingType] = useSortOffers(activeOffers);
  const [showSortForm, setShowSortForm] = useState(false);

  return (
    <section className='cities__places places'>
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{activeOffers.length} places to stay in {activeCity}</b>
      <SortForm
        sortType={currentSortingType}
        setSortType={setCurrentSortingType}
        showSortForm={showSortForm}
        setShowSortForm={setShowSortForm}
      />
      <div className="cities__places-list places__list tabs__content">
        {
          sortedOffers.map((offer: OfferModel): ReactElement => (
            <CitiesCard
              key={offer.id}
              id={offer.id}
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
