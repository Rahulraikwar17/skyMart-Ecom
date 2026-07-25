import React, { useContext, useState } from "react";
import { User, Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";
import { set, useForm } from "react-hook-form";
import { Auth } from "../context/AuthContext";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { registeredUsers, setRegisteredUsers, setLoggedInUser } =
    useContext(Auth);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");
  let formSubmit = (data) => {
    let alreadyExist = registeredUsers.find((val) => {
      return val.email === data.email;
    });
    if (alreadyExist) {
      toast.error("This email is already registered.");
      reset();
      return;
    }

    toast.success("User Registerred succesfully");
    data.id = Date.now();
    let arr = [...registeredUsers, data];

    setRegisteredUsers(arr);
    localStorage.setItem("registeredUsers", JSON.stringify(arr));
    setLoggedInUser(data);
    localStorage.setItem("loggedInUser", JSON.stringify(data));
    navigate("/main");
    reset();
  };

  return (
    <div className="min-h-screen w-[40%] bg-[#1F0F0C] flex items-center justify-center px-5 py-10 overflow-hidden relative">
      <div className="relative w-full h-full max-w-xl rounded-3xl border border-[#C1443A]/30 bg-[#2A1712]/90 backdrop-blur-xl p-5 shadow-[0_0_60px_rgba(0,0,0,.45)]">
        <h1 className="text-5xl font-bold text-white">Create account</h1>

        <p className="text-[#FFA98F]/60 mt-3 text-lg">
          Join SkyMart and start shopping
        </p>

        <form onSubmit={handleSubmit(formSubmit)} className="mt-10 space-y-4 ">
          <div className="relative">
            <User
              size={20}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-[#FFA98F]/50"
            />

            <input
              {...register("fullName", { required: "full-name is required" })}
              type="text"
              placeholder="Full name"
              className="w-full h-16 rounded-2xl bg-[#3D1F1A] border border-[#C1443A]/30 pl-14 pr-5 text-white placeholder:text-[#FFA98F]/50 outline-none focus:border-[#F87060] focus:ring-4 focus:ring-[#F87060]/20 transition"
            />
            {errors.fullName && (
              <p className="text-red-500 ">{errors.fullName.message}</p>
            )}
          </div>

          <div className="relative">
            <Mail
              size={20}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-[#FFA98F]/50"
            />

            <input
              {...register("email", { required: "email is required" })}
              type="email"
              placeholder="Email address"
              className="w-full h-16 rounded-2xl bg-[#3D1F1A] border border-[#C1443A]/30 pl-14 pr-5 text-white placeholder:text-[#FFA98F]/50 outline-none focus:border-[#F87060] focus:ring-4 focus:ring-[#F87060]/20 transition"
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
                minLength: {
                  value: 6,
                  message: "minimum 6 letters",
                },
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

          <div className="relative">
            <Lock
              size={20}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-[#FFA98F]/50"
            />

            <input
              {...register("confirmPassword", {
                required: "Confirm password is required",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm password"
              className="w-full h-16 rounded-2xl bg-[#3D1F1A] border border-[#C1443A]/30 pl-14 pr-14 text-white placeholder:text-[#FFA98F]/50 outline-none focus:border-[#F87060] focus:ring-4 focus:ring-[#F87060]/20 transition"
            />

            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-[#FFA98F]/50 hover:text-[#F87060] transition"
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
            {errors.confirmPassword && (
              <p className=" text-red-500">{errors.confirmPassword.message}</p>
            )}
          </div>

          <button className="w-full h-16 rounded-2xl bg-[#F87060] text-[#1F0F0C] text-2xl font-bold flex items-center justify-center gap-3 hover:scale-[1.02] transition-all duration-300">
            Create Account
            <ArrowRight size={24} />
          </button>
        </form>

        <p className="text-center text-[#FFA98F]/60 mt-10 text-lg">
          Already have an account?{" "}
          <button
            onClick={() => {
              navigate("/");
            }}
            className="text-[#F87060] font-semibold hover:underline"
          >
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;