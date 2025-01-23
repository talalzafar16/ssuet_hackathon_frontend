
const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-8">
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
              className="w-full py-2 px-4 rounded-l-md text-gray-900 focus:outline-none"
            />
            <button className="bg-pink-500 px-4 py-2 rounded-r-md text-white font-semibold hover:bg-pink-600">
              &gt;
            </button>
          </div>
        </div>



        {/* About */}
        <div>
          <h4 className="font-semibold text-lg mb-4">About</h4>
          <ul className="space-y-2">
            <li>Our Story</li>
            <li>Benefits</li>
            <li>Team</li>
            <li>Careers</li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Help</h4>
          <ul className="space-y-2">
            <li>FAQs</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto px-4 mt-8 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex space-x-4 text-sm">
          <a href="#" className="hover:underline">
            Terms & Conditions
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
        </div>
        <div className="mt-4 md:mt-0 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a
            href="#"
            className="bg-white text-gray-900 px-4 py-2 rounded-md font-semibold hover:bg-gray-200"
          >
            Donate
          </a>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-pink-500">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-pink-500">
              <i className="fab fa-twitter"></i>
            </a>
            <a  className="hover:text-pink-500">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
