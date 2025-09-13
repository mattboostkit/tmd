'use client';

import { Heart, Users, Star, Gift } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: Heart,
      value: "500+",
      label: "Dreams Fulfilled",
      color: "from-pink-400 to-pink-600",
      bgColor: "bg-pink-50"
    },
    {
      icon: Users,
      value: "2000+",
      label: "Families Supported",
      color: "from-purple-400 to-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: Star,
      value: "10+",
      label: "Years of Magic",
      color: "from-yellow-400 to-yellow-600",
      bgColor: "bg-yellow-50"
    },
    {
      icon: Gift,
      value: "1000+",
      label: "Special Moments",
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-50"
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-purple-50">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`${stat.bgColor} rounded-3xl p-8 text-center hover-lift animate-fadeInUp`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center transform hover:rotate-12 transition-transform`}>
                <stat.icon size={32} className="text-white" />
              </div>
              <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.value}
              </div>
              <div className="text-gray-700 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;