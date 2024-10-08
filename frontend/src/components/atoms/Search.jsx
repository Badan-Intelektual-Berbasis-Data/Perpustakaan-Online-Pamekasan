import { faSearch, faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { backdropVariants } from "../../../utils/Consts";
import { Link, useNavigate } from "react-router-dom";
import useDebounce from "../../hooks/useDebounce";

export default function Search({ searchOpen, setSearchOpen, authenticated }) {
  const [booksData, setBooksData] = useState([]);
  const [filter, setFilter] = useState("title");
  const [searchValue, setSearchValue] = useState("");

  const navigate = useNavigate()

  async function getData() {
    await fetch(
      `${
        import.meta.env.VITE_BASE_API_URL
      }/books/book/?search=${searchValue}&by=${filter}`
    )
      .then((res) => {
        if (res.status == 404) {
          setBooksData([])
        } else {
          return res.json()
        }})
        
      .then((data) => setBooksData(data));
  }

  useDebounce(() => {
    getData();
  }, [searchValue, filter]);

  function handleClick(id) {
    navigate(`/detail/${id}`)
    setSearchOpen(false)
  }

  return (
    <motion.div
      initial="visible"
      animate={searchOpen ? "visible" : "hidden"}
      variants={backdropVariants}
      className="bg-white absolute z-30 top-0 left-0 w-full rounded-md"
    >
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faBook} className="h-10 w-10 text-gray-600" />
          <div className="ml-2">
            <h1 className="text-black text-xl font-bold">Perpustakaan Umum</h1>
            <span className="text-gray-500 text-sm">Pamekasan</span>
          </div>
        </div>

        <div className="flex-1 flex items-center max-w-[550px] bg-gray-200 rounded-md px-4">
          <FontAwesomeIcon icon={faSearch} className="text-gray-500" />
          <input
            type="text"
            className="border-none outline-none w-full p-2 bg-transparent text-sm"
            placeholder="Cari buku"
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>

        {!authenticated && (
          <div className="flex gap-x-2">
            <Link
              className="text-white bg-black border-white border-2 text-sm px-6 py-2"
              to="/login"
            >
              Masuk
            </Link>
            <Link
              className="text-black bg-white border-black border-2 text-sm px-6 py-2"
              to="/register"
            >
              Daftar
            </Link>
          </div>
        )}
        {authenticated && (
          <Link to="/profile">
            <div className="rounded-full">
              <img
                className="h-8 w-8 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
          </Link>
        )}
      </div>

      <div className="flex gap-x-20 px-16 py-8 items-start">
        <div className="flex flex-col items-start gap-y-[20px]">
          <button
            onClick={() => setFilter("title")}
            className={`${filter == "title" ? "font-medium" : "font-normal"}`}
          >
            By title
          </button>
          <button
            onClick={() => setFilter("author")}
            className={`${filter == "author" ? "font-medium" : "font-normal"}`}
          >
            By author
          </button>
        </div>

        {/* Search Result */}
        <div className="flex-1 flex flex-col gap-y-[20px] text-gray-700 text-base">
          {!booksData && <p>Hasil tidak ditemukan</p>}
          {booksData &&
            booksData.map((book, index) => (
              <button key={index} onClick={() => handleClick(book.id)} className="flex justify-between items-center">
                <h3>{book.title}</h3>
                <h3>{book.author_name}</h3>
              </button>
            ))}
        </div>
      </div>
    </motion.div>
  );
}
