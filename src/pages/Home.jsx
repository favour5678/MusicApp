import React from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

const Home = () => {
  return (
    <main className="bg-gradient-to-br from from-[#3B1D26] to-[#111111] w-full h-screen text-white">
      <div>
        <LeftSection />
        <RightSection />
      </div>
    </main>
  );
};

export default Home;
