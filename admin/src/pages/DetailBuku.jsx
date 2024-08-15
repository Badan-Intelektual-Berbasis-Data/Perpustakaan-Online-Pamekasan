import React from 'react';
import { useLocation } from 'react-router-dom';

function DetailBuku() {
  const location = useLocation();
  const { book } = location.state || {};

  if (!book) {
    return <p className="text-center text-red-500 font-semibold">Data buku tidak ditemukan.</p>;
  }

  return (
    <div className="min-w-full bg-gray-400">
      <header className="bg-blue-800 text-white text-center py-4 mb-6 shadow-md rounded-b-lg">
        <h2 className="text-2xl font-bold">DETAIL BUKU</h2>
      </header>
      <div className="flex flex-col md:flex-row p-6 mx-auto max-w-4xl bg-gray-800 shadow-lg rounded-lg">
        <img
          src="https://via.placeholder.com/200"
          alt={book.title}
          className="w-full md:w-64 h-auto object-cover rounded-lg shadow-md mb-4 md:mb-0 md:mr-6"
        />
        <div className="flex flex-col justify-between">
          <div className="flex mb-4">
            <p className="text-lg font-semibold text-white w-36">KODE:</p>
            <p className="text-lg font-medium text-white flex-1">{book.kode}</p>
          </div>
          <div className="flex mb-4">
            <p className="text-lg font-semibold text-white w-36">NAMA BUKU:</p>
            <p className="text-lg font-medium text-white flex-1">{book.title}</p>
          </div>
          <div className="flex mb-4">
            <p className="text-lg font-semibold text-white w-36">PENERBIT:</p>
            <p className="text-lg font-medium text-white flex-1">{book.publisher}</p>
          </div>
          <div className="flex mb-4">
            <p className="text-lg font-semibold text-white w-36">TAHUN TERBIT:</p>
            <p className="text-lg font-medium text-white flex-1">{book.year}</p>
          </div>
          <div className="flex mb-4">
            <p className="text-lg font-semibold text-white w-36">JUMLAH STOK:</p>
            <p className="text-lg font-medium text-white flex-1">{book.stock}</p>
          </div>
          <div className="flex mb-4">
            <p className="text-lg font-semibold text-white w-36">STATUS:</p>
            <p className="text-lg font-medium text-white flex-1">{book.status}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailBuku;
