import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTiktok, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-[#06110B] text-white pt-8 pb-4 overflow-hidden border-t-2 border-[#10B981]">
      
      {/* --- Background Glowing Effects (Enhanced Colors) --- */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#10B981] rounded-full mix-blend-screen filter blur-[130px] opacity-15 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#059669] rounded-full mix-blend-screen filter blur-[130px] opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
        
        {/* --- Quick Links Section (Large Text & Unique Shapes) --- */}
        <div className="w-full max-w-4xl mb-6">
          <h2 className="text-sm font-black mb-5 flex items-center justify-center gap-3 text-[#10B981] tracking-[0.3em] uppercase opacity-90">
            <span className="w-10 h-[1px] bg-gradient-to-r from-transparent to-[#10B981]"></span>
            Menu
            <span className="w-10 h-[1px] bg-gradient-to-l from-transparent to-[#10B981]"></span>
          </h2>
          
          <div className="grid grid-cols-3 gap-3 sm:gap-6">
            {['home', 'courses', 'products', 'services', 'blog', 'contact-us'].map((item, index) => (
              <Link
                key={index}
                to={item === 'home' ? '/' : `/${item}`}
                className="relative py-5 sm:py-9 bg-gradient-to-br from-white/[0.07] to-transparent backdrop-blur-xl border border-white/10 rounded-tl-[2rem] rounded-br-[2rem] hover:border-[#10B981] hover:bg-[#10B981]/15 hover:-translate-y-1.5 transition-all duration-500 overflow-hidden group flex items-center justify-center shadow-xl"
              >
                {/* ✅ LARGE FONT + TRACKING + SHARP BLACK SHADOW */}
                <span className="uppercase relative z-10 text-[11px] sm:text-3xl font-black tracking-[0.18em] text-white drop-shadow-[0_4px_3px_rgba(0,0,0,1)] group-hover:text-[#10B981] transition-colors duration-300">
                  {item.replace("-", " ")}
                </span>
                
                {/* Subtle Glow Shine inside shape */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>
            ))}
          </div>
        </div>

        {/* --- Social Links (Compact & Vibrant) --- */}
        <div className="flex flex-col items-center mb-6">
          <div className="flex gap-5 sm:gap-10" style={{ perspective: '1000px' }}>
            {[
              { icon: <FaFacebookF />, color: "#1877F2", url: "https://facebook.com" },
              { icon: <FaTiktok />, color: "#2AF598", url: "https://www.tiktok.com" }, // Mint green for attractive tiktok look
              { icon: <FaYoutube />, color: "#FF0000", url: "https://www.youtube.com" }
            ].map((social, i) => (
              <a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-16 sm:h-16 bg-white/5 backdrop-blur-md flex items-center justify-center rounded-2xl text-xl sm:text-3xl border border-white/10 text-white hover:scale-110 transition-all duration-300 shadow-lg"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = social.color;
                  e.currentTarget.style.boxShadow = `0 0 20px ${social.color}55`;
                  e.currentTarget.style.color = social.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "";
                  e.currentTarget.style.boxShadow = "";
                  e.currentTarget.style.color = "white";
                }}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* --- Bottom Copyright Area --- */}
        <div className="w-full relative mt-2">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-[1px] bg-gradient-to-r from-transparent via-[#10B981] to-transparent opacity-50"></div>
          
          <div className="pt-4 flex flex-col items-center gap-1 text-[9px] sm:text-xs text-gray-500 font-bold tracking-[0.25em]">
            <p>
              © {new Date().getFullYear()} <span className="text-[#10B981] drop-shadow-md">CHACH VALLEY INSTITUTE</span>
            </p>
            <p className="opacity-90">BUILT FOR EXCILLENCE</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;