import { useState } from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import styles from './App.module.css';
import Movies from './Utils/Mokups/Movies.json';
import FilterTitleDirector from './Utils/Filter/FilterTitleDirector';
import List from './Components/List/List';


function App() {
  const [filters, setFilters] = useState({ type: 'todos', genre: 'todos' });
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMovies = Movies.filter((movie) => {
    const matchesSearch = FilterTitleDirector(movie, searchTerm);
    const matchesType = filters.type === 'todos' ? true : movie.type === filters.type;
    const matchesGenre =
      filters.genre === "todos" ? true : movie.genre === filters.genre;

    return matchesSearch && matchesType && matchesGenre;
  });

  return (
    <div className={styles.appContainer}>

      <Header
        currentFilters={filters}
        onFilterChange={setFilters}
        onSearch={setSearchTerm}
      />


      <main className={styles.mainContent}>
        <List items={filteredMovies} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
