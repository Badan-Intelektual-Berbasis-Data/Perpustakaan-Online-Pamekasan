/* eslint-disable no-unused-vars */
import React from 'react';

export default function Terpopuler() {
  const terpopuler = [
    { title: 'Judul Buku 1', author: 'Penulis 1' },
    { title: 'Judul Buku 2', author: 'Penulis 2' },
    { title: 'Judul Buku 3', author: 'Penulis 3' },
    { title: 'Judul Buku 4', author: 'Penulis 4' },
    { title: 'Judul Buku 5', author: 'Penulis 5' },
    { title: 'Judul Buku 6', author: 'Penulis 6' },
    { title: 'Judul Buku 7', author: 'Penulis 7' },
  ];

  return (
    <div className="bg-gray-100">
      <div className="container">
        <h3 className="text-2xl font-bold text-left mb-6 ml-6 mr-6">Terpopuler Untukmu</h3>
        <div className="grid grid-cols-2 md:grid-cols-7 gap-7">
          {terpopuler.map((book, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md ml-6 mb-6">
              <h4 className="text-lg font-semibold mb-2">{book.title}</h4>
              <p className="text-sm text-gray-600">{book.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
