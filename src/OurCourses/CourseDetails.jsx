import { FaTimes } from "react-icons/fa";

const CourseDetails = ({ course, onClose, onOpenForm }) => {
  if (!course) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-center items-center p-0 transition-opacity duration-300">
      {/* Full-screen modal container */}
      <div className="bg-white w-full h-full overflow-y-auto relative flex flex-col">

        {/* Close Button (Fixed) */}
        <FaTimes
          onClick={onClose}
          className="fixed top-6 right-6 text-red-600 text-3xl cursor-pointer hover:scale-110 transition-transform z-50"
        />

        {/* Header */}
        <div className="p-8 text-center bg-[#1d422b] text-white">
          <h2 className="text-4xl font-bold mb-2">{course.title}</h2>
          <p className="text-lg">
            <strong>Duration:</strong> {course.duration} | <strong>Mode:</strong> {course.Mode}
          </p>
        </div>

        {/* Content Sections */}
        <div className="p-8 grid md:grid-cols-2 gap-6 flex-grow">
          {/* What You'll Learn */}
          <div className="bg-[#f0fdf4] p-6 rounded-lg shadow-lg">
            <h3 className="font-semibold text-[#265336] text-xl mb-3">What You'll Learn:</h3>
            <ul className="list-disc ml-5 text-gray-700 space-y-1">
              {course.learn.map((item, i) => {

                return(
                  <div>
                    <h1 className="font-bold">{item.heading}</h1>
                    {item.subParts.map((valu)=>{
                    return(
                      <>
                     <p>{valu}</p>
                      </>
                    )  
                  }
                  )}
                  </div>
                )

              })}
            </ul>
          </div>

          {/* Who Can Join */}
          <div className="bg-[#fefce8] p-6 rounded-lg shadow-lg">
            <h3 className="font-semibold text-[#b45309] text-xl mb-3">Who Can Join:</h3>
            <ul className="list-disc ml-5 text-gray-700 space-y-1">
              {course.Join.map((item, i) => {
                return(
                  <div>
                    <h1 className="font-bold">{item.heading}</h1>
                    {item.subParts.map((valu)=>{
                    return(
                      <>
                     <p>{valu}</p>
                      </>
                    )  
                  }
                  )}
                  </div>
                )
              })}
            </ul>
          </div>

          {/* Outcomes */}
          <div className="bg-[#eff6ff] p-6 rounded-lg shadow-lg md:col-span-2">
            <h3 className="font-semibold text-[#1e40af] text-xl mb-3">Outcomes:</h3>
            <ul className="list-disc ml-5 text-gray-700 space-y-1">
              {course.Outcome.map((item, i) => {
                return(
                  <div>
                    <h1 className="font-bold">{item.heading}</h1>
                    {item.subParts.map((valu)=>{
                    return(
                      <>
                     <p>{valu}</p>
                      </>
                    )  
                  }
                  )}
                  </div>
                )
              })}
            </ul>
          </div>

          {/* Fee & Extra Info */}
          <div className="bg-[#fef2f2] p-6 rounded-lg shadow-lg md:col-span-2 flex flex-col gap-3">
            <p className="text-gray-800 font-medium"><strong>Fee:</strong> Rs. {course.Fee} /-</p>
            <p className="text-gray-600"><strong>Installments:</strong> Available</p>
            <p className="text-gray-600"><strong>Free Demo Class:</strong> 3 Days Free Demo Class for Everyone </p>
          </div>
        </div>

        {/* Admission Button */}
        <div className="p-8 bg-gray-50">
          <button
            onClick={onOpenForm}
            className="bg-[#265336] hover:bg-[#1d422b] text-white font-semibold py-4 rounded-lg w-full transition-all text-xl"
          >
            Admission Form
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
