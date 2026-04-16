import styles from './Card.module.css';

const Card = ({ movie, onClick }) => {
  
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault(); 
      onClick(movie);
    }
  };

  return (
    <div 
      className={styles.card} 
      onClick={() => onClick(movie)}
      role="button"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-label={`Ver detalles de la película ${movie.title}`} 
    >
      <div className={styles.imageContainer}>
        <img src={movie.image} alt={`Portada de ${movie.title}`} className={styles.poster} />
        <span className={styles.type}>{movie.type}</span>
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{movie.title}</h3>
        <div className={styles.metaRow}>
          <span className={styles.ratingBadge} aria-label={`Rating ${movie.rating} de 5`}>
            ★ {movie.rating}
          </span>
          <span className={styles.separator}>|</span>
          <span className={styles.year}>{movie.year}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;