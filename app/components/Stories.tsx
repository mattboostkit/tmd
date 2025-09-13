'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Stories = () => {
  const [currentStory, setCurrentStory] = useState(0);

  const stories = [
    {
      name: "Emma's Story",
      age: "Age 8",
      image: "/api/placeholder/400/400",
      quote: "Taylor Made Dreams made my princess dream come true! I got to meet real princesses and have the best day ever.",
      parent: "Sarah, Emma's Mum",
      parentQuote: "The joy on Emma's face was priceless. Taylor Made Dreams gave us memories we'll treasure forever during such a difficult time.",
    },
    {
      name: "James's Adventure",
      age: "Age 10",
      image: "/api/placeholder/400/400",
      quote: "I always wanted to be a train driver, and they made it happen! It was the coolest day of my life.",
      parent: "Mark, James's Dad",
      parentQuote: "The team went above and beyond to make James's dream reality. Their kindness and attention to detail was incredible.",
    },
    {
      name: "Lily's Wish",
      age: "Age 6",
      image: "/api/placeholder/400/400",
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
    <section id="stories" className="py-20 bg-[var(--muted)]">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="mb-4" style={{ color: '#772477' }}>Stories of Hope</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every child we support has a unique story. These are just a few of the many dreams we&apos;ve had the privilege to bring to life.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div
                className="h-96 bg-cover bg-center"
                style={{
                  backgroundImage: `url('${stories[currentStory].image}')`,
                }}
              />
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <Quote size={40} className="mb-4" style={{ color: '#772477' }} />
                <h3 className="text-2xl font-bold mb-2">
                  {stories[currentStory].name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {stories[currentStory].age}
                </p>
                <p className="text-lg italic mb-6 text-gray-700">
                  &ldquo;{stories[currentStory].quote}&rdquo;
                </p>
                <div className="border-t pt-6">
                  <p className="font-semibold mb-2" style={{ color: '#772477' }}>
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
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all"
              aria-label="Previous story"
            >
              <ChevronLeft size={24} style={{ color: '#772477' }} />
            </button>
            <div className="flex gap-2">
              {stories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStory(index)}
                  className={`w-2 h-2 rounded-full transition-all`}
                  style={{
                    backgroundColor: index === currentStory ? '#772477' : '#d1d5db',
                    width: index === currentStory ? '32px' : '8px'
                  }}
                  aria-label={`Go to story ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextStory}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all"
              aria-label="Next story"
            >
              <ChevronRight size={24} style={{ color: '#772477' }} />
            </button>
          </div>
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="btn btn-outline">
            Share Your Story
          </a>
        </div>
      </div>
    </section>
  );
};

export default Stories;