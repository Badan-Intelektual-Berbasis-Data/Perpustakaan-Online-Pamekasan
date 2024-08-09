import React from "react";

export default function Select({options}) {
  return (
    <select
      id="status"
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
    >
        {options.map((option, index) => (
            <option value={option} key={index}>{option}</option>
        ))}
    </select>
  );
}
