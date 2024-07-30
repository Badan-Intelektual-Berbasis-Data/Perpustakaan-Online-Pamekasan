import React from 'react'
import { Link } from 'react-router-dom'

export default function BackButton() {

  return (
    <div className='w-full py-4'>
        <div className='px-20 max-w-[1200px]'>
            <Link to="/" className='text-lg font-medium hover:underline'>Back</Link>
        </div>
    </div>
  )
}
