import React from 'react'

const Logo = () => {
  return (
    <div className='flex justify-between items-center px-2  border-b-2 border-[#255235] relative pointer-events-none'>
        <img className='object-cover sm:w-[100px] w-[100px]' src='/images/logo.png' />
    </div>
  )
}

export default Logo