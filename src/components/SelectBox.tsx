import React, { forwardRef } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { UserFormValues } from './UserForm';

type SelectBoxProps = {
  name: string;
  label: string;
  options: string[][];
};

const SelectBox = forwardRef<
  HTMLSelectElement,
  SelectBoxProps & ReturnType<UseFormRegister<UserFormValues>>
>(({ onChange, onBlur, name, label, options }, ref) => (
  <div className="wrapper">
    <div className="container flex flex-col">
      <label className="input-label" htmlFor={name}>
        {label}
      </label>
      <select className="input" name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
        {options.map(([value, title]) => (
          <option key={value} value={value}>
            {title}
          </option>
        ))}
      </select>
    </div>
  </div>
));

export default SelectBox;
