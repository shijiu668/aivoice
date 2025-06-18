'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 apple-blur shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-gradient">AI Voice Generator</h1>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-gray-700 hover:text-apple-blue transition-colors duration-200 font-medium">
                Home
              </a>
              <a href="#generator" className="text-gray-700 hover:text-apple-blue transition-colors duration-200 font-medium">
                Generator
              </a>
              <a href="#features" className="text-gray-700 hover:text-apple-blue transition-colors duration-200 font-medium">
                Features
              </a>
              <a href="#about" className="text-gray-700 hover:text-apple-blue transition-colors duration-200 font-medium">
                About
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button className="text-gray-700 hover:text-apple-blue">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}