import {ReactElement} from 'react';
import {CITIES, SixCitiesModel} from '../../const/const.ts';
import LocationItem from '../common/location-item/location-item.tsx';

type TabsProps = {
  activeCity: SixCitiesModel;
}

function Tabs({activeCity}: TabsProps) {

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            CITIES.map((city): ReactElement => (
              <LocationItem
                key={city}
                city={city}
                activeCity={activeCity}
              />
            ))
          }
        </ul>
      </section>
    </div>
  );
}

export default Tabs;
