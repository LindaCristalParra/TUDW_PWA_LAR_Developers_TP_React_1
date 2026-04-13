import React, { useState } from 'react';
import styles from './Filter.module.css';

const Filter = ({ currentFilters, onFilterChange }) => {
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
          Generos <span className={styles.chevron}>v</span>
        </button>
        
        {isGenreOpen && (
          <div className={styles.dropdownMenu}>
            <button onClick={() => handleGenreSelect('todos')}>Todos</button>
            <button onClick={() => handleGenreSelect('accion')}>Acción</button>
            <button onClick={() => handleGenreSelect('comedia')}>Comedia</button>
            <button onClick={() => handleGenreSelect('terror')}>Terror</button>
            <button onClick={() => handleGenreSelect('drama')}>Drama</button>
            <button onClick={() => handleGenreSelect('ciencia-ficcion')}>Ciencia Ficción</button>
          </div>
        )}
      </div>

    </nav>
  );
};

export default Filter;