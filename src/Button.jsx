import React from 'react'

function Button({name}) {
  return (
    <div>
      <button className="rounded-xl font-semibold  duration-300 bg-gray-300 hover:bg-gray-500 mx-2 p-2 hover:text-white">
        {name}
      </button>
    </div>
  );
}

export default Button;
