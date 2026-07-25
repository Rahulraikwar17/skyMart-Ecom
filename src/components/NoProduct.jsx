import { SearchX } from "lucide-react";
import React from "react";

const NoProduct = ({ handleClearFilters }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-24 px-5">
      <div className="w-16 h-16 rounded-2xl bg-[#F87060]/10 border border-[#F87060]/30 flex items-center justify-center mb-5">
        <SearchX size={38} className="text-shadow-red-800" />
      </div>
      <h2 className="text-shadow-red-800text-xl font-bold">
        No products found
      </h2>
      <p className="text-shadow-red-800 text-sm mt-2 max-w-sm">
        We couldn't find anything matching your search or filters. Try adjusting
        them or clear everything to see all products.
      </p>
      <button
        onClick={handleClearFilters}
        className="mt-6 rounded-xl bg-[#1F0F0C]  text-[#FFA98F] font-semibold px-6 py-2.5 transition-colors"
      >
        Clear Filters
      </button>
    </div>
  );
};

export default NoProduct;
