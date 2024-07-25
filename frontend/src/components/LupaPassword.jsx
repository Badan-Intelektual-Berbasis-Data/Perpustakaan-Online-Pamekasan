// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import Footer from './Footer';

export default function LupaPassword() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="py-10">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">Lupa Password?</h3>
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
            <h4 className="text-2xl font-semibold mb-6 text-gray-800">Reset Kata Sandi</h4>
            <p className="text-gray-700 mb-6">Masukkan email Anda di bawah ini, dan kami akan mengirimkan tautan untuk mereset kata sandi Anda.</p>
            <form>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
                  Email
                </label>
                <input type="email" id="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Masukkan Email Anda" />
              </div>
              <button type="submit" className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Kirim Tautan Reset
              </button>
              <div className="mt-6 text-center">
                <Link to="/login" className="text-blue-600 hover:underline">
                  Kembali ke Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
