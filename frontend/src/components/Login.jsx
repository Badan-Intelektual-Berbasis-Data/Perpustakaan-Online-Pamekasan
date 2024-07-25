// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import Footer from './Footer';

export default function Login() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="py-10">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">Selamat Datang!! Yuk Login Dulu</h3>
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
            <h4 className="text-2xl font-semibold mb-6 text-gray-800">Login</h4>
            <form>
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
              <div className="flex items-center mb-6">
                <input type="checkbox" id="rememberMe" className="mr-2" />
                <label htmlFor="rememberMe" className="text-gray-700 text-sm font-medium">
                  Ingat Aku
                </label>
              </div>
              <div className="mb-6 text-right">
                <Link to="/lupa-password" className="text-blue-600 hover:underline">
                  Lupa Password?
                </Link>
              </div>
              <button type="submit" className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Masuk
              </button>
              <div className="mt-6 text-center text-gray-700">
                Belum punya akun?{' '}
                <Link to="/daftar" className="text-blue-600 hover:underline">
                  Daftar
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
