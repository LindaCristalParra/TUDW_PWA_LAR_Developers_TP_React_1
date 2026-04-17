import { useState } from "react";

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);

      if (item !== null) {
        const parsed = JSON.parse(item);
        return parsed;
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
      setStoredValue((prevValue) => {
        const valueToStore = value instanceof Function ? value(prevValue) : value;
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
        return valueToStore;
      });
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}

export default useLocalStorage;