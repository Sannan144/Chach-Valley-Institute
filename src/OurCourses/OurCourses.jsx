import { useState } from "react"
import { FaTimes } from "react-icons/fa"
import courses from "./CoursesData"
import Logo from "../Logo/Logo"
import Offer from "../Offer/Offer"

const OurCourses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null)

  const showData = (course) => {
    setSelectedCourse(course)
  }

  const close = () => {
    setSelectedCourse(null)
  }

  return (
    <>
      <Logo/>

      <Offer/>
      
      <div className="bg-[#265336] w-full px-2 sm:px-8 py-5">
        <h2
          style={{ fontSize: "clamp(44px,5vw,50px)" }}
          className="font-bold mb-4 text-white ml-6 sm:ml-0"
        >
          Our Courses
        </h2>

        <div className="flex justify-center gap-3 sm:gap-5 flex-wrap">
          {courses.map((box, index) => (
            <div
              key={index}
              onClick={() => showData(box)}
              className="h-[100px] w-[173px] sm:w-[200px] md:w-56 md:h-56 bg-white rounded-xl hover:scale-[1.1] transition-all duration-600 cursor-pointer flex items-center justify-center text-center p-2"
            >
              <p className="text-sm font-semibold text-[#265336]">{box.title}</p>
            </div>
          ))}
        </div>
      </div>

      {selectedCourse && (
        <div className="w-full h-screen bg-black/60 fixed left-0 top-0 z-50">
          <div className="w-[360px] sm:w-[500px] h-[500px] bg-white rounded-xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-4 relative overflow-hidden">
            <FaTimes
              onClick={close}
              className="text-red-600 text-2xl absolute top-3 right-3 cursor-pointer hover:scale-110 transition-transform"
              title="Close"
            />

            <div className="h-full pr-2 overflow-y-auto space-y-4">
              <h3 className="text-xl font-bold text-[#265336]">{selectedCourse.title}</h3>
              <p className="text-sm text-gray-600">
                <strong>Duration:</strong> {selectedCourse.duration}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Mode:</strong> {selectedCourse.Mode}
              </p>

              <div>
                <h4 className="font-semibold text-gray-700">What You'll Learn:</h4>
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

              <button className="bg-[#265336] px-3 py-[2px] text-white cursor-pointer">Admission Form</button>

            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default OurCourses
