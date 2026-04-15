import { useState } from 'react';
import styles from './Order.module.css';

const Order = ({ onOrderChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [criterio, setCriterio] = useState('rating');
  const [direccion, setDireccion] = useState('desc');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const aplicarOrden = (nuevoCriterio, nuevaDireccion) => {
    setCriterio(nuevoCriterio);
    setDireccion(nuevaDireccion);
    
    if (onOrderChange) {
      onOrderChange(`${nuevoCriterio}-${nuevaDireccion}`);
    }
  };

  return (
    <div className={styles.orderContainer}>
      <button className={styles.mainButton} onClick={toggleMenu}>
        Ordenar por {isOpen ? '🔼' : '🔽'}
      </button>

      {isOpen && (
        <div className={styles.controlsPanel}>
          <div className={styles.controlGroup}>
            <label htmlFor="criterioSelect" className={styles.label}>
              Criterio:
            </label>
            <select 
              id="criterioSelect"
              className={styles.selectInput}
              value={criterio}
              onChange={(e) => aplicarOrden(e.target.value, direccion)}
            >
              <option value="rating">Rating</option>
              <option value="year">Año</option>
            </select>
          </div>

          <div className={styles.controlGroup}>
            <label htmlFor="direccionSelect" className={styles.label}>
              Forma:
            </label>
            <select 
              id="direccionSelect"
              className={styles.selectInput}
              value={direccion}
              onChange={(e) => aplicarOrden(criterio, e.target.value)}
            >
              <option value="desc">Descendente</option>
              <option value="asc">Ascendente</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default Order;