/* eslint-disable no-unused-vars */
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import Navbar from './Navbar';

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

  const getStatusClass = (status) => {
    switch (status) {
      case 'Belum Dipinjam':
        return 'bg-green-600 text-white';
      case 'Sudah Dipinjam':
        return 'bg-red-600 text-white';
      case 'Tidak Ada':
        return 'bg-gray-600 text-white';
      default:
        return 'bg-gray-600 text-white';
    }
  };

  return (
    <div>
      <Navbar />
      {book ? (
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden md:max-w-4xl mt-10">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img className="h-64 w-full object-cover md:w-64" src={book.image} alt={book.title} />
            </div>
            <div className="p-6 md:p-8">
              <h1 className="text-3xl font-bold text-gray-900">{book.title}</h1>
              <p className="mt-2 text-gray-600 text-lg">
                Penulis: <span className="font-semibold">{book.author}</span>
              </p>
              <p className="mt-2 text-gray-600 text-lg">
                Harga: <span className="font-semibold">{book.price}</span>
              </p>
              <p className="mt-4 text-gray-700">{book.description}</p>
              <p className={`mt-4 px-4 py-2 rounded-full inline-block text-sm font-medium ${getStatusClass(book.status)}`}>{book.status}</p>
              <div className="mt-6 flex items-center space-x-4">
                <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300" disabled={book.status === 'Sudah Dipinjam'}>
                  Pinjam Buku
                </button>
                <button className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
                  <FontAwesomeIcon icon={faBookmark} className="h-6 w-6" />
                </button>
              </div>
              <div className="mt-6">
                <button onClick={() => navigate(-1)} className="bg-gray-600 text-white px-5 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                  Kembali
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center text-lg font-semibold mt-10">Buku tidak ditemukan</div>
      )}
    </div>
  );
};

export default DetailBuku;
