'use client';

import { useState, useEffect } from 'react';


export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 apple-blur shadow-sm' : 'bg-transparent'
      }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="/" className="text-xl font-bold text-gradient">AI Celebrity Voice Generator</a>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="/" className="text-gray-700 hover:text-apple-blue transition-colors duration-200 font-medium">
                Home
              </a>
              <div className="relative">
                <button
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                  className="text-gray-700 hover:text-apple-blue transition-colors duration-200 font-medium flex items-center space-x-1"
                >
                  <span>Celebrity Voice</span>
                  <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                <div
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                  className={`absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 transform transition-all duration-200 ${isDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                    }`}
                >
                  <a
                    href="/trump"
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-apple-blue transition-colors duration-200 font-medium"
                  >
                    Trump AI Voice
                  </a>
                  <a
                    href="/stephen-hawking"
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-apple-blue transition-colors duration-200 font-medium"
                  >
                    Stephen Hawking Voice
                  </a>
                  <a
                    href="/joe-biden"
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-apple-blue transition-colors duration-200 font-medium"
                  >
                    Joe Biden AI Voice
                  </a>
                  <a
                    href="/obama"
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-apple-blue transition-colors duration-200 font-medium"
                  >
                    Obama AI Voice
                  </a>
                  <a
                    href="/peter-griffin"
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-apple-blue transition-colors duration-200 font-medium"
                  >
                    Peter Griffin AI Voice
                  </a>
                  <a
                    href="/spongebob"
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-apple-blue transition-colors duration-200 font-medium"
                  >
                    SpongeBob AI Voice
                  </a>
                  <a
                    href="/ice-spice"
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-apple-blue transition-colors duration-200 font-medium"
                  >
                    Ice Spice AI
                  </a>
                  <a
                    href="/morgan-freeman"
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-apple-blue transition-colors duration-200 font-medium"
                  >
                    Morgan Freeman Voice
                  </a>
                </div>
              </div>
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