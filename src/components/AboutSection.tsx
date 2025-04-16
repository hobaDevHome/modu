import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section className="flex justify-between items-center px-20 py-12 max-md:flex-col max-md:items-center max-md:p-8 max-sm:p-5">
      <article className="max-w-[725px] max-md:max-w-full">
        <h2 className="text-5xl font-light text-black max-sm:text-4xl">
          Innovative 3D Creations from Egypt ModU
        </h2>
        <p className="text-xl font-light leading-normal text-black max-sm:text-base">
          ModU, based in the heart of Egypt, is redefining the world of
          personalized products with our cutting-edge 3D printing technology. We
          specialize in crafting unique, customizable items that cater to your
          individual style and needs. Our passion for innovation drives us to
          deliver exceptional quality and creativity in every product we create.
          At ModU, we take pride in transforming your ideas into tangible
          realities. By combining advanced technology with artistic flair, we
          offer a range of bespoke solutions that reflect your personality and
          vision. Discover the limitless possibilities with ModU today!
        </p>
      </article>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5eb2b9922ba4131fd00ce34c46ffe83355b43d74?placeholderIfAbsent=true"
        className="object-cover h-[500px] w-[595px] max-md:w-full max-md:h-auto"
        alt="About Image"
      />
    </section>
  );
};

export default AboutSection;
