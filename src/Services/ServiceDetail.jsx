import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { 
  FaTimes, FaCheckCircle, FaLayerGroup, FaEnvelope,
  FaExclamationTriangle, FaFileAlt, FaUser, FaArrowRight, FaServicestack, FaShoppingCart, FaCreditCard, FaLock,
  FaStar, FaShieldAlt, FaClock
} from "react-icons/fa";
import Logo from "../Logo/Logo";
import Footer from "../Footer/Footer";
import ServicesData from "./ServicesData";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const service = ServicesData.find((s) => s.slug === serviceId);

  // Form States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState(service?.formOptions?.[0] || "");
  const [secCategory, setSecCategory] = useState(service?.SecformOptions?.[0] || "");
  const [thirdCategory, setThirdCategory] = useState(service?.ThirdformOptions?.[0] || "");

  // Checkout States
  const [showCheckout, setShowCheckout] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [orderId, setOrderId] = useState("");

  const handleInitiateCheckout = (e) => {
    e.preventDefault();
    if (!name || !email) {
      alert("Please enter your Name and Email to proceed.");
      return;
    }
    setShowCheckout(true);
  };

  const handlePlaceOrder = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setOrderSuccess(true);
      setOrderId("CHV-" + Math.floor(100000 + Math.random() * 900000));
    }, 2500);
  };

  if (!service) return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <h2 className="text-3xl text-red-600 font-black tracking-widest">Service Not Found</h2>
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-900 selection:bg-[#10B981] selection:text-white pb-20 relative">
      
      {/* FLOATING BACK BUTTON */}
      <button 
        onClick={() => navigate('/services')}
        className="fixed top-6 left-6 p-4 bg-white hover:bg-red-50 text-red-600 rounded-full transition-all duration-300 z-[50] border border-gray-200 shadow-lg hover:scale-110 flex items-center justify-center group"
      >
        <FaTimes className="text-2xl" />
      </button>

      {/* --- HERO SECTION (Dark Green for strong impact) --- */}
      <div className="relative pt-24 pb-48 px-4 overflow-hidden bg-[#064e3b]">
        <div className="absolute top-[-50%] right-[-10%] w-[600px] h-[600px] bg-[#10B981] rounded-full blur-[200px] opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center flex flex-col items-center pt-10">
          <span className="text-[#10B981] font-black tracking-[0.3em] uppercase mb-4 text-xs bg-emerald-900/50 px-5 py-2 rounded-full border border-[#10B981]/30">
            Premium Service Details
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight drop-shadow-lg leading-tight max-w-4xl">
            {service.title}
          </h1>
        </div>
      </div>

      {/* --- CONTENT AREA --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-20">
        
        {/* Feature Image */}
        <div className="w-full group relative mb-16 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
          <img src={service.image} alt={service.title} className="w-full h-[40vh] md:h-[60vh] object-cover bg-gray-100" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Details & Portfolio Section */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Description Block */}
            {service.desc.map((srv, index) => (
              <div key={index} className="bg-white p-8 md:p-12 rounded-[2rem] border border-gray-100 relative overflow-hidden shadow-xl">
                <h2 className="font-black text-2xl md:text-3xl text-[#064e3b] mb-6 flex items-center gap-3">
                  <FaServicestack className="text-[#10B981]" /> Overview
                </h2>
                <p className="text-gray-700 text-lg md:text-xl font-medium mb-8 leading-relaxed border-l-4 border-[#10B981] pl-5 bg-emerald-50 py-4 pr-4 rounded-r-xl">
                  {srv.heading || srv.description}
                </p>
                <div className="space-y-4">
                  {srv.bullets.map((sp, idx) => (
                    <div key={idx} className="flex gap-4 items-center bg-gray-50 p-4 rounded-xl border border-gray-100">
                      <FaCheckCircle className="text-[#10B981] text-xl shrink-0" />
                      <p className="font-bold text-gray-800">{sp}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* NEW: Specific Portfolio Gallery Section */}
            {service.portfolioImages && service.portfolioImages.length > 0 && (
              <div className="bg-white p-8 md:p-12 rounded-[2rem] border border-gray-100 shadow-xl">
                <h2 className="font-black text-2xl md:text-3xl text-[#064e3b] mb-6 flex items-center gap-3">
                  <FaStar className="text-yellow-400" /> Recent Works
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.portfolioImages.map((imgUrl, i) => (
                    <div key={i} className={`rounded-2xl overflow-hidden shadow-md border border-gray-100 ${i === 0 ? 'sm:col-span-2 h-64' : 'h-48'}`}>
                      <img src={imgUrl} alt={`Portfolio ${i}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                  ))}
                </div>
              </div>
            )}
            
          </div>

          {/* Configuration Form (Sidebar Client Catch Machine) */}
          <div className="lg:col-span-5 sticky top-10">
            <form onSubmit={handleInitiateCheckout} className="bg-white p-8 md:p-10 rounded-[2rem] border border-gray-200 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#10B981] to-[#047857]"></div>
              
              <div className="flex justify-between items-center mb-6">
                 <h2 className="text-2xl font-black text-[#064e3b] uppercase tracking-wider">Configure</h2>
                 {service.basePrice && <span className="text-2xl font-black text-[#10B981]">Rs {service.basePrice}</span>}
              </div>

              {/* Trust Triggers */}
              <div className="flex items-center justify-between bg-emerald-50 text-emerald-800 text-xs font-bold p-3 rounded-lg mb-8 border border-emerald-100">
                 <span className="flex items-center gap-1"><FaShieldAlt /> 100% Secure</span>
                 <span className="flex items-center gap-1"><FaClock /> Fast Delivery</span>
                 <span className="flex items-center gap-1"><FaStar className="text-yellow-500"/> 4.9/5 Rating</span>
              </div>

              <div className="space-y-5">
                <div className="relative">
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Full Name</label>
                  <div className="relative">
                    <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type="text" placeholder="John Doe" value={name} onChange={(e) => setName(e.target.value)} required
                      className="w-full bg-gray-50 border border-gray-200 p-4 pl-12 rounded-xl text-gray-900 focus:outline-none focus:border-[#10B981] focus:bg-white transition-all font-medium" />
                  </div>
                </div>

                <div className="relative">
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Email Address</label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type="email" placeholder="john@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required
                      className="w-full bg-gray-50 border border-gray-200 p-4 pl-12 rounded-xl text-gray-900 focus:outline-none focus:border-[#10B981] focus:bg-white transition-all font-medium" />
                  </div>
                </div>

                {[
                  { label: "Options", options: service.formOptions, val: category, set: setCategory, icon: <FaLayerGroup className="text-[#10B981]" /> },
                  { label: "Timeline", options: service.SecformOptions, val: secCategory, set: setSecCategory, icon: <FaExclamationTriangle className="text-orange-400" /> },
                  { label: "Format", options: service.ThirdformOptions, val: thirdCategory, set: setThirdCategory, icon: <FaFileAlt className="text-blue-500" /> }
                ].map((sel, idx) => sel.options && (
                  <div key={idx} className="relative">
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                      {sel.icon} {sel.label}
                    </label>
                    <select value={sel.val} onChange={(e) => sel.set(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl text-gray-900 font-bold appearance-none focus:outline-none focus:border-[#10B981] focus:bg-white transition-all cursor-pointer">
                      {sel.options.map((option, i) => <option key={i} value={option}>{option}</option>)}
                    </select>
                  </div>
                ))}
              </div>

              <button type="submit" className="w-full bg-[#047857] hover:bg-[#064e3b] text-white py-4 mt-8 rounded-xl font-black text-lg shadow-[0_10px_20px_rgba(4,120,87,0.2)] transition-all flex items-center justify-center gap-3 hover:-translate-y-1">
                <FaShoppingCart /> Checkout Now
              </button>
              <p className="text-center text-xs text-gray-400 mt-4 font-medium">No hidden fees. Professional support included.</p>
            </form>
          </div>
        </div>
      </div>

      {/* --- OVERLAY CHECKOUT MODAL (Light Theme) --- */}
      {showCheckout && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/80 backdrop-blur-sm">
          <div className="bg-white w-full max-w-lg rounded-3xl border border-gray-200 shadow-2xl overflow-hidden relative">
            
            {orderSuccess ? (
              <div className="p-10 text-center flex flex-col items-center">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                  <FaCheckCircle className="text-5xl text-[#10B981]" />
                </div>
                <h2 className="text-3xl font-black text-[#064e3b] mb-2">Order Confirmed!</h2>
                <p className="text-gray-500 mb-6 font-medium">Thank you, {name}. Your project is now in our system.</p>
                <div className="bg-gray-50 p-4 rounded-xl w-full mb-8 border border-gray-200">
                  <p className="text-sm text-gray-400 uppercase tracking-widest font-bold">Order Tracking ID</p>
                  <p className="text-2xl font-black text-[#10B981]">{orderId}</p>
                </div>
                <button onClick={() => navigate('/services')} className="bg-[#047857] hover:bg-[#064e3b] text-white px-8 py-3 rounded-xl font-bold transition-all w-full">
                  Return to Services
                </button>
              </div>
            ) : (
              <div className="flex flex-col h-full">
                <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                  <h3 className="text-xl font-black text-[#064e3b] flex items-center gap-2"><FaLock className="text-[#10B981]"/> Secure Checkout</h3>
                  <button onClick={() => setShowCheckout(false)} className="text-gray-400 hover:text-red-500 p-2"><FaTimes className="text-xl" /></button>
                </div>
                
                <div className="p-6 space-y-6">
                  {/* Summary */}
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                    <h4 className="font-bold text-gray-800 mb-2 border-b border-gray-200 pb-2">Order Summary</h4>
                    <div className="flex justify-between text-sm mb-1"><span className="text-gray-500 font-medium">Service:</span> <span className="font-bold text-gray-900">{service.title}</span></div>
                    <div className="flex justify-between text-sm mb-1"><span className="text-gray-500 font-medium">Timeline:</span> <span className="font-bold text-gray-900">{secCategory}</span></div>
                    <div className="flex justify-between text-sm mt-3 pt-3 border-t border-gray-200 font-black text-lg"><span className="text-gray-800">Total:</span> <span className="text-[#10B981]">Rs {service.basePrice || "Custom"}</span></div>
                  </div>

                  {/* Payment Method */}
                  <div>
                    <label className="block text-sm font-black text-gray-700 mb-3">Select Payment Method</label>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="border-2 border-[#10B981] bg-emerald-50 p-3 rounded-xl cursor-pointer text-center flex flex-col items-center gap-2">
                        <FaCreditCard className="text-xl text-[#10B981]" />
                        <span className="text-xs font-bold text-[#064e3b]">Bank Transfer</span>
                      </div>
                      <div className="border border-gray-200 bg-gray-50 p-3 rounded-xl cursor-not-allowed opacity-50 text-center flex flex-col items-center gap-2">
                        <FaCreditCard className="text-xl text-gray-400" />
                        <span className="text-xs font-bold text-gray-500">Card (Coming Soon)</span>
                      </div>
                    </div>
                  </div>

                  {/* Instructions */}
                  <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl">
                    <p className="text-xs text-blue-800 leading-relaxed font-medium">
                      Please transfer the amount to our Meezan Bank Account: <strong>0123456789</strong>. Our team will contact you on <strong>{email}</strong> shortly after you place the order.
                    </p>
                  </div>
                </div>

                <div className="p-6 border-t border-gray-100 bg-gray-50">
                  <button 
                    onClick={handlePlaceOrder} 
                    disabled={isProcessing}
                    className="w-full bg-[#047857] hover:bg-[#064e3b] text-white py-4 rounded-xl font-black text-lg transition-all flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg"
                  >
                    {isProcessing ? "Processing Order..." : "Confirm & Place Order"}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceDetail;