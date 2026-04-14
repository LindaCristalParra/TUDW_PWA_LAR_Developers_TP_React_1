import { useState } from "react";
import "./App.css";

import Header from "./Components/Header/Header";
import FilterTitleDirector from "./Components/Filter/FilterTitleDirector";
import MovieCard from "./Components/Card/Card";

const movies = [
  {
    title: 'Buscando a Nemo',
    image: '',
    director: 'Andrew Stanton',
    year: '2003',
    genre: 'comedia',
    type: 'pelicula',
    rating: '4'
  },
  {
    title: 'El Rey León',
    image: '',
    director: 'Roger Allers',
    year: '1994',
    genre: 'comedia',
    type: 'pelicula',
    rating: '5'
  },  
];
function App() {

  const [searchValue, setSearchValue] = useState("");
  const [currentFilters, setCurrentFilters] = useState({
    type: "pelicula",
    genre: "todos"
  });

  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = FilterTitleDirector(movie, searchValue);
    const matchesType = currentFilters.type ? movie.type === currentFilters.type : true;
    const matchesGenre =
      currentFilters.genre === "todos" ? true : movie.genre === currentFilters.genre;

    return matchesSearch && matchesType && matchesGenre;
  });


  return (
    <div className="App">
      <Header
        currentFilters={currentFilters}
        onFilterChange={setCurrentFilters}
        onSearch={setSearchValue}
      />

      <div className="cardsContainer">
        {filteredMovies.map((movie) => {
          return <MovieCard key={movie.title} movie={movie} />;
        })}
      </div>
      
    </div>
  )
}

export default App
