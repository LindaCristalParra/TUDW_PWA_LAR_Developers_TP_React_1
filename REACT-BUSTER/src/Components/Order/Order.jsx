import { useState } from 'react';
import styles from './Order.module.css';

const Order = ({ onOrderChange }) => {
  const [criterio, setCriterio] = useState('rating');
  const [direccion, setDireccion] = useState('desc');

  const aplicarOrden = (nuevoCriterio, nuevaDireccion) => {
    setCriterio(nuevoCriterio);
    setDireccion(nuevaDireccion);

    if (onOrderChange) {
      onOrderChange(`${nuevoCriterio}-${nuevaDireccion}`);
    }
  };

  return (
    <div className={styles.orderContainer}>
      <label className={styles.mainLabel}> Ordenar por </label>

        <div className={styles.controlsPanel}>
          <div className={styles.controlGroup}>
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

    </div>
  );
};

export default Order;