import React from "react";

const ImageCard = ({ data }) => {  
  return (
    <div
      className="relative mb-8 bg-gray-100 border border-gray-200 rounded-md cursor-pointer break-inside-avoid group"
      key={data.id}
    >
      <div className="block w-full overflow-hidden bg-gray-100 rounded-md aspect-w-16 aspect-h-9 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-cyan-500">
        <img
          src={data.webformatURL}
          alt={data.type}
          width={data.webformatWidth}
          height={data.webformatHeight}
          className="object-cover w-full h-full transition duration-300 ease-in-out scale-100 pointer-events-none group-hover:scale-110 "
        />
      </div>
      <div className="p-2 space-y-2">
        <div className="flex items-center justify-between w-full">
          <div className="inline-flex items-center mt-2 gap-x-1">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-cyan-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
            <p className="block text-sm font-medium text-gray-900 pointer-events-none">
              {data.user}
            </p>
          </div>
          <div className="inline-flex items-center mt-2 gap-x-1">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-cyan-700"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <p className="block text-sm font-medium text-gray-900 pointer-events-none">
              {data.likes}
            </p>
          </div>
        </div>

        <div className="inline-flex items-start mt-2 gap-x-1">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-cyan-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
              />
            </svg>
          </span>
          <p className="text-sm font-medium text-gray-900 pointer-events-none">
            {data.tags}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
