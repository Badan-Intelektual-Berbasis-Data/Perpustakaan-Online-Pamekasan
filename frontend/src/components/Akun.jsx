// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Akun() {
  const userProfile = {
    username: 'Nama Pengguna',
    email: 'email@example.com',
    joinDate: 'Januari 2024',
    nik: '1234567890123456',
    dob: '1990-01-01',
    age: 34,
    address: 'Jl. Contoh No. 123, Jakarta',
    gender: 'Pria',
    status: 'Member',
    phone: '081234567890',
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="py-10 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-5 rounded-lg shadow-lg flex flex-col md:flex-row items-start">
              <img src="https://via.placeholder.com/120" alt="User" className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-gray-500 mb-4 md:mb-0 md:mr-6 mx-auto md:mx-0" />
              <div className="flex-1">
                <h4 className="text-2xl font-semibold mb-4 text-gray-800">{userProfile.username}</h4>
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong> {userProfile.email}
                </p>
                <p className="text-gray-500 mb-2">
                  <strong>Tanggal Bergabung:</strong> {userProfile.joinDate}
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>NIK:</strong> {userProfile.nik}
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Tanggal Lahir:</strong> {userProfile.dob}
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Umur:</strong> {userProfile.age}
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Alamat:</strong> {userProfile.address}
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Jenis Kelamin:</strong> {userProfile.gender}
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Status:</strong> {userProfile.status}
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Nomor Handphone:</strong> {userProfile.phone}
                </p>

                <div className="mt-8 text-right">
                  <button className="bg-blue-600 mr-7 text-white py-3 px-4 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-blue-500">LogOut</button>
                  <button className="bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Edit Akun</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
