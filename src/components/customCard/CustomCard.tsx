"use client";

import React from "react";

interface CustomCardProps {
  title: string;
  children: React.ReactNode;
}

const CustomCard: React.FC<CustomCardProps> = ({ title, children }) => {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-6 m-4 transition-transform transform">
      <h2 className="text-xl font-semibold text-white mb-4 border-b-2 border-gray-600 pb-2">
        {title}
      </h2>
      <div className="text-gray-300">{children}</div>
    </div>
  );
};

export default CustomCard;
