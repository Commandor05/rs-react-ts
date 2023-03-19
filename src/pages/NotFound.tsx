import React, { Component } from 'react';
import GeneralLayout from '../layouts/GeneralLayout';

class NotFound extends Component {
  render() {
    return (
      <GeneralLayout>
        <div className="container flex justify-center items-center h-full">
          <div className="">
            <h2 className="text-5xl font-bold text-center">(404) Page NotFound \_(^;^)_/</h2>
          </div>
        </div>
      </GeneralLayout>
    );
  }
}

export default NotFound;
