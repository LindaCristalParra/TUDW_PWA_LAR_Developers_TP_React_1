import Title from '../../Components/Title/Title';
import { useState } from 'react';
import styles from './Home.module.css';
import Order from '../../Components/Order/Order';
import List from '../../Components/List/List';
import CardDetail from '../../Components/CardDetail/CardDetail';
import Modal from '../../Components/Modal/Modal';
import Counter from '../../Components/Counter/Counter';
import Alert from '../../Components/Alert/Alert';
import Form from '../../Components/Form/Form';

const Home = ({ movies, onToggleWatched, onSaveMovie, onDelete }) => {

  const [sortOrder, setSortOrder] = useState('rating-desc');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formInitialData, setFormInitialData] = useState(null);

  const closeAllModals = () => {
    setSelectedMovie(null);
    setShowDeleteAlert(false);
    setShowForm(false);
    setFormInitialData(null);
  };

  const handleOpenCreate = () => {
    setFormInitialData(null);
    setShowDeleteAlert(false);
    setSelectedMovie(null);
    setShowForm(true);
  };

  const handleOpenEdit = (movie) => {
    setFormInitialData(movie);
    setShowDeleteAlert(false);
    setSelectedMovie(null);
    setShowForm(true);
  };

  const handleSaveFromForm = (movieData) => {
    onSaveMovie(movieData);
    closeAllModals();
  };

  const handleToggleLocal = (id) => {
    onToggleWatched(id);
    setSelectedMovie((prev) => {
      if (prev && prev.id === id) {
        return { ...prev, watched: !prev.watched };
      }
      return prev;
    });
  };

  const getSortedMovies = (items) => {

    const [criterio, direccion] = sortOrder.split('-');
    return [...items].sort((a, b) => {
      let valueA = a[criterio];
      let valueB = b[criterio];

      if (valueA === valueB) return 0;
      if (direccion === 'asc') {
        return valueA > valueB ? 1 : -1;
      } else {
        return valueA < valueB ? 1 : -1;
      }
    });
  };

  const porVer = getSortedMovies(movies.filter(m => !m.watched));
  const vistas = getSortedMovies(movies.filter(m => m.watched));

  const handleRequestDelete = () => {
    setShowDeleteAlert(true);
  };

  const handleConfirmDelete = () => {
    if (!selectedMovie) return;

    onDelete(selectedMovie.id);
    setShowDeleteAlert(false);
    setSelectedMovie(null);
  };

  const handleCancelDelete = () => {
    setShowDeleteAlert(false);
  };

  return (
    <div className={styles.homeContainer}>

      <Modal
        isOpen={!!selectedMovie && !showDeleteAlert && !showForm}
        onClose={closeAllModals}
      >
        {selectedMovie && (
          <>
            <CardDetail
              movie={selectedMovie}
              onToggleWatched={handleToggleLocal}
              onEdit={handleOpenEdit}
              onDelete={handleRequestDelete}
              onClose={closeAllModals}
            />
          </>
        )}
      </Modal>

      <Modal isOpen={showDeleteAlert} onClose={handleCancelDelete}>
        <Alert
          type="danger"
          text="¿Estas seguro que deseas eliminar?"
          onAccept={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      </Modal>

      <Modal isOpen={showForm} onClose={closeAllModals}>
        <Form
          initialData={formInitialData}
          onSave={handleSaveFromForm}
          onCancel={closeAllModals}
        />
      </Modal>

      <div className={styles.sectionHeader}>
        <div className={styles.titleWithCounter}>
          <Title text="Por ver" />
          <Counter label="TotalPorVer" count={porVer.length} />
          <button
            type="button"
            className={styles.addButton}
            onClick={handleOpenCreate}
            aria-label="Agregar película o serie"
          >
            +
          </button>
        </div>
        <Order onOrderChange={setSortOrder} />
      </div>

      <List
        items={porVer}
        onToggleWatched={handleToggleLocal}
        onMovieClick={setSelectedMovie}
      />

      <div className={styles.sectionHeader}>
        <div className={styles.titleWithCounter}>
          <Title text="Vistas" />
          <Counter label="TotalVistas" count={vistas.length} />
        </div>
      </div>

      <List
        items={vistas}
        onToggleWatched={handleToggleLocal}
        onMovieClick={setSelectedMovie}
      />
    </div>
  );
};

export default Home;