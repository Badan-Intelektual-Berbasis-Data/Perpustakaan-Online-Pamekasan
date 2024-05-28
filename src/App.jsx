/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Kategori from './items/Kategori';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BaruRilis from './items/BaruRilis';
import LanjutBaca from './items/LanjutBaca';
import Terpopuler from './items/Terpopuler';
import Kontak from './components/Kontak';
import Media from './components/Media';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Kategori />
      <BaruRilis />
      <LanjutBaca />
      <Terpopuler />
      <Kontak />
      <Media />
      <Footer />
    </div>
  );
}

export default App;
