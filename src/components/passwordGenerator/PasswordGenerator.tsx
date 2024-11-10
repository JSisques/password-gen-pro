"use client";

import generatePassword from "@/util/passwordManager";

import React, { useState } from "react";

interface PasswordGeneratorProps {
  passwordList: { text: string }[];
  setPasswordList: React.Dispatch<React.SetStateAction<{ text: string }[]>>;
}

const PasswordGenerator: React.FC<PasswordGeneratorProps> = ({
  passwordList,
  setPasswordList,
}) => {
  const [length, setLength] = useState(12);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [noSimilarCharacters, setNoSimilarCharacters] = useState(false);
  const [noDuplicateCharacters, setNoDuplicateCharacters] = useState(false);
  const [noSequentialCharacters, setNoSequentialCharacters] = useState(false);
  const [password, setPassword] = useState("");

  const handleOnClick = () => {
    const newPassword = generatePassword(
      length,
      includeLowercase,
      includeUppercase,
      includeNumbers,
      includeSymbols,
      noSimilarCharacters,
      noDuplicateCharacters,
      noSequentialCharacters
    );
    setPassword(newPassword);
    setPasswordList((prev) => [{ text: newPassword }, ...prev]);
  };

  return (
    <div className="flex flex-col h-full p-4 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md">
      <input
        type="text"
        value={password}
        readOnly
        className="flex-grow mb-4 p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200"
        placeholder="Tu contraseña generada aparecerá aquí"
      />
      <div className="mb-4">
        <label className="block mb-1 font-semibold text-gray-700 dark:text-gray-300">
          Longitud de la contraseña:
          <input
            type="number"
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value))}
            min="8"
            className="ml-2 border rounded p-1 bg-white dark:bg-gray-700"
          />
        </label>
      </div>
      {[
        {
          label: "Incluir minúsculas:",
          state: includeLowercase,
          setState: setIncludeLowercase,
        },
        {
          label: "Incluir mayúsculas:",
          state: includeUppercase,
          setState: setIncludeUppercase,
        },
        {
          label: "Incluir números:",
          state: includeNumbers,
          setState: setIncludeNumbers,
        },
        {
          label: "Incluir símbolos:",
          state: includeSymbols,
          setState: setIncludeSymbols,
        },
        {
          label: "No usar caracteres similares:",
          state: noSimilarCharacters,
          setState: setNoSimilarCharacters,
        },
        {
          label: "No usar caracteres duplicados:",
          state: noDuplicateCharacters,
          setState: setNoDuplicateCharacters,
        },
        {
          label: "No usar caracteres secuenciales:",
          state: noSequentialCharacters,
          setState: setNoSequentialCharacters,
        },
      ].map(({ label, state, setState }) => (
        <div className="mb-4" key={label}>
          <label className="block mb-1 font-semibold text-gray-700 dark:text-gray-300">
            {label}
            <input
              type="checkbox"
              checked={state}
              onChange={() => setState(!state)}
              className="ml-2"
            />
          </label>
        </div>
      ))}
      <button
        onClick={handleOnClick}
        className="w-full py-2 bg-blue-500 dark:bg-blue-700 text-white rounded hover:bg-blue-600 dark:hover:bg-blue-800 transition"
      >
        Generar Contraseña
      </button>
    </div>
  );
};

export default PasswordGenerator;
