'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, Linkedin, Heart, Shield, Award, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Mission', href: '#mission' },
    { name: 'Our Team', href: '#team' },
    { name: 'Impact Report', href: '#impact' },
    { name: 'News & Media', href: '#news' },
  ];

  const supportLinks = [
    { name: 'Make a Donation', href: '#donate' },
    { name: 'Monthly Giving', href: '#monthly' },
    { name: 'Volunteer', href: '#volunteer' },
    { name: 'Fundraise for Us', href: '#fundraise' },
    { name: 'Corporate Partnership', href: '#corporate' },
    { name: 'Leave a Legacy', href: '#legacy' },
  ];

  const familyLinks = [
    { name: 'Request Support', href: '#request' },
    { name: 'Our Services', href: '#services' },
    { name: 'Family Resources', href: '#resources' },
    { name: 'Emergency Support', href: '#emergency' },
    { name: 'FAQs', href: '#faqs' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/legal/privacy' },
    { name: 'Terms & Conditions', href: '/legal/terms' },
    { name: 'Cookie Policy', href: '/legal/cookies' },
    { name: 'Safeguarding Policy', href: '/legal/safeguarding' },
    { name: 'Complaints Procedure', href: '/legal/complaints' },
  ];

  const certifications = [
    { name: 'Charity Commission', logo: 'CC', description: 'Registered' },
    { name: 'Fundraising Regulator', logo: 'FR', description: 'Member' },
    { name: 'ISO 9001', logo: 'ISO', description: 'Certified' },
    { name: 'Living Wage', logo: 'LW', description: 'Employer' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com', color: 'hover:bg-blue-600' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com', color: 'hover:bg-sky-500' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com', color: 'hover:bg-pink-600' },
    { name: 'Youtube', icon: Youtube, href: 'https://youtube.com', color: 'hover:bg-red-600' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com', color: 'hover:bg-blue-700' },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="container py-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-4">Stay Connected</h3>
              <p className="text-gray-400 mb-6">
                Join our community and receive updates on how we&apos;re making dreams come true
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:border-teal-500 focus:bg-gray-700"
                />
                <button className="btn btn-secondary">
                  Subscribe
                </button>
              </form>
              <p className="text-xs text-gray-500 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-teal-700 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-2xl">TMD</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Taylor Made Dreams</h3>
              <p className="text-sm text-gray-400">
                Sussex Children&apos;s Charity bringing dreams to life for children with life-limiting conditions.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-2 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2.5 bg-gray-800 rounded-lg transition-all ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>

            {/* Charity Number */}
            <div className="text-sm text-gray-500">
              <p className="flex items-center gap-2 mb-2">
                <Shield size={16} className="text-teal-500" />
                Registered Charity No. 1158178
              </p>
              <p className="flex items-center gap-2">
                <Award size={16} className="text-yellow-500" />
                Est. 2014
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-teal-400">About</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-teal-400">Get Involved</h4>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-1"
                  >
                    {link.name === 'Make a Donation' && <Heart size={14} className="text-red-500" />}
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Family Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-teal-400">For Families</h4>
            <ul className="space-y-2">
              {familyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-teal-400">Contact Us</h4>
            <div className="space-y-3">
              <a
                href="tel:01892956460"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
              >
                <Phone size={16} className="text-teal-500" />
                <span>01892 956 460</span>
              </a>
              <a
                href="mailto:hello@taylormadedreams.org.uk"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
              >
                <Mail size={16} className="text-teal-500" />
                <span>hello@taylormadedreams.org.uk</span>
              </a>
              <div className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-teal-500" />
                <span>
                  Office 60, Basepoint<br />
                  Pine Grove, Crowborough<br />
                  East Sussex TN6 1DH
                </span>
              </div>
            </div>

            {/* Office Hours */}
            <div className="mt-4 p-3 bg-gray-800/50 rounded-lg">
              <p className="text-xs font-semibold text-gray-300 mb-1">Office Hours</p>
              <p className="text-xs text-gray-500">
                Mon-Fri: 9:00 AM - 5:00 PM<br />
                Weekend: By appointment
              </p>
            </div>
          </div>
        </div>

        {/* Certifications & Accreditations */}
        <div className="border-t border-gray-800 mt-12 pt-12">
          <div className="text-center mb-8">
            <h4 className="text-lg font-semibold mb-2">Accreditations & Memberships</h4>
            <p className="text-sm text-gray-500">Meeting the highest standards in charity governance</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-3 bg-gray-800/30 px-4 py-2 rounded-lg"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center">
                  <span className="text-xs font-bold text-gray-300">{cert.logo}</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-300">{cert.name}</p>
                  <p className="text-xs text-gray-500">{cert.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-4 text-xs">
              {legalLinks.map((link, index) => (
                <div key={link.name} className="flex items-center gap-4">
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                  {index < legalLinks.length - 1 && (
                    <span className="text-gray-700">|</span>
                  )}
                </div>
              ))}
            </div>
            <div className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} Taylor Made Dreams. All rights reserved. Website by Professional Design Co.
            </div>
          </div>
        </div>

        {/* Donation CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-12 p-8 bg-gradient-to-r from-teal-900/50 to-teal-800/50 rounded-xl border border-teal-700/50"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center animate-pulse">
                <Heart className="text-white" size={24} />
              </div>
              <div>
                <p className="font-bold text-lg">Help us make more dreams come true</p>
                <p className="text-sm text-gray-400">Your donation can change a child&apos;s life</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Link href="#donate" className="btn btn-secondary">
                Donate Now
              </Link>
              <Link href="#monthly" className="btn btn-outline">
                Monthly Giving
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Recognition */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-600">
            <CheckCircle className="inline w-4 h-4 text-green-500 mr-1" />
            Independently verified by the Fundraising Regulator |
            <span className="mx-2">100% Transparency</span> |
            <span className="ml-2">GDPR Compliant</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
