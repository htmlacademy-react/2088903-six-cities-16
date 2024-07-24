import cn from 'classnames';

export type TSortTypes = keyof typeof SortTypes;

const SortTypes = {
  popular: 'Popular',
  priceToHigh: 'Price: low to high',
  priceToLow: 'Price: high to low',
  topRatedFirst: 'Top rated first',
} as const;

type SortFormProps = {
  sortType: TSortTypes;
  setSortType: (sortType: TSortTypes) => void;
  showSortForm: boolean;
  setShowSortForm: (showSortForm: boolean) => void;
};

function SortForm({sortType, setSortType, showSortForm, setShowSortForm}: SortFormProps) {
  const handleClick = (key: TSortTypes) => {
    setSortType(key);
    setShowSortForm(false);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setShowSortForm(!showSortForm)}>
        {SortTypes[sortType]}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={cn('places__options places__options--custom', {'places__options--opened': showSortForm})}>
        {Object.entries(SortTypes).map(([key, value]) => (
          <li key={key}
            className={cn('places__option', {'places__option--active': key === sortType})}
            tabIndex={0}
            value={key}
            onClick={() => handleClick(key as TSortTypes)}
          >
            {value}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default SortForm;
