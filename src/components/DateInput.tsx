import React, { Component, RefObject } from 'react';

type DateInputProps = {
  name: string;
  label: string;
  forwardRef: RefObject<HTMLInputElement>;
};

class DateInput extends Component<DateInputProps> {
  render() {
    const { name, label, forwardRef } = this.props;
    return (
      <div className="wrapper">
        <div className="container flex flex-col">
          <label className="input-label" htmlFor={name}>
            {label}
          </label>
          <input ref={forwardRef} className="input" type="date" name={name} />
        </div>
      </div>
    );
  }
}

export default DateInput;
