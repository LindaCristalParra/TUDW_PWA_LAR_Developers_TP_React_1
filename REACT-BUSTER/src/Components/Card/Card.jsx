import styles from './MovieCard.module.css';

const Card = ({ movie, onClick }) => {
  return (
    <div className={styles.card} onClick={() => onClick(movie)}>
      <div className={styles.imageContainer}>
        <img src={movie.image} alt={movie.title} className={styles.poster} />
        <span className={styles.type}>{movie.type}</span>
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{movie.title}</h3>
        <p className={styles.year}>{movie.year}</p>
      </div>
    </div>
  );
};

export default Card;