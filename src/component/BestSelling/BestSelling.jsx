import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, ShoppingBag } from 'lucide-react';
import bestsell1 from '../../assets/BestSell1.png';
import bestsell2 from '../../assets/BestSell2.png';
import bestsell3 from '../../assets/BestSell3.png';

const allProducts = [
  {
    id: 1,
    name: 'Cappuccino Special',
    category: 'Espresso',
    price: '$8.50',
    rating: 4.9,
    img: bestsell1,
  },
  {
    id: 2,
    name: 'Americano Dark',
    category: 'Black',
    price: '$6.20',
    rating: 4.8,
    img: bestsell2,
  },
  {
    id: 3,
    name: 'Classic Espresso',
    category: 'Espresso',
    price: '$5.50',
    rating: 5.0,
    img: bestsell3,
  },
  {
    id: 4,
    name: 'Doppio Supreme',
    category: 'Doppio',
    price: '$9.00',
    rating: 4.9,
    img: bestsell1,
  },
  {
    id: 5,
    name: 'Black Velvet Coffee',
    category: 'Black',
    price: '$7.00',
    rating: 4.7,
    img: bestsell2,
  },
  {
    id: 6,
    name: 'Doppio Cream Latte',
    category: 'Doppio',
    price: '$8.80',
    rating: 4.8,
    img: bestsell3,
  },
];

const BestSelling = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);

  const tabs = ['All', 'Black', 'Espresso', 'Doppio'];
  const itemsPerPage = 3;

  const filteredProducts =
    activeTab === 'All'
      ? allProducts
      : allProducts.filter(p => p.category === activeTab);

  const handleTabChange = tab => {
    setActiveTab(tab);
    setCurrentIndex(0);
  };

  const handleNext = () => {
    if (currentIndex + itemsPerPage < filteredProducts.length) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    } else {
      setCurrentIndex(Math.max(0, filteredProducts.length - itemsPerPage));
    }
  };

  const visibleProducts = filteredProducts.slice(
    currentIndex,
    currentIndex + itemsPerPage,
  );

  return (
    <section
      id="menu"
      className="bg-[#cca885] text-stone-900 py-16 md:py-24 px-6 font-Inter"
    >
      <div className="max-w-6xl mx-auto text-center space-y-10">
        {/* Title & Subtitle */}
        <div className="space-y-3">
          <h2 className="text-3xl sm:text-5xl font-Poppins font-bold text-stone-950 tracking-tight">
            Best Selling Item
          </h2>
          <p className="text-stone-800/80 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed font-Inter">
            Experience the rich and bold flavors of our exquisite coffee blends,
            crafted to awaken your senses and start your day right.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center space-x-6 sm:space-x-10 text-sm font-Poppins font-semibold border-b border-stone-900/20 pb-3">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`pb-2 transition-all duration-300 cursor-pointer ${
                activeTab === tab
                  ? 'text-stone-950 font-bold border-b-2 border-stone-950 scale-105'
                  : 'text-stone-800/70 hover:text-stone-950'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pt-2">
          {visibleProducts.map(item => (
            <div
              key={item.id}
              className="bg-[#2d1e17] text-white rounded-2xl overflow-hidden border border-[#422e23] shadow-xl flex flex-col justify-between hover:-translate-y-2 hover:border-amber-500/50 transition-all duration-300 group text-left"
            >
              {/* Image Frame */}
              <div className="relative h-60 w-full overflow-hidden bg-[#221610] flex items-center justify-center p-4">
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-full w-auto object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-lg"
                />

                {/* Rating Badge */}
                <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full flex items-center space-x-1 text-xs text-amber-300 font-Inter font-medium">
                  <Star size={12} className="fill-amber-400 stroke-amber-400" />
                  <span>{item.rating}</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 flex flex-col justify-between flex-grow space-y-4 font-Inter">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-amber-400/90 font-semibold font-Poppins">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-Poppins font-bold text-amber-100 mt-1">
                    {item.name}
                  </h3>
                </div>

                {/* Price & Order Button */}
                <div className="flex items-center justify-between pt-3 border-t border-[#422e23]">
                  <div>
                    <span className="text-[10px] text-stone-400 block uppercase tracking-wider">
                      Price
                    </span>
                    <span className="text-lg font-Poppins font-bold text-amber-200">
                      {item.price}
                    </span>
                  </div>

                  <button
                    onClick={() => alert(`Ordering ${item.name}...`)}
                    className="flex items-center space-x-2 bg-amber-400 text-stone-950 font-Poppins font-bold px-4 py-2.5 text-xs rounded-xl hover:bg-amber-300 transition duration-300 cursor-pointer shadow-md active:scale-95"
                  >
                    <ShoppingBag size={14} />
                    <span>Order Now</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slider Controls */}
        <div className="flex justify-center items-center space-x-4 pt-4">
          <button
            onClick={handlePrev}
            className="p-3 border border-stone-900/30 text-stone-900 rounded-full hover:bg-stone-900 hover:text-white transition-all cursor-pointer active:scale-90 shadow-sm"
            title="Previous"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={handleNext}
            className="p-3 bg-stone-900 text-white rounded-full hover:bg-stone-800 transition-all cursor-pointer active:scale-90 shadow-md"
            title="Next"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BestSelling;
