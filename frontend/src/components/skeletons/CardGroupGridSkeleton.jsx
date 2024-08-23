import React from 'react'
import CardSkeleton from './CardSkeleton'

export default function CardGroupGridSkeleton() {
  return (
    <div className=''>
        <div className='w-[150px] py-3 bg-gray-400 ml-20 mb-8 animate-pulse'></div>
        <div className='grid grid-cols-6 gap-y-16 pr-16'>
            {Array.from({length: 8}, () => (
                <CardSkeleton />
            ))}

        </div>
    </div>
  )
}
