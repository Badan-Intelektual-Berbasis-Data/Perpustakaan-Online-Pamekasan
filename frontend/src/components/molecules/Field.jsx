import React from "react";

export default function Field({title, children}) {
  return (
    <div>
      <label
        className="block text-gray-700 font-medium mb-2"
      >
        {title}
      </label>
      {children}
    </div>
  );
}
