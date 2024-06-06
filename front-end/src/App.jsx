/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
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


  // const [data, sestData] = useState([])


  useEffect(() => {
    async function getData(){
      await fetch('http://127.0.0.1:8000/api/products/catagories/')
        .then((res) => res.json())
        .then((data) => console.log(data))
    } 

    getData()
    console.log("called")
  })

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
