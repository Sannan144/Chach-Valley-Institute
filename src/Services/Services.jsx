import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  FaStar, FaArrowRight, FaGem, FaCheckDouble, FaWhatsapp, 
  FaPaintBrush, FaBullhorn, FaCode, FaCheckCircle, 
  FaUsers, FaTrophy, FaMapMarkerAlt, FaEnvelope, FaShieldAlt
} from "react-icons/fa";
import Logo from "../Logo/Logo";
import Footer from "../Footer/Footer";
import ServicesData from "./ServicesData";

const Services = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', phone: '', service: '', message: '' });

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const text = `*New Inquiry*\nName: ${formData.name}\nPhone: ${formData.phone}\nService: ${formData.service}\nMessage: ${formData.message}`;
    window.open(`https://wa.me/923191942002?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen font-sans selection:bg-[#10B981] selection:text-white overflow-x-hidden">
      
      {/* FLOATING WHATSAPP BUTTON */}
      <a 
        href="https://wa.me/923191942002" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-all z-50 flex items-center justify-center animate-bounce"
      >
        <FaWhatsapp className="text-3xl" />
      </a>

      {/* --- SECTION 1: HERO SECTION --- */}
      <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 bg-gradient-to-b from-[#f0fdf4] to-gray-50 overflow-hidden">
        {/* Subtle Green Background Elements */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#10B981] rounded-full blur-[150px] opacity-10"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-[#047857] rounded-full blur-[150px] opacity-10"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center flex flex-col items-center">
          <span className="bg-white text-[#047857] border border-[#10B981]/30 px-6 py-2 rounded-full text-sm font-bold tracking-widest uppercase mb-6 shadow-sm flex items-center gap-2">
            <FaShieldAlt className="text-[#10B981]" /> Premium Digital Agency
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#064e3b] tracking-tight leading-tight max-w-5xl drop-shadow-sm">
            Grow Your Business Digitally With <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#047857]">Chach Valley</span>
          </h1>
          <p className="mt-8 text-gray-600 text-lg md:text-xl max-w-3xl font-medium leading-relaxed">
            We provide professional digital solutions including Website Development, Graphic Design, Facebook Ads, Voice Over, and E-commerce Solutions tailored for high conversions.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-6">
            <a href="#contact" className="bg-[#047857] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-[0_10px_20px_rgba(4,120,87,0.3)] hover:shadow-[0_15px_30px_rgba(4,120,87,0.4)] hover:-translate-y-1 transition-all">
              Get Free Consultation
            </a>
            <a href="https://wa.me/923191942002" target="_blank" rel="noreferrer" className="bg-white border-2 border-gray-200 text-[#064e3b] px-8 py-4 rounded-xl font-bold text-lg hover:border-[#10B981] hover:-translate-y-1 transition-all flex items-center justify-center gap-2 shadow-sm">
              <FaWhatsapp className="text-[#25D366] text-xl" /> WhatsApp Us
            </a>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-6 md:gap-10 text-sm md:text-base font-bold text-gray-600">
            <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100"><FaCheckCircle className="text-[#10B981]" /> Fast Delivery</span>
            <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100"><FaCheckCircle className="text-[#10B981]" /> Professional Team</span>
            <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100"><FaCheckCircle className="text-[#10B981]" /> Affordable Pricing</span>
          </div>
        </div>
      </div>

      {/* --- SECTION 2: SERVICES SHOWCASE --- */}
      <div id="services" className="relative py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[#064e3b] mb-4">Our Premium <span className="text-[#10B981]">Services</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto font-medium">Visually stunning, technically superior digital solutions designed to elevate your brand globally.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ServicesData.map((service) => (
              <div 
                key={service.id} 
                onClick={() => navigate(`/services/${service.slug}`)}
                className="group relative bg-white rounded-3xl overflow-hidden cursor-pointer border border-gray-200 hover:border-[#10B981] transition-all duration-500 hover:-translate-y-2 shadow-lg hover:shadow-[0_20px_40px_rgba(16,185,129,0.15)] flex flex-col"
              >
                <div className="relative h-60 w-full overflow-hidden bg-gray-100">
                  <div className="absolute inset-0 bg-[#047857]/10 group-hover:bg-transparent z-10 transition-colors duration-500"></div>
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-white/90 backdrop-blur-md text-[#064e3b] text-xs font-black px-3 py-1.5 rounded-full flex items-center gap-2 shadow-md">
                      <FaGem className="text-[#10B981]" /> Premium
                    </span>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-1 relative bg-white">
                  <h3 className="text-2xl font-black text-[#064e3b] mb-3 group-hover:text-[#047857] transition-colors">{service.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-8">{service.desc[0].heading}</p>
                  
                  <div className="mt-auto flex gap-3">
                    <button className="flex-1 bg-gray-50 hover:bg-gray-100 text-[#064e3b] border border-gray-200 py-3 rounded-xl font-bold transition-colors">
                      Learn More
                    </button>
                    <button className="flex-1 bg-[#10B981] hover:bg-[#047857] text-white py-3 rounded-xl font-bold shadow-md hover:shadow-lg flex justify-center items-center gap-2 transition-all">
                      Order <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- SECTION 3: WHY CHOOSE US --- */}
      <div className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-black text-[#064e3b] mb-6">Why Partner With <span className="text-[#10B981]">Us?</span></h2>
            <p className="text-gray-600 text-lg mb-8 font-medium">We don't just deliver services; we deliver digital growth. Our multidisciplinary team ensures your project is handled with global standards.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Creative & Professional Team", "Affordable Pricing", 
                "Fast Delivery", "Client-Focused Solutions", 
                "Modern Designs", "All Services Under One Roof"
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                  <FaCheckDouble className="text-[#10B981] text-xl shrink-0" />
                  <span className="font-bold text-gray-800">{point}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-lg text-center border-t-4 border-t-[#10B981]">
              <h3 className="text-5xl font-black text-[#064e3b] mb-2">500<span className="text-[#10B981]">+</span></h3>
              <p className="text-gray-500 font-bold uppercase tracking-wider text-sm">Projects</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-lg text-center translate-y-8 border-t-4 border-t-[#047857]">
              <h3 className="text-5xl font-black text-[#064e3b] mb-2">350<span className="text-[#047857]">+</span></h3>
              <p className="text-gray-500 font-bold uppercase tracking-wider text-sm">Clients</p>
            </div>
          </div>
        </div>
      </div>

      {/* --- SECTION 4: PROCESS SECTION --- */}
      <div className="py-24 bg-white max-w-7xl mx-auto px-4 border-b border-gray-100">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-[#064e3b] mb-4">How We <span className="text-[#10B981]">Work</span></h2>
          <p className="text-gray-500 font-medium">A seamless, professional workflow to ensure project success.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-center relative">
          <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
          
          {[
            { step: "01", title: "Consultation", icon: <FaUsers /> },
            { step: "02", title: "Planning", icon: <FaMapMarkerAlt /> },
            { step: "03", title: "Designing", icon: <FaPaintBrush /> },
            { step: "04", title: "Development", icon: <FaCode /> },
            { step: "05", title: "Delivery", icon: <FaTrophy /> }
          ].map((item, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-white border-4 border-[#10B981] flex items-center justify-center text-3xl mb-4 shadow-lg text-[#047857]">
                {item.icon}
              </div>
              <span className="text-[#10B981] font-black text-lg">{item.step}</span>
              <h4 className="font-bold text-xl text-[#064e3b]">{item.title}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* --- SECTION 5: CALL TO ACTION --- */}
      <div className="py-20 relative bg-[#064e3b] text-white">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 px-4">
          <h2 className="text-4xl md:text-6xl font-black mb-6">Ready To Grow Your <span className="text-[#10B981]">Business?</span></h2>
          <p className="text-xl text-emerald-100 mb-10">Let’s build your digital presence professionally and drive results that matter.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-[#10B981] text-white px-10 py-4 rounded-xl font-bold text-lg shadow-[0_10px_20px_rgba(16,185,129,0.3)] hover:-translate-y-1 transition-transform">
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* --- SECTION 6: CONTACT SECTION --- */}
      <div id="contact" className="py-24 bg-gray-50 max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-black text-[#064e3b] mb-4">Let's start a <span className="text-[#10B981]">conversation</span></h2>
          <p className="text-gray-600 mb-8 font-medium">Fill out the form and our team will get back to you within 24 hours.</p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-[#10B981] text-xl"><FaEnvelope /></div>
              <div><h4 className="font-bold text-[#064e3b]">Email Us</h4><p className="text-gray-500 text-sm">info@chachvalley.site</p></div>
            </div>
            <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-[#10B981] text-xl"><FaWhatsapp /></div>
              <div><h4 className="font-bold text-[#064e3b]">WhatsApp</h4><p className="text-gray-500 text-sm">+92 319 1942002</p></div>
            </div>
          </div>
        </div>

        <form onSubmit={handleContactSubmit} className="bg-white p-8 md:p-10 rounded-3xl border border-gray-200 shadow-xl">
          <div className="space-y-4">
            <input type="text" placeholder="Your Name" required className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-gray-900 focus:outline-none focus:border-[#10B981] focus:bg-white transition-colors" onChange={e => setFormData({...formData, name: e.target.value})}/>
            <input type="tel" placeholder="Phone Number" required className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-gray-900 focus:outline-none focus:border-[#10B981] focus:bg-white transition-colors" onChange={e => setFormData({...formData, phone: e.target.value})}/>
            <select required className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-gray-900 focus:outline-none focus:border-[#10B981] focus:bg-white transition-colors appearance-none" onChange={e => setFormData({...formData, service: e.target.value})}>
              <option value="">Select Service Required</option>
              {ServicesData.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
            </select>
            <textarea placeholder="Your Message" rows="4" required className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-gray-900 focus:outline-none focus:border-[#10B981] focus:bg-white transition-colors" onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
            <button type="submit" className="w-full bg-[#047857] hover:bg-[#064e3b] text-white py-4 rounded-xl font-bold text-lg shadow-md transition-colors">Send Message</button>
          </div>
        </form>
      </div>

      {/* --- SECTION 7: FOOTER --- */}
      <footer className="bg-[#064e3b] text-emerald-50 pt-16 pb-8 border-t-4 border-[#10B981]">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-black text-white mb-4">Chach Valley <span className="text-[#10B981]">Agency</span></h3>
            <p className="text-emerald-200/80 text-sm leading-relaxed">Premium digital solutions tailored for your business growth. We combine creativity, technology, and strategy.</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-emerald-200/80 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Top Services</h4>
            <ul className="space-y-2 text-emerald-200/80 text-sm">
              <li><span className="hover:text-white cursor-pointer">Web Development</span></li>
              <li><span className="hover:text-white cursor-pointer">Facebook Ads</span></li>
              <li><span className="hover:text-white cursor-pointer">3D Logo Design</span></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Connect</h4>
            <div className="flex gap-4">
               <a href="#" className="w-10 h-10 rounded-full bg-emerald-800 flex items-center justify-center hover:bg-[#10B981] hover:text-white transition-all"><FaWhatsapp /></a>
               <a href="#" className="w-10 h-10 rounded-full bg-emerald-800 flex items-center justify-center hover:bg-[#10B981] hover:text-white transition-all"><FaEnvelope /></a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 pt-8 border-t border-emerald-800/50 text-center text-emerald-300 text-sm">
          &copy; {new Date().getFullYear()} Chach Valley Digital Agency. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Services;