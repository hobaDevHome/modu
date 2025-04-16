import React from "react";

interface BackButtonProps {
  onClick?: () => void;
}

export const BackButton: React.FC<BackButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} aria-label="Go back" className="mb-8">
      <div
        dangerouslySetInnerHTML={{
          __html: `<svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg" class="back-icon" style="width: 61px; height: 61px"> <circle cx="30.2539" cy="30.2539" r="30.2539" fill="#39687F" fill-opacity="0.8"></circle> <g clip-path="url(#clip0_89_511)"> <path fill-rule="evenodd" clip-rule="evenodd" d="M24.4649 31.1672L37.4301 44.1324L34.8374 46.7251L20.5759 32.4636C20.2322 32.1197 20.0391 31.6534 20.0391 31.1672C20.0391 30.681 20.2322 30.2147 20.5759 29.8709L34.8374 15.6094L37.4301 18.202L24.4649 31.1672Z" fill="white"></path> </g> <defs> <clipPath id="clip0_89_511"> <rect width="22.0028" height="44.0057" fill="white" transform="translate(20.1719 9.16406)"></rect> </clipPath> </defs> </svg>`,
        }}
      />
    </button>
  );
};
