/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Pustakawan() {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-100 py-10">
        <div className="container mx-auto px-4 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-6 text-center">Pustakawan Kami</h2>
          <p className="text-lg mb-4 text-center text-gray-700">Temui tim pustakawan kami yang berdedikasi untuk membantu Anda dengan berbagai layanan perpustakaan.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Pustakawan 1 */}
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <img src="https://via.placeholder.com/150" alt="Pustakawan 1" className="mx-auto mb-4 w-32 h-32 object-cover rounded-full" />
              <h3 className="text-xl font-semibold mb-2">Nama Pustakawan 1</h3>
              <p className="text-sm text-gray-600">Kepala Perpustakaan</p>
              <p className="text-sm text-gray-600 mt-2">Spesialis dalam manajemen koleksi buku dan layanan pelanggan. Mengelola semua kegiatan perpustakaan dan membantu dengan kebutuhan informasi.</p>
            </div>
            {/* Pustakawan 2 */}
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <img src="https://via.placeholder.com/150" alt="Pustakawan 2" className="mx-auto mb-4 w-32 h-32 object-cover rounded-full" />
              <h3 className="text-xl font-semibold mb-2">Nama Pustakawan 2</h3>
              <p className="text-sm text-gray-600">Pustakawan Senior</p>
              <p className="text-sm text-gray-600 mt-2">Berpengalaman dalam penelitian dan penyuluhan literasi. Membantu pengguna dengan rekomendasi buku dan penelitian akademik.</p>
            </div>
            {/* Pustakawan 3 */}
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <img src="https://via.placeholder.com/150" alt="Pustakawan 3" className="mx-auto mb-4 w-32 h-32 object-cover rounded-full" />
              <h3 className="text-xl font-semibold mb-2">Nama Pustakawan 3</h3>
              <p className="text-sm text-gray-600">Pustakawan Muda</p>
              <p className="text-sm text-gray-600 mt-2">Terampil dalam teknologi informasi perpustakaan. Menyediakan dukungan teknis dan membantu dengan pengembangan koleksi digital.</p>
            </div>
            {/* Pustakawan lainnya */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
