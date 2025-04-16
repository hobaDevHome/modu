import React from "react";
import { FavoriteButton } from "./FavoriteButton";
import { StarRating } from "./StarRating";

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  rating: string;
  alt: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  image,
  name,
  price,
  rating,
  alt,
}) => {
  return (
    <article className="relative">
      <img
        src={image}
        className="w-full h-auto shadow-[10px_30px_42px_rgba(0,0,0,0.15)]"
        alt={alt}
      />
      <div className="p-4 text-center">
        <h3 className="text-2xl font-semibold text-neutral-700">{name}</h3>
        <div className="flex gap-2 justify-center items-center">
          <span className="text-2xl font-medium text-zinc-700">{price}</span>
          <StarRating rating={rating} />
        </div>
      </div>
      <FavoriteButton />
    </article>
  );
};
