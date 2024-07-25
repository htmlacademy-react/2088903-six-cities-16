import {PropsWithChildren} from 'react';
import Badge from '../../common/badge';

function OfferBadge({children}: PropsWithChildren) {

  return (
    <Badge className={'offer__mark'}>{children}</Badge>
  );
}

export default OfferBadge;
