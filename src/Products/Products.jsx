import { FaStar } from "react-icons/fa";
import products from "./ProductsData";
import Logo from "../Logo/Logo";
import Tabs from "../Tabs/Tabs";

const Products = () => {
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

        {/* ✅ Responsive Grid: 2 on Mobile, 4 on Desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white w-[150px] sm:w-[180px] md:w-[200px] h-[300px] sm:h-[340px] rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden cursor-pointer group"
            >
              {/* Image */}
              <div className="h-[60%] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Details */}
              <div className="p-3 flex flex-col justify-between flex-grow text-center">
                <h3 className="font-semibold text-[#265336] text-sm sm:text-base line-clamp-2">
                  {item.name}
                </h3>

                {/* Rating */}
                <div className="flex justify-center items-center gap-1 mt-1">
                  <FaStar className="text-[#facc15]" /> {/* gold star */}
                  <p className="text-[#facc15] text-xs font-semibold">
                    {item.rating}
                  </p>
                </div>

                {/* Sold count */}
                <p className="text-gray-600 text-xs mt-1">
                  {item.sold} sold
                </p>

                {/* Price */}
                <p className="font-bold text-[#265336] mt-2">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
