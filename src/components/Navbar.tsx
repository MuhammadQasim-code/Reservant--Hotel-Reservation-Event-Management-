// src/components/Navbar.tsx
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-10 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-orange-600 tracking-wide">
              RESERVENT
            </Link>
          </div>

          {/* Centered Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-orange-600 transition duration-300 font-medium">Home</Link>
            <Link to="/services" className="text-gray-700 hover:text-orange-600 transition duration-300 font-medium">Services</Link>
            <Link to="/about" className="text-gray-700 hover:text-orange-600 transition duration-300 font-medium">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-orange-600 transition duration-300 font-medium">Contact</Link>
          </div>

          {/* Login / Signup Buttons */}
          <div className="flex items-center space-x-4">
            <Link to="/login" className="text-gray-700 hover:text-orange-600 font-medium px-3 py-2">
              Log in
            </Link>
            <Link 
              to="/signup" 
              className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition duration-300 shadow-md font-medium"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;