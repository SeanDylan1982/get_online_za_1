// src/components/Navbar.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // optional icon package, or use your own SVG

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-600">
          GetOnlineZA
        </Link>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 font-medium">
          <li>
            <a href="#packages" className="hover:text-blue-600">
              Packages
            </a>
          </li>
          <li>
            <a href="#portfolio" className="hover:text-blue-600">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#reviews" className="hover:text-blue-600">
              Reviews
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 pb-4">
          <ul className="flex flex-col space-y-3 font-medium">
            <li>
              <a href="#packages" onClick={toggleMenu}>
                Packages
              </a>
            </li>
            <li>
              <a href="#portfolio" onClick={toggleMenu}>
                Portfolio
              </a>
            </li>
            <li>
              <a href="#reviews" onClick={toggleMenu}>
                Reviews
              </a>
            </li>
            <li>
              <a href="#contact" onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
