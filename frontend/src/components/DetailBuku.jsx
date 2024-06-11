/* eslint-disable no-unused-vars */
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

const bukuDetail = {
  'Judul Buku 1': {
    title: 'Judul Buku 1',
    author: 'Penulis 1',
    price: 'Rp 100.000',
    description: 'Deskripsi Buku 1',
    image: '/Buku1.jpg',
    status: 'Belum Dipinjam',
  },
  'Judul Buku 2': {
    title: 'Judul Buku 2',
    author: 'Penulis 2',
    price: 'Rp 120.000',
    description: 'Deskripsi Buku 2',
    image: '/Buku1.jpg',
    status: 'Sudah Dipinjam',
  },
};

const DetailBuku = () => {
  const { title } = useParams();
  const navigate = useNavigate();
  const book = bukuDetail[decodeURIComponent(title)];

  if (!book) {
    return <div className="text-center">Buku tidak ditemukan</div>;
  }

  const getStatusClass = (status) => {
    switch (status) {
      case 'Belum Dipinjam':
        return 'bg-green-500 text-white';
      case 'Sudah Dipinjam':
        return 'bg-red-500 text-white';
      case 'Tidak Ada':
        return 'bg-gray-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="h-48 w-full object-cover md:w-48" src={book.image} alt={book.title} />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{book.title}</div>
          <p className="mt-2 text-gray-500">Penulis: {book.author}</p>
          <p className="mt-2 text-gray-500">Harga: {book.price}</p>
          <p className="mt-2 text-gray-500">{book.description}</p>
          <p className={`mt-2 px-2 py-1 rounded-lg inline-block ${getStatusClass(book.status)}`}>{book.status}</p>
          <div className="mt-4 flex items-center justify-between">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-teal-700" disabled={book.status === 'Sudah Dipinjam'}>
              Pinjam Buku
            </button>
            <button className="text-gray-500 hover:text-gray-700">
              <FontAwesomeIcon icon={faBookmark} className="h-6 w-6 fill-current" />
            </button>
          </div>
          <div className="mt-4">
            <button onClick={() => navigate(-1)} className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-700">
              Kembali
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailBuku;
