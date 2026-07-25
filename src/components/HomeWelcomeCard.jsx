import { ArrowRight, Truck, RefreshCw, Percent } from "lucide-react";
import bgVideo from "../assets/headphone2.mp4";
import { useContext } from "react";
import { Auth } from "../context/AuthContext";
import { useNavigate } from "react-router";

const HomeWelcomeCard = () => {
  const { loggedInUser } = useContext(Auth);
  const user = loggedInUser.fullName.split(" ")[0];
  const navigate = useNavigate();
  const hour = new Date().getHours();

  const greeting =
    hour < 5 || hour >= 21
      ? "Good Night"
      : hour < 12
        ? "Good Morning"
        : hour < 17
          ? "Good Afternoon"
          : "Good Evening";

  return (
    <section className="w-full group px-3 max-[769px]:p-1.5 py-5">
      <div className="relative overflow-hidden rounded-[30px] border border-[#C1443A]/30 bg-[#3D1F1A]">

        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover [filter:grayscale(1)_brightness(0.55)_contrast(1.1)]"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-r from-[#3D1F1A] via-[#3D1F1A]/70 to-[#3D1F1A]/30 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[#F87060]/10" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-10 p-5 sm:p-8">
          <div>
            <p className="mb-4 text-xs sm:text-sm uppercase tracking-[4px] text-[#F87060]">
              {greeting} 👋
            </p>

            <h1 className="text-3xl sm:text-5xl font-bold text-white">Welcome back,</h1>

            <h1 className="mb-5 text-3xl sm:text-5xl font-bold text-[#F87060]">{user}!</h1>

            <p className="mb-8 max-w-md text-sm sm:text-base text-[#FFA98F]/80">
              Discover today's picks — hand-curated products across electronics,
              fashion and more.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4">
              <button
                onClick={() => navigate("/main/product")}
                className="flex items-center gap-2 rounded-full bg-[#F87060] px-5 sm:px-7 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-[#3D1F1A] transition hover:scale-105"
              >
                Shop Now
                <ArrowRight size={18} />
              </button>

              <button
                onClick={() => navigate("/main/product")}
                className="rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-5 sm:px-7 py-2.5 sm:py-3 text-sm sm:text-base text-white transition hover:bg-white/20"
              >
                View Products
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col max-[769px]:hidden items-stretch sm:items-start lg:items-end gap-4 flex-wrap">
            <div className="w-full sm:w-[240px] rounded-2xl border border-[#F87060]/30 bg-[#F87060]/10 backdrop-blur-xl p-4 shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition hover:-translate-y-1">
              <div className="text-2xl font-bold text-[#F87060]">FLAT</div>

              <h3 className="text-lg font-semibold text-white">40% OFF</h3>

              <p className="mt-1 text-sm text-[#FFA98F]/80">Premium Electronics</p>
            </div>

            <div className="w-full sm:w-[240px] rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xl p-4 shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition hover:-translate-y-1">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#3D1F1A]/60 text-[#F87060]">
                <Truck size={20} />
              </div>

              <h3 className="text-lg font-semibold text-white">
                Free Delivery
              </h3>

              <p className="mt-1 text-sm text-[#FFA98F]/80">Orders above ₹999</p>
            </div>

            <div className="w-full sm:w-[240px] rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xl p-4 shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition hover:-translate-y-1">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#3D1F1A]/60 text-[#F87060]">
                <RefreshCw size={20} />
              </div>

              <h3 className="text-lg font-semibold text-white">
                7 Days Return
              </h3>

              <p className="mt-1 text-sm text-[#FFA98F]/80">Easy Replacement</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeWelcomeCard;
