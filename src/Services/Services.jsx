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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {ServicesData.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5 text-center flex flex-col justify-between h-[220px]">
                <h2 className="text-xl font-bold text-[#255235] mb-2">
                  {service.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>

                {/* Navigate to dynamic route */}
                <button
                  onClick={() => navigate(`/services/${service.slug}`)}
                  className="bg-[#255235] cursor-pointer text-white px-4 py-2 rounded-full font-medium hover:bg-[#1f3f27] transition-all duration-300"
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
