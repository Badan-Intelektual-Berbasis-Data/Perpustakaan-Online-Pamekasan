/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Pustakawan() {
  const pustakawanList = [
    {
      nama: 'HUSNAN EFENDY',
      jabatan: 'Pustakawan',
      surel: 'husnan@example.com',
      mediaSosial: '@husnanefendy',
    },
    {
      nama: 'SRI HARTONO',
      jabatan: 'Pustakawan',
      surel: 'srihartono@example.com',
      mediaSosial: '@srihartono',
    },
    {
      nama: 'Kusairi',
      jabatan: 'Pustakawan',
      surel: 'kusairi@example.com',
      mediaSosial: '@kusairi',
    },
    {
      nama: 'LAILATUL QADARIYAH',
      jabatan: 'Pustakawan',
      surel: 'lailatul@example.com',
      mediaSosial: '@lailatulqadariyah',
    },
    {
      nama: 'Rina Yulianti',
      jabatan: 'Pustakawan',
      surel: 'rinayulianti@example.com',
      mediaSosial: '@rinayulianti',
    },
    {
      nama: 'Hendriyani',
      jabatan: 'Pustakawan',
      surel: 'hendriyani@example.com',
      mediaSosial: '@hendriyani',
    },
    {
      nama: 'Zahid',
      jabatan: 'Pustakawan',
      surel: 'zahid@example.com',
      mediaSosial: '@zahid',
    },
    {
      nama: 'Siswa Prakrin Perpustakaan Umum Pamekasan',
      jabatan: 'Pustakawan',
      surel: 'siswaprakrin@example.com',
      mediaSosial: '@siswaprakrin',
    },
    {
      nama: 'Vilda Amelia',
      jabatan: 'Pustakawan',
      surel: 'vildaamelia@example.com',
      mediaSosial: '@vildaamelia',
    },
    {
      nama: 'Megawati',
      jabatan: 'Pustakawan',
      surel: 'megawati@example.com',
      mediaSosial: '@megawati',
    },
    {
      nama: 'Eny Supraptiningsih',
      jabatan: 'Pustakawan',
      surel: 'enysupraptiningsih@example.com',
      mediaSosial: '@enysupraptiningsih',
    },
    {
      nama: 'NURA WULAN SUCI',
      jabatan: 'Pustakawan',
      surel: 'nurawulansuci@example.com',
      mediaSosial: '@nurawulansuci',
    },
    {
      nama: 'Halo Pemustaka',
      jabatan: 'Pustakawan',
      surel: 'halopemustaka@example.com',
      mediaSosial: '@halopemustaka',
    },
    {
      nama: 'Arika Faradisa Azhari',
      jabatan: 'Pustakawan',
      surel: 'arika@example.com',
      mediaSosial: '@arikaazhari',
    },
    {
      nama: 'PENGEMBALIA KILAT',
      jabatan: 'Pustakawan',
      surel: 'pengembalia@example.com',
      mediaSosial: '@pengembalia',
    },
    {
      nama: 'Administrator',
      jabatan: 'Pustakawan',
      surel: 'admin@mcflyon.co.id',
      mediaSosial: '@administrator',
    },
    {
      nama: 'Tim Satu Hebat',
      jabatan: 'Pustakawan',
      surel: 'tim1@example.com',
      mediaSosial: '@tim1hebat',
    },
    {
      nama: 'Tim Dua Hebat',
      jabatan: 'Pustakawan',
      surel: 'tim2@example.com',
      mediaSosial: '@tim2hebat',
    },
    {
      nama: 'Tim Tiga Hebat',
      jabatan: 'Pustakawan',
      surel: 'tim3@example.com',
      mediaSosial: '@tim3hebat',
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="bg-gray-100 py-10">
        <div className="container mx-auto px-4 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-6 text-center">Pustakawan Kami</h2>
          <p className="text-lg mb-4 text-center text-gray-700">Temui tim pustakawan kami yang berdedikasi untuk membantu Anda dengan berbagai layanan perpustakaan.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pustakawanList.map((pustakawan, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
                <img src="https://via.placeholder.com/150" alt={`Pustakawan ${index + 1}`} className="mx-auto mb-4 w-32 h-32 object-cover rounded-full" />
                <h3 className="text-xl font-semibold mb-2">{pustakawan.nama}</h3>
                <p className="text-sm text-gray-600">{pustakawan.jabatan}</p>
                <p className="text-sm text-gray-600 mt-2">
                  <strong>Surel:</strong> {pustakawan.surel}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Media Sosial:</strong> {pustakawan.mediaSosial}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
