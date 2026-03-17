import React, { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { NavLink } from "react-router-dom";

// 1. Tabs Component (Desktop Links & Mobile Menu Only)
const Tabs = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ["home", "courses", "products", "services", "blog", "contact-us"];

  // Jab mobile menu open ho to piche wali screen ka vertical scroll disable kar dein
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className="flex items-center gap-4 lg:gap-8">
      
      {/* ✅ Desktop Tabs (Pill Buttons Style) - Sirf bari screens par nazar ayen ge */}
      <div className="hidden md:flex items-center gap-2 capitalize">
        {menuItems.map((item, i) => (
          <NavLink
            key={i}
            to={item === "home" ? "/" : `/${item}`}
            className={({ isActive }) =>
              `px-5 py-2 rounded-full font-bold text-sm transition-all duration-300 ${
                isActive
                  ? "bg-[#255235] text-white shadow-md shadow-[#255235]/30 transform scale-105"
                  : "text-gray-600 hover:bg-[#255235]/10 hover:text-[#255235]"
              }`
            }
          >
            {item.replace("-", " ")}
          </NavLink>
        ))}
      </div>

      {/* ✅ Mobile Menu Button */}
      <div className="md:hidden flex items-center text-[#255235]">
        <div
          className={`text-3xl cursor-pointer relative z-[2147483647] p-1 rounded-lg transition-colors ${
            isOpen ? "bg-transparent" : "bg-gray-100 hover:bg-gray-200"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX className="text-white drop-shadow-md" /> : <HiMenu />} 
        </div>
      </div>

      {/* ✅ Animated Mobile Sidebar */}
      {/* Fix: transform/translate ki jagah -right-[250px] use kiya hy ta k horizontal scroll khatam ho */}
      <div
        className={`fixed top-0 h-screen w-[220px] bg-gradient-to-b from-[#1a3b26] to-[#255235] text-white shadow-[-20px_0_40px_rgba(0,0,0,0.5)] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isOpen ? "right-0" : "-right-[250px]"
        } flex flex-col pt-20 px-5 gap-4 z-[2147483646]`}
      >
        {/* Mobile Links */}
        {menuItems.map((item, i) => (
          <NavLink
            key={i}
            to={item === "home" ? "/" : `/${item}`}
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `text-base font-semibold capitalize tracking-wide transition-all duration-300 pb-2 border-b border-white/10 ${
                isActive ? "text-yellow-400 pl-3 border-yellow-400/30" : "hover:text-yellow-200 hover:pl-1"
              }`
            }
          >
            {item.replace("-", " ")}
          </NavLink>
        ))}

        {/* Branding Footer in Sidebar */}
        <div className="absolute bottom-6 text-[10px] font-medium text-gray-300 opacity-60 text-center w-[calc(100%-2.5rem)]">
          © {new Date().getFullYear()} Chach Valley
        </div>
      </div>

      {/* ✅ Background blur overlay when mobile menu is open */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[2147483645] md:hidden transition-opacity duration-300"
        ></div>
      )}
    </div>
  );
};

// 2. Main Logo Component (Non-Fixed Header)
const Logo = () => {
  return (
    // Fix: sticky aur top-0 hata diya gaya hy ta k header fix na rahy (relative use kiya hy)
    <header className="relative z-[100] bg-white border-b border-gray-200/60 shadow-[0_4px_30px_rgba(0,0,0,0.03)] transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-3">
        
        {/* Logo Image */}
        <div className="flex-shrink-0 cursor-pointer hover:opacity-90 transition-opacity duration-300">
          <img 
            className="object-contain h-12 sm:h-14 w-auto" 
            src="/images/logo.png" 
            alt="Chach Valley Institute Logo" 
          />
        </div>
        
        {/* Tabs Rendered Here */}
        <Tabs />
        
      </div>
    </header>
  );
};

export default Logo;