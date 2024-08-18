import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='min-h-screen flex flex-col text-center justify-center'>
        <h1 className='text-5xl font-semibold text-gray-400 '>404</h1>
        <h1 className='text-3xl text-gray-300 mt-6'>Halaman tidak ditemukan</h1>
        <Link to="/" className='underline text-blue-500 mt-6'>Kembali ke halaman beranda</Link>
    </div>
  )
}
