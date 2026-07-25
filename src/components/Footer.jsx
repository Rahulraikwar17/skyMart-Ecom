import React from "react";
import { Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#3D1F1A] border-t border-[#C1443A]/20 py-6 px-6 shadow-[0_0_25px_rgba(248,112,96,0.18)]">
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="flex items-center gap-2 shrink-0 cursor-pointer">
          <div className="bg-[#F87060] rounded-md p-1.5 flex items-center justify-center">
            <Zap className="w-4 h-4 text-[#3D1F1A]" fill="#3D1F1A" />
          </div>
          <span className="text-white font-bold text-lg">
            Sky<span className="text-[#F87060]">Mart</span>
          </span>
        </div>
        <p className="text-[#FFA98F]/80 text-sm text-center">
          © 2026 SkyMart • Built with React + Axios + Lucide
        </p>
      </div>
    </footer>
  );
}