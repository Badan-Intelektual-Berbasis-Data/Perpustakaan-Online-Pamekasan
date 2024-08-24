import React, { useEffect } from 'react'
import { timeZoneConverter } from '../../../utils/Utilities'

export default function LoanCard({data}) {

    useEffect(() => console.log(data.return_status), [])

  return (
    <div className='flex gap-x-6 w-full py-4'>
        <img className='w-[150px]' src={data.book.title.book_image_url} alt="gambar" /> 
        <div className='w-full'>
            <h2 className='font-medium text-2xl'>{data.book.title.title}</h2>

            <div className='space-y-4'>
                <div className='mt-12 flex justify-between items-center w-5/8'>
                    <p>Status</p>
                    <p>{data.return_status ? 'Sudah' : 'Belum'} dikembalikan</p>
                </div>
                <div className='flex justify-between items-center w-5/8'>
                    <p>Tanggal Peminjaman</p>
                    <p>{timeZoneConverter(data.borrow_date)}</p>
                </div>
                <div className='flex justify-between items-center w-5/8'>
                    <p>Tanggal Pengembalian</p>
                    <p>{timeZoneConverter(data.return_date)}</p>
                </div>
                <div className='flex justify-between items-center w-5/8'>
                    <p>Denda</p>
                    <p>Rp.{data.fine_ammount}</p>
                </div>
            </div>
        </div>
    </div>
  )
}
