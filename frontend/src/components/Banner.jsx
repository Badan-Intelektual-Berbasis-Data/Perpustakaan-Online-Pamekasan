// eslint-disable-next-line no-unused-vars
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import perpusImage1 from "../assets/Perpus.jpg";
import perpusImage2 from "../assets/Perpus.jpg";
import perpusImage3 from "../assets/Perpus.jpg";
import Container from "./molecules/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Banner = () => {
  return (
    <div className="relative w-full flex flex-col h-[70dvh] justify-center overflow-hidden text-white">
      {/* background gradient */}
      <div className="absolute w-full h-full bg-black bg-opacity-75 -z-20"></div>
      {/* background */}
      <img
        src={perpusImage1}
        className="absolute w-full object-cover h-full -z-30"
        alt="image"
      />
      {/* </div> */}

      {/* content */}
      <Container className="flex">
        {/* previous slide */}
        <div className="h-full w-16 absolute left-0 top-0 flex justify-center items-center hover:cursor-pointer">
          <FontAwesomeIcon icon={faChevronLeft} className="text-white text-3xl"/>
        </div>


        <div>
          <h1 className="text-4xl font-bold">Belajar Ryoiki Tenkai</h1>
          <p className="mt-4 text-gray-300 text-base">Pengetahuan umum</p>
          <p className="line-clamp-4 w-[50ch] mt-4 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            recusandae culpa similique blanditiis, repellendus laborum eos
            deserunt ea rerum aperiam tempora qui sequi, nisi nesciunt fuga
            aspernatur. Maiores, tempore commodi? Aliquid illo iste itaque
            deserunt, consequatur natus facilis cupiditate animi doloribus,
            distinctio quos. Earum consequatur vel nulla iure nihil placeat
            necessitatibus! Nobis quia quisquam illo necessitatibus impedit
            aliquam qui illum!
          </p>
          <div className="flex gap-x-4 mt-12">
            <button className="w-[300px] bg-blue-500 py-2 px-4 text-lg font-medium text-white">
              Pinjam sekarang
            </button>
            <button className="w-[50px] border-4 border-blue-500 text-blue-500">
              <FontAwesomeIcon icon={faBookmark} />
            </button>
          </div>

          {/* slider progress */}

          <div className="flex mt-20 w-1/4 gap-x-2">
            <div className="w-3/4 h-[10px] rounded-md bg-blue-500"></div>
            <div className="w-1/4 h-[10px] rounded-md bg-gray-500"></div>
            <div className="w-1/4 h-[10px] rounded-md bg-gray-500"></div>
          </div>
        </div>


        {/* next slide */}
        <div className="h-full w-16 absolute right-0 top-0 flex justify-center items-center hover:cursor-pointer">
          <FontAwesomeIcon icon={faChevronRight} className="text-white text-3xl"/>
        </div>


      </Container>
    </div>
  );
};

export default Banner;
