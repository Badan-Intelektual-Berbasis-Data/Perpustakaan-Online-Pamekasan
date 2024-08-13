import React from 'react';
import { useLocation } from 'react-router-dom';

function DetailBuku() {
  const location = useLocation();
  const { book } = location.state || {};

  if (!book) {
    return <p>Data buku tidak ditemukan.</p>;
  }

  return (
    <div className="min-w-full">
      <header className="bg-blue-800 text-white text-center py-3 mb-4">
        <h2 className="text-xl font-bold">DETAIL BUKU</h2>
      </header>
      <div className="flex p-6">
        <img
          src="https://via.placeholder.com/200" 
          alt={book.title}
          className="w-50 h-50 object-cover mr-6"
        />
        <div>
          <div className="flex mb-3">
            <p className="text-xl font-bold text-gray-800 w-40 uppercase">NAMA BUKU:</p>
            <p className="text-xl font-bold text-gray-800 uppercase">{book.title}</p>
          </div>
          <div className="flex mb-3">
            <p className="text-xl font-bold text-gray-800 w-40 uppercase">PENERBIT:</p>
            <p className="text-xl font-bold text-gray-800 uppercase">{book.publisher}</p>
          </div>
          <div className="flex mb-3">
            <p className="text-xl font-bold text-gray-800 w-40 uppercase">TAHUN TERBIT:</p>
            <p className="text-xl font-bold text-gray-800 uppercase">{book.year}</p>
          </div>
          <div className="flex mb-3">
            <p className="text-xl font-bold text-gray-800 w-40 uppercase">JUMLAH STOK:</p>
            <p className="text-xl font-bold text-gray-800 uppercase">{book.stock}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailBuku;
