/* eslint-disable no-unused-vars */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-4">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-white">Perpustakaan Umum Pamekasan | © 2024 All rights reserved</p>
        <div className="mt-2 flex justify-center space-x-4 flex-wrap">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-blue-500">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-blue-400">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.instagram.com/perpusippamekasan/" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-pink-500">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-blue-700">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://www.youtube.com/channel/UCn32kqt-7KokDsJ2-8QtWtw" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-red-600">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
      </div>
    </footer>
  );
}
