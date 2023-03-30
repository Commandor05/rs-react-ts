import React, { Component, RefObject } from 'react';

type SelectBoxProps = {
  name: string;
  label: string;
  forwardRef: RefObject<HTMLSelectElement>;
  options: string[][];
};

class SelectBox extends Component<SelectBoxProps> {
  render() {
    const { name, label, forwardRef, options } = this.props;
    return (
      <div className="wrapper">
        <div className="container flex flex-col">
          <label className="input-label" htmlFor={name}>
            {label}
          </label>
          <select className="input" name={name} ref={forwardRef}>
            {options.map(([value, title]) => (
              <option key={value} value={value}>
                {title}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}

export default SelectBox;
