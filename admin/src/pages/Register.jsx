import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (username && email && password && confirmPassword) {
      if (password === confirmPassword) {
        console.log('Registration details:', { username, email, password });
        navigate('/');
      } else {
        setErrorMessage('Password dan konfirmasi password tidak cocok!');
      }
    } else {
      setErrorMessage('Semua field harus diisi!');
    }
  };

  const handleGoogleSuccess = (response) => {
    console.log('Google registration success:', response);
    navigate('/');
  };

  const handleGoogleError = (error) => {
    console.error('Google registration error:', error);
  };

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-gray-500 to-gray-700 text-white">
        <div className="bg-white text-gray-900 rounded-lg shadow-lg p-10 max-w-md w-full text-center">
          <h1 className="text-2xl font-bold mb-4">Daftar Akun Baru</h1>
          
          {errorMessage && (
            <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
              {errorMessage}
            </div>
          )}
          
          <form onSubmit={handleRegister}>
            <div className="mb-4">
              <label className="block text-left text-gray-700">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mt-2"
                placeholder="Masukkan username"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-left text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mt-2"
                placeholder="Masukkan email"
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
            <div className="mb-4">
              <label className="block text-left text-gray-700">Konfirmasi Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mt-2"
                placeholder="Konfirmasi password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-800"
            >
              Daftar
            </button>
          </form>

          <div className="mt-1">
            <p className="text-gray-700">
              Sudah Punya Akun?{' '}
              <Link to="/" className="text-blue-600 hover:underline">
                Login
              </Link>
            </p>
          </div>

          <div className="mt-4">
            <p className="text-gray-400 mb-2">Atau daftar dengan</p>
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleError}
              logo="https://developers.google.com/identity/images/g-logo.png"
              render={(renderProps) => (
                <button
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  className="w-full bg-white text-gray-800 p-2 rounded border border-gray-300 flex items-center justify-center space-x-2"
                >
                  <img
                    src="https://developers.google.com/identity/images/g-logo.png"
                    alt="Google"
                    className="w-6 h-6"
                  />
                  <span className="ml-2">Daftar dengan Google</span>
                </button>
              )}
            />
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}

export default Register;
