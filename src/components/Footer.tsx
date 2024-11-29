import React from 'react';
import { Coffee } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Coffee className="h-8 w-8 text-amber-500" />
              <span className="ml-2 text-xl font-bold text-white">Toffe</span>
            </div>
            <p className="text-gray-400 max-w-md">
              Crafting exceptional coffee experiences with passion and precision.
              Visit us today and discover your perfect cup.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-amber-500 transition-colors duration-200">Home</a></li>
              <li><a href="#menu" className="hover:text-amber-500 transition-colors duration-200">Menu</a></li>
              <li><a href="#about" className="hover:text-amber-500 transition-colors duration-200">About</a></li>
              <li><a href="#contact" className="hover:text-amber-500 transition-colors duration-200">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Hours</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Mon - Fri: 7am - 8pm</li>
              <li>Saturday: 8am - 8pm</li>
              <li>Sunday: 8am - 6pm</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Toffe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}