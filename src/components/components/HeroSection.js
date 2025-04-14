import React, { useState } from "react";

const HeroSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signing up with:", email);
    setEmail("");
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h2>WELCOME TO</h2>
        <h1>ModU</h1>
        <div className="signup-form">
          <h3>
            Sign Up Now and get
            <br />
            10% Off on your first order.
          </h3>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
