import { useState, useEffect } from "react";
import { FaStar, FaClock, FaUser, FaTag, FaShareAlt, FaCheck, FaCertificate, FaLaptopCode, FaHeadset } from "react-icons/fa";
import courses from "./CoursesData";
// import Logo from "../Logo/Logo"; // Uncomment if needed
// import Footer from "../Footer/Footer"; // Uncomment if needed
import CourseDetails from "./CourseDetails";

const OurCourses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [copiedId, setCopiedId] = useState(null);

  const discounts = ["20%", "25%", "30%", "35%"];

  // --- DEEP LINKING LOGIC ---
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const courseId = params.get("course");
    if (courseId) {
      const foundCourse = courses.find((c) => c.id.toString() === courseId);
      if (foundCourse) setSelectedCourse(foundCourse);
    }
  }, []);

  // Modal open hone par background scroll roknay ke liye
  useEffect(() => {
    document.body.style.overflow = selectedCourse ? "hidden" : "auto";
  }, [selectedCourse]);

  // --- COPY LINK FUNCTION ---
  const handleCopyLink = (e, id) => {
    e.stopPropagation();
    const baseUrl = window.location.origin + window.location.pathname;
    const shareableLink = `${baseUrl}?course=${id}`;
    
    navigator.clipboard.writeText(shareableLink).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  return (
    <div className="bg-[#f8faf9] min-h-screen font-sans selection:bg-[#265336] selection:text-white">
      
      {/* --- HERO SECTION --- */}
      <div className="relative bg-gradient-to-br from-[#0a180f] via-[#1a3a26] to-[#265336] pt-24 pb-40 px-4 overflow-hidden border-b-[6px] border-[#10B981]">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center flex flex-col items-center">
          <span className="bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/30 px-4 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase mb-4 backdrop-blur-sm">
            Premium Skill Development
          </span>
          <h1 className="text-4xl md:text-7xl font-black text-white tracking-tight drop-shadow-2xl mb-4">
            Master Your Future
          </h1>
          <p className="text-emerald-100/90 text-lg md:text-2xl font-medium max-w-2xl mx-auto mb-8">
            Learn high-demand digital skills from industry experts. <br/>
            <span className="text-xl font-bold text-yellow-400 font-urdu mt-2 block">اپنے شاندار مستقبل کا آغاز آج ہی کریں</span>
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-6 text-white/90">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-md">
              <FaLaptopCode className="text-[#10B981] text-xl" /> <span className="font-semibold text-sm">100% Practical</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-md">
              <FaCertificate className="text-yellow-400 text-xl" /> <span className="font-semibold text-sm">Certified Courses</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-md">
              <FaHeadset className="text-blue-400 text-xl" /> <span className="font-semibold text-sm">Lifetime Support</span>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full leading-[0]">
          <svg viewBox="0 0 1440 320" className="w-full h-auto">
            <path fill="#f8faf9" fillOpacity="1" d="M0,192L60,197.3C120,203,240,213,360,197.3C480,181,600,139,720,138.7C840,139,960,181,1080,192C1200,203,1320,181,1380,170.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      {/* --- COURSES GRID --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 pb-24 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => {
            const studentCount = (course.id * 14) % 85 + 40;
            const discount = discounts[index % discounts.length];

            return (
              <div
                key={course.id}
                onClick={() => setSelectedCourse(course)}
                className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group flex flex-col h-full border border-gray-100 hover:border-[#10B981]/50 transform hover:-translate-y-2"
              >
                {/* Card Image Wrapper */}
                <div className="relative h-56 overflow-hidden bg-gray-100">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                  <img
                    src={course.img}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Share Button */}
                  <button 
                    onClick={(e) => handleCopyLink(e, course.id)}
                    className="absolute top-4 right-4 bg-white/20 hover:bg-white p-2.5 rounded-full text-white hover:text-[#265336] transition-all backdrop-blur-md shadow-lg z-20"
                    title="Copy Course Link"
                  >
                    {copiedId === course.id ? <FaCheck size={14} className="text-emerald-500" /> : <FaShareAlt size={14} />}
                  </button>

                  {/* Badges */}
                  <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
                    <span className="bg-[#265336] text-white text-xs font-bold px-3 py-1 rounded-md shadow-lg uppercase tracking-wide">
                      Beginner to Pro
                    </span>
                    <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-black px-3 py-1 rounded-md shadow-lg flex items-center w-max gap-1">
                      <FaTag size={10} /> {discount} OFF
                    </span>
                  </div>

                  {/* Duration Overlay */}
                  <div className="absolute bottom-4 left-4 z-20">
                     <span className="flex items-center gap-1.5 text-xs font-bold text-white bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-lg">
                        <FaClock className="text-[#10B981]" /> {course.duration.split('|')[0]}
                      </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-grow relative">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex text-yellow-400 text-sm">
                      <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </div>
                    <span className="flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
                      <FaUser size={10} /> {studentCount}+ Students
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-gray-900 mb-2 group-hover:text-[#265336] transition-colors leading-tight">
                    {course.title}
                  </h3>
                  
                  <p className="text-gray-500 text-sm mb-6 line-clamp-2">
                    Start your journey with this comprehensive, step-by-step professional training program.
                  </p>

                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <button className="w-full bg-gray-50 group-hover:bg-[#265336] text-[#265336] group-hover:text-white font-bold py-3 rounded-xl transition-all duration-300 flex flex-col items-center justify-center gap-0.5">
                      <span className="uppercase tracking-wider text-sm">View Details/Apply Now</span>
                      <span className="font-urdu text-xs opacity-80">کورس کی تفصیلات دیکھیں</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* --- COURSE DETAILS MODAL --- */}
      {selectedCourse && (
        <CourseDetails
          course={selectedCourse}
          onClose={() => {
            setSelectedCourse(null);
            window.history.pushState({}, "", window.location.pathname);
          }}
          // Yahan maine aapka Google form link laga diya hai
          onOpenForm={() => window.open("https://forms.gle/HFPcgFmfuW16VkrX9", "_blank")}
        />
      )}
    </div>
  );
};

export default OurCourses;