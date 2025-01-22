import React, { useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-transparent text-[#6A0B37] absolute z-20 w-[100%]">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-2"
        >
          {/* <img
            src="/logo.jpg" 
            alt="Logo"
            className="h-10 w-10"
          /> */}
          <div>
            <h1 className="text-white  text-xl font-bold">Heart Hand</h1>
            <p className="text-sm text-white ">Share at Door Step</p>
          </div>
        </motion.div>

        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="hidden md:flex space-x-6 font-bold "
        >
          <a href="rewards" className=" hover:text-[#B32346]">
            Rewards
          </a>
          <a href="#about-us" className="hover:text-[#B32346]">
            About Us
          </a>
          <a href="contact-us" className="hover:text-[#B32346]">
            Contact Us
          </a>
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden md:flex items-center space-x-4"
        >
          <button className="bg-[#6A0B37] text-white  px-4 py-2 rounded-full hover:bg-orange-600 transition">
            Book Now
          </button>
          <div className="h-10 w-10 rounded-full border-2 border-[#6A0B37] flex items-center justify-center">
            <img
              src="/profilepic1.webp"
              alt="Profile"
              className="h-8 w-8 rounded-full"
            />
          </div>
        </motion.div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="h-6 w-6 flex flex-col justify-between items-center">
            <span className="block h-1 w-full bg-[#6A0B37] "></span>
            <span className="block h-1 w-full bg-[#6A0B37] "></span>
            <span className="block h-1 w-full bg-[#6A0B37] "></span>
          </div>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black text-white"
        >
          <nav className="flex flex-col items-center space-y-4 py-4">
            <a href="#rewards" className="hover:text-[#6A0B37]">
              Rewards
            </a>
            <a href="#about-us" className="hover:text-[#6A0B37]">
              About Us
            </a>
            <a href="#contact-us" className="hover:text-[#6A0B37]">
              Contact Us
            </a>
            <button className="bg-orange-500 px-4 py-2 rounded-full hover:bg-orange-600 transition">
              Book Now
            </button>
            <div className="h-10 w-10 rounded-full border-2 border-orange-500 flex items-center justify-center">
              <img src="/profilepic.jpg" className="h-8 w-8 rounded-full" />
            </div>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
