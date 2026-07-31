import React from 'react';
import { ArrowRight } from 'lucide-react';
import verient1 from '../../assets/Varient.png'
import verient2 from '../../assets/Varient2.png'


const Varient = () => {
  return (
    <section className="bg-[#ebdccb] text-stone-900 py-20 px-8">
      <div className="max-w-6xl mx-auto space-y-24">
        {/* Feature 1: Coffee Heaven */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative flex justify-center">
            <div className="w-64 h-72 border border-stone-800 p-2 transform -rotate-3 bg-stone-300/30">
              <img
                src={verient1}
                alt="Coffee Heaven"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-4xl font-serif font-bold">Coffee Heaven</h2>
            <p className="text-stone-700 text-sm leading-relaxed max-w-md">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
              Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text
              Ever Since The 1500s.
            </p>
            <button className="flex items-center space-x-2 bg-stone-900 text-white px-5 py-2.5 text-sm hover:bg-stone-800 transition">
              <span>View All</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Feature 2: Jean's Coffee */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 md:order-1 order-2">
            <h2 className="text-4xl font-serif font-bold">Jean’s Coffee</h2>
            <p className="text-stone-700 text-sm leading-relaxed max-w-md">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
              Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text
              Ever Since The 1500s.
            </p>
            <button className="flex items-center space-x-2 bg-stone-900 text-white px-5 py-2.5 text-sm hover:bg-stone-800 transition">
              <span>View All</span>
              <ArrowRight size={16} />
            </button>
          </div>
          <div className="relative flex justify-center md:order-2 order-1">
            <div className="w-64 h-72 border border-stone-800 p-2 transform rotate-3 bg-stone-300/30">
              <img
                src={verient2}
                alt="Jean's Coffee"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Varient;
