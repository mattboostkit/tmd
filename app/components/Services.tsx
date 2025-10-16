'use client';

import { Sparkles, Home, Camera, Users, Heart, Sun, Gift, Phone, HandHeart } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Sparkles,
      title: "Wish Fulfillment",
      description: "Making dreams come true with personalized experiences tailored to each child's unique wishes.",
      color: "bg-brand-100",
      iconColor: "text-brand-600",
    },
    {
      icon: Home,
      title: "Family Respite",
      description: "Providing families with much-needed breaks and quality time together in comfortable settings.",
      color: "bg-teal-200/40",
      iconColor: "text-teal-500",
    },
    {
      icon: Camera,
      title: "Memory Making",
      description: "Creating lasting memories through photography, video, and special keepsake projects.",
      color: "bg-sunrise-300/30",
      iconColor: "text-sunrise-500",
    },
    {
      icon: Users,
      title: "Sibling Support",
      description: "Dedicated programs ensuring siblings feel included, supported, and valued.",
      color: "bg-gold-300/30",
      iconColor: "text-gold-400",
    },
    {
      icon: Heart,
      title: "Bereavement Support",
      description: "Compassionate support for families during and after their loss.",
      color: "bg-cloud-50",
      iconColor: "text-brand-500",
    },
    {
      icon: Sun,
      title: "Day Trips & Activities",
      description: "Fun-filled days out and activities designed to bring joy and normalcy.",
      color: "bg-sunrise-300/25",
      iconColor: "text-sunrise-500",
    },
    {
      icon: Gift,
      title: "Special Occasions",
      description: "Making birthdays, holidays, and milestones extra special with thoughtful celebrations.",
      color: "bg-brand-200/30",
      iconColor: "text-brand-500",
    },
    {
      icon: Phone,
      title: "24/7 Support Line",
      description: "Always here when families need someone to talk to, day or night.",
      color: "bg-brand-100",
      iconColor: "text-brand-600",
    },
    {
      icon: HandHeart,
      title: "Practical Support",
      description: "Help with everyday challenges, from transport to equipment and resources.",
      color: "bg-teal-200/40",
      iconColor: "text-teal-500",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white scroll-mt-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-brand-600">What We Do</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of services designed to support children with life-limiting conditions and their families at every step of their journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.color} p-8 rounded-2xl hover:transform hover:-translate-y-2 transition-all duration-300 animate-fadeIn`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <service.icon size={48} className={`${service.iconColor} mb-4`} />
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Every service we provide is completely free to families and tailored to their unique needs.
          </p>
          <a href="#contact" className="btn btn-primary">
            Access Our Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
