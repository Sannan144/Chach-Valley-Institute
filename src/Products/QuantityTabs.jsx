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
      <div className="flex justify-center md:justify-start gap-3 mb-3 flex-wrap">
        {priceKeys.map((range) => (
          <button
            key={range}
            onClick={() => setSelectedRange(range)}
            className={`px-4 cursor-pointer py-2 rounded-full border font-semibold transition-all duration-300 ${
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
          Price: Rs {tierPrices[selectedRange].toLocaleString()}
        </p>
      )}
    </div>
  );
};

export default QuantityTabs;
