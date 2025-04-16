import React from "react";

interface VisionCardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const VisionCard: React.FC<VisionCardProps> = ({
  imageUrl,
  title,
  description,
}) => {
  return (
    <article className="flex-1 text-center">
      <img
        src={imageUrl}
        className="object-cover w-full rounded-lg h-[358px]"
        alt={title}
      />
      <div className="mt-5">
        <h3 className="text-3xl text-black max-sm:text-2xl">{title}</h3>
        <p className="text-lg text-black max-sm:text-sm">{description}</p>
      </div>
    </article>
  );
};

export default VisionCard;
