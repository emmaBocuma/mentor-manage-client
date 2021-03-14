import { useState, FormEvent, ChangeEvent } from 'react';

interface Validation {
  required?: {
    value: boolean;
    message: string;
  };
  pattern?: {
    value: string;
    message: string;
  };
  custom?: {
    isValid: (value: string) => boolean;
    message: string;
  };
}

type Validations<T extends {}> = Partial<Record<keyof T, Validation>>;
type ErrorRecord<T> = Record<keyof T, string>;

const useForm = <T extends Record<keyof T, any> = {}>(options?: {
  initialValues?: {};
  validations?: Validations<T>;
  onSubmit?: () => void;
}) => {
  const [data, setData] = useState<T>((options?.initialValues || {}) as T);
  const [errors, setErrors] = useState<ErrorRecord<T>>({} as ErrorRecord<T>);

  const handleChange = (key: string) => (e: ChangeEvent<HTMLInputElement>) => {
    setErrors({} as ErrorRecord<T>);
    setData({
      ...data,
      [key]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validations = options?.validations;
    if (validations) {
      let valid = true;
      const newErrors = {} as ErrorRecord<T>;
      for (const key in options?.validations) {
        const value = data[key];
        const validation = options?.validations[key];

        // REQUIRED
        if (validation?.required?.value && !value) {
          valid = false;
          newErrors[key] = validation?.required?.message;
        }
        // PATTERN
        const pattern = validation?.pattern;
        if (pattern?.value && !RegExp(pattern.value).test(value)) {
          valid = false;
          newErrors[key] = pattern.message;
        }
        // CUSTOM
        const custom = validation?.custom;
        if (custom?.isValid && !custom.isValid(value)) {
          valid = false;
          newErrors[key] = custom.message;
        }
      }

      if (!valid) {
        setErrors(newErrors);
        return;
      }

      setErrors({} as ErrorRecord<T>);

      if (options?.onSubmit) {
        options.onSubmit();
      }
    }
  };

  return {
    data,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
