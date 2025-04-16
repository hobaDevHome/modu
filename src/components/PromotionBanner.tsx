import React from "react";
import { CountdownTimer } from "./CountdownTimer";

interface PromotionBannerProps {
  title: string;
  description: string;
  days: number;
  hours: number;
  minutes: number;
  ctaText: string;
  onCtaClick?: () => void;
}

export const PromotionBanner: React.FC<PromotionBannerProps> = ({
  title,
  description,
  days,
  hours,
  minutes,
  ctaText,
  onCtaClick,
}) => {
  return (
    <section className="flex justify-between items-center p-8 text-white bg-slate-600 max-md:flex-col max-md:items-start max-sm:flex-col max-sm:items-start max-sm:p-4">
      <div className="max-w-[600px] max-md:mb-8">
        <h2 className="mb-4 text-5xl font-bold">{title}</h2>
        <p className="text-2xl font-medium leading-normal">{description}</p>
      </div>

      <CountdownTimer days={days} hours={hours} minutes={minutes} />

      <button
        className="px-8 py-4 text-xl font-medium text-white uppercase rounded cursor-pointer bg-neutral-700 hover:bg-neutral-600 transition-colors"
        onClick={onCtaClick}
      >
        {ctaText}
      </button>
    </section>
  );
};
