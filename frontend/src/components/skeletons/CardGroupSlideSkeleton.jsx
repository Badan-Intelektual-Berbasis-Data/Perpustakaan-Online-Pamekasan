import React from 'react'
import CardSkeleton from './CardSkeleton'

export default function CardGroupSlideSkeleton() {
  return (
    <div className='min-w-full overflow-hidden'>
      <div className='w-[150px] py-3 bg-gray-400 ml-20 mb-8 animate-pulse'></div>
      <div className='flex gap-x-8'>
        {Array.from({length: 8}, () => (
          <CardSkeleton />
        ))

        }
      </div>
    </div>
  )
}
