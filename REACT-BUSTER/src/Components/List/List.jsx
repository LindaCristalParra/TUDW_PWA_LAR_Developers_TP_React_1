import { useRef } from 'react';
import styles from './List.module.css';
import Card from '../Card/Card';

const List = ({ items = [],  onMovieClick }) => {
  const carouselRef = useRef(null);

  const visibleItems = items.filter((item) => item.deleted === false);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -220, behavior: 'smooth' });
    }
  };


  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 220, behavior: 'smooth' });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      scrollLeft();
    } else if (e.key === 'ArrowRight') {
      scrollRight();
    }
  };

  if (visibleItems.length === 0) {
    return (
      <p className={styles.emptyMessage}>
        No se encontraron películas ni series. ¡Empezá a agregar algunas!
      </p>
    );
  }


  return (

    <div className={styles.listWrapper}>

      <button className={`${styles.arrowBtn} ${styles.leftArrow}`} onClick={scrollLeft}>
        &#10094;
      </button>

      <div className={styles.carouselContainer}
        ref={carouselRef}
        onKeyDown={handleKeyDown}
        tabIndex="0">
        {visibleItems.map((item) => ( 
          <div key={item.id} className={styles.carouselItem}>
            <Card movie={item}
              onClick={onMovieClick} />
          </div>
        ))}
        
      </div>

      <button className={`${styles.arrowBtn} ${styles.rightArrow}`} onClick={scrollRight}>
        &#10095;
      </button>

    </div>
  );
};
export default List;