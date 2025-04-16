import React from "react";

interface StarRatingProps {
  rating: string;
}

export const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const starIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="star-icon" style="width: 24px; height: 24px"> <g clip-path="url(#clip0_93_559)"> <path d="M19.4675 23.319L12.0005 17.831L4.5335 23.319L7.4005 14.456L-0.0625 9.003H9.1515L12.0005 0.125L14.8495 9.003H24.0625L16.6005 14.456L19.4675 23.319Z" fill="#F5D426"></path> </g> <defs> <clipPath id="clip0_93_559"> <rect width="24" height="24" fill="white"></rect> </clipPath> </defs> </svg>`;

  return (
    <span className="flex gap-1 items-center">
      <span>{rating}</span>
      <div dangerouslySetInnerHTML={{ __html: starIcon }} />
    </span>
  );
};
