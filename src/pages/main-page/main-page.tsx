import {useState} from 'react';
import Tabs from '../../components/tabs/tabs.tsx';
import OffersList from '../../components/offers-list/offers-list.tsx';
import Map from '../../components/map/map.tsx';
import Layout from '../../components/layout/layout.tsx';
import {useAppSelector} from '../../store';
import cn from 'classnames';
import {getMapPoints} from '../../utils/utils.ts';
import CitiesNoPlaces from '../../components/cities/cities-no-places/cities-no-places.tsx';
import {getOffers, getSelectCity} from '../../store/offer-process/selectors.ts';

function MainPage() {
  const offers = useAppSelector(getOffers);
  const activeCity = useAppSelector(getSelectCity);
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
                activeCity={activeCity}
                setSelectedCard={setSelectedCard}
              />
              : <CitiesNoPlaces city={activeCity}/>}

            <div className="cities__right-section">
              {activeOffers.length &&
                <Map
                  activeCity={activeOffers[0].city}
                  points={getMapPoints(activeOffers)}
                  selectedCard={selectedCard}
                  className='cities__map'
                />}
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
}

export default MainPage;
