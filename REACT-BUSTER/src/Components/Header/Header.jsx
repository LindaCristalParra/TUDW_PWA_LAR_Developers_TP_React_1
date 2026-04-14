import Filter from '../Filter/Filter'; 
import SearchContainer from '../Search/SearchContainer';
import styles from './Header.module.css';

const Header = ({ currentFilters, onFilterChange, onSearch }) => {
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
        />
      </div>

      
      <div className={styles.searchContainer}>
        {/* <Search onSearch={onSearch}/> */}
        <div className={styles.searchPlaceholder}>
        <p>Buscador en desarrollo...</p>
        </div>
      </div>

    </header>
  );
};

export default Header;