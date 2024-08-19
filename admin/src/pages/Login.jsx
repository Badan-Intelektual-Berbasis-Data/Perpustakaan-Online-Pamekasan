import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import useAuth from '../../../frontend/src/hooks/useAuth';

function Login() {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  useAuth()

  const handleLogin = (e) => {
    e.preventDefault();

    if ((usernameOrEmail === 'admin' || usernameOrEmail === 'admin@gmail.com') && password === 'admin123') {
      navigate('/welcome');
    } else {
      setErrorMessage('Username atau email atau password salah!');
    }
  };

  const handleGoogleSuccess = (response) => {
    console.log('Google login success:', response);
    navigate('/welcome');
  };

  const handleGoogleError = (error) => {
    console.error('Google login error:', error);
  };

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-gray-500 to-gray-700 text-white">
        <div className="bg-white text-gray-900 rounded-lg shadow-lg p-10 max-w-md w-full text-center">
          <h1 className="font-bold">Selamat Datang Dihalaman Login Admin...</h1>
          <h1 className="font-bold mb-4">Yuk Login Sekarang!!</h1>
          
          {errorMessage && (
            <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
              {errorMessage}
            </div>
          )}
          
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-left text-gray-700">Username atau Email</label>
              <input
                type="text"
                value={usernameOrEmail}
                onChange={(e) => setUsernameOrEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mt-2"
                placeholder="Masukkan username atau email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-left text-gray-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mt-2"
                placeholder="Masukkan password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-800"
            >
              Login
            </button>
          </form>

          <div className="mt-2">
            <p className="text-gray-700 text-right">
              <Link to="/lupa-password" className="text-blue-600 hover:underline">
                Lupa Kata Sandi?
              </Link>
            </p>
            <p className="text-gray-700 mt-4">
              Belum Punya Akun?{' '}
              <Link to="/register" className="text-blue-600 hover:underline">
                Daftar
              </Link>
            </p>
          </div>

          <div className="mt-6">
            <p className="text-gray-400 mb-2">Atau login dengan</p>
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleError}
              logo="Google"
              style={{ width: '100%' }}
              className="bg-red-600 text-white p-2 rounded hover:bg-red-800"
            />
          </div>
        </div>
        <footer className="bg-gray-800 text-white py-2 w-full fixed bottom-0">
          <p className="text-xs text-center">PERPUSTAKAAN UMUM DAERAH PAMEKASAN</p>
        </footer>
      </div>
    </GoogleOAuthProvider>
  );
}

export default Login;
