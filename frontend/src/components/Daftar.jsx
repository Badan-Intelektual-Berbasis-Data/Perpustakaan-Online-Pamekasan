// Daftar.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import Footer from './Footer';

export default function Daftar() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="py-10 min-h-screen">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">Daftar Akun Baru</h3>
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
            <h4 className="text-2xl font-semibold mb-6 text-gray-800">Daftar</h4>
            <form>
              <div className="mb-6">
                <label htmlFor="username" className="block text-gray-700 text-sm font-medium mb-2">
                  Nama Pengguna
                </label>
                <input type="text" id="username" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Masukkan Nama Pengguna" />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
                  Email
                </label>
                <input type="email" id="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Masukkan Email Anda" />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">
                  Kata Sandi
                </label>
                <input type="password" id="password" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Masukkan Kata Sandi Anda" />
              </div>
              <div className="mb-6">
                <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-medium mb-2">
                  Ulangi Kata Sandi
                </label>
                <input type="password" id="confirmPassword" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Ulangi Kata Sandi Anda" />
              </div>
              <div className="mb-6">
                <label htmlFor="dob" className="block text-gray-700 text-sm font-medium mb-2">
                  Tanggal Lahir
                </label>
                <input type="date" id="dob" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div className="mb-6">
                <label htmlFor="phone" className="block text-gray-700 text-sm font-medium mb-2">
                  Nomor Handphone
                </label>
                <input type="tel" id="phone" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Masukkan Nomor Handphone Anda" />
              </div>
              <div className="mb-6">
                <label htmlFor="nik" className="block text-gray-700 text-sm font-medium mb-2">
                  NIK
                </label>
                <input type="text" id="nik" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Masukkan NIK Anda" />
              </div>
              <div className="mb-6">
                <label htmlFor="age" className="block text-gray-700 text-sm font-medium mb-2">
                  Umur
                </label>
                <input type="number" id="age" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Masukkan Umur Anda" />
              </div>
              <div className="mb-6">
                <label htmlFor="address" className="block text-gray-700 text-sm font-medium mb-2">
                  Alamat
                </label>
                <input type="text" id="address" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Masukkan Alamat Anda" />
              </div>
              <div className="mb-6">
                <label htmlFor="gender" className="block text-gray-700 text-sm font-medium mb-2">
                  Jenis Kelamin
                </label>
                <select id="gender" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option value="">Pilih Jenis Kelamin</option>
                  <option value="male">Laki-laki</option>
                  <option value="female">Perempuan</option>
                </select>
              </div>
              <div className="mb-6">
                <label htmlFor="status" className="block text-gray-700 text-sm font-medium mb-2">
                  Status
                </label>
                <select id="status" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option value="">Pilih Status</option>
                  <option value="member">Member</option>
                  <option value="admin">Admin</option>
                  <option value="tamu">Tamu</option>
                  <option value="other">Lainnya</option>
                </select>
              </div>
              <button type="submit" className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Daftar
              </button>
            </form>
            <div className="mt-6 text-center">
              <p className="text-gray-700">
                Sudah punya akun?{' '}
                <Link to="/login" className="text-blue-600 hover:underline">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
