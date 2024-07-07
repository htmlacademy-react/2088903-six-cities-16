import {ReactElement} from 'react';

type MapProps = {
  hoveredCard: string;
}

function Map({hoveredCard}: MapProps): ReactElement {
  return (
    <section className="cities__map map">{hoveredCard}</section>
  );
}

export default Map;
