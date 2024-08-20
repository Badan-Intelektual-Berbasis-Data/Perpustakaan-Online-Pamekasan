import { faSearch, faBook } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import React, { useState, useEffect, useMemo } from 'react'
import { backdropVariants } from '../../../utils/Consts'
import { Link } from 'react-router-dom'

export default function Search({searchOpen, setSearchOpen}) {

    const [categories, setCategories] = useState([])
    const [booksData, setBooksData] = useState([])
    const [selectedOption, setSelectedOption] = useState(0);


  async function getData(){
    
    if (!categories[selectedOption]) return;

      await fetch(
        `${import.meta.env.VITE_BASE_API_URL}/books/book/?category=${
          categories[selectedOption].id
        }`
      )
        .then((res) => res.json())
        .then((data) => setBooksData(data));
}

async function getCategories() {
  await fetch(`${import.meta.env.VITE_BASE_API_URL}/books/category`)
  .then(res => res.json())
  .then(data => setCategories(data))
}


useEffect(() => {
    getCategories()
}, []) 


useEffect(() => {
  if (searchOpen){
    getData()
  }
}, [categories])
  


  return (
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
        {categories.map((category, index) => (
            <button
            key={index}
            onClick={() => setSelectedOption(index)}
            className={`${
              selectedOption == index ? "font-medium" : "font-normal"
            }`}
          >
            {category.name}
          </button>
        ))}
      
     
      </div>

      {/* Search Result */}
      <div className="flex-1 flex flex-col gap-y-[20px] text-gray-700 text-base">
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
  )
}
