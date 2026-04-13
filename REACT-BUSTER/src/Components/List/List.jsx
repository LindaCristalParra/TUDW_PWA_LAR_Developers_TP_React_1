import styles from './List.module.css';
import { Card } from '../Card/Card';

export const List = ({ items = [] }) => {
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
          <Card movieData={item} />
        </div>
      ))}
    </div>
  );
};