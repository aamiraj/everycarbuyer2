import "client-only";

export const getLocalStorage = (key: string, defaultValue: unknown) => {
  const value = localStorage.getItem(key);

  if (value === null || value === "undefined") {
    return defaultValue;
  } else {
    return JSON.parse(value);
  }
};

export const setLocalStorage = (key: string, value: unknown) => {
  localStorage.setItem(key, JSON.stringify(value));
};
