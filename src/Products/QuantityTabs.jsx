import { useState, useEffect } from "react";

const QuantityTabs = ({ tierPrices }) => {
  const priceKeys = Object.keys(tierPrices || {});
  const [selectedRange, setSelectedRange] = useState(priceKeys[0] || "");

  useEffect(() => {
    setSelectedRange(priceKeys[0] || "");
  }, [tierPrices]);

  if (!priceKeys.length) return null;

  return (
    <div className="mb-6">
      <div className="flex justify-center md:justify-start mb-3 flex-wrap text-[12px] sm:text-sm gap-[1px] sm:gap-2">
        {priceKeys.map((range) => (
          <button
            key={range}
            onClick={() => setSelectedRange(range)}
            className={`px-4 py-2 rounded-full border font-semibold transition-all duration-300 cursor-pointer ${
              selectedRange === range
                ? "bg-[#265336] text-white border-[#265336]"
                : "border-gray-300 text-gray-700 hover:border-[#265336]"
            }`}
          >
            {range}
          </button>
        ))}
      </div>

      {selectedRange && (
        <p className="text-xl font-bold text-[#265336]">
          {selectedRange} Price: Rs {tierPrices[selectedRange].toLocaleString()}
        </p>
      )}
    </div>
  );
};

export default QuantityTabs;
