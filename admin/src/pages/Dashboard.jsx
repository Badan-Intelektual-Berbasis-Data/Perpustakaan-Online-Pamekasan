import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faUser, faClipboardList } from '@fortawesome/free-solid-svg-icons';

function Dashboard() {
  return (
    <div className="p-1 max-w-4xl mx-auto mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-3">
        <div className="bg-gray-800 shadow rounded-lg p-4 flex items-center">
          <FontAwesomeIcon icon={faBook} className="text-5xl text-green-500 mr-3" />
          <div>
            <h2 className="text-sm font-semibold text-white">BUKU</h2>
            <p className="mt-1 text-white text-lg">1.352</p>
          </div>
        </div>
        <div className="bg-gray-800 shadow rounded-lg p-4 flex items-center">
          <FontAwesomeIcon icon={faUser} className="text-5xl text-yellow-500 mr-3" />
          <div>
            <h2 className="text-sm font-semibold text-white">PENGGUNA</h2>
            <p className="mt-1 text-white text-lg">352</p>
          </div>
        </div>
        <div className="bg-gray-800 shadow rounded-lg p-4 flex items-center">
          <FontAwesomeIcon icon={faClipboardList} className="text-5xl text-red-500 mr-3" />
          <div>
            <h2 className="text-sm font-semibold text-white">PEMINJAMAN</h2>
            <p className="mt-1 text-white text-lg">75</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 shadow rounded-lg p-3 flex flex-col sm:flex-row items-start gap-3">
        <div className="flex-grow">
          <h3 className="text-sm font-semibold text-white mb-2">29 AGUSTUS 2024</h3>
          <img src="https://via.placeholder.com/470x220" alt="Statistik" className="mb-1" />
        </div>
        <div className="w-full sm:w-1/3">
          <h3 className="text-xs font-semibold text-white mt-2 mb-2 text-center">TARGET</h3>
          <div className="mb-1">
            <div className="flex justify-between">
              <h4 className="text-xs font-semibold text-white">BUKU</h4>
              <p className="text-xs text-white">20/100</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '20%' }}></div>
            </div>
          </div>
          <div className="mb-1">
            <div className="flex justify-between">
              <h4 className="text-xs font-semibold text-white">PENGGUNA</h4>
              <p className="text-xs text-white">15/100</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
              <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '15%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between">
              <h4 className="text-xs font-semibold text-white">PEMINJAMAN</h4>
              <p className="text-xs text-white">12/100</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
              <div className="bg-red-500 h-2 rounded-full" style={{ width: '12%' }}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3">
        <div className="bg-gray-800 shadow rounded-lg flex flex-col sm:flex-row text-center gap-4">
          <div className="flex-grow p-3 border-r border-white">
            <h4 className="text-xs font-semibold text-green-300">+12</h4>
            <p className="text-xs font-bold text-white">1.456</p>
            <p className="text-white text-xs">TOTAL BUKU</p>
          </div>
          <div className="flex-grow p-3 border-r border-white">
            <h4 className="text-xs font-semibold text-red-300">-12</h4>
            <p className="text-xs font-bold text-white">761</p>
            <p className="text-white text-xs">TOTAL PENGGUNA</p>
          </div>
          <div className="flex-grow p-3">
            <h4 className="text-xs font-semibold text-green-300">+11</h4>
            <p className="text-xs font-bold text-white">76</p>
            <p className="text-white text-xs">TOTAL PEMINJAMAN</p>
          </div>
        </div>
      </div>

      <div className="mt-3 bg-gray-800 shadow rounded-lg p-3">
        <h3 className="text-xs font-semibold text-white mb-11">KRITIK DAN SARAN</h3>
      </div>
    </div>
  );
}

export default Dashboard;
