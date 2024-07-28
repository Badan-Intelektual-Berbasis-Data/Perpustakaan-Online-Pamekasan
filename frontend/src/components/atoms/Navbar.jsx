// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// eslint-disable-next-line no-unused-vars
import { faSearch, faBookmark, faBook, faUserPlus, faSignInAlt, faBars, faTimes, faBell } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

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
        </div>

        <div className='flex items-center gap-x-12 text-white'>
          <p>Beranda</p>
          <p>Kunjungan</p>
          <p>Informasi</p>
        </div>


        <div className="hidden md:flex items-center gap-x-6 ">
          <Link to="/cari">
            <FontAwesomeIcon icon={faSearch} className="h-5 w-5 text-gray-300 hover:text-white" />
          </Link>
          <Link to="/simpan">
            <FontAwesomeIcon icon={faBell} className="h-5 w-5 text-gray-300 hover:text-white" />
          </Link>
          <Link to="/profile">
            <div className='rounded-full'>
            <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />            
            </div>
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} className="h-6 w-6" />
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden mt-2">
          <Link to="/" className="block text-gray-300 hover:text-white mt-2">
            Beranda
          </Link>
          <Link to="/kunjungan" className="block text-gray-300 hover:text-white mt-2">
            Kunjungan
          </Link>
          <Link to="#" className="block text-gray-300 hover:text-white mt-2">
            Informasi
          </Link>
          <Link to="#" className="block text-gray-300 hover:text-white mt-2">
            Berita
          </Link>
          <Link to="#" className="block text-gray-300 hover:text-white mt-2">
            Bantuan
          </Link>
          <div className="flex items-center space-x-4 mt-4">
            <Link to="/cari">
              <FontAwesomeIcon icon={faSearch} className="h-5 w-5 text-gray-300 hover:text-white" />
            </Link>
            <Link to="/simpan">
              <FontAwesomeIcon icon={faBookmark} className="h-5 w-5 text-gray-300 hover:text-white" />
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
