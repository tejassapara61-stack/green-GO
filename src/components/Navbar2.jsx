import { useState } from "react";
import logo from "../images/logo.jpg";
import { Link } from "react-router-dom";
import { FaCloudSun, FaSeedling, FaBookOpen, FaComments, FaUserCircle } from "react-icons/fa"; // icons

export default function Navbar2() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="w-full">

      {/* Navbar */}
      <nav className="relative flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 bg-white text-gray-900 shadow-md">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Green Go Logo" className="w-15 h-15" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8">
          <li className="flex items-center space-x-1 hover:text-green-600 transition">
            <FaCloudSun />
            <Link to="/weather">Weather</Link>
          </li>
          <li className="flex items-center space-x-1 hover:text-green-600 transition">
            <FaSeedling />
            <Link to="/crops">Crops</Link>
          </li>
          <li className="flex items-center space-x-1 hover:text-green-600 transition">
            <FaBookOpen />
            <Link to="/schemes">Schemes</Link>
          </li>
          <li className="flex items-center space-x-1 hover:text-green-600 transition">
            <FaComments />
            <Link to="/assistant">Chatbot</Link>
          </li>
          <li className="flex items-center space-x-1 hover:text-green-600 transition">
            <FaUserCircle />
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          aria-label="menu-btn"
          className="md:hidden inline-block p-2 rounded-lg hover:bg-gray-100"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md p-6 md:hidden flex flex-col space-y-4">
            <Link to="/weather" className="flex items-center space-x-2 text-lg hover:text-green-600">
              <FaCloudSun /> Weather
            </Link>
            <Link to="/crops" className="flex items-center space-x-2 text-lg hover:text-green-600">
              <FaSeedling /> Crops
            </Link>
            <Link to="/schemes" className="flex items-center space-x-2 text-lg hover:text-green-600">
              <FaBookOpen /> Schemes
            </Link>
            <Link to="/assistant" className="flex items-center space-x-2 text-lg hover:text-green-600">
              <FaComments /> Chatbot
            </Link>
            <Link to="/dashboard" className="flex items-center space-x-2 text-lg hover:text-green-600">
              <FaUserCircle /> Dashboard
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
}
