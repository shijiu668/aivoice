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
            <div className="ml-10 flex items-baseline space-x-6">
              <a href="/" className="text-gray-700 hover:text-apple-blue transition-colors duration-200 font-medium">
                Home
              </a>

              <div className="relative group">
                <button className="text-gray-700 hover:text-apple-blue transition-colors duration-200 font-medium flex items-center space-x-1" aria-expanded="false" aria-haspopup="true">
                  <span>Political Voices</span>
                  <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <nav className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200" role="menu" aria-labelledby="politicians-menu">
                  <a href="/trump" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-apple-blue transition-colors duration-200 font-medium" role="menuitem">Trump AI Voice</a>
                  <a href="/joe-biden" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-apple-blue transition-colors duration-200 font-medium" role="menuitem">Joe Biden AI Voice</a>
                  <a href="/obama" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-apple-blue transition-colors duration-200 font-medium" role="menuitem">Obama AI Voice</a>
                </nav>
                <noscript>
                  <div className="sr-only">
                    <a href="/trump">Trump AI Voice</a>
                    <a href="/joe-biden">Joe Biden AI Voice</a>
                    <a href="/obama">Obama AI Voice</a>
                  </div>
                </noscript>
              </div>

              <div className="relative group">
                <button className="text-gray-700 hover:text-apple-blue transition-colors duration-200 font-medium flex items-center space-x-1" aria-expanded="false" aria-haspopup="true">
                  <span>Celebrity Voice</span>
                  <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <nav className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200" role="menu" aria-labelledby="entertainment-menu">
                  <a href="/taylor-swift" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-apple-blue transition-colors duration-200 font-medium" role="menuitem">Taylor Swift AI Voice</a>
                  <a href="/ice-spice" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-apple-blue transition-colors duration-200 font-medium" role="menuitem">Ice Spice AI</a>
                  <a href="/morgan-freeman" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-apple-blue transition-colors duration-200 font-medium" role="menuitem">Morgan Freeman Voice</a>
                  <a href="/pokimane" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-apple-blue transition-colors duration-200 font-medium" role="menuitem">Pokimane AI Voice</a>
                  <a href="/stephen-hawking" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-apple-blue transition-colors duration-200 font-medium" role="menuitem">Stephen Hawking Voice</a>
                </nav>
                <noscript>
                  <div className="sr-only">
                    <a href="/taylor-swift">Taylor Swift AI Voice</a>
                    <a href="/ice-spice">Ice Spice AI</a>
                    <a href="/morgan-freeman">Morgan Freeman Voice</a>
                    <a href="/pokimane">Pokimane AI Voice</a>
                    <a href="/stephen-hawking">Stephen Hawking Voice</a>
                  </div>
                </noscript>
              </div>

              <div className="relative group">
                <button className="text-gray-700 hover:text-apple-blue transition-colors duration-200 font-medium flex items-center space-x-1" aria-expanded="false" aria-haspopup="true">
                  <span>Character Voices</span>
                  <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <nav className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200" role="menu" aria-labelledby="characters-menu">
                  <a href="/spongebob" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-apple-blue transition-colors duration-200 font-medium" role="menuitem">SpongeBob AI Voice</a>
                  <a href="/peter-griffin" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-apple-blue transition-colors duration-200 font-medium" role="menuitem">Peter Griffin AI Voice</a>
                  <a href="/squidward" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-apple-blue transition-colors duration-200 font-medium" role="menuitem">Squidward AI Voice</a>
                  <a href="/siri" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-apple-blue transition-colors duration-200 font-medium" role="menuitem">Siri Voice Modifier</a>
                </nav>
                <noscript>
                  <div className="sr-only">
                    <a href="/spongebob">SpongeBob AI Voice</a>
                    <a href="/peter-griffin">Peter Griffin AI Voice</a>
                    <a href="/squidward">Squidward AI Voice</a>
                    <a href="/siri">Siri Voice Modifier</a>
                  </div>
                </noscript>
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

      {/* SEO Navigation Links for better crawlability */}
      <div className="sr-only" aria-hidden="true">
        <nav>
          <h2>Politicians AI Voices</h2>
          <a href="/trump">Trump AI Voice Generator</a>
          <a href="/joe-biden">Joe Biden AI Voice Generator</a>
          <a href="/obama">Obama AI Voice Generator</a>

          <h2>Entertainment AI Voices</h2>
          <a href="/taylor-swift">Taylor Swift AI Voice Generator</a>
          <a href="/ice-spice">Ice Spice AI Voice</a>
          <a href="/morgan-freeman">Morgan Freeman AI Voice</a>
          <a href="/pokimane">Pokimane AI Voice</a>
          <a href="/stephen-hawking">Stephen Hawking AI Voice</a>

          <h2>Character AI Voices</h2>
          <a href="/spongebob">SpongeBob AI Voice</a>
          <a href="/peter-griffin">Peter Griffin AI Voice</a>
          <a href="/squidward">Squidward AI Voice</a>
          <a href="/siri">Siri Voice Modifier</a>
        </nav>
      </div>
    </header>
  );
}