import { useState, useEffect } from "react";
import courses from "./CoursesData";
import Logo from "../Logo/Logo";
import Tabs from "../Tabs/Tabs";
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

  useEffect(() => {
    document.body.style.overflow = showForm || selectedCourse ? "hidden" : "auto";
  }, [showForm, selectedCourse]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, address, education } = formData;

    const message = `📚 *Admission Request*

🎓 *Course:* ${selectedCourse.title}

🪪 *Name:* ${name}
🏠 *Address:* ${address}
🎓 *Education:* ${education}`;

    window.open(
      `https://wa.me/03120574560?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const resetForm = () =>
    setFormData({ name: "", address: "", education: "" });

  return (
    <>
      <Logo />
      <Tabs />

      <div className="bg-[#265336] w-full px-3 sm:px-8 py-10">
        <h2
          className="font-bold mb-8 text-white text-center"
          style={{ fontSize: "clamp(30px, 4vw, 48px)" }}
        >
          Our Courses
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 place-items-center">
          {courses.map((course) => (
            <div
              key={course.id}
              onClick={() => {
                setSelectedCourse(course);
                setShowForm(false);
                resetForm();
              }}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer w-[169px] sm:w-[180px] md:w-[200px] lg:w-[220px] flex flex-col items-center justify-between text-center group"
            >
              <div className="w-full h-38 overflow-hidden mb-3 border-4 border-[#265336]/10 group-hover:border-[#265336]/40 transition-all duration-300">
                <img
                  src={course.img}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <p className="font-semibold text-[#265336] text-sm sm:text-base">
                {course.title}
              </p>
              <span className="text-xs text-gray-600 italic mt-1 mb-2">
                {course.duration}
              </span>
            </div>
          ))}
        </div>
      </div>

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
    </>
  );
};

export default OurCourses;
