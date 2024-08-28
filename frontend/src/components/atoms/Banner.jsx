// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Container from "../molecules/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useMemo } from "react";
import { Link } from "react-router-dom";


export default function Banner() {
  const [activeBanner, setActiveBanner] = useState(0);

  const [bannerData, setBannerData] = useState([
    {
      id: null,
      author_name: "",
      category_name: [],
      genre_name: [],
      backdrop_url: "",
      book_image_url: "",
      desc: "",
      title: "",
      date_published: "",
      date_registered: "",
      author: 0,
      category: [],
      genre: [],
    },
  ]);

  const textVariants = {
    hidden: {
      opacity: 0,
      transition: {
        ease: "easeIn",
        duration: 1,
      },
    },

    show: {
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 2,
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      transition: {
        ease: "easeIn",
        duration: 1,
      },
    },

    show: {
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 1,
      },
    },
  };

  // Direction right => value increases
  const updateBanner = (direction) => {
    if (!bannerData[activeBanner].id) return;

    setActiveBanner(value => {

      if (value >= 2) {
        return 0;
      } else {
        if (direction == "right") {
          return value + 1;
        } else {
          if (value == 0) return 2
          return value - 1;
        }
      }
    });
  };

  useMemo(() => {
    const interval = setInterval(() => updateBanner("right"), 6000);
    const getData = async () => {
      
      await fetch(`${import.meta.env.VITE_BASE_API_URL}/books/book?mixed=True`)
        .then((res) => res.json())
        .then((data) => setBannerData(data));
    };

    getData();

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full flex flex-col h-[72dvh] justify-center overflow-hidden text-white">
      {/* background gradient */}
      <div
        className={`absolute w-full h-full bg-black bg-opacity-75 -z-20 ${
          bannerData[activeBanner].backdrop_url
            ? ""
            : "animate-pulse duration-75 bg-gray-600"
        }`}
      ></div>
      {/* background */}
      <AnimatePresence>
        <motion.img
          initial="hidden"
          animate="show"
          exit="hidden"
          variants={imageVariants}
          key={bannerData[activeBanner].backdrop_url}
          src={bannerData[activeBanner].backdrop_url}
          className="absolute w-full h-full -z-40 bg-black top-0 text-transparent object-fill"
          alt="image"
        />
      </AnimatePresence>

      {/* </div> */}

      {/* content */}
      <Container className="flex">
        {/* previous slide */}
        {bannerData[activeBanner].id && (
          <button
            onClick={() => updateBanner("left")}
            className="h-full w-16 absolute left-0 top-0 flex justify-center items-center"
          >
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="text-white text-3xl hover:cursor-pointer"
            />
          </button>
        )}

        <div>
          <motion.h1
            initial="hidden"
            animate="show"
            exit="hidden"
            key={bannerData[activeBanner].title}
            variants={textVariants}
            className={`text-5xl font-bold line-clamp-1 ${bannerData[activeBanner].id ? '' : 'w-[300px] py-4 bg-gray-600 animate-pulse'}`}
          >
            {bannerData[activeBanner].title}
          </motion.h1>
          <p className="mt-4 text-gray-400 text-base">
            {bannerData[activeBanner].genre_name.join(" - ")}
          </p>
          <motion.p
            initial="hidden"
            animate="show"
            exit="hidden"
            variants={textVariants}
            key={bannerData[activeBanner].id}
            className={`line-clamp-4 w-[50ch] mt-4 leading-relaxed ${bannerData[activeBanner].id ? '' : 'min-w-[50px] bg-gray-600 py-2'}`}
          >
            {bannerData[activeBanner].desc
              ? bannerData[activeBanner].desc
              : ""}
          </motion.p>

          {bannerData[activeBanner].id && (

            
            <div className="flex gap-x-4 mt-12">
            <Link to={`detail/${bannerData[activeBanner].id}`} className="w-[400px] bg-blue-500 py-2 px-4 text-lg font-medium text-white text-center">
              Pinjam sekarang
            </Link>
          </div>
            )
          }

          {/* slider progress */}

          {bannerData[activeBanner].id && (
            <div className="flex mt-20 w-1/4 gap-x-2 max-w-[105px]">
              <button
                onClick={() => setActiveBanner(0)}
                className={`h-[10px] rounded-md transition-all ease-in ${
                  activeBanner == 0 ? "bg-blue-500 w-3/4" : "bg-gray-500 w-1/4"
                }`}
              ></button>
              <button
                onClick={() => setActiveBanner(1)}
                className={`h-[10px] rounded-md transition-all ease-in ${
                  activeBanner == 1 ? "bg-blue-500 w-3/4" : "bg-gray-500 w-1/4"
                }`}
              ></button>
              <button
                onClick={() => setActiveBanner(2)}
                className={`h-[10px] rounded-md transition-all ease-in ${
                  activeBanner == 2 ? "bg-blue-500 w-3/4" : "bg-gray-500 w-1/4"
                }`}
              ></button>
            </div>
          )}
        </div>

        {/* next slide */}
        {bannerData[activeBanner].id && (
          <button
            onClick={() => updateBanner("right")}
            className="h-full w-16 absolute right-0 top-0 flex justify-center items-center"
          >
            <FontAwesomeIcon
              icon={faChevronRight}
              className="text-white text-3xl hover:cursor-pointer"
            />
          </button>
        )}
      </Container>
    </div>
  );
}
