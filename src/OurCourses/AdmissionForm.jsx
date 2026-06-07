import React, { useState } from "react";
import { 
  FaTimes, FaUser, FaMapMarkerAlt, FaGraduationCap, 
  FaClipboardList, FaCheckCircle, FaSpinner, FaExclamationCircle 
} from "react-icons/fa";

const AdmissionForm = ({ course, onClose, formData, setFormData }) => {
  const [submitStatus, setSubmitStatus] = useState("idle"); // "idle", "loading", "success", "error"

  if (!course) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLocalSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus("loading");

    try {
      const scriptURL = "https://script.google.com/macros/s/AKfycbybYC0mV0T6LRXYoDiy_YaeXEu4EUzHN_XBNn8oZcJOAY19DRMg67do-lHHxJbqNMZJcg/exec";
      
      const response = await fetch(scriptURL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          fullName: formData.name, 
          address: formData.address,
          lastEducation: formData.education
        }),
      });

      const result = await response.json();

      if (result.result === "success") {
        setSubmitStatus("success");
        setFormData({ name: "", address: "", education: "" }); // Form clear
        
        // 3 Seconds baad modal khud band ho jayega
        setTimeout(() => {
          onClose();
        }, 3000);
      } else {
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus("idle"), 4000); // 4 sec baad error message hat jayega
      }
    } catch (error) {
      console.error("Submit Error:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 4000);
    }
  };

  return (
    <div className="fixed inset-0 z-[200] bg-[#0d1f14]/90 backdrop-blur-lg flex justify-center items-center p-4 overflow-y-auto transition-opacity duration-500">
      
      {/* --- Background 3D Glows --- */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#10B981] rounded-full blur-[100px] opacity-20"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#265336] rounded-full blur-[100px] opacity-30"></div>

      {/* =========================================
          SUCCESS SCREEN (Shows after submission)
      ========================================= */}
      {submitStatus === "success" ? (
        <div className="relative bg-white w-full max-w-sm rounded-[2.5rem] p-10 text-center shadow-2xl border border-emerald-100 animate-bounce-in flex flex-col items-center">
          <div className="w-24 h-24 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mb-6 shadow-inner">
            <FaCheckCircle className="text-6xl animate-pulse" />
          </div>
          <h2 className="text-3xl font-black text-gray-800 mb-2 tracking-tight">Success!</h2>
          <p className="text-gray-500 font-medium leading-relaxed">
            Your admission request for <br/><b className="text-emerald-600">{course.title}</b><br/> has been submitted.
          </p>
          <div className="mt-8 w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
            <div className="bg-emerald-500 h-full animate-[progress_3s_ease-in-out]"></div>
          </div>
        </div>
      ) : (

      /* =========================================
          MAIN FORM SCREEN
      ========================================= */
      <div className="relative bg-white/95 w-full max-w-lg rounded-[2.5rem] p-6 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white overflow-hidden animate-scale-up">
        
        {/* Subtle Decorative Pattern */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#265336] via-[#10B981] to-[#265336]"></div>

        {/* ✅ RED CROSS BUTTON */}
        <button 
          onClick={onClose}
          disabled={submitStatus === "loading"}
          className="absolute top-5 right-5 p-2 bg-red-50 hover:bg-red-500 text-red-600 hover:text-white rounded-full transition-all duration-300 z-10 shadow-sm hover:scale-110 active:scale-95 disabled:opacity-50"
        >
          <FaTimes className="text-xl" />
        </button>

        {/* Header Section */}
        <div className="text-center mb-8 pt-2 relative">
          <div className="bg-emerald-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-inner">
            <FaClipboardList className="text-[#265336] text-3xl" />
          </div>
          <h2 className="text-xl md:text-3xl font-black text-[#265336] uppercase tracking-[0.1em] leading-tight">
            Admission Form
          </h2>
          <p className="text-gray-500 text-[10px] md:text-xs font-bold mt-2 tracking-widest uppercase opacity-70">
            {course.title}
          </p>
          
          {/* Custom Error Toast Notification */}
          {submitStatus === "error" && (
            <div className="absolute -top-4 left-0 w-full bg-red-100 text-red-600 text-xs font-bold px-4 py-2 rounded-lg flex items-center justify-center gap-2 animate-pulse">
              <FaExclamationCircle /> Network error. Please try again!
            </div>
          )}
        </div>

        {/* Form Section */}
        <form onSubmit={handleLocalSubmit} className="space-y-5">
          {[
            { id: "name", label: "Full Name", icon: <FaUser />, placeholder: "Enter your full name" },
            { id: "address", label: "Address", icon: <FaMapMarkerAlt />, placeholder: "City, Area, District" },
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
                  disabled={submitStatus === "loading"}
                  className="w-full bg-gray-50 border-2 border-gray-100 p-4 pl-12 rounded-2xl text-gray-800 font-semibold focus:outline-none focus:border-[#10B981] focus:bg-white focus:shadow-[0_10px_20px_rgba(16,185,129,0.1)] transition-all duration-300 placeholder:text-gray-300 disabled:opacity-60"
                />
              </div>
            </div>
          ))}

          {/* --- Submit Button --- */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={submitStatus === "loading"}
              className="group relative w-full bg-gradient-to-r from-[#265336] to-[#10B981] text-white py-5 rounded-2xl font-black text-lg md:text-xl uppercase tracking-widest shadow-[0_15px_30px_rgba(38,83,54,0.3)] hover:shadow-[0_20px_40px_rgba(16,185,129,0.4)] transition-all duration-300 hover:-translate-y-1 active:scale-95 overflow-hidden flex items-center justify-center gap-3 disabled:opacity-70 disabled:hover:translate-y-0 disabled:cursor-not-allowed"
            >
              {submitStatus === "loading" ? (
                <>
                  <FaSpinner className="animate-spin text-2xl" /> Submitting...
                </>
              ) : (
                <>
                  {/* Glossy Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <span>Submit</span>
                </>
              )}
            </button>
            <p className="text-center text-[9px] text-gray-400 mt-4 font-bold uppercase tracking-tighter">
              Secure Submission
            </p>
          </div>
        </form>
      </div>
      )}

      {/* --- Required CSS Animations (Apni global css me daal dein ya Tailwind config me) --- */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        @keyframes bounce-in {
          0% { transform: scale(0.8); opacity: 0; }
          60% { transform: scale(1.05); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-bounce-in {
          animation: bounce-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
      `}} />
    </div>
  );
};

export default AdmissionForm;