import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const Tabs = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ["home", "courses", "products", "services", "contact-us"];

  return (
    <div className="px-4 py-3 relative">
      {/* ✅ Desktop Tabs */}
      <div className="hidden md:flex gap-4 capitalize justify-around">
        {menuItems.map((item, i) => (
          <NavLink
            key={i}
            to={item === "home" ? "/" : `/${item}`}
            className={`tab-item border-2 px-8 py-2 rounded-4xl font-semibold hover:text-white hover:bg-[#255235] cursor-pointer transition-all duration-300`}
          >
            {item}
          </NavLink>
        ))}
      </div>

      {/* ✅ Mobile Menu Button */}
      <div
        className="md:hidden text-3xl cursor-pointer relative z-50 text-[#255235]"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <HiX /> : <HiMenu />}
      </div>

      {/* ✅ Animated Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen w-[280px] bg-[#255235] text-white shadow-2xl transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } flex flex-col justify-center items-center gap-8 z-40`}
      >
        {menuItems.map((item, i) => (
          <NavLink
            key={i}
            to={item === "home" ? "/" : `/${item}`}
            onClick={() => setIsOpen(false)} // close menu on click
            className="text-2xl font-semibold capitalize hover:text-yellow-300 transition-all duration-300"
          >
            {item}
          </NavLink>
        ))}

        {/* Decorative line or logo area (optional) */}
        <div className="absolute bottom-10 text-sm text-gray-200 opacity-80">
          © {new Date().getFullYear()} Chach Valley Institute
        </div>
      </div>

      {/* ✅ Background overlay when menu is open */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 md:hidden"
        ></div>
      )}
    </div>
  );
};

export default Tabs;
