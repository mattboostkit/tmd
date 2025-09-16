'use client';

import { Heart, Users, Gift, Clock } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    icon: Heart,
    title: 'Compassionate Care',
    description: 'We provide emotional and practical support to families during their most challenging times.',
  },
  {
    icon: Gift,
    title: 'Wish Fulfilment',
    description: 'Creating magical experiences and lasting memories through personalised dream fulfilment.',
  },
  {
    icon: Users,
    title: 'Family Support',
    description: 'Supporting not just the child, but the entire family including siblings and parents.',
  },
  {
    icon: Clock,
    title: 'Lasting Impact',
    description: 'Building precious memories that families can treasure forever.',
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-[var(--muted)] scroll-mt-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slideInLeft space-y-6">
            <h2 className="mb-2" style={{ color: '#772477' }}>
              About Taylor Made Dreams
            </h2>
            <h3 id="mission" className="text-2xl font-semibold text-gray-900">
              Our Mission
            </h3>
            <p className="text-lg text-gray-700">
              Taylor Made Dreams is a children&apos;s charity dedicated to bringing dreams to life for children with life-limiting conditions. We help families create cherished memories when time together matters most.
            </p>
            <h3 id="team" className="text-2xl font-semibold text-gray-900">
              Our Team &amp; Approach
            </h3>
            <p className="text-gray-700">
              A multidisciplinary team of family liaison workers, counsellors, and volunteers coordinate bespoke experiences, holistic therapies, and respite so that every family member feels supported.
            </p>
            <h3 id="history" className="text-2xl font-semibold text-gray-900">
              Our History
            </h3>
            <p className="text-gray-700">
              Since 2014 we have grown from a small grassroots initiative to a regional charity working alongside hospitals, hospices, and schools across Sussex and the South East.
            </p>
            <Link href="#contact" className="btn btn-primary">
              Get in Touch
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <feature.icon size={40} className="mb-4" style={{ color: '#772477' }} aria-hidden="true" />
                <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
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
