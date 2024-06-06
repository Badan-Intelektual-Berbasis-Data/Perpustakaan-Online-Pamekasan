/* eslint-disable no-unused-vars */
import React from 'react';

export default function Kontak() {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-bold text-left mb-6">Kunjungi</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.7318445078017!2d113.46998167371463!3d-7.156970070214424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd77e061190d473%3A0x130a7e2588a7c1c3!2sGedung%20Pemuda!5e0!3m2!1sen!2sus!4v1717639856978!5m2!1sen!2sus"
              width="100%"
              height="400"
              allowFullScreen=""
              loading="lazy"
              title="Google Map"
              className="rounded-lg"
            ></iframe>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-4">Kritik dan saran</h4>
            <form>
              <div className="mb-4">
                <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100" placeholder="Masukkan Email Anda" />
              </div>
              <div className="mb-4">
                <textarea id="pesan" rows="6" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100" placeholder="Masukkan Pesan Anda"></textarea>
              </div>
              <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-900 focus:outline-none focus:ring focus:ring-indigo-200">
                Kirim
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
