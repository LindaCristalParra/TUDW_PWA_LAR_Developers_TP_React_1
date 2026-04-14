import { useState } from "react";

import Search from "./Search";

const SearchContainer = ({ onSearchChange }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);

    if (newValue.trim() === "") {
      onSearchChange("");
    }
  };

  const handleSubmit = () => {
    onSearchChange(inputValue.trim());
  };

  return (
    <Search
      value={inputValue}
      onChange={handleInputChange}
      onSubmit={handleSubmit}
    />
  );
};

export default SearchContainer;
