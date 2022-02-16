import React from "react";

const Header = ({onChange}) => {
  return (
    <div className="container flex items-center justify-between mx-auto">
      <div>
        <h2 className="text-4xl font-bold text-white">Pixabay API</h2>
      </div>
      <div className="w-full max-w-xs ml-auto lg:max-w-md ">
        <label htmlFor="search" className="text-sm font-medium text-white">
          Quick Search
        </label>
        <div className="relative mt-1 text-white focus-within:text-gray-600">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <input
            id="search"
            className="block w-full py-2 pl-10 pr-3 leading-5 text-white placeholder-white bg-white border border-transparent rounded-md bg-opacity-20 focus:text-gray-900 focus:outline-none focus:bg-opacity-100 focus:border-transparent focus:placeholder-gray-500 focus:ring-0 sm:text-sm"
            placeholder="Search anything..."
            type="search"
            name="search"
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
