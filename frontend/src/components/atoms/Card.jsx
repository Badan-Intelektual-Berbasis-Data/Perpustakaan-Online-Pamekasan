import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { easeIn, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Card({ title, image, author, className, x = "" }) {
  const navigation = useNavigate();

  console.log(x);

  return (
    <motion.div
      onClick={() => navigation(`/detail/${title}`)}
      className={`bg-white rounded-lg shadow-md shrink-0 hover:cursor-pointer ${className}`}
      initial={{ x: 80 }}
      animate={{ x: x }}
      transition={{ duration: 0.1, ease: "easeIn" }}
    >
      {/* description */}
      <div className="absolute z-10 top-0 left-0 flex flex-col p-2 bg-blue-500 w-full h-full opacity-0 hover:opacity-100 transition-opacity duration-200 ease-in">
        <p className="text-white text-sm flex-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam soluta,
          a saepe ad sequi architecto eveniet, officiis unde quis, quos
          dignissimos nesciunt officia pariatur ea ipsa dolorum. Aperiam, error
          perferendis.
        </p>
        <div className="flex justify-end p-2">
          <FontAwesomeIcon
            icon={faBookmark}
            className="text-white text-lg"
          />
        </div>
      </div>
      {/* end-description */}

      <div className="w-[200px] relative">
        <img src={image} className="w-full h-full rounded-sm" alt="buku" />
      </div>

      <div className="flex items-center justify-between">
        <div className="mt-4">
          <h4 className="text-lg font-semibold mb-1 line-clamp-2">{title}</h4>
          <p className="text-sm text-gray-600 line-clamp-1">{author}</p>
        </div>
      </div>
    </motion.div>
  );
}