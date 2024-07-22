import {useState} from 'react';
import {TOffers} from '../../types/types.ts';
import Tabs from '../../components/tabs/tabs.tsx';
import OffersList from '../../components/offers-list/offers-list.tsx';
import Map from '../../components/map/map.tsx';
import Layout from '../../components/layout/layout.tsx';

type MainPageProps = {
  offers: TOffers;
};

function MainPage({offers}: MainPageProps) {
  const [activeCity, setActiveCity] = useState('Paris');
  const [selectedCard, setSelectedCard] = useState('');

  return (
    <Layout
      title='Main'
      pageClass='page--gray page--main'
      mainClass='page__main--index'
    >
      <>
        <h1 className="visually-hidden">Cities</h1>
        <Tabs
          activeCity={activeCity}
          setActiveCity={(city: string) => setActiveCity(city)}
        />
        <div className="cities">
          <div className="cities__places-container container">
            <OffersList
              offers={offers}
              activeCity={activeCity}
              setSelectedCard={setSelectedCard}
            />
            <div className="cities__right-section">
              <Map
                activeCity={activeCity}
                offers={offers}
                selectedCard={selectedCard}
              />
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
}

export default MainPage;
