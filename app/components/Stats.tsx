'use client';

import { motion } from 'framer-motion';
import { Heart, Users, Gift, Award, Shield, TrendingUp, Clock } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);

  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  const stats = [
    {
      icon: Heart,
      value: 523,
      suffix: "+",
      label: "Dreams Fulfilled",
      description: "Life-changing experiences delivered",
      color: "text-red-600",
      bgColor: "bg-red-50"
    },
    {
      icon: Users,
      value: 1247,
      suffix: "+",
      label: "Families Supported",
      description: "Families given hope and joy",
      color: "text-teal-600",
      bgColor: "bg-teal-50"
    },
    {
      icon: TrendingUp,
      value: 95,
      suffix: "%",
      label: "Impact Rate",
      description: "Of families report improved wellbeing",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Clock,
      value: 15,
      suffix: "+",
      label: "Years of Service",
      description: "Dedicated to Sussex families",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
  ];

  const trustBadges = [
    { name: "Charity Commission", logo: "CC", description: "Registered Charity No. 1158178" },
    { name: "Fundraising Regulator", logo: "FR", description: "Committed to best practice" },
    { name: "Living Wage", logo: "LW", description: "Accredited Living Wage Employer" },
    { name: "ISO 9001", logo: "ISO", description: "Quality Management Certified" },
  ];

  const Counter = ({ value, suffix, start }: { value: number; suffix: string; start: boolean }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (start) {
        const duration = 2000;
        const steps = 60;
        const increment = value / steps;
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= value) {
            setCount(value);
            clearInterval(timer);
          } else {
            setCount(Math.floor(current));
          }
        }, duration / steps);

        return () => clearInterval(timer);
      }
    }, [start, value]);

    return (
      <span className="impact-number">
        {count.toLocaleString()}{suffix}
      </span>
    );
  };

  return (
    <>
      {/* Impact Statistics Section */}
      <section
        id="stats-section"
        ref={sectionRef}
        className="py-20 section-gradient relative overflow-hidden scroll-mt-24"
      >
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500 rounded-full filter blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500 rounded-full filter blur-3xl" />
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every number represents a life touched, a family supported, and a dream brought to life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <div className={`${stat.bgColor} rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2`}>
                  <div className={`w-16 h-16 ${stat.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <stat.icon size={32} className={stat.color} />
                  </div>
                  <div className="mb-2">
                    <Counter value={stat.value} suffix={stat.suffix} start={isVisible} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{stat.label}</h3>
                  <p className="text-sm text-gray-600">{stat.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Annual Impact Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 bg-white rounded-2xl shadow-xl p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  2024 Impact Report
                </h3>
                <p className="text-gray-600 mb-6">
                  This year, we&apos;ve expanded our reach across Sussex, introducing new programs
                  and strengthening our support network. Our emergency response fund helped
                  47 families in crisis, while our sibling support program reached 200+ children.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="btn btn-primary">
                    Download Full Report
                  </button>
                  <button className="btn btn-outline">
                    View Online
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-6">
                  <Award className="w-10 h-10 text-teal-600 mb-3" />
                  <div className="text-2xl font-bold text-gray-900">Â£2.3M</div>
                  <div className="text-sm text-gray-600">Raised this year</div>
                </div>
                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6">
                  <Gift className="w-10 h-10 text-yellow-600 mb-3" />
                  <div className="text-2xl font-bold text-gray-900">89</div>
                  <div className="text-sm text-gray-600">Wishes granted</div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
                  <Users className="w-10 h-10 text-purple-600 mb-3" />
                  <div className="text-2xl font-bold text-gray-900">450+</div>
                  <div className="text-sm text-gray-600">Volunteers</div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
                  <Shield className="w-10 h-10 text-green-600 mb-3" />
                  <div className="text-2xl font-bold text-gray-900">100%</div>
                  <div className="text-sm text-gray-600">Transparent</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-12 bg-gray-50 border-y">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold text-gray-900 mb-1">Trusted & Accredited</h3>
              <p className="text-sm text-gray-600">Meeting the highest standards in charity governance</p>
            </div>
            <div className="flex flex-wrap items-center gap-8">
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="trust-badge hover:shadow-md transition-all">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center font-bold text-gray-700 group-hover:from-teal-100 group-hover:to-teal-200 transition-all">
                      {badge.logo}
                    </div>
                    <div className="ml-3">
                      <div className="font-semibold text-gray-900 text-sm">{badge.name}</div>
                      <div className="text-xs text-gray-500">{badge.description}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Stats;
