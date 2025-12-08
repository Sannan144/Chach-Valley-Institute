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
  const [category, setCategory] = useState(service?.formOptions?.[0] || "");
  const [secCategory, setSecCategory] = useState(service?.SecformOptions?.[0] || "");
  const [thirdCategory, setThirdCategory] = useState(service?.ThirdformOptions?.[0] || "");

  const whatsappNumber = "03120574560";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !budget) {
      alert("Please fill all fields");
      return;
    }

    const message = `📌 *Service Request*\n\n🛠️ Service: ${service.title}\n🪪 Name: ${name}\n📧 Email: ${email}\n💸 Budget: ${budget}${
      category ? `\n📂 Category 1: ${category}` : ""
    }${secCategory ? `\n📂 Category 2: ${secCategory}` : ""}${
      thirdCategory ? `\n📂 Category 3: ${thirdCategory}` : ""
    }`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    setName("");
    setEmail("");
    setBudget("");
    setCategory(service?.formOptions?.[0] || "");
    setSecCategory(service?.SecformOptions?.[0] || "");
    setThirdCategory(service?.ThirdformOptions?.[0] || "");
  };

  if (!service)
    return (
      <h2 className="text-center mt-20 text-xl text-red-600 font-bold">
        Service Not Found
      </h2>
    );

  const navg = useNavigate()

  return (
    <>
      {/* Clear Header */}
      <Logo />
      <Tabs />

      {/* Page Portal with Background */}
      <div className="min-h-screen bg-transparent">
        <div className="max-w-5xl mx-auto py-16 px-4 md:px-6 lg:px-4
                        bg-gradient-to-br from-[#f6fff6] to-[#dfffe3] rounded-2xl shadow-xl transition duration-300">
          {/* Cross Icon */}
          <button
          onClick={()=> navg('/services')}
          className="text-red-600 text-3xl font-bold hover:text-red-800 hover:scale-125 transition-all cursor-pointer fixed z-20 right-10 top-40"
          >
            ✕
          </button>

          <h1 className="text-4xl md:text-5xl font-extrabold text-[#255235] mb-8 drop-shadow-md text-center tracking-wide">
            {service.title}
          </h1>

          <img
            src={service.image}
            alt={service.title}
            className="w-full h-72 md:h-96 object-cover rounded-2xl shadow-2xl mb-10 border-4 border-white"
          />

          {/* Description Box */}
          <div className="mb-10 bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-green-200
                          bg-gradient-to-br from-white/70 to-green-50/60 transition duration-300">
            {service.desc.map((srv, index) => (
              <div key={index} className="mb-8">
                <h2 className="font-semibold text-xl md:text-2xl text-[#1f4b2c] mb-3 tracking-wide">
                  {srv.description}
                </h2>
                {srv.bullets.map((sp, idx) => (
                  <p
                    key={idx}
                    className="flex gap-3 text-gray-800 text-base leading-relaxed tracking-wide mb-2"
                  >
                    <span className="text-emerald-600 font-bold text-lg">•</span>
                    {sp}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Dynamic Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white/90 backdrop-blur-lg p-10 rounded-2xl shadow-2xl border border-green-200
                       hover:shadow-green-300/40 transition-all duration-300"
          >
            <h2 className="text-3xl font-bold text-[#255235] mb-6 text-center tracking-wide">
              Request this Service
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-1 font-medium tracking-wide">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-green-600 outline-none"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium tracking-wide">Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-green-600 outline-none"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium tracking-wide">Budget</label>
                <input
                  type="text"
                  placeholder="Your Budget"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-green-600 outline-none"
                />
              </div>

              {/* Form Options */}
              {service.formOptions && (
                <div>
                  <label className="block mb-1 font-medium tracking-wide">Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-green-600 outline-none"
                  >
                    {service.formOptions.map((option, idx) => (
                      <option key={idx} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {service.SecformOptions && (
                <div>
                  <label className="block mb-1 font-medium tracking-wide">Additional Category</label>
                  <select
                    value={secCategory}
                    onChange={(e) => setSecCategory(e.target.value)}
                    className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-green-600 outline-none"
                  >
                    {service.SecformOptions.map((option, idx) => (
                      <option key={idx} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {service.ThirdformOptions && (
                <div>
                  <label className="block mb-1 font-medium tracking-wide">Third Category</label>
                  <select
                    value={thirdCategory}
                    onChange={(e) => setThirdCategory(e.target.value)}
                    className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-green-600 outline-none"
                  >
                    {service.ThirdformOptions.map((option, idx) => (
                      <option key={idx} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>

            <div className="text-center mt-8">
              <button
                type="submit"
                className="bg-[#255235] text-white px-14 py-3 rounded-full shadow-lg 
                hover:bg-[#1f3f27] hover:shadow-green-400/60 hover:scale-105 transition-all duration-300 
                text-lg font-semibold tracking-wide"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default ServiceDetail;
