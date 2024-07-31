// src/components/Cari.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';
import CariBuku from '../items/CariBuku';

const kategoriList = ['Fiksi', 'Non-Fiksi', 'Sains', 'Teknologi', 'Sejarah', 'Biografi', 'Kesehatan', 'Psikologi', 'Ekonomi', 'Politik', 'Agama'];

function Cari() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <div className="container mx-auto py-4 flex justify-center items-center">
          <div className="flex items-center border border-gray-300 rounded-full w-full max-w-lg md:max-w-xl lg:max-w-2xl mx-4 md:mx-0">
            <input type="text" placeholder="Cari buku..." className="flex-grow p-4 rounded-l-full border-none outline-none" />
            <button className="text-gray-600 px-6 py-2 rounded-r-full flex items-center hover:bg-gray-300 transition-colors duration-300">
              <FontAwesomeIcon icon={faSearch} className="text-lg" />
            </button>
          </div>
        </div>
        <div className="bg-white py-4">
          <div className="container mx-auto px-4 md:px-6 lg:px-12">
            <div className="flex flex-wrap gap-2 md:gap-4 justify-start ml-5">
              {kategoriList.map((kategori, index) => (
                <div key={index} className="bg-gray-100 text-gray-700 py-1 px-3 md:py-2 md:px-4 rounded-full shadow-md text-xs md:text-sm">
                  {kategori}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="container mx-auto py-8 px-4 md:px-6 lg:px-8">
          <CariBuku />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cari;
