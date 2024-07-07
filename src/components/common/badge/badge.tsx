import {ReactElement} from 'react';
import cn from 'classnames';

type CardMarkProps = {
  text?: string;
  ifOfferDetail?: boolean;
}

function Badge({text = 'Premium', ifOfferDetail = false}: CardMarkProps): ReactElement {
  const badgeClassNames = cn({
    'offer__mark': ifOfferDetail,
    'place-card__mark': !ifOfferDetail,
  });

  return (
    <div className={badgeClassNames}>
      <span>{text}</span>
    </div>
  );
}

export default Badge;
