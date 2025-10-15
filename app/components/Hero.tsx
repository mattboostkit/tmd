'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, ArrowRight, Play, Users, Calendar, Target } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const slides = [
    {
      title: "Bringing Dreams to Life",
      subtitle: "For Children with Life-Limiting Conditions",
      description: "Creating magical moments and lasting memories for children and their families across Sussex",
      image: "https://images.unsplash.com/photo-1576673192923-c6e9c8e6c4d8?q=80&w=2940",
      cta: "Start Your Journey",
      stats: { label: "Dreams Fulfilled", value: "500+" }
    },
    {
      title: "Every Child Deserves Magic",
      subtitle: "Supporting Families Through Difficult Times",
      description: "Providing respite, joy, and unforgettable experiences when families need it most",
      image: "https://images.unsplash.com/photo-1540479859555-17af45c78602?q=80&w=2940",
      cta: "Make a Difference",
      stats: { label: "Families Supported", value: "1,200+" }
    },
    {
      title: "Creating Lasting Memories",
      subtitle: "Together We Can Make Dreams Come True",
      description: "Join our community of supporters making a real difference in children's lives",
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=2936",
      cta: "Get Involved",
      stats: { label: "Years of Impact", value: "15+" }
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const quickActions = [
    { icon: Heart, label: "Donate Now", color: "text-red-500", href: "#donate" },
    { icon: Users, label: "Volunteer", color: "text-teal-500", href: "#volunteer" },
    { icon: Calendar, label: "Events", color: "text-yellow-500", href: "#news" },
    { icon: Target, label: "Our Impact", color: "text-purple-500", href: "#stats-section" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: currentSlide === index ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6"
          >
            <span className="flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
            </span>
            <span className="text-white text-sm font-medium">Sussex Children&apos;s Charity</span>
          </motion.div>

          {/* Main Headlines */}
          <motion.h1
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-4"
          >
            {slides[currentSlide].title}
          </motion.h1>

          <motion.p
            key={`subtitle-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-yellow-300 mb-6"
          >
            {slides[currentSlide].subtitle}
          </motion.p>

          <motion.p
            key={`desc-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto"
          >
            {slides[currentSlide].description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link href="#donate" className="btn btn-primary group inline-flex items-center whitespace-nowrap">
              <Heart className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" aria-hidden="true" />
              Make a Donation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>

            <button
              onClick={() => setVideoModalOpen(true)}
              className="btn bg-white/10 backdrop-blur-md text-white border-2 border-white/30 hover:bg-white/20 inline-flex items-center whitespace-nowrap"
              type="button"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Our Story
            </button>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto"
          >
            {quickActions.map((action, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-md rounded-lg hover:bg-white/20 transition-all"
              >
                <Link
                  href={action.href}
                  className="flex flex-col items-center gap-2 p-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300 rounded-lg"
                >
                  <action.icon className={`w-6 h-6 ${action.color}`} aria-hidden="true" />
                  <span className="text-white text-sm font-medium text-center">{action.label}</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Impact Counter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 bg-white/10 backdrop-blur-md rounded-xl p-4 inline-flex items-center gap-4"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300">
                {slides[currentSlide].stats.value}
              </div>
              <div className="text-sm text-white/80">
                {slides[currentSlide].stats.label}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 transition-all duration-300 rounded-full ${
                currentSlide === index
                  ? 'w-8 bg-yellow-400'
                  : 'w-2 bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Mouse Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
          />
        </div>
      </motion.div>

      {/* Video Modal */}
      {videoModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6"
          onClick={() => setVideoModalOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring" }}
            className="relative bg-white rounded-xl overflow-hidden max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-4 right-4 z-10 bg-white/10 backdrop-blur-md rounded-full p-2 hover:bg-white/20 transition-colors"
            >
              <span className="text-white text-2xl">&times;</span>
            </button>
            <div className="aspect-video bg-gray-900 flex items-center justify-center">
              <Play className="w-20 h-20 text-white/50" />
              <p className="text-white/70 ml-4">Video player placeholder</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Hero;
