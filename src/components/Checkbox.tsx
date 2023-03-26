import React, { Component, RefObject } from 'react';

type CheckboxProps = {
  name: string;
  label: string;
  forwardRef: RefObject<HTMLInputElement>;
};

class Checkbox extends Component<CheckboxProps> {
  render() {
    const { name, label, forwardRef } = this.props;
    return (
      <div className="container flex items-center my-3">
        <input
          type="checkbox"
          name={name}
          id={name}
          ref={forwardRef}
          className="w-5 h-5 text-indigo-700 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500 dark:focus:ring-indigo-700"
        />
        <label htmlFor={name} className="ml-2 text-lg font-medium">
          {label}
        </label>
      </div>
    );
  }
}

export default Checkbox;
