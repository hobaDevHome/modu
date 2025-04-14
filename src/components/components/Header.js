import React from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <a href="/">M</a>
        </div>
        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
          <a href="/customize">Customize</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
        <div className="user-actions">
          <button>
            <FaShoppingCart size={20} />
          </button>
          <button>
            <FaUser size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
