import cn from 'classnames';
import {SortType, SortTypeLabels} from '../../const/const.ts';


type SortFormProps = {
  selectedSortType: SortType;
  setSortType: (selectedSortType: SortType) => void;
  showSortForm: boolean;
  setShowSortForm: (showSortForm: boolean) => void;
};

function SortForm({selectedSortType, setSortType, showSortForm, setShowSortForm}: SortFormProps) {
  const handleClick = (value: SortType) => {
    setSortType(value);
    setShowSortForm(false);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setShowSortForm(!showSortForm)}>
        {SortTypeLabels[selectedSortType]}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={cn('places__options places__options--custom', {'places__options--opened': showSortForm})}>
        {Object.entries(SortType).map(([key, value]) => (
          <li key={key}
            className={cn('places__option', {'places__option--active': value === selectedSortType})}
            tabIndex={0}
            value={value}
            onClick={() => handleClick(value)}
          >
            {SortTypeLabels[value]}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default SortForm;
