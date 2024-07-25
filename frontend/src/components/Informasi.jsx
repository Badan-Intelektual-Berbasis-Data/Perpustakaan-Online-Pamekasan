// Informasi.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Informasi = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Informasi Aplikasi</h1>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Tentang Kami</h2>
            <p className="text-gray-600 mb-4">
              Kami adalah tim pengembang yang berdedikasi untuk menciptakan solusi teknologi yang inovatif. Aplikasi ini dirancang untuk memberikan pengalaman yang terbaik dalam mengelola informasi dan pelatihan.
            </p>
            <p className="text-gray-600 mb-4">Dengan berbagai fitur seperti pencarian, sistem favorit, dan integrasi gambar dari Google Drive, kami bertujuan untuk membuat akses informasi menjadi lebih mudah dan efisien.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-6 text-gray-800">Fitur Utama</h2>
            <ul className="list-disc pl-5 text-gray-600 mb-6">
              <li className="mb-2">Pencarian dan filter pelatihan dan kursus.</li>
              <li className="mb-2">Sistem favorit untuk menyimpan item yang Anda suka.</li>
              <li className="mb-2">Integrasi gambar dari Google Drive untuk logo dan media.</li>
              <li className="mb-2">Antarmuka pengguna yang modern dan responsif.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-6 text-gray-800">Tim Kami</h2>
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-6">
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <img src="https://via.placeholder.com/150" alt="Tim Anggota 1" className="w-24 h-24 rounded-full mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Nama Anggota 1</h3>
                  <p className="text-gray-600">Peran Anggota 1</p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-6">
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <img src="https://via.placeholder.com/150" alt="Tim Anggota 2" className="w-24 h-24 rounded-full mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Nama Anggota 2</h3>
                  <p className="text-gray-600">Peran Anggota 2</p>
                </div>
              </div>
              {/* Tambahkan apa saja nanti menyesuaikan */}
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-6 text-gray-800">Hubungi Kami</h2>
            <p className="text-gray-600 mb-4">Jika Anda memiliki pertanyaan atau ingin mengetahui lebih lanjut tentang aplikasi kami, jangan ragu untuk menghubungi kami melalui:</p>
            <p className="text-gray-700">
              <strong>Email:</strong>{' '}
              <a href="mailto:support@example.com" className="text-blue-500 hover:underline">
                support@example.com
              </a>
            </p>
            <p className="text-gray-700">
              <strong>Telepon:</strong> +62 821-9756-9330
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Informasi;
