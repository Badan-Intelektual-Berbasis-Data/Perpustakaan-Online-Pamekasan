import React from 'react';
import { useLocation } from 'react-router-dom';

function DetailPengguna() {
  const location = useLocation();
  const { user } = location.state || {};

  if (!user) {
    return <p>Data pengguna tidak ditemukan.</p>;
  }

  return (
    <div className="min-w-full">
      <header className="bg-blue-800 text-white text-center py-3 mb-4">
        <h2 className="text-xl font-bold">DETAIL PENGGUNA</h2>
      </header>
      <div className="flex p-6">
        <img
          src="https://via.placeholder.com/200" 
          alt={user.pengguna}
          className="w-50 h-50 object-cover mr-6"
        />
        <div>
          <div className="flex mb-3">
            <p className="text-xl font-bold text-gray-800 w-40 uppercase">NAMA:</p>
            <p className="text-xl font-bold text-gray-800 uppercase">{user.pengguna}</p>
          </div>
          <div className="flex mb-3">
            <p className="text-xl font-bold text-gray-800 w-40 uppercase">STATUS:</p>
            <p className="text-xl font-bold text-gray-800 uppercase">{user.status}</p>
          </div>
          <div className="flex mb-3">
            <p className="text-xl font-bold text-gray-800 w-40 uppercase">ALAMAT:</p>
            <p className="text-xl font-bold text-gray-800 uppercase">{user.alamat}</p>
          </div>
          <div className="flex mb-3">
            <p className="text-xl font-bold text-gray-800 w-40 uppercase">USIA:</p>
            <p className="text-xl font-bold text-gray-800 uppercase">{user.usia}</p>
          </div>
          <div className="flex mb-3">
            <p className="text-xl font-bold text-gray-800 w-40 uppercase">PEKERJAAN:</p>
            <p className="text-xl font-bold text-gray-800 uppercase">{user.pekerjaan}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPengguna;
