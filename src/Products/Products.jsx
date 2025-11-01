import { useState, useEffect, useRef } from "react";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import products from "./ProductsData";
import QuantityTabs from "./QuantityTabs";
import Logo from "../Logo/Logo";
import Tabs from "../Tabs/Tabs";
import Footer from "../Footer/Footer";

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [mainIndex, setMainIndex] = useState(0);
  const isDragging = useRef(false);
  const startX = useRef(0);

  useEffect(() => {
    document.body.style.overflow = selectedProduct ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [selectedProduct]);

  const openModal = (product) => {
    setSelectedProduct(product);
    setMainIndex(0);
  };

  const closeModal = () => setSelectedProduct(null);

  const startDrag = (e) => {
    isDragging.current = true;
    startX.current = e.pageX || e.touches[0].pageX;
  };

  const onDrag = (e) => {
    if (!isDragging.current) return;
    const x = e.pageX || e.touches[0].pageX;
    const delta = startX.current - x;

    if (delta > 50 && mainIndex < selectedProduct.images.length - 1) {
      setMainIndex(mainIndex + 1);
      isDragging.current = false;
    } else if (delta < -50 && mainIndex > 0) {
      setMainIndex(mainIndex - 1);
      isDragging.current = false;
    }
  };

  const endDrag = () => {
    isDragging.current = false;
  };

  return (
    <>
      <Logo />
      <Tabs />

      <div className="bg-[#f3f4f6] min-h-screen w-full py-10 px-4 sm:px-10">
        <h2
          style={{ fontSize: "clamp(30px, 4vw, 48px)" }}
          className="text-center font-bold text-[#265336] mb-10"
        >
          Our Products
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
          {products.map((item) => (
            <div
              key={item.id}
              onClick={() => openModal(item)}
              className="bg-white w-[150px] sm:w-[180px] md:w-[200px] h-[300px] sm:h-[340px] rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden cursor-pointer group"
            >
              <div className="h-[60%] overflow-hidden">
                <img
                  src={item.images[0]}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-3 flex flex-col justify-between flex-grow text-center">
                <h3 className="font-semibold text-[#265336] text-sm sm:text-base line-clamp-2">
                  {item.name}
                </h3>
                <div className="flex justify-center items-center gap-1 mt-1">
                  <FaStar className="text-[#facc15]" />
                  <p className="text-[#facc15] text-xs font-semibold">
                    {item.rating}
                  </p>
                </div>
                <p className="text-gray-600 text-xs mt-1">{item.sold} sold</p>
                <p className="font-bold text-[#265336] mt-2">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 animate-fadeIn p-0">
          <div className="bg-white w-full h-full p-6 md:p-10 relative overflow-y-auto hide-scrollbar">
            <button
              className="absolute top-5 right-6 text-gray-700 font-bold text-3xl hover:text-[#265336] transition-transform duration-300 hover:scale-125 cursor-pointer z-50"
              onClick={closeModal}
            >
              ✕
            </button>

            <div className="flex flex-col md:flex-row gap-8 h-full">
              <div className="flex flex-col md:flex-row gap-4 flex-1 items-center justify-center">
                {/* Main Image Slider */}
                <div
                  className="flex-1 flex justify-center items-center relative overflow-hidden rounded-xl shadow-lg border border-gray-200 bg-gray-100"
                  onMouseDown={startDrag}
                  onMouseMove={onDrag}
                  onMouseUp={endDrag}
                  onMouseLeave={endDrag}
                  onTouchStart={startDrag}
                  onTouchMove={onDrag}
                  onTouchEnd={endDrag}
                  style={{ cursor: isDragging.current ? "grabbing" : "grab" }}
                >
                  <div
                    className="flex transition-transform duration-300"
                    style={{
                      transform: `translateX(-${mainIndex * 100}%)`,
                      width: `${selectedProduct.images.length * 100}%`,
                    }}
                  >
                    {selectedProduct.images.map((img, idx) => (
                      <div
                        key={idx}
                        className="flex-shrink-0 w-full h-96 relative"
                      >
                        <img
                          src={img}
                          alt={`slide-${idx}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Thumbnails */}
                <div className="flex md:flex-col gap-3 justify-center items-center mt-4 md:mt-0">
                  {selectedProduct.images.map((img, idx) => (
                    <div
                      key={idx}
                      className={`w-20 h-20 rounded-lg overflow-hidden border-2 cursor-pointer transition-all duration-300 hover:scale-110 ${
                        idx === mainIndex ? "border-[#265336]" : "border-gray-300"
                      }`}
                      onClick={() => setMainIndex(idx)}
                    >
                      <img
                        src={img}
                        alt={`thumb-${idx}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Product Details */}
              <div className="flex-1 flex flex-col justify-center text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#265336] mb-4">
                  {selectedProduct.name}
                </h2>

                <QuantityTabs tierPrices={selectedProduct.tierPrices} />

                <div className="flex justify-center md:justify-start items-center gap-2 mb-4">
                  <FaStar className="text-[#facc15]" />
                  <span className="text-[#facc15] font-semibold">
                    {selectedProduct.rating}
                  </span>
                  <span className="text-gray-500 text-sm ml-2">
                    ({selectedProduct.sold} sold)
                  </span>
                </div>

                <p className="text-gray-600 mb-6 text-sm md:text-base leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse vitae lacus vitae arcu malesuada tincidunt.
                  Aenean at nisi nec odio efficitur tincidunt non sit amet
                  ligula.
                </p>

                <button className="flex justify-center items-center gap-2 bg-[#265336] text-white px-6 py-3 rounded-full hover:bg-[#1f4229] hover:scale-105 transition-all duration-300 cursor-pointer font-semibold mx-auto md:mx-0">
                  <FaShoppingCart />
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Products;
