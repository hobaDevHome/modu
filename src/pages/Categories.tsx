import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Categories() {
  const categories = [
    {
      title: "Accessories",
      description: "Design custom sunglasses, jewelry, and more to reflect your style and personality.",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Home Decor",
      description: "Design and create unique home decor pieces, bringing your personal style to your living space with ease.",
      image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Gifts",
      description: "Create unique, personalized gifts for any occasion. Design custom items that reflect the recipient's personality and style.",
      image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Functional Items",
      description: "Practical products like phone stands, pen holders, coasters, and kitchen tools.",
      image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Pet Accessories",
      description: "Design unique pet accessories that showcase your pet's personality. From personalized tags to custom collars.",
      image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-800 via-teal-700 to-amber-500">
      <Navbar />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white text-center mb-12">Categories</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center p-6 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                  <h3 className="text-2xl font-bold text-white mb-3">{category.title}</h3>
                  <p className="text-gray-200 mb-4">{category.description}</p>
                  <button className="bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-700 transition">
                    Shop Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}