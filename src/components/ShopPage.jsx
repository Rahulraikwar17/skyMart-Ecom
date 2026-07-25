import React, { useContext, useState, useEffect } from "react";
import { useSearchParams } from "react-router";
import { SearchX } from "lucide-react";
import FilterBar from "../components/FilterBar";

import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import { Product } from "../context/ProductContext";
const ShopPage = () => {
  const { loading, productData } = useContext(Product);
  const [searchParams] = useSearchParams();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(
    searchParams.get("category") || "all",
  );
  const [sort, setSort] = useState(searchParams.get("sort") || "featured");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const urlCategory = searchParams.get("category");
    const urlSort = searchParams.get("sort");

    if (urlCategory) {
      setCategory(urlCategory);
    }
    if (urlSort) {
      setSort(urlSort);
    }
  }, [searchParams]);

  let filteredProducts = [...productData];

  if (category !== "all") {
    filteredProducts = filteredProducts.filter(
      (item) => item.category === category,
    );
  }

  if (sort === "low-high") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sort === "high-low") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sort === "top-rated") {
    filteredProducts.sort((a, b) => b.rating.rate - a.rating.rate);
  } else if (sort === "lowest-rated") {
    filteredProducts.sort((a, b) => a.rating.rate - b.rating.rate);
  }

  if (search.trim() !== "") {
    filteredProducts = filteredProducts.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase().trim()),
    );
  }

  const handleClearFilters = () => {
    setSearch("");
    setCategory("all");
    setSort("featured");
  };

  return (
    <div>
      <FilterBar
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        sort={sort}
        setSort={setSort}
        totalProducts={filteredProducts.length}
      />

      {loading ? (
        <Loader />
      ) : filteredProducts.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center py-24 px-5">
          <div className="w-16 h-16 rounded-2xl bg-[#F87060]/10 border border-[#F87060]/30 flex items-center justify-center mb-5">
            <SearchX size={28} className="text-[#F87060]" />
          </div>
          <h2 className="text-white text-xl font-bold">No products found</h2>
          <p className="text-[#FFA98F]/70 text-sm mt-2 max-w-sm">
            We couldn't find anything matching your search or filters. Try
            adjusting them or clear everything to see all products.
          </p>
          <button
            onClick={handleClearFilters}
            className="mt-6 rounded-xl bg-[#F87060] hover:bg-[#FFA98F] text-[#1F0F0C] font-semibold px-6 py-2.5 transition-colors"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2.5 p-3 sm:p-5">
          {filteredProducts.map((val) => {
            return <ProductCard key={val.id} product={val} />;
          })}
        </div>
      )}
    </div>
  );
};

export default ShopPage;
