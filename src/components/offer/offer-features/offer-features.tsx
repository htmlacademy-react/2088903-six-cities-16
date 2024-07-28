import {capitalize, pluralize} from '../../../utils/utils.ts';


type OfferFeaturesProps = {
  type: string;
  bedrooms: number;
  maxAdults: number;
};

function OfferFeatures({type, bedrooms, maxAdults}: OfferFeaturesProps) {
  return (
    <ul className="offer__features">
      <li className="offer__feature offer__feature--entire">
        {capitalize(type)}
      </li>
      <li className="offer__feature offer__feature--bedrooms">
        {`${bedrooms} ${pluralize('Bedroom', bedrooms)}`}
      </li>
      <li className="offer__feature offer__feature--adults">
        {`Max ${maxAdults} ${pluralize('adult', maxAdults)}`}
      </li>
    </ul>
  );
}

export default OfferFeatures;
