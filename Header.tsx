
import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from './constants';
import type { NavLink } from './types';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const NavLinks: React.FC<{className?: string}> = ({ className }) => (
    <nav className={className}>
      {NAV_LINKS.map((link: NavLink) => (
        <a
          key={link.label}
          href={link.href}
          onClick={(e) => handleNavClick(e, link.href)}
          className="text-gray-700 hover:text-primary transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="text-2xl font-bold text-gray-800">
              SSH <span className="text-primary">SoftTech</span>
            </a>
          </div>
          <div className="hidden md:block">
            <NavLinks className="ml-10 flex items-baseline space-x-4" />
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <NavLinks className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col" />
        </div>
      )}
    </header>
  );
};

export default Header;
