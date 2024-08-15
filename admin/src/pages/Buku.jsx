import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function Buku() {
  const books = [
    { kode: '#123', title: 'Laskar Pelangi', year: 2009, status: 'Ada', publisher: 'Gramedia', stock: 5 },
    { kode: '#124', title: 'Bumi Manusia', year: 2010, status: 'Dipinjam', publisher: 'Bumi Aksara', stock: 6 },
    { kode: '#125', title: 'Negeri 5 Menara', year: 2011, status: 'Ada', publisher: 'Mizan', stock: 2 },
  ];

  const navigate = useNavigate();

  const handleDetailClick = (book) => {
    navigate('/detail-buku', { state: { book } });
  };

  return (
    <div>
      <table className="min-w-full">
        <thead className="bg-blue-600">
          <tr>
            <th className="py-2 px-3 text-left text-xs font-semibold text-white">Kode</th>
            <th className="py-2 px-3 text-left text-xs font-semibold text-white">Nama Buku</th>
            <th className="py-2 px-3 text-left text-xs font-semibold text-white">Tahun Terbit</th>
            <th className="py-2 px-3 text-left text-xs font-semibold text-white">Status</th>
            <th className="py-2 px-3 text-left text-xs font-semibold text-white">Detail</th>
          </tr>
        </thead>
        <tbody className="bg-gray-200">
          {books.map((book, index) => (
            <tr key={index} className="border-t-4 border-gray-400">
              <td className="py-2 px-3 text-xs text-gray-800">{book.kode}</td>
              <td className="py-2 px-3 text-xs text-gray-800">{book.title}</td>
              <td className="py-2 px-3 text-xs text-gray-800">{book.year}</td>
              <td className={`py-2 px-3 text-xs ${book.status === 'Ada' ? 'text-green-500' : 'text-red-500'}`}>{book.status}</td>
              <td className="py-2 px-3 text-xs text-gray-800">
                <button className="flex items-center justify-center" onClick={() => handleDetailClick(book)}> 
                  <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Buku;
