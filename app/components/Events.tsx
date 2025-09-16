'use client';

import { Calendar, MapPin, Clock, ArrowRight, Sparkles, Heart, Users } from 'lucide-react';

const Events = () => {
  const events = [
    {
      title: "Annual Charity Gala",
      date: "March 15, 2024",
      time: "7:00 PM",
      location: "The Grand Hotel, Brighton",
      description: "Join us for an elegant evening of fundraising, entertainment, and inspiration.",
      type: "Fundraiser",
      icon: Heart,
      color: "from-pink-400 to-pink-600",
      bgColor: "bg-pink-50",
    },
    {
      title: "Family Fun Day",
      date: "April 20, 2024",
      time: "11:00 AM",
      location: "Crowborough Community Centre",
      description: "A day of fun activities, games, and entertainment for the whole family.",
      type: "Community",
      icon: Users,
      color: "from-green-400 to-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Dreams Marathon",
      date: "May 5, 2024",
      time: "8:00 AM",
      location: "Brighton Seafront",
      description: "Run, walk, or cheer in our annual marathon to support children's dreams.",
      type: "Sports",
      icon: Sparkles,
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-50",
    },
  ];

  const news = [
    {
      title: "Record-Breaking Year: 100 Dreams Fulfilled",
      date: "January 10, 2024",
      excerpt: "2023 marked our most impactful year yet, with over 100 children's dreams brought to life.",
      category: "Impact",
      color: "text-purple-600",
    },
    {
      title: "New Partnership with Local Businesses",
      date: "January 5, 2024",
      excerpt: "We're thrilled to announce new partnerships that will expand our reach and services.",
      category: "Partnership",
      color: "text-blue-600",
    },
    {
      title: "Volunteer Spotlight: Making a Difference",
      date: "December 28, 2023",
      excerpt: "Meet the incredible volunteers who dedicate their time to bringing smiles to children.",
      category: "Community",
      color: "text-green-600",
    },
  ];

  const getTypeStyles = (type: string) => {
    switch (type) {
      case 'Fundraiser':
        return 'bg-pink-100 text-pink-700';
      case 'Community':
        return 'bg-green-100 text-green-700';
      case 'Sports':
        return 'bg-blue-100 text-blue-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <section id="news" className="py-20 bg-white scroll-mt-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-purple-700">News & Events</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
            Stay updated with our latest news and join us at upcoming events to support our mission.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center text-purple-700">Upcoming Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div
                key={index}
                className="card hover-lift animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`${event.bgColor} h-48 rounded-t-2xl flex items-center justify-center`}>
                  <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${event.color} flex items-center justify-center shadow-xl`}>
                    <event.icon size={48} className="text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold mb-3 ${getTypeStyles(event.type)}`}>
                    {event.type}
                  </span>
                  <h4 className="text-xl font-bold mb-3 text-purple-700">{event.title}</h4>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-purple-500" />
                      <span className="font-medium">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-purple-500" />
                      <span className="font-medium">{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-purple-500" />
                      <span className="font-medium">{event.location}</span>
                    </div>
                  </div>
                  <button className="mt-4 text-purple-600 font-bold flex items-center gap-1 hover:gap-2 transition-all">
                    Learn More
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold mb-8 text-center text-purple-700">Latest News</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((article, index) => (
              <article
                key={index}
                className="bg-gradient-to-b from-purple-50 to-white rounded-2xl p-6 hover-lift animate-fadeInUp border-2 border-purple-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className={`text-sm font-bold ${article.color} mb-2 block`}>
                  {article.category}
                </span>
                <p className="text-sm text-gray-500 mb-3">
                  {article.date}
                </p>
                <h4 className="text-xl font-bold mb-3 text-purple-700">{article.title}</h4>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <button className="text-purple-600 font-bold flex items-center gap-1 hover:gap-2 transition-all">
                  Read More
                  <ArrowRight size={16} />
                </button>
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
