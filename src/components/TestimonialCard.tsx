import React from "react";

interface TestimonialCardProps {
  name: string;
  text: string;
  variant: "light" | "dark" | "quote";
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  text,
  variant,
}) => {
  if (variant === "light") {
    return (
      <article className="flex flex-col grow px-5 pt-20 pb-7 w-full bg-white rounded shadow-[0px_7px_30px_rgba(0,0,0,0.05)] max-md:pr-5 max-md:mt-9 max-md:max-w-full">
        <h4 className="self-start text-2xl font-semibold text-black">{name}</h4>
        <p className="mt-8 text-base font-medium text-neutral-500">{text}</p>
      </article>
    );
  }

  if (variant === "dark") {
    return (
      <article className="flex flex-col grow px-4 py-16 w-full text-white rounded shadow-lg bg-neutral-700 max-md:mt-9 max-md:max-w-full">
        <h4 className="self-start text-2xl font-semibold">{name}</h4>
        <p className="mt-8 text-base font-medium">{text}</p>
      </article>
    );
  }

  // Quote variant
  return (
    <article className="flex flex-col items-start mt-2 text-black max-md:mt-10">
      <span className="text-6xl max-md:text-4xl">"</span>
      <h4 className="text-2xl font-semibold">{name}</h4>
      <p className="self-stretch mt-7 text-base font-medium text-neutral-500">
        {text}
      </p>
    </article>
  );
};

export default TestimonialCard;
