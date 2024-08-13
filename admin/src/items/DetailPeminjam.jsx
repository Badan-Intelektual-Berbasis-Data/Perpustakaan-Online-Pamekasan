import React from 'react';
import { useLocation } from 'react-router-dom';

function DetailPeminjam() {
  const location = useLocation();
  const { book } = location.state || {};

  if (!book) {
    return <p>Data peminjam tidak ditemukan.</p>;
  }

  return (
    <div className="min-w-full">
      <header className="bg-blue-800 text-white text-center py-3 mb-4">
        <h2 className="text-xl font-bold">DETAIL PEMINJAM</h2>
      </header>
      <div className="p-11">
        <div className="flex flex-col p-11">
          {[
            { label: 'NAMA', value: book.peminjam },
            { label: 'BUKU YANG DIPINJAM', value: book.bukupinjam },
            { label: 'TANGGAL PEMINJAMAN', value: book.tanggal },
            { label: 'TANGGAL PENGEMBALIAN', value: book.tanggalkembali },
            { label: 'STATUS', value: book.status }
          ].map((item, index) => (
            <div key={index} className="flex mb-3 items-center">
              <p className="text-xl font-bold text-gray-800 w-1/3 flex-shrink-0 uppercase pr-4">{item.label}:</p>
              <p className="text-xl font-bold text-gray-800 flex-1 uppercase">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DetailPeminjam;
