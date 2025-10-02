'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  type NavItem = { name: string; path: string; hasDropdown?: boolean };
  const navItems: NavItem[] = [
    { name: 'Services', path: '/services' },
    // { name: 'Products', path: '/portfolio', hasDropdown: true },
    { name: 'Industries', path: '/industries' },
    { name: 'About Us', path: '/about-us' },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-xs z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex justify-end items-center py-2 text-sm text-gray-600 border-b border-gray-100">
          <div className="flex space-x-6">
            <Link
              href="/blog"
              className="hover:text-gray-900 transition-colors"
            >
              Articles
            </Link>
            <Link
              href="/careers"
              className="hover:text-gray-900 transition-colors"
            >
              Careers
            </Link>
          </div>
        </div>

        {/* Main navigation */}
        <div className="py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/bravsys-logo.png"
              alt="BRAVSYS Logo"
              width={124}
              height={30}
              className="h-8 md:h-10"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.path}
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center"
                >
                  {item.name}
                  {item.hasDropdown ? (
                    <ChevronDown size={16} className="ml-1" />
                  ) : null}
                </Link>
              </div>
            ))}
            <Link href="/contact">
              <Button className="gradient-bg hover:opacity-90 text-primary-foreground px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                🚀 Free Consultation
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-100 animate-slide-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="text-gray-700 py-2 hover:text-gray-900 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
              <Button className="gradient-bg hover:opacity-90 text-primary-foreground w-full py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                🚀 Free Consultation
              </Button>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
