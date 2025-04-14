import React from "react";
import { FaHandPointer, FaTools, FaLightbulb } from "react-icons/fa";

const ServicesSection = () => {
  return (
    <section className="services-section">
      <h2>You Imagine, We Deliver.</h2>
      <p>Transform your ideas into reality with ModU!</p>
      <div className="services-grid">
        <div className="service-item">
          <FaHandPointer size={40} />
          <h3>Grab It</h3>
          <p>
            Explore our collection of custom and premade products and select the
            ones that catch your eye. Each item is crafted with precision and
            care to meet your needs.
          </p>
        </div>
        <div className="service-item">
          <FaTools size={40} />
          <h3>Customize It</h3>
          <p>
            Customize every aspect of your item with our user-friendly design
            tools. Add your personal touch and make it truly yours.
          </p>
        </div>
        <div className="service-item">
          <FaLightbulb size={40} />
          <h3>Create It</h3>
          <p>
            We use cutting-edge 3D printing technology to bring your unique
            designs to life. Your idea is transformed into a tangible creation
            that's ready to impress.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
