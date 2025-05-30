import { logger } from '../services/logger';

export type ValidationRule<T> = {
  test: (value: T) => boolean;
  message: string;
};

export type ValidationResult = {
  isValid: boolean;
  errors: string[];
};

export class Validator {
  static required<T>(value: T): ValidationResult {
    const isValid = value !== null && value !== undefined && value !== '';
    return {
      isValid,
      errors: isValid ? [] : ['Questo campo è obbligatorio']
    };
  }

  static email(value: string): ValidationResult {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(value);
    return {
      isValid,
      errors: isValid ? [] : ['Inserisci un indirizzo email valido']
    };
  }

  static minLength(value: string, min: number): ValidationResult {
    const isValid = value.length >= min;
    return {
      isValid,
      errors: isValid ? [] : [`Il campo deve contenere almeno ${min} caratteri`]
    };
  }

  static maxLength(value: string, max: number): ValidationResult {
    const isValid = value.length <= max;
    return {
      isValid,
      errors: isValid ? [] : [`Il campo non può superare i ${max} caratteri`]
    };
  }

  static pattern(value: string, pattern: RegExp, message: string): ValidationResult {
    const isValid = pattern.test(value);
    return {
      isValid,
      errors: isValid ? [] : [message]
    };
  }

  static custom<T>(value: T, rules: ValidationRule<T>[]): ValidationResult {
    const errors: string[] = [];
    
    for (const rule of rules) {
      if (!rule.test(value)) {
        errors.push(rule.message);
      }
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  static validateObject<T extends Record<string, any>>(
    obj: T,
    validationRules: Partial<Record<keyof T, (value: any) => ValidationResult>>
  ): { isValid: boolean; errors: Record<keyof T, string[]> } {
    const errors = {} as Record<keyof T, string[]>;
    let isValid = true;

    try {
      for (const [field, validator] of Object.entries(validationRules)) {
        if (validator && typeof validator === 'function') {
          const fieldValue = obj[field as keyof T];
          const result = validator(fieldValue);
          
          if (!result.isValid) {
            errors[field as keyof T] = result.errors;
            isValid = false;
          }
        }
      }
    } catch (error) {
      logger.error('Error during object validation', error as Error, 'Validator.validateObject');
      isValid = false;
    }

    return { isValid, errors };
  }
}

export const useValidation = <T extends Record<string, any>>(
  validationRules: Partial<Record<keyof T, (value: any) => ValidationResult>>
) => {
  const validate = (obj: T) => {
    return Validator.validateObject(obj, validationRules);
  };

  const validateField = (field: keyof T, value: any): ValidationResult => {
    const validator = validationRules[field];
    if (!validator) {
      return { isValid: true, errors: [] };
    }
    
    try {
      return validator(value);
    } catch (error) {
      logger.error(`Error validating field "${String(field)}"`, error as Error, 'useValidation.validateField');
      return { isValid: false, errors: ['Errore di validazione'] };
    }
  };

  return { validate, validateField };
};
