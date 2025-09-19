import React from "react";

export const MapView = (): JSX.Element => {
  return (
    <div className="w-full bg-white rounded-[15px] border border-solid border-[#b6bdc6] p-8">
      <div className="flex flex-col items-center justify-center h-[600px] bg-gray-50 rounded-lg">
        <div className="w-16 h-16 bg-[#10b77f] rounded-full flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Interactive Map View</h3>
        <p className="text-gray-600 text-center max-w-md">
          This would display an interactive map showing all reported issues with their locations, 
          status indicators, and clickable markers for detailed information.
        </p>
        <div className="mt-6 grid grid-cols-3 gap-4 text-sm">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
            <span>High Priority</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
            <span>Medium Priority</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            <span>Resolved</span>
          </div>
        </div>
      </div>
    </div>
  );
};