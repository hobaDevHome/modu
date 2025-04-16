"use client";
import React from "react";

import HeroSection from "../components/AboutHeroSection";
import AboutSection from "../components/AboutSection";
import MissionSection from "../components/MissionSection";
import VisionSection from "../components/VisionSection";
import TeamSection from "../components/TeamSection";

const AboutPage: React.FC = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Lato:wght@600;700&family=Source+Serif+Pro:wght@700&display=swap"
        rel="stylesheet"
      />
      <main className="mx-auto my-0 w-full max-w-[1440px] max-md:max-w-[991px] max-sm:max-w-screen-sm">
        <HeroSection />
        <AboutSection />
        <MissionSection />
        <VisionSection />
        <TeamSection />
      </main>
    </>
  );
};

export default AboutPage;
