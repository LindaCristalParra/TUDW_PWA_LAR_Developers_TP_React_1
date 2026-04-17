import Filter from '../Filter/Filter';
import SearchContainer from '../Search/SearchContainer';
import styles from './Header.module.css';

const Header = ({ currentFilters, onFilterChange, onSearch, genreCounts, totalByType }) => {
  return (
    <header className={styles.headerContainer}>


      <div className={styles.logoContainer}>
        <h1 className={styles.logo}>
          REACT<br />BUSTER
        </h1>
      </div>


      <div className={styles.navContainer}>
        <Filter
          currentFilters={currentFilters}
          onFilterChange={onFilterChange}
          genreCounts={genreCounts}
          totalByType={totalByType}
        />
      </div>


      <div className={styles.searchContainer}>
        <SearchContainer onSearchChange={onSearch} />
      </div>

    </header>
  );
};

export default Header;