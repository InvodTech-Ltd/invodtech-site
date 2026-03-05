import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo.png"; // Replace with your logo path

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = ["Home", "Products", "Philosophy", "Founders", "Pricing", "Contact"];

  return (
    <nav className="fixed w-full z-50 bg-[#8C1F33]/70 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-20">

        {/* Logo */}
        <div className="flex items-center space-x-3 cursor-pointer">
          <img
            src={Logo}
            alt="InvodTech Logo"
            className="h-12 w-12 transform transition-transform duration-300 hover:scale-110 hover:rotate-3"
          />
          <span className="text-[#F2E399] font-bold text-2xl hover:text-[#F2D399] transition-colors">
            InvodTech
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[#F2F2F2] hover:text-[#F2D399] font-medium transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? (
              <FaTimes className="text-[#F2E399] text-2xl transition-transform hover:scale-110" />
            ) : (
              <FaBars className="text-[#F2E399] text-2xl transition-transform hover:scale-110" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#732B1A]/90 backdrop-blur-md flex flex-col items-center py-6 space-y-4 transition-all duration-300 ${
          mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-[#F2F2F2] hover:text-[#F2D399] font-semibold text-lg transition-colors duration-200"
            onClick={() => setMobileOpen(false)}
          >
            {link}
          </a>
        ))}
      </div>
    </nav>
  );
}