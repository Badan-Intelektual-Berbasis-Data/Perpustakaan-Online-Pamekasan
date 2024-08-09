import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faUser, faClipboardList } from '@fortawesome/free-solid-svg-icons';

function Dashboard() {
  return (
    <div className="p-4 max-w-4xl mx-auto mt-11">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-4">
        <div className="bg-gray-600 shadow rounded-lg p-6 flex items-center">
          <FontAwesomeIcon icon={faBook} className="text-4xl text-green-500 mr-4" />
          <div>
            <h2 className="text-lg font-semibold text-white">BUKU</h2>
            <p className="mt-2 text-white text-xl">1.352</p>
          </div>
        </div>
        <div className="bg-gray-600 shadow rounded-lg p-6 flex items-center">
          <FontAwesomeIcon icon={faUser} className="text-4xl text-yellow-500 mr-4" />
          <div>
            <h2 className="text-lg font-semibold text-white">PENGGUNA</h2>
            <p className="mt-2 text-white text-xl">352</p>
          </div>
        </div>
        <div className="bg-gray-600 shadow rounded-lg p-6 flex items-center">
          <FontAwesomeIcon icon={faClipboardList} className="text-4xl text-red-500 mr-4" />
          <div>
            <h2 className="text-lg font-semibold text-white">PEMINJAMAN</h2>
            <p className="mt-2 text-white text-xl">75</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 shadow rounded-lg p-6 flex flex-col sm:flex-row items-start gap-6">
        <div className="flex-grow">
          <h3 className="text-xl font-semibold text-white mb-4">29 AGUSTUS 2024</h3>
          <img src="https://via.placeholder.com/470x220" alt="Statistik" className="rounded-lg mb-4" />
        </div>
        <div className="w-full sm:w-1/3">
          <h3 className="text-lg font-semibold text-white mb-4 text-center">TARGET</h3>
          <div className="mb-4">
            <div className="flex justify-between">
              <h4 className="text-md font-semibold text-white">BUKU</h4>
              <p className="text-md text-white">20/100</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
              <div className="bg-green-500 h-4 rounded-full" style={{ width: '20%' }}></div>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex justify-between">
              <h4 className="text-md font-semibold text-white">PENGGUNA</h4>
              <p className="text-md text-white">15/100</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
              <div className="bg-yellow-500 h-4 rounded-full" style={{ width: '15%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between">
              <h4 className="text-md font-semibold text-white">PEMINJAMAN</h4>
              <p className="text-md text-white">12/100</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
              <div className="bg-red-500 h-4 rounded-full" style={{ width: '12%' }}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="bg-gray-800 shadow rounded-lg flex flex-col sm:flex-row text-center gap-6">
          <div className="flex-grow p-4 border-r border-white ">
            <h4 className="text-lg font-semibold text-green-300">+12</h4>
            <p className="text-xl font-bold text-white">1.456</p>
            <p className="text-white text-sm">TOTAL BUKU</p>
          </div>
          <div className="flex-grow p-4 border-r border-white ">
            <h4 className="text-lg font-semibold text-red-300">-12</h4>
            <p className="text-xl font-bold text-white">761</p>
            <p className="text-white text-sm">TOTAL PENGGUNA</p>
          </div>
          <div className="flex-grow p-4">
            <h4 className="text-lg font-semibold text-green-300">+11</h4>
            <p className="text-xl font-bold text-white">76</p>
            <p className="text-white text-sm">TOTAL PEMINJAMAN</p>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-gray-800 shadow rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4">LAINNYA</h3>
        <h3 className="text-lg font-semibold text-white mb-10">KRITIK DAN SARAN</h3>
      </div>

    </div>
  );
}

export default Dashboard;
