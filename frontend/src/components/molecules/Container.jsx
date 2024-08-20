import React from 'react'

const Container = React.forwardRef(({className='', children}, ref) => {
  return (
    <div ref={ref} className={`py-16 px-20 ${className}`}>
        {children}
    </div>
  )
})


export default Container