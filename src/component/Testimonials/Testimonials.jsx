import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import testimonial1 from '../../assets/team1.png';
import testimonial2 from '../../assets/team2.png';
import testimonial3 from '../../assets/team3.png';

const testimonialsData = [
  {
    id: 1,
    name: 'Shalima Hayden',
    role: 'Coffee Enthusiast',
    quote:
      'I have tested Caffeine Coffee many times. Really amazing to me! The rich aroma and perfect blend of flavors keep me coming back every single morning.',
    rating: 5,
    img: testimonial1,
  },
  {
    id: 2,
    name: 'Alex Morgan',
    role: 'Regular Customer',
    quote:
      'The best espresso in town! Their specialty blends are crafted to perfection. High quality, fresh taste, and superb service every time.',
    rating: 5,
    img: testimonial2,
  },
  {
    id: 3,
    name: 'Sophia Reynolds',
    role: 'Food Blogger',
    quote:
      'Absolutely love the Cappuccino Special! Rich, smooth, and delivered hot. Caffeine has quickly become my top choice for any coffee craving.',
    rating: 5,
    img: testimonial3,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const handlePrev = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1,
    );
  };

  return (
    <section className="bg-[#ebdccb] text-stone-900 py-20 md:py-28 px-6 font-Inter">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Title */}
        <div className="space-y-3">
          <h2 className="text-3xl sm:text-5xl font-Poppins font-bold text-stone-950 tracking-tight">
            What Our Customer Says
          </h2>
          <p className="text-stone-800/80 text-xs sm:text-sm max-w-md mx-auto">
            Discover why our coffee lovers keep coming back for their daily
            brew.
          </p>
        </div>

        {/* Testimonial Carousel Wrapper */}
        <div className="relative max-w-2xl mx-auto">
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="absolute -left-4 sm:-left-12 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full border border-stone-900/30 text-stone-900 bg-[#ebdccb] hover:bg-stone-900 hover:text-white transition-all duration-300 cursor-pointer shadow-md active:scale-90"
            title="Previous"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Slider Window (Added pt-16 to prevent top clipping) */}
          <div className="overflow-hidden w-full pt-16 pb-6">
            {/* Sliding Track */}
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonialsData.map(review => (
                <div key={review.id} className="w-full flex-shrink-0 px-2">
                  <div className="bg-[#2d1e17] text-white p-8 sm:p-12 md:p-14 w-full relative pt-16 rounded-2xl border border-[#422e23] shadow-2xl text-center">
                    {/* Background Quote Icon */}
                    <Quote className="absolute top-6 right-8 text-amber-500/10 w-16 h-16 pointer-events-none" />

                    {/* User Avatar */}
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full border-4 border-amber-400 shadow-xl overflow-hidden bg-[#221610] ring-4 ring-[#ebdccb]">
                      <img
                        src={review.img}
                        alt={review.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>

                    {/* Quote Text */}
                    <p className="text-stone-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6 font-Inter italic">
                      "{review.quote}"
                    </p>

                    {/* Rating Stars */}
                    <div className="flex justify-center space-x-1 text-amber-400 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          fill="currentColor"
                          className="stroke-amber-400"
                        />
                      ))}
                    </div>

                    {/* Name & Role */}
                    <h4 className="font-Poppins font-bold text-lg text-amber-100 tracking-wide">
                      {review.name}
                    </h4>
                    <span className="text-[11px] font-Inter text-amber-400/80 uppercase tracking-widest mt-0.5 block">
                      {review.role}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="absolute -right-4 sm:-right-12 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-stone-900 text-white hover:bg-stone-800 transition-all duration-300 cursor-pointer shadow-md active:scale-90"
            title="Next"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-2 pt-2">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-500 cursor-pointer ${
                currentIndex === index
                  ? 'w-8 bg-stone-900'
                  : 'w-2.5 bg-stone-900/30 hover:bg-stone-900/60'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
