"use client";
import React from "react";

import { BackButton } from "../components/BackButton";
import { ProductGrid } from "../components/ProductGrid";
import { PromotionBanner } from "../components/PromotionBanner";

import { Product } from "../components/types";

// Products data
const products: Product[] = [
  {
    id: "1",
    name: "Desk Lamp",
    price: "370 EGP",
    rating: "5.0",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9d1e64abbf437e043c055527bedd440f72cd6323?placeholderIfAbsent=true",
    alt: "Desk Lamp",
  },
  {
    id: "2",
    name: "Night Light",
    price: "350 EGP",
    rating: "4.9",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/f8c608a04a2192d928e8dadec51fced644729bdc?placeholderIfAbsent=true",
    alt: "Night Light",
  },
  {
    id: "3",
    name: "Pendant Light",
    price: "450 EGP",
    rating: "4.8",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/30457ba55cef22bf0ad6ae4db8acea288ab41565?placeholderIfAbsent=true",
    alt: "Pendant Light",
  },
  {
    id: "4",
    name: "Candle Holder",
    price: "350 EGP",
    rating: "4.7",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/f5708b53ade60bcb6778c846605266a09e4cdfa2?placeholderIfAbsent=true",
    alt: "Candle Holder",
  },
  {
    id: "5",
    name: "Wall Light",
    price: "600 EGP",
    rating: "5.0",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5d632d6c857a4d0593d43b2919153dad145edea2?placeholderIfAbsent=true",
    alt: "Wall Light",
  },
  {
    id: "6",
    name: "Table Centerpiece Light",
    price: "350 EGP",
    rating: "4.7",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/419d545ea30550a3c94da5d5a4eb6e27b907d7bd?placeholderIfAbsent=true",
    alt: "Table Centerpiece Light",
  },
  {
    id: "7",
    name: "Reading Light",
    price: "360 EGP",
    rating: "4.9",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9a94def0855fa4f2d274b01705cc078a1d1f5ace?placeholderIfAbsent=true",
    alt: "Reading Light",
  },
  {
    id: "8",
    name: "Keychain Flashlight",
    price: "300 EGP",
    rating: "5.0",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/fac36cba97cc29331bb5aea922fbd068207fa2e4?placeholderIfAbsent=true",
    alt: "Keychain Flashlight",
  },
];

export const LightingAccessories: React.FC = () => {
  // Handle back button click
  const handleBackClick = () => {
    console.log("Back button clicked");
    // Add navigation logic here
  };

  // Handle CTA button click
  const handleCtaClick = () => {
    console.log("Buy Now button clicked");
    // Add checkout logic here
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <div className="mx-auto my-0 w-full max-w-[1440px] max-md:max-w-[991px] max-sm:max-w-screen-sm ite">
        <main className="p-8 max-sm:p-4">
          <BackButton onClick={handleBackClick} />

          <h1 className="mb-8 text-6xl font-light text-black">
            Lighting Accessories
          </h1>

          <ProductGrid products={products} />

          <PromotionBanner
            title="Exclusive offer"
            description="Unlock the ultimate deal with ModU: Limited-time access to personalized creation at unbeatable price! Don't miss your chance to stand out with something truly yours. Act now before it's gone!"
            days={6}
            hours={18}
            minutes={48}
            ctaText="BUY NOW"
            onCtaClick={handleCtaClick}
          />
        </main>
      </div>
    </>
  );
};

export default LightingAccessories;
