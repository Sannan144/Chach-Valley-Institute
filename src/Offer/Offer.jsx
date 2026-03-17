import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUserGraduate, FaBoxOpen, FaStar, FaRegStar } from 'react-icons/fa';
import { MdShoppingCart } from 'react-icons/md';
import { BsArrowRight } from 'react-icons/bs';
import OfferData from "./OfferData";

// 1. Rating Component (Stats in ONE Line, Floating Design)
const Rating = () => {
  const ratingData = [
    { text: '10k+ Students', icon: <FaUserGraduate /> },
    { text: '100+ Products', icon: <FaBoxOpen /> },
    { text: '500+ Orders', icon: <MdShoppingCart /> },
  ];

  return (
    <div className='relative z-30 max-w-7xl mx-auto px-[2px] sm:px-2 sm:px-4 md:px-8 -mt-12 mb-16'>
      <div className='bg-gradient-to-r from-[#0B1710]/95 via-[#0A2415]/95 to-[#0B1710]/95 backdrop-blur-md border border-[#10B981]/30 rounded-3xl py-3 sm:py-5 px-3 md:px-8 flex flex-col lg:flex-row justify-between items-center gap-5 shadow-[0_20px_50px_rgba(16,185,129,0.15)]'>
        
        {/* Excellent Rating Area */}
        <div className='flex items-center gap-3 sm:gap-4 text-lg font-semibold tracking-wide bg-black/30 py-2 sm:py-3 px-4 sm:px-6 rounded-2xl border border-white/5 whitespace-nowrap'>
          <span className="text-gray-100 uppercase tracking-widest text-xs sm:text-sm">Rated Excellent</span>
          <span className='flex gap-1 text-base sm:text-xl text-[#F59E0B] drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]'>
            {[...Array(4)].map((_, i) => (
              <FaStar key={i} />
            ))}
            <FaRegStar />
          </span>
        </div>

        {/* Stats Area (Strictly forced to Single Line) */}
        <div className='flex flex-row flex-nowrap justify-center lg:justify-end items-center gap-2 sm:gap-4 md:gap-8 w-full overflow-x-auto hide-scrollbar'>
          {ratingData.map((item, index) => (
            <div key={index} className='flex items-center gap-1.5 sm:gap-3 group cursor-default whitespace-nowrap'>
              <div className='p-1.5 sm:p-3 bg-[#10B981]/10 rounded-lg sm:rounded-xl border border-[#10B981]/20 group-hover:bg-[#10B981] transition-colors duration-300 shrink-0'>
                <span className='text-sm sm:text-xl text-[#10B981] group-hover:text-white transition-colors duration-300'>
                  {item.icon}
                </span>
              </div>
              <span className='text-[11px] sm:text-sm md:text-base font-bold tracking-wider text-gray-200 group-hover:text-white transition-colors duration-300'>
                {item.text}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

// 2. Main Offer Component 
const Offer = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      
      {/* Top Offer Section (Space Reduced & Solid Background) */}
      <section className="pt-10 md:pt-16 pb-20 md:pb-28 px-4 md:px-16 bg-[#0F391E] relative overflow-hidden flex-grow">
        
        {/* Subtle Background Pattern Overaly */}
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48ZyBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNhM2M0YjAiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMCAwaDQwdjQwSDBWMHptMjAgMjBoMjB2MjBIMjBWMjB6TTAgMjBoMjB2MjBIMFYyMHoyMCAwaDIwdjIwSDIwVjB6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>

        {/* Glowing Orbs for a premium touch */}
        <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-[#10B981] rounded-full mix-blend-overlay filter blur-[150px] opacity-15 animate-pulse"></div>
        <div className="absolute -bottom-20 right-10 w-[400px] h-[400px] bg-[#F59E0B] rounded-full mix-blend-overlay filter blur-[130px] opacity-10"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Premium Section Heading */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-4xl md:text-7xl font-extrabold tracking-tighter mb-2 md:mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E0F2F1] to-[#A7F3D0]">Explore Our</span> <span className="text-[#10B981] relative inline-block">
                Premium Offerings
                <svg className="absolute w-full h-3 -bottom-1.5 left-0 text-[#10B981]/50" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="4" fill="transparent"/></svg>
              </span>
            </h2>
            <p className="text-gray-200 text-sm md:text-xl max-w-3xl mx-auto mt-4 md:mt-6 font-medium leading-relaxed">
              Unlock extraordinary potential with our top-tier educational resources and services, curated for your unparalleled success.
            </p>
          </div>

          {/* Dynamic 3 Columns Grid -> (Added items-start to prevent stretching cards) */}
          <div className="grid grid-cols-3 gap-3 sm:gap-7 md:gap-12 items-start">
            {OfferData.map((item) => (
              <div
                key={item.id}
                onClick={() => navigate(`/${item.title.toLowerCase()}`)}
                className="bg-[#F8FAFC] rounded-3xl md:rounded-[3rem] shadow-2xl hover:shadow-[0_25px_60px_-15px_rgba(16,185,129,0.3)] transition-all duration-500 cursor-pointer transform hover:-translate-y-4 overflow-hidden flex flex-col group border-4 border-transparent hover:border-[#10B981]/60 relative"
              >
                
                {/* Image Container */}
                <div className="overflow-hidden w-full aspect-square relative shrink-0 border-b-2 border-gray-100 rounded-t-3xl md:rounded-t-[2.7rem]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                </div>

                {/* Text Content Area (Adjusted padding to cut off right after the button) */}
                <div className="px-3 pt-4 pb-3 sm:px-5 sm:pt-6 sm:pb-4 md:px-8 md:pt-8 md:pb-6 flex flex-col flex-grow bg-white relative z-20 -mt-6 md:-mt-12 rounded-t-xl md:rounded-t-2xl shadow-[-0px_-10px_20px_rgba(0,0,0,0.05)] group-hover:bg-[#F0FDFA] transition-colors duration-300">
                  <div>
                    <h3 className="text-[14px] sm:text-2xl md:text-3xl font-extrabold text-gray-950 mb-2 md:mb-5 group-hover:text-[#059669] transition-colors duration-300 tracking-tight leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-[11px] sm:text-sm md:text-base text-gray-600 font-medium leading-snug md:leading-relaxed line-clamp-3 md:line-clamp-5 group-hover:text-gray-800 transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                  
                  {/* Explore Action Button */}
                  <div className="mt-2 flex items-center justify-between gap-1 sm:gap-2 p-2 px-3 sm:p-3 sm:px-5 md:p-4 md:px-7 rounded-xl md:rounded-2xl border-2 border-gray-100 group-hover:border-[#10B981]/30 group-hover:bg-[#10B981]/5 transition-all duration-300">
                    <span className="text-[#059669] font-bold text-[10px] sm:text-sm md:text-lg tracking-wide group-hover:scale-105 transition-transform duration-300 whitespace-nowrap">
                      Explore Now
                    </span>
                    <BsArrowRight className="text-sm sm:text-xl md:text-2xl text-[#10B981] group-hover:translate-x-2 group-hover:scale-110 transition-transform duration-300 drop-shadow-md shrink-0" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Floating Modern Rating Section */}
      <Rating />

    </div>
  );
};

export default Offer;