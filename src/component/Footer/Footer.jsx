import React from 'react';
import { Play, Mail, Phone, MapPin } from 'lucide-react';
import footerBg from '../../assets/Footer.jpg';

const Footer = () => {
  return (
    <footer
      id="facilities"
      className="bg-[#18110c] text-white pt-16 pb-8 px-6 border-t border-[#3d2a1f] font-Inter relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-[#3d2a1f]/80 relative z-10">
        {/* Logo & Tagline */}
        <div className="space-y-4">
          <div className="bg-[#2d1e17] border border-[#422e23] text-amber-100 font-Poppins text-3xl font-bold py-6 px-6 text-center rounded-2xl shadow-xl">
            Caffeine<span className="text-amber-400">.</span>
          </div>
          <p className="text-stone-400 text-xs sm:text-sm leading-relaxed font-Inter">
            Enjoy better and better quality coffee with Caffeine. Crafted to
            awaken your senses every single day.
          </p>
        </div>

        {/* Contact Information */}
        <div className="space-y-4 text-sm text-stone-300 font-Inter">
          <h3 className="text-lg font-Poppins font-bold text-white mb-2">
            Contact Us
          </h3>

          <div className="flex items-center space-x-3 text-stone-300 hover:text-amber-300 transition cursor-pointer">
            <Mail size={16} className="text-amber-400 shrink-0" />
            <span className="font-medium text-amber-200">
              Caffeine@Gmail.Com
            </span>
          </div>

          <div className="flex items-center space-x-3 text-stone-300">
            <Phone size={16} className="text-amber-400 shrink-0" />
            <span>Call Us: (321) 562 - 57420</span>
          </div>

          <div className="flex items-start space-x-3 text-stone-400 pt-1">
            <MapPin size={16} className="text-amber-400 shrink-0 mt-1" />
            <span>
              39 Brooklyn Street
              <br />
              Covington, VA 244426
            </span>
          </div>
        </div>

        {/* Video Preview with footerBg */}
        <div className="space-y-4">
          <h3 className="text-lg font-Poppins font-bold text-white mb-2">
            Our Kitchen
          </h3>

          <div className="relative h-36 overflow-hidden group cursor-pointer border border-[#422e23] rounded-2xl shadow-xl bg-[#2d1e17]">
            <img
              src={footerBg}
              alt="Kitchen Preview"
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition duration-300 flex items-center justify-center">
              <div className="p-3 bg-amber-400 text-stone-950 rounded-full shadow-lg group-hover:scale-110 transition duration-300">
                <Play size={20} fill="currentColor" className="ml-0.5" />
              </div>
            </div>
          </div>

          {/* Social Links with Native SVG */}
          <div>
            <h4 className="text-[11px] font-Poppins uppercase tracking-widest text-amber-400/90 font-semibold mb-3">
              Follow Us
            </h4>
            <div className="flex space-x-3">
              {/* Instagram */}
              <a
                href="#"
                className="p-2.5 bg-[#2d1e17] border border-[#422e23] text-stone-300 rounded-xl hover:bg-amber-400 hover:text-stone-950 hover:border-amber-400 transition duration-300 shadow-md"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href="#"
                className="p-2.5 bg-[#2d1e17] border border-[#422e23] text-stone-300 rounded-xl hover:bg-amber-400 hover:text-stone-950 hover:border-amber-400 transition duration-300 shadow-md"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="#"
                className="p-2.5 bg-[#2d1e17] border border-[#422e23] text-stone-300 rounded-xl hover:bg-amber-400 hover:text-stone-950 hover:border-amber-400 transition duration-300 shadow-md"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-stone-500 pt-8 font-Inter">
        Copyright © 2026 Tophats Agency. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
