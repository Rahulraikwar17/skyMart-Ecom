import React from "react";
import { Star, ShoppingCart, Check } from "lucide-react";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
export default function ProductCard({ product }) {
  const { title, price, description, category, rating, image, id } = product;
  const navigate = useNavigate();
  const { addToCart, cart } = useContext(CartContext);
  const isInCart = cart.some((item) => item.id === id);
  return (
    <div
      onClick={() => navigate(`/main/product/${product.id}`)}
      className="w-full h-full flex flex-col rounded-2xl p-3 sm:p-4 pt-4 sm:pt-5
      bg-[#3D1F1A] cursor-pointer
      border border-[#C1443A]/30
      transition-all duration-300
      hover:border-[#F87060]/70
      hover:shadow-[0_0_25px_2px_rgba(248,112,96,0.35)]
      hover:-translate-y-1"
    >
      <div className="w-full aspect-square shrink-0 rounded-xl bg-[#FFE8E1]/90 flex items-center justify-center p-4 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-contain" />
      </div>

      <div className="flex flex-col flex-1 mt-3">
        <div className="h-6 flex items-center">
          <span className="inline-flex items-center rounded-full bg-[#F87060]/15 border border-[#F87060]/30 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-[#F87060] whitespace-nowrap">
            {category}
          </span>
        </div>

        <h3 className="mt-2 text-white font-semibold text-base leading-tight line-clamp-2 min-h-[2.5rem]">
          {title}
        </h3>

        <p className="text-[#FFA98F]/70 text-sm mt-1 line-clamp-2 min-h-[2.5rem]">
          {description}
        </p>

        <div className="flex items-center gap-1 mt-2 shrink-0">
          <Star size={15} className="text-yellow-400 fill-yellow-400" />
          <span className="text-white text-sm font-medium">{rating?.rate}</span>
          <span className="text-[#FFA98F]/60 text-sm">({rating?.count})</span>
        </div>

        <div className="flex-1" />

        <div className="flex items-center justify-between mt-3 shrink-0">
          <span className="text-white text-xl font-bold">${price}</span>

          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product.id);
            }}
            className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-300
        ${isInCart ? "bg-[#F87060] hover:bg-[#F87060]" : "bg-[#F87060] hover:bg-[#FFA98F]"}`}
          >
            {isInCart ? (
              <Check size={18} className="text-white" />
            ) : (
              <ShoppingCart size={18} className="text-[#3D1F1A]" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
