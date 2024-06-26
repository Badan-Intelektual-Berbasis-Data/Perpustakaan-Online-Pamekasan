/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faHome } from '@fortawesome/free-solid-svg-icons'; // tambahkan faHome untuk ikon Kunjungan

export default function Kunjungan() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [idAnggota, setIdAnggota] = useState('');
  const [institusi, setInstitusi] = useState('');

  const handleLogin = () => {
    // Logic untuk memproses login dengan ID Anggota dan Institusi
    console.log('Login dengan ID Anggota:', idAnggota, 'dan Institusi:', institusi);
    // Di sini bisa diterapkan logika autentikasi atau navigasi setelah login
  };

  return (
    <div>
      <nav className="bg-gray-600 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faHome} className="h-10 w-10 text-white" />
            <div className="ml-2">
              <h1 className="text-white text-xl font-bold">Kunjungan</h1>
              <span className="text-gray-400 text-sm">Halaman Kunjungan</span>
            </div>
          </div>
        </div>
      </nav>
      <div className="container mx-auto mt-8">
        <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-center">Selamat datang di DINAS PERPUSTAKAAN DAN KEARSIPAN KABUPATEN PAMEKASAN</h2>
          <p className="text-gray-700 mb-4 text-center">Harap isi ID anggota atau nama Anda.</p>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="flex flex-col space-y-1">
              <label htmlFor="idAnggota" className="text-sm font-medium text-gray-900">
                ID Anggota
              </label>
              <input type="text" id="idAnggota" value={idAnggota} onChange={(e) => setIdAnggota(e.target.value)} className="border border-gray-300 rounded-md p-2" placeholder="Masukkan ID anggota Anda" />
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="institusi" className="text-sm font-medium text-gray-900">
                Institusi
              </label>
              <input type="text" id="institusi" value={institusi} onChange={(e) => setInstitusi(e.target.value)} className="border border-gray-300 rounded-md p-2" placeholder="Masukkan nama lembaga" />
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors w-full">
              Masuk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
