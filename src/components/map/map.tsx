type MapProps = {
  hoveredCard: string;
}

function Map({hoveredCard}: MapProps) {
  return (
    <section className="cities__map map">{hoveredCard}</section>
  );
}

export default Map;
