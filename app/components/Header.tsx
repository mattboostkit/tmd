'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Heart, Phone, Mail, ChevronDown, Sparkles } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    {
      name: 'About Us',
      href: '#about',
      dropdown: [
        { name: 'Our Mission', href: '#mission' },
        { name: 'Our Team', href: '#team' },
        { name: 'Impact', href: '#impact' },
      ],
    },
    {
      name: 'What We Do',
      href: '#services',
      dropdown: [
        { name: 'Wish Fulfillment', href: '#wishes' },
        { name: 'Family Support', href: '#family-support' },
        { name: 'Memory Making', href: '#memories' },
        { name: 'Sibling Support', href: '#siblings' },
      ],
    },
    {
      name: 'Get Involved',
      href: '#get-involved',
      dropdown: [
        { name: 'Volunteer', href: '#volunteer' },
        { name: 'Fundraise', href: '#fundraise' },
        { name: 'Corporate Partnership', href: '#corporate' },
        { name: 'Events', href: '#events' },
      ],
    },
    {
      name: 'Stories',
      href: '#stories',
    },
    {
      name: 'News & Events',
      href: '#news',
    },
    {
      name: 'Contact',
      href: '#contact',
    },
  ];

  return (
    <>
      <div className="w-full bg-gradient-to-r from-purple-600 to-purple-700">
        <div className="container flex justify-between items-center text-sm text-white py-3">
          <div className="flex items-center gap-4">
            <a href="tel:01892956460" className="flex items-center gap-1 hover:text-yellow-300 transition-colors">
              <Phone size={14} />
              <span className="font-medium">01892 956 460</span>
            </a>
            <a href="mailto:hello@taylormadedreams.org.uk" className="hidden sm:flex items-center gap-1 hover:text-yellow-300 transition-colors">
              <Mail size={14} />
              <span className="font-medium">hello@taylormadedreams.org.uk</span>
            </a>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <span className="font-medium">Follow us:</span>
            <div className="flex gap-3">
              {['Facebook', 'Twitter', 'Instagram', 'YouTube'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  aria-label={social}
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 w-full bg-white z-50 transition-all duration-300 ${
          isScrolled ? 'shadow-xl py-3' : 'py-5'
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <Sparkles className="text-yellow-400 w-10 h-10 absolute -top-2 -left-2 animate-bounce-slow" />
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform">
                  <span className="text-white font-bold text-xl">T</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
                  Taylor Made Dreams
                </span>
                <span className="text-xs text-gray-600 font-medium">
                  Bringing dreams to life for children
                </span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-6">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 text-gray-700 hover:text-purple-600 transition-colors font-semibold py-2"
                  >
                    {item.name}
                    {item.dropdown && <ChevronDown size={16} />}
                  </Link>
                  {item.dropdown && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl py-3 animate-fadeInUp border-2 border-purple-100">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors font-medium"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <Link
                href="#donate"
                className="btn btn-primary hidden md:flex"
              >
                <Heart size={18} className="mr-2" />
                Donate Now
              </Link>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-xl hover:bg-purple-50 transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X size={24} className="text-purple-600" />
                ) : (
                  <Menu size={24} className="text-purple-600" />
                )}
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl animate-slideInLeft border-t-2 border-purple-100">
            <nav className="container py-6">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block py-3 text-gray-700 hover:text-purple-600 transition-colors font-semibold text-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="pl-6 pb-2">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block py-2 text-sm text-gray-600 hover:text-purple-600 transition-colors font-medium"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="#donate"
                className="btn btn-primary w-full mt-6"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Heart size={18} className="mr-2" />
                Donate Now
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;