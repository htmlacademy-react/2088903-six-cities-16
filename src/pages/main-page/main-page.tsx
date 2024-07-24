import {useState} from 'react';
import Tabs from '../../components/tabs/tabs.tsx';
import OffersList from '../../components/offers-list/offers-list.tsx';
import Map from '../../components/map/map.tsx';
import Layout from '../../components/layout/layout.tsx';
import {useAppSelector} from '../../store';
import cn from 'classnames';

function MainPage() {
  const offers = useAppSelector((state) => state.offersList);
  const activeCity = useAppSelector((state) => state.activeCity);
  const activeOffers = offers.filter((offer) => offer.city.name === activeCity);
  const [selectedCard, setSelectedCard] = useState('');

  const mainIndexClasses = cn('page__main--index', {
    'page__main--index-empty': activeOffers.length === 0
  });
  const citiesPlacesClasses = cn('cities__places-container container', {
    'cities__places-container--empty': activeOffers.length === 0
  });


  return (
    <Layout
      title='Main'
      pageClass='page--gray page--main'
      mainClass={mainIndexClasses}
    >
      <>
        <h1 className="visually-hidden">Cities</h1>
        <Tabs
          activeCity={activeCity}
        />
        <div className="cities">

          <div className={citiesPlacesClasses}>
            {activeOffers.length > 0 ?
              <OffersList
                activeOffers={activeOffers}
                setSelectedCard={setSelectedCard}
              /> :
              <section className="cities__no-places">
                <div className="cities__status-wrapper tabs__content">
                  <b className="cities__status">No places to stay available</b>
                  <p className="cities__status-description">We could not find any property available at the moment
                    in&nbsp;
                  {activeCity}
                  </p>
                </div>
              </section>}
            <div className="cities__right-section">
              {activeOffers.length &&
                <Map
                  activeOffers={activeOffers}
                  selectedCard={selectedCard}
                />}
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
}

export default MainPage;
