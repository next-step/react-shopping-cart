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
    sessionStorage.setItem(key, jsonValue);
  } catch (error) {
    console.error(`Error setting item to sessionStorage: ${error}`);
  }
};

const getItem = <T = JsonValue>(key: string): T | null => {
  try {
    const jsonValue = sessionStorage.getItem(key);
    if (jsonValue === null) {
      return null;
    }

    return JSON.parse(jsonValue) as T;
  } catch (error) {
    console.error(`Error getting item from sessionStorage: ${error}`);
    return null;
  }
};

const removeItem = (key: string): void => {
  try {
    sessionStorage.removeItem(key);
  } catch (error) {
    console.error(`Error removing item from sessionStorage: ${error}`);
  }
};

const clear = (): void => {
  try {
    sessionStorage.clear();
  } catch (error) {
    console.error(`Error clearing sessionStorage: ${error}`);
  }
};

export const sessionStorageUtils = {
  setItem,
  getItem,
  removeItem,
  clear,
};
