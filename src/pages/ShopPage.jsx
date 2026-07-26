import React, { useContext, useState, useEffect } from "react";
import { useSearchParams } from "react-router";
import { SearchX } from "lucide-react";
import FilterBar from "../components/FilterBar";

import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import { Product } from "../context/ProductContext";
import NoProduct from "../components/NoProduct";
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
    <div className="bg-[#3D1F1A] ">
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
        <NoProduct handleClearFilters={handleClearFilters} />
      ) : (
        <div className=" grid grid-cols-5 max-[769px]:grid-cols-2 max-[1024px]:grid-cols-4 max-[426px]:grid-cols-1 max-[426px]:p-0.5 gap-2.5 p-5">
          {filteredProducts.map((val) => {
            return <ProductCard key={val.id} product={val} />;
          })}
        </div>
      )}
    </div>
  );
};

export default ShopPage;
