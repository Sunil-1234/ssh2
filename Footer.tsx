
import React from 'react';
import { NAV_LINKS,  CONTACT_INFO } from './constants';
import type { NavLink } from './types';

const Footer: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="text-2xl font-bold mb-4 inline-block">
              SSH <span className="text-primary">SoftTech</span>
            </a>
            <p className="text-gray-400">
              A team of passionate developers, designers, and strategists dedicated to bringing your ideas to life through technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link: NavLink) => (
                <li key={link.label}>
                  <a href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="text-gray-400 hover:text-white transition-colors duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
                <li className="leading-relaxed">{CONTACT_INFO.address}</li>
                <li className="pt-2">
                  <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors duration-300">{CONTACT_INFO.email}</a>
                </li>
                <li>
                  <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors duration-300">{CONTACT_INFO.phone}</a>
                </li>
            </ul>
          </div>

          
         
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} SSH SoftTech. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
