import {PropsWithChildren} from 'react';
import Badge from '../../common/badge/badge.tsx';

function OfferCardBadge({children}: PropsWithChildren) {

  return (
    <Badge className={'place-card__mark'}>{children}</Badge>
  );
}

export default OfferCardBadge;
