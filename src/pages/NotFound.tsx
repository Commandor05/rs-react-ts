import React from 'react';

export const NOT_FOUND_MESSAGE = '(404) Page NotFound \\_(^;^)_/';

const NotFound: React.FC = () => {
  return (
    <div className="container flex justify-center items-center h-full">
      <div className="">
        <h1 className="text-5xl font-bold text-center">{NOT_FOUND_MESSAGE}</h1>
      </div>
    </div>
  );
};

export default NotFound;
