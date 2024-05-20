/* eslint-disable no-unused-vars */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faHistory, faChild, faBrain, faUser, faFlask, faPenFancy, faCogs } from '@fortawesome/free-solid-svg-icons';

export default function Kategori() {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto">
        <h3 className="text-2xl font-bold text-center mb-6">Kategori Buku</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-2">
            <FontAwesomeIcon icon={faBook} className="h-6 w-6 text-gray-600" />
            <h4 className="text-lg font-semibold mb-2">Fiksi</h4>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-2">
            <FontAwesomeIcon icon={faHistory} className="h-6 w-6 text-gray-600" />
            <h4 className="text-lg font-semibold mb-2">Sejarah</h4>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-2">
            <FontAwesomeIcon icon={faChild} className="h-6 w-6 text-gray-600" />
            <h4 className="text-lg font-semibold mb-2">Anak-Anak</h4>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-2">
            <FontAwesomeIcon icon={faBrain} className="h-6 w-6 text-gray-600" />
            <h4 className="text-lg font-semibold mb-2">Sains</h4>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-2">
            <FontAwesomeIcon icon={faUser} className="h-6 w-6 text-gray-600" />
            <h4 className="text-lg font-semibold mb-2">Biografi</h4>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-2">
            <FontAwesomeIcon icon={faFlask} className="h-6 w-6 text-gray-600" />
            <h4 className="text-lg font-semibold mb-2">Teknologi</h4>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-2">
            <FontAwesomeIcon icon={faPenFancy} className="h-6 w-6 text-gray-600" />
            <h4 className="text-lg font-semibold mb-2">Sastra</h4>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-2">
            <FontAwesomeIcon icon={faCogs} className="h-6 w-6 text-gray-600" />
            <h4 className="text-lg font-semibold mb-2">Non-Fiksi</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
