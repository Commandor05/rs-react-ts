import { Validations } from '../types/Validation';
import { ErrorRecord } from '../types/ErrorRecord';

export const FormValidate = <T extends Record<keyof T, unknown>>(
  data: Partial<T>,
  validations: Validations<T>
) => {
  const newErrors: ErrorRecord<T> = {};

  for (const key in validations) {
    const value = data[key];
    const validation = validations[key];

    const paattern = validation?.pattern;
    if (paattern?.value && !RegExp(paattern.value).test(value as string)) {
      newErrors[key] = paattern.message;
    }

    const custom = validation?.custom;
    if (custom?.isValid && !custom.isValid(value as string)) {
      newErrors[key] = custom.message;
    }

    if (validation?.required?.value && !value) {
      newErrors[key] = validation?.required?.message;
    }
  }

  return newErrors;
};
