import { Validations } from '../types/Validation';
import { ErrorRecord } from '../types/ErrorRecord';

export const FormValidate = <T extends Record<string, never>>(
  data: T,
  validations: Validations<T>
) => {
  const newErrors: ErrorRecord<T> = {};
  console.log('data', data);
  console.log('validations', validations);

  for (const key in validations) {
    const value = data[key];
    const validation = validations[key];

    const paattern = validation?.pattern;
    if (paattern?.value && !RegExp(paattern.value).test(value as string)) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      newErrors[key] = paattern.message;
    }

    const custom = validation?.custom;
    if (custom?.isValid && !custom.isValid(value as string)) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      newErrors[key] = custom.message;
    }

    if (validation?.required?.value && !value) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      newErrors[key] = validation?.required?.message;
    }
  }

  return newErrors;
};
