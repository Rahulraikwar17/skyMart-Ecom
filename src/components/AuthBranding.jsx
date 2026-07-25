import { Zap, Heart, Star, Box, Users } from "lucide-react";

import headphone from "../assets/headphone.jpg";
import watch from "../assets/watch.webp";
import shoes from "../assets/shoes.webp";

const AuthBranding = () => {
  return (
    <section className="hidden lg:block relative lg:w-[60%] overflow-hidden bg-[#1F0F0C] text-white min-h-screen border-r border-[#F87060]/30 p-2.5">
      <div className="absolute left-[-250px] top-32 h-[550px] w-[550px] rounded-full bg-[#F87060]/20 blur-[170px]" />

      <div className="absolute right-[-180px] bottom-20 h-[500px] w-[500px] rounded-full bg-[#F87060]/10 blur-[160px]" />

      <div className="absolute right-24 top-12 h-[700px] w-[700px] rounded-full border border-[#F87060]/20" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center min-h-screen px-10">
        <div>
          <div className="inline-flex items-center gap-3 rounded-full border border-[#F87060]/30 bg-[#2A1712] px-5 py-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F87060]">
              <Zap className="text-[#1F0F0C]" size={16} fill="#1F0F0C" />
            </div>

            <p className="text-sm text-[#FFA98F]/80">
              Trusted by{" "}
              <span className="text-white font-semibold">50,000+</span> users
            </p>
          </div>

          <h1 className="mt-12 text-5xl xl:text-7xl font-black leading-none">
            Shop the future.
            <br />
            <span className="text-[#F87060]">Today.</span>
          </h1>

          <p className="mt-8 text-[#FFA98F]/70 text-base xl:text-xl leading-8 xl:leading-9 max-w-xl">
            Thousands of premium products, lightning-fast delivery, and prices
            that make your wallet happy.
          </p>

          <div className="mt-12 xl:mt-20 flex gap-4 xl:gap-6">
            <div className="w-40 xl:w-64 rounded-md border border-[#C1443A]/30 bg-[#2A1712]/60 p-5 xl:p-7">
              <Box className="text-[#F87060]" />

              <h2 className="mt-6 xl:mt-8 text-3xl xl:text-5xl font-bold">20K+</h2>

              <p className="mt-3 text-[#FFA98F]/70 text-sm xl:text-base">Products</p>
            </div>

            <div className="w-32 xl:w-44 rounded-md border border-[#C1443A]/30 bg-[#2A1712]/60 p-5 xl:p-7">
              <Users className="text-[#F87060]" />

              <h2 className="mt-6 xl:mt-8 text-3xl xl:text-5xl font-bold">50K+</h2>

              <p className="mt-3 text-[#FFA98F]/70 text-sm xl:text-base">Happy Users</p>
            </div>

            <div className="w-32 xl:w-44 rounded-md border border-[#C1443A]/30 bg-[#2A1712]/60 p-5 xl:p-7">
              <Star className="text-[#F87060] fill-[#F87060]" />

              <h2 className="mt-6 xl:mt-8 text-3xl xl:text-5xl font-bold">4.9</h2>

              <p className="mt-3 text-[#FFA98F]/70 text-sm xl:text-base">Rating</p>
            </div>
          </div>
        </div>

        <div className="relative h-[90%]">
          <div className="absolute right-16 top-8 rotate-[12deg] rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-6">
            <Heart size={18} className="absolute right-5 top-5 text-white" />

            <img src={headphone} className="w-40" />

            <p className="mt-5 text-lg">Wireless Headphones</p>

            <h3 className="text-[#F87060] text-2xl font-bold">$59.99</h3>
          </div>

          <div className="absolute left-10 top-72 -rotate-[12deg] rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl p-5">
            <Heart size={18} className="absolute right-5 top-5 text-white" />

            <img src={watch} className="w-36" />

            <p className="mt-3">Analog Watch</p>

            <h3 className="text-[#F87060] font-bold text-xl">$129.99</h3>
          </div>

          <div className="absolute right-0 bottom-16 rotate-[-8deg] rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-6">
            <Heart size={18} className="absolute right-5 top-5 text-white" />

            <img src={shoes} className="w-52" />

            <p className="mt-4">Puma Sneakers</p>

            <h3 className="text-[#F87060] text-2xl font-bold">$79.99</h3>
          </div>

          <div className="absolute left-36 top-6 h-4 w-4 rounded-full bg-[#F87060] shadow-[0_0_70px_25px_rgba(248,112,96,0.5)]" />

          <div className="absolute left-56 -bottom-2 h-4 w-4 rounded-full bg-[#F87060] shadow-[0_0_70px_25px_rgba(248,112,96,0.5)]" />
        </div>
      </div>
    </section>
  );
};

export default AuthBranding;
