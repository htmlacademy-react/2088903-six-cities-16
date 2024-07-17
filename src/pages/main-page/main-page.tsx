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
  const [activeTab, setActiveTab] = useState('Paris');
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
          activeTab={activeTab}
          setActiveTab={(city: string) => setActiveTab(city)}
        />
        <div className="cities">
          <div className="cities__places-container container">
            <OffersList
              offers={offers}
              activeTab={activeTab}
              setselectedCard={setSelectedCard}
            />
            <div className="cities__right-section">
              <Map
                activeTab={activeTab}
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
