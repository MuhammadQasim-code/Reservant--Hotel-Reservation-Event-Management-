// src/components/HomeNavbar.tsx
import { Link } from 'react-router-dom';

// Changed from 'interface' to 'type'
type HomeNavbarProps = {
  onMenuClick: () => void;
};

const HomeNavbar = ({ onMenuClick }: HomeNavbarProps) => {
  return (
    <nav className="bg-slate-800 text-white shadow-lg fixed w-full z-50 h-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          
          {/* LEFT: Hamburger + Logo Text */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={onMenuClick}
              className="p-2 rounded hover:bg-slate-700 transition focus:outline-none"
            >
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            
            <span className="text-xl font-bold tracking-wider text-amber-500">
              RESERVENT
            </span>
          </div>

          {/* CENTER: Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-300 hover:text-amber-400 font-medium transition">Home</Link>
            <Link to="/about" className="text-gray-300 hover:text-amber-400 font-medium transition">About</Link>
            <Link to="/services" className="text-gray-300 hover:text-amber-400 font-medium transition">Services</Link>
            <Link to="/contact" className="text-gray-300 hover:text-amber-400 font-medium transition">Contact</Link>
          </div>

          {/* RIGHT: Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Link to="/login" className="text-gray-300 hover:text-white font-medium">Login</Link>
            <Link 
              to="/signup" 
              className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded font-medium transition shadow-md"
            >
              Signup
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default HomeNavbar;