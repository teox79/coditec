import React from 'react';
import { ErrorState } from '../../hooks/useErrorHandler';

interface ErrorDisplayProps {
  error: ErrorState;
  onDismiss?: () => void;
  variant?: 'danger' | 'warning' | 'info';
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ 
  error, 
  onDismiss, 
  variant = 'danger' 
}) => {
  return (
    <div className={`alert alert-${variant} alert-dismissible fade show`} role="alert">
      <div className="d-flex align-items-center">
        <i className={`bi bi-${variant === 'danger' ? 'exclamation-triangle' : 'info-circle'} me-2`}></i>
        <div className="flex-grow-1">
          <strong>Errore:</strong> {error.message}
          {error.code && (
            <small className="d-block text-muted mt-1">
              Codice: {error.code}
            </small>
          )}
        </div>
      </div>
      {onDismiss && (
        <button 
          type="button" 
          className="btn-close" 
          aria-label="Chiudi"
          onClick={onDismiss}
        ></button>
      )}
    </div>
  );
};

export default ErrorDisplay;
