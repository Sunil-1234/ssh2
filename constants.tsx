
import React from 'react';
import type { NavLink, Belief, Service, PortfolioItem, SocialLink, ContactInfo, Testimonial } from './types';

// Icons
const QualityIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
const CommunicationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);
const InnovationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);
const WebDevIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
);
const MobileDevIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
);
const CustomSoftwareIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" /></svg>
);
const EcommerceIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
);
const CloudIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
);
const AiIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
);

// Navigation
export const NAV_LINKS: NavLink[] = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#services', label: 'Services' },
   { href: '#portfolio', label: 'Portfolio' },
  { href: '#contact', label: 'Contact Us' },
];

// About Us Beliefs
export const BELIEFS: Belief[] = [
  {
    icon: <QualityIcon />,
    title: 'We Believe in Quality',
    description: 'We are committed to providing our clients with the highest quality software. We use the latest technologies and best practices to ensure that our software is reliable, scalable, and secure.'
  },
  {
    icon: <CommunicationIcon />,
    title: 'We Believe in Communication',
    description: 'We believe that communication is key to a successful project. We work closely with our clients to ensure that we understand their needs and that they are kept up-to-date on our progress.'
  },
  {
    icon: <InnovationIcon />,
    title: 'We Believe in Innovation',
    description: 'We are constantly looking for new ways to improve our software and services. We are not afraid to try new things and we are always looking for ways to push the boundaries of what is possible.'
  }
];

// Services
export const SERVICES: Service[] = [
  {
    icon: <WebDevIcon />,
    title: 'Web Development',
    description: 'Creating stunning, responsive, and high-performance websites tailored to your business needs.'
  },
  {
    icon: <MobileDevIcon />,
    title: 'Mobile App Development',
    description: 'Building intuitive and engaging mobile applications for both iOS and Android platforms.'
  },
  {
    icon: <CustomSoftwareIcon />,
    title: 'Custom Software',
    description: 'Developing bespoke software solutions to solve unique business challenges and streamline operations.'
  },
  {
    icon: <EcommerceIcon />,
    title: 'E-commerce Development',
    description: 'Crafting powerful e-commerce platforms that drive sales and provide seamless customer experiences.'
  },
  {
    icon: <CloudIcon />,
    title: 'Cloud Computing',
    description: 'Leveraging cloud platforms like AWS and Azure for scalable, secure, and cost-effective infrastructure.'
  },
  {
    icon: <AiIcon />,
    title: 'AI & Machine Learning',
    description: 'Implementing intelligent solutions to automate processes, analyze data, and drive business growth.'
  }
];

// Portfolio
export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  { id: 1, imageUrl: 'https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=600&h=400&auto=format&fit=crop', title: 'Corporate Website Redesign', category: 'Web Development' },
  { id: 2, imageUrl: 'https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg?semt=ais_hybrid&w=740&q=80', title: 'Mobile Banking App', category: 'Mobile App' },
  { id: 3, imageUrl: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=600&h=400&auto=format&fit=crop', title: 'E-commerce Platform', category: 'E-commerce' },
  { id: 4, imageUrl: 'https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=600&h=400&auto=format&fit=crop', title: 'Cloud Data Migration', category: 'Cloud Computing' },
  { id: 5, imageUrl: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_Inventory_Management.jpg', title: 'Inventory Management System', category: 'Custom Software' },
  { id: 6, imageUrl: 'https://www.shutterstock.com/image-photo/person-using-smartphone-interact-friendly-600nw-2482428287.jpg', title: 'AI-Powered Chatbot', category: 'AI & ML' },
];

// Testimonials
export const TESTIMONIALS: Testimonial[] = [
    {
        name: 'Aarav Sharma',
        company: 'Innovate India',
        feedback: 'SSH SoftTech transformed our operations with a custom software solution. Their team is professional, dedicated, and incredibly talented. The project was delivered on time and exceeded our expectations. Highly recommended!'
    },
    {
        name: 'Priya Patel',
        company: 'Digital Ventures',
        feedback: 'Working with SSH SoftTech on our mobile app was a fantastic experience. They understood our vision perfectly and brought it to life with a beautiful, user-friendly design. Their communication was excellent throughout the process.'
    },
    {
        name: 'Rohan Gupta',
        company: 'E-Cart Solutions',
        feedback: 'The e-commerce platform they built for us is robust, scalable, and has significantly boosted our online sales. We are extremely satisfied with the results and their ongoing support.'
    }
];

export const GOOGLE_FORM_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSfJh9u8Kh6gud3uFbkXWe2uDv6QED82sGZUkj4I_f1U2FZ19w/viewform?usp=publish-editor";


// Contact Info
export const CONTACT_INFO: ContactInfo = {
    address: 'SSH Softtech Solutions Private Limited, Digha, Patna - 800013',
    email: 'connect@sshsofttech.com',
    phone: '+91 83038 94288',
};
