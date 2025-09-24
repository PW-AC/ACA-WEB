import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBavDropdownOpen, setIsBavDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const toggleButtonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus with Escape and trap focus in mobile menu
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsBavDropdownOpen(false);
        setIsAboutDropdownOpen(false);
        if (isMenuOpen) {
          setIsMenuOpen(false);
          if (toggleButtonRef.current) {
            toggleButtonRef.current.focus();
          }
        }
      }
      // Basic arrow key support for desktop dropdowns
      if ((isBavDropdownOpen || isAboutDropdownOpen) && (event.key === 'ArrowDown' || event.key === 'ArrowUp')) {
        const menu = document.querySelector('[aria-label="bAV Untermenü"], [aria-label="Über uns Untermenü"]');
        if (!menu) return;
        const items = Array.from(menu.querySelectorAll('[role="menuitem"]'));
        if (items.length === 0) return;
        const currentIndex = items.findIndex((el) => el === document.activeElement);
        let nextIndex = 0;
        if (event.key === 'ArrowDown') {
          nextIndex = currentIndex < 0 ? 0 : (currentIndex + 1) % items.length;
        } else {
          nextIndex = currentIndex <= 0 ? items.length - 1 : currentIndex - 1;
        }
        items[nextIndex].focus();
        event.preventDefault();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isMenuOpen, isBavDropdownOpen, isAboutDropdownOpen]);

  useEffect(() => {
    if (!isMenuOpen || !mobileMenuRef.current) return;
    const menu = mobileMenuRef.current;
    const focusable = menu.querySelectorAll('a, button');
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    first && first.focus();

    const trap = (e) => {
      if (e.key !== 'Tab') return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    menu.addEventListener('keydown', trap);
    return () => menu.removeEventListener('keydown', trap);
  }, [isMenuOpen]);

  return (
    <header className={`sticky top-0 z-50 bg-acencia-primary-900 border-b ${isScrolled ? 'shadow-md' : ''} backdrop-blur-sm border-white/10 transition-[box-shadow,height] duration-200`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-8">
        <div className={`flex items-center justify-between ${isScrolled ? 'h-14' : 'h-16'}`}>
          {/* Logo */}
          <Link to="/" className="flex items-center mr-12" aria-label="Startseite">
            <div className="text-xl font-semibold text-white tracking-tight">
              ACENCIA
            </div>
          </Link>

          {/* Navigation Links - Clean & Minimal */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Hauptnavigation">
            <div 
              className="relative group"
              onMouseEnter={() => setIsBavDropdownOpen(true)}
              onMouseLeave={() => setIsBavDropdownOpen(false)}
            >
              <Link 
                to="/die-bav" 
                className="text-white hover:text-orange-400 font-medium text-sm transition-colors duration-200 py-2"
                aria-haspopup="menu"
                aria-expanded={isBavDropdownOpen}
              >
                bAV
              </Link>
              
              {/* Clean Dropdown */}
              <div className={`absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-sm py-2 transition-all duration-200 ${
                isBavDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`} role="menu" aria-label="bAV Untermenü">
                <Link 
                  to="/die-bav/gesetzliche-pflichten" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-150"
                  role="menuitem"
                >
                  Rechtlicher Rahmen
                </Link>
                <Link 
                  to="/die-bav/y" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-150"
                  role="menuitem"
                >
                  Vorteile Arbeitnehmer
                </Link>
                <Link 
                  to="/die-bav/aktuelles" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-150"
                  role="menuitem"
                >
                  Aktuelles
                </Link>
              </div>
            </div>
            
            <Link 
              to="/bkv" 
              className="text-white hover:text-orange-400 font-medium text-sm transition-colors duration-200 py-2"
            >
              bKV
            </Link>
            
            <Link 
              to="/buv" 
              className="text-white hover:text-orange-400 font-medium text-sm transition-colors duration-200 py-2"
            >
              bUV
            </Link>
            
            <div 
              className="relative group"
              onMouseEnter={() => setIsAboutDropdownOpen(true)}
              onMouseLeave={() => setIsAboutDropdownOpen(false)}
            >
              <Link 
                to="/ueber-uns" 
                className="text-white hover:text-orange-400 font-medium text-sm transition-colors duration-200 py-2"
                aria-haspopup="menu"
                aria-expanded={isAboutDropdownOpen}
              >
                Über uns
              </Link>
              
              <div className={`absolute top-full right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-sm py-2 transition-all duration-200 ${
                isAboutDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`} role="menu" aria-label="Über uns Untermenü">
                <Link 
                  to="/ueber-uns/service-team" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-150"
                  role="menuitem"
                >
                  Service-Team
                </Link>
              </div>
            </div>

            {/* Kontakt as separate navigation item */}
            <Link 
              to="/kontakt" 
              className="text-white hover:text-orange-400 font-medium text-sm transition-colors duration-200 py-2"
            >
              Kontakt
            </Link>
          </nav>

          {/* Login Portal Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button 
              className="hidden md:block bg-acencia-accent hover:bg-acencia-accent-hover text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
              onClick={() => window.open('https://www.smartcloudservices.de/acencia/login/login.do', '_blank')}
            >
              Login Portal
            </button>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white hover:text-orange-400 transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              ref={toggleButtonRef}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-200 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`} role="region" aria-label="Mobiles Menü" ref={mobileMenuRef}>
          <div className="py-4 space-y-2 border-t border-white/10">
            <Link
              to="/die-bav"
              className="block py-3 text-white hover:text-orange-400 font-medium text-sm transition-colors duration-150"
              onClick={() => setIsMenuOpen(false)}
            >
              bAV
            </Link>
            <Link
              to="/bkv"
              className="block py-3 text-white hover:text-orange-400 font-medium text-sm transition-colors duration-150"
              onClick={() => setIsMenuOpen(false)}
            >
              bKV
            </Link>
            <Link
              to="/buv"
              className="block py-3 text-white hover:text-orange-400 font-medium text-sm transition-colors duration-150"
              onClick={() => setIsMenuOpen(false)}
            >
              bUV
            </Link>
            <Link
              to="/ueber-uns"
              className="block py-3 text-white hover:text-orange-400 font-medium text-sm transition-colors duration-150"
              onClick={() => setIsMenuOpen(false)}
            >
              Über uns
            </Link>
            <Link
              to="/kontakt"
              className="block py-3 text-white hover:text-orange-400 font-medium text-sm transition-colors duration-150"
              onClick={() => setIsMenuOpen(false)}
            >
              Kontakt
            </Link>
            
            <div className="pt-4">
              <button 
                className="w-full bg-acencia-accent hover:bg-acencia-accent-hover text-white py-3 rounded-lg text-sm font-medium transition-colors duration-200"
                onClick={() => {
                  window.open('https://www.smartcloudservices.de/acencia/login/login.do', '_blank');
                  setIsMenuOpen(false);
                }}
              >
                Login Portal
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;