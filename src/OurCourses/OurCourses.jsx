import { useState, useEffect } from "react";
import { FaStar, FaClock, FaUser, FaTag } from "react-icons/fa";
import courses from "./CoursesData";
import Logo from "../Logo/Logo";
import Footer from "../Footer/Footer";
import CourseDetails from "./CourseDetails";
import AdmissionForm from "./AdmissionForm";

const OurCourses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    education: ""
  });

  const discounts = ["20%", "25%", "30%", "35%"];

  useEffect(() => {
    document.body.style.overflow = showForm || selectedCourse ? "hidden" : "auto";
  }, [showForm, selectedCourse]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, address, education } = formData;
    const message = `📚 *Admission Request*\n\n🎓 *Course:* ${selectedCourse.title}\n\n🪪 *Name:* ${name}\n🏠 *Address:* ${address}\n🎓 *Education:* ${education}`;
    window.open(`https://wa.me/923191942002?text=${encodeURIComponent(message)}`, "_blank");
  };

  const resetForm = () => setFormData({ name: "" , address: "", education: "" });

  return (
    <div className="bg-[#f4f7f5] min-h-screen font-sans selection:bg-[#265336] selection:text-white">
      <Logo />

      {/* --- HERO SECTION (Logo Themed Gradient) --- */}
      <div className="relative bg-gradient-to-tr from-[#0d1f14] via-[#265336] to-[#3e8558] pt-20 pb-36 px-4 overflow-hidden border-b-4 border-[#10B981]/20">
        
        {/* Subtle Branding Overlays */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]"></div>
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#10B981] rounded-full blur-[120px] opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#265336] rounded-full blur-[100px] opacity-30"></div>

        <div className="relative z-10 max-w-7xl mx-auto text-center flex flex-col items-center">
          {/* ✅ HEADING: Letter spacing barha di hy aur solid black shadow add kiya hy ta k easily parha ja saky */}
          <h1 className="uppercase text-3xl md:text-7xl font-black text-white tracking-[0.25em] drop-shadow-[0_5px_15px_rgba(0,0,0,0.4)] animate-slide-up">
            Our Courses
          </h1>
          <div className="mt-6 w-32 h-1.5 bg-gradient-to-r from-transparent via-[#10B981] to-transparent rounded-full shadow-lg"></div>
          <p className="mt-4 text-emerald-100/80 text-xs md:text-lg font-bold tracking-[0.1em] uppercase opacity-80">
            Professional & Excellence
          </p>
        </div>

        {/* Wavy Shape */}
        <div className="absolute bottom-0 left-0 w-full leading-[0]">
          <svg viewBox="0 0 1440 320" className="w-full h-auto">
            <path fill="#f4f7f5" fillOpacity="1" d="M0,192L60,197.3C120,203,240,213,360,197.3C480,181,600,139,720,138.7C840,139,960,181,1080,192C1200,203,1320,181,1380,170.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      {/* --- COURSES GRID (Fixed Mobile 2 Columns) --- */}
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 -mt-24 pb-20 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-10">
          {courses.map((course, index) => {
            const studentCount = (course.id * 9) % 35 + 15; // 15 to 50 range
            const discount = discounts[index % discounts.length];

            return (
              <div
                key={course.id}
                onClick={() => {
                  setSelectedCourse(course);
                  setShowForm(false);
                  resetForm();
                }}
                className="bg-white rounded-2xl sm:rounded-[2.5rem] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_60px_rgba(38,83,54,0.25)] transition-all duration-500 cursor-pointer group flex flex-col h-full border-2 border-white hover:border-[#10B981]/30 transform hover:-translate-y-4 animate-scale-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* 3D Container for Image */}
                <div className="relative h-32 sm:h-52 md:h-60 overflow-hidden">
                  <img
                    src={course.img}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Status Badge */}
                  <div className="absolute top-2 left-2 sm:top-4 sm:left-4">
                    <span className="bg-[#265336] text-white text-[7px] sm:text-[10px] font-black px-2 py-1 rounded-md uppercase tracking-tighter shadow-lg">
                      Beginner
                    </span>
                  </div>

                  {/* Discount Badge */}
                  <div className="absolute top-2 right-2 sm:top-4 sm:right-4">
                    <span className="bg-orange-500 text-white text-[7px] sm:text-[10px] font-black px-2 py-1 rounded-md uppercase flex items-center gap-1 shadow-lg animate-bounce">
                      <FaTag size={8} /> {discount} OFF
                    </span>
                  </div>
                </div>

                {/* Info Content */}
                <div className="p-3 sm:p-7 flex flex-col flex-grow">
                  <div className="flex text-yellow-400 text-[8px] sm:text-xs mb-1 sm:mb-3">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                  </div>

                  <h3 className="text-[11px] sm:text-xl font-black text-gray-800 mb-2 sm:mb-5 group-hover:text-[#265336] transition-colors line-clamp-2 leading-tight tracking-tight">
                    {course.title}
                  </h3>

                  {/* Meta Stats (Students < 50) */}
                  <div className="mt-auto flex flex-col gap-2 border-t border-gray-100 pt-3 sm:pt-5">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1 text-[8px] sm:text-xs font-bold text-gray-500">
                        <FaClock className="text-emerald-600" /> {course.duration}
                      </span>
                      <span className="flex items-center gap-1 text-[8px] sm:text-xs font-black text-emerald-800 bg-emerald-50 px-2 py-1 rounded-full">
                        <FaUser size={8} /> {studentCount}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* --- MODALS --- */}
      {selectedCourse && !showForm && (
        <CourseDetails
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
          onOpenForm={() => setShowForm(true)}
        />
      )}

      {selectedCourse && showForm && (
        <AdmissionForm
          course={selectedCourse}
          onClose={() => setShowForm(false)}
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleSubmit}
        />
      )}

      <Footer />
    </div>
  );
};

export default OurCourses;