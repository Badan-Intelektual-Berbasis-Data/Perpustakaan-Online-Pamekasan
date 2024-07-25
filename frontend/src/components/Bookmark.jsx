// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Bookmark() {
  const bookmarks = [
    {
      id: 1,
      title: 'Judul Buku 1',
      description: 'Deskripsi',
      image: './public/Buku1.jpg',
    },
    {
      id: 2,
      title: 'Judul Buku 2',
      description: 'Deskripsi',
      image: './public/Buku1.jpg',
    },
    {
      id: 3,
      title: 'Judul Buku 3',
      description: 'Deskripsi',
      image: './public/Buku1.jpg',
    },
  ];

  const handleRemoveBookmark = (id) => {
    console.log('Remove bookmark with id:', id);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="py-10">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">Buku Yang Kamu Simpan</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookmarks.map((bookmark) => (
              <div key={bookmark.id} className="bg-white p-6 rounded-lg shadow-lg">
                <img src={bookmark.image} alt={bookmark.title} className="w-full h-40 object-cover rounded-t-lg mb-4" />
                <h4 className="text-xl font-semibold mb-2 text-gray-800">{bookmark.title}</h4>
                <p className="text-gray-700 mb-4">{bookmark.description}</p>
                <button onClick={() => handleRemoveBookmark(bookmark.id)} className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500">
                  Hapus Bookmark
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
