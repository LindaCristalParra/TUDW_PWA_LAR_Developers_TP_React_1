import { useState } from "react";

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try { // Inicio el array de movies con datos mockeados  si todavía no hay nada
      const item = window.localStorage.getItem(key);
      
      if (item !== null) {
        return JSON.parse(item);
      }
      
      window.localStorage.setItem(key, JSON.stringify(initialValue));
      return initialValue;
      
    } catch (error) {
      console.error("Error al inicializar LocalStorage:", error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}