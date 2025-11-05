import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// Import required modules
import { EffectCards } from "swiper/modules";

import "./Styles.css";

export default function Slider() {
  const slides = [
    "https://images.unsplash.com/photo-1622782914767-404fb9ab3f57?auto=format&fit=crop&q=60&w=400",
    "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&q=60&w=400",
    "https://plus.unsplash.com/premium_photo-1681666713741-3e307db44f68?auto=format&fit=crop&q=60&w=400",
    "https://plus.unsplash.com/premium_photo-1761966668077-7adbb3c06bc2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=400",
  ];

  return (
    <div id="app">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        loop={true}             // 🔁 makes the slider infinite
        className="mySwiper"
      >
        {slides.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
