import React from "react";
import { FaTimes, FaUser, FaMapMarkerAlt, FaGraduationCap, FaWhatsapp, FaClipboardList } from "react-icons/fa";

const AdmissionForm = ({ course, onClose, formData, setFormData, onSubmit }) => {
  if (!course) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="fixed inset-0 z-[200] bg-[#0d1f14]/90 backdrop-blur-lg flex justify-center items-center p-4 overflow-y-auto">
      
      {/* --- Background 3D Glows --- */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#10B981] rounded-full blur-[100px] opacity-20"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#265336] rounded-full blur-[100px] opacity-30"></div>

      {/* --- Main 3D Card --- */}
      <div className="relative bg-white/95 w-full max-w-lg rounded-[2.5rem] p-6 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white overflow-hidden animate-scale-up">
        
        {/* Subtle Decorative Pattern */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#265336] via-[#10B981] to-[#265336]"></div>

        {/* ✅ RED CROSS BUTTON */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 p-2 bg-red-50 hover:bg-red-500 text-red-600 hover:text-white rounded-full transition-all duration-300 z-10 shadow-sm hover:scale-110 active:scale-95"
        >
          <FaTimes className="text-xl" />
        </button>

        {/* Header Section */}
        <div className="text-center mb-8 pt-2">
          <div className="bg-emerald-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-inner">
            <FaClipboardList className="text-[#265336] text-3xl" />
          </div>
          <h2 className="text-xl md:text-3xl font-black text-[#265336] uppercase tracking-[0.1em] leading-tight">
            Admission Form
          </h2>
          <p className="text-gray-500 text-[10px] md:text-xs font-bold mt-2 tracking-widest uppercase opacity-70">
            {course.title}
          </p>
        </div>

        {/* Form Section */}
        <form onSubmit={onSubmit} className="space-y-5">
          {[
            { id: "name", label: "Full Name", icon: <FaUser />, placeholder: "Enter your full name" },
            { id: "address", label: "Address", icon: <FaMapMarkerAlt />, placeholder: "VPO, Tehsil, District" },
            { id: "education", label: "Last Education", icon: <FaGraduationCap />, placeholder: "Matric, Inter, Bachelor etc." }
          ].map((field) => (
            <div key={field.id} className="relative group">
              <label className="block text-[11px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">
                {field.label}
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#10B981] transition-colors">
                  {field.icon}
                </div>
                <input
                  required
                  type="text"
                  name={field.id}
                  placeholder={field.placeholder}
                  value={formData[field.id]}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border-2 border-gray-100 p-4 pl-12 rounded-2xl text-gray-800 font-semibold focus:outline-none focus:border-[#10B981] focus:bg-white focus:shadow-[0_10px_20px_rgba(16,185,129,0.1)] transition-all duration-300 placeholder:text-gray-300"
                />
              </div>
            </div>
          ))}

          {/* --- Attractive WhatsApp Button --- */}
          <div className="pt-4">
            <button
              type="submit"
              className="group relative w-full bg-gradient-to-r from-[#265336] to-[#10B981] text-white py-5 rounded-2xl font-black text-lg md:text-xl uppercase tracking-widest shadow-[0_15px_30px_rgba(38,83,54,0.3)] hover:shadow-[0_20px_40px_rgba(16,185,129,0.4)] transition-all duration-300 hover:-translate-y-1 active:scale-95 overflow-hidden flex items-center justify-center gap-3"
            >
              {/* Glossy Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <FaWhatsapp className="text-2xl animate-bounce" />
              <span>Send via WhatsApp</span>
            </button>
            <p className="text-center text-[9px] text-gray-400 mt-4 font-bold uppercase tracking-tighter">
              Thank You
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdmissionForm;