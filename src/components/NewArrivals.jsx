import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { Zap, ArrowRight, Check, ShoppingCart } from "lucide-react";
import { Product } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";

export default function NewArrivals() {
  const { productData } = useContext(Product);
  const navigate = useNavigate();

  const topProducts = [...productData].slice(0, 5);
  const { addToCart, cart } = useContext(CartContext);

  return (
    <div className="bg-gradient-to-b from-[#3D1F1A] to-[#C1443A]/40 rounded-2xl p-4 sm:p-6 w-full lg:w-1/2 shadow-xl">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Zap size={20} className="text-[#F87060] fill-[#F87060]" />
          <h2 className="text-white font-bold text-lg">New Arrivals</h2>
        </div>
        <button
          onClick={() => {
            navigate("/main/product");
          }}
          className="flex items-center gap-1 text-[#F87060] text-sm font-medium hover:underline"
        >
          See all <ArrowRight size={14} />
        </button>
      </div>

      <div className="flex flex-col gap-3">
        {topProducts.map((val) => {
          const isInCart = cart.some((item) => item.id === val.id);

          return (
            <div
              key={val.id}
              onClick={() => navigate(`/main/product/${val.id}`)}
              className="flex items-center justify-between rounded-2xl border border-[#C1443A]/30 p-3
              cursor-pointer
              transition-all duration-300 hover:border-[#F87060]/50
              hover:shadow-[0_0_15px_1px_rgba(248,112,96,0.25)]"
            >
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-xl bg-[#FFE8E1]/90 flex items-center justify-center p-1.5 shrink-0 overflow-hidden">
                  <img
                    src={val.image}
                    alt={val.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-[#fff] font-semibold text-base">
                  ${val.price}
                </span>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(val.id);
                }}
                className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-300 shrink-0
                ${isInCart ? "bg-[#3D1F1A] hover:bg-[#FFE8E1]/90"  : "bg-[#F87060] hover:bg-[#FFA98F]"}`}
              >
                {isInCart ? (
                  <Check size={18} className="text-white" />
                ) : (
                  <ShoppingCart size={18} className="text-[#3D1F1A]" />
                )}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
