/* eslint-disable no-unused-vars */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBookmark, faBook } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          {' '}
          {/* Menggunakan flex items-center */}
          <FontAwesomeIcon icon={faBook} className="h-6 w-6 text-white mr-2" />
          <div>
            {' '}
            {/* Membungkus teks dalam sebuah div */}
            <h1 className="text-white text-xl">Perpustakaan Umum</h1>
            <span className="text-gray-400 text-sm">Pamekasan</span>
          </div>
        </div>
        <div className="flex space-x-4">
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
            Bantuan
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Area Anggota
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <FontAwesomeIcon icon={faSearch} className="h-5 w-5 text-gray-300 hover:text-white" />
          <FontAwesomeIcon icon={faBookmark} className="h-5 w-5 text-gray-300 hover:text-white" />
          <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center">
            <span className="mr-2">Daftar</span>
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded">Masuk</button>
        </div>
      </div>
    </nav>
  );
}
