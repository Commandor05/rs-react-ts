import React from 'react';
import { Path, UseFormRegister, RegisterOptions, FieldValues } from 'react-hook-form';

type RadioGroupProps<TFormValue extends FieldValues> = {
  label: string;
  name: Path<TFormValue>;
  register: UseFormRegister<TFormValue>;
  validation?: RegisterOptions;
  options: string[];
};

const RadioGroup = <TFormValues extends Record<string, unknown>>({
  name,
  label,
  register,
  options,
  validation,
}: RadioGroupProps<TFormValues>): JSX.Element => {
  return (
    <div className="wrapper w-fit">
      <div className="container flex flex-col">
        <label className="input-label" htmlFor={name}>
          {label}
        </label>
        <div className="flex">
          {options.map((title) => (
            <div key={title} className="container flex items-center mr-4">
              <input
                type="radio"
                value={title}
                id={`${name}-${title}`}
                data-testid={`${name}-${title}`}
                {...register(name, validation)}
                className="w-5 h-5 text-indigo-700 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500 dark:focus:ring-indigo-700"
              />
              <label htmlFor={name} className="ml-2 text-lg font-medium">
                {title}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RadioGroup;
