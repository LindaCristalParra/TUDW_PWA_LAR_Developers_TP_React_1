const Search = ({ value, onChange, onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar por nombre o director"
        value={value}
        onChange={onChange}
      />
    </form>
  )
}

export default Search;


