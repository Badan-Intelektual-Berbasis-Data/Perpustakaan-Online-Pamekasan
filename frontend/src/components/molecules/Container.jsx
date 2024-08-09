import React from 'react'

export default function Container({className='', children}) {
  return (
    <div className={`py-16 px-20 ${className}`}>
        {children}
    </div>
  )
}
