/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Kategori from './items/Kategori';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Kategori />
    </div>
  );
}

export default App;
