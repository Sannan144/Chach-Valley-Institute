import React from "react";
import { 
  FaTimes, 
  FaCheckCircle, 
  FaGraduationCap, 
  FaAward, 
  FaWallet, 
  FaArrowRight, 
  FaUserGraduate,
  FaCalendarAlt,
  FaCheckDouble
} from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

const CourseDetails = ({ course, onClose, onOpenForm }) => {
  if (!course) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-[#0d1f14]/95 backdrop-blur-md flex justify-center items-center p-0 transition-all duration-500 overflow-hidden text-gray-800 font-sans">
      
      {/* --- Background Glowing Effects --- */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-[#10B981] rounded-full blur-[120px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#265336] rounded-full blur-[120px] opacity-30"></div>

      {/* ✅ RED CROSS BUTTON (Fixed Position) */}
      <button 
        onClick={onClose}
        className="fixed top-4 right-4 md:top-8 md:right-8 p-3 md:p-4 bg-white hover:bg-red-50 backdrop-blur-xl rounded-full transition-all duration-300 z-[150] border border-red-100 shadow-2xl text-red-600 hover:scale-110 active:scale-95 flex items-center justify-center"
      >
        <FaTimes className="text-xl md:text-4xl" />
      </button>

      {/* Main Full-screen container */}
      <div className="bg-[#f4f7f5] w-full h-full overflow-y-auto relative flex flex-col scroll-smooth">

        {/* --- Header Section (Logo Themed) --- */}
        <div className="relative pt-16 pb-24 md:pt-24 md:pb-44 text-center bg-gradient-to-br from-[#0d1f14] via-[#265336] to-[#3e8558] text-white overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]"></div>
          
          <div className="relative z-10 px-4">
            <h2 className="text-3xl md:text-7xl font-black mb-6 tracking-[0.15em] drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)] uppercase leading-tight">
              {course.title}
            </h2>
            <div className="flex flex-wrap justify-center gap-4 text-xs md:text-lg font-bold uppercase tracking-widest">
              <span className="bg-white/10 px-5 py-2 rounded-full border border-white/20 backdrop-blur-sm text-white">⏳ {course.duration}</span>
              <span className="bg-[#10B981]/20 px-5 py-2 rounded-full border border-[#10B981]/30 backdrop-blur-sm text-white">🌐 {course.Mode}</span>
            </div>
          </div>
        </div>

        {/* --- Content Sections --- */}
        <div className="max-w-7xl mx-auto w-full p-4 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10 -mt-16 md:-mt-24">
          
          {/* What You'll Learn */}
          <div className="lg:col-span-8 bg-white p-6 md:p-10 rounded-[2.5rem] shadow-xl border border-gray-100">
            <h3 className="flex items-center gap-3 text-2xl font-black text-[#265336] mb-8 border-b-2 border-emerald-50 pb-4 uppercase tracking-[0.1em]">
              <FaGraduationCap className="text-3xl" /> Course Overview
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {course.learn && course.learn.map((item, i) => (
                <div key={i} className="group bg-emerald-50/40 p-6 rounded-2xl border border-emerald-100/50 hover:bg-emerald-50 transition-all duration-300">
                  <h4 className="font-black text-[#265336] text-lg mb-3 flex items-center gap-2">
                    <div className="w-2.5 h-2.5 bg-[#10B981] rounded-full shadow-[0_0_10px_#10B981]"></div> {item.heading}
                  </h4>
                  <ul className="space-y-2">
                    {item.subParts && item.subParts.map((valu, idx) => (
                      <li key={idx} className="text-gray-600 text-sm font-medium flex items-start gap-2 leading-relaxed">
                        <FaCheckCircle className="text-emerald-500 mt-1 shrink-0" /> {valu}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-6 text-gray-800">
            
            <div className="bg-gradient-to-br from-[#fefce8] to-[#fffbeb] p-8 rounded-[2.5rem] shadow-lg border border-amber-100">
              <h3 className="text-xl font-black text-[#b45309] mb-4 flex items-center gap-2 uppercase tracking-tighter">
                <FaUserGraduate /> Requirements
              </h3>
              <div className="space-y-4">
                {course.Join && course.Join.map((item, i) => (
                  <div key={i}>
                    <p className="font-bold text-amber-900 mb-1">{item.heading}</p>
                    {item.subParts.map((valu, idx) => (
                      <p key={idx} className="text-sm text-amber-800/70 font-medium">• {valu}</p>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#eff6ff] to-[#dbeafe] p-8 rounded-[2.5rem] shadow-lg border border-blue-100">
              <h3 className="text-xl font-black text-[#1e40af] mb-4 flex items-center gap-2 uppercase tracking-tighter">
                <FaAward /> Key Benefits
              </h3>
              <div className="space-y-4 text-sm text-blue-900/70 font-medium">
                {course.Outcome && course.Outcome.map((item, i) => (
                  <div key={i}>
                    <p className="font-bold text-blue-950">{item.heading}</p>
                    {item.subParts.map((valu, idx) => (
                       <p key={idx} className="flex gap-2"><span>✅</span> {valu}</p>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border-t-4 border-[#10B981] flex flex-col gap-5">
              <h3 className="text-xl font-black text-gray-800 mb-2 flex items-center gap-2 uppercase tracking-tight">
                <FaWallet className="text-[#10B981]" /> Pricing Plan
              </h3>
              <div className="flex flex-col gap-4">
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-black text-[#265336]">Rs. {course.Fee}</span>
                  <span className="text-gray-400 font-bold mb-1">/- Total</span>
                </div>
                
                <div className="space-y-3 pt-2 border-t border-gray-50">
                   <div className="flex items-center gap-3 text-emerald-700 font-extrabold bg-emerald-50 px-4 py-3 rounded-xl border border-emerald-100">
                      <FaCheckDouble className="text-lg" />
                      <span className="text-sm uppercase tracking-wide">Installments Available</span>
                   </div>
                   <div className="flex items-center gap-3 text-orange-700 font-extrabold bg-orange-50 px-4 py-3 rounded-xl border border-orange-100">
                      <FaCalendarAlt className="text-lg" />
                      <span className="text-sm uppercase tracking-wide">3 Days Free Demo Class</span>
                   </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* --- ADMISSION NOW BUTTON (Fixed Bottom) --- */}
        <div className="sticky bottom-0 p-6 md:p-8 bg-white/90 backdrop-blur-md border-t border-gray-100 flex justify-center z-50">
          <button
            onClick={onOpenForm}
            className="group relative bg-gradient-to-r from-[#265336] to-[#10B981] text-white px-8 py-5 rounded-2xl w-full max-w-2xl font-black text-xl md:text-4xl shadow-[0_15px_40px_rgba(16,185,129,0.4)] hover:shadow-[0_20px_50px_rgba(16,185,129,0.6)] transition-all duration-300 hover:-translate-y-2 active:scale-95 overflow-hidden flex items-center justify-center gap-4"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            
            <span className="relative z-10 tracking-[0.1em] uppercase drop-shadow-lg">
               Admission Now
            </span>
            <BsArrowRight className="relative z-10 group-hover:translate-x-4 transition-transform duration-300 text-3xl md:text-5xl" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default CourseDetails;