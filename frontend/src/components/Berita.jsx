// Berita.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const beritaData = [
  {
    id: 1,
    title: 'Berita Terbaru 1',
    summary: 'Ringkasan berita terbaru 1 yang memberikan informasi penting tentang perkembangan terbaru.',
    date: '25 Juli 2024',
    image: 'https://via.placeholder.com/400x250',
    link: '/berita/1',
  },
  {
    id: 2,
    title: 'Berita Terbaru 2',
    summary: 'Ringkasan berita terbaru 2 yang memberikan informasi mendalam tentang topik terkini.',
    date: '24 Juli 2024',
    image: 'https://via.placeholder.com/400x250',
    link: '/berita/2',
  },
  {
    id: 3,
    title: 'Berita Terbaru 3',
    summary: 'Ringkasan berita terbaru 3 yang menyoroti perkembangan terbaru di bidang teknologi.',
    date: '23 Juli 2024',
    image: 'https://via.placeholder.com/400x250',
    link: '/berita/3',
  },
  // Berita lainnya
];

const Berita = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Berita Terbaru</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beritaData.map((berita) => (
              <div key={berita.id} className="bg-white p-6 rounded-lg shadow-lg">
                <img src={berita.image} alt={berita.title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
                <h2 className="text-xl font-semibold mb-2 text-gray-800">{berita.title}</h2>
                <p className="text-gray-600 mb-4">{berita.summary}</p>
                <p className="text-gray-500 text-sm mb-4">{berita.date}</p>
                <a href={berita.link} className="text-blue-500 hover:underline">
                  Baca Selengkapnya
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Berita;
