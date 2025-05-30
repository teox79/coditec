export interface AppConfig {
  isDevelopment: boolean;
  isProduction: boolean;
  apiBaseUrl: string;
  enableLogging: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
  maxLogEntries: number;
  enableErrorReporting: boolean;
}

const getEnvVar = (name: string, defaultValue: string = ''): string => {
  return import.meta.env[name] || defaultValue;
};

const getEnvBool = (name: string, defaultValue: boolean = false): boolean => {
  const value = getEnvVar(name);
  if (!value) return defaultValue;
  return value.toLowerCase() === 'true' || value === '1';
};

export const appConfig: AppConfig = {
  isDevelopment: import.meta.env.DEV,
  isProduction: import.meta.env.PROD,
  apiBaseUrl: getEnvVar('VITE_API_BASE_URL', '/api'),
  enableLogging: getEnvBool('VITE_ENABLE_LOGGING', true),
  logLevel: (getEnvVar('VITE_LOG_LEVEL', 'info') as AppConfig['logLevel']),
  maxLogEntries: parseInt(getEnvVar('VITE_MAX_LOG_ENTRIES', '1000')),
  enableErrorReporting: getEnvBool('VITE_ENABLE_ERROR_REPORTING', false)
};

// Utility per controllare se una feature è abilitata
export const isFeatureEnabled = (featureName: string): boolean => {
  return getEnvBool(`VITE_FEATURE_${featureName.toUpperCase()}`, false);
};

// Utility per logging condizionale
export const conditionalLog = (level: 'debug' | 'info' | 'warn' | 'error', message: string, ...args: any[]) => {
  if (!appConfig.enableLogging) return;
  
  const levels = ['debug', 'info', 'warn', 'error'];
  const currentLevelIndex = levels.indexOf(appConfig.logLevel);
  const messageLevelIndex = levels.indexOf(level);
  
  if (messageLevelIndex >= currentLevelIndex) {
    console[level](message, ...args);
  }
};
