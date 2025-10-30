import React, { useState } from "react";

const WhatsAppForm = ({ sectionName, fields, serviceTitle }) => {
  const [formData, setFormData] = useState(
    fields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {})
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let message = `Hello! I'm interested in ${sectionName}`;
    if (serviceTitle) message += ` - ${serviceTitle}`;
    message += "%0A";

    fields.forEach((field) => {
      message += `${field.label}: ${formData[field.name]}%0A`;
    });

    const number = "03120574560";
    window.open(`https://wa.me/${number}?text=${message}`, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-xl shadow-md space-y-4">
      <h2 className="text-2xl font-semibold text-[#255235] mb-2">{sectionName} Form</h2>

      {fields.map((field) => (
        <div key={field.name} className="flex flex-col">
          <label className="mb-1 font-medium">{field.label}</label>
          {field.type === "select" ? (
            <select
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              required={field.required}
              className="border rounded p-2"
            >
              <option value="">Select {field.label}</option>
              {field.options.map((opt, idx) => (
                <option key={idx} value={opt}>{opt}</option>
              ))}
            </select>
          ) : (
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder || ""}
              required={field.required}
              className="border rounded p-2"
            />
          )}
        </div>
      ))}

      <button
        type="submit"
        className="bg-[#255235] text-white px-6 py-2 rounded-full hover:bg-[#1f3f27] transition"
      >
        Send via WhatsApp
      </button>
    </form>
  );
};

export default WhatsAppForm;
