const FilterTitleDirector = (movie, inputValue) => {
    const normalizedInput = inputValue.trim().toLowerCase();

    if (normalizedInput === "") {
      return true;
    }

    const matchesByWords = (text) => {
      return text
        .toLowerCase()
        .split(" ")
        .some((word) => word.startsWith(normalizedInput));
    };

    const coincideTitle = matchesByWords(movie.title);
    const coincideDirector = matchesByWords(movie.director);

    return coincideTitle || coincideDirector;
  };

  export default FilterTitleDirector;