"use client";
import * as React from "react";

import StepsSection from "../components/StepsSection";
import CallToAction from "../components/CallToAction";

function HowToCustomize() {
  return (
    <main className="overflow-hidden ">
      <section className="flex flex-col items-center px-20 mt-20 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full bg-white">
        <p className="text-2xl font-light text-black max-md:max-w-full">
          At ModU, we make it easy for you to create something that truly
          represents YOU!
        </p>
        <h1 className="mt-6 text-2xl text-black max-md:max-w-full ">
          Follow these simple steps to customize your product:
        </h1>
        <StepsSection />
        <CallToAction />
      </section>
    </main>
  );
}

export default HowToCustomize;
