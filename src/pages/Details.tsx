"use client";

import React from "react";

import ProductInfo from "../components/ProductInfo";
import RelatedProducts from "../components/RelatedProducts";
import FeedbackSection from "../components/FeedbackSection";

const ProductDetailPage: React.FC = () => {
  return (
    <main className="flex overflow-hidden flex-col ">
      <section className="flex flex-col items-start mt-8 ml-8 w-full max-w-[1304px] max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf8e594a857594fdf8f8c45f9938be1b99a05fe2?placeholderIfAbsent=true&apiKey=60a3aebf167746598db9fb9b5b703ebc"
          className="object-contain aspect-square w-[61px]"
          alt="Back button"
        />

        <ProductInfo />

        <div className="flex gap-3.5 mt-7 ml-80 text-2xl font-medium whitespace-nowrap text-zinc-700 max-md:ml-2.5">
          <span className="self-start">4.8</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4dab962dc7db3345411273ac933473b734d6039e?placeholderIfAbsent=true&apiKey=60a3aebf167746598db9fb9b5b703ebc"
            className="object-contain shrink-0 aspect-square w-[34px]"
            alt="Rating stars"
          />
        </div>

        <div className="flex gap-10 items-start mt-6 ml-56 text-xl font-bold tracking-wide text-white uppercase whitespace-nowrap rounded-xl max-md:ml-2.5">
          <button className="gap-2 self-stretch px-20 py-4 rounded-sm bg-slate-600 min-w-60 w-[301px] max-md:px-5">
            COSTUMIZE
          </button>
        </div>

        <div className="flex gap-10 items-start mt-5 ml-56 text-xl font-bold tracking-wide text-white uppercase rounded-xl max-md:ml-2.5">
          <button className="gap-2 self-stretch px-14 py-4 rounded-sm bg-neutral-700 min-w-60 w-[301px] max-md:px-5">
            PREVIEW WITH AR
          </button>
        </div>

        <RelatedProducts />

        <h2 className="self-center mt-36 ml-14 text-5xl font-medium text-black max-md:mt-10 max-md:text-4xl">
          Feedback Corner
        </h2>
      </section>

      <FeedbackSection />
    </main>
  );
};

export default ProductDetailPage;
