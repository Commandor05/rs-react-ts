import React from 'react';
import { Path, UseFormRegister, RegisterOptions, FieldValues } from 'react-hook-form';

type SelectBoxProps<TFormValue extends FieldValues> = {
  name: Path<TFormValue>;
  label: string;
  register: UseFormRegister<TFormValue>;
  validation?: RegisterOptions;
  options: string[][];
};

const SelectBox = <TFormValues extends Record<string, unknown>>({
  name,
  label,
  options,
  register,
  validation,
}: SelectBoxProps<TFormValues>): JSX.Element => {
  return (
    <div className="wrapper">
      <div className="container flex flex-col">
        <label className="input-label" htmlFor={name}>
          {label}
        </label>
        <select className="input" {...register(name, validation)}>
          {options.map(([value, title]) => (
            <option key={value} value={value}>
              {title}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SelectBox;
