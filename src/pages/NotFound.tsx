import React, { Component } from 'react';
import GeneralLayout from '../layouts/GeneralLayout';

export const NOT_FOUND_MESSAGE = '(404) Page NotFound \\_(^;^)_/';
class NotFound extends Component {
  render() {
    return (
      <GeneralLayout>
        <div className="container flex justify-center items-center h-full">
          <div className="">
            <h1 className="text-5xl font-bold text-center">{NOT_FOUND_MESSAGE}</h1>
          </div>
        </div>
      </GeneralLayout>
    );
  }
}

export default NotFound;
