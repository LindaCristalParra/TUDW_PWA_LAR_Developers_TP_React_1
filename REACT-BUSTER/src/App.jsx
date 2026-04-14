import { useState } from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import styles from './App.module.css';

function App() {
  // Estos estados viven en App o Home para que el Header pueda avisar qué filtrar
  const [filters, setFilters] = useState({ type: 'todos', genre: 'todos' });
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className={styles.appContainer}>
      
      <Header 
        currentFilters={filters} 
        onFilterChange={setFilters} 
        onSearch={setSearchTerm}
      />

      
      <main className={styles.mainContent}>
        <Home filters={filters} searchTerm={searchTerm} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
