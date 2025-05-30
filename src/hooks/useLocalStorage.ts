import { useState, useEffect, useCallback } from 'react';
import { logger } from '../services/logger';

export interface UseLocalStorageOptions<T> {
  serializer?: {
    parse: (value: string) => T;
    stringify: (value: T) => string;
  };
  onError?: (error: Error) => void;
}

export const useLocalStorage = <T>(
  key: string,
  defaultValue: T,
  options: UseLocalStorageOptions<T> = {}
): [T, (value: T | ((prev: T) => T)) => void, () => void] => {
  const {
    serializer = {
      parse: JSON.parse,
      stringify: JSON.stringify
    },
    onError
  } = options;

  // Funzione per leggere dal localStorage
  const readValue = useCallback((): T => {
    if (typeof window === 'undefined') {
      return defaultValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      if (item === null) {
        return defaultValue;
      }
      return serializer.parse(item);
    } catch (error) {
      const err = error instanceof Error ? error : new Error(String(error));
      logger.error(`Error reading localStorage key "${key}"`, err, 'useLocalStorage');
      onError?.(err);
      return defaultValue;
    }
  }, [key, defaultValue, serializer, onError]);

  const [storedValue, setStoredValue] = useState<T>(readValue);

  // Funzione per scrivere nel localStorage
  const setValue = useCallback((value: T | ((prev: T) => T)) => {
    if (typeof window === 'undefined') {
      logger.warn('localStorage not available (SSR)', 'useLocalStorage');
      return;
    }

    try {
      const newValue = value instanceof Function ? value(storedValue) : value;
      window.localStorage.setItem(key, serializer.stringify(newValue));
      setStoredValue(newValue);
      
      logger.debug(`Updated localStorage key "${key}"`, 'useLocalStorage', { newValue });
    } catch (error) {
      const err = error instanceof Error ? error : new Error(String(error));
      logger.error(`Error setting localStorage key "${key}"`, err, 'useLocalStorage');
      onError?.(err);
    }
  }, [key, serializer, storedValue, onError]);

  // Funzione per rimuovere dal localStorage
  const removeValue = useCallback(() => {
    if (typeof window === 'undefined') {
      return;
    }

    try {
      window.localStorage.removeItem(key);
      setStoredValue(defaultValue);
      
      logger.debug(`Removed localStorage key "${key}"`, 'useLocalStorage');
    } catch (error) {
      const err = error instanceof Error ? error : new Error(String(error));
      logger.error(`Error removing localStorage key "${key}"`, err, 'useLocalStorage');
      onError?.(err);
    }
  }, [key, defaultValue, onError]);

  // Ascolta i cambiamenti nel localStorage da altre tab/finestre
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key !== key || e.storageArea !== window.localStorage) {
        return;
      }

      if (e.newValue === null) {
        setStoredValue(defaultValue);
      } else {
        try {
          setStoredValue(serializer.parse(e.newValue));
        } catch (error) {
          const err = error instanceof Error ? error : new Error(String(error));
          logger.error(`Error parsing storage event for key "${key}"`, err, 'useLocalStorage');
          onError?.(err);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [key, defaultValue, serializer, onError]);

  return [storedValue, setValue, removeValue];
};
