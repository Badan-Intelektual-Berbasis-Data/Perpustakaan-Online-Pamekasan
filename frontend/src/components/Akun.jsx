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
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">Profile Pengguna</h3>
          <div className="bg-blue-200 p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
            <div className="flex">
              <div className="pl-5">
                <img src="https://via.placeholder.com/100" alt="User" className="w-44 h-44 rounded-full border-4 border-blue-500" />
              </div>

              <div className="pt-15 pl-40">
                <div className="">
                  <p className="text-gray-700 mb-2">
                    <strong>NAMA:</strong> {userProfile.username}
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
                    <button className="bg-blue-600 mr-7 text-white py-3 px-4 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Logout</button>
                    <button className="bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Edit Akun</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
