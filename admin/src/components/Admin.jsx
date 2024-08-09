import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faAddressBook, faUser, faBook, faUsers, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Dashboard from '../items/Dashboard';

function Admin() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="flex flex-col min-h-screen bg-gray-600">
      <div className="flex flex-grow">
        <aside className="w-64 bg-gray-600 text-white flex flex-col">
          <div className="px-4 py-6">
            <h2 className="text-2xl font-bold text-center">ADMIN</h2>
          </div>
          <nav className="flex flex-col flex-grow px-4">
            <button 
              className={`flex items-center py-2 px-4 mb-2 text-lg rounded-lg transition-colors ${activeTab === 'dashboard' ? 'bg-gray-500' : 'hover:bg-gray-700'}`}
              onClick={() => setActiveTab('dashboard')}
            >
              <FontAwesomeIcon icon={faHome} className="mr-2" />
              Dashboard
            </button>
            <button 
              className={`flex items-center py-2 px-4 mb-2 text-lg rounded-lg transition-colors ${activeTab === 'kontak' ? 'bg-gray-500' : 'hover:bg-gray-700'}`}
              onClick={() => setActiveTab('kontak')}
            >
              <FontAwesomeIcon icon={faAddressBook} className="mr-2" />
              Kontak
            </button>
            <button 
              className={`flex items-center py-2 px-4 mb-2 text-lg rounded-lg transition-colors ${activeTab === 'pengguna' ? 'bg-gray-500' : 'hover:bg-gray-700'}`}
              onClick={() => setActiveTab('pengguna')}
            >
              <FontAwesomeIcon icon={faUser} className="mr-2" />
              Pengguna
            </button>
            <button 
              className={`flex items-center py-2 px-4 mb-2 text-lg rounded-lg transition-colors ${activeTab === 'peminjam' ? 'bg-gray-500' : 'hover:bg-gray-700'}`}
              onClick={() => setActiveTab('peminjam')}
            >
              <FontAwesomeIcon icon={faUsers} className="mr-2" />
              Peminjam
            </button>
            <button 
              className={`flex items-center py-2 px-4 mb-2 text-lg rounded-lg transition-colors ${activeTab === 'buku' ? 'bg-gray-500' : 'hover:bg-gray-700'}`}
              onClick={() => setActiveTab('buku')}
            >
              <FontAwesomeIcon icon={faBook} className="mr-2" />
              Buku
            </button>
          </nav>
          <div className="mt-auto px-4 py-6">
            <button className="flex items-center py-2 px-4 mb-2 text-lg bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors w-full">
              <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
              Keluar
            </button>
          </div>
        </aside>

        <main className="flex-grow bg-gray-400 p-4">
          <Dashboard />
        </main>
      </div>

      <footer className="bg-gray-800 text-white text-center py-4 ml-64">
        <p className="text-sm">PEPUSTAKAAN UMUM DAERAH PAMEKASAN</p>
      </footer>
    </div>
  );
}

export default Admin;
