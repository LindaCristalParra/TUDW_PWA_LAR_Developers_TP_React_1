import styles from "./Search.module.css";

const Search = ({ value, onChange, onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Buscar por nombre o director"
        value={value}
        onChange={onChange}
      />
    </form>
  )
}

export default Search;


