import React from "react";
import LeftSection from "../components/LeftSection";
import RightSection from "../components/RightSection";

const Home = () => {
  return (
    <main className="bg-gradient-to-br from from-[#3B1D26] to-[#111111] w-full h-screen text-white font-body">
      <div className="container max-w-full flex">
        <LeftSection />
        <RightSection />
      </div>
    </main>
  );
};

export default Home;
