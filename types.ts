
import type React from 'react';

export interface NavLink {
  href: string;
  label: string;
}

export interface Belief {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface PortfolioItem {
  id: number;
  imageUrl: string;
  title: string;
  category: string;
}

export interface SocialLink {
    href: string;
    icon: React.ReactNode;
}

export interface ContactInfo {
    address: string;
    email: string;
    phone: string;
}

export interface Testimonial {
    name: string;
    company: string;
    feedback: string;
}
