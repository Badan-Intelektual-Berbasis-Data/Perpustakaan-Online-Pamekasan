// Bantuan.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Bantuan = () => {
  const faqs = [
    {
      question: 'Bagaimana cara mendaftar?',
      answer: "Anda dapat mendaftar dengan mengklik tombol 'Daftar' di halaman beranda dan mengikuti instruksi yang ada.",
    },
    {
      question: 'Apa yang harus dilakukan jika lupa kata sandi?',
      answer: "Klik 'Lupa Kata Sandi?' pada halaman masuk dan ikuti instruksi untuk mereset kata sandi Anda.",
    },
    {
      question: 'Bagaimana cara menghubungi dukungan pelanggan?',
      answer: "Anda dapat menghubungi dukungan pelanggan melalui halaman 'Kontak Kami' atau mengirim email ke support@example.com.",
    },
    {
      question: 'Apakah ada biaya tersembunyi?',
      answer: 'Tidak, semua biaya sudah dijelaskan dengan jelas di halaman harga. Tidak ada biaya tersembunyi.',
    },
    // FAQ lain sesuai kebutuhan
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Bantuan & FAQ</h1>
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Pertanyaan yang Sering Diajukan</h2>
            <div>
              {faqs.map((faq, index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Hubungi Kami</h2>
              <p className="text-gray-600 mb-4">Jika Anda memiliki pertanyaan lain atau membutuhkan bantuan lebih lanjut, jangan ragu untuk menghubungi kami:</p>
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
      </div>
      <Footer />
    </div>
  );
};

export default Bantuan;
