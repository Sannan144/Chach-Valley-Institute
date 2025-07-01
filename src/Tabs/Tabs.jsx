import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const Tabs = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='px-4 py-3'>
      {/* <h1 className='text-3xl font-bold text-center'><span className='text-[#255235] inline-block'>Chach</span> Valley <br /> Institute</h1> */}

      <div className='hidden md:flex gap-4 capitalize justify-around'>
        {['home', 'courses', 'online tution', 'online Quran teaching', 'contact us'].map((item, i) => (
          <p key={i} className={`${i==0&&"bg-[#255235] text-white"} tab-item border-2 px-8 py-2 rounded-4xl font-semibold hover:text-white hover:bg-[#255235] cursor-pointer transition-all duration-600`}>{item}</p>
        ))}
      </div>

      <div className='md:hidden text-3xl cursor-pointer relative z-50' onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <HiX /> : <HiMenu />}
      </div>

      {isOpen && (
        <div className='absolute top-0 right-0 w-[320px] h-screen bg-white shadow-xl flex flex-col justify-center gap-12 py-8 px-6 md:hidden'>
          {['home', 'courses', 'online tution', 'online Quran teaching', 'contact us'].map((item, i) => (
            <p key={i} className="tab-item w-fit text-xl capitalize hover:text-[#255235] transition-all duration-600 not-only-of-type:">{item}</p>
          ))}
        </div>
      )}
    </div>
  ); 
};

export default Tabs;
