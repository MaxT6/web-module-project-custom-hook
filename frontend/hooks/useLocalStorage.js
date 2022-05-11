import { useState } from 'react'

const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
      //console.log("StoredValue", storedValue)
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    });
    const setValue = value => {
      setStoredValue(value);
      console.log("Storage value", value)
      window.localStorage.setItem(key, JSON.stringify(value));
    };
    return [storedValue, setValue];
  };

  export default useLocalStorage;