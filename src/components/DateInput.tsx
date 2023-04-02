import React from 'react';
import { Path, UseFormRegister, RegisterOptions, FieldValues } from 'react-hook-form';

type DateInputProps<TFormValue extends FieldValues> = {
  label: string;
  name: Path<TFormValue>;
  register: UseFormRegister<TFormValue>;
  validation?: RegisterOptions;
};

const DateInput = <TFormValues extends Record<string, unknown>>({
  name,
  label,
  register,
  validation,
}: DateInputProps<TFormValues>): JSX.Element => {
  return (
    <div className="wrapper">
      <div className="container flex flex-col">
        <label className="input-label" htmlFor={name}>
          {label}
        </label>
        <input {...register(name, validation)} id={name} className="input" type="date" />
      </div>
    </div>
  );
};

export default DateInput;
