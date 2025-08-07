import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-3xl">🏠</div>
              <span className="text-2xl font-bold text-white glow-text">RentalApp</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Your trusted partner in finding the perfect rental property. We connect tenants with verified landlords 
              for a seamless rental experience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-2xl">
                📘
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-2xl">
                🐦
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-2xl">
                📷
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-2xl">
                💼
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/properties" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  Browse Properties
                </Link>
              </li>
              <li>
                <Link to="/add-property" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  List Property
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-4 text-lg">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-300">
                <span className="mr-2">📧</span>
                support@rentalapp.com
              </li>
              <li className="flex items-center text-gray-300">
                <span className="mr-2">📞</span>
                +91 98765 43210
              </li>
              <li className="flex items-center text-gray-300">
                <span className="mr-2">📍</span>
                Mumbai, India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 RentalApp. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm">
              Cookie Policy
            </a>
          </div>
        </div>

        {/* Animated Elements */}
        <div className="w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse mt-8"></div>
      </div>
    </footer>
  );
}

export default Footer;
