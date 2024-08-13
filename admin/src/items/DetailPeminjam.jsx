import React from 'react';
import { useLocation } from 'react-router-dom';

function DetailPeminjam() {
  const location = useLocation();
  const { book } = location.state || {};

  if (!book) {
    return <p className="text-center text-red-500 font-semibold">Data peminjam tidak ditemukan.</p>;
  }

  return (
    <div className="min-w-full bg-gray-400">
      <header className="bg-blue-800 text-white text-center py-4 mb-6 shadow-md rounded-b-lg">
        <h2 className="text-2xl font-bold">DETAIL PEMINJAM</h2>
      </header>
      <div className="max-w-3xl mx-auto p-6 bg-gray-800 shadow-lg rounded-lg">
        <div className="flex flex-col space-y-4">
          {[
            { label: 'NAMA', value: book.peminjam },
            { label: 'BUKU YANG DIPINJAM', value: book.bukupinjam },
            { label: 'TANGGAL PEMINJAMAN', value: book.tanggal },
            { label: 'TANGGAL PENGEMBALIAN', value: book.tanggalkembali },
            { label: 'STATUS', value: book.status }
          ].map((item, index) => (
            <div key={index} className="flex items-center border-b border-gray-300 py-2">
              <p className="text-lg font-semibold text-white w-1/3 flex-shrink-0 uppercase pr-4">{item.label}:</p>
              <p className="text-lg font-medium text-white flex-1">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DetailPeminjam;
