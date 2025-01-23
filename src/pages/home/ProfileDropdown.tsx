import  { useState } from "react";

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Profile Picture */}
      <div
        className="h-10 w-10 rounded-full border-2 border-[#6A0B37] flex items-center justify-center cursor-pointer"
        onClick={toggleDropdown}
      >
        <img
          src="/profilepic1.webp"
          alt="Profile"
          className="h-8 w-8 rounded-full"
        />
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg">
          <div className="p-4 text-center">
            <div className="flex justify-center">
              <img
                src="/profilepic1.webp"
                alt="Profile"
                className="h-12 w-12 rounded-full"
              />
            </div>
            <h3 className="mt-2 text-lg font-medium">Name</h3>
            <p className="text-sm text-gray-500">email</p>
            <p className="text-sm text-gray-500">Number</p>
          </div>
          <hr />
          <div className="p-2">
           
            <button className="w-full text-left py-2 px-4 hover:bg-gray-100">
              Requests
            </button>
           
          </div>
          <hr />
          <div className="p-2">
            
            <button className="w-full text-left py-2 px-4 hover:bg-gray-100">
              Logout <span className="float-right">Now</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
