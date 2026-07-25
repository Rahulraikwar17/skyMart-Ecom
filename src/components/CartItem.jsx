import React, { useEffect, useState, useContext } from "react";
import { Plus, Minus, Trash2 } from "lucide-react";
import { CartContext } from "../context/CartContext";

export default function CartItem({ id, quantity, onPriceLoad }) {
  const { increaseQty, decreaseQty, removeFromCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
        if (onPriceLoad) onPriceLoad(id, data.price);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <div className="h-20 rounded-xl bg-white/5 animate-pulse" />;
  }

  if (!product) return null;

  return (
    <div className="flex gap-3 bg-white/5 border border-[#C1443A]/30 rounded-xl p-3">
      <div className="w-16 h-16 shrink-0 rounded-lg bg-[#FFE8E1]/90 flex items-center justify-center p-1.5">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="flex-1 min-w-0">
        <h4 className="text-white text-sm font-medium line-clamp-1">
          {product.title}
        </h4>
        <p className="text-[#F87060] font-semibold mt-1">${product.price}</p>

        <div className="flex items-center gap-2 mt-2">
          <button
            onClick={() => decreaseQty(id)}
            className="w-6 h-6 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white"
          >
            <Minus size={12} />
          </button>
          <span className="text-white text-sm w-4 text-center">{quantity}</span>
          <button
            onClick={() => increaseQty(id)}
            className="w-6 h-6 flex items-center justify-center rounded-full bg-[#F87060] hover:bg-[#FFA98F] text-[#1F0F0C]"
          >
            <Plus size={12} />
          </button>

          <button
            onClick={() => removeFromCart(id)}
            className="ml-auto w-6 h-6 flex items-center justify-center rounded-full bg-red-500/10 hover:bg-red-500/20 text-red-400"
          >
            <Trash2 size={13} />
          </button>
        </div>
      </div>
    </div>
  );
}