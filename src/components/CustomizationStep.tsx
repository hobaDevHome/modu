import * as React from "react";

interface CustomizationStepProps {
  number: string;
  title: string;
  description: React.ReactNode;
  className?: string;
}

const CustomizationStep: React.FC<CustomizationStepProps> = ({
  number,
  title,
  description,
  className = "",
}) => {
  return (
    <article
      className={`flex flex-col grow items-center px-12 pt-7 w-full font-light text-center text-white rounded bg-zinc-800 bg-opacity-90 max-md:px-5 max-md:pb-24 max-md:mt-8 ${className}`}
    >
      <div className="flex items-center justify-center px-7 text-3xl font-medium rounded-full bg-slate-600 h-[69px] w-[69px] max-md:px-5">
        {number}
      </div>
      <h2 className="mt-6 text-3xl">{title}</h2>
      <div className="self-stretch mt-5 text-sm">{description}</div>
    </article>
  );
};

export default CustomizationStep;
