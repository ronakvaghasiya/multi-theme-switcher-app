import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";

const Header: React.FC = () => {
  const { currentTheme, setTheme, theme } = useTheme();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getHeaderStyles = () => {
    const baseStyles =
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out";

    switch (theme.layout.type) {
      case "sidebar":
        return `${baseStyles} bg-gray-800 text-white shadow-lg`;
      case "card-grid":
        return `${baseStyles} bg-gradient-to-r from-pink-400 to-purple-500 text-white shadow-xl`;
      default:
        return `${baseStyles} bg-white text-gray-800 shadow-md border-b border-gray-200`;
    }
  };

  const getLogoStyles = () => {
    const baseStyles = "text-xl font-bold transition-all duration-300";

    switch (theme.layout.type) {
      case "sidebar":
        return `${baseStyles} font-serif`;
      case "card-grid":
        return `${baseStyles} font-pacifico`;
      default:
        return `${baseStyles} font-sans`;
    }
  };

  const getDropdownStyles = () => {
    const baseStyles =
      "px-3 py-2 rounded-md border transition-all duration-300 focus:outline-none focus:ring-2";

    switch (theme.layout.type) {
      case "sidebar":
        return `${baseStyles} bg-gray-700 text-white border-gray-600 focus:ring-purple-500`;
      case "card-grid":
        return `${baseStyles} bg-white text-pink-600 border-pink-300 focus:ring-pink-500`;
      default:
        return `${baseStyles} bg-gray-50 text-gray-700 border-gray-300 focus:ring-blue-500`;
    }
  };

  const getMobileMenuStyles = () => {
    const baseStyles =
      "absolute top-full left-0 right-0 transition-all duration-300 ease-in-out";

    switch (theme.layout.type) {
      case "sidebar":
        return `${baseStyles} bg-gray-800 border-t border-gray-700 shadow-lg`;
      case "card-grid":
        return `${baseStyles} bg-gradient-to-b from-pink-400 to-purple-500 shadow-xl`;
      default:
        return `${baseStyles} bg-white border-t border-gray-200 shadow-md`;
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={getHeaderStyles()}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className={getLogoStyles()}>
            <span className="flex items-center space-x-2 w-full justify-center sm:justify-start text-center">
              <span className="hidden sm:inline">Multi Theme Switcher</span>
              <span className="sm:hidden w-full block text-center">
                Multi Theme Switcher
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`transition-colors duration-200 px-3 py-1 rounded-lg hover:opacity-80 ${location.pathname === '/' ? 'font-bold shadow-md' : ''}`}
              style={location.pathname === '/' ? { background: theme.colors.primary, color: '#fff' } : { color: theme.colors.textSecondary }}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`transition-colors duration-200 px-3 py-1 rounded-lg hover:opacity-80 ${location.pathname === '/about' ? 'font-bold shadow-md' : ''}`}
              style={location.pathname === '/about' ? { background: theme.colors.primary, color: '#fff' } : { color: theme.colors.textSecondary }}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`transition-colors duration-200 px-3 py-1 rounded-lg hover:opacity-80 ${location.pathname === '/contact' ? 'font-bold shadow-md' : ''}`}
              style={location.pathname === '/contact' ? { background: theme.colors.primary, color: '#fff' } : { color: theme.colors.textSecondary }}
            >
              Contact
            </Link>
          </nav>

          {/* Theme Switcher - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <label htmlFor="theme-select" className="text-sm font-medium">
              Theme:
            </label>
            <select
              id="theme-select"
              value={currentTheme}
              onChange={(e) => setTheme(e.target.value as any)}
              className={getDropdownStyles()}
            >
              <option value="theme1">Theme 1 - Minimalist</option>
              <option value="theme2">Theme 2 - Dark Sidebar</option>
              <option value="theme3">Theme 3 - Colorful Cards</option>
            </select>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <select
              value={currentTheme}
              onChange={(e) => setTheme(e.target.value as any)}
              className={`${getDropdownStyles()} text-sm`}
            >
              <option value="theme1">Theme 1</option>
              <option value="theme2">Theme 2</option>
              <option value="theme3">Theme 3</option>
            </select>

            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md transition-colors duration-200 hover:opacity-75"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden ${getMobileMenuStyles()} ${
            isMobileMenuOpen ? "block" : "hidden"
          } transition-all duration-300 ease-in-out`}
        >
          <div className="px-4 py-3 space-y-3">
            <Link
              to="/"
              className={`block py-2 px-3 rounded-lg transition-colors duration-200 hover:scale-105 transform ${location.pathname === '/' ? 'font-bold shadow-md' : ''}`}
              style={location.pathname === '/' ? { background: theme.colors.primary, color: '#fff' } : { color: theme.colors.textSecondary }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`block py-2 px-3 rounded-lg transition-colors duration-200 hover:scale-105 transform ${location.pathname === '/about' ? 'font-bold shadow-md' : ''}`}
              style={location.pathname === '/about' ? { background: theme.colors.primary, color: '#fff' } : { color: theme.colors.textSecondary }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`block py-2 px-3 rounded-lg transition-colors duration-200 hover:scale-105 transform ${location.pathname === '/contact' ? 'font-bold shadow-md' : ''}`}
              style={location.pathname === '/contact' ? { background: theme.colors.primary, color: '#fff' } : { color: theme.colors.textSecondary }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
