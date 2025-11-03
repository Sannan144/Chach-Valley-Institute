import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTiktok, FaYoutube } from "react-icons/fa"; // 🔹 Updated here (FaInstagram → FaYoutube)

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#1b3a2b] via-[#255235] to-[#4fa773] text-white py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between md:items-start space-y-6 md:space-y-0">
          {/* Navigation Links */}
          <div>
            <h2 className="text-lg font-semibold mb-3 border-b-2 border-lime-400 w-fit pb-1">
              Quick Links
            </h2>
            <ul className="space-y-2">
              
              {['home','courses','products','services','contact-us'].map((item,index)=>{
                return <li>
                        <Link
                          key={index}
                          to={item === 'home' ? '/' : `/${item}`}
                          className="hover:text-lime-300 capitalize transition duration-200"
                        >
                           {item}
                         </Link>
                      </li>
               })} 

            </ul>
          </div>

          {/* Location */}
          <div className="text-center md:text-left">
            <h2 className="text-lg font-semibold mb-3 border-b-2 border-lime-400 w-fit pb-1">
              Our Location
            </h2>
            <p className="max-w-xs text-gray-100">
              📍 VPO Waisa, Tehsil Hazroo, District Attock, Pakistan
            </p>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-left">
            <h2 className="text-lg font-semibold mb-3 border-b-2 border-lime-400 w-fit pb-1">
              Follow Us
            </h2>
            <div className="flex justify-center md:justify-start space-x-5 text-2xl">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-lime-300 transition duration-200"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-lime-300 transition duration-200"
              >
                <FaTiktok />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-lime-300 transition duration-200"
              >
                <FaYoutube /> {/* 🔹 Replaced Instagram with YouTube */}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 mt-8 pt-4 text-center text-sm text-gray-200">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold">Chach Valley Institute</span>. All
          Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
