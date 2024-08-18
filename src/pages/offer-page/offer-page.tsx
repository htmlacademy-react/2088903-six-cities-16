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
import OfferBookmarkButton from '../../components/offer/offer-bookmark-button';
import {useAppDispatch, useAppSelector} from '../../store';
import {fetchNearbyAction, fetchOfferByIdAction, fetchReviewsAction} from '../../store/api-actions.ts';
import {FullOfferModel,} from '../../types/offer-model.ts';
import {AppRoute} from '../../const/const.ts';
import {useEffect, useState} from 'react';
import LoadingPage from '../loading-page/loading-page.tsx';
import {getMapPointFromOffer, getMapPoints} from '../../utils/utils.ts';
import {ReviewModel} from '../../types/review-model.ts';
import useAuth from '../../hooks/use-auth.tsx';
import {getCurrentOffer, getNearby} from '../../store/offer-process/selectors.ts';
import {getCurrentReviews} from '../../store/review-process/selectors.ts';

const MAX_NEARBY_COUNT = 3;


function OfferPage() {
  const {id = ''} = useParams<{ id: string }>();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const isAuthorized = useAuth();

  useEffect(() => {
    setIsLoading(false);
  }, [id]);

  useEffect(() => {
    if (id && !isLoading) {
      dispatch(fetchOfferByIdAction({id}));
      dispatch(fetchReviewsAction({id}));
      dispatch(fetchNearbyAction({id}))
        .finally(() => setIsLoading(true));
    }
  }, [id, dispatch, isLoading]);

  const currentFullOffer: FullOfferModel | null = useAppSelector(getCurrentOffer);
  const reviews: ReviewModel[] = useAppSelector(getCurrentReviews);
  const offersNearby = useAppSelector(getNearby)
    .slice(0, MAX_NEARBY_COUNT);

  if (!isLoading) {
    return (
      <LoadingPage/>
    );
  }

  if (!currentFullOffer || !id) {
    return <Navigate to={AppRoute.NotFound} replace/>;
  }

  const mapPoints = [...getMapPoints(offersNearby), getMapPointFromOffer(currentFullOffer)];

  const {
    title,
    type,
    price,
    images,
    isPremium,
    rating,
    description,
    bedrooms,
    goods,
    host,
    maxAdults,
  } = currentFullOffer;

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
                <div className='offer__mark'>
                  <span>Premium</span>
                </div>}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {title}
                </h1>
                {isAuthorized &&
                  <OfferBookmarkButton
                    isFavorite={currentFullOffer.isFavorite}
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
                isAuthorized={isAuthorized}
                id={id}
                reviews={reviews}
              />
            </div>
          </div>
          <Map
            activeCity={currentFullOffer.city}
            points={mapPoints}
            selectedCard={id}
            className='offer__map'
          />
        </section>
        <div className="container">
          <NearPlaces offersNearby={offersNearby}/>
        </div>
      </>
    </Layout>
  );
}

export default OfferPage;
