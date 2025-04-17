"use client";
import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="w-[1200px] py-3 px-5 bg-gray-900 flex items-center justify-between space-x-10 mx-auto">
        <h1 className="text-xl font-semibold text-white">KEEK</h1>
        <h2>
          <ul className="flex space-x-10 text-white gap-[20px] py-1 px-2">
            <button>Brands</button>
            <button>Creators</button>
            <button>About Us</button>
            <button>Contact Us</button>
          </ul>
        </h2>
        <div className="flex space-x-5 py-2 px-2">
          <button>

          <h1 style={{ color: "#C3D4E9" }} className="py-2">
            Sign Up
          </h1>
          </button>
          <button>

          <h1 className="bg-blue-600 py-2 px-4 text-white rounded-full">
            Get Demo
          </h1>
          </button>
        </div>
      </nav>
      {/* Full-width HR */}
     
    </>
  );
};

export default Navbar;
