import Title from '../../Components/Title/Title';
import { useState } from 'react';
import styles from './Home.module.css';
import Order from '../../Components/Order/Order';
import List from '../../Components/List/List';

const Home = ({ movies, onToggleWatched }) => {
  
  const [sortOrder, setSortOrder] = useState('rating-desc');
  
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
      <div className={styles.sectionHeader}>
        <Title text="Por ver" />
        <Order onOrderChange={setSortOrder} />
      </div>
      
      <List 
        items={porVer} 
        onToggleWatched={onToggleWatched} 
      />

      <div className={styles.sectionHeader}>
        <Title text="Vistas" />
      </div>
      
      <List 
        items={vistas} 
        onToggleWatched={onToggleWatched} 
      />
    </div>
  );
};

export default Home;