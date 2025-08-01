import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaEnvelope } from 'react-icons/fa';
import { IconType } from 'react-icons';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navItems: { path: string; label: string; icon: IconType }[] = [
    { path: '/', label: ' Home', icon: FaHome },
    { path: '/about', label: 'About', icon: FaInfoCircle },
    { path: '/contact', label: 'Contact', icon: FaEnvelope },
  ];

  const isActive = (path: string) => location.pathname === path;

  const closeMobileMenu = () => {
    setIsMobileOpen(false);
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block fixed left-0 top-16 h-full w-64 bg-gray-800 text-white shadow-lg transition-all duration-300 ease-in-out z-40">
        <div className="p-6">
          <h2 className="text-xl font-serif font-bold mb-8 text-purple-300">
            Navigation
          </h2>
          
          <nav className="space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block p-3 rounded-lg transition-all duration-200 font-serif ${
                  isActive(item.path)
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                <span className="flex items-center space-x-3">
                  {React.createElement(item.icon as React.ElementType, { className: "text-lg" })}
                  <span className="font-medium">{item.label}</span>
                </span>
              </Link>
            ))}
          </nav>

          <div className="mt-8 p-4 bg-gray-700 rounded-lg">
            <h3 className="font-serif font-bold text-purple-300 mb-2">
              Quick Stats
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Active Users:</span>
                <span className="text-yellow-400">1,234</span>
              </div>
              <div className="flex justify-between">
                <span>Theme Views:</span>
                <span className="text-green-400">5,678</span>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Sidebar Toggle Button */}
      <button
        onClick={() => setIsMobileOpen(true)}
        className="lg:hidden fixed bottom-4 right-4 z-50 bg-purple-600 text-white p-3 rounded-full shadow-lg hover:bg-purple-700 transition-all duration-200 hover:scale-110 transform"
        aria-label="Open navigation menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Sidebar Overlay */}
      {isMobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 animate-fadeIn">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
            onClick={closeMobileMenu}
          />
          
          {/* Sidebar */}
          <div className="absolute left-0 top-0 h-full w-80 max-w-[85vw] bg-gray-800 text-white shadow-xl transform transition-transform duration-300 ease-in-out animate-slideIn">
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-serif font-bold text-purple-300">
                  Navigation
                </h2>
                <button
                  onClick={closeMobileMenu}
                  className="p-2 rounded-md hover:bg-gray-700 transition-all duration-200 hover:scale-110 transform"
                  aria-label="Close navigation menu"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <nav className="space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={closeMobileMenu}
                    className={`block p-3 rounded-lg transition-all duration-200 font-serif hover:scale-105 transform ${
                      isActive(item.path)
                        ? 'bg-purple-600 text-white shadow-md'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                  >
                    <span className="flex items-center space-x-3">
                      {React.createElement(item.icon as React.ElementType, { className: "text-lg" })}
                      <span className="font-medium">{item.label}</span>
                    </span>
                  </Link>
                ))}
              </nav>

              <div className="mt-8 p-4 bg-gray-700 rounded-lg">
                <h3 className="font-serif font-bold text-purple-300 mb-2">
                  Quick Stats
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Active Users:</span>
                    <span className="text-yellow-400">1,234</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Theme Views:</span>
                    <span className="text-green-400">5,678</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar; 