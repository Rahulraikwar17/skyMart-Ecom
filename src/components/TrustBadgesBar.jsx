import React from "react";
import { Zap, Shield, Tag } from "lucide-react";

const badges = [
  {
    icon: Zap,
    label: "Fast Delivery",
    desc: "Same-day on select items",
    color: "text-[#F87060]",
  },
  {
    icon: Shield,
    label: "Secure Payments",
    desc: "100% encrypted checkout",
    color: "text-[#FFA98F]",
  },
  {
    icon: Tag,
    label: "Best Prices",
    desc: "Price-match guarantee",
    color: "text-[#C1443A]",
  },
];

const TrustBadgesBar = () => {
  return (
    <div className="w-full py-6 px-4 sm:px-8 lg:px-16">
      <div className="flex flex-wrap gap-4 justify-around">
        {badges.map(({ icon: Icon, label, desc, color }) => (
          <div
            key={label}
            className="flex items-center gap-3 rounded-xl border border-[#C1443A]/30 px-5 bg-[#3D1F1A] py-4 min-w-[280px]"
          >
            <Icon size={22} className={color} strokeWidth={2} />
            <div className="flex flex-col">
              <span className="text-white font-semibold text-sm leading-tight">
                {label}
              </span>
              <span className="text-[#FFA98F]/70 text-xs mt-0.5">{desc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBadgesBar;
