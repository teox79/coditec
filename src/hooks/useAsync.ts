import { useState, useEffect, useCallback } from 'react';
import { useErrorHandler } from './useErrorHandler';
import { logger } from '../services/logger';

export interface UseAsyncOptions<T> {
  immediate?: boolean;
  onSuccess?: (data: T) => void;
  onError?: (error: Error) => void;
  dependencies?: unknown[];
}

export interface UseAsyncReturn<T> {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
  execute: (...args: any[]) => Promise<T | null>;
  reset: () => void;
}

export const useAsync = <T>(
  asyncFunction: (...args: any[]) => Promise<T>,
  options: UseAsyncOptions<T> = {}
): UseAsyncReturn<T> => {
  const {
    immediate = false,
    onSuccess,
    onError,
    dependencies = []
  } = options;

  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { error, handleError, clearError } = useErrorHandler();

  const execute = useCallback(async (...args: any[]): Promise<T | null> => {
    try {
      setIsLoading(true);
      clearError();
      
      logger.debug('Executing async function', 'useAsync', { args });
      
      const result = await asyncFunction(...args);
      
      setData(result);
      onSuccess?.(result);
      
      logger.info('Async function executed successfully', 'useAsync');
      
      return result;
    } catch (err) {
      const error = err instanceof Error ? err : new Error(String(err));
      
      logger.error('Async function failed', error, 'useAsync');
      
      handleError(error, 'useAsync');
      onError?.(error);
      
      return null;
    } finally {
      setIsLoading(false);
    }
  }, [asyncFunction, clearError, handleError, onSuccess, onError]);

  const reset = useCallback(() => {
    setData(null);
    clearError();
    setIsLoading(false);
  }, [clearError]);

  // Esegui automaticamente se immediate è true
  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [immediate, execute, ...dependencies]);

  return {
    data,
    isLoading,
    error: error ? new Error(error.message) : null,
    execute,
    reset
  };
};
