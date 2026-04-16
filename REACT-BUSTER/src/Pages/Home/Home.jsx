import Title from '../../Components/Title/Title';
import { useState } from 'react';
import styles from './Home.module.css';
import Order from '../../Components/Order/Order';
import List from '../../Components/List/List';
import CardDetail from '../../Components/CardDetail/CardDetail';

const Home = ({ movies, onToggleWatched, onEdit, onDelete }) => {

  const [sortOrder, setSortOrder] = useState('rating-desc');
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleToggleLocal = (id) => {
    onToggleWatched(id);
    setSelectedMovie((prev) => {
      if (prev && prev.id === id) {
        return { ...prev, watched: !prev.watched };
      }
      return prev;
    });
  };

  const getSortedMovies = (items) => {

    const [criterio, direccion] = sortOrder.split('-');
    return [...items].sort((a, b) => {
      let valueA = a[criterio];
      let valueB = b[criterio];

      if (direccion === 'asc') {
        return valueA > valueB ? 1 : -1;
      } else {
        return valueA < valueB ? 1 : -1;
      }
    });
  };

  const porVer = getSortedMovies(movies.filter(m => !m.watched));
  const vistas = getSortedMovies(movies.filter(m => m.watched));

  return (
    <div className={styles.homeContainer}>

      {selectedMovie && (
      <div className={styles.modalOverlay} onClick={() => setSelectedMovie(null)}>
        <div onClick={(e) => e.stopPropagation()}>
          <CardDetail
            movie={selectedMovie}
            onToggleWatched={handleToggleLocal}
            onEdit={onEdit}
            onDelete={(id) => {
              onDelete(id);
              setSelectedMovie(null);
            }}
            onClose={() => setSelectedMovie(null)}
          />
        </div>
      </div>
    )}

      <div className={styles.sectionHeader}>
        <Title text="Por ver" />
        <Order onOrderChange={setSortOrder} />
      </div>

      <List
        items={porVer}
        onToggleWatched={handleToggleLocal}
        onMovieClick={setSelectedMovie}
      />

      <div className={styles.sectionHeader}>
        <Title text="Vistas" />
      </div>

      <List
        items={vistas}
        onToggleWatched={handleToggleLocal}
        onMovieClick={setSelectedMovie}
      />
    </div>
  );
};

export default Home;