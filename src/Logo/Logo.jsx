import React from 'react'

const Logo = () => {
  return (
    <div className='flex justify-between items-center px-2 py-3 border-b-2 border-[#255235] relative pointer-events-none'>
        <img className='object-cover w-[100px]' src='/images/logo2.jpg' />
        <h2 style={{fontSize:'clamp(25px,5vw,70px)'}} className='font-bold leading-none tracking-tighter text-center'><span className='text-[#255034]'>Chach</span> Valley Institute</h2>
        <img className='object-cover w-[100px]' src='/images/logo1.jpg' />
    </div>
  )
}

export default Logo