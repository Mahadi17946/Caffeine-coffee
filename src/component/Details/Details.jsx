import React from 'react';
import dtls1 from '../../assets/Varient.png';
import dtls2 from '../../assets/VArient2.png';
import { ArrowRight } from 'lucide-react';

const Details = () => {
  return (
    <section className="w-full bg-[#ebd9c3] py-20 px-6 md:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-24 md:space-y-32">
        {/* Row 1: Coffee Heaven (Image Left, Text Right) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Container with Polygon Outline */}
          <div className="relative flex justify-center items-center py-4">
            {/* Background Geometric Line/Polygon */}
            <div className="absolute w-72 h-80 border border-stone-800 rotate-12 pointer-events-none opacity-80"></div>

            {/* Main Tilted Image */}
            <div className="relative z-10 -rotate-6 transition-transform duration-300 hover:rotate-0 shadow-2xl">
              <img
                src={dtls1}
                alt="Coffee Heaven"
                className="w-72 h-80 object-cover border-4 border-white shadow-xl"
              />
            </div>
          </div>

          {/* Content Right */}
          <div className="space-y-5 text-center md:text-left md:pl-6">
            <h2 className="text-4xl md:text-5xl font-serif font-extrabold text-[#1c120c] tracking-tight">
              Coffee Heaven
            </h2>
            <p className="text-stone-700 text-sm md:text-base leading-relaxed max-w-md mx-auto md:mx-0 font-sans">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
              Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text
              Ever Since The 1500s.
            </p>
            <div className="pt-2">
              <button className="inline-flex items-center space-x-2 bg-[#120a06] text-white px-6 py-3 text-sm font-medium hover:bg-amber-950 transition-colors shadow-lg cursor-pointer">
                <span>View All</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Row 2: Jean's Coffee (Text Left, Image Right) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content Left (Mobile-এ নিচে দেখাবে, Desktop-এ বামে) */}
          <div className="space-y-5 text-center md:text-left md:pr-6 order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-serif font-extrabold text-[#1c120c] tracking-tight">
              Jean’s Coffee
            </h2>
            <p className="text-stone-700 text-sm md:text-base leading-relaxed max-w-md mx-auto md:mx-0 font-sans">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
              Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text
              Ever Since The 1500s.
            </p>
            <div className="pt-2">
              <button className="inline-flex items-center space-x-2 bg-[#120a06] text-white px-6 py-3 text-sm font-medium hover:bg-amber-950 transition-colors shadow-lg cursor-pointer">
                <span>View All</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Image Container Right */}
          <div className="relative flex justify-center items-center py-4 order-1 md:order-2">
            {/* Background Geometric Line/Polygon */}
            <div className="absolute w-72 h-80 border border-stone-800 -rotate-12 pointer-events-none opacity-80"></div>

            {/* Main Tilted Image */}
            <div className="relative z-10 rotate-6 transition-transform duration-300 hover:rotate-0 shadow-2xl">
              <img
                src={dtls2}
                alt="Jean's Coffee"
                className="w-72 h-80 object-cover border-4 border-white shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
