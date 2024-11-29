import React from 'react';
import { Coffee, Users, Heart } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Founded in 2024, Toffe has been serving premium coffee with passion and dedication.
            We believe in creating memorable experiences through exceptional coffee and warm hospitality.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Coffee className="h-8 w-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Quality Coffee</h3>
            <p className="text-gray-600">
              We source the finest beans from sustainable farms worldwide.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Expert Baristas</h3>
            <p className="text-gray-600">
              Our skilled team crafts each drink with precision and care.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Community First</h3>
            <p className="text-gray-600">
              We're committed to creating a welcoming space for everyone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}