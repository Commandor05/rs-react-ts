import React from 'react';
import { Path, UseFormRegister, RegisterOptions, FieldValues } from 'react-hook-form';

type CheckboxProps<TFormValue extends FieldValues> = {
  label: string;
  name: Path<TFormValue>;
  register: UseFormRegister<TFormValue>;
  validation?: RegisterOptions;
};

const Checkbox = <TFormValues extends Record<string, unknown>>({
  name,
  label,
  register,
  validation,
}: CheckboxProps<TFormValues>): JSX.Element => {
  return (
    <div className="container flex items-center my-3">
      <input
        type="checkbox"
        id={name}
        {...register(name, validation)}
        className="w-5 h-5 text-indigo-700 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500 dark:focus:ring-indigo-700"
      />
      <label htmlFor={name} className="ml-2 text-lg font-medium">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
