import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export default function Card({ title, image, author }) {
  return (
    <Link
      to={`/detail/${encodeURIComponent(title)}`}
      className="bg-white rounded-lg shadow-md shrink-0"
    >
      <div className="w-[220px]">
        <img src={image} className="w-full h-full rounded-sm" alt="buku" />
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
