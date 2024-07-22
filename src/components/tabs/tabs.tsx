import {ReactElement} from 'react';
import {CITIES, TCities} from '../../const/const.ts';
import LocationItem from '../common/location-item/location-item.tsx';

type TabsProps = {
  activeCity: TCities;
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
                /* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */
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
