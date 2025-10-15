import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, Phone, Mail, MapPin, Users, Calendar, TrendingUp, ArrowRight, Home, Gift, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Supporting Families in Essex | Taylor Made Dreams',
  description: 'Taylor Made Dreams is expanding our vital support for children with life-limiting conditions and their families across Essex. Discover how we can help your family.',
};

export default function EssexPage() {
  const essexStats = [
    { icon: Heart, value: '50+', label: 'Essex Families Supported', color: 'text-red-600', bgColor: 'bg-red-50' },
    { icon: Gift, value: '35+', label: 'Dreams Fulfilled in Essex', color: 'text-teal-600', bgColor: 'bg-teal-50' },
    { icon: Users, value: '80+', label: 'Essex Volunteers', color: 'text-purple-600', bgColor: 'bg-purple-50' },
    { icon: TrendingUp, value: '120%', label: 'Growth in 2024', color: 'text-green-600', bgColor: 'bg-green-50' },
  ];

  const essexAreas = [
    { name: 'Chelmsford', status: 'Active', families: 12 },
    { name: 'Colchester', status: 'Active', families: 8 },
    { name: 'Basildon', status: 'Active', families: 7 },
    { name: 'Southend-on-Sea', status: 'Growing', families: 10 },
    { name: 'Harlow', status: 'New', families: 5 },
    { name: 'Brentwood', status: 'Active', families: 6 },
    { name: 'Thurrock', status: 'Growing', families: 4 },
    { name: 'Epping Forest', status: 'New', families: 3 },
  ];

  const essexPartners = [
    { name: 'Broomfield Hospital', location: 'Chelmsford', type: 'NHS Trust' },
    { name: 'Colchester Hospital', location: 'Colchester', type: 'NHS Trust' },
    { name: 'Southend University Hospital', location: 'Southend', type: 'NHS Trust' },
    { name: 'Little Havens Hospice', location: 'Benfleet', type: 'Children\'s Hospice' },
    { name: 'Essex County Council', location: 'Countywide', type: 'Local Authority' },
    { name: 'Rainbow Trust', location: 'Essex', type: 'Partner Charity' },
  ];

  const essexStories = [
    {
      name: 'Thomas\'s Railway Adventure',
      location: 'Chelmsford, Essex',
      age: 7,
      dream: 'To drive a real steam train',
      excerpt: 'Thomas spent a magical day at the Colne Valley Railway, fulfilling his dream of being a train driver despite his life-limiting heart condition.',
      image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=2940',
    },
    {
      name: 'Amelia\'s Beach Day',
      location: 'Southend-on-Sea, Essex',
      age: 9,
      dream: 'A special day at the seaside with her family',
      excerpt: 'Amelia and her family enjoyed a memorable day at Southend, complete with an accessible beach experience and a sunset boat trip.',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2940',
    },
  ];

  const essexEvents = [
    {
      title: 'Essex Family Fun Day',
      date: 'June 15, 2025',
      location: 'Hylands Park, Chelmsford',
      description: 'Join us for a special day of activities, games, and entertainment for families across Essex.',
    },
    {
      title: 'Southend Pier Walk',
      date: 'July 20, 2025',
      location: 'Southend Pier',
      description: 'Sponsored walk along the world\'s longest pleasure pier to raise funds for Essex families.',
    },
    {
      title: 'Colchester Castle Gala',
      date: 'September 8, 2025',
      location: 'Colchester Castle',
      description: 'An elegant evening of fundraising in Britain\'s oldest recorded town.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-700 to-teal-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500 rounded-full filter blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500 rounded-full filter blur-3xl" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6">
              <MapPin size={16} className="text-yellow-300" />
              <span className="text-sm font-medium">Serving Essex Communities</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Bringing Dreams to Life Across Essex
            </h1>

            <p className="text-xl text-white/90 mb-8 max-w-3xl">
              We're expanding our vital support for children with life-limiting conditions throughout Essex,
              from Southend to Harlow, Chelmsford to Colchester. Every Essex child deserves to dream.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="#get-help" className="btn-donate">
                <Heart size={20} className="mr-2" />
                Request Support in Essex
              </Link>
              <Link href="#essex-stories" className="btn bg-white/10 backdrop-blur-md text-white border-2 border-white/30 hover:bg-white/20">
                <Sparkles size={20} className="mr-2" />
                Read Essex Stories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Essex Impact Stats */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact in Essex</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Since expanding into Essex in 2022, we've been making a real difference to families across the county
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {essexStats.map((stat, index) => (
              <div key={index} className={`${stat.bgColor} rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2`}>
                <stat.icon size={48} className={`${stat.color} mx-auto mb-4`} />
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Where We Work in Essex</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            We're proud to support families across these Essex communities
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {essexAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900">{area.name}</h3>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    area.status === 'Active' ? 'bg-green-100 text-green-700' :
                    area.status === 'Growing' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-blue-100 text-blue-700'
                  }`}>
                    {area.status}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Users size={16} className="text-teal-600" />
                  <span>{area.families} families supported</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Essex Stories */}
      <section id="essex-stories" className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Essex Success Stories</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Meet some of the incredible children and families we've supported across Essex
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {essexStories.map((story, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all">
                <div className="relative h-64">
                  <Image
                    src={story.image}
                    alt={story.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="text-sm font-medium text-yellow-300 mb-1">{story.location}</div>
                    <h3 className="text-2xl font-bold">{story.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      Age {story.age}
                    </span>
                    <span className="flex items-center gap-1">
                      <Sparkles size={14} />
                      {story.dream}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4">{story.excerpt}</p>
                  <Link href="/#stories" className="text-teal-600 font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                    Read Full Story
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Essex Partners */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Our Essex Partners</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            We work alongside these incredible organisations to support Essex families
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {essexPartners.map((partner, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Home size={24} className="text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{partner.name}</h3>
                    <div className="text-sm text-gray-600">{partner.location}</div>
                    <div className="text-xs text-teal-600 font-medium mt-1">{partner.type}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Essex Events */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Essex Events</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Join us at these upcoming events supporting Essex families
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {essexEvents.map((event, index) => (
              <div key={index} className="bg-gradient-to-br from-teal-50 to-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border-2 border-teal-100">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-teal-700 rounded-xl flex items-center justify-center mb-4">
                  <Calendar size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                <div className="text-sm text-teal-600 font-medium mb-1">{event.date}</div>
                <div className="text-sm text-gray-600 mb-4 flex items-center gap-1">
                  <MapPin size={14} />
                  {event.location}
                </div>
                <p className="text-gray-700 text-sm mb-4">{event.description}</p>
                <Link href="/#news" className="text-teal-600 font-semibold text-sm inline-flex items-center gap-2 hover:gap-3 transition-all">
                  Learn More
                  <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Help Section */}
      <section id="get-help" className="py-20 bg-gradient-to-br from-teal-600 to-teal-800 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How to Access Our Essex Services
            </h2>
            <p className="text-xl text-white/90 mb-12">
              If you're an Essex family with a child who has a life-limiting condition, we're here to help
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone size={24} className="text-teal-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Call Us</h3>
                <a href="tel:01892956460" className="text-yellow-300 hover:text-yellow-200 transition-colors">
                  01892 956 460
                </a>
                <p className="text-sm text-white/70 mt-2">Mon-Fri, 9am-5pm</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail size={24} className="text-teal-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Email Us</h3>
                <a href="mailto:essex@taylormadedreams.org.uk" className="text-yellow-300 hover:text-yellow-200 transition-colors text-sm">
                  essex@taylormadedreams.org.uk
                </a>
                <p className="text-sm text-white/70 mt-2">We respond within 24 hours</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users size={24} className="text-teal-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Referral</h3>
                <p className="text-sm text-white/80">
                  Healthcare professionals and social workers can refer families directly
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/#contact" className="btn-donate">
                <Heart size={20} className="mr-2" />
                Request Support
              </Link>
              <Link href="/#volunteer" className="btn bg-white text-teal-700 hover:bg-gray-100">
                <Users size={20} className="mr-2" />
                Volunteer in Essex
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Support Essex CTA */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 md:p-12 text-center border-2 border-yellow-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Support Our Work in Essex
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Your donation helps us expand our services across Essex, supporting more families when they need it most
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/#donate" className="btn-donate">
                <Heart size={20} className="mr-2" />
                Donate to Essex Families
              </Link>
              <Link href="/#fundraise" className="btn btn-outline">
                <TrendingUp size={20} className="mr-2" />
                Fundraise for Essex
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
