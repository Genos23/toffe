import React from 'react';
import { Coffee } from 'lucide-react';
import { Link } from './ui/Link';

export function Navbar() {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Coffee className="h-8 w-8 text-amber-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">Toffe</span>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <Link href="#home">Home</Link>
              <Link href="#menu">Menu</Link>
              <Link href="#about">About</Link>
              <Link href="#contact">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}