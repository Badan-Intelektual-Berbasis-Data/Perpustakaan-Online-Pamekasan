import React from "react";

export default function Input({type, name="", placeholder="", maxLength="", minLength="", required=true, value=""}) {
  return (
    <input
      type={type}
      name={name}
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      placeholder={placeholder}
      maxLength={maxLength}
      minLength={minLength}
      required={required}
      defaultValue={value}
    />
  );
}
