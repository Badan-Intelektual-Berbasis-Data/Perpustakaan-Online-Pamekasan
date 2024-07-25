/* eslint-disable no-unused-vars */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

export default function DaftarBuku() {
  const lanjutBaca = [
    { title: 'Judul Buku 1', author: 'Penulis 1', image: '/Buku1.jpg' },
    { title: 'Judul Buku 2', author: 'Penulis 2', image: '/Buku1.jpg' },
    { title: 'Judul Buku 3', author: 'Penulis 3', image: '/Buku1.jpg' },
    { title: 'Judul Buku 4', author: 'Penulis 4', image: '/Buku1.jpg' },
    { title: 'Judul Buku 5', author: 'Penulis 5', image: '/Buku1.jpg' },
    { title: 'Judul Buku 6', author: 'Penulis 6', image: '/Buku1.jpg' },
    { title: 'Judul Buku 7', author: 'Penulis 7', image: '/Buku1.jpg' },
  ];

  return (
    <div className="bg-white">
      <div className="container">
        <h3 className="text-2xl font-bold text-left mb-6 ml-6 mr-6">Yuk Pinjam Buku!!</h3>
        <div className="grid grid-cols-2 md:grid-cols-7 gap-4">
          {lanjutBaca.map((book, index) => (
            <div key={index} className="relative bg-white p-2 rounded-lg shadow-md ml-4 mb-4">
              <img src={book.image} className="w-full h-32 object-cover mb-2" alt={book.title} />
              <h4 className="text-lg font-semibold mb-1">{book.title}</h4>
              <p className="text-sm text-gray-600">{book.author}</p>
              <FontAwesomeIcon icon={faBookmark} className="absolute bottom-2 right-2 text-gray-400" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
