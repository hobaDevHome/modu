import React from "react";

export default function Customize() {
  return (
    <main className="mx-auto my-0 bg-white max-w-[1440px] max-md:max-w-[991px] max-sm:max-w-screen-sm">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />

      <section className="p-10 text-center max-sm:p-5 pt-24">
        <h1 className="text-6xl font-light text-black max-sm:text-5xl">
          Customize Your Own Product
        </h1>
        <p className="mt-5 text-2xl font-light text-black max-sm:text-lg">
          Describe your vision in details, and let us create your design
        </p>

        <div className="flex justify-center items-center mx-auto my-10 bg-zinc-300 h-[365px] opacity-[0.76] rounded-[63px] w-[649px] max-md:w-4/5 max-md:h-[300px] max-sm:w-full max-sm:h-[200px]">
          <span className="text-xl text-black uppercase opacity-[0.33]">
            TYPE THE DESCRIPTION OF YOUR PRODUCT ...
          </span>
        </div>

        <button className="mx-auto my-5 text-xl font-medium text-white uppercase rounded bg-neutral-700 h-[76px] shadow-[0px_7px_30px_rgba(0,0,0,0.05)] w-[247px] max-sm:w-full max-sm:h-[60px] flex items-center justify-center">
          GENERATE
        </button>

        <section className="mt-10">
          <h2 className="text-6xl font-light text-black max-sm:text-5xl">
            Your generated products... ...
          </h2>
          <div className="flex gap-10 justify-center mt-5 max-md:flex-col max-md:items-center max-sm:flex-col">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d1e64abbf437e043c055527bedd440f72cd6323?placeholderIfAbsent=true"
              className="h-[378px] shadow-[10px_30px_42px_rgba(0,0,0,0.15)] w-[318px] max-md:w-4/5 max-md:h-auto max-sm:w-full max-sm:h-auto"
              alt="Product 1"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/43eb54289922fecb8b52c733004af8f4e0a1ce8e?placeholderIfAbsent=true"
              className="h-[378px] shadow-[10px_30px_42px_rgba(0,0,0,0.15)] w-[318px] max-md:w-4/5 max-md:h-auto max-sm:w-full max-sm:h-auto"
              alt="Product 2"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d632d6c857a4d0593d43b2919153dad145edea2?placeholderIfAbsent=true"
              className="h-[378px] shadow-[10px_30px_42px_rgba(0,0,0,0.15)] w-[318px] max-md:w-4/5 max-md:h-auto max-sm:w-full max-sm:h-auto"
              alt="Product 3"
            />
          </div>
        </section>
        <div className="flex gap-5 justify-center mt-10 max-md:flex-col max-md:items-center max-sm:flex-col">
          <button className="text-xl font-medium text-white uppercase rounded bg-neutral-700 h-[76px] shadow-[0px_7px_30px_rgba(0,0,0,0.05)] w-[247px] max-md:w-4/5 max-sm:w-full max-sm:h-[60px] flex items-center justify-center">
            Regenerate
          </button>
          <button className="text-xl font-medium text-white uppercase rounded bg-neutral-700 h-[76px] shadow-[0px_7px_30px_rgba(0,0,0,0.05)] w-[247px] max-md:w-4/5 max-sm:w-full max-sm:h-[60px] flex items-center justify-center">
            Customize this!
          </button>
        </div>
      </section>
    </main>
  );
}
