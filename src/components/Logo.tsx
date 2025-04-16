import React from "react";

interface LogoProps {
  image: string;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  image,
  className = "h-[101px] w-[102px]",
}) => {
  return <img src={image} alt="Logo" className={className} />;
};
