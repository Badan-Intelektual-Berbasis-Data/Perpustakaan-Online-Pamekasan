import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function Pengguna() {
  const users = [
    { nomor: 1, pengguna: 'Defilia', status: 'Admin', alamat: 'Jalan Jalmak Gang.VII', usia: '20 Tahun', pekerjaan: 'Programmer'},
    { nomor: 2, pengguna: 'Faisal', status: 'Member', alamat: 'Jalan Teja', usia: '25 Tahun', pekerjaan: 'Programmer'},
  ];

  const navigate = useNavigate();

  const handleDetailClick = (user) => {
    navigate('/detail-pengguna', { state: { user } });
  };

  return (
    <div>
      <table className="min-w-full">
        <thead className="bg-blue-600">
          <tr>
            <th className="py-2 px-3 text-left text-xs font-semibold text-white">Nomor</th>
            <th className="py-2 px-3 text-left text-xs font-semibold text-white">Nama Pengguna</th>
            <th className="py-2 px-3 text-left text-xs font-semibold text-white">Status</th>
            <th className="py-2 px-3 text-center text-xs font-semibold text-white">Detail</th>
          </tr>
        </thead>
        <tbody className="bg-gray-200">
          {users.map((user, index) => (
            <tr key={index} className="border-t border-gray-300">
              <td className="py-2 px-3 text-xs text-gray-800">{user.nomor}</td>
              <td className="py-2 px-3 text-xs text-gray-800">{user.pengguna}</td>
              <td className={`py-2 px-3 text-xs ${user.status === 'Admin' ? 'text-green-500' : 'text-red-500'}`}>{user.status}</td>
              <td className="py-2 px-3 text-xs text-gray-800">
                <div className="flex items-center justify-center">
                  <button onClick={() => handleDetailClick(user)}>
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

export default Pengguna;
