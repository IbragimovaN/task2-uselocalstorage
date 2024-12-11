import { useState } from "react";

type LocalStorageSetValue = string;
type LocalStorageReturnValue = LocalStorageSetValue | null;

type UseLocalStorage = (key: string) => [
  value: LocalStorageReturnValue,
  {
    setItem: (value: LocalStorageSetValue) => void;
    removeItem: () => void;
  }
];

const getValueStorage = (key: string): LocalStorageReturnValue => {
  const storageValue = localStorage.getItem(key);
  if (storageValue !== null) {
    return storageValue;
  }
  return null;
};

export const useLocalStorage: UseLocalStorage = (key) => {
  const [value, setValue] = useState(() => getValueStorage(key));

  const setItem = (newValue: LocalStorageSetValue) => {
    localStorage.setItem(key, newValue);
    setValue(newValue);
  };

  const removeItem = () => {
    localStorage.removeItem(key);
    setValue(null);
  };

  return [value, { setItem, removeItem }];
};
