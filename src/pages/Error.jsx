import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="bg-gradient-to-br from from-[#3B1D26] to-[#111111] w-full flex flex-col justify-center text-center h-screen text-gray-200 font-body">
      <h2 className="text-5xl">ERROR 404 🤕</h2>
      <p>Page Not Found</p>
      <Link to={"/"} className="underline mt-5">
        Go back to homepage
      </Link>
    </div>
  );
};

export default Error;
