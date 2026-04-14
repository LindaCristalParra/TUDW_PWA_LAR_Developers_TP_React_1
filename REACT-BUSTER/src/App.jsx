import { useState } from "react";

import Search from "./Components/Search/Search";

const movies = [
  {
    title: 'Buscando a Nemo',
    image: '',
    director: 'Andrew Stanton',
    year: '2003',
    genre: 'Infantil',
    type: 'pelicula',
    rating: ''
  },
  {
    title: 'El Rey León',
    image: '',
    director: 'Roger Allers',
    year: '1994',
    genre: 'Infantil',
    type: 'pelicula',
    rating: ''
  },
  {
    title: '',
    image: '',
    director: '',
    year: '',
    genre: '',
    type: 'pelicula',
    rating: ''
  },
];
function App() {

  const [searchValue, setSearchValue] = useState("");


  return (
    <div className="App">
      <div>Hola React Buster</div>
      <Search>
        <input type="text" placeholder="Buscar por nombre o director" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
      </Search>
    </div>
  )
}

export default App
