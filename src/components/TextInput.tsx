import React from 'react';
import { Path, UseFormRegister, RegisterOptions, FieldValues } from 'react-hook-form';

type TextInputProps<TFormValue extends FieldValues> = {
  label: string;
  name: Path<TFormValue>;
  register: UseFormRegister<TFormValue>;
  validation?: RegisterOptions;
};

const TextInput = <TFormValues extends Record<string, unknown>>({
  name,
  label,
  register,
  validation,
}: TextInputProps<TFormValues>): JSX.Element => {
  return (
    <div className="wrapper">
      <div className="container flex flex-col">
        <label className="input-label" htmlFor={name}>
          {label}
        </label>
        <input {...register(name, validation)} className="input" type="text" />
      </div>
    </div>
  );
};

export default TextInput;
