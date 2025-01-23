import  { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Avatar, Dropdown } from "antd";
import { TiUserOutline } from "react-icons/ti";
import { useLocation } from "react-router-dom";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  let item=localStorage.getItem("user")
  const location = useLocation();
  const navigate=useNavigate()
  // @ts-expect-error
  const [isLoggedIn, setisLoggedIn] = useState(JSON.parse(item)?.id?true:false);
  const items= [
    {
      key: '1',
      label: 'My Account',
      disabled: true,
    },
    {
      type: 'divider',
    },
    {
      key: '2',
      label:<p onClick={()=>navigate("/profile")}>
Profile
      </p> ,
  
    },
    {
      key: '3',
      label:<p onClick={()=>navigate("/requests")}>
Track Requests
      </p> ,
    },
    // {
    //   key: '4',
    //   label: 'My Rewards',
    // },
    {
      key: '6',
      label: <p onClick={()=>{localStorage.clear();setisLoggedIn(false);navigate("/")}} className="text-red-600 font-bold">Logout</p>
}
]

  return (
    <header className={`${location.pathname=="/"?"bg-transparent":"bg-white"} text-[#6A0B37]    absolute top-0 z-20 w-[100%]`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col items-center space-x-2"
        >
          {/* <img
            src="/logo.png" 
            alt="Logo"
            className="h-10 w-10"
          /> */}
          <a href="/">

          <div>
            <h1 className="text-white  text-lg font-bold">Heart Hand</h1>
            <p className="text-sm text-white ">Share at Door Step</p>
          </div>
          </a>
        </motion.div>

        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="hidden md:flex space-x-6 font-bold"
        >
          <a href="/#about-us" className="hover:text-[#B32346]">
            About Us
          </a>
          <a href="/auth/ngo-login" className=" hover:text-[#B32346]">
            Join Us As A <b>NGO</b>
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
          <button onClick={()=>navigate("/donate")} className="bg-[#6A0B37] text-white  px-4 py-2 rounded-full hover:bg-orange-600 transition">
            Donate Now
          </button>
          {!isLoggedIn?<button onClick={()=>navigate("/auth/login")} className="bg-[#6A0B37] text-white  px-4 py-2 rounded-full hover:bg-orange-600 transition">
            Login
          </button>:
          // @ts-expect-error
          <Dropdown menu={{ items }}>
          <Avatar className="bg-primary hover:cursor-pointer" size={44} icon={<TiUserOutline />} />
          </Dropdown>
          }
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
            {!isLoggedIn?<button onClick={()=>navigate("/auth/login")} className="bg-[#6A0B37] text-white  px-4 py-2 rounded-full hover:bg-orange-600 transition">
            Login
          </button>:
          // @ts-expect-error
          <Dropdown menu={{ items }}>
          <Avatar className="bg-primary hover:cursor-pointer" size={44} icon={<TiUserOutline />} />
          </Dropdown>
          }
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
