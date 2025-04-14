import React from 'react';
import { Mail } from 'lucide-react';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">WELCOME TO<br />ModU</h1>
          <div className="max-w-md mx-auto">
            <p className="text-xl mb-4">Sign Up Now and get<br />10% Off on your first order.</p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Email"
                className="p-3 rounded bg-white/20 backdrop-blur-sm text-white placeholder-white/70"
              />
              <button className="bg-teal-600 text-white p-3 rounded hover:bg-teal-700 transition">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">Our Upcoming Events:</h2>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="text-white">
                <p className="text-xl">21 January 2025</p>
                <p>03:00 PM</p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=800&q=80"
                alt="Event"
                className="w-32 h-32 object-cover rounded"
              />
              <button className="bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-700 transition">
                Get your invitation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <img
                src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=400&q=80"
                alt="Home Accessories"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-white">Tailored Home Accessories</h3>
              <p className="text-gray-300">Unique and stylish home accessories that add your unique style</p>
            </div>
            <div className="text-center p-6">
              <img
                src="https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=400&q=80"
                alt="Design Preview"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-white">See Your Designs Come to Life</h3>
              <p className="text-gray-300">Visualize your design creations with our preview tool</p>
            </div>
            <div className="text-center p-6">
              <img
                src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=400&q=80"
                alt="Jewelry"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-white">Custom Jewelry Creations</h3>
              <p className="text-gray-300">Make a statement with custom jewelry designed according to your style</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}