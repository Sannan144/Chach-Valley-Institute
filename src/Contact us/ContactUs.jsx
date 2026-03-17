import React from "react";
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaHeadset } from "react-icons/fa";
import Footer from "../Footer/Footer";
import Logo from "../Logo/Logo";

const ContactUs = () => {
  const phoneNumber = "+923120574560";
  const whatsappNumber = "+923120574560";
  const email = "info@example.com";
  const address = "VPO Waisa, Tehsil Hazro, District Attock";

  return (
    <div className="min-h-screen bg-[#f4f7f5] font-sans selection:bg-[#265336] selection:text-white">
      <Logo />

      {/* --- HERO SECTION --- */}
      <div className="relative bg-gradient-to-tr from-[#0d1f14] via-[#265336] to-[#3e8558] pt-20 pb-40 px-4 overflow-hidden border-b-4 border-[#10B981]/20">
        
        {/* Subtle Branding Overlays */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]"></div>
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#10B981] rounded-full blur-[120px] opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#265336] rounded-full blur-[100px] opacity-30"></div>

        <div className="relative z-10 max-w-7xl mx-auto text-center flex flex-col items-center">
          <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-md mb-6 border border-white/20 animate-bounce">
            <FaHeadset className="text-white text-3xl md:text-5xl" />
          </div>
          <h1 className="uppercase text-3xl md:text-5xl font-black text-white tracking-[0.25em] drop-shadow-[0_5px_15px_rgba(0,0,0,0.4)] animate-slide-up leading-tight">
            Contact Us
          </h1>
          <div className="mt-6 w-32 h-1.5 bg-gradient-to-r from-transparent via-[#10B981] to-transparent rounded-full shadow-lg"></div>
          <p className="mt-6 text-emerald-100/80 text-xs md:text-lg font-bold tracking-[0.1em] uppercase max-w-2xl">
            We're here to help you. Reach out to us through any channel below.
          </p>
        </div>

        {/* Wavy Shape */}
        <div className="absolute bottom-0 left-0 w-full leading-[0]">
          <svg viewBox="0 0 1440 320" className="w-full h-auto">
            <path fill="#f4f7f5" fillOpacity="1" d="M0,192L60,197.3C120,203,240,213,360,197.3C480,181,600,139,720,138.7C840,139,960,181,1080,192C1200,203,1320,181,1380,170.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      {/* --- CONTACT CARDS GRID --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 pb-24 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-10">
          
          {/* Email Card */}
          <div className="group relative bg-white p-8 rounded-[2.5rem] shadow-[0_15px_40px_rgba(0,0,0,0.06)] border-2 border-transparent hover:border-blue-400/30 transition-all duration-500 overflow-hidden flex items-center gap-6">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110">
              <FaEnvelope className="text-blue-600 text-3xl md:text-4xl" />
            </div>
            <div className="flex-1">
              <h2 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Send Email</h2>
              <p className="text-sm md:text-xl font-black text-gray-800 break-all">{email}</p>
            </div>
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-blue-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>

          {/* Phone Card */}
          <a
            href={`tel:${phoneNumber}`}
            className="group relative bg-white p-8 rounded-[2.5rem] shadow-[0_15px_40px_rgba(0,0,0,0.06)] border-2 border-transparent hover:border-[#10B981]/30 transition-all duration-500 overflow-hidden flex items-center gap-6 transform hover:-translate-y-2"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 bg-emerald-50 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 shadow-inner">
              <FaPhone className="text-[#265336] text-3xl md:text-4xl" />
            </div>
            <div className="flex-1">
              <h2 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Direct Call</h2>
              <p className="text-sm md:text-xl font-black text-[#265336] tracking-tighter">{phoneNumber}</p>
            </div>
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-emerald-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>

          {/* WhatsApp Card */}
          <a
            href={`https://wa.me/${whatsappNumber.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-white p-8 rounded-[2.5rem] shadow-[0_15px_40px_rgba(0,0,0,0.06)] border-2 border-transparent hover:border-green-400/30 transition-all duration-500 overflow-hidden flex items-center gap-6 transform hover:-translate-y-2"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 bg-green-50 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 shadow-inner">
              <FaWhatsapp className="text-green-500 text-3xl md:text-4xl" />
            </div>
            <div className="flex-1">
              <h2 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">WhatsApp Chat</h2>
              <p className="text-sm md:text-xl font-black text-green-600 tracking-tighter uppercase">Connect Instantly</p>
            </div>
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-green-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-pulse"></div>
          </a>

          {/* Address Card */}
          <div className="group relative bg-white p-8 rounded-[2.5rem] shadow-[0_15px_40px_rgba(0,0,0,0.06)] border-2 border-transparent hover:border-red-400/30 transition-all duration-500 overflow-hidden flex items-center gap-6">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-red-50 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110">
              <FaMapMarkerAlt className="text-red-500 text-3xl md:text-4xl" />
            </div>
            <div className="flex-1">
              <h2 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Our Location</h2>
              <p className="text-sm md:text-lg font-bold text-gray-700 leading-tight">{address}</p>
            </div>
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-red-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        </div>

        {/* ✅ UPDATED REFINED CTA SECTION */}
        <div className="mt-20 p-8 md:p-20 bg-gradient-to-br from-[#0d1f14] via-[#265336] to-[#0d1f14] rounded-[3rem] text-center shadow-[0_30px_70px_rgba(0,0,0,0.4)] relative overflow-hidden border border-[#10B981]/30 group">
          
          {/* Background Decorative Elements */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#10B981] rounded-full blur-[140px] opacity-10 group-hover:opacity-20 transition-opacity duration-700"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#265336] rounded-full blur-[100px] opacity-20"></div>

          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-2xl md:text-5xl font-black text-white uppercase tracking-[0.2em] mb-4 drop-shadow-lg leading-tight">
              Have Any Questions?
            </h2>
            
            <div className="w-20 h-1 bg-[#10B981] rounded-full mb-8 shadow-[0_0_15px_#10B981]"></div>
            
            <p className="text-emerald-100/70 font-bold uppercase tracking-[0.3em] text-[10px] md:text-sm mb-10 max-w-xl leading-relaxed">
              Our team is ready to assist you in your career journey. Feel free to drop a message.
            </p>
            
            <button 
              onClick={() => window.location.href = `mailto:${email}`}
              className="relative px-12 py-5 bg-[#10B981] text-[#0d1f14] rounded-2xl font-black text-lg md:text-xl uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:shadow-[0_0_40px_rgba(255,255,255,0.6)] hover:-translate-y-2 active:scale-95 group/btn overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
              Send a Message
            </button>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;