import React, { useContext } from "react";
import { Package, TrendingUp, Star, Tag } from "lucide-react";
import { CartContext } from "../context/CartContext";
import { Product } from "../context/ProductContext";

export default function StatsBar() {
  const { cart, totalItems } = useContext(CartContext);
  const { productData, loading } = useContext(Product);

  const cartProducts = cart
    .map((item) => {
      const product = productData.find((p) => p.id === item.id);
      if (!product) return null;
      return { ...product, quantity: item.quantity };
    })
    .filter(Boolean);

  const cartValue = cartProducts.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const uniqueCategories = new Set(cartProducts.map((item) => item.category));

  const topProductsCount = cartProducts.filter(
    (item) => item.rating?.rate >= 4,
  ).length;

  const stats = [
    {
      icon: Package,
      value: totalItems,
      label: "Cart Items",
      sub: "In your bag",
      color: "text-[#F87060]",
      bg: "bg-[#F87060]/10",
      glow: "hover:shadow-[0_0_25px_-5px_rgba(248,112,96,0.35)] hover:border-[#F87060]/40",
    },
    {
      icon: TrendingUp,
      value: `$${cartValue.toFixed(2)}`,
      label: "Cart Value",
      sub: "Ready to checkout",
      color: "text-[#FFA98F]",
      bg: "bg-[#FFA98F]/10",
      glow: "hover:shadow-[0_0_25px_-5px_rgba(255,169,143,0.35)] hover:border-[#FFA98F]/40",
    },
    {
      icon: Star,
      value: topProductsCount,
      label: "Top Products",
      sub: "Highly rated",
      color: "text-[#C1443A]",
      bg: "bg-[#C1443A]/10",
      glow: "hover:shadow-[0_0_25px_-5px_rgba(193,68,58,0.35)] hover:border-[#C1443A]/40",
    },
    {
      icon: Tag,
      value: uniqueCategories.size,
      label: "Categories",
      sub: "To explore",
      color: "text-[#3D1F1A]",
      bg: "bg-[#3D1F1A]/10",
      glow: "hover:shadow-[0_0_25px_-5px_rgba(61,31,26,0.35)] hover:border-[#3D1F1A]/40",
    },
  ];

  return (
    <div className="w-full max-[769px]:p-0">
      <div className="w-full px-7 max-[769px]:p-2 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map(({ icon: Icon, value, label, sub, color, bg, glow }) => (
          <div
            key={label}
            className={`group rounded-2xl bg-[#3D1F1A] border border-[#C1443A]/30 p-5 flex items-center gap-4
              transition-all duration-300 ease-out
              hover:-translate-y-0.5 hover:border-[#C1443A]/50
              ${glow}
            `}
          >
            <div
              className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center shrink-0
                transition-transform duration-300 group-hover:scale-105`}
            >
              <Icon size={22} className={color} strokeWidth={2.2} />
            </div>

            <div className="min-w-0">
              <p className="text-white text-2xl font-bold leading-tight tracking-tight">
                {loading ? "—" : value}
              </p>
              <p className="text-[#FFA98F] text-sm font-medium mt-0.5 truncate">
                {label}
              </p>
              <p className="text-[#FFA98F]/50 text-xs mt-0.5 truncate">{sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}