import React, { Component } from 'react';

type RadioGroupProps = {
  name: string;
  label: string;

  options: string[];
};

type RadioGroupState = {
  value: string | null;
};

class RadioGroup extends Component<RadioGroupProps, RadioGroupState> {
  name: string;
  constructor(props: RadioGroupProps) {
    super(props);
    this.name = props.name;
  }
  state: RadioGroupState = {
    value: null,
  };

  getValue = () => {
    return this.state.value;
  };

  render() {
    const { name, label, options } = this.props;
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
                  name={name}
                  value={title}
                  id={name}
                  onChange={() => this.setState({ value: title })}
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
  }
}

export default RadioGroup;
