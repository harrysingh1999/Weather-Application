import React from 'react';

const ErrorComponent = ({ errorMessage }) => {
  return (
    <div className="text-center text-2xl text-red-500 font-bold my-4">
      {errorMessage}
    </div>
  );
};

export default ErrorComponent;
