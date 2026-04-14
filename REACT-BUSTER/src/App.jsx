import { useState } from "react";

import SearchContainer from "./Components/Search/SearchContainer";
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
  const filteredMoviesByTitle = movies.filter((movie) => FilterTitleDirector(movie, searchValue));


  return (
    <div className="App">
      <div>Hola React Buster</div>
      <SearchContainer onSearchChange={setSearchValue} />

      <div>
        {filteredMoviesByTitle.map((movie) => {
          return <MovieCard key={movie.title} movie={movie} />;
        })}
      </div>
      
    </div>
  )
}

export default App
