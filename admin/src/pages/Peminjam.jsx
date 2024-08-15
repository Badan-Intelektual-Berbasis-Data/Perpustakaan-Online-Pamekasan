import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function Peminjam() {
  const [searchQuery, setSearchQuery] = useState('');

  const books = [
    { no: 1, peminjam: 'Alvin', bukupinjam: 'Laskar Pelangi', tanggal: '12/08/2024', tanggalkembali: '18/08/2024', status: 'Belum Dikembalikan' },
    { no: 2, peminjam: 'Ridwan', bukupinjam: 'Bumi Manusia', tanggal: '12/08/2024', tanggalkembali: '18/08/2024', status: 'Sudah Dikembalikan' },
  ];

  const navigate = useNavigate();

  const handleDetailClick = (book) => {
    navigate('/detail-peminjam', { state: { book } });
  };

  const filteredBooks = books.filter((book) =>
    book.peminjam.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.bukupinjam.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.tanggal.includes(searchQuery)
  );

  return (
    <div className="min-w-full">
      <div className="mb-4 flex items-center bg-white border border-gray-600 rounded">
        <FontAwesomeIcon icon={faSearch} className="text-gray-600 bg-white p-2" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 border-0 outline-none"
          placeholder="Cari berdasarkan nama peminjam, buku, atau tanggal peminjaman"
        />
      </div>

      <table className="min-w-full">
        <thead className="bg-blue-600">
          <tr>
            <th className="py-2 px-3 text-left text-xs font-semibold text-white">No</th>
            <th className="py-2 px-3 text-left text-xs font-semibold text-white">Nama Peminjam</th>
            <th className="py-2 px-3 text-left text-xs font-semibold text-white">Buku Yang Dipinjam</th>
            <th className="py-2 px-3 text-left text-xs font-semibold text-white">Tanggal Peminjaman</th>
            <th className="py-2 px-3 text-center text-xs font-semibold text-white">Detail</th>
          </tr>
        </thead>
        <tbody className="bg-gray-200">
          {filteredBooks.map((book, index) => (
            <tr key={index} className="border-t-4 border-gray-400">
              <td className="py-2 px-3 text-xs text-gray-800">{book.no}</td>
              <td className="py-2 px-3 text-xs text-gray-800">{book.peminjam}</td>
              <td className="py-2 px-3 text-xs text-gray-800">{book.bukupinjam}</td>
              <td className="py-2 px-3 text-xs text-gray-800">{book.tanggal}</td>
              <td className="py-2 px-3 text-xs text-gray-800">
                <div className="flex items-center justify-center">
                  <button onClick={() => handleDetailClick(book)}>
                    <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Peminjam;
