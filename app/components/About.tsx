'use client';

import { Heart, Users, Gift, Clock } from 'lucide-react';
import Link from 'next/link';

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "We provide emotional and practical support to families during their most challenging times.",
    },
    {
      icon: Gift,
      title: "Wish Fulfillment",
      description: "Creating magical experiences and lasting memories through personalized dream fulfillment.",
    },
    {
      icon: Users,
      title: "Family Support",
      description: "Supporting not just the child, but the entire family including siblings and parents.",
    },
    {
      icon: Clock,
      title: "Lasting Impact",
      description: "Building precious memories that families can treasure forever.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-[var(--muted)]">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slideInLeft">
            <h2 className="mb-6" style={{ color: '#772477' }}>
              About Taylor Made Dreams
            </h2>
            <p className="text-lg mb-6 text-gray-700">
              Taylor Made Dreams is a children&apos;s charity dedicated to bringing dreams to life for children with life-limiting conditions. Founded with love and compassion, we believe every child deserves to experience joy, create memories, and have their dreams come true.
            </p>
            <p className="mb-6 text-gray-700">
              Our mission extends beyond wish fulfillment. We provide comprehensive support services to families, including sibling support, memory making, bereavement support, and practical assistance during difficult times.
            </p>
            <p className="mb-8 text-gray-700">
              Since our inception, we have touched the lives of hundreds of families across Sussex and beyond, creating moments of happiness, hope, and connection when they&apos;re needed most.
            </p>
            <Link href="#contact" className="btn btn-primary">
              Get in Touch
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <feature.icon size={40} className="mb-4" style={{ color: '#772477' }} />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;