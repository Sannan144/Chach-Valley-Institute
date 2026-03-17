import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { 
  FaTimes, 
  FaCheckCircle, 
  FaWallet, 
  FaLayerGroup, 
  FaExclamationTriangle, 
  FaFileAlt, 
  FaUser, 
  FaArrowRight,
  FaServicestack
} from "react-icons/fa";
import Logo from "../Logo/Logo";
import Footer from "../Footer/Footer";
import ServicesData from "./ServicesData";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const service = ServicesData.find((s) => s.slug === serviceId);

  const [name, setName] = useState("");
  const [budget, setBudget] = useState("");
  const [category, setCategory] = useState(service?.formOptions?.[0] || "");
  const [secCategory, setSecCategory] = useState(service?.SecformOptions?.[0] || "");
  const [thirdCategory, setThirdCategory] = useState(service?.ThirdformOptions?.[0] || "");

  const whatsappNumber = "923191942002";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !budget) {
      alert("Please fill all fields");
      return;
    }

    const message = `📌 *Service Request*\n\n🛠️ Service: ${service.title}\n🪪 Name: ${name}\n💸 Budget: ${budget}${
      category ? `\n📂 Category 1: ${category}` : ""
    }${secCategory ? `\n📂 Category 2: ${secCategory}` : ""}${
      thirdCategory ? `\n📂 Category 3: ${thirdCategory}` : ""
    }`;

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  if (!service)
    return (
      <h2 className="text-center mt-20 text-xl text-red-600 font-black uppercase tracking-widest">
        Service Not Found
      </h2>
    );

  return (
    <div className="bg-[#f4f7f5] min-h-screen font-sans selection:bg-[#265336] selection:text-white">
      <Logo />

      {/* FIXED RED CROSS BUTTON (Positioned Under Logo on Left) */}
      <button 
        onClick={() => navigate('/services')}
        className="fixed top-28 left-4 md:top-36 md:left-10 p-3 md:p-4 bg-white hover:bg-red-500 text-red-600 hover:text-white rounded-full transition-all duration-300 z-[150] border border-red-100 shadow-2xl hover:scale-110 active:scale-95 flex items-center justify-center group"
      >
        <FaTimes className="text-xl md:text-3xl" />
        <span className="absolute left-full ml-3 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          BACK TO SERVICES
        </span>
      </button>

      {/* --- HERO SECTION --- */}
      <div className="relative bg-gradient-to-tr from-[#0d1f14] via-[#265336] to-[#3e8558] pt-16 pb-32 md:pt-24 md:pb-44 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center flex flex-col items-center">
          {/* ✅ HEADING SIZE UPDATED: 7xl se chota kar k 5xl kar diya hy desktop k liye */}
          <h1 className="uppercase text-3xl md:text-5xl font-black text-white tracking-[0.2em] drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)] animate-slide-up leading-tight">
            {service.title}
          </h1>
          <div className="mt-4 md:mt-6 w-24 md:w-32 h-1.5 bg-[#10B981] rounded-full shadow-lg"></div>
        </div>

        {/* Wavy Bottom */}
        <div className="absolute bottom-0 left-0 w-full leading-[0]">
          <svg viewBox="0 0 1440 320" className="w-full h-auto">
            <path fill="#f4f7f5" fillOpacity="1" d="M0,192L60,197.3C120,203,240,213,360,197.3C480,181,600,139,720,138.7C840,139,960,181,1080,192C1200,203,1320,181,1380,170.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      {/* --- CONTENT AREA --- */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 -mt-24 pb-20 relative z-20 flex flex-col items-center">
        
        {/* Feature Image */}
        <div className="w-full max-w-5xl group relative mb-16">
          <div className="absolute -inset-2 bg-gradient-to-r from-[#265336] to-[#10B981] rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
          <img
            src={service.image}
            alt={service.title}
            className="relative w-full h-64 md:h-[480px] object-cover rounded-[2.5rem] shadow-2xl border-4 border-white"
          />
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-start text-gray-800">
          
          {/* Details Section */}
          <div className="lg:col-span-7 space-y-8">
            {service.desc.map((srv, index) => (
              <div key={index} className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-emerald-50 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
                
                <h2 className="font-black text-2xl md:text-3xl text-[#265336] mb-6 flex items-center gap-3 uppercase tracking-tighter">
                  <FaServicestack className="text-[#10B981]" /> Details
                </h2>
                
                <p className="text-gray-600 text-lg md:text-xl font-bold mb-8 leading-relaxed italic border-l-4 border-[#10B981] pl-4">
                  "{srv.description}"
                </p>

                <div className="space-y-4">
                  {srv.bullets.map((sp, idx) => (
                    <div key={idx} className="flex gap-4 items-start bg-gray-50/50 p-4 rounded-2xl hover:bg-white transition-all border border-transparent hover:border-emerald-100">
                      <FaCheckCircle className="text-[#10B981] text-xl mt-1 shrink-0" />
                      <p className="font-medium leading-relaxed">{sp}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Form Sidebar */}
          <div className="lg:col-span-5 sticky top-28">
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl border-t-8 border-[#265336] relative overflow-hidden"
            >
              <h2 className="text-2xl font-black text-[#265336] mb-8 text-center uppercase tracking-widest">
                Quick Request
              </h2>

              <div className="space-y-6">
                <div className="relative group">
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">Full Name</label>
                  <div className="relative">
                    <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#10B981] transition-colors" />
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-gray-50 border-2 border-gray-100 p-4 pl-12 rounded-2xl text-gray-800 font-bold focus:outline-none focus:border-[#10B981] transition-all"
                    />
                  </div>
                </div>

                <div className="relative group">
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">Budget (PKR)</label>
                  <div className="relative">
                    <FaWallet className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#10B981] transition-colors" />
                    <input
                      type="text"
                      placeholder="e.g. 5000"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full bg-gray-50 border-2 border-gray-100 p-4 pl-12 rounded-2xl text-gray-800 font-bold focus:outline-none focus:border-[#10B981] transition-all"
                    />
                  </div>
                </div>

                {/* Categories */}
                {[
                  { label: "Category", options: service.formOptions, val: category, set: setCategory, icon: <FaLayerGroup className="text-emerald-600" /> },
                  { label: "Urgency", options: service.SecformOptions, val: secCategory, set: setSecCategory, icon: <FaExclamationTriangle className="text-orange-500" /> },
                  { label: "Documents", options: service.ThirdformOptions, val: thirdCategory, set: setThirdCategory, icon: <FaFileAlt className="text-blue-500" /> }
                ].map((sel, idx) => sel.options && (
                  <div key={idx} className="relative group">
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1 flex items-center gap-2">
                      {sel.icon} {sel.label}
                    </label>
                    <select
                      value={sel.val}
                      onChange={(e) => sel.set(e.target.value)}
                      className="w-full bg-gray-50 border-2 border-gray-100 p-4 rounded-2xl text-gray-800 font-bold outline-none focus:border-[#10B981]"
                    >
                      {sel.options.map((option, i) => (
                        <option key={i} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                ))}
              </div>

              <button
                type="submit"
                className="group relative w-full bg-gradient-to-r from-[#265336] to-[#10B981] text-white py-5 mt-10 rounded-2xl font-black text-xl uppercase tracking-widest shadow-xl transition-all overflow-hidden flex items-center justify-center gap-3 active:scale-95"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <span>Send Now</span>
                <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServiceDetail;