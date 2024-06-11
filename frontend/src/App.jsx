/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Kategori from './items/Kategori';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BaruRilis from './items/BaruRilis';
import DaftarBuku from './items/DaftarBuku';
import Terpopuler from './items/Terpopuler';
import Kontak from './components/Kontak';
import Media from './components/Media';
import Footer from './components/Footer';
import DetailBuku from './components/DetailBuku';

function App() {
  useEffect(() => {
    async function getData() {
      await fetch('http://127.0.0.1:8000/api/products/catagories/')
        .then((res) => res.json())
        .then((data) => console.log(data));
    }

    getData();
    console.log('called');
  }, []);

  return (
    <Router>
      <div>
        <Navbar />
        <Banner />
        <Kategori />
        <Routes>
          <Route path="/" element={<BaruRilis />} />
          <Route path="/detail/:title" element={<DetailBuku />} />
        </Routes>
        <DaftarBuku />
        <Terpopuler />
        <Kontak />
        <Media />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
