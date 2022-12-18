import React from 'react';

function Button({ buttonProps, children }) {
  return (
    <button
      className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-teal"
      type="submit"
      {...buttonProps}
    >
      {children}
    </button>
  );
}

export default Button;
