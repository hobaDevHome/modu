import React from "react";

const productData = [
  {
    id: 1,
    image: "/images/home-decor.png",
    title: "Natural Home Accessories",
    description:
      "Embrace natural elements and bring warmth to your living space",
  },
  {
    id: 2,
    image: "/images/design-online.png",
    title: "See Your Designs Come to Life",
    description:
      "Our advanced 3D visualization tools let you preview your custom creations",
  },
  {
    id: 3,
    image: "/images/jewelry.png",
    title: "Custom Jewelry Creations",
    description: "Unique handcrafted pieces that reflect your personal style",
  },
];

const ProductShowcase = () => {
  return (
    <section className="product-showcase">
      {productData.map((product) => (
        <div key={product.id} className="product-item">
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p>{product.description}</p>
        </div>
      ))}
    </section>
  );
};

export default ProductShowcase;
