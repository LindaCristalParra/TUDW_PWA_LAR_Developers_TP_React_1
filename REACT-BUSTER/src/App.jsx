import { useState } from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import styles from './App.module.css';
import Movies from './Utils/Mokups/Movies.json';
import FilterTitleDirector from './Utils/Filter/FilterTitleDirector';
import Home from './Pages/Home/Home';
function App() {

  const [movies, setMovies] = useState(Movies);
  const [filters, setFilters] = useState({ type: 'todos', genre: 'todos' });
  const [searchTerm, setSearchTerm] = useState('');

  const toggleWatched = (id) => {
    setMovies(movies.map(m => m.id === id ? { ...m, watched: !m.watched } : m));
  };

  const handleEdit = (movie) => {
    // TODO: Implementar edición de película
    console.log('Editar película:', movie);
  };

  const handleDelete = (id) => {
    setMovies(movies.filter(m => m.id !== id));
  };

  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = FilterTitleDirector(movie, searchTerm);
    const matchesType = filters.type === 'todos' ? true : movie.type === filters.type;
    const matchesGenre =
      filters.genre === "todos" ? true : movie.genre === filters.genre;

    return matchesSearch && matchesType && matchesGenre;
  });

  const moviesForGenreCount = movies.filter((movie) => {
    return filters.type === 'todos' ? true : movie.type === filters.type;
  });

  const genreCounts = moviesForGenreCount.reduce(
    (acc, movie) => {
      if (acc[movie.genre] !== undefined) {
        acc[movie.genre] += 1;
      }
      return acc;
    },
    {
      accion: 0,
      comedia: 0,
      terror: 0,
      drama: 0,
      'ciencia-ficcion': 0
    }
  );

  return (
    <div className={styles.appContainer}>
      <Header
        currentFilters={filters}
        onFilterChange={setFilters}
        onSearch={setSearchTerm}
        genreCounts={genreCounts}
        totalByType={moviesForGenreCount.length}
      />


      <main className={styles.mainContent}>
        <Home
          movies={filteredMovies}
          onToggleWatched={toggleWatched}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </main>

      <Footer />
    </div>
  );
}

export default App;
