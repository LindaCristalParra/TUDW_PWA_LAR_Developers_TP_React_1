import React, { useEffect, useState } from 'react';
import Button from '../Button/Button'; 
import styles from './Form.module.css';


const defaultFormData = {
  title: '',
  image: '',
  director: '',
  year: '',
  genre: '',
  type: 'pelicula', 
  rating: '' 
};

const normalizeFormData = (data) => ({
  ...defaultFormData,
  ...(data || {})
});

const Form = ({ initialData, onSave, onCancel }) => {
  const [formData, setFormData] = useState(() => normalizeFormData(initialData));

  useEffect(() => {
    setFormData(normalizeFormData(initialData));
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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

      <form onSubmit={handleSubmit} className={styles.movieForm}>
        
        <div className={styles.inputGroup}>
          <label htmlFor="title">Título</label>
          <input 
            id="title"
            name="title" 
            value={formData.title} 
            onChange={handleChange} 
            required 
            placeholder="Ej: Volver al Futuro"
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="image">Imagen (URL)</label>
          <input 
            id="image"
            type="url"
            name="image" 
            value={formData.image} 
            onChange={handleChange} 
            placeholder="https://link-de-la-portada.jpg" 
          />
        </div>

        <div className={styles.formRow}>
          <div className={styles.inputGroup}>
            <label htmlFor="director">Director</label>
            <input 
              id="director"
              name="director" 
              value={formData.director} 
              onChange={handleChange} 
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="year">Año</label>
            <input 
              id="year"
              type="number" 
              name="year" 
              value={formData.year} 
              onChange={handleChange} 
            />
          </div>
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="genre">Género</label>
          <select id="genre" name="genre" value={formData.genre} onChange={handleChange} required>
            <option value="">Seleccionar género...</option>
            <option value="accion">Acción</option>
            <option value="comedia">Comedia</option>
            <option value="terror">Terror</option>
            <option value="drama">Drama</option>
            <option value="ciencia-ficcion">Ciencia Ficción</option>
          </select>
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="rating">Rating (Puntaje)</label>
          <select id="rating" name="rating" value={formData.rating} onChange={handleChange} required>
            <option value="">¿Qué puntaje le das?</option>
            <option value="1">1 - Mala</option>
            <option value="2">2 - Regular</option>
            <option value="3">3 - Buena</option>
            <option value="4">4 - Muy Buena</option>
            <option value="5">5 - Excelente</option>
          </select>
        </div>

    
        <fieldset className={styles.radioContainer}>
          <legend className={styles.radioLabel}>Tipo de contenido:</legend>
          <div className={styles.radioOptions}>
            <label className={styles.radioItem} htmlFor="type-peli">
              <input 
                id="type-peli"
                type="radio" 
                name="type" 
                value="pelicula" 
                checked={formData.type === 'pelicula'} 
                onChange={handleChange} 
              />
              Película
            </label>
            <label className={styles.radioItem} htmlFor="type-serie">
              <input 
                id="type-serie"
                type="radio" 
                name="type" 
                value="serie" 
                checked={formData.type === 'serie'} 
                onChange={handleChange} 
              />
              Serie
            </label>
          </div>
        </fieldset>

        <div className={styles.formActions}>
          <Button text="Guardar" variant="yellow" type="submit" />
          <Button text="Cancelar" variant="grey" onClick={onCancel} />
        </div>
      </form>
    </div>
  );
};

export default Form;
