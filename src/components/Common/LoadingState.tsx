import React from 'react';
import ErrorDisplay from './ErrorDisplay';
import { ErrorState } from '../../hooks/useErrorHandler';

interface LoadingStateProps {
  isLoading: boolean;
  error: ErrorState | null;
  onRetry?: () => void;
  onErrorDismiss?: () => void;
  children: React.ReactNode;
  loadingText?: string;
  loadingComponent?: React.ReactNode;
}

const LoadingState: React.FC<LoadingStateProps> = ({
  isLoading,
  error,
  onRetry,
  onErrorDismiss,
  children,
  loadingText = 'Caricamento...',
  loadingComponent
}) => {
  if (error) {
    return (
      <div className="my-4">
        <ErrorDisplay 
          error={error} 
          onDismiss={onErrorDismiss}
        />
        {onRetry && (
          <div className="text-center mt-3">
            <button 
              className="btn btn-primary"
              onClick={onRetry}
            >
              <i className="bi bi-arrow-clockwise me-2"></i>
              Riprova
            </button>
          </div>
        )}
      </div>
    );
  }

  if (isLoading) {
    if (loadingComponent) {
      return <>{loadingComponent}</>;
    }

    return (
      <div className="d-flex justify-content-center align-items-center my-5">
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Caricamento...</span>
          </div>
          <div className="mt-3 text-muted">{loadingText}</div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default LoadingState;
