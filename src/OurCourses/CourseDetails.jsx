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
    <div className="fixed inset-0 z-[100] bg-gray-900/60 backdrop-blur-sm flex justify-center items-center p-0 transition-all duration-500 overflow-hidden text-gray-800 font-sans">
      
      {/* CLOSE BUTTON (Friendly & Clear) */}
      <button 
        onClick={onClose}
        className="fixed top-4 right-4 md:top-6 md:right-6 p-3 bg-white hover:bg-red-50 text-gray-600 hover:text-red-500 rounded-full transition-all duration-300 z-[150] shadow-lg border border-gray-100 flex items-center justify-center group"
        title="Close"
      >
        <FaTimes className="text-xl md:text-2xl" />
      </button>

      {/* Main Container (Light Theme) */}
      <div className="bg-gray-50 w-full h-full overflow-y-auto relative flex flex-col scroll-smooth">

        {/* --- HERO / HEADER (Clean & Bright) --- */}
        <div className="relative pt-16 pb-12 md:pt-20 md:pb-20 text-center bg-white border-b border-gray-200 overflow-hidden shadow-sm">
          {/* Subtle Background Pattern/Gradients */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-40">
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-emerald-100 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-50 rounded-full blur-[100px]"></div>
          </div>
          
          <div className="relative z-10 px-4 max-w-5xl mx-auto">
            {/* Share Button */}
            <button 
              onClick={handleShare}
              className="mb-6 mx-auto flex items-center gap-2 bg-white hover:bg-gray-50 border border-gray-200 px-5 py-2 rounded-full transition-all text-sm font-semibold text-gray-600 shadow-sm"
            >
              {copied ? <><FaCheck className="text-emerald-500" /> Link Copied!</> : <><FaShareAlt className="text-gray-400" /> Share Course</>}
            </button>

            {/* Title */}
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight capitalize leading-tight">
              {course.title}
            </h2>
            <p className="text-xl md:text-2xl text-emerald-600 font-bold font-urdu mb-8">
              اس کورس سے اپنے کیریئر کو نئی بلندیوں پر لے جائیں
            </p>
            
            {/* Badges */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 text-sm font-semibold">
              <span className="bg-emerald-50 text-emerald-700 px-5 py-2 rounded-full border border-emerald-100 flex items-center gap-2">
                 <FaCalendarAlt className="text-emerald-500" /> {course.duration.split('|')[0]}
              </span>
              <span className="bg-blue-50 text-blue-700 px-5 py-2 rounded-full border border-blue-100 flex items-center gap-2">
                 <FaPlayCircle className="text-blue-500" /> {course.Mode}
              </span>
            </div>
          </div>
        </div>

        {/* --- CONTENT GRID --- */}
        <div className="max-w-7xl mx-auto w-full p-4 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
          
          {/* LEFT: Course Syllabus & Details */}
          <div className="lg:col-span-8 flex flex-col gap-6 relative z-20">
            
            {/* What You'll Learn Section */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-200">
              <h3 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">
                <FaGraduationCap className="text-3xl text-emerald-500" /> Complete Syllabus
              </h3>
              
              <div className="flex flex-col gap-4">
                {course.learn && course.learn.map((item, i) => (
                  <div key={i} className="bg-gray-50 p-5 rounded-xl border border-gray-100 hover:border-emerald-200 hover:shadow-sm transition-all duration-300">
                    <h4 className="font-bold text-gray-900 text-lg mb-3 flex items-start gap-3">
                      <span className="bg-emerald-100 text-emerald-700 w-7 h-7 flex items-center justify-center rounded-lg text-sm shrink-0">
                        {i + 1}
                      </span> 
                      <span className="mt-0.5">{item.heading.replace(/^\d+\.\s*/, '')}</span>
                    </h4>
                    <ul className="space-y-2 pl-10">
                      {item.subParts && item.subParts.map((valu, idx) => (
                        <li key={idx} className="text-gray-600 text-[15px] font-medium flex items-start gap-2.5">
                          <FaCheckCircle className="text-emerald-500 mt-1 shrink-0 text-sm" /> 
                          <span dangerouslySetInnerHTML={{ __html: valu.replace(/^[^\sA-Za-z0-9]+ /, '') }} />
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Sticky Sidebar */}
          <div className="lg:col-span-4 relative">
            <div className="sticky top-6 flex flex-col gap-6 z-30">
              
              {/* Action Card (Price removed, benefits kept) */}
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-emerald-100 border-t-4 border-t-emerald-500">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                  Start Your Journey
                </h3>

                <ul className="space-y-4 mb-8 text-sm font-medium text-gray-700">
                  <li className="flex items-center gap-3">
                    <div className="bg-emerald-50 p-2 rounded-full text-emerald-600"><FaCheckDouble /></div>
                    100% Practical Training
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-orange-50 p-2 rounded-full text-orange-500"><FaCalendarAlt /></div>
                    3 Days Free Demo Class
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-blue-50 p-2 rounded-full text-blue-500"><FaAward /></div>
                    Verified Certificate Included
                  </li>
                </ul>

                {/* --- CTA BUTTON (Updated to Apply Now) --- */}
                <button
                  onClick={onOpenForm}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white p-4 rounded-xl font-bold text-lg shadow-md hover:shadow-lg transition-all flex flex-col items-center justify-center gap-1"
                >
                  <span className="flex items-center gap-2">
                    Apply Now <BsArrowRight className="text-xl" />
                  </span>
                  <span className="font-urdu text-sm text-emerald-100 font-medium">
                    داخلے کے لیے یہاں کلک کریں
                  </span>
                </button>
              </div>

              {/* Target Audience Card */}
              <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
                <h3 className="text-lg font-bold text-orange-800 mb-4 flex items-center gap-2">
                  <FaUserGraduate className="text-orange-500" /> Perfect For
                </h3>
                <div className="space-y-2">
                  {course.Join && course.Join.map((item, i) => (
                    <div key={i}>
                      {item.subParts.map((valu, idx) => (
                        <p key={idx} className="text-sm text-orange-900/80 font-medium flex gap-2 mb-2">
                           <span className="text-orange-500">•</span> {valu.replace(/^[^\sA-Za-z0-9]+ /, '')}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Outcomes Card */}
              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                <h3 className="text-lg font-bold text-blue-800 mb-4 flex items-center gap-2">
                  <FaAward className="text-blue-500" /> Course Outcomes
                </h3>
                <div className="space-y-2">
                  {course.Outcome && course.Outcome.map((item, i) => (
                    <div key={i}>
                      {item.subParts.map((valu, idx) => (
                         <p key={idx} className="text-sm text-blue-900/80 font-medium flex items-start gap-2 mb-2 leading-tight">
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

        {/* --- MOBILE STICKY BOTTOM BUTTON (Updated to Apply Now) --- */}
        <div className="lg:hidden sticky bottom-0 left-0 w-full p-4 bg-white border-t border-gray-200 z-50 shadow-2xl">
           <button
             onClick={onOpenForm}
             className="w-full bg-emerald-600 text-white py-3 px-4 rounded-xl font-bold text-lg shadow-md active:scale-95 transition-all flex flex-col items-center justify-center gap-0.5"
           >
             <span className="flex items-center gap-2">
               Apply Now <BsArrowRight className="text-xl" />
             </span>
             <span className="font-urdu text-xs text-emerald-100 font-medium">
               داخلے کے لیے یہاں کلک کریں
             </span>
           </button>
        </div>

      </div>
    </div>
  );
};

export default CourseDetails;