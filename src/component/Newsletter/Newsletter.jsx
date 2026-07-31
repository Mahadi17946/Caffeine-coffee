import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (email) {
      alert(`Subscribed successfully with: ${email}`);
      setEmail('');
    }
  };

  return (
    <section className="bg-[#cca885] text-stone-900 py-16 px-6 border-t border-stone-800/30">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold leading-tight">
            Stay Up To Date On <br className="hidden sm:block" /> All News And
            Offers.
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <p className="text-xs sm:text-sm text-stone-800 font-medium">
            Be The First To Know About New Collections, Special Events, And
            What's Going On At Kitchen.
          </p>
          <div className="flex items-center">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter Your Email Address"
              required
              className="w-full bg-[#ba9875] text-stone-900 placeholder-stone-700 px-4 py-3 text-sm outline-none border border-stone-800/30 focus:border-stone-900 transition"
            />
            <button
              type="submit"
              className="bg-[#1c120c] text-white p-3.5 hover:bg-stone-800 transition cursor-pointer"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
