import {ReactElement} from 'react';
import {TOffer, TOffers} from '../../types/types.ts';
import OfferCard from '../offer/offer-card/offer-card.tsx';
import SortForm from '../sort-form/sort-form.tsx';


type OffersListProps = {
  offers: TOffers;
  activeTab: string;
  setSelectedCard?: (id: string) => void;
};

function OffersList({offers, activeTab, setSelectedCard}: OffersListProps) {
  const activeOffers: TOffers = offers.filter((offer: TOffer) => offer.city.name === activeTab);

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">312 places to stay in Amsterdam</b>
      <SortForm/>
      <div className="cities__places-list places__list tabs__content">
        {
          activeOffers.map((offer: TOffer): ReactElement => (
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
