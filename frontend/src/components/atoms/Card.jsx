import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Card({
  id,
  title,
  image,
  author,
  desc,
  className,
  x = "",
}) {
  const navigation = useNavigate();

  return (
    <motion.div
      onClick={() => navigation(`/detail/${id}`)}
      className={`bg-white w-max rounded-lg shadow-sm shrink-0 hover:cursor-pointer relative ${className}`}
      initial={{ x: x ? 80 : 0 }}
      animate={{ x: x ? x : 0 }}
      transition={{ duration: 0.1, ease: "easeIn" }}
    >
      <div className="w-[180px] relative">
        <img src={image} className="w-full min-h-[250px] max-h-[250px] object-cover rounded-sm" alt="buku" />
        {/* description */}
        <div className="absolute z-10 top-0 left-0 flex flex-col p-2 bg-blue-500 min-w-full h-full opacity-0 hover:opacity-100 transition-opacity duration-200 ease-in">
          <div className="overflow-hidden py-3 px-2">
            <p className="text-white text-sm flex-1">{desc.slice(0, 180)}...</p>
          </div>
        </div>
        {/* end-description */}
      </div>

      <div className="flex items-center justify-between">
        <div className="mt-4 max-w-[180px]">
          <h4 className="font-semibold mb-1 line-clamp-2 max-w-full">
            {title}
          </h4>
          <p className="text-sm text-gray-600 line-clamp-1">{author}</p>
        </div>
      </div>
    </motion.div>
  );
}
