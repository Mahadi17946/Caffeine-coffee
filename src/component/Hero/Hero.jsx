import React from 'react';
import { ArrowRight } from 'lucide-react';
import bannnerimg from '../../assets/Banner.png';

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-[#140c07] text-white min-h-[calc(100vh-80px)] flex items-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
        {/* Left Text Content */}
        <div className="space-y-6 z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-tight text-white font-Inter">
            Discover The <br />
            Art Of Perfect <br />
            Coffee
          </h1>
          <p className="text-stone-400 max-w-md text-sm sm:text-base leading-relaxed">
            Experience The Rich And Bold Flavors Of Our Exquisite Coffee Blends,
            Crafted To Awaken Your Senses And Start Your Day Right.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button className="flex items-center space-x-2 bg-white text-stone-950 font-semibold px-6 py-3 text-sm hover:bg-stone-200 transition rounded-sm cursor-pointer">
              <span>Order Now</span>
              <ArrowRight size={16} />
            </button>
            <button className="border border-stone-600 px-6 py-3 text-sm text-stone-300 hover:bg-stone-800 transition rounded-sm cursor-pointer">
              Explore More
            </button>
          </div>

          {/* Stats Section */}
          <div className="flex items-center space-x-8 sm:space-x-12 pt-8 border-t border-stone-800/80">
            <div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                50+
              </h3>
              <p className="text-[10px] text-stone-400 uppercase tracking-widest mt-1">
                Item Of Coffee
              </p>
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                20+
              </h3>
              <p className="text-[10px] text-stone-400 uppercase tracking-widest mt-1">
                Order Running
              </p>
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                2k+
              </h3>
              <p className="text-[10px] text-stone-400 uppercase tracking-widest mt-1">
                Happy Customer
              </p>
            </div>
          </div>
        </div>

        {/* Right Coffee Banner Image with Watermark Text */}
        <div className="flex justify-center items-center w-full relative">
          {/* Background Watermark Text "Caffeine" */}
          <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none select-none z-0 opacity-[0.08] leading-none">
            <span className="text-6xl sm:text-8xl md:text-[130px] font-serif font-bold text-white tracking-wide pb-50">
              Caffeine
            </span>
            <span className="text-6xl sm:text-8xl md:text-[130px] font-serif font-bold text-white tracking-wide -mt-4 sm:-mt-8">
              Caffeine
            </span>
          </div>

          {/* Coffee Cup Banner Image */}
          <img
            src={bannnerimg}
            alt="Coffee Splash"
            className="w-full max-w-[340px] sm:max-w-[460px] h-auto object-contain relative z-10 drop-shadow-[0_25px_35px_rgba(0,0,0,0.9)]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
