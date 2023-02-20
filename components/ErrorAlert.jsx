import React from 'react';

const ErrorAlert = (props) => {
  return (
    <div
      className="mt-2 mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative"
      role="alert"
    >
      <strong className="font-bold mr-1">Error!</strong>
      <span className="block sm:inline">{props.message}</span>
      <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
        <svg
          onClick={() => setIsVisible(false)}
          className="fill-current h-6 w-6 text-red-500 cursor-pointer"
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        ></svg>
      </span>
    </div>
  );
};

export default ErrorAlert;
