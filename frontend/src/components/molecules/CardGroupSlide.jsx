import React, { useState } from "react";
import Card from "../atoms/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function CardGroupSlide({ title, data = [] }) {
  const [x, setX] = useState(80);
  const [index, setIndex] = useState(1)

  const handleSlide = (direction) => {
    console.log(index);

    if (direction == "RIGHT" && index != data.length - 4) {
      setX(value => value - 232);
      setIndex(currentIndex => currentIndex + 1)
    } else if (direction == "LEFT" && x < 80) {
      setIndex(currentIndex => currentIndex - 1)
      setX(value => value + 232);
    }
  };

  return (
    <div className="flex relative overflow-hidden">

      <div className={`absolute top-0 left-0 h-full w-16 flex justify-center items-center z-10 hover:bg-black hover:bg-opacity-25 ${x < 80 ? 'opacity-100' : 'opacity-0'}`}>
        <div onClick={() => handleSlide("LEFT")}>
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="text-blue-500 text-3xl hover:cursor-pointer"
          />
        </div>
      </div>

      {/* start content */}
      {/* sub by 232 */}
      <div>
        <h2 className="text-3xl font-semibold mb-8 ml-20">{title}</h2>
        <div className="flex gap-x-8">
          {data &&
            data.map((item, index) => (
              <Card
                x={x}
                key={index}
                className="translate-x-[-614px]"
                {...item}
              />
            ))}
        </div>
      </div>
      {/* end content */}

      <div className={`absolute top-0 right-0 h-full w-16 flex justify-center items-center  hover:bg-black hover:bg-opacity-25 z-10 ${index != data.length - 4 ? 'opacity-100' : 'opacity-0'}`}>
        <div onClick={() => handleSlide("RIGHT")}>
          <FontAwesomeIcon
            icon={faChevronRight}
            className="text-blue-500 text-3xl hover:cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
