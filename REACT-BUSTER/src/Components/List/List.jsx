import styles from './List.module.css';
import MovieCard from '../Card/Card';

const List = ({ items = [] }) => {
  if (items.length === 0) {
    return (
      <p className={styles.emptyMessage}>
        No se encontraron películas ni series. ¡Empezá a agregar algunas!
      </p>
    );
  }

  return (
    <div className={styles.carouselContainer}>
      {items.map((item) => (
        <div key={item.id} className={styles.carouselItem}>
          <MovieCard movie={item} onClick={() => {}} />
        </div>
      ))}
    </div>
  );
};
export default List;