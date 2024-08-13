import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function Peminjam() {
  const books = [
    { no: 1 , peminjam: 'Alvin', bukupinjam: 'Laskar Pelangi', tanggal: '12/08/2024', tanggalkembali: '18/08/2024', status: 'Belum Dikembalikan'},
    { no: 2 , peminjam: 'Ridwan', bukupinjam: 'Bumi Manusia', tanggal: '12/08/2024', tanggalkembali: '18/08/2024', status: 'Sudah Dikembalikan'},
   
  ];

  const navigate = useNavigate();

  const handleDetailClick = (book) => {
    navigate('/detail-peminjam', { state: { book } });
  };

  return (
    <div>
      <table className="min-w-full">
        <thead className="bg-blue-600">
          <tr>
            <th className="py-2 px-3 text-left text-xs font-semibold text-white">No</th>
            <th className="py-2 px-3 text-left text-xs font-semibold text-white">Nama Peminjam</th>
            <th className="py-2 px-3 text-left text-xs font-semibold text-white">Buku Yang Dipinjam</th>
            <th className="py-2 px-3 text-left text-xs font-semibold text-white">Tanggal</th>
            <th className="py-2 px-3 text-center text-xs font-semibold text-white">Detail</th>
          </tr>
        </thead>
        <tbody className="bg-gray-200">
          {books.map((book, index) => (
            <tr key={index} className="border-t border-gray-300">
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
