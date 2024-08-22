// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
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
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Search from "./Search";
import useAuth from "../../hooks/useAuth";
import { backdropVariants } from "../../../utils/Consts";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [currentURL, setCurrentURL] = useState("")

  const authenticated = useAuth("", "", false)

  const location = useLocation()

  useEffect(() => {setCurrentURL(location.pathname)}, [location.pathname])

  return (
    <nav className="bg-primary p-4 sticky top-0 left-0 z-30">
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
              <Link
                className={`${
                  currentURL == '/' ? "text-white" : "text-gray-300"
                }`}
                to="/"
              >
                Beranda
              </Link>
              <Link
                className={`${
                  currentURL == "/information" ? "text-white" : "text-gray-300"
                }`}
                to="information"
              >
                Informasi
              </Link>
            </div>
          ) : <Search authenticated={authenticated} searchOpen={searchOpen} setSearchOpen={setSearchOpen} />}
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
          {!authenticated && (
            <div className="flex gap-x-2">
              <Link className="text-white border-white border-2 text-sm px-6 py-2" to="/login">Masuk</Link>
              <Link className="text-black bg-white border-white border-2 text-sm px-6 py-2" to="/register">Daftar</Link>
            </div>
          )}
          {authenticated && 
          <Link to="/profile">
            <div className="rounded-full">
              <img
                className="h-8 w-8 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
          </Link>
          }
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
