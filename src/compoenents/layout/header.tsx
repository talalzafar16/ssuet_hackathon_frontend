import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const Header = () => {

  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For the mobile menu
  const [isProfileOpen, setIsProfileOpen] = useState(false); // For the profile dropdown

  return (
    <header className="bg-transparent text-[#6A0B37] absolute z-20 w-[100%]">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-2"
        >
          <div>
            <h1 className="text-white text-xl font-bold">Heart Hand</h1>
            <p className="text-sm text-white">Share at Door Step</p>
          </div>
        </motion.div>

        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="hidden md:flex space-x-6 font-bold"
        >
          <a href="rewards" className="hover:text-[#B32346]">
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
          className="hidden md:flex items-center space-x-4 relative"
        >
          <button className="bg-[#6A0B37] text-white px-4 py-2 rounded-full hover:bg-[#B32346] transition">
            Book Now
          </button>
          <div
            className="h-10 w-10 rounded-full border-2 border-[#6A0B37] flex items-center justify-center cursor-pointer relative"
            onClick={() => setIsProfileOpen(!isProfileOpen)}
          >
            <img
              src="/profilepic1.webp"
              alt="Profile"
              className="h-8 w-8 rounded-full"
            />
          </div>

          {isProfileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute  top-12 right-0 w-64 bg-white shadow-lg rounded-lg z-10"
            >
              <div className="p-4 text-center">
                <img
                  src="/profilepic1.webp"
                  alt="Profile"
                  className="h-12 w-12 rounded-full mx-auto"
                />
                <h3 className="mt-2 text-lg font-medium">Name</h3>
                <p className="text-sm text-gray-500">email</p>
                <p className="text-sm text-gray-500">number</p>
              </div>
              <hr />
              <div className="p-2">
                <button
                  onClick={() => navigate("/Requests")}
                  className="w-full flex items-center gap-2 text-left py-2 px-4 hover:bg-gray-100"
                >
                  <img src="/edit-profile-btn.svg" />
                  My Requests
                </button>
              </div>
              <hr />
              <div className="p-2">
                <button className="w-full flex items-center gap-2 text-left py-2 px-4 hover:bg-gray-100">
                  <img src="/profile-logout.svg" />
                  Logout{" "}
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>

        <button
          className="md:hidden flex items-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="h-6 w-6 flex flex-col justify-between items-center">
            <span className="block h-1 w-full bg-[#6A0B37]"></span>
            <span className="block h-1 w-full bg-[#6A0B37]"></span>
            <span className="block h-1 w-full bg-[#6A0B37]"></span>
          </div>
        </button>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black text-white"
        >
          <nav className="flex flex-col items-center space-y-4 py-4">
            <a href="#rewards" className="hover:text-[#B32346]">
              Rewards
            </a>
            <a href="#about-us" className="hover:text-[#B32346]">
              About Us
            </a>
            <a href="#contact-us" className="hover:text-[#B32346]">
              Contact Us
            </a>
            <button className="bg-orange-500 px-4 py-2 rounded-full hover:text-[#B32346] transition">
              Book Now
            </button>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
