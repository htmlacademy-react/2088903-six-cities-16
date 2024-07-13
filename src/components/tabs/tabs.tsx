import {ReactElement} from 'react';
import {CITIES} from '../../const/const.ts';
import LocationItem from '../common/location-item/location-item.tsx';

type TabsProps = {
  activeTab: string;
  setActiveTab: (arg0: string) => void;
}

function Tabs({activeTab, setActiveTab}: TabsProps): ReactElement {

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            CITIES.map((city: string): ReactElement => (
              <LocationItem
                key={city}
                city={city}
                activeTab={activeTab}
                handleClick={() => setActiveTab(city)}
              />
            ))
          }
        </ul>
      </section>
    </div>
  );
}

export default Tabs;
