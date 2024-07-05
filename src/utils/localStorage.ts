type JsonValue =
  | string
  | number
  | boolean
  | null
  | { [key: string]: JsonValue }
  | JsonValue[];

const setItem = (key: string, value: JsonValue): void => {
  try {
    const jsonValue = JSON.stringify(value);
    localStorage.setItem(key, jsonValue);
  } catch (error) {
    console.error('Error setting item to localStorage: ', error);
  }
};

const getItem = <T = JsonValue>(key: string): T | null => {
  try {
    const jsonValue = localStorage.getItem(key);
    if (jsonValue === null) {
      return null;
    }

    return JSON.parse(jsonValue) as T;
  } catch (error) {
    console.error('Error getting item from localStorage: ', error);
    return null;
  }
};

const removeItem = (key: string): void => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(`Error removing item from localStorage: ${error}`);
  }
};

const clear = (): void => {
  try {
    localStorage.clear();
  } catch (error) {
    console.error('Error clearing localStorage: ', error);
  }
};

export const localStorageUtils = {
  setItem,
  getItem,
  removeItem,
  clear,
};
