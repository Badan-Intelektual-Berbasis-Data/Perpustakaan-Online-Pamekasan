import React from 'react';
import { useLocation } from 'react-router-dom';

function DetailPengguna() {
  const location = useLocation();
  const { user } = location.state || {};

  if (!user) {
    return <p className="text-center text-red-500 font-semibold">Data pengguna tidak ditemukan.</p>;
  }

  return (
    <div className="min-w-full bg-gray-400">
      <header className="bg-blue-800 text-white text-center py-4 mb-6 shadow-md rounded-b-lg">
        <h2 className="text-2xl font-bold">DETAIL PENGGUNA</h2>
      </header>
      <div className="max-w-3xl mx-auto p-6 bg-gray-800 shadow-lg rounded-lg flex items-center space-x-6">
        <img
          src="https://via.placeholder.com/200"
          alt={user.pengguna}
          className="w-32 h-32 object-cover rounded-full border border-gray-300"
        />
        <div className="flex flex-col space-y-4 w-full">
          {[
            { label: 'NAMA', value: user.pengguna },
            { label: 'STATUS', value: user.status },
            { label: 'ALAMAT', value: user.alamat },
            { label: 'USIA', value: user.usia },
            { label: 'PEKERJAAN', value: user.pekerjaan }
          ].map((item, index) => (
            <div key={index} className="flex items-center border-b border-gray-300 py-2">
              <p className="text-lg font-semibold text-white w-40 flex-shrink-0 uppercase pr-4">{item.label}:</p>
              <p className="text-lg font-medium text-white flex-1">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DetailPengguna;
