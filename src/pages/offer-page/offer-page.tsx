import Gallery from '../../components/gallery/gallery.tsx';
import NearPlaces from '../../components/near-places/near-places.tsx';
import {Navigate, useParams} from 'react-router-dom';
import {OfferModel} from '../../types/types.ts';
import {AppRoute} from '../../const/const.ts';
import Layout from '../../components/layout/layout.tsx';
import OfferInside from '../../components/offer/offer-inside/offer-inside.tsx';
import OfferHost from '../../components/offer/offer-host/offer-host.tsx';
import OfferReviews from '../../components/offer/offer-reviews/offer-reviews.tsx';
import OfferFeatures from '../../components/offer/offer-features/offer-features.tsx';
import OfferRating from '../../components/offer/offer-rating/offer-rating.tsx';
import OfferPrice from '../../components/offer/offer-price/offer-price.tsx';
import Map from '../../components/map/map.tsx';
import OfferBadge from '../../components/offer/offer-badge';
import OfferBookmarkButton from '../../components/offer/offer-bookmark-button';

type OfferPageProps = {
  offers: OfferModel[];
};

function OfferPage({offers}: OfferPageProps) {
  const {id} = useParams<{ id: string }>();
  const currentOffer: OfferModel | undefined = offers.find((offer: OfferModel) => offer.id === id);
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
              <OfferBadge>
                <span>Premium</span>
              </OfferBadge>
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {title}
                </h1>
                <OfferBookmarkButton isFavorite={isFavorite}/>
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
            className='offer'
          />
        </section>
        <div className="container">
          <NearPlaces
            offersNearby={offersNearby}
          />
        </div>
      </>
    </Layout>
  );
}

export default OfferPage;
