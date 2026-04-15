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
        <span className={styles.badge}>{movie.type}</span>
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{movie.title}</h3>
        <p className={styles.year}>{movie.year}</p>
      </div>
    </div>
  );
};

export default Card;