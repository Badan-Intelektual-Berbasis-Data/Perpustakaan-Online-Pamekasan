/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBookmark, faBook, faUserPlus, faSignInAlt, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faBook} className="h-10 w-10 text-white" />
          <div className="ml-2">
            <h1 className="text-white text-xl font-bold">Perpustakaan Umum</h1>
            <span className="text-gray-400 text-sm">Pamekasan</span>
          </div>
          <div className="hidden md:flex space-x-4 ml-6">
            <a href="#" className="text-gray-300 hover:text-white">
              Beranda
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              Kunjungan
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              Informasi
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              Berita
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              Bantuan
            </a>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <FontAwesomeIcon icon={faSearch} className="h-5 w-5 text-gray-300 hover:text-white" />
          <FontAwesomeIcon icon={faBookmark} className="h-5 w-5 text-gray-300 hover:text-white" />
          <button className="bg-red-500 text-white p-2 rounded flex items-center">
            <FontAwesomeIcon icon={faUserPlus} className="h-5 w-5" />
          </button>
          <button className="bg-blue-500 text-white p-2 rounded flex items-center">
            <FontAwesomeIcon icon={faSignInAlt} className="h-5 w-5" />
          </button>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} className="h-6 w-6" />
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden mt-2">
          <a href="#" className="block text-gray-300 hover:text-white mt-2">
            Beranda
          </a>
          <a href="#" className="block text-gray-300 hover:text-white mt-2">
            Kunjungan
          </a>
          <a href="#" className="block text-gray-300 hover:text-white mt-2">
            Informasi
          </a>
          <a href="#" className="block text-gray-300 hover:text-white mt-2">
            Berita
          </a>
          <a href="#" className="block text-gray-300 hover:text-white mt-2">
            Bantuan
          </a>
          <div className="flex items-center space-x-4 mt-4">
            <FontAwesomeIcon icon={faSearch} className="h-5 w-5 text-gray-300 hover:text-white" />
            <FontAwesomeIcon icon={faBookmark} className="h-5 w-5 text-gray-300 hover:text-white" />
            <button className="bg-red-500 text-white p-2 rounded flex items-center">
              <FontAwesomeIcon icon={faUserPlus} className="h-5 w-5" />
            </button>
            <button className="bg-blue-500 text-white p-2 rounded flex items-center">
              <FontAwesomeIcon icon={faSignInAlt} className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
