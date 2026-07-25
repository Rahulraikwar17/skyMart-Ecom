import React from "react";
import { Search } from "lucide-react";

const categoryOptions = [
  { label: "All Categories", value: "all" },
  { label: "Electronics", value: "electronics" },
  { label: "Men's Clothing", value: "men's clothing" },
  { label: "Women's Clothing", value: "women's clothing" },
  { label: "Jewelry", value: "jewelery" },
];

const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low → High", value: "low-high" },
  { label: "Price: High → Low", value: "high-low" },
  { label: "Top Rated", value: "top-rated" },
  { label: "Lowest Rated", value: "lowest-rated" },
];

export default function FilterBar({
  search,
  setSearch,
  category,
  setCategory,
  sort,
  setSort,
  totalProducts = 0,
}) {
  return (
    <div className="w-full bg-[#3D1F1A] backdrop-blur-xl pt-8 sm:pt-10 p-4 sm:p-6">
      <h1 className="text-white text-2xl sm:text-4xl font-bold">All Products</h1>

      <p className="text-[#FFA98F] text-sm mt-1">
        {totalProducts} products found
      </p>

      <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-3 mt-6 border border-[#F87060]/30 bg-white/5 backdrop-blur-md rounded-3xl lg:rounded-full p-2">
        <div className="flex items-center flex-1 bg-white/10 backdrop-blur-md rounded-full px-4 py-2.5 border border-transparent focus-within:border-[#F87060] transition-colors">
          <Search size={18} className="text-[#FFA98F] shrink-0" />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="bg-transparent text-white text-sm placeholder-[#FFA98F]/60 ml-3 w-full outline-none"
          />
        </div>

        <div className="flex gap-3">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="flex-1 lg:flex-none bg-white/10 backdrop-blur-md text-white text-sm rounded-full px-4 sm:px-5 py-2.5 lg:min-w-[220px] border border-transparent hover:border-[#F87060] focus:border-[#F87060] outline-none cursor-pointer"
          >
            {categoryOptions.map((item) => (
              <option key={item.value} value={item.value} className="bg-[#C1443A]/50 text-white">
                {item.label}
              </option>
            ))}
          </select>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="flex-1 lg:flex-none bg-white/10 backdrop-blur-md text-white text-sm rounded-full px-4 sm:px-5 py-2.5 lg:min-w-[190px] border border-transparent hover:border-[#F87060] focus:border-[#F87060] outline-none cursor-pointer"
          >
            {sortOptions.map((item) => (
              <option key={item.value} value={item.value} className="bg-[#C1443A]/50 text-white">
                {item.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
