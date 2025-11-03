import React from "react";
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Footer from "../Footer/Footer";
import Logo from "../Logo/Logo";
import Tabs from "../Tabs/Tabs";

const ContactUs = () => {
  const phoneNumber = "+923120574560";
  const whatsappNumber = "+923120574560";
  const email = "info@example.com";
  const address = "VPO Waisa Tehsil Hazro District Attock";

  return (
    <>
        <Logo/>
        <Tabs/>
      <div className="min-h-screen bg-gradient-to-b from-[#e6f0ea] to-[#f7faf7] p-6 sm:p-12">
        <h1 className="text-5xl font-extrabold text-[#265336] text-center mb-12 tracking-wide">
          Contact Us
        </h1>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Email Card */}
          <div className="flex items-center gap-6 bg-white shadow-lg rounded-2xl p-6">
            <FaEnvelope className="text-[#265336] text-3xl" />
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Email</h2>
              <p className="text-gray-600">{email}</p>
            </div>
          </div>

          {/* Phone Card - Full clickable */}
          <a
            href={`tel:${phoneNumber}`}
            className="flex items-center gap-6 bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl hover:scale-105 transition-transform transition-shadow duration-300"
          >
            <FaPhone className="text-[#265336] text-3xl" />
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Call Us</h2>
              <p className="text-[#1d422b] font-medium">{phoneNumber}</p>
            </div>
          </a>

          {/* WhatsApp Card - Full clickable */}
          <a
            href={`https://wa.me/${whatsappNumber.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-6 bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl hover:scale-105 transition-transform transition-shadow duration-300"
          >
            <FaWhatsapp className="text-green-500 text-3xl" />
            <div>
              <h2 className="text-lg font-semibold text-gray-800">WhatsApp</h2>
              <p className="text-green-600 font-semibold mt-1">Chat Now</p>
            </div>
          </a>

          {/* Address Card */}
          <div className="flex items-center gap-6 bg-white shadow-lg rounded-2xl p-6">
            <FaMapMarkerAlt className="text-red-500 text-3xl" />
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Address</h2>
              <p className="text-gray-600">{address}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default ContactUs;
