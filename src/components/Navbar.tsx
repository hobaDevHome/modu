import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, User, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const linkClass = (path: string) =>
    `text-white hover:text-gray-200 ${isActive(path) ? "font-semibold" : ""}`;

  return (
    <header className="fixed w-full bg-transparent z-50 p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white">
          ModU
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className={linkClass("/")}>
            Home
          </Link>
          <Link to="/shop" className={linkClass("/shop")}>
            Shop
          </Link>
          <Link to="/categories" className={linkClass("/categories")}>
            Categories
          </Link>
          <Link to="/customize" className={linkClass("/customize")}>
            Customize
          </Link>
          <Link to="/about" className={linkClass("/about")}>
            About
          </Link>
          <Link to="/contact" className={linkClass("/contact")}>
            Contact
          </Link>
          <Link to="/details" className={linkClass("/contact")}>
            Details
          </Link>
          <Link to="/products" className={linkClass("/products")}>
            products
          </Link>
          <Link to="/howto" className={linkClass("/howto")}>
            howto
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/cart" className="text-white hover:text-gray-200">
            <ShoppingCart />
          </Link>
          <Link to="/profile" className="text-white hover:text-gray-200">
            <User />
          </Link>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-gray-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-teal-800/95 backdrop-blur-sm">
          <div className="container mx-auto py-4 px-4 flex flex-col space-y-4">
            <Link to="/" className={`${linkClass("/")} text-lg`}>
              Home
            </Link>
            <Link to="/shop" className={`${linkClass("/shop")} text-lg`}>
              Shop
            </Link>
            <Link
              to="/categories"
              className={`${linkClass("/categories")} text-lg`}
            >
              Categories
            </Link>
            <Link
              to="/customize"
              className={`${linkClass("/customize")} text-lg`}
            >
              Customize
            </Link>
            <Link to="/about" className={`${linkClass("/about")} text-lg`}>
              About
            </Link>
            <Link to="/contact" className={`${linkClass("/contact")} text-lg`}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
