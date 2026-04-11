import React, { useState } from 'react';
import Button from '../Button/Button'; 
import styles from './Form.module.css';

const Form = ({ initialData, onSave, onCancel }) => {
  const [formData, setFormData] = useState(initialData || {
    title: '',
    image: '',
    director: '',
    year: '',
    genre: '',
    type: 'pelicula', 
    rating: '' 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...formData, rating: Number(formData.rating) });
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>
        {initialData ? 'EDITAR CONTENIDO' : 'NUEVA PELÍCULA'}
      </h2>

      <form onSubmit={handleSubmit} className={styles.Form}>
        
        <div className={styles.inputGroup}>
          <label>Título</label>
          <input 
            name="title" 
            value={formData.title} 
            onChange={handleChange} 
            required 
            placeholder="Ej: Volver al Futuro"
          />
        </div>

        <div className={styles.inputGroup}>
          <label>Imagen (URL)</label>
          <input 
            name="image" 
            value={formData.image} 
            onChange={handleChange} 
            placeholder="https://link-de-la-portada.jpg" 
          />
        </div>

        <div className={styles.formRow}>
          <div className={styles.inputGroup}>
            <label>Director</label>
            <input name="director" value={formData.director} onChange={handleChange} />
          </div>
          <div className={styles.inputGroup}>
            <label>Año</label>
            <input type="number" name="year" value={formData.year} onChange={handleChange} />
          </div>
        </div>

        <div className={styles.inputGroup}>
          <label>Género</label>
          <select name="genre" value={formData.genre} onChange={handleChange} required>
            <option value="">Seleccionar género...</option>
            <option value="accion">Acción</option>
            <option value="comedia">Comedia</option>
            <option value="terror">Terror</option>
            <option value="drama">Drama</option>
            <option value="ciencia-ficcion">Ciencia Ficción</option>
          </select>
        </div>

        <div className={styles.inputGroup}>
          <label>Rating (Puntaje)</label>
          <select name="rating" value={formData.rating} onChange={handleChange} required>
            <option value="">¿Qué puntaje le das?</option>
            <option value="1">1 - Mala</option>
            <option value="2">2 - Regular</option>
            <option value="3">3 - Buena</option>
            <option value="4">4 - Muy Buena</option>
            <option value="5">5 - Excelente</option>
          </select>
        </div>

        <div className={styles.radioContainer}>
          <label className={styles.radioLabel}>Tipo de contenido:</label>
          <div className={styles.radioOptions}>
            <label className={styles.radioItem}>
              <input 
                type="radio" 
                name="type" 
                value="pelicula" 
                checked={formData.type === 'pelicula'} 
                onChange={handleChange} 
              />
              Película
            </label>
            <label className={styles.radioItem}>
              <input 
                type="radio" 
                name="type" 
                value="serie" 
                checked={formData.type === 'serie'} 
                onChange={handleChange} 
              />
              Serie
            </label>
          </div>
        </div>

        <div className={styles.formActions}>
          <Button text="Guardar" variant="blue" type="submit" />
          <Button text="Cancelar" variant="grey" onClick={onCancel} />
        </div>
      </form>
    </div>
  );
};

export default Form;