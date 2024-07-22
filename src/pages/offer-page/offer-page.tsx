import Gallery from '../../components/gallery/gallery.tsx';
import NearPlaces from '../../components/near-places/near-places.tsx';
import Badge from '../../components/common/badge/badge.tsx';
import {Navigate, useParams} from 'react-router-dom';
import {TOffer, TOffers} from '../../types/types.ts';
import BookmarkToggle from '../../components/common/bookmark-toggle';
import {AppRoute} from '../../const/const.ts';
import Layout from '../../components/layout/layout.tsx';
import OfferInside from '../../components/offer/offer-inside/offer-inside.tsx';
import OfferHost from '../../components/offer/offer-host/offer-host.tsx';
import OfferReviews from '../../components/offer/offer-reviews/offer-reviews.tsx';
import OfferFeatures from '../../components/offer/offer-features/offer-features.tsx';
import OfferRating from '../../components/offer/offer-rating/offer-rating.tsx';
import OfferPrice from '../../components/offer/offer-price/offer-price.tsx';
import {useState} from 'react';
import Map from '../../components/map/map.tsx';

type OfferPageProps = {
  offers: TOffers;
};

function OfferPage({offers}: OfferPageProps) {
  const [selectedCard, setSelectedCard] = useState('');
  const {id} = useParams<{ id: string }>();
  const currentOffer: TOffer | undefined = offers.find((offer: TOffer) => offer.id === id);
  if (!currentOffer) {
    return <Navigate to={AppRoute.NotFound} replace/>;
  }

  const offersNearby = offers.slice(0, 3);
  const {title, price, isFavorite} = currentOffer;

  return (
    <Layout
      title='Offer'
      mainClass='page__main--offer'
    >
      <>
        <section className="offer">
          <div className="offer__gallery-container container">
            <Gallery/>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              <Badge className='offer'/>
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {title}
                </h1>
                <BookmarkToggle
                  isFavorite={isFavorite}
                  className='offer'
                />
              </div>
              <OfferRating/>
              <OfferFeatures/>
              <OfferPrice price={price}/>
              <OfferInside/>
              <OfferHost/>
              <OfferReviews/>
            </div>
          </div>
          <Map
            activeOffers={offersNearby}
            selectedCard={selectedCard}
            className='offer'
          />
        </section>
        <div className="container">
          <NearPlaces
            offersNearby={offersNearby}
            setSelectedCard={setSelectedCard}
          />
        </div>
      </>
    </Layout>
  );
}

export default OfferPage;
