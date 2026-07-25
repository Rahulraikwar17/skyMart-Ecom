import React from "react";
import {
  Zap,
  Package,
  Star,
  ShieldCheck,
  Sparkles,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router";

const stats = [
  { icon: Package, value: "20+", label: "Curated Products" },
  { icon: Star, value: "4.9", label: "Avg. Rating" },
  { icon: ShieldCheck, value: "100%", label: "Verified Listings" },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Trust",
    desc: "Every product is verified for quality and authenticity before listing.",
  },
  {
    icon: Sparkles,
    title: "Simplicity",
    desc: "A clean, distraction-free shopping experience — no clutter, no noise.",
  },
  {
    icon: HeartHandshake,
    title: "Community",
    desc: "Built around real customer feedback, not just business metrics.",
  },
  {
    icon: Star,
    title: "Quality",
    desc: "We curate the best — no filler, no junk, just great products.",
  },
];

export default function AboutPage() {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-[#1F0F0C]">
      <style>{`
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        .float-logo {
          animation: floatY 3s ease-in-out infinite;
        }
      `}</style>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="flex flex-col items-center text-center">
          <div className="float-logo w-16 h-16 rounded-2xl bg-[#F87060] flex items-center justify-center mb-6">
            <Zap size={28} className="text-[#1F0F0C] fill-[#1F0F0C]" />
          </div>
          <h1 className="text-white text-3xl sm:text-5xl font-extrabold">
            About <span className="text-[#F87060]">SkyMart</span>
          </h1>
          <p className="text-[#FFA98F]/70 text-base sm:text-lg mt-4 max-w-2xl">
            SkyMart is a next-generation e-commerce platform built to make
            online shopping fast, fair, and enjoyable — for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-14">
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="rounded-2xl border border-[#C1443A]/30 py-8 px-4 flex flex-col items-center text-center"
            >
              <Icon size={22} className="text-[#F87060] mb-3" />
              <span className="text-white text-2xl font-bold">{value}</span>
              <span className="text-[#FFA98F]/60 text-sm mt-1">{label}</span>
            </div>
          ))}
        </div>

        <div className="rounded-3xl border border-[#C1443A]/30 p-10 mt-14">
          <h2 className="text-white text-2xl font-bold mb-5">Our Story</h2>
          <div className="flex flex-col gap-4 text-[#FFA98F]/70 text-base leading-relaxed">
            <p>
              SkyMart started as a personal project — built from scratch to go
              beyond tutorials and create a full, working e-commerce experience
              end to end.
            </p>
            <p>
              It brings together a real product catalog, a clean interface, and
              the kind of small details that make online shopping feel fast and
              enjoyable, not clunky.
            </p>
            <p>
              This is just the beginning — new features and refinements are on
              the way as the platform keeps growing.
            </p>
          </div>
        </div>

        <h2 className="text-white text-3xl font-bold text-center mt-16 mb-8">
          What We Stand For
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {values.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-[#C1443A]/30 p-6 flex gap-4"
            >
              <div className="w-11 h-11 rounded-xl bg-[#F87060]/10 flex items-center justify-center shrink-0">
                <Icon size={20} className="text-[#F87060]" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-base">{title}</h3>
                <p className="text-[#FFA98F]/70 text-sm mt-1">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-3xl border border-[#C1443A]/30 p-10 mt-16 flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="w-16 h-16 rounded-2xl bg-[#F87060] flex items-center justify-center font-bold text-2xl text-[#1F0F0C] shrink-0">
            R
          </div>
          <div className="text-center sm:text-left">
            <h2 className="text-white text-xl font-bold">Rahul Raikwar</h2>
            <p className="text-[#F87060] text-sm mt-1">
              Founder &amp; Developer
            </p>
            <p className="text-[#FFA98F]/70 text-sm mt-3 leading-relaxed">
              "I built SkyMart to prove I could ship a complete product, not
              just a tutorial project. Every screen here is designed and coded
              with real users in mind — and there's a lot more coming."
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-[#F87060]/40 p-6 sm:p-14 mt-16 flex flex-col items-center text-center">
          <h2 className="text-white text-2xl sm:text-3xl font-bold">Ready to shop?</h2>
          <p className="text-[#FFA98F]/70 text-base mt-3">
            Explore thousands of products at unbeatable prices.
          </p>
          <button
            onClick={() => {
              navigate("/main/product");
            }}
            className="flex items-center gap-2 bg-[#F87060] hover:bg-[#FFA98F] text-[#1F0F0C] font-semibold rounded-xl px-6 py-3 mt-6 transition-colors"
          >
            Browse Products
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
