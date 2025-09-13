'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Heart, Users, Star, ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Bringing Dreams",
      subtitle: "To Life ✨",
      description: "We create magical moments and lasting memories for children and families facing life's toughest challenges.",
      bgColor: "from-purple-400 via-pink-300 to-yellow-300",
    },
    {
      title: "Every Child",
      subtitle: "Deserves Magic 🌟",
      description: "Through wish fulfillment and family support, we bring joy, hope, and precious memories to those who need it most.",
      bgColor: "from-blue-400 via-purple-400 to-pink-400",
    },
    {
      title: "Together We",
      subtitle: "Make Dreams Reality 💫",
      description: "Your support helps us continue our mission of bringing smiles to brave children and their families.",
      bgColor: "from-yellow-400 via-orange-400 to-pink-400",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const stats = [
    { icon: Heart, value: "500+", label: "Dreams Fulfilled", color: "text-pink-500" },
    { icon: Users, value: "2000+", label: "Families Supported", color: "text-purple-500" },
    { icon: Star, value: "10+", label: "Years of Magic", color: "text-yellow-500" },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${slide.bgColor} opacity-20`} />
          </div>
        ))}

        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-20 animate-float" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-300 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-pink-300 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 container py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fadeInUp">
            <Sparkles className="w-16 h-16 text-yellow-400 mx-auto mb-6 animate-bounce-slow" />
            <h1 className="mb-6 leading-tight">
              <span className="gradient-text">{slides[currentSlide].title}</span>
              <span className="block text-purple-600 mt-2">
                {slides[currentSlide].subtitle}
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-700 font-medium max-w-3xl mx-auto">
              {slides[currentSlide].description}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="#donate" className="btn btn-primary text-lg">
                <Heart size={22} className="mr-2" />
                Make a Donation
              </Link>
              <Link href="#about" className="btn btn-secondary text-lg">
                Learn Our Story
                <ArrowRight size={22} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all rounded-full ${
              index === currentSlide
                ? 'w-12 h-3 bg-purple-600'
                : 'w-3 h-3 bg-purple-300 hover:bg-purple-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;