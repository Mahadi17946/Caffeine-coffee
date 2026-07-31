import React, { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');


  const menuItems = [
    'Cappuccino',
    'Americano',
    'Espresso',
    'Doppio',
    'Latte Art',
    "Jean's Coffee Special",
  ];

  const filteredItems = menuItems.filter(item =>
    item.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <>
      <nav className="w-full border-b border-[#3d2a1f]/80 bg-[#18110c]/90 backdrop-blur-md sticky top-0 z-40 font-Inter">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          <a
            href="#"
            className="text-2xl font-Poppins font-bold tracking-wider text-white hover:opacity-90 transition"
          >
            Caffeine<span className="text-amber-400">.</span>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center space-x-8 text-sm font-medium text-stone-300 font-Inter">
            <li>
              <a
                href="#home"
                className="hover:text-amber-400 transition-colors py-1 relative group"
              >
                Home
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a
                href="#menu"
                className="hover:text-amber-400 transition-colors py-1 relative group"
              >
                Menu
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-amber-400 transition-colors py-1 relative group"
              >
                About Us
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a
                href="#facilities"
                className="hover:text-amber-400 transition-colors py-1 relative group"
              >
                Facilities
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          </ul>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#signin"
              className="text-sm font-medium text-stone-300 hover:text-amber-300 transition-colors"
            >
              Sign In
            </a>

            {/* Search Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search"
              className="p-2.5 text-stone-300 hover:text-amber-400 rounded-xl bg-[#2d1e17] border border-[#422e23] hover:border-amber-400/50 transition cursor-pointer shadow-md"
            >
              <Search size={18} />
            </button>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-stone-300 hover:text-amber-400 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-[#18110c] border-b border-[#3d2a1f] px-6 py-5 space-y-4 font-Inter">
            <ul className="flex flex-col space-y-3 text-center text-sm font-medium text-stone-300">
              <li>
                <a
                  href="#home"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 hover:text-amber-400 transition-colors border-b border-[#2d1e17]"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 hover:text-amber-400 transition-colors border-b border-[#2d1e17]"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 hover:text-amber-400 transition-colors border-b border-[#2d1e17]"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#facilities"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 hover:text-amber-400 transition-colors"
                >
                  Facilities
                </a>
              </li>
            </ul>

            <div className="pt-4 border-t border-[#3d2a1f] flex justify-center items-center space-x-6">
              <a
                href="#signin"
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-stone-300 hover:text-amber-400 transition-colors"
              >
                Sign In
              </a>
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsSearchOpen(true);
                }}
                className="p-2.5 text-stone-300 hover:text-amber-400 rounded-xl bg-[#2d1e17] border border-[#422e23] transition"
              >
                <Search size={18} />
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Interactive Search Modal Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-start justify-center pt-24 px-4 font-Inter">
          <div className="bg-[#2d1e17] border border-[#422e23] w-full max-w-lg rounded-2xl p-6 shadow-2xl space-y-4 text-white">
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-[#422e23]">
              <h3 className="text-lg font-Poppins font-bold text-amber-200">
                Search Coffee Menu
              </h3>
              <button
                onClick={() => {
                  setIsSearchOpen(false);
                  setSearchQuery('');
                }}
                className="text-stone-400 hover:text-white p-1 rounded-lg hover:bg-[#3d2a1f] transition"
              >
                <X size={20} />
              </button>
            </div>

            {/* Search Input */}
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Type to search (e.g., Espresso, Cappuccino)..."
                className="w-full bg-[#18110c] border border-[#422e23] text-stone-200 pl-10 pr-4 py-3 rounded-xl focus:outline-none focus:border-amber-400 text-sm"
                autoFocus
              />
              <Search
                size={18}
                className="absolute left-3.5 top-3.5 text-stone-400"
              />
            </div>

            {/* Results List */}
            <div className="max-h-52 overflow-y-auto space-y-2 pt-1">
              {searchQuery.trim() === '' ? (
                <p className="text-xs text-stone-400 text-center py-4">
                  Start typing to search your favourite coffee...
                </p>
              ) : filteredItems.length > 0 ? (
                filteredItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-[#18110c]/80 border border-[#3d2a1f] rounded-xl hover:bg-[#3d2a1f] cursor-pointer flex justify-between items-center text-sm transition"
                    onClick={() => {
                      alert(`Selected: ${item}`);
                      setIsSearchOpen(false);
                      setSearchQuery('');
                    }}
                  >
                    <span className="font-medium text-stone-200">{item}</span>
                    <span className="text-xs text-amber-300 bg-amber-500/10 border border-amber-500/30 px-2.5 py-1 rounded-lg">
                      View Item
                    </span>
                  </div>
                ))
              ) : (
                <p className="text-xs text-amber-500/80 text-center py-4">
                  No coffee found matching "{searchQuery}"
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
