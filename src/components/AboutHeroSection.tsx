import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e0dab6e600f85788453113b70f4bbbf1f432bef?placeholderIfAbsent=true"
        className="object-cover w-full h-[530px]"
        alt="Hero Image"
      />
      <div className="absolute top-2/4 left-2/4 text-center text-white -translate-x-2/4 -translate-y-2/4">
        <h1 className="text-8xl font-bold max-sm:text-5xl">About Us</h1>
        <p className="text-2xl font-semibold max-sm:text-lg">
          From preschool to pre-tertiary, our students enjoy fun, interactive
          and relevant lessons and are empowered to think beyond the confines of
          the classroom.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
