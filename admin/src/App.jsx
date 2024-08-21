import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Buku from './pages/Buku';
import DetailBuku from './pages/DetailBuku';
import Peminjam from './pages/Peminjam';
import Pengguna from './pages/Pengguna';
import Dashboard from './pages/Dashboard';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DetailPengguna from './pages/DetailPengguna';
import DetailPeminjam from './pages/DetailPeminjam';
import Login from './pages/Login';  
import Register from './pages/Register';
import LupaPassword from './pages/LupaPassword';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/lupa-password' element={<LupaPassword />} />
        <Route path='/' element={<RootLayout />}>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/buku' element={<Buku />}/>
          <Route path='/peminjam' element={<Peminjam />}/>
          <Route path='/pengguna' element={<Pengguna />}/>
          <Route path='/detail-buku/' element={<DetailBuku />}/>
          <Route path='/detail-pengguna/' element={<DetailPengguna />}/>
          <Route path='/detail-peminjam/' element={<DetailPeminjam />}/>
        </Route>
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

function Welcome() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-gray-500 to-gray-700 text-white">
      <div className="bg-gray-800 text-white rounded-lg shadow-lg p-10 max-w-lg text-center">
        <h1 className="text-3xl font-bold mb-4">Selamat Datang di Halaman Admin</h1>
        <p className="mt-2 text-lg">Perpustakaan Umum Daerah Pamekasan</p>
        <FontAwesomeIcon icon={faBook} className="text-6xl mt-6" />
        <p className="mt-4 text-base">Kelola buku, pengguna, dan peminjaman dengan mudah.</p>
      </div>
    </div>
  );
}

export default App;
