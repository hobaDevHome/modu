"use client";
import React, { useState } from "react";

interface FavoriteButtonProps {
  initialFavorite?: boolean;
  onClick?: (isFavorite: boolean) => void;
}

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  initialFavorite = false,
  onClick,
}) => {
  const [isFavorite, setIsFavorite] = useState(initialFavorite);

  const handleClick = () => {
    const newState = !isFavorite;
    setIsFavorite(newState);
    if (onClick) onClick(newState);
  };

  const favoriteIcon = `<svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg" class="favorite" style="width: 28px; height: 28px"> <g clip-path="url(#clip0_139_53)"> <path d="M19.4308 3.80469C17.417 3.80469 15.4841 4.74219 14.2225 6.22367C12.9609 4.74219 11.0281 3.80469 9.01418 3.80469C5.44936 3.80469 2.64844 6.60561 2.64844 10.1704C2.64844 14.5454 6.58362 18.1102 12.5443 23.5269L14.2225 25.0431L15.9008 23.5153C21.8614 18.1102 25.7966 14.5454 25.7966 10.1704C25.7966 6.60561 22.9957 3.80469 19.4308 3.80469ZM14.3383 21.8024L14.2225 21.9181L14.1068 21.8024C8.59751 16.8139 4.96325 13.5153 4.96325 10.1704C4.96325 7.85561 6.69936 6.1195 9.01418 6.1195C10.7966 6.1195 12.5327 7.26534 13.1461 8.85098H15.3105C15.9123 7.26534 17.6484 6.1195 19.4308 6.1195C21.7457 6.1195 23.4818 7.85561 23.4818 10.1704C23.4818 13.5153 19.8475 16.8139 14.3383 21.8024Z" fill="white"></path> </g> <defs> <clipPath id="clip0_139_53"> <rect width="27.7778" height="27.7778" fill="white" transform="translate(0.335938 0.335938)"></rect> </clipPath> </defs> </svg>`;

  return (
    <button
      className="absolute top-2 right-2"
      onClick={handleClick}
      aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
    >
      <div dangerouslySetInnerHTML={{ __html: favoriteIcon }} />
    </button>
  );
};
