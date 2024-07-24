import {PropsWithChildren} from 'react';
import Badge from '../../common/badge/badge.tsx';

function OfferDetailBadge({children}: PropsWithChildren) {

  return (
    <Badge className={'offer__mark'}>{children}</Badge>
  );
}

export default OfferDetailBadge;
