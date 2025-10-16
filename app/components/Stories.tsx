'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Quote, Heart, Calendar, MapPin, Play, Star } from 'lucide-react';

const Stories = () => {
  const [currentStory, setCurrentStory] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  const stories = [
    {
      id: 1,
      name: "Sophie's Dream Day",
      age: 8,
      condition: "Rare genetic condition",
      location: "Brighton, Sussex",
      date: "October 2024",
      image: "https://images.unsplash.com/photo-1573495627361-d9b87960b12d?q=80&w=2940",
      video: true,
      dream: "To meet her favorite author and illustrator",
      quote: "I couldn't believe it when I walked into the room and saw all my favorite book characters come to life! It was like stepping into a magical world.",
      impact: "Sophie's confidence has soared since her dream day. She's now writing her own stories and wants to be an author.",
      parent: {
        name: "Emma, Sophie's Mum",
        quote: "Taylor Made Dreams didn't just grant a wish; they created an experience that has fundamentally changed Sophie's outlook on life. The attention to detail was extraordinary.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200"
      },
      stats: {
        volunteers: 12,
        hoursPlanning: 48,
        smilesCreated: "Countless"
      },
      tags: ["Literary Dreams", "Creative Arts", "Confidence Building"]
    },
    {
      id: 2,
      name: "Oliver's Space Adventure",
      age: 10,
      condition: "Life-limiting heart condition",
      location: "Hastings, Sussex",
      date: "September 2024",
      image: "https://images.unsplash.com/photo-1516733968668-dbdce39c4651?q=80&w=2940",
      video: false,
      dream: "To experience zero gravity and meet an astronaut",
      quote: "When I was floating in the zero-gravity chamber, I forgot all about being ill. For those moments, I was just a kid living my dream of being an astronaut!",
      impact: "Oliver's experience has inspired him to pursue science despite his challenges. He's now the top student in his science class.",
      parent: {
        name: "David, Oliver's Dad",
        quote: "The team went to incredible lengths to make this happen. They arranged for a real astronaut to video call Oliver. It gave our whole family hope during our darkest times.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200"
      },
      stats: {
        volunteers: 15,
        hoursPlanning: 72,
        smilesCreated: "Infinite"
      },
      tags: ["STEM Dreams", "Adventure", "Educational"]
    },
    {
      id: 3,
      name: "Lily's Musical Moment",
      age: 12,
      condition: "Progressive neurological condition",
      location: "Lewes, Sussex",
      date: "August 2024",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2940",
      video: true,
      dream: "To record a song in a professional studio",
      quote: "Hearing my voice on a real recording was incredible. The producers treated me like a real star, and for that day, I truly felt like one.",
      impact: "The recording has been shared with family worldwide. Lily's music teacher says her confidence has transformed her participation in class.",
      parent: {
        name: "Sarah, Lily's Mum",
        quote: "They didn't just book a studio; they arranged for professional musicians, a vocal coach, and even created album artwork. The joy it brought our entire family is immeasurable.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200"
      },
      stats: {
        volunteers: 8,
        hoursPlanning: 36,
        smilesCreated: "Harmonious"
      },
      tags: ["Musical Dreams", "Creative Expression", "Family Memories"]
    }
  ];

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const story = stories[currentStory];

  return (
    <section id="stories" className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden scroll-mt-24">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 left-20 w-96 h-96 bg-teal-500 rounded-full filter blur-3xl" />
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-yellow-500 rounded-full filter blur-3xl" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Stories That Inspire
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every dream we fulfill creates ripples of hope that extend far beyond a single day
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={story.id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="grid lg:grid-cols-2">
                {/* Image/Video Side */}
                <div className="relative h-96 lg:h-auto">
                  <Image
                    src={story.image}
                    alt={story.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {story.video && (
                    <button
                      onClick={() => setShowVideo(true)}
                      className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md rounded-full p-4 hover:bg-white transition-all group"
                    >
                      <Play className="w-6 h-6 text-teal-600 group-hover:scale-110 transition-transform" />
                    </button>
                  )}

                  <div className="absolute bottom-6 right-6 flex gap-2">
                    {story.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="badge badge-primary backdrop-blur-md bg-white/90"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content Side */}
                <div className="p-8 lg:p-12">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-2">
                        {story.name}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-500" />
                          Age {story.age}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4 text-teal-600" />
                          {story.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4 text-brand-600" />
                          {story.date}
                        </span>
                      </div>
                    </div>
                    <Quote className="w-12 h-12 text-teal-200" />
                  </div>

                  <div className="mb-6">
                    <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-2">
                      The Dream
                    </p>
                    <p className="text-lg font-medium text-gray-900">
                      {story.dream}
                    </p>
                  </div>

                  <blockquote className="border-l-4 border-teal-500 pl-6 mb-6">
                    <p className="text-lg italic text-gray-700 mb-4">
                      {story.quote}
                    </p>
                    <cite className="text-sm font-medium text-gray-900">
                      Ã¢â¬â {story.name.split("'")[0]}
                    </cite>
                  </blockquote>

                  <div className="bg-gray-50 rounded-xl p-6 mb-6">
                    <p className="text-sm font-semibold text-gray-700 mb-2">The Impact</p>
                    <p className="text-gray-600">
                      {story.impact}
                    </p>
                  </div>

                  {/* Parent Testimonial */}
                  <div className="border-t pt-6">
                    <div className="flex items-start gap-4">
                      <Image
                        src={story.parent.image}
                        alt={story.parent.name}
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <p className="text-sm italic text-gray-600 mb-2">
                          {story.parent.quote}
                        </p>
                        <p className="text-sm font-medium text-gray-900">
                          {story.parent.name}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-teal-600">
                        {story.stats.volunteers}
                      </div>
                      <div className="text-xs text-gray-600">Volunteers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-teal-600">
                        {story.stats.hoursPlanning}
                      </div>
                      <div className="text-xs text-gray-600">Hours Planning</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-teal-600">
                        {story.stats.smilesCreated}
                      </div>
                      <div className="text-xs text-gray-600">Smiles Created</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={prevStory}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all hover:-translate-x-1 group"
              aria-label="Previous story"
            >
              <ChevronLeft size={24} className="text-teal-600 group-hover:text-teal-700" />
            </button>

            <div className="flex gap-2">
              {stories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStory(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentStory
                      ? 'w-8 bg-teal-600'
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to story ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextStory}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all hover:translate-x-1 group"
              aria-label="Next story"
            >
              <ChevronRight size={24} className="text-teal-600 group-hover:text-teal-700" />
            </button>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Every story begins with someone who cares. Will you help us write the next chapter?
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#donate" className="btn btn-primary">
              <Heart size={20} className="mr-2" />
              Help Create More Stories
            </a>
            <a href="#contact" className="btn btn-outline">
              Share Your Story
            </a>
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6"
          onClick={() => setShowVideo(false)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="relative bg-white rounded-xl overflow-hidden max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-4 right-4 z-10 bg-white/10 backdrop-blur-md rounded-full p-2 hover:bg-white/20"
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

export default Stories;
