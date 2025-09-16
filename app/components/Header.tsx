'use client';



import { useState, useEffect } from 'react';

import Link from 'next/link';

import { Menu, X, Heart, Phone, Mail, ChevronDown, ChevronRight, Gift, HandHeart, Home, BookOpen, Newspaper, PenSquare } from 'lucide-react';


const Header = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);



  useEffect(() => {

    const handleScroll = () => {

      setIsScrolled(window.scrollY > 20);

    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, []);



  const navigation = [

    {

      name: 'About',

      href: '#about',

      icon: Home,

      megaMenu: {

        sections: [

          {

            title: 'Our Organization',

            links: [

              { name: 'Our Mission', href: '#mission', description: 'Learn about our purpose and values' },

              { name: 'Our Team', href: '#team', description: 'Meet the people behind our work' },

              { name: 'Our History', href: '#history', description: '15 years of making dreams come true' },

            ]

          },

          {

            title: 'Our Impact',

            links: [

              { name: 'Success Stories', href: '#stories', description: 'Read about the lives we\'ve touched' },

              { name: 'Annual Reports', href: '#reports', description: 'Transparent reporting on our work' },

              { name: 'Awards & Recognition', href: '#awards', description: 'Our achievements and milestones' },

            ]

          }

        ],

        featured: {

          title: 'Latest Impact Report',

          description: 'See how we\'ve helped over 1,200 families this year',

          image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400',

          link: '#impact-report'

        }

      }

    },

    {

      name: 'Our Work',

      href: '#services',

      icon: Gift,

      megaMenu: {

        sections: [

          {

            title: 'Direct Support',

            links: [

              { name: 'Wish Fulfillment', href: '#wishes', description: 'Making dreams come true for children' },

              { name: 'Family Days Out', href: '#family-days', description: 'Creating special memories together' },

              { name: 'Respite Care Support', href: '#respite', description: 'Giving families time to recharge' },

            ]

          },

          {

            title: 'Ongoing Programs',

            links: [

              { name: 'Sibling Support', href: '#siblings', description: 'Supporting brothers and sisters' },

              { name: 'Bereavement Support', href: '#bereavement', description: 'Helping families through loss' },

              { name: 'Emergency Fund', href: '#emergency', description: 'Immediate help when needed most' },

            ]

          }

        ],

        featured: {

          title: 'Dream of the Month',

          description: 'This month we\'re sending Sophie to meet her favorite author!',

          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',

          link: '#dream-month'

        }

      }

    },

    {

      name: 'Get Involved',

      href: '#get-involved',

      icon: HandHeart,

      megaMenu: {

        sections: [

          {

            title: 'Ways to Help',

            links: [

              { name: 'Make a Donation', href: '#donate', description: 'Every pound makes a difference' },

              { name: 'Monthly Giving', href: '#monthly', description: 'Become a Dream Maker with regular support' },

              { name: 'Leave a Legacy', href: '#legacy', description: 'Include us in your will' },

            ]

          },

          {

            title: 'Take Action',

            links: [

              { name: 'Volunteer With Us', href: '#volunteer', description: 'Give your time to help families' },

              { name: 'Fundraise', href: '#fundraise', description: 'Start your own fundraising campaign' },

              { name: 'Corporate Partnership', href: '#corporate', description: 'Partner with us as a business' },

            ]

          }

        ],

        featured: {

          title: 'Upcoming Event',

          description: 'Join our Annual Gala Dinner on March 15th',

          image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400',

          link: '#gala-2024'

        }

      }

    },

    {
      name: 'Stories',
      href: '#stories',
      icon: BookOpen,
    },
    {
      name: 'News & Events',
      href: '#news',
      icon: Newspaper,
    },
    {
      name: 'Blog',
      href: '/blog',
      icon: PenSquare,
    },
    {
      name: 'Contact',
      href: '#contact',
      icon: Phone,
    },
  ];



  return (

    <>

      {/* Top Bar */}

      <div className="w-full bg-gradient-to-r from-teal-700 to-teal-800 text-white">

        <div className="container flex justify-between items-center text-sm py-2">

          <div className="flex items-center gap-6">

            <a href="tel:01892956460" className="flex items-center gap-1.5 hover:text-yellow-300 transition-colors">

              <Phone size={14} />

              <span className="font-medium">01892 956 460</span>

            </a>

            <a href="mailto:hello@taylormadedreams.org.uk" className="hidden sm:flex items-center gap-1.5 hover:text-yellow-300 transition-colors">

              <Mail size={14} />

              <span className="font-medium">hello@taylormadedreams.org.uk</span>

            </a>

          </div>

          <div className="flex items-center gap-3">

            <span className="hidden md:block text-xs uppercase tracking-wider opacity-80">Registered Charity #1234567</span>

          </div>

        </div>

      </div>



      {/* Main Header */}

      <header

        className={`sticky top-0 w-full bg-white z-40 transition-all duration-300 ${

          isScrolled ? 'shadow-lg py-3' : 'py-4 shadow-sm'

        }`}

      >

        <div className="container">

          <div className="flex items-center justify-between">

            {/* Logo */}

            <Link href="/" className="flex items-center gap-3">

              <div className="w-14 h-14 bg-gradient-to-br from-teal-600 to-teal-700 rounded-lg flex items-center justify-center">

                <span className="text-white font-bold text-2xl">TMD</span>

              </div>

              <div className="flex flex-col">

                <span className="text-xl font-bold text-gray-900">

                  Taylor Made Dreams

                </span>

                <span className="text-xs text-gray-600">

                  Sussex Children&apos;s Charity

                </span>

              </div>

            </Link>



            {/* Desktop Navigation */}

          <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
              {navigation.map((item) => (

                <div

                  key={item.name}

                  className="relative"

                  onMouseEnter={() => item.megaMenu && setActiveMegaMenu(item.name)}

                  onMouseLeave={() => setActiveMegaMenu(null)}

                >

                  <Link

                    href={item.href}

                    className="flex items-center gap-1.5 px-4 py-2 text-gray-700 hover:text-teal-700 transition-colors font-medium"

                  >

                    {item.name}

                    {item.megaMenu && <ChevronDown size={14} className="opacity-60" />}

                  </Link>



                  {/* Mega Menu */}

                  {item.megaMenu && activeMegaMenu === item.name && (

                    <div className="absolute top-full left-0 mt-0 w-screen max-w-4xl bg-white shadow-2xl rounded-b-lg border-t-4 border-teal-600">

                      <div className="p-8">

                        <div className="grid grid-cols-3 gap-8">

                          {/* Menu Sections */}

                          <div className="col-span-2 grid grid-cols-2 gap-8">

                            {item.megaMenu.sections.map((section) => (

                              <div key={section.title}>

                                <h3 className="font-bold text-gray-900 mb-4">{section.title}</h3>

                                <ul className="space-y-3">

                                  {section.links.map((link) => (

                                    <li key={link.name}>

                                      <Link

                                        href={link.href}

                                        className="group block"

                                      >

                                        <div className="font-medium text-gray-700 group-hover:text-teal-600 transition-colors">

                                          {link.name}

                                        </div>

                                        <div className="text-sm text-gray-500 group-hover:text-gray-600">

                                          {link.description}

                                        </div>

                                      </Link>

                                    </li>

                                  ))}

                                </ul>

                              </div>

                            ))}

                          </div>



                          {/* Featured Section */}

                          <div className="border-l pl-8">

                            <div className="bg-gray-50 rounded-lg p-4">

                              <img

                                src={item.megaMenu.featured.image}

                                alt={item.megaMenu.featured.title}

                                className="w-full h-32 object-cover rounded-lg mb-4"

                              />

                              <h4 className="font-bold text-gray-900 mb-2">

                                {item.megaMenu.featured.title}

                              </h4>

                              <p className="text-sm text-gray-600 mb-3">

                                {item.megaMenu.featured.description}

                              </p>

                              <Link

                                href={item.megaMenu.featured.link}

                                className="text-teal-600 font-medium text-sm hover:text-teal-700"

                                aria-label={`Learn more about ${item.megaMenu.featured.title}`}

                              >

                                <span className="inline-flex items-center gap-1">

                                  Learn more

                                  <ChevronRight size={16} aria-hidden="true" />

                                </span>

                              </Link>

                            </div>

                          </div>

                        </div>

                      </div>

                    </div>

                  )}

                </div>

              ))}

            </nav>



            {/* CTA Buttons */}

            <div className="flex items-center gap-3">

              <Link

                href="#donate"

                className="btn-donate hidden md:flex"

              >

                <Heart size={18} className="mr-2" />

                Donate Now

              </Link>



              {/* Mobile Menu Toggle */}

              <button

                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}

                className="lg:hidden p-2.5 rounded-lg hover:bg-gray-100 transition-colors"

                aria-label="Toggle menu"

              >

                {isMobileMenuOpen ? (

                  <X size={24} className="text-gray-700" />

                ) : (

                  <Menu size={24} className="text-gray-700" />

                )}

              </button>

            </div>

          </div>

        </div>



        {/* Mobile Menu */}

        {isMobileMenuOpen && (

          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t">

            <nav className="container py-6" aria-label="Mobile primary">
              {navigation.map((item) => (

                <div key={item.name} className="border-b last:border-b-0">

                  <Link

                    href={item.href}

                    className="flex items-center justify-between py-4 text-gray-700 hover:text-teal-600 transition-colors font-medium"

                    onClick={() => setIsMobileMenuOpen(false)}

                  >

                    <span className="flex items-center gap-3">

                      <item.icon size={20} />

                      {item.name}

                    </span>

                    {item.megaMenu && <ChevronDown size={16} />}

                  </Link>

                  {item.megaMenu && (

                    <div className="pb-4">

                      {item.megaMenu.sections.map((section) => (

                        <div key={section.title} className="mb-4">

                          <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2 px-4">

                            {section.title}

                          </h4>

                          {section.links.map((link) => (

                            <Link

                              key={link.name}

                              href={link.href}

                              className="block px-8 py-2 text-sm text-gray-600 hover:text-teal-600 hover:bg-gray-50 transition-colors"

                              onClick={() => setIsMobileMenuOpen(false)}

                            >

                              {link.name}

                            </Link>

                          ))}

                        </div>

                      ))}

                    </div>

                  )}

                </div>

              ))}

              <Link

                href="#donate"

                className="btn-donate w-full mt-6"

                onClick={() => setIsMobileMenuOpen(false)}

              >

                <Heart size={18} className="mr-2" />

                Make a Donation

              </Link>

            </nav>

          </div>

        )}

      </header>

    </>

  );

};



export default Header;

