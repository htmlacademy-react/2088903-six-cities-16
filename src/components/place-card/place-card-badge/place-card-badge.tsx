import {PropsWithChildren} from 'react';
import Badge from '../../common/badge';

function PlaceCardBadge({children}: PropsWithChildren) {

  return (
    <Badge className={'place-card__mark'}>{children}</Badge>
  );
}

export default PlaceCardBadge;
