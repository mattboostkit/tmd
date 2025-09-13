'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, Heart, ExternalLink } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'What We Do', href: '#services' },
    { name: 'Stories', href: '#stories' },
    { name: 'Events', href: '#news' },
    { name: 'Contact', href: '#contact' },
  ];

  const supportLinks = [
    { name: 'Donate', href: '#donate' },
    { name: 'Volunteer', href: '#volunteer' },
    { name: 'Fundraise', href: '#fundraise' },
    { name: 'Corporate Partnership', href: '#corporate' },
    { name: 'Leave a Legacy', href: '#legacy' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms & Conditions', href: '#terms' },
    { name: 'Cookie Policy', href: '#cookies' },
    { name: 'Safeguarding', href: '#safeguarding' },
  ];

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Taylor Made Dreams</h3>
            <p className="text-gray-400 mb-4">
              Bringing dreams to life for children with shorter lives. Every child deserves their dreams to come true.
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Registered Charity No. 1234567
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-purple-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-purple-700 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-purple-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-purple-700 transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Support Us</h4>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a
                href="tel:01892956460"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Phone size={18} />
                <span>01892 956 460</span>
              </a>
              <a
                href="mailto:hello@taylormadedreams.org.uk"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={18} />
                <span>hello@taylormadedreams.org.uk</span>
              </a>
              <div className="flex items-start gap-2 text-gray-400">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>
                  Taylor Made Dreams<br />
                  Community Centre<br />
                  Pine Grove<br />
                  Crowborough<br />
                  East Sussex TN6 1FE
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-4 text-sm">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-500 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} Taylor Made Dreams. All rights reserved.
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 bg-gray-800 rounded-lg">
          <div className="flex items-center justify-center gap-3">
            <Heart className="text-pink-500" size={24} />
            <p className="text-center">
              <span className="font-semibold">Help us make more dreams come true</span>
              <Link href="#donate" className="ml-3 text-yellow-400 hover:underline">
                Donate Now →
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;