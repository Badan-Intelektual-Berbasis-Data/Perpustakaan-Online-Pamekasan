import React from 'react'

export default function CardSkeleton() {
  return (
    <div className='flex flex-col justify-between  bg-white w-max rounded-lg shadow-md shrink-0 hover:cursor-pointer h-max'>
      <div className='w-[180px] min-h-[250px] max-h-[250px] rounded-sm bg-gray-400 animate-pulse'></div>

     
        <div className='min-w-full py-2 bg-gray-400 mt-6 animate-pulse'></div>
        <div className='w-1/2 py-2 bg-gray-400 mt-2 animate-pulse'></div>
    
    </div>
  )
}
