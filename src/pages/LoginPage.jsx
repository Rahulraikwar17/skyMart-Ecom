import React, { useContext, useState } from "react";
import { Mail, Lock, Eye, ArrowRight, EyeOff, User } from "lucide-react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { Auth } from "../context/AuthContext";
import { toast } from "react-toastify";
const LoginPage = () => {
  const navLink = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { loggedInUser, setLoggedInUser, registeredUsers } = useContext(Auth);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  let formSubmit = (data) => {
    let user = registeredUsers.find((val) => {
      return val.email === data.email && val.password === data.password;
    });
    if (!user) {
      toast.error("user not found or invailed credentials");
      return;
    }
    setLoggedInUser(user);
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    toast.info("You have successfully logged in.");
    navLink("/main");
    reset();
  };

  return (
    <div className="min-h-screen w-[40%] max-[769px]:w-[100%] max-[769px]:w-[100%] bg-[#1F0F0C] flex items-center justify-center px-5 max-[426px]:p-2">
      <div className="w-full rounded-3xl border border-[#C1443A]/30 bg-[#2A1712] shadow-2xl p-10 max-[426px]:p-2">
        <h1 className="text-5xl font-bold text-white max-[426px]:p-4">Sign in</h1>

        <p className="text-[#FFA98F]/60 mt-3 text-lg">
          Enter your credentials to continue
        </p>

        <form onSubmit={handleSubmit(formSubmit)} className="mt-10 space-y-6">
          <div className="relative">
            <Mail
              size={20}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-[#FFA98F]/50"
            />

            <input
              {...register("email", { required: "email is required" })}
              type="email"
              placeholder="Email address"
              className="w-full h-16 rounded-2xl bg-[#3D1F1A] border border-[#C1443A]/30 pl-14 pr-5  text-white placeholder:text-[#FFA98F]/50 outline-none focus:border-[#F87060] focus:ring-4 focus:ring-[#F87060]/20 transition"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="relative">
            <Lock
              size={20}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-[#FFA98F]/50"
            />

            <input
              {...register("password", {
                required: "password is required",
              })}
              type={showPassword ? "text" : "password"}
              placeholder="Password (min 6 chars)"
              className="w-full h-16 rounded-2xl bg-[#3D1F1A] border border-[#C1443A]/30 pl-14 pr-14 text-white placeholder:text-[#FFA98F]/50 outline-none focus:border-[#F87060] focus:ring-4 focus:ring-[#F87060]/20 transition"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-[#FFA98F]/50 hover:text-[#F87060] transition"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>

          <button className="w-full h-16 rounded-2xl bg-[#F87060] text-[#1F0F0C] font-bold text-2xl flex items-center justify-center gap-3 hover:scale-[1.02] transition duration-300">
            Sign in
            <ArrowRight size={24} />
          </button>
        </form>

        <p className="text-center text-[#FFA98F]/60 mt-10 text-lg">
          Don't have an account?{" "}
          <button
            onClick={() => {
              navLink("/register");
            }}
            className="text-[#F87060] font-semibold hover:underline"
          >
            Create one
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;