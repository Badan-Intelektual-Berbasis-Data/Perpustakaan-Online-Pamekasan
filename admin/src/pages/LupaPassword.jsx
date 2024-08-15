import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function LupaPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      console.log('Password reset link sent to:', email);
      setMessage('Link untuk reset password telah dikirim ke email Anda.');
      setTimeout(() => navigate('/'), 2000);
    } else {
      setMessage('Email harus diisi!');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-gray-500 to-gray-700 text-white">
      <div className="bg-white text-gray-900 rounded-lg shadow-lg p-10 max-w-md w-full text-center">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => navigate('/')}
            className="text-gray-600 hover:text-gray-800"
          >
            <FontAwesomeIcon icon={faArrowLeft} size="lg" />
          </button>
        </div>
        <h1 className="text-1xl font-bold mb-4">Lupa Kata Sandi?</h1>
        <p className="mb-4">Masukkan email Anda untuk menerima link reset password.</p>
        
        {message && (
          <div className="bg-green-100 text-green-700 p-3 rounded mb-4">
            {message}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-left text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-2"
              placeholder="Masukkan email Anda"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-800"
          >
            Kirim Link Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default LupaPassword;
