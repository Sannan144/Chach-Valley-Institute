import { FaTimes } from "react-icons/fa";

const AdmissionForm = ({ course, onClose, formData, setFormData, onSubmit }) => {
  if (!course) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex justify-center items-center p-4">
      <div className="bg-white w-full h-full md:h-auto md:max-w-lg rounded-xl p-6 relative overflow-y-auto max-h-[95vh]">
        <FaTimes
          onClick={onClose}
          className="absolute top-4 right-4 text-red-600 text-2xl cursor-pointer hover:scale-110 transition-transform"
        />
        <h2 className="text-2xl font-bold text-[#265336] mb-4 text-center">
          Admission Form - {course.title}
        </h2>

        <form onSubmit={onSubmit} className="space-y-4">
          {["name", "whatsapp number", "address", "education"].map((field) => (
            <div key={field}>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <input
                type="text"
                name={field}
                placeholder={`Enter your ${field}`}
                value={formData[field]}
                onChange={handleChange}
                className="border p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-[#265336]"
              />
            </div>
          ))}

          <button
            type="submit"
            className="bg-[#265336] text-white w-full py-3 rounded-lg hover:bg-[#1d422b] transition-all font-semibold"
          >
            Send via WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdmissionForm;
