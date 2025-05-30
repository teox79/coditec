import { appConfig } from '../config/app';

export interface LogLevel {
  ERROR: 'error';
  WARN: 'warn';
  INFO: 'info';
  DEBUG: 'debug';
}

export interface LogEntry {
  level: keyof LogLevel;
  message: string;
  timestamp: Date;
  context?: string;
  error?: Error;
  metadata?: Record<string, unknown>;
}

class Logger {
  private logs: LogEntry[] = [];
  private maxLogs = appConfig.maxLogEntries; // Usa configurazione

  private createLogEntry(
    level: keyof LogLevel,
    message: string,
    context?: string,
    error?: Error,
    metadata?: Record<string, unknown>
  ): LogEntry {
    return {
      level,
      message,
      timestamp: new Date(),
      context,
      error,
      metadata
    };
  }
  private addLog(entry: LogEntry): void {
    // Controlla se il logging è abilitato
    if (!appConfig.enableLogging) return;

    this.logs.push(entry);
    
    // Mantieni solo gli ultimi N log
    if (this.logs.length > this.maxLogs) {
      this.logs = this.logs.slice(-this.maxLogs);
    }

    // Log su console solo se appropriato
    if (appConfig.isDevelopment) {
      const contextStr = entry.context ? `[${entry.context}]` : '';
      const logMessage = `${contextStr} ${entry.message}`;
      
      switch (entry.level) {
        case 'ERROR':
          console.error(logMessage, entry.error || '', entry.metadata || '');
          break;
        case 'WARN':
          console.warn(logMessage, entry.metadata || '');
          break;
        case 'INFO':
          console.info(logMessage, entry.metadata || '');
          break;
        case 'DEBUG':
          console.debug(logMessage, entry.metadata || '');
          break;
      }
    }
  }

  error(message: string, error?: Error, context?: string, metadata?: Record<string, unknown>): void {
    this.addLog(this.createLogEntry('ERROR', message, context, error, metadata));
  }

  warn(message: string, context?: string, metadata?: Record<string, unknown>): void {
    this.addLog(this.createLogEntry('WARN', message, context, undefined, metadata));
  }

  info(message: string, context?: string, metadata?: Record<string, unknown>): void {
    this.addLog(this.createLogEntry('INFO', message, context, undefined, metadata));
  }

  debug(message: string, context?: string, metadata?: Record<string, unknown>): void {
    this.addLog(this.createLogEntry('DEBUG', message, context, undefined, metadata));
  }

  getLogs(): LogEntry[] {
    return [...this.logs];
  }

  getLogsByLevel(level: keyof LogLevel): LogEntry[] {
    return this.logs.filter(log => log.level === level);
  }

  clearLogs(): void {
    this.logs = [];
  }

  // Metodo per inviare log al server (da implementare se necessario)
  async sendLogsToServer(logs?: LogEntry[]): Promise<void> {
    const logsToSend = logs || this.getLogs();
    
    try {
      // Qui potresti implementare l'invio al server
      // await fetch('/api/logs', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(logsToSend)
      // });
      
      console.info(`${logsToSend.length} log entries ready to be sent to server`);
    } catch (error) {
      console.error('Failed to send logs to server:', error);
    }
  }
}

// Singleton instance
export const logger = new Logger();

// Hook per utilizzare il logger nei componenti React
export const useLogger = () => {
  return logger;
};
