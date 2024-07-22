import {ReactElement} from 'react';
import {CITIES} from '../../const/const.ts';
import LocationItem from '../common/location-item/location-item.tsx';

type TabsProps = {
  activeCity: string;
  // setActiveCity: (arg0: string) => void;
}

function Tabs({activeCity}: TabsProps) {

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            CITIES.map((city: string): ReactElement => (
              <LocationItem
                key={city}
                city={city}
                activeCity={activeCity}
                // handleClick={() => setActiveCity(city)}
              />
            ))
          }
        </ul>
      </section>
    </div>
  );
}

export default Tabs;
