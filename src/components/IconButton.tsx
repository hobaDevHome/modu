import React from "react";

interface IconButtonProps {
  svg: string;
  className?: string;
  onClick?: () => void;
}

export const IconButton: React.FC<IconButtonProps> = ({
  svg,
  className = "",
  onClick,
}) => {
  return (
    <button className={className} onClick={onClick} aria-label="Icon button">
      <div dangerouslySetInnerHTML={{ __html: svg }} />
    </button>
  );
};
