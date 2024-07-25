/* eslint-disable no-unused-vars */
import React from 'react';

export default function Media() {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4 bg-white p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <img src="https://dinkes.pamekasankab.go.id/storage/users/logo.jpeg" alt="Logo Dinas" className="mx-auto mb-4 w-32 h-32 object-cover" />
            <h4 className="text-lg font-semibold mb-2">Dinas Perpustakaan dan Kearsipan</h4>
            <h4 className="text-lg font-semibold mb-2">Kabupaten Pamekasan</h4>
            <ul className="text-sm text-gray-600">
              <li className="mb-2">
                <a href="#menu1" className="hover:underline">
                  Informasi
                </a>
              </li>
              <li className="mb-2">
                <a href="#menu2" className="hover:underline">
                  Berita
                </a>
              </li>
              <li className="mb-2">
                <a href="#menu3" className="hover:underline">
                  Pustakawan
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Tentang Kami</h4>
            <p className="text-sm text-gray-600">
              Kami adalah Dinas Perpustakaan dan Kearsipan Kabupaten Pamekasan yang berkomitmen untuk menyediakan akses informasi dan layanan perpustakaan terbaik bagi masyarakat. Kami berupaya meningkatkan minat baca dan mendukung
              pelestarian arsip daerah.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Media Partner</h4>
            <div className="flex justify-around">
              <img src="https://dinkes.pamekasankab.go.id/storage/users/logo.jpeg" alt="Partner 1" className="w-24 h-24 object-cover rounded-md" />
              <img src="https://i0.wp.com/www.uim.ac.id/uimv2/wp-content/uploads/2020/10/Ico.png?fit=200%2C200&ssl=1" alt="Partner 2" className="w-24 h-24 object-cover rounded-md" />
              <img src="/Bibd.jpg" alt="Partner 3" className="w-24 h-24 object-cover rounded-md" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
