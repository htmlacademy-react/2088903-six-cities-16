import {ReactElement} from 'react';

type CardMarkProps = {
  text: string;
}
const Badge = ({text}: CardMarkProps): ReactElement => (
  <div className="place-card__mark">
    <span>{text}</span>
  </div>
);

export default Badge;
