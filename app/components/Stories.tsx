'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Heart } from 'lucide-react';

const Stories = () => {
  const [currentStory, setCurrentStory] = useState(0);

  const stories = [
    {
      name: "Emma's Story",
      age: "Age 8",
      initial: "E",
      color: "from-pink-400 to-pink-600",
      quote: "Taylor Made Dreams made my princess dream come true! I got to meet real princesses and have the best day ever.",
      parent: "Sarah, Emma's Mum",
      parentQuote: "The joy on Emma's face was priceless. Taylor Made Dreams gave us memories we'll treasure forever during such a difficult time.",
    },
    {
      name: "James's Adventure",
      age: "Age 10",
      initial: "J",
      color: "from-blue-400 to-blue-600",
      quote: "I always wanted to be a train driver, and they made it happen! It was the coolest day of my life.",
      parent: "Mark, James's Dad",
      parentQuote: "The team went above and beyond to make James's dream reality. Their kindness and attention to detail was incredible.",
    },
    {
      name: "Lily's Wish",
      age: "Age 6",
      initial: "L",
      color: "from-purple-400 to-purple-600",
      quote: "I got to swim with dolphins! They were so friendly and made me laugh so much.",
      parent: "Rachel, Lily's Mum",
      parentQuote: "Taylor Made Dreams brought light into our darkest days. The memories they created are our most precious possessions.",
    },
  ];

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <section id="stories" className="py-20 section-primary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-purple-700">Stories of Hope</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
            Every child we support has a unique story. These are just a few of the many dreams we&apos;ve had the privilege to bring to life.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="card overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="h-96 flex items-center justify-center bg-gradient-to-br from-purple-100 to-pink-100">
                <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${stories[currentStory].color} flex items-center justify-center shadow-2xl`}>
                  <span className="text-6xl font-bold text-white">
                    {stories[currentStory].initial}
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <Quote size={40} className="text-purple-600 mb-4" />
                <h3 className="text-2xl font-bold mb-2 text-purple-700">
                  {stories[currentStory].name}
                </h3>
                <p className="text-gray-600 mb-4 font-medium">
                  {stories[currentStory].age}
                </p>
                <p className="text-lg italic mb-6 text-gray-700">
                  &ldquo;{stories[currentStory].quote}&rdquo;
                </p>
                <div className="border-t-2 border-purple-200 pt-6">
                  <p className="font-bold text-purple-700 mb-2">
                    {stories[currentStory].parent}
                  </p>
                  <p className="text-gray-600">
                    &ldquo;{stories[currentStory].parentQuote}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevStory}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all hover:-translate-x-1"
              aria-label="Previous story"
            >
              <ChevronLeft size={24} className="text-purple-600" />
            </button>
            <div className="flex gap-2">
              {stories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStory(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentStory
                      ? 'w-8 bg-purple-600'
                      : 'w-2 bg-purple-300'
                  }`}
                  aria-label={`Go to story ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextStory}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all hover:translate-x-1"
              aria-label="Next story"
            >
              <ChevronRight size={24} className="text-purple-600" />
            </button>
          </div>
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="btn btn-outline">
            <Heart size={20} className="mr-2" />
            Share Your Story
          </a>
        </div>
      </div>
    </section>
  );
};

export default Stories;