import React, { useState } from "react";
import { blogData } from "./BlogData";
import Footer from "../Footer/Footer";
import Logo from "../Logo/Logo";
import { useNavigate } from "react-router-dom";
import { FaArrowRight, FaTimes, FaCalendarAlt, FaBookOpen, FaChevronRight } from "react-icons/fa";

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const navig = useNavigate();

  const handleCardClick = (post) => {
    setSelectedPost(post);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = () => {
    setSelectedPost(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#f4f7f5] text-gray-800 font-sans selection:bg-[#265336] selection:text-white">
      <Logo />

      {/* Blog List View */}
      {!selectedPost ? (
        <div className="animate-fade-in">
          {/* --- HERO SECTION --- */}
          <div className="relative bg-gradient-to-tr from-[#0d1f14] via-[#265336] to-[#3e8558] pt-20 pb-36 px-4 overflow-hidden border-b-4 border-[#10B981]/20 text-center">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]"></div>
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#10B981] rounded-full blur-[120px] opacity-20"></div>

            <div className="relative z-10 max-w-4xl mx-auto">
              <h1 className="uppercase text-3xl md:text-5xl font-black text-white tracking-[0.2em] drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)] animate-slide-up leading-tight mb-6">
                Tech Insights
              </h1>
              <div className="w-24 h-1.5 bg-[#10B981] mx-auto rounded-full shadow-lg mb-6"></div>
              <p className="text-emerald-100/80 text-sm md:text-lg font-bold tracking-[0.1em] uppercase max-w-2xl mx-auto">
                Explore expert articles on Web Development, AI Trends, and Freelancing to boost your career.
              </p>
            </div>

            {/* Wavy Bottom */}
            <div className="absolute bottom-0 left-0 w-full leading-[0]">
              <svg viewBox="0 0 1440 320" className="w-full h-auto">
                <path fill="#f4f7f5" d="M0,192L60,197.3C120,203,240,213,360,197.3C480,181,600,139,720,138.7C840,139,960,181,1080,192C1200,203,1320,181,1380,170.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
              </svg>
            </div>
          </div>

          {/* --- BLOG GRID --- */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 pb-20 relative z-20">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {blogData.map((post, index) => (
                <div
                  key={post.id}
                  onClick={() => handleCardClick(post)}
                  className="bg-white rounded-[2.5rem] shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_30px_70px_rgba(38,83,54,0.25)] transition-all duration-500 transform hover:-translate-y-4 cursor-pointer overflow-hidden flex flex-col h-full border-2 border-white group animate-scale-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden h-60">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-6 text-white opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 flex items-center gap-2 font-bold text-xs">
                       <FaBookOpen /> Quick Read
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-xl font-black mb-4 text-[#265336] leading-tight uppercase tracking-tight group-hover:text-[#10B981] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 mb-6 flex-grow text-sm font-medium leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    <button className="mt-auto self-start bg-emerald-50 text-[#265336] px-6 py-2 rounded-xl font-black text-xs uppercase tracking-widest flex items-center gap-2 group/btn hover:bg-[#265336] hover:text-white transition-all duration-300">
                      Read Article 
                      <FaArrowRight className="group-hover/btn:translate-x-2 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* --- SINGLE BLOG VIEW --- */
        <div className="animate-fade-in relative">
          {/* FIXED RED CROSS BUTTON (Left side under logo) */}
          <button
            onClick={handleBack}
            className="fixed top-28 left-4 md:top-36 md:left-10 p-3 md:p-4 bg-white hover:bg-red-500 text-red-600 hover:text-white rounded-full transition-all duration-300 z-[150] border border-red-100 shadow-2xl hover:scale-110 active:scale-95 flex items-center justify-center group"
          >
            <FaTimes className="text-xl md:text-3xl" />
            <span className="absolute left-full ml-3 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">BACK</span>
          </button>

          {/* Blog Detail Header */}
          <div className="bg-gradient-to-br from-[#0d1f14] via-[#265336] to-[#3e8558] pt-20 pb-40 px-4 text-center text-white relative">
            <div className="relative z-10 max-w-4xl mx-auto">
               <h1 className="text-3xl md:text-5xl font-black uppercase tracking-[0.15em] leading-tight mb-6 drop-shadow-2xl">
                  {selectedPost.title}
               </h1>
               <div className="flex items-center justify-center gap-4 text-xs font-bold uppercase tracking-widest opacity-80">
                  <span className="bg-white/10 px-4 py-1.5 rounded-full border border-white/20 flex items-center gap-2">
                    <FaCalendarAlt className="text-[#10B981]" /> 2026 Insights
                  </span>
               </div>
            </div>
          </div>

          <article className="max-w-5xl mx-auto px-4 -mt-24 pb-20 relative z-20">
            <div className="bg-white p-6 md:p-12 rounded-[2.5rem] shadow-2xl border border-white overflow-hidden">
              <div className="w-full h-64 md:h-[500px] mb-12 rounded-[2rem] overflow-hidden shadow-xl group">
                  <img
                    src={selectedPost.image}
                    alt={selectedPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
              </div>

              <div className="prose prose-lg max-w-none text-gray-700 font-medium">
                  {selectedPost.content.map((section, index) => {
                    switch (section.type) {
                      case "heading":
                        return (
                          <h2 key={index} className="text-2xl md:text-3xl font-black mt-12 mb-6 text-[#265336] border-l-8 border-[#10B981] pl-6 uppercase tracking-tighter leading-none">
                            {section.text}
                          </h2>
                        );
                      case "paragraph":
                        return (
                          <p key={index} className="text-base md:text-xl leading-relaxed mb-8 text-gray-600">
                            {section.text}
                          </p>
                        );
                      case "list":
                        return (
                          <ul key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 my-10">
                            {section.items.map((item, idx) => (
                              <li key={idx} className="bg-emerald-50 p-5 rounded-2xl border border-emerald-100 text-[#265336] font-bold flex items-start gap-3 shadow-sm hover:bg-emerald-100 transition-colors">
                                <FaChevronRight className="mt-1 text-[#10B981]" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        );
                      default:
                        return null;
                    }
                  })}
              </div>
              
              {/* --- 3D Call to Action (CTA) --- */}
              <div className="mt-20 p-8 md:p-12 bg-gradient-to-br from-[#0d1f14] to-[#265336] text-white rounded-[3rem] text-center relative overflow-hidden group shadow-[0_20px_50px_rgba(38,83,54,0.3)] border border-[#10B981]/20">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#10B981] rounded-full blur-[100px] opacity-10"></div>
                  
                  <h3 className="text-2xl md:text-4xl font-black mb-4 uppercase tracking-tighter">Ready to Master These Skills?</h3>
                  <p className="mb-8 text-emerald-100/70 font-bold max-w-xl mx-auto uppercase tracking-widest text-xs md:text-sm">Join our premium courses and start your journey today with Chach Valley.</p>
                  
                  <button 
                      onClick={() => navig('/courses')}
                      className="group relative bg-[#10B981] text-[#0d1f14] px-12 py-5 rounded-2xl font-black text-lg md:text-xl uppercase tracking-widest transition-all transform hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(16,185,129,0.5)] active:scale-95 overflow-hidden"
                  >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      Explore Courses
                  </button>
              </div>
            </div>
          </article>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Blog;