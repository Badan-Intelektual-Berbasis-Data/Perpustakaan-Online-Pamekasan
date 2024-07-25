import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export default function Card({ title, image, author }) {
  return (
    <Link
      to={`/detail/${encodeURIComponent(title)}`}
      className="bg-white p-2 rounded-lg shadow-md ml-4 mb-4 shrink-0"
    >
      <div className="w-[160px]">
        <img src={image} className="w-full h-full rounded-sm" alt={title} />
      </div>

      <div className="flex items-center justify-between">
        <div className="mt-4">
          <h4 className="text-lg font-semibold mb-1">{title}</h4>
          <p className="text-sm text-gray-600">{author}</p>
        </div>

        <FontAwesomeIcon
          icon={faBookmark}
          width={24}
          className="text-gray-400"
        />
      </div>
    </Link>
  );
}
