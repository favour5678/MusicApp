import React from "react";
import LeftSection from "../components/LeftSection";
import RightSection from "../components/RightSection";

const Playlist = () => {
  return (
    <section className="bg-gradient-to-br from from-[#3B1D26] to-[#111111] w-full h-screen text-gray-200 font-body">
      <div className="container max-w-full flex">
        <LeftSection />
        <div className="w-[78%] h-screen overflow-y-auto">
          
        </div>
      </div>
    </section>
  );
};

export default Playlist;
