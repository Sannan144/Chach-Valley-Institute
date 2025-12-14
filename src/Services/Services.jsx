import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo";
import Tabs from "../Tabs/Tabs";
import Footer from "../Footer/Footer";
import ServicesData from "./ServicesData";

const Services = () => {
  const navigate = useNavigate();

  return (
    <>
      <Logo />
      <Tabs />

      {/* Heading Section */}
      <div className="bg-[#255235] text-white text-center py-12 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide">
          Our Services
        </h1>
        <p className="mt-3 text-gray-200 text-sm sm:text-base max-w-2xl mx-auto">
          We provide professional, high-quality services to help you achieve your goals.
        </p>
      </div>

      {/* Services Section */}
      <div className="bg-[#f3f4f6] py-12 px-6 sm:px-10">
        
        {/* --- CHANGES HERE --- */}
        {/* 1. Added 'max-w-6xl mx-auto' to center the grid nicely */}
        {/* 2. Changed 'lg:grid-cols-4' to 'md:grid-cols-2' -> Now showing 2 cards per row on big screens */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {ServicesData.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group cursor-pointer min-h-[450px] flex flex-col h-full"
              onClick={() => navigate(`/services/${service.slug}`)} 
            >
              {/* Image Section */}
              <div className="w-full aspect-video sm:aspect-auto sm:h-72 overflow-hidden shrink-0">
                 {/* Note: Maine height thori barha kar 'h-72' kar di hy ta k card bara hony par image choti na lagy */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content Section */}
              <div className="p-6 text-center flex flex-col flex-1">
                
                {/* Text Wrapper */}
                <div className="mb-4">
                  <h2 className="text-2xl font-bold text-[#255235] mb-3 leading-tight">
                    {service.title}
                  </h2>
                  {service?.desc?.[0]?.heading && (
                    <p className="text-gray-600 text-lg mb-2 line-clamp-3">
                      {service.desc[0].heading}
                    </p>
                  )}
                </div>

                {/* Navigate button (Text k foran neechay) */}
                <button
                  onClick={(e) => {
                    e.stopPropagation(); 
                    navigate(`/services/${service.slug}`);
                  }}
                  className="bg-[#255235] cursor-pointer text-white px-6 py-3 rounded-full font-medium hover:bg-[#1f3f27] transition-all duration-300 self-center"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Services;