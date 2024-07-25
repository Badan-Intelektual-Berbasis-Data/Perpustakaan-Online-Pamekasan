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
      <div className="py-10">
        <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">Profile Pengguna</h3>
        <div className="container mx-auto px-4">
          <div className="max-w-fit mx-auto">
            <div className="bg-white p-5 rounded-lg shadow-lg flex items-start">
              <img src="https://via.placeholder.com/120" alt="User" className="w-40 h-40 rounded-full border-4 border-gray-500 mr-6" />
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
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <h4 className="text-lg font-semibold mb-4 text-gray-800">Pengaturan Akun</h4>
          <button className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Ubah Informasi</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
