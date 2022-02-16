import React from "react";

const SkeletonLoader = () => {
  return (
    <div className="relative mb-8 bg-gray-100 border-gray-200 rounded-md cursor-pointer break-inside-avoid group border-[3px] animate-pulse p-4 space-y-4">
      <div className="w-full bg-gray-200 rounded h-36"></div>
      <div class="w-full bg-gray-200 h-20 rounded"></div>
    </div>
  );
};


export default SkeletonLoader;
