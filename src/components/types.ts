// Common types used across components

export interface Product {
  id: string;
  name: string;
  price: string;
  rating: string;
  image: string;
  alt: string;
}

export interface SocialIcon {
  id: string;
  svg: string;
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface TeamMemberType {
  name: string;
  imageUrl: string;
}

export interface VisionItemType {
  imageUrl: string;
  title: string;
  description: string;
}
