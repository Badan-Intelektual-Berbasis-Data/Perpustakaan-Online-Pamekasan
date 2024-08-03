// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, transform } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import perpusImage2 from "../assets/Perpus.jpg";
// import perpusImage3 from "../assets/Perpus.jpg";
import Container from "../molecules/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Banner() {
  const [activeBanner, setActiveBanner] = useState(0);

  const bannerData = [
    {
      title: "Jujutsu Kaisen",
      image_url: "/banner2.jpg",
      genre: ["Petualangan", "Fantasi", "Supranatural"],
      desc: "Yūji Itadori adalah seorang siswa SMA dengan atletisitas yang tidak wajar yang tinggal di Sendai bersama kakeknya. Ia sering menghindari Klub Lari karena keengganannya pada bidang atletik, meskipun dia memiliki bakat bawaan untuk olahraga tersebut.",
    },
    {
      title: "The Quintessential Quintuplets",
      image_url: "/banner3.jpg",
      genre: ["Harem", "Romantis", "Komedi"],
      desc: "Ceritanya mengikuti seorang siswa sekolah menengah bernama Fuutarou Uesugi, yang berasal dari keluarga miskin dan sangat rajin belajar tetapi juga anti-sosial. Suatu hari, dia dipekerjakan sebagai guru oleh sebuah keluarga kaya untuk mengajar kelima putrinya yang semuanya kembar lima. Saudari-saudari ini, yang memiliki kepribadian kompleks dan nilai buruk, awalnya memiliki kesan negatif terhadap Fuutarou. Namun, saat dia membantu mereka meningkatkan nilai dan mengatasi masalah pribadi mereka, hubungannya dengan setiap saudara perempuan mulai berkembang dengan cara yang berbeda, yang akhirnya mengarah pada hubungan romantis dengan salah satu dari mereka. Serial ini dipuji karena karakternya yang menarik, alur cerita yang lucu, dan alur romantis yang menarik.",
    },
    {
      title: "In Another World With My Smartphone",
      image_url: "/banner1.png",
      genre: ["Harem", "Isekai", "Komedi"],
      desc: "Dalam kesalahan yang tidak disengaja, Tuhan secara tidak sengaja menjatuhkan Touya Mochizuki dengan sambaran petir! Sebagai permintaan maaf, Tuhan memberinya satu keinginan dan kesempatan untuk hidup kembali di dunia fantasi magis. Touya dengan senang hati menerima tawaran itu dan, atas satu permintaannya, hanya meminta untuk membawa ponsel cerdasnya saat dia memulai perjalanannya ke dunia misterius ini. Memulai dari awal di dunia baru ini, Touya menyadari bahwa dunia itu penuh dengan sihir—yang dia sukai—dan gadis-gadis cantik berlomba-lomba untuk mendapatkan perhatiannya. Gadis-gadis ini—si kembar Linze dan Elze Silhoueska, Yumina Urnea Belfast, Leen, dan Yae Kokonoe—memberi Touya rasa frustrasi romantis yang tiada habisnya, namun juga persahabatan saat ia menemukan rahasia dunia baru ini.",
    },
  ];

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
    setActiveBanner((value) => {
      if (value == bannerData.length - 1) {
        return 0
      } else {
        return value + 1
      }
    })
  }

  useEffect(() => {
    const interval = setInterval(() => updateBanner('right'), 8000)

    return () => clearInterval(interval)
  });

  return (
    <div className="relative w-full flex flex-col h-[70dvh] justify-center overflow-hidden text-white">
      {/* background gradient */}
      <div className="absolute w-full h-full bg-black bg-opacity-75 -z-20"></div>
      {/* background */}
      <AnimatePresence>
        <motion.img
          initial="hidden"
          animate="show"
          exit="hidden"
          variants={imageVariants}
          key={bannerData[activeBanner].image_url}
          src={bannerData[activeBanner].image_url}
          className="absolute w-full object-center h-full -z-30 bg-black top-0"
          alt="image"
        />
      </AnimatePresence>

      {/* </div> */}

      {/* content */}
      <Container className="flex">
        {/* previous slide */}
        <button onClick={() => updateBanner("left")} className="h-full w-16 absolute left-0 top-0 flex justify-center items-center">
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="text-white text-3xl hover:cursor-pointer"
          />
        </button>

        <div>
          <motion.h1
            initial="hidden"
            animate="show"
            exit="hidden"
            key={bannerData[activeBanner].title}
            variants={textVariants}
            className="text-5xl font-bold"
            >
            {bannerData[activeBanner].title}
          </motion.h1>
          <p className="mt-4 text-gray-400 text-base">
            {bannerData[activeBanner].genre.join(" - ")}
          </p>
          <motion.p
            initial="hidden"
            animate="show"
            exit="hidden"
            variants={textVariants}
            key={bannerData[activeBanner].desc}
            className="line-clamp-4 w-[50ch] mt-4 leading-relaxed"
          >
            {bannerData[activeBanner].desc}
          </motion.p>
          <div className="flex gap-x-4 mt-12">
            <button className="w-[300px] bg-blue-500 py-2 px-4 text-lg font-medium text-white">
              Pinjam sekarang
            </button>
            <button className="w-[50px] border-4 border-blue-500 text-blue-500">
              <FontAwesomeIcon icon={faBookmark} />
            </button>
          </div>

          {/* slider progress */}

          <div className="flex mt-20 w-1/4 gap-x-2 max-w-[150px]">
            <div
              className={`h-[10px] rounded-md hover:cursor-pointer ${
                activeBanner == 0 ? "bg-blue-500 w-3/4" : "bg-gray-500 w-1/4"
              }`}
            ></div>
            <div
              className={`h-[10px] rounded-md hover:cursor-pointer ${
                activeBanner == 1 ? "bg-blue-500 w-3/4" : "bg-gray-500 w-1/4"
              }`}
            ></div>
            <div
              className={`h-[10px] rounded-md hover:cursor-pointer ${
                activeBanner == 2 ? "bg-blue-500 w-3/4" : "bg-gray-500 w-1/4"
              }`}
            ></div>
          </div>
        </div>

        {/* next slide */}
        <button onClick={() => updateBanner("right")} className="h-full w-16 absolute right-0 top-0 flex justify-center items-center">
          <FontAwesomeIcon
            icon={faChevronRight}
            className="text-white text-3xl hover:cursor-pointer"
          />
        </button>
      </Container>
    </div>
  );
}
