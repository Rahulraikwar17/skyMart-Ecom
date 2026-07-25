import React, { useContext, useState, useCallback } from "react";
import { X, ShoppingBag } from "lucide-react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import { toast } from "react-toastify";
import { Auth } from "../context/AuthContext";

export default function CartSideBar() {
  const { cart, isCartOpen, closeCart, setCart } = useContext(CartContext);
  const { loggedInUser } = useContext(Auth);
  const [prices, setPrices] = useState({});

  const handlePriceLoad = useCallback((id, price) => {
    setPrices((prev) => ({ ...prev, [id]: price }));
  }, []);

  const total = cart.reduce((sum, item) => {
    const price = prices[item.id] || 0;
    return sum + price * item.quantity;
  }, 0);
  const handleCheckout = () => {
    toast.success("🎉 Your order has been placed successfully! (Demo)", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
    closeCart();
    setCart([]);
    localStorage.removeItem(`cart_${loggedInUser.id}`);
  };
  return (
    <>
      <div
        onClick={closeCart}
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300
        ${isCartOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />

      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 z-50 bg-[#1F0F0C] border-l border-[#C1443A]/30
        flex flex-col transition-transform duration-300 ease-in-out
        ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between p-4 border-b border-[#C1443A]/30">
          <div className="flex items-center gap-2">
            <ShoppingBag size={20} className="text-[#F87060]" />
            <h2 className="text-white font-semibold text-lg">Your Cart</h2>
          </div>
          <button
            onClick={closeCart}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        <div
          className="flex-1 overflow-y-auto p-4 flex flex-col gap-3
          [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:none]"
        >
          {cart.length === 0 ? (
            <p className="text-[#FFA98F]/50 text-center mt-10">Cart is empty</p>
          ) : (
            cart.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                quantity={item.quantity}
                onPriceLoad={handlePriceLoad}
              />
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="border-t border-[#C1443A]/30 p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[#FFA98F]/70 text-sm">Subtotal</span>
              <span className="text-white text-xl font-bold">
                ${total.toFixed(2)}
              </span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full h-12 rounded-xl bg-[#F87060] hover:bg-[#FFA98F] text-[#1F0F0C] font-semibold transition-colors"
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}