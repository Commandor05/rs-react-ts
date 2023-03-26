import React, { Component, RefObject } from 'react';

type TextInputProps = {
  name: string;
  label: string;
  forwardRef: RefObject<HTMLInputElement>;
};

class TextInput extends Component<TextInputProps> {
  render() {
    const { name, label, forwardRef } = this.props;
    return (
      <div className="wrapper">
        <div className="container flex flex-col">
          <label className="input-label" htmlFor={name}>
            {label}
          </label>
          <input ref={forwardRef} className="input" type="text" name={name} />
        </div>
      </div>
    );
  }
}

export default TextInput;
