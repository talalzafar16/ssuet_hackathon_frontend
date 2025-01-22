import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="bg-[#6A0B37] text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Newsletter Subscription */}
        <div>
          <h4 className="font-semibold text-lg mb-4">
            Contact Us
          </h4>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Email address"
              className="w-full py-2 px-5 mx-0 rounded-l-md text-gray-900 focus:outline-none"
            />
            <button className="border-1 bg-white text-[#6A0B37] px-4 py-2 mx-0 rounded-sm font-semibold hover:bg-[#6A0B37] hover:text-white">
              &gt;
            </button>

          </div>
        </div>



        {/* About */}
    <div>
      <h4 className="font-semibold text-lg mb-4">About Us</h4>
      <ul className="space-y-2">
        <li><a href="#" className="hover:underline">Our Story</a></li>
        <li><a href="#" className="hover:underline">Benefits</a></li>
        <li><a href="#" className="hover:underline">Team</a></li>
        <li><a href="#" className="hover:underline">Careers</a></li>
      </ul>
    </div>

    {/* Help */}
    <div>
      <h4 className="font-semibold text-lg mb-4">Help</h4>
      <ul className="space-y-2">
        <li><a href="#" className="hover:underline">FAQs</a></li>
        <li><a href="#" className="hover:underline">Contact Us</a></li>
      </ul>
    </div>

    {/* Location */}
    <div>
      <h4 className="font-semibold text-lg mb-4">Location</h4>
      <p>NED University, Karachi, Sindh, 75050</p>
      <p>Email: <a href="mailto:info@hearthand.com" className="hover:underline">info@hearthand.com</a></p>
      <p>+92 3363420592</p>
    </div>

    {/* Social Media Links */}
    <div>
      <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
      <div className="flex space-x-4">
        <a href="www.facebook.com" className="w-12 h-12 flex justify-center items-center rounded-full hover:text-[#6A0B37] hover:bg-white transition duration-300">
          <i className="fab fa-facebook-f text-3xl"></i>
        </a>
        <a href="www.twitter.com" className="w-12 h-12 flex justify-center items-center rounded-full hover:text-[#6A0B37] hover:bg-white transition duration-300">
          <i className="fab fa-twitter text-3xl"></i>
        </a>
        <a href="www.instagram.com" className="w-12 h-12 flex justify-center items-center rounded-full hover:text-[#6A0B37] hover:bg-white transition duration-300">
          <i className="fab fa-instagram text-3xl"></i>
        </a>
      </div>
    </div>
  </div>

  {/* Footer Bottom */}
  <div className="flex justify-between container mx-auto px-4 mt-8 border-t border-white-700 pt-6 flex-col md:flex-row items-center">
    <div className="flex space-x-4 text-sm">
      <a href="#" className="hover:underline">Terms & Conditions</a>
      <a href="#" className="hover:underline">Privacy Policy</a>
    </div>
    <div className="flex justify-center mt-4 md:mt-0">
      <a
        href="#"
        className="relative w-32 text-center bg-white text-gray-900 px-4 py-2 rounded-md font-semibold hover:text-[#6A0B37] hover:bg-white transition duration-300"
      >
        Donate
      </a>
    </div>
  </div>
</footer>
  );
};

export default Footer;
