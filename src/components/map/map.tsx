import {CityModel} from '../../types/types.ts';
import {Icon, layerGroup, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {useEffect, useRef} from 'react';
import useMap from '../../hooks/use-map.tsx';
import {PointModel} from '../../types/point-model.ts';
import {URL_MARKER_CURRENT, URL_MARKER_DEFAULT} from './const.ts';


type MapProps = {
  activeCity: CityModel;
  points: PointModel[];
  selectedCard?: string;
  className?: 'offer' | 'cities';
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [26, 39],
  iconAnchor: [13, 39]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [26, 39],
  iconAnchor: [13, 39]
});

// Не передавать оффер целиком а передавать сразу данные в формате PointModel, дополнить PointModel
// Вынести получение в функцию и передавать уже готовый объект, только с необходимми данными
function Map({activeCity, points, selectedCard, className = 'cities'}: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, activeCity.location);

  useEffect(() => {
    if (map) {
      map.setView([activeCity.location.latitude, activeCity.location.longitude], activeCity.location.zoom);
    }
  }, [map, activeCity]);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude
        });

        marker
          .setIcon(
            selectedCard !== undefined && point.id === selectedCard
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points, selectedCard]);

  return (
    <section className={`${className}__map map`}
      style={{minHeight: '500px', height: '100%'}}
      ref={mapRef}
    >
    </section>);
}

export default Map;
