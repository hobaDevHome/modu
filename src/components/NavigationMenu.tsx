import React from "react";
import { NavigationItem } from "./types";

interface NavigationMenuProps {
  items: NavigationItem[];
  className?: string;
}

export const NavigationMenu: React.FC<NavigationMenuProps> = ({
  items,
  className = "flex gap-6 text-2xl text-white max-sm:hidden",
}) => {
  return (
    <nav className={className}>
      {items.map((item, index) => (
        <a key={index} href={item.href} className="hover:underline">
          {item.label}
        </a>
      ))}
    </nav>
  );
};
