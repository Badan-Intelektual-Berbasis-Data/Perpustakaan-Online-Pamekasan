/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import Navbar from './Navbar';
import StarRatings from 'react-star-ratings';
import Footer from './Footer';

const bukuDetail = {
  'Judul Buku 1': {
    title: 'Judul Buku 1',
    author: 'A.A. Anwar Prabu Mangkunegara',
    description: 'Deskripsi Fisik: viii, 172 hlm.; ilus.: 24 cm;',
    image: '/Buku1.jpg',
    status: 'Sedang Dipinjam',
    location: 'R. SIRKULASI (Lt.1)',
    callNumber: 'S 658.310 ANW m',
    publisher: 'Bandung : Remaja Rosdakarya., 2005',
    language: 'Indonesia',
    isbn: '9795149296',
    classification: '658.310',
    edition: 'Cet. 1',
    subject: 'Sumber Daya Manusia Perusahaan',
    availability: [
      { id: '3269111110001', status: 'Sedang Dipinjam', dueDate: '2024-06-01' },
      { id: '3269111110002', status: 'Tersedia', location: 'R. SIRKULASI (Lt.1)' },
      { id: '3269111110003', status: 'Sedang Dipinjam', dueDate: '2024-07-07' },
      { id: '3269111110004', status: 'Sedang Dipinjam', dueDate: '2024-07-11' },
      { id: '3269111110005', status: 'Tersedia', location: 'R. SIRKULASI (Lt.1) C.6' },
      { id: 'B140026', status: 'Tersedia', location: 'R. SIRKULASI (Lt.1) C.7' },
      { id: 'B140025', status: 'Tersedia namun tidak untuk dipinjamkan - Missing' },
    ],
  },
};

const DetailBuku = () => {
  const { title } = useParams();
  const navigate = useNavigate();
  const book = bukuDetail[decodeURIComponent(title)];

  const [rating, setRating] = useState(0);
  const [percentage, setPercentage] = useState(0);

  const handleRating = (newRating) => {
    setRating(newRating);
    setPercentage((newRating / 5) * 100);
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'Belum Dipinjam':
        return 'bg-green-600 text-white';
      case 'Sedang Dipinjam':
        return 'bg-yellow-600 text-white';
      case 'Tersedia':
        return 'bg-blue-600 text-white';
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
              <img className="w-full object-cover h-96" src={book.image} alt={book.title} />
            </div>
            <div className="p-6 md:p-8">
              <h1 className="text-4xl font-bold text-gray-900">{book.title}</h1>
              <p className="mt-2 text-gray-600 text-lg">
                Penulis: <span className="font-semibold">{book.author}</span>
              </p>
              <p className="mt-4 text-gray-700">{book.description}</p>
              <div className="mt-6">
                <h3 className="text-lg font-semibold">Detail Buku</h3>
                <p>
                  <strong>Lokasi:</strong> {book.location}
                </p>
                <p>
                  <strong>No. Panggil:</strong> {book.callNumber}
                </p>
                <p>
                  <strong>Penerbit:</strong> {book.publisher}
                </p>
                <p>
                  <strong>Bahasa:</strong> {book.language}
                </p>
                <p>
                  <strong>ISBN/ISSN:</strong> {book.isbn}
                </p>
                <p>
                  <strong>Klasifikasi:</strong> {book.classification}
                </p>
                <p>
                  <strong>Edisi:</strong> {book.edition}
                </p>
                <p>
                  <strong>Subjek:</strong> {book.subject}
                </p>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-semibold">Ketersediaan</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                      <tr>
                        <th className="border-b px-4 py-2 text-left text-gray-700">ID</th>
                        <th className="border-b px-4 py-2 text-left text-gray-700">Status</th>
                        <th className="border-b px-4 py-2 text-left text-gray-700">Lokasi</th>
                        <th className="border-b px-4 py-2 text-left text-gray-700">Tanggal Jatuh Tempo</th>
                      </tr>
                    </thead>
                    <tbody>
                      {book.availability.map((item, index) => (
                        <tr key={index} className={`border-b ${getStatusClass(item.status)}`}>
                          <td className="px-4 py-2">{item.id}</td>
                          <td className="px-4 py-2">{item.status}</td>
                          <td className="px-4 py-2">{item.location || '-'}</td>
                          <td className="px-4 py-2">{item.dueDate || '-'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="mt-6 flex items-center space-x-4">
                <div className="flex items-center space-x-4">
                  <StarRatings rating={rating} starRatedColor="blue" changeRating={handleRating} numberOfStars={5} starDimension="30px" starSpacing="5px" />
                  <button onClick={() => alert('Rating Disimpan')} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                    Simpan Rating
                  </button>
                </div>
                <p className="mt-2 text-gray-700">
                  Rating: {rating} ({percentage.toFixed(0)}%)
                </p>
              </div>
              <div className="mt-6 flex items-center space-x-4">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300" disabled={book.status === 'Sedang Dipinjam'}>
                  Pinjam Buku
                </button>
                <button className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
                  <FontAwesomeIcon icon={faBookmark} className="h-6 w-6" />
                </button>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-semibold">Komentar</h3>
                <p className="text-gray-700">
                  Anda harus{' '}
                  <button onClick={() => navigate('/login')} className="text-blue-600 hover:underline">
                    masuk
                  </button>{' '}
                  untuk memberikan komentar.
                </p>
              </div>
              <div className="mt-6">
                <button onClick={() => navigate(-1)} className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                  Kembali
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center text-lg font-semibold mt-10">Buku tidak ditemukan</div>
      )}
      <Footer />
    </div>
  );
};

export default DetailBuku;
