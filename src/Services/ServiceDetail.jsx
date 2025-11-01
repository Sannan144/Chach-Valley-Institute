import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo";
import Tabs from "../Tabs/Tabs";
import Footer from "../Footer/Footer";
import ServicesData from "./ServicesData";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const service = ServicesData.find((s) => s.slug === serviceId);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [budget, setBudget] = useState("");
  const [category, setCategory] = useState(service?.formOptions[0] || "");

  const whatsappNumber = "03120574560"; // apna number yahan daalain

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !budget || !category) {
      alert("Please fill all fields");
      return;
    }

    // Clean message with line breaks
    const message = `Service Request: ${service.title}
Name: ${name}
Email: ${email}
Budget: ${budget}
Category: ${category}`;

    // Open WhatsApp
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    // Reset form
    setName("");
    setEmail("");
    setBudget("");
    setCategory(service?.formOptions[0] || "");
  };

  if (!service)
    return <h2 className="text-center mt-20 text-xl">Service Not Found</h2>;

  return (
    <>
      <Logo />
      <Tabs />

      {/* Close Button (Red Cross) */}
      <button
        onClick={() => navigate(-1)}
        className="fixed cursor-pointer top-5 right-5 z-50 w-10 h-10 flex items-center justify-center bg-red-500 text-white text-2xl font-bold rounded-full hover:bg-red-600 transition"
      >
        &times;
      </button>

      <div className="max-w-4xl mx-auto py-16 px-4">
        {/* Service Title */}
        <h1 className="text-4xl font-bold text-[#255235] mb-6">{service.title}</h1>

        {/* Image */}
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-96 object-cover rounded-xl mb-6"
        />

        {/* Description */}
        <p className="text-gray-700 text-lg mb-6">{service.description}</p>

        {/* Bullets */}
        <ul className="list-disc list-inside text-gray-700 mb-6">
          {service.bullets.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-100 p-6 rounded-xl shadow-md"
        >
          <h2 className="text-2xl font-bold mb-4">Request this Service</h2>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Budget</label>
            <input
              type="text"
              placeholder="Your Budget"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2 border rounded"
            >
              {service.formOptions.map((option, idx) => (
                <option key={idx} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="bg-[#255235] text-white px-6 py-2 rounded-full hover:bg-[#1f3f27] transition"
          >
            Submit
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default ServiceDetail;
