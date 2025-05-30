import { useState, useCallback } from 'react';
import { logger } from '../services/logger';

export interface ErrorState {
  message: string;
  code?: string;
  timestamp: Date;
}

export const useErrorHandler = () => {
  const [error, setError] = useState<ErrorState | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const handleError = useCallback((error: unknown, context?: string) => {
    let errorMessage = 'Si è verificato un errore imprevisto';
    let errorCode: string | undefined;

    if (error instanceof Error) {
      errorMessage = error.message;
      errorCode = error.name;
      // Log dell'errore usando il logger service
      logger.error(errorMessage, error, context);
    } else if (typeof error === 'string') {
      errorMessage = error;
      logger.error(errorMessage, undefined, context);
    } else {
      logger.error('Unknown error type', undefined, context, { error });
    }

    setError({
      message: errorMessage,
      code: errorCode,
      timestamp: new Date()
    });
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const executeAsync = useCallback(async <T>(
    asyncFn: () => Promise<T>,
    context?: string
  ): Promise<T | null> => {
    try {
      setIsLoading(true);
      clearError();
      const result = await asyncFn();
      return result;
    } catch (error) {
      handleError(error, context);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, [handleError, clearError]);

  return {
    error,
    isLoading,
    handleError,
    clearError,
    executeAsync
  };
};
