import React, { useState } from "react";
import { 
  FaTimes, FaCheckCircle, FaGraduationCap, FaAward, FaWallet, 
  FaUserGraduate, FaCalendarAlt, FaCheckDouble, FaShareAlt, FaCheck,
  FaPlayCircle
} from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

const CourseDetails = ({ course, onClose, onOpenForm }) => {
  const [copied, setCopied] = useState(false);

  if (!course) return null;

  const handleShare = () => {
    const baseUrl = window.location.origin + window.location.pathname;
    const shareableLink = `${baseUrl}?course=${course.id}`;
    
    navigator.clipboard.writeText(shareableLink).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="fixed inset-0 z-[100] bg-[#0d1f14]/80 backdrop-blur-md flex justify-center items-center p-0 transition-all duration-500 overflow-hidden text-gray-800 font-sans">
      
      {/* CLOSE BUTTON */}
      <button 
        onClick={onClose}
        className="fixed top-4 right-4 md:top-6 md:right-6 p-3 bg-white/10 hover:bg-red-500 backdrop-blur-xl rounded-full transition-all duration-300 z-[150] text-white shadow-2xl hover:scale-110 active:scale-95 flex items-center justify-center group"
      >
        <FaTimes className="text-xl md:text-2xl group-hover:text-white" />
      </button>

      {/* Main Container */}
      <div className="bg-[#f8faf9] w-full h-full overflow-y-auto relative flex flex-col scroll-smooth">

        {/* --- PREMIUM HEADER --- */}
        <div className="relative pt-16 pb-20 md:pt-24 md:pb-32 text-center bg-[#0a180f] text-white overflow-hidden shadow-md">
          {/* Background Graphic */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#10B981] rounded-full blur-[150px]"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#265336] rounded-full blur-[150px]"></div>
          </div>
          
          <div className="relative z-10 px-4 max-w-5xl mx-auto">
            <button 
              onClick={handleShare}
              className="mb-6 mx-auto flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 px-5 py-2 rounded-full transition-all text-sm font-bold tracking-widest uppercase backdrop-blur-md text-emerald-50"
            >
              {copied ? <><FaCheck className="text-emerald-400" /> Link Copied!</> : <><FaShareAlt /> Share Course</>}
            </button>

            <h2 className="text-3xl md:text-6xl font-black mb-4 tracking-tight drop-shadow-xl capitalize leading-tight">
              {course.title}
            </h2>
            <p className="text-xl md:text-3xl text-yellow-400 font-bold font-urdu mb-8 drop-shadow-md">
              اس کورس سے اپنے کیریئر کو نئی بلندیوں پر لے جائیں
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 md:gap-6 text-sm font-bold uppercase tracking-wide">
              <span className="bg-white/10 px-6 py-2.5 rounded-lg border border-white/10 backdrop-blur-sm flex items-center gap-2">
                 <FaCalendarAlt className="text-[#10B981]" /> {course.duration.split('|')[0]}
              </span>
              <span className="bg-[#10B981]/20 px-6 py-2.5 rounded-lg border border-[#10B981]/30 backdrop-blur-sm flex items-center gap-2">
                 <FaPlayCircle className="text-[#10B981]" /> {course.Mode}
              </span>
            </div>
          </div>
        </div>

        {/* --- CONTENT GRID (STICKY SIDEBAR LAYOUT) --- */}
        <div className="max-w-7xl mx-auto w-full p-4 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
          
          {/* LEFT: Course Syllabus & Details */}
          <div className="lg:col-span-8 flex flex-col gap-8 -mt-10 md:-mt-16 relative z-20">
            
            {/* What You'll Learn Section */}
            <div className="bg-white p-6 md:p-10 rounded-3xl shadow-xl border border-gray-100">
              <h3 className="flex items-center gap-3 text-2xl font-black text-[#265336] mb-8 border-b-2 border-emerald-50 pb-4 uppercase tracking-wide">
                <FaGraduationCap className="text-3xl text-[#10B981]" /> Complete Syllabus
              </h3>
              
              <div className="flex flex-col gap-6">
                {course.learn && course.learn.map((item, i) => (
                  <div key={i} className="group bg-[#f8faf9] p-6 rounded-2xl border border-gray-100 hover:border-[#10B981]/40 hover:shadow-md transition-all duration-300 relative overflow-hidden">
                    <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[#265336] to-[#10B981] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <h4 className="font-bold text-gray-900 text-lg mb-4 flex items-start gap-3">
                      <span className="bg-[#265336] text-white w-7 h-7 flex items-center justify-center rounded-lg text-sm shrink-0 shadow-md">
                        {i + 1}
                      </span> 
                      <span className="mt-0.5">{item.heading.replace(/^\d+\.\s*/, '')}</span>
                    </h4>
                    <ul className="space-y-2.5 pl-10">
                      {item.subParts && item.subParts.map((valu, idx) => (
                        <li key={idx} className="text-gray-600 text-[15px] font-medium flex items-start gap-2.5 leading-relaxed">
                          <FaCheckCircle className="text-[#10B981] mt-1 shrink-0 text-sm" /> 
                          <span dangerouslySetInnerHTML={{ __html: valu.replace(/^[^\sA-Za-z0-9]+ /, '') }} />
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Sticky Sidebar (Pricing, CTA, Benefits) */}
          <div className="lg:col-span-4 relative">
            <div className="sticky top-6 flex flex-col gap-6 -mt-10 md:-mt-16 z-30">
              
              {/* Main Action / Pricing Card */}
              <div className="bg-white p-8 rounded-3xl shadow-2xl border-t-[6px] border-[#10B981]">
                <h3 className="text-sm font-black text-gray-400 mb-2 uppercase tracking-widest text-center">
                  Course Investment
                </h3>
                <div className="flex flex-col items-center gap-1 mb-6">
                  <span className="text-5xl font-black text-[#265336]">Rs. {course.Fee || "25000"}</span>
                  <span className="text-sm font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full mt-2">
                    One-Time Payment
                  </span>
                </div>

                <ul className="space-y-4 mb-8 text-sm font-semibold text-gray-700">
                  <li className="flex items-center gap-3">
                    <div className="bg-emerald-100 p-2 rounded-full"><FaCheckDouble className="text-[#10B981]" /></div>
                    Easy Installments Available
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-orange-100 p-2 rounded-full"><FaCalendarAlt className="text-orange-500" /></div>
                    3 Days Free Demo Class
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-full"><FaAward className="text-blue-500" /></div>
                    Verified Certificate Included
                  </li>
                </ul>

                {/* --- BILINGUAL CTA BUTTON --- */}
                <button
                  onClick={onOpenForm}
                  className="w-full relative group bg-gradient-to-r from-[#265336] to-[#10B981] text-white p-4 rounded-xl font-black text-xl shadow-[0_10px_20px_rgba(16,185,129,0.3)] hover:shadow-[0_15px_30px_rgba(16,185,129,0.5)] transition-all duration-300 hover:-translate-y-1 active:scale-95 overflow-hidden flex flex-col items-center justify-center gap-1"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                  <span className="relative z-10 flex items-center gap-2 uppercase tracking-wide">
                    Enroll Now <BsArrowRight className="text-2xl group-hover:translate-x-2 transition-transform" />
                  </span>
                  <span className="relative z-10 font-urdu text-sm text-yellow-300 font-medium">
                    داخلے کے لیے یہاں کلک کریں
                  </span>
                </button>
              </div>

              {/* Target Audience Card */}
              <div className="bg-[#fffbeb] p-6 rounded-3xl shadow-lg border border-amber-100">
                <h3 className="text-lg font-black text-[#b45309] mb-4 flex items-center gap-2 uppercase">
                  <FaUserGraduate /> Perfect For
                </h3>
                <div className="space-y-2">
                  {course.Join && course.Join.map((item, i) => (
                    <div key={i}>
                      {item.subParts.map((valu, idx) => (
                        <p key={idx} className="text-sm text-amber-900/80 font-semibold flex gap-2 mb-2">
                           <span className="text-amber-500">•</span> {valu.replace(/^[^\sA-Za-z0-9]+ /, '')}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Outcomes Card */}
              <div className="bg-[#eff6ff] p-6 rounded-3xl shadow-lg border border-blue-100">
                <h3 className="text-lg font-black text-[#1e40af] mb-4 flex items-center gap-2 uppercase">
                  <FaAward /> Course Outcomes
                </h3>
                <div className="space-y-2">
                  {course.Outcome && course.Outcome.map((item, i) => (
                    <div key={i}>
                      {item.subParts.map((valu, idx) => (
                         <p key={idx} className="text-sm text-blue-900/80 font-semibold flex items-start gap-2 mb-2 leading-tight">
                            <span className="text-blue-500 mt-0.5">✔</span> {valu.replace(/^[^\sA-Za-z0-9]+ /, '')}
                         </p>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* --- MOBILE STICKY BOTTOM BUTTON --- */}
        <div className="lg:hidden sticky bottom-0 left-0 w-full p-4 bg-white/95 backdrop-blur-md border-t border-gray-200 z-50 shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
           <button
             onClick={onOpenForm}
             className="w-full bg-gradient-to-r from-[#265336] to-[#10B981] text-white py-3 px-4 rounded-xl font-black text-lg shadow-lg active:scale-95 transition-all flex flex-col items-center justify-center gap-0.5"
           >
             <span className="uppercase tracking-wide flex items-center gap-2">
               Admission Now <BsArrowRight className="text-xl" />
             </span>
             <span className="font-urdu text-xs text-yellow-300 font-medium">
               داخلے کے لیے یہاں کلک کریں
             </span>
           </button>
        </div>

      </div>
    </div>
  );
};

export default CourseDetails;