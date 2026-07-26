import React, { useContext, useState } from "react";
import {
  Zap,
  Search,
  Heart,
  Moon,
  ShoppingCart,
  ChevronRight,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router";
import { Auth } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const { loggedInUser, logOut } = useContext(Auth);
  const userName =
    loggedInUser.fullName.length > 12
      ? loggedInUser.fullName.slice(0, 12) + "..."
      : loggedInUser.fullName;

  const handleLogout = () => {
    if (!confirm("Are you sure you want to logout?")) return;
    logOut();
    navigate("/");
  };
  const { openCart, totalItems } = useContext(CartContext);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-sm font-medium text-[#F87060] relative text-center border-b"
      : "text-sm font-medium text-[#FFA98F]/70 hover:text-white transition-colors text-center";

  return (
    <nav className="relative max-w-full bg-[#3D1F1A] px-4 sm:px-6 py-4 flex items-center justify-between gap-4 lg:gap-8 border-b border-[#C1443A]/30 shadow-[0_0_25px_rgba(248,112,96,0.18)]">
      <div
        onClick={() => navigate("/main")}
        className="flex items-center gap-2 shrink-0 cursor-pointer"
      >
        <div className="bg-[#F87060] rounded-md p-1.5 flex items-center justify-center">
          <Zap className="w-4 h-4 text-[#3D1F1A]" fill="#3D1F1A" />
        </div>
        <span className="text-white font-bold text-lg ">
          Sky<span className="text-[#F87060]">Mart</span>
        </span>
      </div>

      <ul className="hidden lg:flex items-center gap-7 shrink-0 absolute left-1/2 -translate-x-1/2">
        <NavLink to={"/main"} end className={navLinkClass}>
          Home{" "}
        </NavLink>
        <NavLink to={"/main/product"} className={navLinkClass}>
          Shop
        </NavLink>
        <NavLink to={"/main/about"} className={navLinkClass}>
          About
        </NavLink>
      </ul>

      <div className="flex items-center gap-3 sm:gap-5 shrink-0">
        <div className="relative">
          <ShoppingCart
            onClick={openCart}
            className="w-5 h-5 text-[#FFA98F]/70 cursor-pointer hover:text-[#F87060] transition-colors"
          />

          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#F87060] text-center text-[#3D1F1A] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </div>

        <div className="hidden sm:block w-px h-8 bg-[#C1443A]/40" />

        <div className="hidden sm:flex items-center gap-2.5 rounded-2xl border border-[#C1443A]/30 px-2 py-1">
          <div className="w-9 h-9 rounded-full text-white flex justify-center text-lg font-bold items-center bg-[#C1443A] shrink-0">
            {loggedInUser.fullName[0].toUpperCase()}
          </div>
          <div className="hidden md:block leading-tight">
            <p className="text-white font-light font-medium ">{userName}</p>
          </div>

          <LogOut
            onClick={handleLogout}
            className="w-4 h-4 text-[#FFA98F]/60 hover:text-[#F87060] cursor-pointer transition-colors"
          />
        </div>

        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="lg:hidden w-9 h-9 flex items-center justify-center rounded-full border border-[#C1443A]/30 text-[#FFA98F] hover:text-[#F87060] transition-colors shrink-0"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full lg:hidden bg-[#3D1F1A] shadow-[0_10px_25px_rgba(0,0,0,0.35)] z-50">
          <ul className="flex flex-col p-4 gap-4">
            <NavLink
              to={"/main"}
              end
              onClick={() => setMenuOpen(false)}
              className={navLinkClass}
            >
              Home
            </NavLink>
            <NavLink
              to={"/main/product"}
              onClick={() => setMenuOpen(false)}
              className={navLinkClass}
            >
              Shop
            </NavLink>
            <NavLink
              to={"/main/about"}
              onClick={() => setMenuOpen(false)}
              className={navLinkClass}
            >
              About
            </NavLink>

            <div className="flex items-center gap-2.5 rounded-2xl border border-[#C1443A]/30 px-2 py-2 mt-2 sm:hidden">
              <div className="w-9 h-9 rounded-full text-white flex justify-center text-lg font-bold items-center bg-[#C1443A] shrink-0">
                {loggedInUser.fullName[0].toUpperCase()}
              </div>
              <p className="text-white font-light font-medium">{userName}</p>
              <LogOut
                onClick={handleLogout}
                className="w-4 h-4 ml-auto text-[#FFA98F]/60 hover:text-[#F87060] cursor-pointer transition-colors"
              />
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
