import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { Laptop, User, Gem } from "lucide-react";
import { Product } from "../context/ProductContext";

const CategoryBar = () => {
  const { productData } = useContext(Product);
  const navigate = useNavigate();

  const countByCategory = (category) =>
    productData.filter((item) => item.category === category).length;

  const categories = [
    {
      icon: Laptop,
      label: "Electronics",
      value: "electronics",
      count: countByCategory("electronics"),
    },
    {
      icon: User,
      label: "Men's Clothing",
      value: "men's clothing",
      count: countByCategory("men's clothing"),
    },
    {
      icon: User,
      label: "Women's Clothing",
      value: "women's clothing",
      count: countByCategory("women's clothing"),
    },
    {
      icon: Gem,
      label: "Jewelery",
      value: "jewelery",
      count: countByCategory("jewelery"),
    },
  ];

  return (
    <div className="w-full p-6">
      <div className="flex w-full flex-wrap gap-4 justify-center">
        {categories.map(({ icon: Icon, label, value, count }) => (
          <div
            key={label}
            onClick={() => navigate(`/main/product?category=${value}`)}
            className="group flex bg-[#3D1F1A] items-center justify-between gap-3 rounded-2xl border p-3 pr-6 min-w-[250px] transition-all border border-[#C1443A]/20 duration-200
             cursor-pointer
             hover:border-[#F87060]
                 hover:shadow-[0_0_20px_2px_rgba(248,112,96,0.35)]"
          >
            <div
              className="flex items-center justify-center w-14 h-14 rounded-xl shrink-0 group-hover:bg-gradient-to-br from-[#F87060]/20 to-[#3D1F1A]
                   "
            >
              <Icon
                size={26}
                className="group-hover:text-[#F87060] text-[#FFA98F]"
                strokeWidth={1.75}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-semibold text-sm leading-tight">
                {label}
              </span>
              <span className="text-[#FFA98F]/70 text-xs mt-0.5">
                {count} items
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryBar;