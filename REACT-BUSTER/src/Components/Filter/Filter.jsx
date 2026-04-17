import { useState } from 'react';
import styles from './Filter.module.css';
import arrowIcon from '../../assets/Icons/ArrowDown.svg';

const Filter = ({ currentFilters, onFilterChange, genreCounts, totalByType }) => {
  const [isGenreOpen, setIsGenreOpen] = useState(false);

  const handleTypeSelect = (type) => {
    onFilterChange({ ...currentFilters, type: type });
  };

  const handleGenreSelect = (genre) => {
    onFilterChange({ ...currentFilters, genre: genre });
    setIsGenreOpen(false); 
  };

  return (
    <nav className={styles.filterNav}>
      
      <button 
        className={`${styles.navBtn} ${currentFilters.type === 'serie' ? styles.active : ''}`}
        onClick={() => handleTypeSelect('serie')}
      >
        Series
      </button>

      <button 
        className={`${styles.navBtn} ${currentFilters.type === 'pelicula' ? styles.active : ''}`}
        onClick={() => handleTypeSelect('pelicula')}
      >
        Películas
      </button>

      <div className={styles.dropdownContainer}>
        <button 
          className={styles.navBtn} 
          onClick={() => setIsGenreOpen(!isGenreOpen)}
        >
          Generos <span className={styles.arrow}> <img src={arrowIcon} alt="flecha" /> </span>
        </button>
        
        {isGenreOpen && (
          <div className={styles.dropdownMenu}>
<<<<<<< HEAD
            <button onClick={() => handleGenreSelect('accion')}>Acción</button>
            <button onClick={() => handleGenreSelect('comedia')}>Comedia</button>
            <button onClick={() => handleGenreSelect('terror')}>Terror</button>
            <button onClick={() => handleGenreSelect('drama')}>Drama</button>
            <button onClick={() => handleGenreSelect('ciencia-ficcion')}>Ciencia Ficción</button>
=======
            <button onClick={() => handleGenreSelect('todos')}>Todos ({totalByType})</button>
            <button onClick={() => handleGenreSelect('accion')}>Acción ({genreCounts?.accion ?? 0})</button>
            <button onClick={() => handleGenreSelect('comedia')}>Comedia ({genreCounts?.comedia ?? 0})</button>
            <button onClick={() => handleGenreSelect('terror')}>Terror ({genreCounts?.terror ?? 0})</button>
            <button onClick={() => handleGenreSelect('drama')}>Drama ({genreCounts?.drama ?? 0})</button>
            <button onClick={() => handleGenreSelect('ciencia-ficcion')}>Ciencia Ficción ({genreCounts?.['ciencia-ficcion'] ?? 0})</button>
>>>>>>> c7eda4e850620d16b577828ffa43c1b344a09e84
          </div>
        )}
      </div>

    </nav>
  );
};

export default Filter;