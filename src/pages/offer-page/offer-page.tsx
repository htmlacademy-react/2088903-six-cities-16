import Gallery from '../../components/gallery/gallery.tsx';
import NearPlaces from '../../components/near-places/near-places.tsx';
import {Navigate, useParams} from 'react-router-dom';
import Layout from '../../components/layout/layout.tsx';
import OfferAmenities from '../../components/offer/offer-amenities/offer-amenities.tsx';
import OfferHost from '../../components/offer/offer-host/offer-host.tsx';
import OfferReviews from '../../components/offer/offer-reviews/offer-reviews.tsx';
import OfferFeatures from '../../components/offer/offer-features/offer-features.tsx';
import OfferRating from '../../components/offer/offer-rating/offer-rating.tsx';
import OfferPrice from '../../components/offer/offer-price/offer-price.tsx';
import Map from '../../components/map/map.tsx';
import OfferBadge from '../../components/offer/offer-badge';
import OfferBookmarkButton from '../../components/offer/offer-bookmark-button';
import {useAppDispatch, useAppSelector} from '../../store';
import {fetchOfferByIdAction, fetchReviewsAction} from '../../store/api-actions.ts';
import {offers} from '../../mocks/offers.ts';
import {FullOfferModel, ReviewModel} from '../../types/types.ts';
import {AppRoute, AuthorizationStatus} from '../../const/const.ts';
import {useEffect, useState} from 'react';
import LoadingPage from '../loading-page/loading-page.tsx';


function OfferPage() {
  const {id} = useParams<{ id: string }>();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  useEffect(() => {
    if (id && !isLoading) {
      dispatch(fetchReviewsAction({id: id}));
      dispatch(fetchOfferByIdAction({id: id}))
        .finally(() => setIsLoading(true));
    }
  }, [id, dispatch, isLoading]);

  const currentOffer: FullOfferModel | null = useAppSelector((state) => state.currentOffer);
  const reviews: ReviewModel[] = useAppSelector((state) => state.currentReviews);

  if (!isLoading) {
    return (
      <LoadingPage/>
    );
  }

  if (!currentOffer) {
    return <Navigate to={AppRoute.NotFound} replace/>;
  }

  const offersNearby = offers.slice(0, 3);
  const {title, price, images, isPremium, rating, goods, type, bedrooms, maxAdults, host, description} = currentOffer;

  return (
    <Layout
      title='Offer'
      mainClass='page__main--offer'
    >
      <>
        <section className="offer">
          <div className="offer__gallery-container container">
            <Gallery images={images}/>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {isPremium &&
                <OfferBadge>
                  <span>Premium</span>
                </OfferBadge>}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {title}
                </h1>
                {authorizationStatus === AuthorizationStatus.Auth &&
                  <OfferBookmarkButton
                    isFavorite={currentOffer.isFavorite}
                  />}
              </div>
              <OfferRating rating={rating}/>
              <OfferFeatures
                type={type}
                bedrooms={bedrooms}
                maxAdults={maxAdults}
              />
              <OfferPrice price={price}/>
              <OfferAmenities goods={goods}/>
              <OfferHost host={host} description={description}/>
              <OfferReviews
                authorizationStatus={authorizationStatus}
                id={id}
                reviews={reviews}
              />
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
