import { useState } from "react";
import { Globe, Menu, X } from "lucide-react"; // Ensure lucide-react is installed

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <a href="#home">
              <img src="/img/logo.png" alt="Logo" className="h-10 w-10" /> 
            </a>
            <a href="#home">
              <p className="text-2xl font-bold text-gray-900">GetOnlineZA</p>
            </a>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#services"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Services
            </a>
            <a
              href="#why-online"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Why Go Online?
            </a>
            <a
              href="#portfolio"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Portfolio
            </a>
            <a
              href="#how-it-works"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              How It Works
            </a>
            <a
              href="#gallery"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Gallery
            </a>
            <a
              href="#testimonials"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Get Started
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 pb-6">
          <nav className="flex flex-col space-y-4 font-medium">
            <a href="#services" onClick={() => setMenuOpen(false)}>
              Services
            </a>
            <a href="#why-online" onClick={() => setMenuOpen(false)}>
              Why Go Online?
            </a>
            <a href="#portfolio" onClick={() => setMenuOpen(false)}>
              Portfolio
            </a>
            <a href="#how-it-works" onClick={() => setMenuOpen(false)}>
              How It Works
            </a>
            <a href="#gallery" onClick={() => setMenuOpen(false)}>
              Gallery
            </a>
            <a href="#testimonials" onClick={() => setMenuOpen(false)}>
              Testimonials
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Get Started
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
