/* eslint-disable no-unused-vars */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

export default function CariBuku() {
  const lanjutBaca = [
    { title: 'Judul Buku 1', author: 'Penulis 1', image: '/Buku1.jpg' },
    { title: 'Judul Buku 2', author: 'Penulis 2', image: '/Buku1.jpg' },
    { title: 'Judul Buku 3', author: 'Penulis 3', image: '/Buku1.jpg' },
    { title: 'Judul Buku 4', author: 'Penulis 4', image: '/Buku1.jpg' },
    { title: 'Judul Buku 5', author: 'Penulis 5', image: '/Buku1.jpg' },
    { title: 'Judul Buku 6', author: 'Penulis 6', image: '/Buku1.jpg' },
    { title: 'Judul Buku 7', author: 'Penulis 7', image: '/Buku1.jpg' },
    { title: 'Judul Buku 8', author: 'Penulis 8', image: '/Buku1.jpg' },
    { title: 'Judul Buku 9', author: 'Penulis 9', image: '/Buku1.jpg' },
    { title: 'Judul Buku 10', author: 'Penulis 10', image: '/Buku1.jpg' },
    { title: 'Judul Buku 11', author: 'Penulis 11', image: '/Buku1.jpg' },
    { title: 'Judul Buku 12', author: 'Penulis 12', image: '/Buku1.jpg' },
    { title: 'Judul Buku 13', author: 'Penulis 13', image: '/Buku1.jpg' },
    { title: 'Judul Buku 14', author: 'Penulis 14', image: '/Buku1.jpg' },
    { title: 'Judul Buku 15', author: 'Penulis 15', image: '/Buku1.jpg' },
    { title: 'Judul Buku 16', author: 'Penulis 16', image: '/Buku1.jpg' },
    { title: 'Judul Buku 17', author: 'Penulis 17', image: '/Buku1.jpg' },
    { title: 'Judul Buku 18', author: 'Penulis 18', image: '/Buku1.jpg' },
    { title: 'Judul Buku 19', author: 'Penulis 19', image: '/Buku1.jpg' },
    { title: 'Judul Buku 20', author: 'Penulis 20', image: '/Buku1.jpg' },
    { title: 'Judul Buku 21', author: 'Penulis 21', image: '/Buku1.jpg' },
  ];

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {lanjutBaca.map((book, index) => (
            <div key={index} className="relative bg-white p-2 rounded-lg shadow-md">
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
