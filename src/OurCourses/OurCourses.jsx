import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import courses from "./CoursesData";
import Logo from "../Logo/Logo";
import Tabs from "../Tabs/Tabs";
import Footer from "../Footer/Footer";

const OurCourses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const showData = (course) => {
    setSelectedCourse(course);
  };

  const close = () => {
    setSelectedCourse(null);
  };

  return (
    <>
      <Logo />
      <Tabs />

      <div className="bg-[#265336] w-full px-3 sm:px-8 py-10">
        <h2
          style={{ fontSize: "clamp(30px, 4vw, 48px)" }}
          className="font-bold mb-8 text-white text-center"
        >
          Our Courses
        </h2>

        {/* ✅ Responsive Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 place-items-center">
          {courses.map((box, index) => (
            <div
              key={index}
              onClick={() => showData(box)}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer w-[160px] sm:w-[180px] md:w-[200px] lg:w-[220px] flex flex-col items-center justify-between p-4 text-center group"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden mb-3 border-4 border-[#265336]/10 group-hover:border-[#265336]/40 transition-all duration-300">
                <img
                  src="https://images.unsplash.com/photo-1629198688000-71f23e745b6e?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=400"
                  alt={box.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <p className="font-semibold text-[#265336] text-sm sm:text-base">
                {box.title}
              </p>
              <span className="text-xs text-gray-600 italic mt-1">
                {box.duration}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Modal for Course Details */}
      {selectedCourse && (
        <div className="w-full h-screen bg-black/60 fixed left-0 top-0 z-50">
          <div className="w-[90%] sm:w-[500px] h-[90vh] sm:h-[500px] bg-white rounded-xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-4 relative overflow-hidden">
            <FaTimes
              onClick={close}
              className="text-red-600 text-2xl absolute top-3 right-3 cursor-pointer hover:scale-110 transition-transform"
              title="Close"
            />

            <div className="h-full pr-2 overflow-y-auto space-y-4">
              <h3 className="text-xl font-bold text-[#265336]">
                {selectedCourse.title}
              </h3>
              <p className="text-sm text-gray-600">
                <strong>Duration:</strong> {selectedCourse.duration}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Mode:</strong> {selectedCourse.Mode}
              </p>

              <div>
                <h4 className="font-semibold text-gray-700">
                  What You'll Learn:
                </h4>
                <ul className="list-disc ml-5 text-sm text-gray-700">
                  {selectedCourse.learn.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-700">Who Can Join:</h4>
                <ul className="list-disc ml-5 text-sm text-gray-700">
                  {selectedCourse.Join.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-700">Outcomes:</h4>
                <ul className="list-disc ml-5 text-sm text-gray-700">
                  {selectedCourse.Outcome.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="tracking-tighter">
                <p className="text-sm text-gray-700">
                  <strong>Fee:</strong> Rs. {selectedCourse.Fee} /-
                </p>

                <p className="text-sm text-gray-600">
                  <strong>Installments:</strong> Available
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Free Demo Class:</strong> Yes
                </p>
              </div>

              <button className="bg-[#265336] mt-3 px-4 py-2 rounded-lg text-white cursor-pointer hover:bg-[#1d422b] transition-all">
                Admission Form
              </button>
            </div>
          </div>
        </div>
      )}
        <Footer/>
    </>
  );
};

export default OurCourses;
