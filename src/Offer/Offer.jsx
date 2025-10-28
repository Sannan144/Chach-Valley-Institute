import React from "react";
import OfferData from "./OfferData";
import { useNavigate } from "react-router-dom";

const Offer = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 px-3 md:px-0 bg-[#255235]">
      <h2 style={{ fontSize: "clamp(30px,5vw,50px)" }} className="font-bold mx-3 mb-4 text-white">
          What we offer
      </h2>
      <div className="max-w-6xl mx-auto text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {OfferData.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/${item.title.toLowerCase()}`)}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
            >
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover transform transition-transform duration-500 hover:scale-110"
                />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offer;
