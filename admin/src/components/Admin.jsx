import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBook, faClipboardList, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Dashboard from '../items/Dashboard';

function Admin() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="flex flex-col min-h-screen bg-gray-600">
      <div className="flex flex-grow">
        <aside className="w-64 bg-gray-600 text-white flex flex-col">
          <div className="px-2 py-4">
            <h2 className="text-xl font-bold text-center">ADMIN</h2>
          </div>
          <nav className="flex flex-col flex-grow px-2">
            <button 
              className={`flex items-center py-1 px-3 mb-1 text-base rounded-lg transition-colors ${activeTab === 'dashboard' ? 'bg-gray-500' : 'hover:bg-gray-700'}`}
              onClick={() => setActiveTab('dashboard')}
            >
              <FontAwesomeIcon icon={faHome} className="mr-1" />
              DASHBOARD
            </button>
            <button 
              className={`flex items-center py-1 px-3 mb-1 text-base rounded-lg transition-colors ${activeTab === 'buku' ? 'bg-gray-500' : 'hover:bg-gray-700'}`}
              onClick={() => setActiveTab('buku')}
            >
              <FontAwesomeIcon icon={faBook} className="mr-1" />
              BUKU
            </button>
            <button 
              className={`flex items-center py-1 px-3 mb-1 text-base rounded-lg transition-colors ${activeTab === 'pengguna' ? 'bg-gray-500' : 'hover:bg-gray-700'}`}
              onClick={() => setActiveTab('pengguna')}
            >
              <FontAwesomeIcon icon={faUser} className="mr-1" />
              PENGGUNA
            </button>
            <button 
              className={`flex items-center py-1 px-3 mb-1 text-base rounded-lg transition-colors ${activeTab === 'peminjam' ? 'bg-gray-500' : 'hover:bg-gray-700'}`}
              onClick={() => setActiveTab('peminjam')}
            >
              <FontAwesomeIcon icon={faClipboardList} className="mr-1" />
              PEMINJAM
            </button>
          </nav>
          <div className="mt-auto px-2 py-4">
            <button className="flex items-center py-1 px-3 mb-1 text-base bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors w-full">
              <FontAwesomeIcon icon={faSignOutAlt} className="mr-1" />
              Keluar
            </button>
          </div>
        </aside>

        <main className="flex-grow bg-gray-400 p-2">
          <Dashboard />
        </main>
      </div>

      <footer className="bg-gray-800 text-white text-center py-2 ml-64">
        <p className="text-xs">PEPUSTAKAAN UMUM DAERAH PAMEKASAN</p>
      </footer>
    </div>
  );
}

export default Admin;
