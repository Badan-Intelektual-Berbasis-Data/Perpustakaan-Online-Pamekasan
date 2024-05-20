/* eslint-disable no-unused-vars */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBookmark, faBook, faUserPlus, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center ">
          <FontAwesomeIcon icon={faBook} className="h-10 w-10 text-white" />
          <div>
            <h1 className="text-white text-xl">Perpustakaan Umum</h1>
            <span className="text-gray-400 text-sm">Pamekasan</span>
          </div>
          <div className="flex space-x-4 ml-6">
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
        <div className="flex items-center space-x-4">
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
    </nav>
  );
}
