import React from 'react';

const Spinner: React.FC = () => {
  return (
    <div className="grid justify-center items-center">
      <div className="h-12 w-12 rounded-full border-8 border-t-8 border-gray-300 border-t-indigo-500 animate-spin"></div>
    </div>
  );
};

export default Spinner;
