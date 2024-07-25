// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Anggota = () => {
  const [memberID, setMemberID] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {};

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Masuk Anggota Perpustakaan</h1>
          <p className="text-gray-600 mb-6">Masukan ID anggota serta kata sandi yang diberikan oleh administrator sistem perpustakaan. Jika Anda anggota perpustakaan namun belum memiliki kata sandi, hubungi staf perpustakaan.</p>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="memberID">
              ID Anggota
            </label>
            <input type="text" id="memberID" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter member ID" value={memberID} onChange={(e) => setMemberID(e.target.value)} />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Kata Sandi
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={handleLogin} className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">
            Masuk
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Anggota;
