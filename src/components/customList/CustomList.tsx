"use client";

import React from "react";

interface CustomListProps {
  items: { text: string }[];
  className?: string;
}

const CustomList = ({ items, className }: CustomListProps) => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div
      className={`w-full ${className} p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md`}
    >
      <ul className="border-b mb-4">
        <li className="flex items-center justify-between font-bold text-lg text-gray-800 dark:text-gray-200">
          <span className="mr-2">Contraseñas</span>
          <span className="mr-2">Acciones</span>
        </li>
      </ul>
      {items.map((item, index) => (
        <div key={index} className="py-2">
          <li
            onClick={() => copyToClipboard(item.text)}
            className="flex items-center justify-between transition bg-white dark:bg-gray-700 rounded-lg p-2 hover:shadow-lg cursor-pointer"
          >
            <span className="mr-2 text-gray-700 dark:text-gray-300 font-semibold overflow-x-auto whitespace-nowrap">
              {item.text}
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation(); // Evita que el click en el botón copie el texto
                copyToClipboard(item.text);
              }}
              className="text-blue-500 hover:text-blue-700 transition"
              aria-label="Copiar al portapapeles"
            >
              📋
            </button>
          </li>
          {index < items.length - 1 && (
            <hr className="my-2 border-gray-300 dark:border-gray-600" />
          )}
        </div>
      ))}
    </div>
  );
};

export default CustomList;
