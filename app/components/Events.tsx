'use client';

import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';

const Events = () => {
  const events = [
    {
      title: "Annual Charity Gala",
      date: "March 15, 2024",
      time: "7:00 PM",
      location: "The Grand Hotel, Brighton",
      description: "Join us for an elegant evening of fundraising, entertainment, and inspiration.",
      type: "Fundraiser",
      image: "/api/placeholder/400/250",
    },
    {
      title: "Family Fun Day",
      date: "April 20, 2024",
      time: "11:00 AM",
      location: "Crowborough Community Centre",
      description: "A day of fun activities, games, and entertainment for the whole family.",
      type: "Community",
      image: "/api/placeholder/400/250",
    },
    {
      title: "Dreams Marathon",
      date: "May 5, 2024",
      time: "8:00 AM",
      location: "Brighton Seafront",
      description: "Run, walk, or cheer in our annual marathon to support children's dreams.",
      type: "Sports",
      image: "/api/placeholder/400/250",
    },
  ];

  const news = [
    {
      title: "Record-Breaking Year: 100 Dreams Fulfilled",
      date: "January 10, 2024",
      excerpt: "2023 marked our most impactful year yet, with over 100 children's dreams brought to life.",
      image: "/api/placeholder/400/250",
    },
    {
      title: "New Partnership with Local Businesses",
      date: "January 5, 2024",
      excerpt: "We're thrilled to announce new partnerships that will expand our reach and services.",
      image: "/api/placeholder/400/250",
    },
    {
      title: "Volunteer Spotlight: Making a Difference",
      date: "December 28, 2023",
      excerpt: "Meet the incredible volunteers who dedicate their time to bringing smiles to children.",
      image: "/api/placeholder/400/250",
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Fundraiser':
        return 'bg-purple-100 text-purple-700';
      case 'Community':
        return 'bg-green-100 text-green-700';
      case 'Sports':
        return 'bg-blue-100 text-blue-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <section id="news" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="mb-4" style={{ color: '#772477' }}>News & Events</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with our latest news and join us at upcoming events to support our mission.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Upcoming Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url('${event.image}')` }}
                />
                <div className="p-6">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${getTypeColor(event.type)}`}>
                    {event.type}
                  </span>
                  <h4 className="text-xl font-bold mb-3">{event.title}</h4>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <button className="mt-4 font-semibold flex items-center gap-1 hover:gap-2 transition-all" style={{ color: '#772477' }}>
                    Learn More
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Latest News</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((article, index) => (
              <article
                key={index}
                className="bg-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url('${article.image}')` }}
                />
                <div className="p-6">
                  <p className="text-sm text-gray-600 mb-2">
                    {article.date}
                  </p>
                  <h4 className="text-xl font-bold mb-3">{article.title}</h4>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <button className="font-semibold flex items-center gap-1 hover:gap-2 transition-all" style={{ color: '#772477' }}>
                    Read More
                    <ArrowRight size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a href="#" className="btn btn-outline">
            View All News & Events
          </a>
        </div>
      </div>
    </section>
  );
};

export default Events;