// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Kategori from './items/Kategori';
import BaruRilis from './items/BaruRilis';
import DaftarBuku from './items/DaftarBuku';
import Terpopuler from './items/Terpopuler';
import Kontak from './components/Kontak';
import Media from './components/Media';
import Footer from './components/Footer';
import DetailBuku from './components/DetailBuku';
import Cari from './components/Cari';
import Kunjungan from './components/Kunjungan';
import Akun from './components/Akun';
import Login from './components/Login';
import Daftar from './components/Daftar';
import LupaPassword from './components/LupaPassword';
import Bookmark from './components/Bookmark';
import Bantuan from './components/Bantuan';
import Informasi from './components/Informasi';
import Berita from './components/Berita';
import Pustakawan from './components/Pustakawan';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Banner />
              <Kategori />
              <BaruRilis />
              <DaftarBuku />
              <Terpopuler />
              <Kontak />
              <Media />
              <Footer />
            </>
          }
        />
        <Route path="/kunjungan" element={<Kunjungan />} />
        <Route path="/bantuan" element={<Bantuan />} />
        <Route path="/informasi" element={<Informasi />} />
        <Route path="/berita" element={<Berita />} />
        <Route path="/detail/:title" element={<DetailBuku />} />
        <Route path="/cari" element={<Cari />} />
        <Route path="/simpan" element={<Bookmark />} />
        <Route path="/akun" element={<Akun />} />
        <Route path="/login" element={<Login />} />
        <Route path="/daftar" element={<Daftar />} />
        <Route path="/lupa-password" element={<LupaPassword />} />
        <Route path="/pustakawan" element={<Pustakawan />} />
      </Routes>
    </Router>
  );
}

export default App;
