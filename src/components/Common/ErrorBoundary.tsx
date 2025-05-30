import React, { Component, ErrorInfo, ReactNode } from 'react';
import { logger } from '../../services/logger';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    // Aggiorna lo state in modo che il prossimo render mostri l'UI di fallback
    return { hasError: true, error };
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log dell'errore usando il logger service
    logger.error(
      'ErrorBoundary caught an error',
      error,
      'ErrorBoundary',
      { 
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString()
      }
    );
    
    // Aggiorna lo state con le informazioni dell'errore
    this.setState({
      error,
      errorInfo
    });

    // Chiama il callback personalizzato se fornito
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  private handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  render() {
    if (this.state.hasError) {
      // Usa il fallback personalizzato se fornito
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // UI di fallback di default
      return (
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card border-danger">
                <div className="card-header bg-danger text-white">
                  <h5 className="card-title mb-0">
                    <i className="bi bi-exclamation-triangle me-2"></i>
                    Qualcosa è andato storto
                  </h5>
                </div>
                <div className="card-body">
                  <p className="card-text">
                    Si è verificato un errore imprevisto. Ci scusiamo per l'inconveniente.
                  </p>
                  
                  {process.env.NODE_ENV === 'development' && this.state.error && (
                    <details className="mt-3">
                      <summary className="text-muted">Dettagli tecnici (solo in sviluppo)</summary>
                      <pre className="mt-2 p-3 bg-light rounded small">
                        <code>
                          {this.state.error.toString()}
                          {this.state.errorInfo && this.state.errorInfo.componentStack}
                        </code>
                      </pre>
                    </details>
                  )}
                  
                  <div className="mt-4">
                    <button 
                      className="btn btn-primary me-2" 
                      onClick={this.handleRetry}
                    >
                      <i className="bi bi-arrow-clockwise me-2"></i>
                      Riprova
                    </button>
                    <button 
                      className="btn btn-outline-secondary" 
                      onClick={() => window.location.href = '/'}
                    >
                      <i className="bi bi-house me-2"></i>
                      Torna alla Home
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
