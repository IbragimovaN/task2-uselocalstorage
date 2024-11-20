import { useState } from "react";

const getValueStorage = (key) => {
  const storageValue = localStorage.getItem(key);
  if (storageValue !== null) {
    return storageValue;
  }
  return null;
};

export const useLocalStorage = (key) => {
  const [value, setValue] = useState(() => getValueStorage(key));

  const setItem = (newValue) => {
    localStorage.setItem(key, newValue);
    setValue(newValue);
  };

  const removeItem = () => {
    localStorage.removeItem(key);
    setValue(null);
  };

  return [value, { setItem, removeItem }];
};
