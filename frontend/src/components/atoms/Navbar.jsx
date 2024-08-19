// eslint-disable-next-line no-unused-vars
import React, { useEffect, useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faSearch,
  faBookmark,
  faBook,
  faUserPlus,
  faSignInAlt,
  faBars,
  faTimes,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(0);
  const [categoriesData, setCategoriesData] = useState([]);
  const [booksData, setBooksData] = useState([]);
  const [activeLink, setActiveLink] = useState(0)
  

  const backdropVariants = {
    hidden: {
      visibility: "hidden",
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },

    visible: {
      visibility: "visible",
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  useEffect(() => {
  
    return async () => {
      await fetch(`${import.meta.env.VITE_BASE_API_URL}/books/category?mixed=true`)
        .then((res) => res.json())
        .then((data) => setCategoriesData(data));

    };
  }, []);

  useEffect(() => {    

    return async () => {

      if (!categoriesData[selectedOption]) return

      
      await fetch(
        `${import.meta.env.VITE_BASE_API_URL}/books/book/?category=${categoriesData[selectedOption].id}`
      )
        .then((res) => res.json())
        .then((data) => setBooksData(data));
    };
  }, [categoriesData, selectedOption]);

  return (
    <nav className="bg-primary p-4">
      {/* Search backdrop */}
      <motion.div
        initial="hidden"
        animate={searchOpen ? "visible" : "hidden"}
        variants={backdropVariants}
        className="fixed top-0 left-0 min-h-screen w-full bg-black z-20 bg-opacity-75"
        onClick={() => setSearchOpen(false)}
      ></motion.div>

      <div className="container mx-auto flex justify-between items-center relative">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faBook} className="h-10 w-10 text-white" />
          <div className="ml-2">
            <h1 className="text-white text-xl font-bold">Perpustakaan Umum</h1>
            <span className="text-gray-400 text-sm">Pamekasan</span>
          </div>
        </div>

        <AnimatePresence>
          {!searchOpen ? (
            <div className="flex items-center gap-x-12 text-white">
              <Link onClick={() => setActiveLink(0)} className={`${activeLink == 0 ? 'text-white' : 'text-gray-300'}`} to="/">Beranda</Link>
              <Link onClick={() => setActiveLink(1)} className={`${activeLink == 1 ? 'text-white' : 'text-gray-300'}`} to="information">Informasi</Link>
            </div>
          ) : (
            <motion.div
              initial="visible"
              animate={searchOpen ? "visible" : "hidden"}
              variants={backdropVariants}
              className="bg-white absolute z-30 top-0 left-0 w-full rounded-md"
            >
              <div
                className="flex gap-x-20 items-center"
                onBlur={() => setSearchOpen(false)}
              >
                <div className="flex items-center">
                  <FontAwesomeIcon
                    icon={faBook}
                    className="h-10 w-10 text-gray-600"
                  />
                  <div className="ml-2">
                    <h1 className="text-black text-xl font-bold">
                      Perpustakaan Umum
                    </h1>
                    <span className="text-gray-500 text-sm">Pamekasan</span>
                  </div>
                </div>

                <div className="flex-1 flex items-center max-w-[800px] bg-gray-200 rounded-md px-4">
                  <FontAwesomeIcon icon={faSearch} className="text-gray-500" />
                  <input
                    type="text"
                    className="border-none outline-none w-full p-2 bg-transparent text-sm"
                    placeholder="Cari buku"
                  />
                </div>

                <Link to="/profile">
                  <div className="rounded-full">
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                </Link>
              </div>

              <div className="flex gap-x-20 px-16 py-8 items-start">
                <div className="flex flex-col items-start gap-y-[20px]">
                  {categoriesData.length == 0 && (
                    <>
                    <button className="min-w-[200px] bg-gray-300 py-2 animate-pulse"></button>
                    <button className="min-w-[200px] bg-gray-300 py-2 animate-pulse"></button>
                    <button className="min-w-[200px] bg-gray-300 py-2 animate-pulse"></button>
                    <button className="min-w-[200px] bg-gray-300 py-2 animate-pulse"></button>
                    <button className="min-w-[200px] bg-gray-300 py-2 animate-pulse"></button>
                    </>
                  )}
                  {categoriesData.length >= 1 &&
                    categoriesData.map((category, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedOption(index)}
                        className={`${
                          selectedOption == index
                            ? "font-medium"
                            : "font-normal"
                        }`}
                      >
                        {category.name}
                      </button>
                    ))}
                  
                </div>

                {/* Search Result */}
                <div className="flex-1 flex flex-col gap-y-[20px] text-gray-700 text-base">
                  {booksData.length == 0 && Array.from({length : 10}, () =>  (
                   <>
                     <button className="flex justify-between items-center">
                      <h3 className="w-1/2 py-2 bg-gray-300 animate-pulse"></h3>
                      <h3 className="w-[100px] py-2 bg-gray-300 animate-pulse"></h3>
                    </button>
                   </>
                  ))}
                  {booksData &&
                    booksData.map((book, index) => (
                      <button
                        key={index}
                        className="flex justify-between items-center"
                      >
                        <h3>{book.title}</h3>
                        <h3>{book.author_name}</h3>
                      </button>
                    ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="hidden md:flex items-center gap-x-6 ">
          <button onClick={() => setSearchOpen(true)}>
            <FontAwesomeIcon
              icon={faSearch}
              className="h-5 w-5 text-gray-300 hover:text-white"
            />
          </button>
          <Link to="/simpan">
            <FontAwesomeIcon
              icon={faBell}
              className="h-5 w-5 text-gray-300 hover:text-white"
            />
          </Link>
          <Link to="/profile">
            <div className="rounded-full">
              <img
                className="h-8 w-8 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            <FontAwesomeIcon
              icon={menuOpen ? faTimes : faBars}
              className="h-6 w-6"
            />
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden mt-2">
          <Link to="/" className="block text-gray-300 hover:text-white mt-2">
            Beranda
          </Link>
          <Link
            to="/kunjungan"
            className="block text-gray-300 hover:text-white mt-2"
          >
            Kunjungan
          </Link>
          <Link
            to="/information"
            className="block text-gray-300 hover:text-white mt-2"
          >
            Informasi
          </Link>
          <Link
            to="/berita"
            className="block text-gray-300 hover:text-white mt-2"
          >
            Berita
          </Link>
          <Link
            to="/bantuan"
            className="block text-gray-300 hover:text-white mt-2"
          >
            Bantuan
          </Link>
          <div className="flex items-center space-x-4 mt-4">
            <Link to="/search">
              <FontAwesomeIcon
                icon={faSearch}
                className="h-5 w-5 text-gray-300 hover:text-white"
              />
            </Link>
            <Link to="/simpan">
              <FontAwesomeIcon
                icon={faBookmark}
                className="h-5 w-5 text-gray-300 hover:text-white"
              />
            </Link>
            <Link to="/akun">
              <button className="bg-red-500 text-white p-2 rounded flex items-center">
                <FontAwesomeIcon icon={faUserPlus} className="h-5 w-5" />
              </button>
            </Link>
            <Link to="/login">
              <button className="bg-blue-500 text-white p-2 rounded flex items-center">
                <FontAwesomeIcon icon={faSignInAlt} className="h-5 w-5" />
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
