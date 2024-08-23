/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from 'react';

export default function Information () {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Library Information</h1>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Tentang Kami</h2>
            <p className="text-gray-600 mb-4">
              Kami adalah Dinas Perpustakaan dan Kearsipan Kabupaten Pamekasan yang berkomitmen untuk menyediakan akses informasi dan layanan perpustakaan terbaik bagi masyarakat. Kami berupaya meningkatkan minat baca dan mendukung
              pelestarian arsip daerah.
            </p>
            <p className="text-gray-600 mb-4">Dengan berbagai fitur seperti pencarian, sistem favorit, dan integrasi gambar dari Google Drive, kami bertujuan untuk membuat akses informasi menjadi lebih mudah dan efisien.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-6 text-gray-800">Perpustakaan Umum Kabupaten Pamekasan</h2>
            <p className="text-gray-600 mb-4">
              Alamat:
              <br />
              Jln. Jokotole 05 Pamekasan
            </p>
            <p className="text-gray-600 mb-4">
              Nomor Telepon:
              <br />
              (0324) 325058
            </p>
            <p className="text-gray-600 mb-4">
              Nomor Faks:
              <br />
              (0324) 327261
            </p>
            <p className="text-gray-600 mb-4">
              WA/Telegram:
              <br />
              0878-5995-5556
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-6 text-gray-800">Jam Buka</h2>
            <p className="text-gray-600 mb-4">
              Senin - Kamis:
              <br />
              Buka: 07.00 WIB
              <br />
              Tutup: 17.00 WIB
            </p>
            <p className="text-gray-600 mb-4">
              Jum'at:
              <br />
              Buka: 07.00 WIB
              <br />
              Istirahat: 11.00 - 14.00 WIB
              <br />
              Tutup: 17.00 WIB
            </p>
            <p className="text-gray-600 mb-4">
              Sabtu:
              <br />
              Buka: 07.00 WIB
              <br />
              Tutup: 16.00 WIB
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-6 text-gray-800">Koleksi</h2>
            <p className="text-gray-600 mb-4">
              Kami memiliki berbagai jenis koleksi di perpustakaan kami, mulai dari Fiksi hingga Materi Sains, dari bahan cetak hingga koleksi digital seperti CD-ROM, CD, VCD, dan DVD. Kami juga mengoleksi publikasi serial harian seperti
              surat kabar dan juga publikasi serial bulanan seperti majalah.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-6 text-gray-800">Keanggotaan Perpustakaan</h2>
            <p className="text-gray-600 mb-4">Untuk dapat meminjam koleksi perpustakaan kami, Anda harus terlebih dahulu menjadi anggota perpustakaan. Ada syarat dan ketentuan yang harus Anda patuhi.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
