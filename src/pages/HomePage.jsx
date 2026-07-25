import React from "react";
import HomeWelcomeCard from "../components/HomeWelcomeCard";
import CategoryBar from "../components/CategoryBar";
import TrustBadgesBar from "../components/TrustBadgesBar";
import NewArrivals from "../components/NewArrivals";
import TopRated from "../components/TopRated";
import StatusBar from "../components/StatusBar";

const Home = () => {
  return (
    <div className="w-full h-full">
      <HomeWelcomeCard />
      <StatusBar />
      <CategoryBar />
      <div className="flex justify-center gap-4 px-3 max-[768px]:flex-wrap w-full">
        <TopRated />
        <NewArrivals />
      </div>
      <TrustBadgesBar />
    </div>
  );
};

export default Home;
