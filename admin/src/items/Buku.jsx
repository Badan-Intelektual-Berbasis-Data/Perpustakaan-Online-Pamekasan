import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Buku() {
  const books = [
    { kode: '#123', title: 'Laskar Pelangi', year: 2009, status: 'Ada' },
    { kode: '#124', title: 'Bumi Manusia', year: 2010, status: 'Dipinjam' },
    { kode: '#125', title: 'Negeri 5 Menara', year: 2011, status: 'Ada' },
  ];

  return (
    <div>
      <table className="min-w-full">
        <thead className="bg-blue-600">
          <tr>
            <th className="py-2 px-3 text-left text-xs font-semibold text-white">Kode</th>
            <th className="py-2 px-3 text-left text-xs font-semibold text-white">Nama Buku</th>
            <th className="py-2 px-3 text-left text-xs font-semibold text-white">Tahun Terbit</th>
            <th className="py-2 px-3 text-left text-xs font-semibold text-white">Status</th>
            <th className="py-2 px-3 text-center text-xs font-semibold text-white">Detail</th>
          </tr>
        </thead>
        <tbody className="bg-gray-200">
          {books.map((book, index) => (
            <tr key={index} className="border-t border-gray-300">
              <td className="py-2 px-3 text-xs text-gray-800">{book.kode}</td>
              <td className="py-2 px-3 text-xs text-gray-800">{book.title}</td>
              <td className="py-2 px-3 text-xs text-gray-800">{book.year}</td>
              <td className={`py-2 px-3 text-xs ${book.status === 'Ada' ? 'text-green-500' : 'text-red-500'}`}>{book.status}</td>
              <td className="py-2 px-3 text-xs text-gray-800">
                <div className="flex items-center justify-center">
                  <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Buku;
