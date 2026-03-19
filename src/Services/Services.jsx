import React from "react";
import { useNavigate } from "react-router-dom";
import { FaStar, FaArrowRight, FaGem, FaCheckDouble } from "react-icons/fa";
import Logo from "../Logo/Logo";
import Footer from "../Footer/Footer";
import ServicesData from "./ServicesData";

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#f4f7f5] min-h-screen font-sans selection:bg-[#265336] selection:text-white">
      {/* <Logo /> */}

      {/* --- HERO SECTION (Logo Themed Gradient) --- */}
      <div className="relative bg-gradient-to-tr from-[#0d1f14] via-[#265336] to-[#3e8558] pt-20 pb-36 px-4 overflow-hidden border-b-4 border-[#10B981]/20">
        
        {/* Subtle Branding Overlays */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]"></div>
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#10B981] rounded-full blur-[120px] opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#265336] rounded-full blur-[100px] opacity-30"></div>

        <div className="relative z-10 max-w-7xl mx-auto text-center flex flex-col items-center">
          {/* ✅ HEADING: Bold, Spaced, and Centered */}
          <h1 className="uppercase text-3xl md:text-7xl font-black text-white tracking-[0.25em] drop-shadow-[0_5px_15px_rgba(0,0,0,0.4)] animate-slide-up">
            Our Services
          </h1>
          <div className="mt-6 w-32 h-1.5 bg-gradient-to-r from-transparent via-[#10B981] to-transparent rounded-full shadow-lg"></div>
          <p className="mt-6 text-emerald-100/80 text-xs md:text-lg font-bold tracking-[0.1em] uppercase max-w-2xl">
            Professional & High-Quality solutions tailored to your goals
          </p>
        </div>

        {/* Wavy Shape */}
        <div className="absolute bottom-0 left-0 w-full leading-[0]">
          <svg viewBox="0 0 1440 320" className="w-full h-auto">
            <path fill="#f4f7f5" fillOpacity="1" d="M0,192L60,197.3C120,203,240,213,360,197.3C480,181,600,139,720,138.7C840,139,960,181,1080,192C1200,203,1320,181,1380,170.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      {/* --- SERVICES GRID (2 Columns on Mobile) --- */}
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 -mt-24 pb-20 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-8 md:gap-12">
          
          {ServicesData.map((service, index) => (
            <div
              key={service.id}
              onClick={() => navigate(`/services/${service.slug}`)}
              className="bg-white rounded-2xl sm:rounded-[3rem] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_30px_70px_rgba(38,83,54,0.3)] transition-all duration-500 cursor-pointer group flex flex-col h-full border-2 border-white hover:border-[#10B981]/30 transform hover:-translate-y-4"
            >
              {/* Image Section with 3D feel */}
              <div className="relative h-40 sm:h-72 md:h-80 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Status Badge */}
                <div className="absolute top-3 left-3 sm:top-6 sm:left-6">
                  <span className="bg-[#265336] text-white text-[8px] sm:text-[12px] font-black px-3 py-1.5 rounded-xl uppercase tracking-widest shadow-xl flex items-center gap-2">
                    <FaGem className="text-[#10B981]" /> Premium
                  </span>
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f14]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                   <p className="text-white font-bold text-xs sm:text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                     Explore Excellence 
                   </p>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-4 sm:p-10 flex flex-col flex-1 items-center text-center">
                
                <div className="flex text-yellow-400 text-[8px] sm:text-sm mb-2 sm:mb-4">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>

                {/* ✅ SERVICE TITLE: Bold, Uppercase, and Spaced */}
                <h2 className="text-[12px] sm:text-4xl font-black text-[#265336] mb-3 sm:mb-6 leading-tight uppercase tracking-tighter drop-shadow-[0_2px_2px_rgba(0,0,0,0.1)] group-hover:tracking-normal transition-all duration-500">
                  {service.title}
                </h2>

                {service?.desc?.[0]?.heading && (
                  <p className="text-gray-500 text-[10px] sm:text-xl mb-6 sm:mb-8 line-clamp-2 font-medium leading-relaxed">
                    {service.desc[0].heading}
                  </p>
                )}

                {/* --- 3D Attractive Button --- */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/services/${service.slug}`);
                  }}
                  className="mt-auto group/btn relative bg-gradient-to-r from-[#265336] to-[#10B981] text-white px-5 py-2.5 sm:px-10 sm:py-5 rounded-xl sm:rounded-2xl font-black text-[10px] sm:text-xl uppercase tracking-widest shadow-[0_10px_20px_rgba(38,83,54,0.2)] hover:shadow-[0_20px_40px_rgba(16,185,129,0.4)] transition-all duration-300 hover:-translate-y-1 flex items-center gap-3 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                  <span className="relative z-10">Details</span>
                  <FaArrowRight className="relative z-10 group-hover/btn:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default Services;